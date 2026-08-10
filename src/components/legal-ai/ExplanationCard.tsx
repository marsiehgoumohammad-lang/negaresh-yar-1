'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, FileText, CheckCircle2 } from 'lucide-react';

interface ExplanationCardProps {
  simpleExplanation: string;
}

export function ExplanationCard({ simpleExplanation }: ExplanationCardProps) {
  // Format explanation text into clean paragraphs or sections
  const paragraphs = simpleExplanation
    .split('\n')
    .map((p) => p.trim())
    .filter((p) => p.length > 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 sm:p-8 md:p-10 rounded-2xl bg-[#0D1424] border border-[#E5C158]/40 shadow-[0_20px_50px_rgba(0,0,0,0.6)] space-y-6 relative overflow-hidden"
    >
      {/* Subtle Top Lighting */}
      <div className="absolute -top-24 right-1/3 w-[300px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(229,193,88,0.12)_0%,transparent_70%)] pointer-events-none blur-2xl" />

      {/* Card Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E5C158]/20 to-[#D4AF37]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158] shrink-0 shadow-md">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
              <span>توضیح ساده سند شما</span>
              <Sparkles className="w-4 h-4 text-[#E5C158]" />
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              این توضیح توسط هوش مصنوعی تهیه شده و برای فهم بهتر متن حقوقی تنظیم شده است.
            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>تفسیر عامیانه و صریح</span>
        </div>
      </div>

      {/* Body: simpleExplanation */}
      <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed text-right font-normal">
        {paragraphs.map((para, index) => {
          const isHeading =
            para.endsWith('؟') ||
            para.startsWith('این برگه چیست') ||
            para.startsWith('به زبان خیلی ساده') ||
            para.startsWith('دادگاه') ||
            para.startsWith('اگر اقدامی لازم است') ||
            para.startsWith('اگر مهلتی وجود دارد');

          if (isHeading) {
            return (
              <h3
                key={index}
                className="text-base sm:text-lg font-bold text-[#F3E0A2] pt-3 pb-1 border-r-2 border-[#E5C158] pr-3 flex items-center gap-2"
              >
                {para}
              </h3>
            );
          }

          return (
            <p
              key={index}
              className="bg-[#070B15]/50 p-4 rounded-xl border border-slate-800/80 leading-loose text-slate-200 font-medium"
            >
              {para}
            </p>
          );
        })}
      </div>
    </motion.div>
  );
}
