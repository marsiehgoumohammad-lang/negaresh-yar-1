import { NextRequest, NextResponse } from 'next/server';
import { getMessengersConfig, saveMessengersConfig, MessengerConfig } from '@/lib/messengers-store';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const showAll = searchParams.get('all') === 'true';

  const allMessengers = await getMessengersConfig();

  if (showAll) {
    return NextResponse.json(allMessengers);
  }

  const activeMessengers = allMessengers.filter((m) => m.enabled);
  return NextResponse.json(activeMessengers);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!Array.isArray(body)) {
      return NextResponse.json(
        { error: 'ورودی نامعتبر است. آرایه‌ای از تنظیمات پیام‌رسان‌ها ارسال کنید.' },
        { status: 400 }
      );
    }

    const updatedConfig: MessengerConfig[] = body.map((item: Partial<MessengerConfig>, index: number) => ({
      id: item.id || `messenger-${index}`,
      name: item.name || 'پیام‌رسان',
      code: item.code || `code-${index}`,
      description: item.description || '',
      url: item.url || '#',
      enabled: item.enabled !== undefined ? Boolean(item.enabled) : true,
      order: typeof item.order === 'number' ? item.order : index + 1,
      icon: item.icon || '/icons/messengers/telegram.svg',
      color: item.color || '#E5C158',
      badge: item.badge || '',
    }));

    const success = await saveMessengersConfig(updatedConfig);

    if (!success) {
      return NextResponse.json(
        { error: 'خطا در ذخیره‌سازی تنظیمات در پایگاه داده.' },
        { status: 500 }
      );
    }

    const refreshed = await getMessengersConfig();

    return NextResponse.json({
      message: 'تنظیمات پیام‌رسان‌ها با موفقیت به‌روزرسانی شد.',
      messengers: refreshed,
    });
  } catch (err) {
    console.error('API messengers update error:', err);
    return NextResponse.json(
      { error: 'خطا در پردازش درخواست به‌روزرسانی.' },
      { status: 500 }
    );
  }
}
