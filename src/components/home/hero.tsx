'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, FileText, ShieldCheck, Clock } from 'lucide-react';
import { Container } from '../ui/container';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#070B15] text-white pt-10 pb-16 md:pt-16 md:pb-24 border-b border-slate-800/80">
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(229,193,88,0.1)_0%,transparent_70%)] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.06)_0%,transparent_75%)] pointer-events-none -z-10" />

      {/* Subtle Grid Accent */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '28px 28px',
        }}
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Column 1: Copywriting & Actions (7 cols on lg) */}
          <div className="lg:col-span-7 text-right flex flex-col items-start">
            
            {/* 1. Primary Slogan */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-black text-white tracking-tight leading-[1.3] mb-4 sm:mb-5">
              توضیح ماجرا با شما؛{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7E7A9] via-[#E5C158] to-[#D4AF37]">
                نگارش حرفه‌ای با ما
              </span>
            </h1>

            {/* 2. Main Descriptive Headline */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-200 leading-snug max-w-2xl mb-3">
              نامه‌های اداری، درخواست‌های حقوقی‌ات را متناسب با موضوع و مخاطب حرفه‌ای آماده کن
            </h2>

            {/* 3. Small Supporting Line (Service Descriptor) */}
            <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed max-w-xl mb-7">
              تنظیم انواع نامه و درخواست اداری، اظهاریه، دادخواست، شکواییه، لایحه
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-6">
              <Link
                href="/request"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#070B15] font-black text-sm sm:text-base shadow-[0_0_20px_rgba(229,193,88,0.3)] hover:brightness-110 active:scale-[0.98] transition-all"
              >
                <span>شروع نگارش</span>
                <ArrowLeft className="w-4 h-4 shrink-0" />
              </Link>

              <Link
                href="/samples"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0D1424] hover:bg-[#121A2D] text-slate-200 hover:text-white font-bold text-sm sm:text-base border border-slate-700/80 hover:border-[#E5C158]/50 transition-all"
              >
                <FileText className="w-4 h-4 text-[#E5C158]" />
                <span>دیدن نمونه نامه‌ها</span>
              </Link>
            </div>

            {/* Supporting Microcopy */}
            <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-400 font-medium">
              <span className="inline-flex items-center gap-1.5 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                آنلاین
              </span>
              <span className="text-slate-600">·</span>
              <span className="inline-flex items-center gap-1.5 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-[#E5C158]" />
                سریع
              </span>
              <span className="text-slate-600">·</span>
              <span className="inline-flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                محرمانه
              </span>
            </div>

          </div>

          {/* Column 2: Visual Stage (5 cols on lg) */}
          <div className="lg:col-span-5 w-full flex items-center justify-center">
            <div className="relative w-full max-w-lg lg:max-w-none flex items-center justify-center">
              {/* Subtle background glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#E5C158]/15 via-transparent to-transparent blur-2xl opacity-60 -z-10 pointer-events-none" />

              <Image
                src="/images/hero_3d_stage.jpg"
                alt="صحنه سه‌بعدی خدمات نگارشیار"
                width={1037}
                height={921}
                priority
                className="w-full h-auto object-contain rounded-2xl drop-shadow-2xl select-none pointer-events-none"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
