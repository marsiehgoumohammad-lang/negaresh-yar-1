'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, Scale, Globe, ShieldAlert } from 'lucide-react';
import { Container } from '../ui/container';

const serviceCategories = [
  {
    id: 'administrative',
    badge: 'سازمانی و اداری',
    title: 'نامه‌های اداری',
    description: 'درخواست، اعتراض، پیگیری، معرفی، استعفا، شکایت و مکاتبات سازمانی.',
    ctaText: 'مشاهده نامه‌های اداری',
    ctaHref: '/services/administrative-letter',
    icon: FileText,
    accentColor: 'text-[#E5C158]',
    borderHover: 'hover:border-[#E5C158]/60',
    tagList: ['تقسیط بدهی بانک', 'درخواست مرخصی و وام', 'اعتراض به جریمه', 'نامه به شهرداری'],
  },
  {
    id: 'legal',
    badge: 'حقوقی و قضایی',
    title: 'نوشته‌های قضایی',
    description: 'دادخواست، شکواییه، لایحه، اظهارنامه و دیگر نوشته‌های موردنیاز.',
    ctaText: 'مشاهده خدمات قضایی',
    ctaHref: '/services/petition-writing',
    icon: Scale,
    accentColor: 'text-amber-400',
    borderHover: 'hover:border-amber-500/60',
    tagList: ['دادخواست اعسار', 'لایحه دفاعیه دادگاه', 'شکواییه کلاهبرداری', 'اظهارنامه رسمی'],
    disclaimer: 'نگارش متن جایگزین مشاوره حقوقی نیست.',
  },
  {
    id: 'online-services',
    badge: 'کافی‌نت غیرحضوری',
    title: 'خدمات آنلاین',
    description: 'خدماتی که برای انجامشان لازم نیست حضوری مراجعه کنی.',
    ctaText: 'مشاهده خدمات آنلاین',
    ctaHref: '/services/online-cafe',
    icon: Globe,
    accentColor: 'text-sky-400',
    borderHover: 'hover:border-sky-500/60',
    tagList: ['ثبت نام ثنا و سخا', 'امور گذرنامه و کارت ملی', 'استعلام یارانه‌ها', 'خدمات غیرحضوری'],
  },
];

export function ServiceSelection() {
  return (
    <section id="services-section" className="bg-[#070B15] py-16 sm:py-20 text-white relative">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-3">
            چه متنی لازم داری؟
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            از یک نامه ساده اداری تا نوشته‌های رسمی و قضایی، مسیر مناسب را انتخاب کن.
          </p>
        </div>

        {/* 3 Primary Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {serviceCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className={`flex flex-col justify-between rounded-2xl bg-[#0D1424] border border-slate-800 p-6 sm:p-7 transition-all duration-300 ${cat.borderHover} shadow-lg relative group`}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60">
                      {cat.badge}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#121A2D] flex items-center justify-center border border-slate-700/60 group-hover:scale-105 transition-transform">
                      <Icon className={`w-6 h-6 ${cat.accentColor}`} />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-black text-white mb-3 group-hover:text-[#E5C158] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    {cat.description}
                  </p>

                  {/* Fast tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cat.tagList.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-[#162036] text-slate-300 border border-slate-700/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA & Optional Disclaimer */}
                <div className="pt-4 border-t border-slate-800/80 space-y-3">
                  <Link
                    href={cat.ctaHref}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#162036] hover:bg-[#1E2C4A] text-slate-200 hover:text-white font-bold text-xs sm:text-sm border border-slate-700/70 hover:border-[#E5C158]/50 transition-all group/btn"
                  >
                    <span>{cat.ctaText}</span>
                    <ArrowLeft className="w-4 h-4 group-hover/btn:-translate-x-1 transition-transform" />
                  </Link>

                  {cat.disclaimer && (
                    <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1">
                      <ShieldAlert className="w-3 h-3 text-amber-400/80 shrink-0" />
                      <span>{cat.disclaimer}</span>
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
