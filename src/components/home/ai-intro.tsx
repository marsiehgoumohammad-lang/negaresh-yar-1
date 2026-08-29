import React from 'react';
import Link from 'next/link';
import { Container } from '../ui/container';

export function AiIntro() {
  return (
    <section id="ai-intro" className="py-14 sm:py-20 bg-[#070B15] text-white border-b border-slate-800 relative overflow-hidden">
      
      {/* Background Subtle Ambient Lighting */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[350px] bg-[radial-gradient(circle_at_center,rgba(229,193,88,0.05)_0%,transparent_70%)] pointer-events-none -z-10 -translate-y-1/2" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[250px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.04)_0%,transparent_70%)] pointer-events-none -z-10" />

      <Container>
        {/* MOBILE VIEW (Strictly optimized for touch with large prominent CTA button) */}
        <div className="block md:hidden bg-[#0D1424] rounded-2xl border border-slate-800 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121A2D] border border-[#E5C158]/40 text-[#E5C158] text-xs font-bold mb-4">
            <span className="w-2 h-2 rounded-full bg-[#E5C158] animate-pulse" />
            <span>سامانه هوشمند تفسیر رای و دادنامه</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white mb-3 leading-tight">
            تفسیر اوراق و آرای قضایی با هوش مصنوعی
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5">
            متون قضایی و احکام دادگاه‌ها مملو از کلمات سنگین و تعابیر پیچیده حقوقی هستند. سیستم هوشمند نگارش یار این متون را به زبان ساده، روان و کاربردی برای شما خلاصه‌سازی و تحلیل می‌کند.
          </p>

          {/* Key Feature Bullets */}
          <div className="space-y-2.5 mb-6 text-xs text-slate-200">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#E5C158]/10 text-[#E5C158] flex items-center justify-center font-bold text-xs shrink-0">✓</span>
              <span>استخراج خلاصه رای و پرونده به زبان عامیانه</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#E5C158]/10 text-[#E5C158] flex items-center justify-center font-bold text-xs shrink-0">✓</span>
              <span>تحلیل سطح ریسک حقوقی و اقدامات پیشنهادی بعدی</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#E5C158]/10 text-[#E5C158] flex items-center justify-center font-bold text-xs shrink-0">✓</span>
              <span>معنی‌کردن اصطلاحات پیچیده قضایی درج‌شده در متن</span>
            </div>
          </div>

          {/* Legal Disclaimer Box */}
          <div className="bg-[#121A2D]/80 border border-[#E5C158]/20 rounded-xl p-3.5 mb-6 text-slate-300">
            <div className="flex items-start gap-2">
              <span className="text-[#E5C158] text-base shrink-0">⚠️</span>
              <p className="text-[11px] leading-relaxed">
                <strong className="text-[#E5C158]">تذکر قانونی:</strong> تحلیل هوش مصنوعی صرفاً جهت تسهیل درک اسناد است و جایگزین لایحه رسمی یا مشاوره مستقیم وکیل پایه یک نیست.
              </p>
            </div>
          </div>

          {/* Big Prominent Mobile CTA Touch Button */}
          <Link
            href="/ai-interpreter"
            className="w-full py-4 px-5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] hover:brightness-110 text-[#070B14] font-black text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(229,193,88,0.3)] transition-all active:scale-[0.98]"
          >
            <span>ورود به سامانه اختصاصی تفسیر قضایی با AI</span>
            <svg className="w-5 h-5 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </Link>
        </div>


        {/* DESKTOP VIEW (Full luxury grid layout with graphic preview card) */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text & CTA */}
          <div className="lg:col-span-7 flex flex-col text-right">
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#121A2D] border border-[#E5C158]/40 text-[#E5C158] text-xs font-bold mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#E5C158] animate-pulse" />
              <span>سامانه هوشمند تفسیر رای</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight tracking-tight">
              تفسیر اوراق قضایی با هوش مصنوعی
            </h2>
            
            <p className="text-base md:text-lg text-slate-300 mb-6 leading-relaxed font-normal max-w-xl">
              متون قضایی و احکام دادگاه‌ها معمولاً دارای پیچیدگی‌های حقوقی و کلمات سنگین هستند. سیستم هوشمند نگارش یار این متون را به زبان ساده، شفاف و کاربردی خلاصه‌سازی می‌کند.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs text-slate-200">
              <div className="flex items-center gap-2 bg-[#0D1424] p-3 rounded-xl border border-slate-800">
                <span className="w-6 h-6 rounded-lg bg-[#E5C158]/10 text-[#E5C158] flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                <span>خلاصه‌سازی روان و بدون ابهام</span>
              </div>
              <div className="flex items-center gap-2 bg-[#0D1424] p-3 rounded-xl border border-slate-800">
                <span className="w-6 h-6 rounded-lg bg-[#E5C158]/10 text-[#E5C158] flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                <span>سنجش هوشمند ریسک حقوقی</span>
              </div>
              <div className="flex items-center gap-2 bg-[#0D1424] p-3 rounded-xl border border-slate-800">
                <span className="w-6 h-6 rounded-lg bg-[#E5C158]/10 text-[#E5C158] flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                <span>واژه‌نامه اصطلاحات تخصصی</span>
              </div>
              <div className="flex items-center gap-2 bg-[#0D1424] p-3 rounded-xl border border-slate-800">
                <span className="w-6 h-6 rounded-lg bg-[#E5C158]/10 text-[#E5C158] flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                <span>اقدامات پیشنهادی گام‌به‌گام</span>
              </div>
            </div>

            <div className="bg-[#121A2D]/80 border border-[#E5C158]/25 rounded-xl p-4 mb-6 text-slate-300">
              <div className="flex items-start gap-2.5">
                <span className="text-[#E5C158] text-lg shrink-0">⚠️</span>
                <p className="text-xs sm:text-sm leading-relaxed font-medium">
                  <strong className="text-[#E5C158]">تذکر قانونی:</strong> پاسخ هوش مصنوعی صرفاً جهت تسهیل درک مفاهیم اسناد است و جایگزین مشاوره تخصصی وکیل یا حقوقدان محسوب نمی‌شود.
                </p>
              </div>
            </div>

            <div>
              <Link
                href="/ai-interpreter"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] hover:brightness-110 text-[#070B14] font-black text-sm shadow-[0_0_20px_rgba(229,193,88,0.25)] transition-all"
              >
                <span>ورود به سامانه اختصاصی تفسیر اوراق قضایی</span>
                <svg className="w-4 h-4 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#0D1424] rounded-2xl border border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.6)] p-6 space-y-4 relative overflow-hidden group">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E5C158]" />
                  <span>تحلیل هوشمند دادنامه شماره ۱۴۰۲...</span>
                </span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#121A2D] text-[#E5C158] font-bold border border-[#E5C158]/30">
                  تفسیر هوشمند
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-[#070B15] border border-slate-800">
                  <span className="block text-[11px] font-bold text-[#E5C158] mb-1">خلاصه مفاد اصلی:</span>
                  <p className="text-xs text-slate-200 leading-relaxed font-medium">
                    دعوای خواهان پیرامون الزام به تنظیم سند رسمی پذیرفته شده و خوانده مکلف به طی مراحل ثبتی ظرف ۳۰ روز گردیده است.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#070B15] border border-emerald-500/30">
                  <span className="block text-[11px] font-bold text-emerald-400 mb-1">اقدام بعدی پیشنهادی:</span>
                  <p className="text-xs text-emerald-200 leading-relaxed font-medium">
                    ابلاغ اجرائیه و پیگیری از طریق دفتر ثبت اسناد رسمی.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800">
                <span>زمان پردازش: فوری</span>
                <span>پشتیبانی: PDF / متن / تصویر</span>
              </div>

              {/* Hover Overlay Direct Action Link */}
              <div className="pt-3">
                <Link
                  href="/ai-interpreter"
                  className="w-full py-2.5 rounded-xl bg-[#121A2D] hover:bg-[#E5C158] text-[#E5C158] hover:text-[#070B15] border border-[#E5C158]/30 font-bold text-xs flex items-center justify-center gap-2 transition-all duration-200"
                >
                  <span>شروع تحلیل سند جدید</span>
                  <span>←</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
