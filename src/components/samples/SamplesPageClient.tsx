'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Container } from '@/components/ui/container';
import {
  FileText,
  Sparkles,
  Search,
  BookOpen,
  ArrowLeft,
  ChevronLeft,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  FileCheck,
} from 'lucide-react';
import { allSamplesList } from '@/data/samples';

export function SamplesPageClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('همه');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const categories = ['همه', 'نامه‌ها و عریضه‌های اداری', 'اوراق و دادخواست‌های قضایی'];

  const filteredSamples = useMemo(() => {
    return allSamplesList.filter((item) => {
      const matchesCategory =
        selectedCategory === 'همه' || item.category === selectedCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.badge.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const hubFaqs = [
    {
      q: 'آیا متون ارائه شده در بانک نمونه اسناد رایگان و قابل ویرایش هستند؟',
      a: 'بله، تمامی متون نمونه اسناد حقوقی و اداری در نگارش یار به صورت کاملا رایگان قابل مشاهده، کپی‌برداری و ویرایش بر اساس مشخصات شخصی شما هستند.',
    },
    {
      q: 'تفاوت نمونه متون رایگان با سفارش تنظیم اختصاصی توسط نگارش یار چیست؟',
      a: 'متون نمونه، قالبی عام و استاندارد را ارائه می‌دهند؛ اما در سفارش اختصاصی، کارشناسان ارشد حقوقی نگارش یار متن سند را دقیقاً منطبق بر جزئیات پرونده، مواد قانونی خاص، آرای وحدت رویه و ادله اختصاصی شما نگارش می‌کنند تا شانس موفقیت حقوقی شما به ۱۰۰٪ برسد.',
    },
    {
      q: 'آیا این نمونه‌ها مطابق با آخرین آیین‌نامه‌ها و سامانه‌های ثنا و سامد هستند؟',
      a: 'بله، کلیه متون، فرمت‌ها و ساختارهای موجود در بانک اسناد نگارش یار بر اساس جدیدترین اصلاحات قوانین سال ۱۴۰۵ و فرم‌های استاندارد دفاتر خدمات قضایی و مرکز ارتباطات مردمی تنظیم شده‌اند.',
    },
    {
      q: 'چگونه می‌توانم سفارش تنظیم سند اختصاصی ثبت کنم؟',
      a: 'کافی است روی دکمه «ثبت درخواست» کلیک کنید و در فرم مربوطه یا پیام‌رسان دلخواه خود مشخصات موضوع را بفرستید تا کارشناسان ما سریعا اقدام نمایند.',
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-6 sm:py-10 selection:bg-[#E5C158] selection:text-[#070B15]">
      {/* ---------------------------------------------------- */}
      {/* 1. HERO SECTION & SEARCH */}
      {/* ---------------------------------------------------- */}
      <section className="relative overflow-hidden pt-8 pb-12 md:pt-16 md:pb-20 border-b border-slate-800/80 bg-gradient-to-b from-[#0C1222] via-[#070B15] to-[#070B15] rounded-3xl">
        {/* Ambient Radial Spotlight */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(229,193,88,0.18)_0%,transparent_70%)] pointer-events-none blur-3xl" />

        <Container className="relative z-10 text-center">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 inline-block">
            <ol className="flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
              <li>
                <Link href="/" className="hover:text-[#E5C158] transition-colors">
                  صفحه اصلی
                </Link>
              </li>
              <li className="text-slate-600">/</li>
              <li className="text-[#E5C158] font-semibold">بانک نمونه اسناد حقوقی و اداری</li>
            </ol>
          </nav>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs md:text-sm font-semibold mb-6 shadow-lg shadow-[#E5C158]/5"
          >
            <BookOpen className="w-4 h-4 text-[#E5C158]" />
            <span>بانک مرجع نمونه اسناد سال ۱۴۰۵</span>
          </motion.div>

          {/* H1 Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight md:leading-tight max-w-4xl mx-auto tracking-tight mb-6"
          >
            بانک کامل نمونه اسناد حقوقی، قضایی و نامه‌های رسمی اداری
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed md:leading-loose font-normal mb-8"
          >
            مجموعه‌ای کاملاً جامع، کارشناسی‌شده و رایگان از الگوهای آماده دادخواست، شکواییه، لایحه دفاعیه، اظهارنامه ثنا و نامه‌های رسمی اداری به همراه راهنمای نگارش و FAQ تخصصی.
          </motion.p>

          {/* Search Box */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-xl mx-auto relative mb-8"
          >
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="جستجو در نمونه دادخواست‌ها، شکواییه‌ها، لوایح و نامه‌های اداری..."
                className="w-full pl-12 pr-12 py-3.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#E5C158] transition-colors shadow-xl"
              />
              <Search className="w-5 h-5 text-slate-400 absolute right-4 pointer-events-none" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute left-4 text-xs text-slate-400 hover:text-white bg-slate-800 px-2 py-1 rounded"
                >
                  پاکسازی
                </button>
              )}
            </div>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-2xl mx-auto"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#E5C158] text-[#070B15] font-bold shadow-lg shadow-[#E5C158]/20'
                    : 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </Container>
      </section>

      <Container className="space-y-16 sm:space-y-24">
        {/* ---------------------------------------------------- */}
        {/* 2. SAMPLES GRID */}
        {/* ---------------------------------------------------- */}
        <section className="scroll-mt-24 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#E5C158]" />
                <span>لیست نمونه اسناد و الگوها ({filteredSamples.length})</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                برای مشاهده الگوی کامل متن، راهنمای نگارش و سوالات متداول روی سند مورد نظر کلیک کنید.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSamples.map((sample) => (
              <div
                key={sample.slug}
                className="group p-6 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-[#E5C158]/50 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-[#E5C158]/5 hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#E5C158]/10 text-[#E5C158] border border-[#E5C158]/20 text-xs font-semibold">
                      {sample.badge}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {sample.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#E5C158] transition-colors leading-snug">
                    {sample.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {sample.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>متن آماده + 20 FAQ</span>
                  </span>
                  <Link
                    href={sample.href}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 group-hover:bg-[#E5C158] text-slate-200 group-hover:text-[#070B15] text-xs font-bold transition-all"
                  >
                    <span>مشاهده سند</span>
                    <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredSamples.length === 0 && (
            <div className="text-center py-12 p-8 rounded-2xl bg-slate-900/40 border border-slate-800">
              <p className="text-slate-400 text-sm">هیچ الگوی سندی مطابق با عبارت جستجوی شما یافت نشد.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('همه');
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-slate-800 text-xs text-[#E5C158] font-bold"
              >
                مشاهده همه اسناد
              </button>
            </div>
          )}
        </section>

        {/* AI Interpreter Promo Banner */}
        <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0D1424] via-[#111A2E] to-[#0D1424] border border-[#E5C158]/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-right">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5C158]/10 text-[#E5C158] text-xs font-bold border border-[#E5C158]/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>سامانه هوشمند تحلیل اوراق قضایی</span>
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              برگه قضایی، ابلاغیه ثنا یا رای دادگاه در دست دارید؟
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              تصویر یا PDF سند خود را ارسال کنید تا هوش مصنوعی نگارش یار متن آن را به زبان کاملاً ساده برای شما توضیح دهد.
            </p>
          </div>
          <Link
            href="/ai-interpreter"
            className="px-6 py-3 rounded-xl bg-[#E5C158] text-[#070B15] font-black text-xs sm:text-sm hover:brightness-110 transition-all shrink-0 flex items-center gap-2 shadow-lg shadow-[#E5C158]/20"
          >
            <span>تفسیر رای دادگاه و ابلاغیه</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </section>

        {/* ---------------------------------------------------- */}
        {/* 3. WHY NEGARESH YAR SAMPLES */}
        {/* ---------------------------------------------------- */}
        <section className="p-6 sm:p-10 rounded-3xl bg-slate-900/40 border border-slate-800">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block px-3 py-1 rounded-md bg-[#E5C158]/10 text-[#E5C158] text-xs font-semibold mb-2">
              ویژگی‌های الگوی اسناد نگارش یار
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              چرا بانک اسناد نگارش یار معتبرترین مرجع کشور است؟
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              تمامی اسناد بر اساس قوانین و آیین دادرسی‌های به‌روز و استانداردهای ثنا فرموله‌شده‌اند.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
              <div className="p-2.5 rounded-xl bg-[#E5C158]/10 text-[#E5C158] w-fit">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">انطباق ۱۰۰٪ با قوانین ۱۴۰۵</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                بازبینی مداوم متون اسناد بر اساس جدیدترین بخشنامه‌ها و آیین‌نامه‌های قضایی کشور.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 w-fit">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">ساختار آماده دفاتر قضایی</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                طراحی متون دقیقاً متناسب با فیلدها و کادرهای سامانه‌های ثنا و سامد (۱۱۱).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">امکان سفارش تنظیم اختصاصی</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                ارتقای سند عمومی به متنی تخصصی و منحصر به‌فرد توسط کارشناسان ارشد حقوقی نگارش یار.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* 4. HUB FAQ */}
        {/* ---------------------------------------------------- */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs font-semibold mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>سوالات متداول بانک اسناد</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              پرسش‌های متداول درباره استفاده از نمونه اسناد
            </h2>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto">
            {hubFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800/90 bg-slate-900/40 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-right p-5 flex items-center justify-between gap-4 hover:bg-slate-800/30 transition-colors"
                  >
                    <span className="font-bold text-sm sm:text-base text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#E5C158] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/50 pt-3">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* 5. GOLDEN CTA BANNER */}
        {/* ---------------------------------------------------- */}
        <section className="relative overflow-hidden rounded-3xl p-8 sm:p-12 text-center bg-gradient-to-r from-[#111A2E] via-[#0E1729] to-[#111A2E] border border-[#E5C158]/30 shadow-2xl shadow-[#E5C158]/5">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#E5C158]/20 border border-[#E5C158]/40 text-[#E5C158] text-xs font-bold">
              تنظیم کاملاً سفارشی و بدون خطای حقوقی
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
              نیازمند تنظیم سند تخصصی بر اساس مدارک پرونده خود هستید؟
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              کارشناسان ارشد نگارش یار، دادخواست، شکواییه یا لایحه شما را با نهایت دقت حقوقی و بدون هیچ‌گونه نقص شکلی تنظیم و تحویل می‌دهند.
            </p>
            <div className="pt-2">
              <Link
                href="/request"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#E5C158] via-[#D4952B] to-[#E5C158] text-[#070B15] font-bold text-base hover:brightness-110 transition-all shadow-xl shadow-[#E5C158]/20 group"
              >
                <span>ثبت سفارش تنظیم اختصاصی سند</span>
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
