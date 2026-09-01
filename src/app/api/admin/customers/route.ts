import { NextRequest, NextResponse } from 'next/server';
import { getCustomers } from '@/lib/stores/customers-store';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('q') || '';

    let customers = await getCustomers();

    if (query.trim()) {
      const q = query.trim().toLowerCase();
      customers = customers.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.phone.includes(q) ||
          c.originalPhone.includes(q)
      );
    }

    return NextResponse.json({ customers });
  } catch (err) {
    console.error('Error GET /api/admin/customers:', err);
    return NextResponse.json({ error: 'خطا در دریافت لیست مشتریان' }, { status: 500 });
  }
}
