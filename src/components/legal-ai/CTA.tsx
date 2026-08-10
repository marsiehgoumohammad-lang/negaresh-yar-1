'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ShieldCheck, ArrowLeft, PhoneCall, Sparkles } from 'lucide-react';

interface CTAProps {
  ctaMessage: string;
}

export function CTA({ ctaMessage }: CTAProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 sm:p-8 md:p-10 rounded-2xl bg-gradient-to-br from-[#0D1424] via-[#111A2E] to-[#0D1424] border-2 border-[#E5C158] shadow-[0_0_35px_rgba(229,193,88,0.2)] text-right space-y-6 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-12 -right-12 w-[250px] h-[250px] bg-[radial-gradient(circle_at_center,rgba(229,193,88,0.15)_0%,transparent_70%)] pointer-events-none blur-xl" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#E5C158] text-[#070B15] flex items-center justify-center font-black shadow-lg shrink-0">
            <Sparkles className="w-5 h-5 fill-[#070B15]" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-white">
              برای اقدام بعدی نیاز به راهنمایی دارید؟
            </h3>
            <p className="text-xs text-[#F3E0A2] font-semibold mt-0.5">
              تیم نگارش یار همراه شماست
            </p>
          </div>
        </div>

        <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold flex items-center gap-1 shrink-0">
          <ShieldCheck className="w-3.5 h-3.5" />
          پشتیبانی تخصصی حقوقی
        </span>
      </div>

      {/* Body: ctaMessage */}
      <div className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-[#070B15]/70 p-5 rounded-xl border border-slate-800 font-medium whitespace-pre-line space-y-2">
        {ctaMessage}
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
        <Link
          href="/"
          className="w-full sm:w-auto flex-1 py-4 px-6 rounded-xl bg-gradient-to-l from-[#F3E0A2] via-[#E5C158] to-[#D4AF37] text-[#070B15] font-black text-xs sm:text-sm shadow-lg hover:shadow-[0_0_25px_rgba(229,193,88,0.4)] transition-all flex items-center justify-center gap-2 text-center"
        >
          <span>ثبت درخواست در نگارش یار</span>
          <ArrowLeft className="w-4 h-4" />
        </Link>

        <a
          href="tel:+989915147789"
          className="w-full sm:w-auto py-4 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors text-center"
        >
          <PhoneCall className="w-4 h-4 text-[#E5C158]" />
          <span>مشاوره با کارشناس</span>
        </a>
      </div>
    </motion.div>
  );
}
