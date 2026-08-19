import { Invoice } from './types';
import { syncCustomersFromInvoices } from './customers-store';
import { getSettings, incrementNextInvoiceNumber } from './settings-store';
import { normalizePhoneNumber } from '../utils/phone';
import { getSupabaseAdmin, isSupabaseConfigured } from '@/lib/supabase';
import { SupabaseClient } from '@supabase/supabase-js';

function getInitialSampleInvoices(): Invoice[] {
  const now = new Date();
  const todayStr = new Date().toLocaleDateString('fa-IR');
  const isoNow = now.toISOString();

  return [
    {
      id: 'inv-1001',
      invoiceNumber: 'NY-1403-1001',
      issueDate: todayStr,
      customerName: 'رضا محمدی',
      customerPhone: '09123456789',
      items: [
        {
          id: 'item-1',
          serviceId: 'srv-1',
          description: 'تنظیم تخصصی دادخواست مطالبه وجه چك و خسارت تاخیر تادیه',
          quantity: 1,
          unitPrice: 450000,
          total: 450000,
        },
      ],
      subtotal: 450000,
      discount: 0,
      total: 450000,
      status: 'paid',
      notes: 'پرداخت از طریق کارت به کارت - تحویل فایل ودیعه ثنا',
      createdAt: isoNow,
      updatedAt: isoNow,
    },
    {
      id: 'inv-1002',
      invoiceNumber: 'NY-1403-1002',
      issueDate: todayStr,
      customerName: 'سارا احمدی',
      customerPhone: '09351234567',
      items: [
        {
          id: 'item-2',
          serviceId: 'srv-2',
          description: 'تنظیم لایحه تجدیدنظرخواهی دادگاه کیفری ۲ مشهد',
          quantity: 1,
          unitPrice: 650000,
          total: 650000,
        },
      ],
      subtotal: 650000,
      discount: 50000,
      total: 600000,
      status: 'unpaid',
      notes: 'پیگیری ارسال لایحه در مهلت ۲۰ روزه ثنا',
      createdAt: isoNow,
      updatedAt: isoNow,
    },
    {
      id: 'inv-1003',
      invoiceNumber: 'NY-1403-1003',
      issueDate: todayStr,
      customerName: 'امیرحسین رضایی',
      customerPhone: '09159876543',
      items: [
        {
          id: 'item-3',
          serviceId: 'srv-4',
          description: 'ثبت‌نام و اخذ گواهی امضا الکترونیک جهت شرکت در مزایده خودرو گمرک',
          quantity: 1,
          unitPrice: 350000,
          total: 350000,
        },
        {
          id: 'item-4',
          serviceId: 'srv-7',
          description: 'استعلام و ثبت گواهی عدم سوء‌پیشینه در سامانه عدل ایران',
          quantity: 1,
          unitPrice: 150000,
          total: 150000,
        },
      ],
      subtotal: 500000,
      discount: 0,
      total: 500000,
      status: 'unpaid',
      notes: 'ارسال مدارک در ایتا انجام شده است',
      createdAt: isoNow,
      updatedAt: isoNow,
    },
  ];
}

function parseInvoiceNumber(invNumStr?: string): number {
  if (!invNumStr) return 1001;
  const digits = invNumStr.replace(/\D/g, '');
  return digits ? parseInt(digits.slice(-6), 10) : 1001;
}

