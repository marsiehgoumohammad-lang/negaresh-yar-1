import { NextRequest, NextResponse } from 'next/server';
import { getServices, addService } from '@/lib/stores/services-store';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const services = getServices();
    return NextResponse.json({ services });
  } catch (err) {
    console.error('Error GET /api/admin/services:', err);
    return NextResponse.json({ error: 'خطا در دریافت لیست خدمات' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.name || typeof body.defaultPrice !== 'number') {
      return NextResponse.json({ error: 'نام خدمت و قیمت پیش‌فرض الزامی است.' }, { status: 400 });
    }

    const created = addService({
      name: body.name,
      category: body.category || 'عمومی',
      defaultPrice: body.defaultPrice,
      description: body.description || '',
      enabled: body.enabled !== undefined ? Boolean(body.enabled) : true,
    });

    return NextResponse.json({ message: 'خدمت با موفقیت ایجاد شد', service: created });
  } catch (err) {
    console.error('Error POST /api/admin/services:', err);
    return NextResponse.json({ error: 'خطا در افزودن خدمت جدید' }, { status: 500 });
  }
}
