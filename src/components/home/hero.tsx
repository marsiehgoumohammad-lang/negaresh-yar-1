'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '../ui/container';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#070B15] text-white py-8 sm:py-12 md:py-16 border-b border-secondary-800/40">
      
      {/* Background Ambient Radial Glow & Light Rings */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(229,193,88,0.15)_0%,transparent_70%)] pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.08)_0%,transparent_75%)] pointer-events-none -z-10" />

      {/* Subtle Ambient Noise Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <Container>
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-3">
            نگارش یار
          </h1>

          {/* Subtitle */}
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#E5C158] tracking-wide mb-6">
            نگارش نامه اداری - عریضه نویسی - کافی نت آنلاین
          </h2>

          {/* Central 3D Podium & Laptop Hero Image Asset */}
          <div className="relative w-full max-w-lg mx-auto my-3 sm:my-6 flex justify-center items-center">
            <div className="relative z-10 w-full rounded-2xl overflow-hidden border border-[#E5C158]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(229,193,88,0.25)]">
              <Image
                src="/images/hero_3d_stage.jpg"
                alt="نگارش یار - هیرو 3D"
                width={700}
                height={525}
                priority
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="w-full max-w-sm sm:max-w-md mx-auto space-y-3.5 my-4 sm:my-6">
            
            {/* Primary Button: Solid Gold Fill with Left Arrow */}
            <a
              href="#contact"
              className="flex items-center justify-center gap-3 w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] hover:brightness-110 active:scale-[0.985] text-[#070B14] font-extrabold text-base sm:text-lg shadow-[0_6px_25px_-2px_rgba(229,193,88,0.35)] transition-all duration-200"
            >
              <svg className="w-5 h-5 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              <span>ثبت درخواست جدید</span>
            </a>

            {/* Secondary Button: Dark Fill with Gold Outline */}
            <a
              href="#services"
              className="flex items-center justify-center w-full py-3.5 px-6 rounded-xl bg-[#0B101D]/90 hover:bg-[#121A2D] active:scale-[0.985] border border-[#E5C158]/60 text-[#E5C158] font-bold text-base sm:text-lg shadow-sm transition-all duration-200"
            >
              <span>مشاهده خدمات</span>
            </a>
          </div>

          {/* Trust Bar Row (4 Key Badges matching reference) */}
          <div className="w-full max-w-xl mx-auto pt-6 border-t border-white/10 grid grid-cols-4 gap-2 sm:gap-4 text-center mt-4">
            
            {/* 1. Full Confidentiality */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-[#E5C158]/30 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[#E5C158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-200">
                محرمانگی کامل
              </span>
            </div>

            {/* 2. Professional Support */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-[#E5C158]/30 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[#E5C158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-200">
                پشتیبانی حرفه‌ای
              </span>
            </div>

            {/* 3. Fast Delivery */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-[#E5C158]/30 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[#E5C158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-200">
                تحویل سریع
              </span>
            </div>

            {/* 4. Quality Guarantee */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-[#E5C158]/30 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[#E5C158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-200">
                تضمین کیفیت
              </span>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
