import fs from 'fs';
import path from 'path';
import { Invoice } from './types';
import { syncCustomersFromInvoices } from './customers-store';
import { getSettings, incrementNextInvoiceNumber } from './settings-store';
import { normalizePhoneNumber } from '../utils/phone';

const DATA_DIR = path.join(process.cwd(), 'data');
const FILE_PATH = path.join(DATA_DIR, 'invoices.json');

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

let inMemoryInvoices: Invoice[] | null = null;

export function getInvoices(): Invoice[] {
  if (inMemoryInvoices !== null) {
    return inMemoryInvoices;
  }

  try {
    if (fs.existsSync(FILE_PATH)) {
      const data = fs.readFileSync(FILE_PATH, 'utf-8');
      const parsed = JSON.parse(data) as Invoice[];
      if (Array.isArray(parsed)) {
        inMemoryInvoices = parsed;
        return parsed;
      }
    }
  } catch (err) {
    console.error('Error reading invoices file:', err);
  }

  const initial = getInitialSampleInvoices();
  saveInvoices(initial);
  return initial;
}

export function saveInvoices(invoices: Invoice[]): boolean {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    inMemoryInvoices = invoices;
    fs.writeFileSync(FILE_PATH, JSON.stringify(invoices, null, 2), 'utf-8');
    syncCustomersFromInvoices(invoices);
    return true;
  } catch (err) {
    console.error('Error saving invoices file:', err);
    if (inMemoryInvoices !== null) return true;
    return false;
  }
}

export function generateNextInvoiceNumber(): string {
  const settings = getSettings();
  const nextNum = settings.nextInvoiceNumber || 1001;
  const prefix = settings.invoicePrefix || 'NY-1403-';
  return `${prefix}${nextNum}`;
}

export function createInvoice(invoiceData: Omit<Invoice, 'id' | 'createdAt' | 'updatedAt' | 'invoiceNumber'> & { invoiceNumber?: string }): Invoice {
  const current = getInvoices();

  const num = invoiceData.invoiceNumber || generateNextInvoiceNumber();
  if (!invoiceData.invoiceNumber) {
    incrementNextInvoiceNumber();
  }

  const normalizedPhone = normalizePhoneNumber(invoiceData.customerPhone);

  const newInvoice: Invoice = {
    ...invoiceData,
    id: `inv-${Date.now()}`,
    invoiceNumber: num,
    customerPhone: normalizedPhone || invoiceData.customerPhone,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const updated = [newInvoice, ...current];
  saveInvoices(updated);
  return newInvoice;
}

export function updateInvoice(id: string, updates: Partial<Invoice>): Invoice | null {
  const current = getInvoices();
  const index = current.findIndex((inv) => inv.id === id);
  if (index === -1) return null;

  const updatedInvoice: Invoice = {
    ...current[index],
    ...updates,
    customerPhone: updates.customerPhone ? normalizePhoneNumber(updates.customerPhone) : current[index].customerPhone,
    updatedAt: new Date().toISOString(),
  };

  current[index] = updatedInvoice;
  saveInvoices(current);
  return updatedInvoice;
}

export function updateInvoiceStatus(id: string, status: Invoice['status']): Invoice | null {
  return updateInvoice(id, { status });
}

export function deleteInvoice(id: string): boolean {
  const current = getInvoices();
  const filtered = current.filter((inv) => inv.id !== id);
  if (filtered.length === current.length) return false;
  return saveInvoices(filtered);
}
