'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Upload, Cpu, CheckCircle2, ShieldCheck, Sparkles, FileText, Scale } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden py-10 md:py-14 border-b border-slate-800/80 bg-gradient-to-b from-[#0B1120] via-[#070B15] to-[#070B15]">
      {/* Radial Lighting Background */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-[radial-gradient(circle_at_center,rgba(229,193,88,0.12)_0%,transparent_70%)] pointer-events-none blur-2xl" />
      <div className="absolute bottom-0 left-10 w-[350px] h-[350px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08)_0%,transparent_70%)] pointer-events-none blur-2xl" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Right Column: Hero Content */}
        <div className="lg:col-span-7 space-y-6 text-right">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-semibold backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#E5C158] animate-pulse" />
            <Sparkles className="w-3.5 h-3.5 text-[#E5C158]" />
            <span>هوش مصنوعی حقوقی نگارش یار</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight text-white tracking-tight"
          >
            تفسیر رای دادگاه و اوراق قضایی{' '}
            <span className="bg-gradient-to-l from-[#F3E0A2] via-[#E5C158] to-[#D4AF37] bg-clip-text text-transparent underline decoration-[#E5C158]/40 decoration-wavy underline-offset-8">
              رایگان
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl"
          >
            اگر برگه قضایی، دادنامه، ابلاغیه ثنا یا قرار دادسرا دریافت کرده‌اید و از اصطلاحات سنگین حقوقی سردرنمی‌آورید، کافیست فایل آن را بفرستید تا معنی رای، مهلت اعتراض و قدم بعدی را به زبان ساده توضیح دهیم.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap items-center gap-3 pt-1"
          >
            <a
              href="#interpreter-upload"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#E5C158] to-[#D4AF37] text-[#070B15] font-black text-xs sm:text-sm hover:brightness-110 transition-all shadow-lg shadow-[#E5C158]/20 flex items-center gap-2"
            >
              <Upload className="w-4 h-4" />
              <span>تفسیر رای من</span>
            </a>
            <a
              href="/samples/appeal"
              className="px-4 py-2.5 rounded-xl bg-slate-800/90 border border-slate-700/80 text-white font-bold text-xs sm:text-sm hover:border-[#E5C158]/50 hover:text-[#E5C158] transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#E5C158]" />
              <span>نمونه رای و دادنامه را ببینید</span>
            </a>
          </motion.div>

          {/* Step Flow Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3"
          >
            <div className="p-3 rounded-xl bg-[#0D1424]/90 border border-slate-800/80 flex items-center gap-3 hover:border-[#E5C158]/40 transition-all group">
              <div className="w-9 h-9 rounded-lg bg-[#E5C158]/10 border border-[#E5C158]/20 flex items-center justify-center text-[#E5C158] shrink-0">
                <Upload className="w-4 h-4" />
              </div>
              <div className="text-right">
                <span className="text-[10px] font-bold text-[#E5C158] block mb-0.5">۱. ارسال فایل</span>
                <span className="text-xs font-bold text-white block">عکس یا PDF سند</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#0D1424]/90 border border-slate-800/80 flex items-center gap-3 hover:border-[#E5C158]/40 transition-all group">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <Cpu className="w-4 h-4" />
              </div>
              <div className="text-right">
                <span className="text-[10px] font-bold text-blue-400 block mb-0.5">۲. پردازش سریع</span>
                <span className="text-xs font-bold text-white block">تشخیص هوشمند سند</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#0D1424]/90 border border-slate-800/80 flex items-center gap-3 hover:border-[#E5C158]/40 transition-all group">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="text-right">
                <span className="text-[10px] font-bold text-emerald-400 block mb-0.5">۳. فهم آسان</span>
                <span className="text-xs font-bold text-white block">توضیح به زبان ساده</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Left Column: Graphic */}
        <div className="lg:col-span-5 relative flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full max-w-[340px] aspect-square flex items-center justify-center"
          >
            {/* Ambient Backlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#E5C158]/20 to-blue-600/20 rounded-3xl blur-2xl transform rotate-6 scale-95" />

            {/* Glassmorphic Legal Document */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 w-[90%] h-[82%] rounded-2xl bg-[#0D1424]/95 border border-[#E5C158]/40 p-5 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col justify-between"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#E5C158]/20 border border-[#E5C158]/40 flex items-center justify-center text-[#E5C158]">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">تفسیر هوشمند متن</h4>
                    <p className="text-[10px] text-slate-400">بدون اصطلاحات پیچیده</p>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Text Lines */}
              <div className="relative py-3 space-y-2.5 overflow-hidden">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E5C158]" />
                  <div className="h-2 rounded bg-slate-700 w-3/4" />
                </div>
                <div className="h-2 rounded bg-slate-800 w-full" />
                <div className="h-2 rounded bg-slate-800 w-5/6" />

                {/* Extracted Insight Pill */}
                <div className="mt-3 p-2.5 rounded-lg bg-[#E5C158]/10 border border-[#E5C158]/30 text-[11px] text-[#F3E0A2] font-semibold flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 shrink-0 text-[#E5C158]" />
                  <span>توضیح عامیانه و روان سند قضایی</span>
                </div>
              </div>

              {/* Bottom Footer Info */}
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  سامانه فعال است
                </span>
                <Scale className="w-4 h-4 text-[#E5C158]" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
