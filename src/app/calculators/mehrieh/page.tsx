import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { MehriehCalculatorClient } from '@/components/calculators/MehriehCalculatorClient';
import { ChevronLeft, Calculator, ArrowLeft } from 'lucide-react';

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

        {/* Related Cluster Resources */}
        <section className="mt-16 pt-12 border-t border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                راهنماها و خدمات مرتبط با مطالبه و تقسیط مهریه
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                دسترسی مستقیم به الگوهای رسمی اجرای ثبت، دادخواست های خانواده و مقالات تخصصی مهریه
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
              href="/samples/mehrieh-execution-registry-petition"
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-[#E5C158]/50 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 inline-block">
                  اجرای ثبت
                </span>
                <h3 className="text-sm font-bold text-white group-hover:text-[#E5C158] transition-colors">
                  تقاضای صدور اجراییه مهریه از ثبت
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  فرم رسمی درخواست توقیف حساب و اموال زوج از طریق اداره اجرای اسناد رسمی.
                </p>
              </div>
              <div className="pt-4 flex items-center text-xs font-bold text-slate-300 group-hover:text-[#E5C158] transition-colors">
                <span>مشاهده نمونه سند</span>
                <ArrowLeft className="w-3 h-3 mr-1 group-hover:-translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/samples/mehrieh-installment-petition"
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-[#E5C158]/50 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-amber-500/10 text-[#E5C158] inline-block">
                  اعسار و تقسیط
                </span>
                <h3 className="text-sm font-bold text-white group-hover:text-[#E5C158] transition-colors">
                  دادخواست اعسار و تقسیط مهریه
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  الگوی استاندارد تقسیط سکه، استشهادیه شهود و تعدیل اقساط در دادگاه خانواده.
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
                  چگونه مهریه و بدهی را قسطی کنیم؟
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  راهنمای کامل فرجه ۳۰ روزه قانون محکومیت های مالی، فرم اموال و توقف حکم جلب.
                </p>
              </div>
              <div className="pt-4 flex items-center text-xs font-bold text-slate-300 group-hover:text-[#E5C158] transition-colors">
                <span>مطالعه راهنما</span>
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
                  سفارش تنظیم دادخواست اعسار مهریه
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  تنظیم فوری دادخواست، لیست دارایی های ماده ۸ و استشهادیه شهود توسط متخصصین.
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
