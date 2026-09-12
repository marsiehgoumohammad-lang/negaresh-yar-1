'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Container } from '../ui/container';

export function FinalCta() {
  return (
    <section className="bg-[#0B1020] py-20 sm:py-24 text-white border-t border-slate-800/80 relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[radial-gradient(circle_at_center,rgba(229,193,88,0.1)_0%,transparent_70%)] pointer-events-none -z-10" />

      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            حالا فقط بگو چه می‌خواهی بنویسی.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            موضوعت را توضیح بده؛ نگارشیار مسیر نوشتنش را برایت ساده می‌کند.
          </p>

          <div className="pt-2">
            <Link
              href="/request"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#070B15] font-black text-base sm:text-lg shadow-[0_0_25px_rgba(229,193,88,0.35)] hover:brightness-110 active:scale-[0.98] transition-all"
            >
              <span>شروع درخواست نگارش</span>
              <ArrowLeft className="w-5 h-5 shrink-0" />
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400 pt-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>ثبت درخواست آنلاین و ساده</span>
          </div>

        </div>
      </Container>
    </section>
  );
}
