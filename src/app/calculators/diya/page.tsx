import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { DiyaCalculatorClient } from '@/components/calculators/DiyaCalculatorClient';
import { ChevronLeft, Calculator, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'محاسبه آنلاین دیه سال ۱۴۰۳ و اعضای بدن (جدول جراحات) - نگارش یار',
  description:
    'محاسبه‌گر آنلاین دیه سال ۱۴۰۳ مصوب قوه قضاییه (۱.۲ میلیارد تومان عادی و ۱.۶ میلیارد تومان ماه حرام)، محاسبه درصد ارش پزشکی قانونی، انواع جراحات (حارصه تا مامومه) و شکستگی استخوان.',
  keywords: [
    'محاسبه آنلاین دیه سال ۱۴۰۳',
    'جدول نرخ دیه سال ۱۴۰۳',
    'محاسبه دیه اعضای بدن',
    'دیه ماه حرام سال ۱۴۰۳',
    'محاسبه دیه حارصه دامیه متلاحمه',
    'دیه شکستگی دست و پا',
    'محاسبه درصد دیه پزشکی قانونی',
    'فرمول محاسبه دیه به روز',
  ],
  alternates: {
    canonical: 'https://negaresh-yar.ir/calculators/diya',
  },
  openGraph: {
    title: 'محاسبه‌گر آنلاین دیه ۱۴۰۳ و اعضای بدن | نگارش یار',
    description: 'محاسبه دقیق دیه سال ۱۴۰۳، درصد پزشکی قانونی، جراحات سر و صورت، شکستگی‌ها و اعضای بدن.',
    url: 'https://negaresh-yar.ir/calculators/diya',
    siteName: 'نگارش یار',
    locale: 'fa_IR',
    type: 'website',
  },
};

export default function DiyaCalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'محاسبه‌گر آنلاین دیه سال ۱۴۰۳ نگارش یار',
        operatingSystem: 'All',
        applicationCategory: 'BusinessApplication',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'IRR',
        },
        description: 'ابزار محاسبه آنلاین دیه سال ۱۴۰۳ مصوب قوه قضاییه، درصد پزشکی قانونی، جراحات و نقص عضو',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'صفحه اصلی', item: 'https://negaresh-yar.ir' },
          { '@type': 'ListItem', position: 2, name: 'محاسبه‌گرهای حقوقی', item: 'https://negaresh-yar.ir/calculators' },
          { '@type': 'ListItem', position: 3, name: 'محاسبه‌گر دیه سال ۱۴۰۳', item: 'https://negaresh-yar.ir/calculators/diya' },
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
          <span className="text-[#E5C158] font-bold">محاسبه‌گر دیه سال ۱۴۰۳</span>
        </nav>

        {/* Header Hero */}
        <div className="max-w-3xl mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-bold">
            <Calculator className="w-3.5 h-3.5" />
            <span>بخشنامه مصوب ریاست قوه قضاییه جمهوری اسلامی ایران</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
            محاسبه آنلاین نرخ دیه سال ۱۴۰۳ و اعضای بدن
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            محاسبه آنی ارزش ریالی درصد‌های قید شده در گواهی پزشکی قانونی، ماه‌های حرام و عادی، جدول جراحات فقهی سر و صورت (حارصه، دامیه و ...) و دیه شکستگی استخوان‌ها طبق قانون مجازات اسلامی.
          </p>
        </div>

        <DiyaCalculatorClient />

        {/* Related Cluster Resources */}
        <section className="mt-16 pt-12 border-t border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                راهنماها و خدمات مرتبط با اعسار و تقسیط دیه
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                دسترسی مستقیم به الگوهای تقسیط دیه تصادفات، قوانین اعسار ماده ۳ و خدمات نگارش دادخواست
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
              href="/samples/diya-installment-petition"
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-[#E5C158]/50 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 inline-block">
                  تقسیط دیه
                </span>
                <h3 className="text-sm font-bold text-white group-hover:text-[#E5C158] transition-colors">
                  دادخواست اعسار و تقسیط دیه
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  الگوی استاندارد تقسیط دیه تصادفات و حوادث کار با استناد به ماده ۳ و ۴ قانون محکومیت ها.
                </p>
              </div>
              <div className="pt-4 flex items-center text-xs font-bold text-slate-300 group-hover:text-[#E5C158] transition-colors">
                <span>مشاهده نمونه سند</span>
                <ArrowLeft className="w-3 h-3 mr-1 group-hover:-translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/knowledge/how-to-install-debt-and-mahrieh"
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-[#E5C158]/50 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 inline-block">
                  راهنمای حقوقی
                </span>
                <h3 className="text-sm font-bold text-white group-hover:text-[#E5C158] transition-colors">
                  تقسیط بدهی و آزادی زندانی
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  راهکارهای آزادی زندانیان مالی و دیه، اعسار از داخل زندان و تسهیلات ستاد دیه.
                </p>
              </div>
              <div className="pt-4 flex items-center text-xs font-bold text-slate-300 group-hover:text-[#E5C158] transition-colors">
                <span>مطالعه راهنما</span>
                <ArrowLeft className="w-3 h-3 mr-1 group-hover:-translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/knowledge/what-is-insolvency"
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-[#E5C158]/50 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 inline-block">
                  پایگاه دانش
                </span>
                <h3 className="text-sm font-bold text-white group-hover:text-[#E5C158] transition-colors">
                  اعسار چیست و چگونه ثبت می شود؟
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  قوانین مهلت ۳۰ روزه اجرای احکام، توقف حکم جلب، فرم دارایی ماده ۸ و استشهادیه شهود.
                </p>
              </div>
              <div className="pt-4 flex items-center text-xs font-bold text-slate-300 group-hover:text-[#E5C158] transition-colors">
                <span>مطالعه مقاله</span>
                <ArrowLeft className="w-3 h-3 mr-1 group-hover:-translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/services/insolvency-from-judgment"
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-[#E5C158]/50 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#E5C158]/10 text-[#E5C158] inline-block">
                  خدمت نگارش تخصصی
                </span>
                <h3 className="text-sm font-bold text-white group-hover:text-[#E5C158] transition-colors">
                  سفارش تنظیم دادخواست اعسار
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  تنظیم فوری دادخواست اعسار، فرم اموال ماده ۸ و استشهادیه معتبر جهت توقف دستور جلب.
                </p>
              </div>
              <div className="pt-4 flex items-center text-xs font-bold text-[#E5C158] group-hover:text-amber-300 transition-colors">
                <span>ثبت سفارش آنلاین</span>
                <ArrowLeft className="w-3 h-3 mr-1 group-hover:-translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}
