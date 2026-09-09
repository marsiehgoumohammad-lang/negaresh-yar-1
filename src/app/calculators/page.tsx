import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Calculator, Coins, TrendingUp, ShieldAlert, ArrowLeft, CheckCircle2, FileText, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'محاسبه‌گرهای حقوقی آنلاین | محاسبه مهریه، تاخیر تادیه بدهی و دیه ۱۴۰۳ - نگارش یار',
  description:
    'محاسبه‌گر آنلاین حقوقی نگارش یار: محاسبه مهریه به نرخ روز با شاخص رسمی تورم بانک مرکزی، محاسبه خسارت تاخیر تادیه بدهی و دین (ماده ۵۲۲)، محاسبه نرخ دیه سال ۱۴۰۳، اعضای بدن و ماه‌های حرام.',
  keywords: [
    'محاسبه آنلاین مهریه به نرخ روز',
    'محاسبه مهریه با شاخص بانک مرکزی',
    'محاسبه تاخیر تادیه بدهی',
    'محاسبه خسارت تاخیر تادیه چک',
    'محاسبه آنلاین دیه سال ۱۴۰۳',
    'جدول دیه اعضای بدن',
    'نرخ دیه ماه حرام و عادی',
    'محاسبه گر حقوقی نگارش یار',
  ],
  alternates: {
    canonical: 'https://negaresh-yar.ir/calculators',
  },
  openGraph: {
    title: 'محاسبه‌گرهای حقوقی آنلاین و هوشمند | نگارش یار',
    description: 'محاسبه دقیق مهریه به نرخ روز، تاخیر تادیه دین، و دیه کامل سال ۱۴۰۳ طبق فرمول‌های رسمی دادگستری.',
    url: 'https://negaresh-yar.ir/calculators',
    siteName: 'نگارش یار',
    locale: 'fa_IR',
    type: 'website',
  },
};

const calculators = [
  {
    id: 'mehrieh',
    title: 'محاسبه‌گر مهریه به نرخ روز',
    badge: 'شاخص رسمی بانک مرکزی',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    icon: Coins,
    desc: 'محاسبه آنلاین و دقیق ارزش روز مهریه وجه نقد از سال ۱۳۱۵ تا ۱۴۰۳ بر اساس آیین‌نامه اجرایی ماده ۱۰۸۲ قانون مدنی و آخرین شاخص بهای کالاها.',
    href: '/calculators/mehrieh',
    features: ['محاسبه با شاخص تورم سالانه بانک مرکزی', 'امکان انتخاب سال عقد و سال مطالبه', 'فرمول مصوب دادگاه‌های خانواده'],
    cta: 'ورود به محاسبه‌گر مهریه',
  },
  {
    id: 'debt-delay',
    title: 'محاسبه‌گر تاخیر تادیه دین و بدهی',
    badge: 'ماده ۵۲۲ قانون مدنی',
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    icon: TrendingUp,
    desc: 'محاسبه آنلاین خسارت تاخیر تادیه چک برگشتی، سفته، قرض‌الحسنه و مطالبات مالی بر اساس ماده ۵۲۲ آیین دادرسی مدنی و نرخ تورم رسمی.',
    href: '/calculators/debt-delay',
    features: ['محاسبه اصل دین و خسارت دیرکرد', 'فرمول رسمی دادگاه‌های حقوقی', 'محاسبه ویژه مطالبات مالی و چک'],
    cta: 'ورود به محاسبه‌گر تاخیر تادیه',
  },
  {
    id: 'diya',
    title: 'محاسبه‌گر دیه سال ۱۴۰۳ و اعضای بدن',
    badge: 'نرخ مصوب قوه قضاییه',
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
    icon: ShieldAlert,
    desc: 'محاسبه دیه کامل، ماه‌های حرام و عادی سال ۱۴۰۳ (۱.۲ و ۱.۶ میلیارد تومان)، انواع جراحات (حارصه تا مامومه)، شکستگی استخوان و اعضای بدن.',
    href: '/calculators/diya',
    features: ['نرخ دیه ماه حرام و غیرحرام', 'محاسبه درصد دلخواه گواهی پزشکی قانونی', 'جدول کامل جراحات و شکستگی‌ها'],
    cta: 'ورود به محاسبه‌گر دیه',
  },
];

export default function CalculatorsHubPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'محاسبه‌گرهای حقوقی آنلاین نگارش یار',
    description: 'ابزارهای آنلاین محاسبه مهریه به نرخ روز، تاخیر تادیه بدهی و دیه مصوب قوه قضاییه',
    url: 'https://negaresh-yar.ir/calculators',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'صفحه اصلی', item: 'https://negaresh-yar.ir' },
        { '@type': 'ListItem', position: 2, name: 'محاسبه‌گرهای حقوقی', item: 'https://negaresh-yar.ir/calculators' },
      ],
    },
  };

  return (
    <main className="min-h-screen bg-[#070B15] text-slate-100 py-10 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container>
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs sm:text-sm font-bold">
            <Calculator className="w-4 h-4" />
            <span>سامانه محاسبات آنلاین دادگستری و بانک مرکزی</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
            محاسبه‌گرهای حقوقی آنلاین نگارش یار
          </h1>
          <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
            محاسبه سریع، دقیق و قانونی ارزش روز مهریه، خسارت تاخیر تادیه چک و بدهی، و دیه اعضای بدن طبق آخرین بخشنامه‌های رسمی قوه قضاییه و شاخص‌های بانک مرکزی جمهوری اسلامی ایران.
          </p>
        </div>

        {/* 3 Main Calculators Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {calculators.map((calc) => {
            const Icon = calc.icon;
            return (
              <div
                key={calc.id}
                className="flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-[#E5C158]/50 transition-all shadow-xl hover:shadow-2xl group relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <div className="p-3 rounded-2xl bg-slate-800 text-[#E5C158] group-hover:bg-[#E5C158] group-hover:text-slate-950 transition-colors shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`px-2.5 py-1 rounded-lg border text-xs font-bold ${calc.badgeColor}`}>
                      {calc.badge}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-lg sm:text-xl font-black text-white mb-2 group-hover:text-[#E5C158] transition-colors">
                      {calc.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {calc.desc}
                    </p>
                  </div>

                  <ul className="space-y-2 pt-2 border-t border-slate-800">
                    {calc.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E5C158] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80">
                  <Link
                    href={calc.href}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 group-hover:bg-[#E5C158] text-white group-hover:text-slate-950 font-bold text-sm shadow-md transition-all"
                  >
                    <span>{calc.cta}</span>
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legal Advisory & Service Integration */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/50 border border-slate-800 max-w-4xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-amber-400 font-bold text-sm sm:text-base">
            <Scale className="w-5 h-5" />
            <span>نیاز به تنظیم دادخواست یا لایحه بر اساس این محاسبات دارید؟</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
            پس از به دست آوردن مبالغ، شما می‌توانید دادخواست مطالبه مهریه، دادخواست مطالبه وجه با تاخیر تادیه، یا لایحه اعتراض به نظریه پزشکی قانونی را به صورت کاملاً حرفه‌ای و با استناد به مواد قانونی از نگارش یار سفارش دهید.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E5C158] text-slate-950 font-black text-xs sm:text-sm hover:bg-[#f3d376] transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>مشاهده و سفارش خدمات نگارش تخصصی</span>
            </Link>
            <Link
              href="/samples"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 font-bold text-xs sm:text-sm hover:bg-slate-700 transition-colors"
            >
              <span>مشاهده نمونه دادخواست‌ها و لوایح</span>
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
