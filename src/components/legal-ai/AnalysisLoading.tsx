'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, CheckCircle2, Loader2, Sparkles, Scale, AlertCircle } from 'lucide-react';

const ANALYSIS_STEPS = [
  { id: 1, title: 'در حال خواندن و اسکن دقیق متون سند...', icon: Scale },
  { id: 2, title: 'استخراج کلمات کلیدی، مواد قانونی و اصطلاحات تخصصی...', icon: Cpu },
  { id: 3, title: 'تحلیل رای دادگاه، خواسته‌های حقوقی و میزان محکومیت...', icon: Sparkles },
  { id: 4, title: 'محاسبه ریسک‌ها، خسارات دادرسی و مهلت‌های قانونی...', icon: AlertCircle },
  { id: 5, title: 'آماده‌سازی خلاصه به زبان ساده و اقدامات بعدی...', icon: CheckCircle2 },
];

export function AnalysisLoading() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev < ANALYSIS_STEPS.length - 1 ? prev + 1 : prev));
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  const progressPercentage = Math.min(100, Math.round(((currentStep + 1) / ANALYSIS_STEPS.length) * 100));

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      className="p-6 sm:p-8 rounded-2xl bg-[#0D1424] border border-[#E5C158]/40 shadow-[0_0_40px_rgba(0,0,0,0.8)] text-right space-y-6 relative overflow-hidden"
    >
      {/* Background Lighting Beam */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(229,193,88,0.15)_0%,transparent_70%)] pointer-events-none blur-xl" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
            <Loader2 className="w-5 h-5 animate-spin text-[#E5C158]" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-extrabold text-white">
              سیستم هوش مصنوعی Gemini در حال پردازش سند است
            </h3>
            <p className="text-xs text-slate-400">
              لطفاً چند لحظه شکیبا باشید (میانگین زمان پردازش: کمتر از ۱۵ ثانیه)
            </p>
          </div>
        </div>

        <span className="text-xs font-mono font-bold text-[#E5C158] px-3 py-1 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/20">
          {progressPercentage}%
        </span>
      </div>

      {/* Animated Progress Line */}
      <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden relative">
        <motion.div
          className="h-full bg-gradient-to-l from-[#F3E0A2] via-[#E5C158] to-[#D4AF37]"
          initial={{ width: '0%' }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Timeline Steps */}
      <div className="space-y-3 pt-2">
        {ANALYSIS_STEPS.map((step, idx) => {
          const isDone = idx < currentStep;
          const isCurrent = idx === currentStep;

          return (
            <div
              key={step.id}
              className={`p-3 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                isCurrent
                  ? 'bg-[#E5C158]/10 border-[#E5C158]/50 text-white shadow-[0_0_15px_rgba(229,193,88,0.1)]'
                  : isDone
                  ? 'bg-slate-900/50 border-slate-800/80 text-slate-300'
                  : 'bg-slate-900/20 border-slate-800/40 text-slate-600'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                    isCurrent
                      ? 'bg-[#E5C158] text-[#070B15]'
                      : isDone
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : 'bg-slate-800 text-slate-500'
                  }`}
                >
                  {isDone ? <CheckCircle2 className="w-4 h-4" /> : step.id}
                </div>
                <span className={`text-xs sm:text-sm font-semibold ${isCurrent ? 'text-[#F3E0A2]' : ''}`}>
                  {step.title}
                </span>
              </div>

              {isCurrent && (
                <div className="flex items-center gap-1.5 text-[11px] text-[#E5C158] font-mono">
                  <span className="w-2 h-2 rounded-full bg-[#E5C158] animate-ping" />
                  در حال اجرا
                </div>
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
