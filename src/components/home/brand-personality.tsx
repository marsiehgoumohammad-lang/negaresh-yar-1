'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, MessageSquareQuote, Check } from 'lucide-react';
import { Container } from '../ui/container';

export function BrandPersonality() {
  return (
    <section id="about" className="bg-[#070B15] py-16 sm:py-20 text-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[450px] h-[450px] bg-[radial-gradient(circle_at_center,rgba(229,193,88,0.08)_0%,transparent_70%)] pointer-events-none -z-10" />

      <Container>
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-[#0D1424] to-[#0A0F1D] border border-slate-800 p-8 sm:p-12 lg:p-14 shadow-xl text-right relative">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Main Text Content (8 cols) */}
            <div className="md:col-span-8 space-y-5">
              
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5C158]/10 text-[#E5C158] font-bold text-xs border border-[#E5C158]/20">
                <MessageSquareQuote className="w-3.5 h-3.5" />
                <span>نگارشیار همراه شماست</span>
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                لازم نیست کلمات رسمی را بلد باشی.
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                تو فقط بگو چه می‌خواهی.
                <br />
                نگارشیار کمک می‌کند آن را روشن، محترمانه و رسمی بیان کنی.
              </p>

              {/* Core Brand Statement */}
              <div className="pt-2">
                <div className="inline-block p-3.5 sm:p-4 rounded-xl bg-[#162036]/90 border border-[#E5C158]/30 text-[#E5C158] font-black text-base sm:text-lg shadow-inner">
                  «حرفت مهم است؛ درست بیانش کن.»
                </div>
              </div>

              {/* Bullet checklist */}
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#E5C158] shrink-0" />
                  <span>بدون اصطلاحات پیچیده و غیرضروری</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#E5C158] shrink-0" />
                  <span>متناسب با تشریفات اداری و سازمان مورد نظر</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#E5C158] shrink-0" />
                  <span>انتقال شفاف خواسته شما با حفظ احترام و استحکام متن</span>
                </li>
              </ul>

              <div className="pt-4">
                <Link
                  href="/request"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#070B15] font-black text-xs sm:text-sm shadow-md hover:brightness-110 active:scale-95 transition-all"
                >
                  <span>شروع گفتگو و ثبت موضوع</span>
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>

            </div>

            {/* Visual Brand Card (4 cols) */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl bg-[#121A2D] border border-slate-700/80 p-6 flex flex-col items-center justify-center text-center shadow-lg group">
                <div className="relative mb-3">
                  <Image
                    src="/logo.jpg"
                    alt="لوگوی نگارش یار"
                    width={64}
                    height={64}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 rounded-xl object-contain bg-white p-1 border border-[#E5C158]/50 shadow-md group-hover:scale-105 transition-transform"
                  />
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#121A2D]" />
                </div>
                <h3 className="text-white font-black text-base mb-1">
                  نگارشیار
                </h3>
                <p className="text-[11px] text-slate-400">
                  دستیار نگارش و تنظیم اوراق رسمی
                </p>
                <div className="mt-3 px-2.5 py-1 rounded-full bg-[#0D1424] text-[#E5C158] text-[10px] font-bold border border-slate-800">
                  همراهی آرام و مطمئن
                </div>
              </div>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
