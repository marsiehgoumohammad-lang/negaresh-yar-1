import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { DebtDelayCalculatorClient } from '@/components/calculators/DebtDelayCalculatorClient';
import { ChevronLeft, Calculator, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'محاسبه آنلاین خسارت تاخیر تادیه دین و چک (ماده ۵۲۲) - نگارش یار',
  description:
    'محاسبه آنلاین و دقیق خسارت تاخیر تادیه بدهی، چک صیادی، سفته و دیون مالی بر اساس ماده ۵۲۲ قانون آیین دادرسی مدنی و شاخص تورم رسمی بانک مرکزی.',
  keywords: [
    'محاسبه تاخیر تادیه دین',
    'محاسبه آنلاین خسارت تاخیر تادیه چک',
    'فرمول محاسبه تاخیر تادیه ماده ۵۲۲',
    'محاسبه دیرکرد سفته',
    'محاسبه طلب و بدهی به نرخ روز',
    'جدول شاخص بانک مرکزی تاخیر تادیه',
    'محاسبه دیرکرد چک برگشتی',
  ],
  alternates: {
    canonical: 'https://negaresh-yar.ir/calculators/debt-delay',
  },
  openGraph: {
    title: 'محاسبه‌گر خسارت تاخیر تادیه بدهی و دین (ماده ۵۲۲) | نگارش یار',
    description: 'محاسبه آنلاین خسارت تاخیر تادیه چک، سفته و طلب مالی با فرمول رسمی دادگاه و شاخص بانک مرکزی.',
    url: 'https://negaresh-yar.ir/calculators/debt-delay',
    siteName: 'نگارش یار',
    locale: 'fa_IR',
    type: 'website',
  },
};

export default function DebtDelayCalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'محاسبه‌گر آنلاین تاخیر تادیه دین نگارش یار',
        operatingSystem: 'All',
        applicationCategory: 'BusinessApplication',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'IRR',
        },
        description: 'ابزار محاسبه خسارت تاخیر تادیه بدهی بر اساس ماده ۵۲۲ قانون آیین دادرسی مدنی و شاخص تورم بانک مرکزی',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'صفحه اصلی', item: 'https://negaresh-yar.ir' },
          { '@type': 'ListItem', position: 2, name: 'محاسبه‌گرهای حقوقی', item: 'https://negaresh-yar.ir/calculators' },
          { '@type': 'ListItem', position: 3, name: 'محاسبه‌گر تاخیر تادیه دین', item: 'https://negaresh-yar.ir/calculators/debt-delay' },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#070B15] text-slate-100 py-8 sm:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container>
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6 sm:mb-8" aria-label="راهنمای مسیر">
          <Link href="/" className="hover:text-white transition-colors">
            صفحه اصلی
          </Link>
          <ChevronLeft className="w-3.5 h-3.5" />
          <Link href="/calculators" className="hover:text-white transition-colors">
            محاسبه‌گرهای حقوقی
          </Link>
          <ChevronLeft className="w-3.5 h-3.5" />
          <span className="text-[#E5C158] font-bold">محاسبه‌گر تاخیر تادیه دین</span>
        </nav>

        {/* Header Hero */}
        <div className="max-w-3xl mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-bold">
            <Calculator className="w-3.5 h-3.5" />
            <span>مستند به ماده ۵۲۲ قانون آیین دادرسی دادگاه‌های عمومی و انقلاب در امور مدنی</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
            محاسبه آنلاین خسارت تاخیر تادیه بدهی و چک
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            با وارد کردن اصل مبلغ بدهی و تعیین سال سررسید و سال تادیه، خسارت دیرکرد قانونی و مجموع بدهی را مطابق با رویه قضایی دادگاه‌های حقوقی محاسبه نمایید.
          </p>
        </div>

        <DebtDelayCalculatorClient />

        {/* Related Cluster Resources */}
        <section className="mt-16 pt-12 border-t border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                راهنماها و خدمات مرتبط با خسارت تاخیر تادیه و مطالبات مالی
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                دسترسی مستقیم به خدمات نگارش اظهارنامه رسمی، دادخواست چک و الگوهای قضایی ماده ۵۲۲
              </p>
            </div>
            <Link
              href="/samples"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E5C158] hover:text-amber-300 transition-colors whitespace-nowrap self-start sm:self-auto"
            >
              <span>مشاهده همه نمونه اسناد</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/knowledge/what-is-legal-notice"
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-[#E5C158]/50 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 inline-block">
                  پایگاه دانش
                </span>
                <h3 className="text-sm font-bold text-white group-hover:text-[#E5C158] transition-colors">
                  نقش اظهارنامه در تاخیر تادیه
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  بررسی اثبات مطالبه طلب و تثبیت تاریخ مبدا خسارت دیرکرد بر اساس ماده ۱۵۶ و ۵۲۲.
                </p>
              </div>
              <div className="pt-4 flex items-center text-xs font-bold text-slate-300 group-hover:text-[#E5C158] transition-colors">
                <span>مطالعه مقاله</span>
                <ArrowLeft className="w-3 h-3 mr-1 group-hover:-translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/services/legal-notice"
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-[#E5C158]/50 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#E5C158]/10 text-[#E5C158] inline-block">
                  خدمت نگارش تخصصی
                </span>
                <h3 className="text-sm font-bold text-white group-hover:text-[#E5C158] transition-colors">
                  تنظیم اظهارنامه رسمی مطالبه طلب
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  اخطار رسمی و قانونی به بدهکار پیش از طرح دعوا برای تسویه دین و ثبت تاریخ مطالبه.
                </p>
              </div>
              <div className="pt-4 flex items-center text-xs font-bold text-[#E5C158] group-hover:text-amber-300 transition-colors">
                <span>سفارش تنظیم اظهارنامه</span>
                <ArrowLeft className="w-3 h-3 mr-1 group-hover:-translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/services/check-claim"
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-[#E5C158]/50 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 inline-block">
                  دعاوی اسناد تجاری
                </span>
                <h3 className="text-sm font-bold text-white group-hover:text-[#E5C158] transition-colors">
                  دادخواست مطالبه وجه چک با خسارت
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  مطالبه اصل وجه چک برگشتی و خسارت تاخیر تادیه از تاریخ سررسید مندرج در چک.
                </p>
              </div>
              <div className="pt-4 flex items-center text-xs font-bold text-slate-300 group-hover:text-[#E5C158] transition-colors">
                <span>مشاهده خدمت</span>
                <ArrowLeft className="w-3 h-3 mr-1 group-hover:-translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/samples/rent-deposit-claim"
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-[#E5C158]/50 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 inline-block">
                  دعاوی ملکی و استیجاری
                </span>
                <h3 className="text-sm font-bold text-white group-hover:text-[#E5C158] transition-colors">
                  دادخواست استرداد ودیعه با تاخیر تادیه
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  الگوی دادخواست مطالبه پول پیش مسکن به همراه خسارت تاخیر تادیه روزشمار.
                </p>
              </div>
              <div className="pt-4 flex items-center text-xs font-bold text-slate-300 group-hover:text-[#E5C158] transition-colors">
                <span>مشاهده نمونه سند</span>
                <ArrowLeft className="w-3 h-3 mr-1 group-hover:-translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}
