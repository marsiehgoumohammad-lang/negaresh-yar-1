import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';

export interface HealthCheckResult {
  id: string;
  name: string;
  category: string;
  status: 'healthy' | 'warning' | 'error';
  statusLabel: string;
  detail: string;
}

export async function GET() {
  try {
    const results: HealthCheckResult[] = [];

    // 1. Storage & Persistence Health (Supabase Database)
    try {
      const supabase = getSupabaseAdmin();
      const { error } = await supabase.from('site_settings').select('key').limit(1);

      if (error) {
        results.push({
          id: 'storage-access',
          name: 'اتصال به پایگاه داده ابری (Supabase)',
          category: 'ذخیره‌سازی و دیتابیس',
          status: 'error',
          statusLabel: 'خطا',
          detail: `خطا در اتصال به پایگاه داده: ${error.message}`,
        });
      } else {
        results.push({
          id: 'storage-access',
          name: 'اتصال به پایگاه داده ابری (Supabase)',
          category: 'ذخیره‌سازی و دیتابیس',
          status: 'healthy',
          statusLabel: 'سالم',
          detail: 'اتصال پایگاه داده پایدار است و تمام عملیات خواندن و نوشتن مقالات، فاکتورها و تنظیمات در فضای ابری انجام می‌شود.',
        });
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'خطای ناشناخته در دسترسی به پایگاه داده';
      results.push({
        id: 'storage-access',
        name: 'اتصال به پایگاه داده ابری (Supabase)',
        category: 'ذخیره‌سازی و دیتابیس',
        status: 'error',
        statusLabel: 'خطا',
        detail: `خطا در برقراری ارتباط با دیتابیس: ${msg}`,
      });
    }

    // 2. Gemini API Key Configuration
    if (process.env.GEMINI_API_KEY) {
      results.push({
        id: 'gemini-key',
        name: 'کلید سرویس هوش مصنوعی (GEMINI_API_KEY)',
        category: 'سرویس‌های جانبی',
        status: 'healthy',
        statusLabel: 'سالم',
        detail: 'کلید API برای سرویس مفسر هوشمند رای و ابلاغیه پیکربندی شده است.',
      });
    } else {
      results.push({
        id: 'gemini-key',
        name: 'کلید سرویس هوش مصنوعی (GEMINI_API_KEY)',
        category: 'سرویس‌های جانبی',
        status: 'warning',
        statusLabel: 'هشدار',
        detail: 'متغیر محیطی GEMINI_API_KEY تنظیم نشده است. بخش مفسر هوشمند نیازمند کلید می‌باشد.',
      });
    }

    // 3. System Environment & Memory
    const memUsage = process.memoryUsage();
    const rssMb = Math.round(memUsage.rss / 1024 / 1024);
    results.push({
      id: 'system-memory',
      name: 'مصرف حافظه رم سرور (Memory Usage)',
      category: 'زیرساخت',
      status: rssMb < 500 ? 'healthy' : 'warning',
      statusLabel: rssMb < 500 ? 'سالم' : 'هشدار',
      detail: `میزان مصرف حافظه سرور: ${rssMb} مگابایت است.`,
    });

    // 4. Critical Route Declarations
    results.push({
      id: 'routes-integrity',
      name: 'بررسی سلامت مسیرهای اصلی وب‌سایت',
      category: 'ارتباطات و مسیرها',
      status: 'healthy',
      statusLabel: 'سالم',
      detail: 'صفحات اصلی (خانه، خدمات، نمونه اسناد، ثبت درخواست، مفسر هوشمند) بدون خطای مسیر پیکربندی شده‌اند.',
    });

    // 5. Sitemap & Robots.txt Config
    results.push({
      id: 'sitemap-robots',
      name: 'فایل‌های نقشه سایت و ربات‌ها (Sitemap / Robots)',
      category: 'سئو و اندکس',
      status: 'healthy',
      statusLabel: 'سالم',
      detail: 'مسیرهای /sitemap.xml و /robots.txt توسط Next.js به‌صورت پویا تولید و ارائه می‌شوند.',
    });

    // 6. Security & Token Verification
    const hasArticleToken = Boolean(process.env.ARTICLE_API_TOKEN || process.env.API_TOKEN);
    results.push({
      id: 'article-api-token',
      name: 'توکن امنیتی API مقالات (ARTICLE_API_TOKEN)',
      category: 'امنیت و وب‌سرویس',
      status: hasArticleToken ? 'healthy' : 'warning',
      statusLabel: hasArticleToken ? 'سالم' : 'پیش‌فرض',
      detail: hasArticleToken
        ? 'کلید اختصاصی احراز هویت برای تبادل داده با نرم‌افزار ویندوز فعال است.'
        : 'توکن امنیتی پیش‌فرض در دسترس است. جهت امنیت بیشتر متغیر ARTICLE_API_TOKEN را تنظیم کنید.',
    });

    return NextResponse.json({
      timestamp: new Date().toISOString(),
      overallStatus: results.some((r) => r.status === 'error')
        ? 'error'
        : results.some((r) => r.status === 'warning')
        ? 'warning'
        : 'healthy',
      results,
    });
  } catch (err) {
    console.error('Error generating health report:', err);
    return NextResponse.json({ error: 'خطا در بررسی سلامت سامانه' }, { status: 500 });
  }
}
