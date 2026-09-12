'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Sparkles, FileSearch, ShieldAlert } from 'lucide-react';
import { Container } from '../ui/container';

export function SmartServices() {
  return (
    <section className="bg-[#070B15] py-16 sm:py-20 text-white relative">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-3">
            یک متن یا رأی داری که نمی‌فهمی؟
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            متن‌های پیچیده اداری و قضایی را ساده‌تر بررسی کن و بفهم موضوع از چه قرار است.
          </p>
        </div>

        {/* Feature Card */}
        <div className="max-w-3xl mx-auto rounded-3xl bg-[#0D1424] border border-slate-800 hover:border-[#E5C158]/40 transition-colors p-8 sm:p-10 shadow-xl text-right relative overflow-hidden">
          
          {/* Ambient Glow */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[radial-gradient(circle_at_center,rgba(229,193,88,0.08)_0%,transparent_70%)] pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2.5 max-w-lg">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#E5C158]/10 text-[#E5C158] font-bold text-xs border border-[#E5C158]/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>خدمت هوشمند</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                تفسیر رأی و اوراق قضایی
              </h3>
              <p className="text-sm text-slate-300">
                رأی یا متن قضایی‌ات را ساده‌تر بخوان.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                کافی است متن دادنامه یا اخطاریه خود را وارد کنید تا خلاصه‌ای روان، نکات کلیدی و مهلت‌های پیش‌رو برای شما دسته‌بندی شود.
              </p>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <Link
                href="/ai-interpreter"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#070B15] font-black text-xs sm:text-sm shadow-md hover:brightness-110 active:scale-95 transition-all"
              >
                <FileSearch className="w-4 h-4" />
                <span>بررسی یک متن</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-center gap-2 text-xs text-slate-400 text-center">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>این ابزار برای درک بهتر متن است و جایگزین مشاوره حقوقی نیست.</span>
          </div>

        </div>
      </Container>
    </section>
  );
}
