'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Building2, Scale, ChevronLeft } from 'lucide-react';
import { Container } from '../ui/container';

const hubCategories = [
  {
    title: 'نامه‌های اداری',
    icon: BookOpen,
    accent: 'text-[#E5C158]',
    links: [
      { label: 'درخواست‌های رسمی', href: '/samples/administrative-letters' },
      { label: 'اعتراض و تجدیدنظر اداری', href: '/samples/administrative-letters' },
      { label: 'پیگیری پرونده و نامه‌ها', href: '/samples/administrative-letters' },
      { label: 'استعفا و خاتمه همکاری', href: '/samples/administrative-letters' },
      { label: 'معرفی نماینده و رابط', href: '/samples/representative-introduction-request' },
      { label: 'تقدیر، تشکر و حسن انجام کار', href: '/samples/administrative-letters' },
    ],
  },
  {
    title: 'نامه‌های سازمانی',
    icon: Building2,
    accent: 'text-sky-400',
    links: [
      { label: 'بانک و موسسات مالی', href: '/samples/bank-letter' },
      { label: 'شهرداری و شهرسازی', href: '/samples/municipality-letter' },
      { label: 'دانشگاه و مراکز آموزشی', href: '/samples/university-letter' },
      { label: 'ادارات دولتی و کارگزینی', href: '/samples/administrative-letters' },
      { label: 'قراردادها و شرکت‌های خصوصی', href: '/samples/contracts' },
      { label: 'سازمان بازرسی و نظارتی', href: '/samples/inspection-organization-letter' },
    ],
  },
  {
    title: 'نوشته‌های قضایی',
    icon: Scale,
    accent: 'text-amber-400',
    links: [
      { label: 'دادخواست حقوقی', href: '/samples/petition' },
      { label: 'شکواییه کیفری', href: '/samples/complaint' },
      { label: 'لایحه دفاعیه دادگاه', href: '/samples/legal-brief' },
      { label: 'اظهارنامه رسمی', href: '/samples/legal-notice' },
      { label: 'اعتراض به قرار منع تعقیب', href: '/samples/objection-non-prosecution-order' },
      { label: 'دادخواست اعسار از محکوم‌به', href: '/samples/insolvency' },
    ],
  },
];

export function SampleLibraryHub() {
  return (
    <section className="bg-[#0B1020] py-16 sm:py-20 text-white border-y border-slate-800/80 relative">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-3">
            هر چیزی را که می‌خواهی بنویسی، شاید یک نمونه‌اش اینجا باشد.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            بانک جامع نمونه نامه‌ها، لوایح و اسناد کاربردی تفکیک‌شده بر اساس سازمان و نوع درخواست
          </p>
        </div>

        {/* 3 Columns Category Hub */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12">
          {hubCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0D1424] border border-slate-800 p-6 sm:p-7 flex flex-col justify-between shadow-md hover:border-slate-700 transition-colors"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-800/90">
                    <div className="w-10 h-10 rounded-xl bg-[#162036] flex items-center justify-center border border-slate-700/60">
                      <Icon className={`w-5 h-5 ${cat.accent}`} />
                    </div>
                    <h3 className="text-lg font-black text-white">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Links List */}
                  <ul className="space-y-2.5">
                    {cat.links.map((link, lIdx) => (
                      <li key={lIdx}>
                        <Link
                          href={link.href}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-[#121A2D]/60 hover:bg-[#162036] text-xs sm:text-sm text-slate-200 hover:text-[#E5C158] transition-colors group"
                        >
                          <span>{link.label}</span>
                          <ChevronLeft className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#E5C158] group-hover:-translate-x-0.5 transition-all" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Entrance CTA */}
        <div className="text-center">
          <Link
            href="/samples"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#162036] hover:bg-[#1E2C4A] text-slate-200 hover:text-white font-bold text-sm sm:text-base border border-slate-700 hover:border-[#E5C158]/50 shadow-md transition-all"
          >
            <span>ورود به بانک نمونه</span>
            <ArrowLeft className="w-4 h-4 text-[#E5C158]" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
