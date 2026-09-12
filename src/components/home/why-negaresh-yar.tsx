'use client';

import React from 'react';
import { Target, Feather, Globe, ShieldCheck } from 'lucide-react';
import { Container } from '../ui/container';

const reasons = [
  {
    icon: Target,
    title: 'متناسب با موضوع تو',
    description: 'متن بر اساس موقعیت، مخاطب و خواسته تو تنظیم می‌شود.',
  },
  {
    icon: Feather,
    title: 'رسمی، اما روان',
    description: 'نه خشک و پیچیده؛ نه محاوره‌ای و نامتناسب.',
  },
  {
    icon: Globe,
    title: 'کاملاً آنلاین',
    description: 'از هرجا که هستی، درخواستت را ثبت کن.',
  },
  {
    icon: ShieldCheck,
    title: 'محرمانگی اطلاعات',
    description: 'اطلاعات و متن درخواستت با دقت و محرمانگی نگهداری می‌شود.',
  },
];

export function WhyNegareshYar() {
  return (
    <section id="why-us" className="bg-[#0B1020] py-16 sm:py-20 text-white border-y border-slate-800/80 relative">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-3">
            چرا نگارشیار؟
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            اصول چهارگانه ما برای ارائه متنی مطمئن، اثربخش و آرامش‌بخش
          </p>
        </div>

        {/* 4 Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-start text-right p-6 rounded-2xl bg-[#0D1424] border border-slate-800 hover:border-[#E5C158]/50 transition-colors shadow-sm group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#162036] text-[#E5C158] flex items-center justify-center mb-5 border border-slate-700/60 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-black text-white mb-2 group-hover:text-[#E5C158] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
