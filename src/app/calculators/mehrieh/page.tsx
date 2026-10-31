import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { MehriehCalculatorClient } from '@/components/calculators/MehriehCalculatorClient';
import { ChevronLeft, Calculator, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'سامانه محاسبه آنلاین مهریه به نرخ روز با شاخص بانک مرکزی (۱۴۰۵)',
  description:
    'سامانه محاسبه آنلاین مهریه به نرخ روز (وجه نقد و ریالی) بر اساس آخرین جدول شاخص تورم بانک مرکزی جمهوری اسلامی ایران و فرمول تبصره ماده ۱۰۸۲ قانون مدنی.',
  keywords: [
    'سامانه محاسبه آنلاین مهریه به نرخ روز',
    'محاسبه آنلاین مهریه به نرخ روز',
    'محاسبه مهریه با شاخص بانک مرکزی',
    'فرمول محاسبه مهریه وجه نقد',
    'محاسبه مهریه سال ۱۳۶۰',
    'محاسبه مهریه سال ۱۳۷۰',
    'محاسبه مهریه سال ۱۳۸۰',
    'جدول شاخص بهای کالاها برای مهریه',
    'محاسبه مهریه به نرخ روز ۱۴۰۵',
    'نحوه مطالبه مهریه وجه نقد',
  ],
  alternates: {
    canonical: 'https://www.negaresh-yar.ir/calculators/mehrieh',
  },
  openGraph: {
    title: 'سامانه محاسبه آنلاین مهریه به نرخ روز با شاخص بانک مرکزی | نگارش یار',
    description: 'سامانه محاسبه فوری و دقیق ارزش روز مهریه وجه نقد بر اساس ماده ۱۰۸۲ قانون مدنی و آخرین جدول شاخص تورم بانک مرکزی.',
    url: 'https://www.negaresh-yar.ir/calculators/mehrieh',
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
        name: 'سامانه محاسبه آنلاین مهریه به نرخ روز نگارش یار',
        operatingSystem: 'All',
        applicationCategory: 'BusinessApplication',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'IRR',
        },
        description: 'سامانه محاسبه آنلاین مهریه وجه نقد به نرخ روز بر اساس شاخص بانک مرکزی جمهوری اسلامی ایران و تبصره ماده ۱۰۸۲ قانون مدنی',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'فرمول سامانه محاسبه آنلاین مهریه به نرخ روز چیست؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'طبق آیین نامه اجرایی تبصره الحاقی به ماده ۱۰۸۲ قانون مدنی، فرمول قانونی دادگاه ها و اجرای ثبت عبارت است از: متوسط شاخص بهای سال قبل از وصول و تادیه مهریه تقسیم بر متوسط شاخص سال وقوع عقد، ضربدر مبلغ اولیه مهریه وجه نقد مندرج در سند ازدواج.',
            },
          },
          {
            '@type': 'Question',
            name: 'آیا مهریه سکه طلا هم در سامانه محاسبه مهریه به نرخ روز با شاخص بانک مرکزی محاسبه می شود؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'خیر، سکه طلا عین معین (یا کلی در معین) است و تعدیل با شاخص تورم بانک مرکزی صرفا برای مهریه وجه نقد رایج (ریال و تومان) اعمال می شود. در مهریه سکه، اصل سکه یا قیمت روز بازار آن در زمان اجرا مطالبه می گردد.',
            },
          },
          {
            '@type': 'Question',
            name: 'مهریه وجه نقد زوجه بعد از فوت شوهر چگونه به نرخ روز محاسبه می شود؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'بر اساس ماده ۳ آیین نامه اجرایی قانون الحاق یک تبصره به ماده ۱۰۸۲ قانون مدنی و آرای وحدت رویه دیوان عالی کشور، در صورت فوت زوج، تاریخ فوت مبنای محاسبه قرار گرفته و شاخص سال فوت شوهر بر شاخص سال عقد تقسیم می شود.',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'صفحه اصلی', item: 'https://www.negaresh-yar.ir' },
          { '@type': 'ListItem', position: 2, name: 'محاسبه گرهای حقوقی', item: 'https://www.negaresh-yar.ir/calculators' },
          { '@type': 'ListItem', position: 3, name: 'سامانه محاسبه آنلاین مهریه به نرخ روز', item: 'https://www.negaresh-yar.ir/calculators/mehrieh' },
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
            محاسبه گرهای حقوقی
          </Link>
          <ChevronLeft className="w-3.5 h-3.5" />
          <span className="text-[#E5C158] font-bold">سامانه محاسبه آنلاین مهریه به نرخ روز</span>
        </nav>

        {/* Header Hero */}
        <div className="max-w-3xl mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold">
            <Calculator className="w-3.5 h-3.5" />
            <span>منطبق بر جدول رسمی شاخص بهای کالاها و خدمات مصرفی بانک مرکزی (CPI)</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
            سامانه محاسبه آنلاین مهریه به نرخ روز با شاخص بانک مرکزی
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            در سامانه محاسبه آنلاین مهریه به نرخ روز نگارش یار، با وارد کردن مبلغ مهریه وجه نقد درج شده در قباله ازدواج و انتخاب سال عقد و سال مطالبه (یا سال فوت زوج)، ارزش روز مهریه را دقیقا مطابق فرمول رسمی دادگاه های خانواده و دوایر اجرای ثبت اسناد محاسبه کنید.
          </p>
        </div>

        {/* Client Interactive Calculator Component */}
        <MehriehCalculatorClient />

        {/* Legal Formula & Rules Explanation Section */}
        <section className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-6">
          <h2 className="text-lg sm:text-xl font-black text-white">
            فرمول قانونی و ضوابط محاسبه مهریه به نرخ روز (ماده ۱۰۸۲ قانون مدنی)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
              <h3 className="font-bold text-[#E5C158]">۱. فرمول شاخص سالانه بانک مرکزی</h3>
              <p>
                بر اساس ماده ۲ آیین نامه اجرایی قانون الحاق یک تبصره به ماده ۱۰۸۲ قانون مدنی، میزان مهریه وجه نقد از تقسیم «عدد شاخص در سال قبل از وصول» بر «عدد شاخص در سال وقوع عقد» و ضرب حاصل در مبلغ اولیه مهریه مندرج در عقدنامه به دست می آید.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
              <h3 className="font-bold text-[#E5C158]">۲. تفاوت مطالبه از زوج در قید حیات با زوج متوفی</h3>
              <p>
                هنگامی که زوجه مهریه وجه نقد را از شوهر در قید حیات مطالبه می کند، شاخص سال قبل از تاریخ پرداخت ملاک است؛ اما در صورت فوت شوهر و مطالبه مهریه از ماترک، طبق ماده ۳ آیین نامه، شاخص سال فوت زوج مبنای محاسبه قرار می گیرد.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
              <h3 className="font-bold text-[#E5C158]">۳. تفکیک مهریه وجه نقد از مهریه سکه طلا</h3>
              <p>
                محاسبه با شاخص تورم بانک مرکزی مخصوص مهریه هایی است که در سند نکاحیه به صورت «وجه رایج کشور (ریال یا تومان)» تعیین شده اند. اگر مهریه سکه بهار آزادی یا طلا باشد، عین سکه یا ارزش روز بازار آن در یوم الادا مطالبه می شود.
              </p>
            </div>
          </div>
        </section>

        {/* Related Cluster Resources */}
        <section className="mt-16 pt-12 border-t border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                راهنماها و خدمات مرتبط با مطالبه و تقسیط مهریه
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                دسترسی مستقیم به الگوهای رسمی اجرای ثبت، دادخواست مطالبه مهریه در دادگاه خانواده و تقسیط مهریه
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
              href="/samples/mahrieh-court-petition"
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-[#E5C158]/50 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 inline-block">
                  دادگاه خانواده
                </span>
                <h3 className="text-sm font-bold text-white group-hover:text-[#E5C158] transition-colors">
                  نمونه دادخواست مطالبه مهریه (سکه و وجه نقد)
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  الگوی رسمی دادخواست مطالبه مهریه به نرخ روز همراه با تامین خواسته و اعمال ماده ۵.
                </p>
              </div>
              <div className="pt-4 flex items-center text-xs font-bold text-slate-300 group-hover:text-[#E5C158] transition-colors">
                <span>مشاهده نمونه سند</span>
                <ArrowLeft className="w-3 h-3 mr-1 group-hover:-translate-x-1 transition-transform" />
              </div>
            </Link>

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
                  الگوی استاندارد تقسیط سکه و مهریه وجه نقد، استشهادیه شهود و تعدیل اقساط در دادگاه خانواده.
                </p>
              </div>
              <div className="pt-4 flex items-center text-xs font-bold text-slate-300 group-hover:text-[#E5C158] transition-colors">
                <span>مشاهده نمونه سند</span>
                <ArrowLeft className="w-3 h-3 mr-1 group-hover:-translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/services/mahrieh-claim"
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-[#E5C158]/50 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#E5C158]/10 text-[#E5C158] inline-block">
                  خدمت نگارش تخصصی
                </span>
                <h3 className="text-sm font-bold text-white group-hover:text-[#E5C158] transition-colors">
                  سفارش تنظیم دادخواست مطالبه مهریه
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  تنظیم فوری دادخواست مهریه به نرخ روز، تامین خواسته و تقاضای اجرای ثبت توسط متخصصین.
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
