import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { DiyaCalculatorClient } from '@/components/calculators/DiyaCalculatorClient';
import { ChevronLeft, Calculator } from 'lucide-react';

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
      </Container>
    </main>
  );
}