function mapRowToInvoice(row: Record<string, unknown>): Invoice {
  const meta = (typeof row.metadata === 'object' && row.metadata !== null) ? (row.metadata as Record<string, unknown>) : {};
  let status: Invoice['status'] = 'unpaid';
  if (row.status === 'paid') status = 'paid';
  else if (row.status === 'cancelled') status = 'cancelled';
  else if (meta.status === 'unpaid' || row.status === 'issued' || row.status === 'draft') status = 'unpaid';

  return {
    id: (meta.customId as string) || (row.id as string),
    invoiceNumber: (meta.invoiceNumber as string) || (row.invoice_number ? `NY-1403-${row.invoice_number}` : 'NY-1403-1001'),
    issueDate: (meta.issueDate as string) || (row.created_at ? new Date(row.created_at as string).toLocaleDateString('fa-IR') : ''),
    customerName: (meta.customerName as string) || 'مشتری',
    customerPhone: (meta.customerPhone as string) || '',
    items: Array.isArray(meta.items) ? (meta.items as Invoice['items']) : [],
    subtotal: Number(row.subtotal) || Number(meta.subtotal) || 0,
    discount: Number(row.discount) || Number(meta.discount) || 0,
    total: Number(row.total) || Number(meta.total) || 0,
    status,
    notes: (row.notes as string) || (meta.notes as string) || '',
    createdAt: (row.created_at as string) || new Date().toISOString(),
    updatedAt: (row.updated_at as string) || new Date().toISOString(),
  };
}

function mapInvoiceToRow(invoice: Invoice) {
  let dbStatus = 'issued';
  if (invoice.status === 'paid') dbStatus = 'paid';
  else if (invoice.status === 'cancelled') dbStatus = 'cancelled';

  const numericNum = parseInvoiceNumber(invoice.invoiceNumber);

  return {
    invoice_number: numericNum,
    status: dbStatus,
    subtotal: invoice.subtotal || 0,
    discount: invoice.discount || 0,
    tax: 0,
    total: invoice.total || 0,
    notes: invoice.notes || '',
    metadata: {
      customId: invoice.id,
      invoiceNumber: invoice.invoiceNumber,
      issueDate: invoice.issueDate,
      customerName: invoice.customerName,
      customerPhone: invoice.customerPhone,
      status: invoice.status,
      items: invoice.items,
    },
    updated_at: new Date().toISOString(),
  };
}

let inMemoryInvoices: Invoice[] | null = null;
let isSeedingInvoices = false;

async function seedInitialInvoicesIfEmpty(supabase: SupabaseClient) {
  if (isSeedingInvoices) return;
  isSeedingInvoices = true;
  try {
    const { count, error } = await supabase.from('invoices').select('*', { count: 'exact', head: true });
    if (!error && (count === 0 || count === null)) {
      const initial = getInitialSampleInvoices();
      for (const inv of initial) {
        const row = mapInvoiceToRow(inv);
        await supabase.from('invoices').insert(row);
      }
    }
  } catch (err) {
    console.error('Error seeding initial invoices to Supabase:', err);
  } finally {
    isSeedingInvoices = false;
  }
}

export async function getInvoices(): Promise<Invoice[]> {
  try {
    if (!isSupabaseConfigured()) {
      return inMemoryInvoices || getInitialSampleInvoices();
    }
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from('invoices')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.warn('Reading invoices from Supabase fallback:', error.message);
      return inMemoryInvoices || getInitialSampleInvoices();
    }

    if (!data || data.length === 0) {
      seedInitialInvoicesIfEmpty(supabase);
      const initial = getInitialSampleInvoices();
      inMemoryInvoices = initial;
      return initial;
    }

    const invoices = data.map(mapRowToInvoice);
    inMemoryInvoices = invoices;
    syncCustomersFromInvoices(invoices);
    return invoices;
  } catch (err) {
    console.warn('Exception in getInvoices() (falling back to initial):', err);
    return inMemoryInvoices || getInitialSampleInvoices();
  }
}

export async function generateNextInvoiceNumber(): Promise<string> {
  const settings = await getSettings();
  const nextNum = settings.nextInvoiceNumber || 1001;
  const prefix = settings.invoicePrefix || 'NY-1403-';
  return `${prefix}${nextNum}`;
}

