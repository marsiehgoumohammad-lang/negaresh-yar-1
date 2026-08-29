import { NextRequest, NextResponse } from 'next/server';
import { getInvoices, createInvoice } from '@/lib/stores/invoices-store';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get('status');
    const query = searchParams.get('q');

    let invoices = await getInvoices();

    if (status && status !== 'all') {
      invoices = invoices.filter((inv) => inv.status === status);
    }

    if (query && query.trim()) {
      const q = query.trim().toLowerCase();
      invoices = invoices.filter(
        (inv) =>
          inv.customerName.toLowerCase().includes(q) ||
          inv.customerPhone.includes(q) ||
          inv.invoiceNumber.toLowerCase().includes(q)
      );
    }

    return NextResponse.json({ invoices });
  } catch (err) {
    console.error('Error in GET /api/admin/invoices:', err);
    return NextResponse.json({ error: 'خطا در دریافت لیست فاکتورها' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.customerName || !body.customerPhone || !Array.isArray(body.items) || body.items.length === 0) {
      return NextResponse.json(
        { error: 'نام مشتری، شماره تماس و حداقل یک آیتم برای ایجاد فاکتور الزامی است.' },
        { status: 400 }
      );
    }

    const created = await createInvoice({
      customerName: body.customerName,
      customerPhone: body.customerPhone,
      issueDate: body.issueDate || new Date().toLocaleDateString('fa-IR'),
      items: body.items,
      subtotal: body.subtotal || 0,
      discount: body.discount || 0,
      total: body.total || 0,
      status: body.status || 'unpaid',
      notes: body.notes || '',
      invoiceNumber: body.invoiceNumber,
    });

    return NextResponse.json({ message: 'فاکتور با موفقیت ایجاد شد', invoice: created });
  } catch (err) {
    console.error('Error in POST /api/admin/invoices:', err);
    return NextResponse.json({ error: 'خطا در ثبت فاکتور جدید' }, { status: 500 });
  }
}
