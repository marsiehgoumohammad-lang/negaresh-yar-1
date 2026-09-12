'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
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
            
            {/* Primary Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-black text-white tracking-tight leading-[1.3] mb-5">
              حرفت را بگو؛{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7E7A9] via-[#E5C158] to-[#D4AF37]">
                نامه‌اش را به نگارشیار بسپار.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              نامه‌های اداری، درخواست‌ها و نوشته‌های رسمی‌ات را متناسب با موضوع و مخاطب، حرفه‌ای و روان آماده کن.
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

          {/* Column 2: Document Preview Visual (5 cols on lg) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Subtle background glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-[#E5C158]/20 to-transparent blur-xl opacity-50 -z-10" />

              {/* Transformation Indicator: Input -> Document */}
              <div className="mb-3 p-3 rounded-xl bg-[#0D1424]/90 border border-slate-800 text-xs text-slate-300 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-2 truncate">
                  <span className="w-2 h-2 rounded-full bg-[#E5C158] shrink-0" />
                  <span className="text-slate-400 text-[11px]">گفته شما:</span>
                  <span className="text-slate-200 text-xs truncate">«وامم عقب افتاده و می‌خوام قسط‌هاش تمدید بشه...»</span>
                </div>
                <span className="text-[10px] text-[#E5C158] font-bold shrink-0 bg-[#E5C158]/10 px-2 py-0.5 rounded border border-[#E5C158]/20 mr-2">
                  تبدیل به متن اداری
                </span>
              </div>

              {/* Realistic Formal Document Card */}
              <div className="rounded-2xl bg-[#FCFBF8] text-slate-900 p-6 sm:p-7 shadow-2xl border border-amber-100/90 relative overflow-hidden text-right font-sans">
                
                {/* Paper Header Strip */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-200 text-[11px] text-stone-500 font-medium">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-stone-800 text-xs">نگارشیار</span>
                    <span className="text-stone-300">|</span>
                    <span>قالب رسمی مکاتبات</span>
                  </div>
                  <div className="flex items-center gap-3 text-[10px] text-stone-400 font-mono dir-rtl">
                    <span>شماره: ۱۴۰۵/الف</span>
                    <span>پیوست: دارد</span>
                  </div>
                </div>

                {/* Addressee & Subject */}
                <div className="space-y-1.5 mb-4 text-xs">
                  <div className="text-stone-600 font-medium">
                    به: <span className="font-bold text-stone-900">ریاست محترم بانک — شعبه مرکزی</span>
                  </div>
                  <div className="text-stone-800 font-extrabold text-sm flex items-center gap-1.5 text-stone-900 pt-0.5">
                    <span className="text-[#B38A19]">موضوع:</span>
                    <span>درخواست استمهال و تقسیط مجدد مانده تسهیلات</span>
                  </div>
                </div>

                {/* Formal Letter Body Excerpt */}
                <div className="space-y-2.5 text-xs sm:text-[13px] text-stone-700 leading-relaxed text-justify bg-stone-50/70 p-3.5 rounded-lg border border-stone-200/60">
                  <p className="font-semibold text-stone-900">
                    با سلام و احترام؛
                  </p>
                  <p>
                    به استحضار می‌رساند اینجانب، متقاضی تسهیلات شماره [...]، نظر به بروز شرایط نامساعد اقتصادی و خارج از اراده در ماه‌های اخیر، با افت نقدینگی مقطعی مواجه گردیده‌ام.
                  </p>
                  <p className="text-stone-600 line-clamp-2">
                    با عنایت به حسن نیت و سوابق متعهدانه قبلی، بدین‌وسیله تقاضا دارم با استناد به ضوابط حمایتی و اممهال مطالبات، با تقسیط مجدد مانده بدهی و تنفس مقرر موافقت فرمایید...
                  </p>
                </div>

                {/* Footer Sign-off */}
                <div className="mt-4 pt-3 flex items-center justify-between text-xs border-t border-stone-200/80">
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>منسجم و آماده تقدیم به دبیرخانه</span>
                  </div>
                  <span className="text-stone-500 text-[11px] font-medium">با تجدید احترام</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