export async function createInvoice(
  invoiceData: Omit<Invoice, 'id' | 'createdAt' | 'updatedAt' | 'invoiceNumber'> & { invoiceNumber?: string }
): Promise<Invoice> {
  const num = invoiceData.invoiceNumber || (await generateNextInvoiceNumber());
  if (!invoiceData.invoiceNumber) {
    await incrementNextInvoiceNumber();
  }

  const normalizedPhone = normalizePhoneNumber(invoiceData.customerPhone);
  const now = new Date().toISOString();

  const newInvoice: Invoice = {
    ...invoiceData,
    id: `inv-${Date.now()}`,
    invoiceNumber: num,
    customerPhone: normalizedPhone || invoiceData.customerPhone,
    createdAt: now,
    updatedAt: now,
  };

  try {
    const supabase = getSupabaseAdmin();
    const row = mapInvoiceToRow(newInvoice);
    const { data, error } = await supabase.from('invoices').insert(row).select().single();

    if (error) {
      console.error('Error inserting invoice in Supabase:', error);
    } else if (data) {
      const saved = mapRowToInvoice(data);
      if (inMemoryInvoices) {
        inMemoryInvoices = [saved, ...inMemoryInvoices];
      }
      syncCustomersFromInvoices(inMemoryInvoices || [saved]);
      return saved;
    }
  } catch (err) {
    console.error('Exception in createInvoice():', err);
  }

  if (inMemoryInvoices) {
    inMemoryInvoices = [newInvoice, ...inMemoryInvoices];
  } else {
    inMemoryInvoices = [newInvoice];
  }
  syncCustomersFromInvoices(inMemoryInvoices);
  return newInvoice;
}

export async function updateInvoice(id: string, updates: Partial<Invoice>): Promise<Invoice | null> {
  try {
    const supabase = getSupabaseAdmin();
    const currentList = await getInvoices();
    const existing = currentList.find((inv) => inv.id === id);
    if (!existing) return null;

    const updatedInvoice: Invoice = {
      ...existing,
      ...updates,
      customerPhone: updates.customerPhone ? normalizePhoneNumber(updates.customerPhone) : existing.customerPhone,
      updatedAt: new Date().toISOString(),
    };

    const row = mapInvoiceToRow(updatedInvoice);

    // Try finding the row in Supabase by matching metadata customId or uuid
    const { data: matchedRows } = await supabase
      .from('invoices')
      .select('*');

    const targetRow = matchedRows?.find((r) => {
      const meta = (typeof r.metadata === 'object' && r.metadata !== null) ? r.metadata : {};
      return meta.customId === id || r.id === id;
    });

    if (targetRow) {
      await supabase.from('invoices').update(row).eq('id', targetRow.id);
    } else {
      await supabase.from('invoices').insert(row);
    }

    if (inMemoryInvoices) {
      const idx = inMemoryInvoices.findIndex((inv) => inv.id === id);
      if (idx !== -1) inMemoryInvoices[idx] = updatedInvoice;
    }
    syncCustomersFromInvoices(inMemoryInvoices || [updatedInvoice]);
    return updatedInvoice;
  } catch (err) {
    console.error('Exception in updateInvoice():', err);
    return null;
  }
}

export async function updateInvoiceStatus(id: string, status: Invoice['status']): Promise<Invoice | null> {
  return updateInvoice(id, { status });
}

export async function deleteInvoice(id: string): Promise<boolean> {
  try {
    const supabase = getSupabaseAdmin();
    const { data: matchedRows } = await supabase.from('invoices').select('*');

    const targetRow = matchedRows?.find((r) => {
      const meta = (typeof r.metadata === 'object' && r.metadata !== null) ? r.metadata : {};
      return meta.customId === id || r.id === id;
    });

    if (targetRow) {
      await supabase.from('invoices').delete().eq('id', targetRow.id);
    }

    if (inMemoryInvoices) {
      inMemoryInvoices = inMemoryInvoices.filter((inv) => inv.id !== id);
      syncCustomersFromInvoices(inMemoryInvoices);
    }
    return true;
  } catch (err) {
    console.error('Exception in deleteInvoice():', err);
    return false;
  }
}
