import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { DebtDelayCalculatorClient } from '@/components/calculators/DebtDelayCalculatorClient';
import { ChevronLeft, Calculator } from 'lucide-react';

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
      </Container>
    </main>
  );
}
