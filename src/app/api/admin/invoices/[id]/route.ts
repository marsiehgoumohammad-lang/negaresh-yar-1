import { NextRequest, NextResponse } from 'next/server';
import { updateInvoice, updateInvoiceStatus, deleteInvoice, getInvoices } from '@/lib/stores/invoices-store';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const invoices = getInvoices();
    const found = invoices.find((inv) => inv.id === id);
    if (!found) {
      return NextResponse.json({ error: 'فاکتور مورد نظر یافت نشد' }, { status: 404 });
    }
    return NextResponse.json({ invoice: found });
  } catch (err) {
    console.error('Error GET /api/admin/invoices/[id]:', err);
    return NextResponse.json({ error: 'خطا در دریافت فاکتور' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await req.json();

    if (body.action === 'change_status' && body.status) {
      const updated = updateInvoiceStatus(id, body.status);
      if (!updated) {
        return NextResponse.json({ error: 'فاکتور یافت نشد' }, { status: 404 });
      }
      return NextResponse.json({ message: 'وضعیت فاکتور به‌روزرسانی شد', invoice: updated });
    }

    const updated = updateInvoice(id, body);
    if (!updated) {
      return NextResponse.json({ error: 'فاکتور یافت نشد' }, { status: 404 });
    }

    return NextResponse.json({ message: 'فاکتور با موفقیت ویرایش شد', invoice: updated });
  } catch (err) {
    console.error('Error PUT /api/admin/invoices/[id]:', err);
    return NextResponse.json({ error: 'خطا در ویرایش فاکتور' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const success = deleteInvoice(id);
    if (!success) {
      return NextResponse.json({ error: 'فاکتور یافت نشد یا حذف نگردید' }, { status: 404 });
    }
    return NextResponse.json({ message: 'فاکتور با موفقیت حذف گردید' });
  } catch (err) {
    console.error('Error DELETE /api/admin/invoices/[id]:', err);
    return NextResponse.json({ error: 'خطا در حذف فاکتور' }, { status: 500 });
  }
}
