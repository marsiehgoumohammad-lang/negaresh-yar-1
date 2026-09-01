'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { MessengerConfig, DEFAULT_MESSENGERS } from '@/lib/messengers-types';
import {
  Lock,
  Zap,
  Sparkles,
  FileCheck2,
} from 'lucide-react';

export function RequestPageClient() {
  const [messengers, setMessengers] = useState<MessengerConfig[]>(DEFAULT_MESSENGERS);
  const [loading, setLoading] = useState(true);
  const [activeRipple, setActiveRipple] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMessengers() {
      try {
        const cached = localStorage.getItem('negaresh_admin_messengers_cache');
        if (cached) {
          try {
            const parsed = JSON.parse(cached);
            if (Array.isArray(parsed) && parsed.length > 0) {
              setMessengers(parsed.filter((m: MessengerConfig) => m.enabled));
            }
          } catch {
            // ignore
          }
        }

        const res = await fetch(`/api/messengers?t=${Date.now()}`, {
          cache: 'no-store',
          headers: { 'Cache-Control': 'no-cache' },
        });
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setMessengers(data);
          }
        }
      } catch (err) {
        console.error('Failed to load messengers config:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchMessengers();
  }, []);

  const handleMessengerClick = (messenger: MessengerConfig) => {
    setActiveRipple(messenger.id);
    setTimeout(() => setActiveRipple(null), 600);

    // Immediate navigation to messenger URL in new tab without confirmation dialog
    if (messenger.url && messenger.url !== '#') {
      window.open(messenger.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="py-6 sm:py-10 space-y-10 selection:bg-[#E5C158] selection:text-[#070B15]">
      {/* ---------------------------------------------------- */}
      {/* 1. COMPACT HERO SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="relative overflow-hidden pt-6 pb-8 border-b border-slate-800/60 bg-gradient-to-b from-[#0C1222] via-[#070B15] to-[#070B15] rounded-3xl text-center">
        {/* Subtle Ambient Lighting Glow */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(229,193,88,0.14)_0%,transparent_70%)] pointer-events-none blur-3xl" />

        <Container>
          <div className="max-w-3xl mx-auto space-y-4">
            {/* Minimal Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/25 text-[#E5C158] text-[11px] font-bold backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E5C158]" />
              <span>ارتباط فوری با کارشناسان نگارش یار</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158] animate-pulse" />
            </motion.div>

            {/* Compact Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-snug"
            >
              ثبت درخواست خدمات{' '}
              <span className="bg-gradient-to-l from-[#F3E0A2] via-[#E5C158] to-[#D4AF37] bg-clip-text text-transparent">
                نگارش یار
              </span>
            </motion.h1>

            {/* Concise One-Line Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium"
            >
              تنظیم دادخواست، لایحه دفاعیه، شکواییه، اظهارنامه، نامه‌های اداری، تفسیر اسناد و ثبت‌نام‌های دولتی؛ فقط پیام‌رسان دلخواه خود را انتخاب کنید.
            </motion.p>
          </div>
        </Container>

        {/* ---------------------------------------------------- */}
        {/* COMPACT PROCESS TIMELINE (MAX HEIGHT ~120px) */}
        {/* ---------------------------------------------------- */}
        <div className="pt-8">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-4xl mx-auto p-3 sm:p-4 rounded-2xl bg-[#0F172A]/80 border border-slate-800/80 backdrop-blur-md shadow-lg"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center text-center">
                {/* Step 1 */}
                <div className="flex items-center justify-center gap-2.5 p-2 rounded-xl bg-slate-900/60 border border-slate-800/60">
                  <span className="w-6 h-6 rounded-full bg-[#E5C158]/15 border border-[#E5C158]/40 text-[#E5C158] font-black text-xs flex items-center justify-center shrink-0">
                    ۱
                  </span>
                  <span className="text-xs font-bold text-slate-200">
                    ارسال شرح درخواست (متن یا صوت)
                  </span>
                </div>

                {/* Step 2 */}
                <div className="flex items-center justify-center gap-2.5 p-2 rounded-xl bg-slate-900/60 border border-slate-800/60">
                  <span className="w-6 h-6 rounded-full bg-blue-500/15 border border-blue-500/40 text-blue-400 font-black text-xs flex items-center justify-center shrink-0">
                    ۲
                  </span>
                  <span className="text-xs font-bold text-slate-200">
                    ارسال مدارک و اسناد مربوطه
                  </span>
                </div>

                {/* Step 3 */}
                <div className="flex items-center justify-center gap-2.5 p-2 rounded-xl bg-slate-900/60 border border-slate-800/60">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 font-black text-xs flex items-center justify-center shrink-0">
                    ۳
                  </span>
                  <span className="text-xs font-bold text-slate-200">
                    بررسی و دریافت راهکار تخصصی
                  </span>
                </div>
              </div>
            </motion.div>
          </Container>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. MESSENGER SELECTION HUB (PRIMARY VISUAL CENTER) */}
      {/* ---------------------------------------------------- */}
      <section className="py-4">
        <Container>
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-lg sm:text-xl font-black text-white tracking-tight">
              پیام‌رسان موردنظر خود را انتخاب کنید
            </h2>
            <p className="text-xs text-slate-400 font-medium">
              با لمس هر پیام‌رسان، مستقیماً وارد گفتگو با کارشناس خواهید شد.
            </p>
          </div>

          {loading ? (
            /* Skeleton Loading Grid */
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="h-32 rounded-2xl bg-[#0D1424] border border-slate-800 animate-pulse"
                />
              ))}
            </div>
          ) : (
            /* Launcher Style Grid */
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.06 },
                },
              }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 max-w-5xl mx-auto"
            >
              {messengers
                .filter((m) => m.enabled)
                .map((m) => (
                  <motion.div
                    key={m.id}
                    variants={{
                      hidden: { opacity: 0, scale: 0.9, y: 15 },
                      show: { opacity: 1, scale: 1, y: 0 },
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => handleMessengerClick(m)}
                      className="w-full h-full flex flex-col items-center justify-center p-5 rounded-2xl bg-[#0D1424]/90 hover:bg-[#121B30] border border-slate-800 hover:border-[#E5C158]/70 shadow-[0_8px_25px_rgba(0,0,0,0.4)] hover:shadow-[0_0_30px_rgba(229,193,88,0.25)] transition-all duration-300 hover:scale-105 active:scale-95 group relative overflow-hidden cursor-pointer"
                    >
                      {/* Interactive Ripple Effect */}
                      {activeRipple === m.id && (
                        <span className="absolute inset-0 bg-[#E5C158]/25 rounded-2xl animate-ping pointer-events-none" />
                      )}

                      {/* Golden Soft Background Radial Hover Glow */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,193,88,0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                      {/* Large Messenger Icon Tile (76px) */}
                      <div
                        className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl p-4 flex items-center justify-center shrink-0 border border-white/10 shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-2"
                        style={{
                          backgroundColor: `${m.color}15`,
                          borderColor: `${m.color}45`,
                        }}
                      >
                        <Image
                          src={m.icon}
                          alt={m.name}
                          width={56}
                          height={56}
                          className="w-full h-full object-contain drop-shadow-md"
                          unoptimized
                        />
                      </div>

                      {/* Clean Messenger Name */}
                      <span className="mt-4 text-sm font-extrabold text-white group-hover:text-[#E5C158] transition-colors tracking-tight">
                        {m.name}
                      </span>
                    </button>
                  </motion.div>
                ))}
            </motion.div>
          )}
        </Container>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. COMPACT TRUST & SECURITY PANEL (~120px) */}
      {/* ---------------------------------------------------- */}
      <section className="pt-4 pb-6">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#0C1222] via-[#0F172A] to-[#0C1222] border border-[#E5C158]/40 shadow-[0_0_25px_rgba(229,193,88,0.1)] text-right"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              {/* Item 1 */}
              <div className="flex items-center gap-3 p-2">
                <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158] shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white">حفظ محرمانگی کامل</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    اطلاعات و پیام‌های شما محفوظ و محرمانه است.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-3 p-2 border-t md:border-t-0 md:border-r border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white">بررسی امن اسناد</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    مدارک توسط کارشناسان حقوقی تحلیل می‌شود.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-center gap-3 p-2 border-t md:border-t-0 md:border-r border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white">پاسخگویی سریع</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    ارائه راهکار در کوتاه‌ترین زمان ممکن.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
