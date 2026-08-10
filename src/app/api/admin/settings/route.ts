import { NextRequest, NextResponse } from 'next/server';
import { getSettings, saveSettings } from '@/lib/stores/settings-store';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const settings = getSettings();
    return NextResponse.json({ settings });
  } catch (err) {
    console.error('Error GET /api/admin/settings:', err);
    return NextResponse.json({ error: 'خطا در دریافت تنظیمات' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const updated = saveSettings(body);
    return NextResponse.json({ message: 'تنظیمات با موفقیت ذخیره گردید', settings: updated });
  } catch (err) {
    console.error('Error POST /api/admin/settings:', err);
    return NextResponse.json({ error: 'خطا در ذخیره‌سازی تنظیمات' }, { status: 500 });
  }
}
