'use client';

import React from 'react';
import { MessageSquareText, FileCheck2, CheckCircle } from 'lucide-react';
import { Container } from '../ui/container';

const steps = [
  {
    icon: MessageSquareText,
    title: 'موضوعت را بگو',
    desc: 'توضیح بده چه می‌خواهی.',
  },
  {
    icon: FileCheck2,
    title: 'متن رسمی دریافت کن',
    desc: 'متناسب با موقعیت و مخاطب.',
  },
  {
    icon: CheckCircle,
    title: 'آماده استفاده',
    desc: 'بررسی کن، ویرایش کن و استفاده کن.',
  },
];

export function QuickValueStrip() {
  return (
    <section className="bg-[#0B1020] border-b border-slate-800/80 py-8 sm:py-10 text-white">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-tight">
            برای نوشتن متن درست، لازم نیست نویسنده باشی.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {steps.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center sm:flex-col sm:text-center gap-4 sm:gap-2.5 p-4 sm:p-5 rounded-xl bg-[#0F172A]/70 border border-slate-800/80 text-right sm:text-center transition-colors hover:border-[#E5C158]/40"
              >
                <div className="w-11 h-11 rounded-xl bg-[#162036] text-[#E5C158] flex items-center justify-center shrink-0 border border-slate-700/60 shadow-inner">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
