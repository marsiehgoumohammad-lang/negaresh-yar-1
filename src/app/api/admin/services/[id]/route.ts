import { NextRequest, NextResponse } from 'next/server';
import { updateService, deleteService } from '@/lib/stores/services-store';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await req.json();

    const updated = updateService(id, body);
    if (!updated) {
      return NextResponse.json({ error: 'خدمت مورد نظر یافت نشد' }, { status: 404 });
    }

    return NextResponse.json({ message: 'خدمت با موفقیت ویرایش شد', service: updated });
  } catch (err) {
    console.error('Error PUT /api/admin/services/[id]:', err);
    return NextResponse.json({ error: 'خطا در ویرایش خدمت' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const success = deleteService(id);
    if (!success) {
      return NextResponse.json({ error: 'خدمت مورد نظر یافت نشد' }, { status: 404 });
    }
    return NextResponse.json({ message: 'خدمت با موفقیت حذف گردید' });
  } catch (err) {
    console.error('Error DELETE /api/admin/services/[id]:', err);
    return NextResponse.json({ error: 'خطا در حذف خدمت' }, { status: 500 });
  }
}
