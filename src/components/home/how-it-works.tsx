'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, MessageSquare, Sparkles, Send } from 'lucide-react';
import { Container } from '../ui/container';

const steps = [
  {
    number: '۰۱',
    title: 'موضوعت را بگو',
    description: 'در چند جمله توضیح بده چه می‌خواهی و نامه برای چه کسی است.',
    icon: MessageSquare,
  },
  {
    number: '۰۲',
    title: 'متن مناسب آماده می‌شود',
    description: 'اطلاعاتت به یک متن رسمی، منسجم و متناسب با درخواستت تبدیل می‌شود.',
    icon: Sparkles,
  },
  {
    number: '۰۳',
    title: 'دریافت و استفاده کن',
    description: 'متن را بررسی کن و برای ثبت یا ارسال آماده‌اش کن.',
    icon: Send,
  },
];

export function HowItWorks() {
  return (
    <section className="bg-[#0B1020] py-16 sm:py-20 text-white border-y border-slate-800/80 relative">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-3">
            نگارش نامه سخت نیست؛ اگر بدانی از کجا شروع کنی.
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            ساده‌ترین و مستقیم‌ترین مسیر برای رسیدن به متن رسمی مورد نظرتان
          </p>
        </div>

        {/* 3-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative max-w-5xl mx-auto mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-[#0D1424] border border-slate-800 p-6 sm:p-7 text-right flex flex-col justify-between hover:border-[#E5C158]/40 transition-colors shadow-md"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl sm:text-3xl font-black font-mono text-[#E5C158]/80">
                      {step.number}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-[#162036] flex items-center justify-center border border-slate-700/60 text-[#E5C158]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-black text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action CTA */}
        <div className="text-center">
          <Link
            href="/request"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#070B15] font-black text-sm sm:text-base shadow-[0_0_20px_rgba(229,193,88,0.25)] hover:brightness-110 active:scale-[0.98] transition-all"
          >
            <span>شروع درخواست</span>
            <ArrowLeft className="w-4 h-4 shrink-0" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
