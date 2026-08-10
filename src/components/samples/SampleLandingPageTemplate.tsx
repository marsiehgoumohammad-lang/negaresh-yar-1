'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Container } from '@/components/ui/container';
import {
  FileText,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Award,
  ArrowLeft,
  ChevronDown,
  AlertTriangle,
  HelpCircle,
  ChevronLeft,
  Send,
  Check,
  ShieldAlert,
  BookOpen,
  FileCheck,
  Copy,
  PenTool,
} from 'lucide-react';
import { SampleLandingData } from '@/data/samples/types';

export function SampleLandingPageTemplate({ data }: { data: SampleLandingData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copied, setCopied] = useState(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleCopyText = () => {
    if (typeof window !== 'undefined' && data.sampleStructureContent) {
      navigator.clipboard.writeText(data.sampleStructureContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const documentSchema = {
    '@context': 'https://schema.org',
    '@type': 'DigitalDocument',
    name: data.h1Title,
    description: data.heroSubtitle,
    publisher: {
      '@type': 'Organization',
      name: 'نگارش یار',
      url: 'https://www.negaresh-yar.ir',
      telephone: '+989915147789',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'مشهد',
        addressRegion: 'خراسان رضوی',
        addressCountry: 'IR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '36.2972',
        longitude: '59.6067',
      },
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.negaresh-yar.ir/logo.jpg',
      },
    },
    url: `https://www.negaresh-yar.ir/samples/${data.slug}`,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'صفحه اصلی',
        item: 'https://www.negaresh-yar.ir',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'بانک نمونه اسناد حقوقی و اداری',
        item: 'https://www.negaresh-yar.ir/samples',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: data.h1Title,
        item: `https://www.negaresh-yar.ir/samples/${data.slug}`,
      },
    ],
  };

  return (
    <div className="space-y-16 sm:space-y-24 py-6 sm:py-10 selection:bg-[#E5C158] selection:text-[#070B15]">
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(documentSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* ---------------------------------------------------- */}
      {/* 1. HERO SECTION & BREADCRUMBS */}
      {/* ---------------------------------------------------- */}
      <section className="relative overflow-hidden pt-8 pb-12 md:pt-16 md:pb-20 border-b border-slate-800/80 bg-gradient-to-b from-[#0C1222] via-[#070B15] to-[#070B15] rounded-3xl">
        {/* Ambient Radial Spotlight */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[750px] h-[380px] bg-[radial-gradient(circle_at_center,rgba(229,193,88,0.18)_0%,transparent_70%)] pointer-events-none blur-3xl" />

        <Container className="relative z-10 text-center">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 inline-block">
            <ol className="flex items-center justify-center gap-2 text-xs text-slate-400 font-medium flex-wrap">
              <li>
                <Link href="/" className="hover:text-[#E5C158] transition-colors">
                  صفحه اصلی
                </Link>
              </li>
              <li className="text-slate-600">/</li>
              <li>
                <Link href="/samples" className="hover:text-[#E5C158] transition-colors">
                  بانک نمونه اسناد حقوقی و اداری
                </Link>
              </li>
              <li className="text-slate-600">/</li>
              <li className="text-[#E5C158] font-semibold">{data.categoryName}</li>
            </ol>
          </nav>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs md:text-sm font-semibold mb-6 shadow-lg shadow-[#E5C158]/5"
          >
            <Sparkles className="w-4 h-4 text-[#E5C158]" />
            <span>{data.badge}</span>
          </motion.div>

          {/* H1 Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight md:leading-tight max-w-4xl mx-auto tracking-tight mb-6"
          >
            {data.h1Title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed md:leading-loose font-normal mb-8"
          >
            {data.heroSubtitle}
          </motion.p>

          {/* Trust Chips */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-3xl mx-auto mb-10 text-xs sm:text-sm text-slate-300"
          >
            {data.heroTrustChips.map((chip, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-200"
              >
                <CheckCircle2 className="w-4 h-4 text-[#E5C158]" />
                <span>{chip}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons in Hero */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
          >
            <Link
              href={data.ctaPrimaryHref}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#E5C158] via-[#D4952B] to-[#E5C158] text-[#070B15] font-bold text-sm md:text-base hover:brightness-110 transition-all duration-200 shadow-xl shadow-[#E5C158]/20 flex items-center justify-center gap-2 group"
            >
              <Send className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>تنظیم اختصاصی این سند توسط نگارش یار</span>
            </Link>
            <a
              href="#sample-template"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-slate-200 hover:text-white font-medium text-sm md:text-base hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-[#E5C158]" />
              <span>مشاهده قالب متن نمونه</span>
            </a>
          </motion.div>
        </Container>
      </section>

      <Container className="space-y-16 sm:space-y-24">
        {/* ---------------------------------------------------- */}
        {/* 2. WHAT IS THIS DOCUMENT */}
        {/* ---------------------------------------------------- */}
        <section className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E5C158]/10 text-[#E5C158] text-xs font-semibold">
                <FileText className="w-3.5 h-3.5" />
                <span>تعریف و مفاهیم حقوقی</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                {data.whatIsTitle}
              </h2>
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {data.whatIsParagraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 gap-4">
              {data.whatIsHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-900/40 border border-slate-800 hover:border-[#E5C158]/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#E5C158]/10 text-[#E5C158] shrink-0 mt-0.5">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* 3. WHEN IT SHOULD BE USED */}
        {/* ---------------------------------------------------- */}
        <section className="p-6 sm:p-10 rounded-3xl bg-slate-900/50 border border-slate-800 relative overflow-hidden">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs font-semibold mb-3">
              <Clock className="w-3.5 h-3.5" />
              <span>موقعیت‌های کاربردی</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {data.whenToUseTitle}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              {data.whenToUseSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.whenToUseList.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-all"
              >
                <div className="flex items-center gap-2.5 mb-2.5 text-[#E5C158]">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* 4. REQUIRED INFORMATION */}
        {/* ---------------------------------------------------- */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-3">
              <FileCheck className="w-3.5 h-3.5" />
              <span>مستندات و ضمیمه‌ها</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {data.requiredInfoTitle}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              {data.requiredInfoSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.requiredInfoList.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-7 h-7 rounded-full bg-emerald-500/10 text-emerald-400 font-bold text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-10">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* 5. PROFESSIONAL WRITING TIPS */}
        {/* ---------------------------------------------------- */}
        <section className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-slate-900/80 to-slate-950/80 border border-slate-800">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 text-purple-400 text-xs font-semibold mb-3">
              <PenTool className="w-3.5 h-3.5" />
              <span>اصول نگارش و لحن</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {data.writingTipsTitle}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              {data.writingTipsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.writingTipsList.map((tip, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-start gap-4"
              >
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 shrink-0 mt-0.5">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1.5">{tip.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* 6. COMMON MISTAKES & RISKS */}
        {/* ---------------------------------------------------- */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-500/10 text-rose-400 text-xs font-semibold mb-3">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>هشدارها و اشتباهات رایج</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {data.commonMistakesTitle}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              {data.commonMistakesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.commonMistakesList.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-rose-900/30 hover:border-rose-500/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5 text-rose-400 font-bold text-sm">
                    <ShieldAlert className="w-5 h-5 shrink-0" />
                    <h3>{item.mistake}</h3>
                  </div>
                  <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-900/20 text-xs text-rose-300 leading-relaxed">
                    <span className="font-bold block mb-1">پیامد و خسارت:</span>
                    {item.impact}
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-emerald-400 leading-relaxed">
                  <span className="font-bold block text-slate-300 mb-1">راهکار نگارش یار:</span>
                  {item.solution}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* 7. IMPORTANT LEGAL NOTES */}
        {/* ---------------------------------------------------- */}
        <section className="p-6 sm:p-8 rounded-3xl bg-amber-500/5 border border-amber-500/20 text-amber-200">
          <div className="flex items-center gap-3 mb-4">
            <ShieldAlert className="w-6 h-6 text-amber-400 shrink-0" />
            <h2 className="text-xl font-bold text-amber-300">{data.legalNotesTitle}</h2>
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed list-disc list-inside">
            {data.legalNotesList.map((note, idx) => (
              <li key={idx} className="marker:text-amber-400">
                {note}
              </li>
            ))}
          </ul>
        </section>

        {/* ---------------------------------------------------- */}
        {/* 8. SAMPLE STRUCTURE & PREVIEW BOX */}
        {/* ---------------------------------------------------- */}
        <section id="sample-template" className="scroll-mt-24 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E5C158]/10 text-[#E5C158] text-xs font-semibold mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>قالب و چیدمان متن</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {data.sampleStructureTitle}
              </h2>
            </div>
            <button
              onClick={handleCopyText}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs sm:text-sm text-slate-200 transition-colors shrink-0"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">متن نمونه کپی شد!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#E5C158]" />
                  <span>کپی نمونه متن به حافظه</span>
                </>
              )}
            </button>
          </div>

          <p className="text-sm text-slate-400 leading-relaxed">
            {data.sampleStructureIntro}
          </p>

          {/* Sample Code / Document Box */}
          <div className="relative rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 font-mono text-xs sm:text-sm text-slate-200 leading-loose overflow-x-auto dir-rtl whitespace-pre-wrap selection:bg-[#E5C158] selection:text-[#070B15]">
            <div className="absolute top-3 left-3 flex items-center gap-1.5 opacity-60 pointer-events-none">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            </div>
            <div className="pt-4 border-t border-slate-800/60 font-sans">
              {data.sampleStructureContent}
            </div>
          </div>

          {/* Features checklist below template */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            {data.sampleStructureFeatures.map((ft, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300 flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-[#E5C158] shrink-0" />
                <span>{ft}</span>
              </div>
            ))}
          </div>

          {/* Contextual Service Link Callout Banner */}
          {data.relatedServices.length > 0 && (
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0D1424] via-[#121A2E] to-[#0D1424] border-2 border-[#E5C158]/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl mt-6">
              <div className="space-y-1 text-center sm:text-right">
                <span className="text-[11px] font-bold text-[#E5C158] bg-[#E5C158]/10 px-2.5 py-0.5 rounded-full border border-[#E5C158]/30 inline-block mb-1">
                  سرویس نگارش تخصصی
                </span>
                <h3 className="text-base font-bold text-white">
                  نیاز به تنظیم اختصاصی و فاقد ایراد قانونی این سند دارید؟
                </h3>
                <p className="text-xs text-slate-300">
                  کارشناسان ارشد نگارش یار سند شما را مطابق آخرین قوانین و آیین‌نامه‌ها به صورت اختصاصی تنظیم می‌کنند.
                </p>
              </div>
              <Link
                href={data.relatedServices[0].href}
                className="px-6 py-3 rounded-xl bg-[#E5C158] hover:bg-[#D4AF37] text-[#070B15] font-black text-xs sm:text-sm transition-all shrink-0 flex items-center gap-2 shadow-lg shadow-[#E5C158]/20 group"
              >
                <span>مشاهده خدمت {data.relatedServices[0].title}</span>
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </Link>
            </div>
          )}
        </section>

        {/* ---------------------------------------------------- */}
        {/* 9. FREQUENTLY ASKED QUESTIONS (20+ ITEMS) */}
        {/* ---------------------------------------------------- */}
        <section className="scroll-mt-24 space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs font-semibold mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>پرسش‌های متداول و تخصصی</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {data.faqTitle}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              پاسخ جامع به کامل‌ترین مجموعه پرسش‌های حقوقی و اداری درباره {data.categoryName}
            </p>
          </div>

          <div className="space-y-3 max-w-4xl mx-auto">
            {data.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800/90 bg-slate-900/40 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-right p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-slate-800/30 transition-colors"
                  >
                    <span className="font-bold text-sm sm:text-base text-white leading-snug">
                      {idx + 1}. {faq.q}
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
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/50 pt-4">
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
        {/* 10. INTERNAL LINKING: SERVICES & SAMPLES */}
        {/* ---------------------------------------------------- */}
        <section className="space-y-8 pt-6 border-t border-slate-800/80">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Related Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E5C158]" />
                <span>خدمات اختصاصی نگارش یار</span>
              </h3>
              <div className="space-y-3">
                {data.relatedServices.map((srv, idx) => (
                  <Link
                    key={idx}
                    href={srv.href}
                    className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-[#E5C158]/40 transition-all flex items-center justify-between group block"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#E5C158]/10 text-[#E5C158]">
                          {srv.badge}
                        </span>
                        <h4 className="text-sm font-bold text-white group-hover:text-[#E5C158] transition-colors">
                          {srv.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-400">{srv.desc}</p>
                    </div>
                    <ChevronLeft className="w-4 h-4 text-slate-500 group-hover:text-[#E5C158] transition-transform group-hover:-translate-x-1 shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Related Samples */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#E5C158]" />
                <span>نمونه اسناد مرتبط دیگر</span>
              </h3>
              <div className="space-y-3">
                {data.relatedSamples.map((smp, idx) => (
                  <Link
                    key={idx}
                    href={smp.href}
                    className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition-all flex items-center justify-between group block"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400">
                          {smp.badge}
                        </span>
                        <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                          {smp.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-400">{smp.desc}</p>
                    </div>
                    <ChevronLeft className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-transform group-hover:-translate-x-1 shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* 11. GOLDEN CTA BANNER */}
        {/* ---------------------------------------------------- */}
        <section className="relative overflow-hidden rounded-3xl p-8 sm:p-12 text-center bg-gradient-to-r from-[#111A2E] via-[#0E1729] to-[#111A2E] border border-[#E5C158]/30 shadow-2xl shadow-[#E5C158]/5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E5C158]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#E5C158]/20 border border-[#E5C158]/40 text-[#E5C158] text-xs font-bold">
              تضمین کیفیت نگارش کارشناسان ارشد حقوقی
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
              {data.ctaTitle}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {data.ctaDescription}
            </p>
            <div className="pt-2">
              <Link
                href={data.ctaPrimaryHref}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#E5C158] via-[#D4952B] to-[#E5C158] text-[#070B15] font-bold text-base hover:brightness-110 transition-all shadow-xl shadow-[#E5C158]/20 group"
              >
                <span>{data.ctaPrimaryBtnText}</span>
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
