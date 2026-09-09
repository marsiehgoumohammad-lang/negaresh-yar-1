import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { MehriehCalculatorClient } from '@/components/calculators/MehriehCalculatorClient';
import { ChevronLeft, Calculator } from 'lucide-react';

export const metadata: Metadata = {
  title: 'محاسبه آنلاین مهریه به نرخ روز با شاخص تورم بانک مرکزی ۱۴۰۳ - نگارش یار',
  description:
    'محاسبه آنلاین و رایگان مهریه وجه نقد به نرخ روز بر اساس آخرین جدول شاخص تورم بانک مرکزی جمهوری اسلامی ایران، طبق آیین‌نامه اجرایی تبصره الحاقی به ماده ۱۰۸۲ قانون مدنی.',
  keywords: [
    'محاسبه آنلاین مهریه به نرخ روز',
    'محاسبه مهریه با شاخص بانک مرکزی',
    'فرمول محاسبه مهریه وجه نقد',
    'محاسبه مهریه سال ۱۳۶۰',
    'محاسبه مهریه سال ۱۳۷۰',
    'محاسبه مهریه سال ۱۳۸۰',
    'جدول شاخص بهای کالاها برای مهریه',
    'محاسبه مهریه در سال ۱۴۰۳',
    'نحوه مطالبه مهریه وجه نقد',
  ],
  alternates: {
    canonical: 'https://negaresh-yar.ir/calculators/mehrieh',
  },
  openGraph: {
    title: 'محاسبه آنلاین مهریه به نرخ روز با شاخص بانک مرکزی | نگارش یار',
    description: 'محاسبه فوری و دقیق ارزش روز مهریه بر اساس ماده ۱۰۸۲ قانون مدنی و شاخص تورم بانک مرکزی.',
    url: 'https://negaresh-yar.ir/calculators/mehrieh',
    siteName: 'نگارش یار',
    locale: 'fa_IR',
    type: 'website',
  },
};

export default function MehriehCalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'محاسبه‌گر آنلاین مهریه به نرخ روز نگارش یار',
        operatingSystem: 'All',
        applicationCategory: 'BusinessApplication',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'IRR',
        },
        description: 'ابزار محاسبه مهریه وجه نقد بر اساس شاخص بانک مرکزی جمهوری اسلامی ایران و قانون مدنی',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'فرمول محاسبه مهریه وجه نقد به نرخ روز چیست؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'فرمول قانونی دادگاه‌ها عبارت است از: شاخص سال قبل از وصول مهریه تقسیم بر شاخص سال وقوع عقد ضربدر مبلغ اولیه مهریه مندرج در سند ازدواج.',
            },
          },
          {
            '@type': 'Question',
            name: 'آیا مهریه سکه طلا هم شامل محاسبه به نرخ روز می‌شود؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'خیر، سکه طلا عین معین است و تعدیل با شاخص بانک مرکزی فقط برای مهریه وجه نقد (ریال و تومان) اعمال می‌شود. برای سکه، عینا سکه یا بهای روز آن در بازار مطالبه می‌شود.',
            },
          },
          {
            '@type': 'Question',
            name: 'مهریه زوجه بعد از فوت شوهر چگونه محاسبه می‌شود؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'بر اساس ماده ۳ آیین‌نامه اجرایی، تاریخ فوت همسر ملاک قرار گرفته و شاخص سال فوت شوهر بر شاخص سال عقد تقسیم می‌شود.',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'صفحه اصلی', item: 'https://negaresh-yar.ir' },
          { '@type': 'ListItem', position: 2, name: 'محاسبه‌گرهای حقوقی', item: 'https://negaresh-yar.ir/calculators' },
          { '@type': 'ListItem', position: 3, name: 'محاسبه‌گر مهریه به نرخ روز', item: 'https://negaresh-yar.ir/calculators/mehrieh' },
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
          <span className="text-[#E5C158] font-bold">محاسبه‌گر مهریه به نرخ روز</span>
        </nav>

        {/* Header Hero */}
        <div className="max-w-3xl mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold">
            <Calculator className="w-3.5 h-3.5" />
            <span>محاسبه رسمی شاخص بهای کالاها و خدمات مصرفی (CPI)</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
            محاسبه آنلاین مهریه به نرخ روز با شاخص بانک مرکزی
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            با وارد کردن مبلغ مهریه ثبت‌شده در عقدنامه و انتخاب سال عقد و سال وصول، ارزش ریالی روز مهریه را مطابق با فرمول دادگاه‌های خانواده و شاخص رسمی بانک مرکزی محاسبه کنید.
          </p>
        </div>

        {/* Client Interactive Calculator Component */}
        <MehriehCalculatorClient />
      </Container>
    </main>
  );
}
