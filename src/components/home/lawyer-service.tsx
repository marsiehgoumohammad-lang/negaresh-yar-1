'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Scale } from 'lucide-react';
import { Container } from '../ui/container';

export function LawyerService() {
  return (
    <section className="bg-[#0B1020] py-14 sm:py-16 text-white border-y border-slate-800/80 relative">
      <Container>
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#0D1424] border border-slate-800/90 p-6 sm:p-8 lg:p-10 shadow-lg text-right">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-700">
                <Scale className="w-3.5 h-3.5 text-[#E5C158]" />
                <span>خدمات مکمل حقوقی</span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
                اگر به وکیل نیاز داری، نگارشیار تنهایت نمی‌گذارد.
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                اگر موضوعت فقط نوشتن یک متن نیست و به بررسی تخصصی پرونده نیاز داری، می‌توانی از بخش معرفی وکیل استفاده کنی.
              </p>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <Link
                href="/lawyer-referral"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#162036] hover:bg-[#1E2C4A] text-slate-200 hover:text-white font-bold text-xs sm:text-sm border border-slate-700 hover:border-[#E5C158]/50 transition-all shadow-md"
              >
                <span>معرفی وکیل</span>
                <ArrowLeft className="w-4 h-4 text-[#E5C158]" />
              </Link>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
