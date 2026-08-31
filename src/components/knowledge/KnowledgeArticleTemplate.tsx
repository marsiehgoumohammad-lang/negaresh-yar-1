'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Container } from '@/components/ui/container';
import {
  BookOpen,
  Sparkles,
  Clock,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Send,
  Share2,
  FileText,
  ShieldCheck,
  ChevronDown,
  Check,
  Award,
  UserCheck,
  ArrowLeft,
  ListOrdered,
  FileCheck2,
  Scale,
} from 'lucide-react';
import { KnowledgeArticleData } from '@/data/knowledge/types';

export function KnowledgeArticleTemplate({ data }: { data: KnowledgeArticleData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copiedLink, setCopiedLink] = useState(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  // Generate Article Schema JSON-LD
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.h1Title,
    description: data.heroSubtitle,
    inLanguage: 'fa-IR',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.negaresh-yar.ir/knowledge/${data.slug}`,
    },
    author: {
      '@type': 'Organization',
      name: 'پژوهشگاه و کارشناسان حقوقی نگارش یار',
      url: 'https://www.negaresh-yar.ir',
    },
    publisher: {
      '@type': 'Organization',
      name: 'نگارش یار',
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
    datePublished: '2026-05-01',
    dateModified: '2026-08-01',
  };

  // Generate FAQ Schema JSON-LD
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

  // Breadcrumb Schema JSON-LD
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
        name: 'پایگاه دانش حقوقی و اداری',
        item: 'https://www.negaresh-yar.ir/knowledge',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: data.h1Title,
        item: `https://www.negaresh-yar.ir/knowledge/${data.slug}`,
      },
    ],
  };

  // Prevent nested path concatenation bugs (e.g. /knowledge/how-to-buy-car/ثبت-نام...)
  const getSafeUrl = (href: string) => {
    if (!href.startsWith('/') && !href.startsWith('http') && !href.startsWith('#')) {
      return `/${href}`;
    }
    return href;
  };

  return (
    <div className="space-y-12 sm:space-y-16 py-6 sm:py-10 selection:bg-[#E5C158] selection:text-[#070B15]">
      {/* Inject Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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
      {/* 1. HERO HEADER SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="relative overflow-hidden pt-8 pb-12 md:pt-14 md:pb-16 border-b border-slate-800/80 bg-gradient-to-b from-[#0C1222] via-[#070B15] to-[#070B15] rounded-3xl">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[750px] h-[380px] bg-[radial-gradient(circle_at_center,rgba(229,193,88,0.15)_0%,transparent_70%)] pointer-events-none blur-3xl" />

        <Container className="relative z-10 text-center">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 inline-block">
            <ol className="flex items-center justify-center gap-2 text-xs text-slate-400 font-medium flex-wrap">
              <li>
                <Link href="/" className="hover:text-[#E5C158] transition-colors">
                  صفحه اصلی
                </Link>
              </li>
              <li className="text-slate-600">/</li>
              <li>
                <Link href="/knowledge" className="hover:text-[#E5C158] transition-colors">
                  پایگاه دانش حقوقی
                </Link>
              </li>
              <li className="text-slate-600">/</li>
              <li className="text-[#E5C158] font-semibold">{data.category}</li>
            </ol>
          </nav>

          {/* Badge & Meta Chips */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              {data.badge}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-full border border-slate-800">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {data.readTime}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-full border border-slate-800">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              بروزرسانی: {data.lastUpdated}
            </span>
          </div>

          {/* H1 Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-5xl font-black text-white leading-tight md:leading-tight max-w-4xl mx-auto tracking-tight mb-6"
          >
            {data.h1Title}
          </motion.h1>

          {/* Hero Subtitle */}
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed md:leading-loose font-normal mb-8">
            {data.heroSubtitle}
          </p>

          {/* Trust Chips Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto text-right">
            {data.heroTrustChips.map((chip, i) => (
              <div
                key={i}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300"
              >
                <CheckCircle2 className="w-4 h-4 text-[#E5C158] shrink-0" />
                <span className="line-clamp-1">{chip}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. MAIN CONTENT LAYOUT (2 COLUMNS ON DESKTOP) */}
      {/* ---------------------------------------------------- */}
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* RIGHT COLUMN (OR MAIN): ARTICLE BODY (8 COLS) */}
        <div className="lg:col-span-8 space-y-10 text-right">
          {/* A. QUICK FEATURED ANSWER BOX (SEO FEATURED SNIPPET) */}
          <section className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#0C1222] to-[#121A2E] border-2 border-[#E5C158]/40 shadow-xl shadow-[#E5C158]/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#E5C158]" />
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-[#E5C158]/10 text-[#E5C158]">
                <BookOpen className="w-5 h-5" />
              </div>
              <h2 className="text-lg md:text-xl font-bold text-[#E5C158]">
                {data.quickAnswerTitle}
              </h2>
            </div>
            <div
              className="text-slate-200 text-sm md:text-base leading-relaxed md:leading-loose mb-5 font-medium [&_a]:text-[#E5C158] [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-amber-300"
              dangerouslySetInnerHTML={{ __html: data.quickAnswerParagraph }}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-slate-800">
              {data.quickAnswerHighlights.map((hl, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-[#E5C158] shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </section>

          {/* B. MOBILE TABLE OF CONTENTS (COLLAPSIBLE) */}
          <div className="block lg:hidden bg-slate-900/80 border border-slate-800 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3 text-[#E5C158] font-bold text-sm">
              <ListOrdered className="w-4 h-4" />
              <span>فهرست مطالب مقاله</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              {data.tableOfContents.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="hover:text-[#E5C158] transition-colors block py-1 border-b border-slate-800/60"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* C. ARTICLE DETAILED SECTIONS */}
          {data.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24 p-6 md:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-4"
            >
              <h2 className="text-xl md:text-2xl font-bold text-white border-b border-slate-800 pb-3 flex items-center gap-2">
                <span className="w-2 h-6 bg-[#E5C158] rounded-full inline-block" />
                {section.title}
              </h2>

              <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed md:leading-loose [&_a]:text-[#E5C158] [&_a]:underline [&_a]:underline-offset-4 [&_a]:font-semibold hover:[&_a]:text-amber-300 hover:[&_a]:decoration-amber-300 [&_a]:transition-colors [&_strong]:text-white [&_strong]:font-bold [&_ul]:list-disc [&_ul]:pr-5 [&_ul]:space-y-1.5 [&_ol]:list-decimal [&_ol]:pr-5 [&_ol]:space-y-1.5 [&_li]:text-slate-300 [&_blockquote]:border-r-4 [&_blockquote]:border-[#E5C158] [&_blockquote]:pr-4 [&_blockquote]:py-1 [&_blockquote]:italic [&_blockquote]:text-slate-300 [&_blockquote]:bg-slate-900/50 [&_blockquote]:rounded-l-lg [&_table]:w-full [&_table]:border-collapse [&_th]:border [&_th]:border-slate-700 [&_th]:p-2.5 [&_th]:bg-slate-800 [&_th]:text-white [&_td]:border [&_td]:border-slate-800 [&_td]:p-2.5">
                {section.paragraphs.map((p, idx) => (
                  <div
                    key={idx}
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                ))}
              </div>

              {section.bulletPoints && section.bulletPoints.length > 0 && (
                <ul className="space-y-2.5 pt-2 pr-2">
                  {section.bulletPoints.map((bp, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158] shrink-0 mt-2" />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.calloutBox && (
                <div
                  className={`p-4 md:p-5 rounded-xl border text-xs md:text-sm my-4 ${
                    section.calloutBox.type === 'warning'
                      ? 'bg-amber-950/30 border-amber-500/40 text-amber-200'
                      : section.calloutBox.type === 'law'
                      ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
                      : 'bg-blue-950/30 border-blue-500/40 text-blue-200'
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold mb-1.5 text-sm">
                    {section.calloutBox.type === 'warning' ? (
                      <AlertTriangle className="w-4 h-4 text-amber-400" />
                    ) : (
                      <FileCheck2 className="w-4 h-4 text-emerald-400" />
                    )}
                    <span>{section.calloutBox.title}</span>
                  </div>
                  <p className="leading-relaxed">{section.calloutBox.text}</p>
                </div>
              )}
            </section>
          ))}

          {/* D. REAL-WORLD CASE EXAMPLES */}
          <section className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                <FileText className="w-5 h-5" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white">
                {data.examplesTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {data.examplesList.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#070B15] border border-slate-800 space-y-2.5"
                >
                  <h3 className="font-bold text-base text-[#E5C158] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E5C158]" />
                    {item.scenarioTitle}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                    <strong className="text-white">توضیحات پرونده: </strong>
                    {item.description}
                  </p>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800/80 text-xs text-emerald-300 font-medium">
                    <strong>نتیجه حقوقی و دستاورد: </strong>
                    {item.legalOutcome}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* E. COMMON MISTAKES & TRAPS */}
          <section className="p-6 md:p-8 rounded-2xl bg-rose-950/20 border border-rose-900/30 space-y-6">
            <div className="flex items-center gap-3 border-b border-rose-900/40 pb-4">
              <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  {data.commonMistakesTitle}
                </h2>
                <p className="text-xs text-rose-300/80">{data.commonMistakesSubtitle}</p>
              </div>
            </div>

            <div className="space-y-4">
              {data.commonMistakesList.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#070B15]/80 border border-rose-900/20 space-y-2"
                >
                  <div className="text-sm font-bold text-rose-300 flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                    <span>خطا: {item.mistake}</span>
                  </div>
                  <p className="text-xs text-slate-400 pr-4">
                    <span className="text-rose-400 font-semibold">ریسک قانونی: </span>
                    {item.risk}
                  </p>
                  <p className="text-xs text-emerald-300 pr-4 font-medium">
                    <span className="text-emerald-400 font-semibold">اقدام صحیح: </span>
                    {item.correctAction}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* F. STATUTORY & LEGAL NOTES */}
          <section className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <ShieldCheck className="w-5 h-5 text-[#E5C158]" />
              {data.legalNotesTitle}
            </h2>
            <ul className="space-y-2.5 text-xs md:text-sm text-slate-300">
              {data.legalNotesList.map((note, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158] shrink-0 mt-2" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* G. FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION) */}
          <section className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="p-2 rounded-lg bg-[#E5C158]/10 text-[#E5C158]">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white">
                {data.faqTitle}
              </h2>
            </div>

            <div className="space-y-3">
              {data.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-800 rounded-xl overflow-hidden bg-[#070B15]/60 transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-right p-4 font-bold text-sm md:text-base text-white flex items-center justify-between gap-4 hover:text-[#E5C158] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#E5C158] transition-transform duration-200 shrink-0 ${
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
                          className="px-4 pb-4 pt-1 text-xs md:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60"
                        >
                          {faq.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </section>

          {/* H. INTERNAL LINKS TO SERVICES & SAMPLES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Related Services */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="font-bold text-base text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                <Send className="w-4 h-4 text-[#E5C158]" />
                خدمات تخصصی مرتبط نگارش یار
              </h3>
              <div className="space-y-3">
                {data.relatedServices.map((srv, idx) => (
                  <Link
                    key={idx}
                    href={getSafeUrl(srv.href)}
                    className="group block p-3.5 rounded-xl bg-[#070B15] border border-slate-800 hover:border-[#E5C158]/50 transition-all"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-bold text-sm text-slate-200 group-hover:text-[#E5C158] transition-colors">
                        {srv.title}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#E5C158]/10 text-[#E5C158]">
                        {srv.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">{srv.desc}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Related Samples */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="font-bold text-base text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                <FileText className="w-4 h-4 text-[#E5C158]" />
                نمونه اسناد رسمی مرتبط
              </h3>
              <div className="space-y-3">
                {data.relatedSamples.map((smp, idx) => (
                  <Link
                    key={idx}
                    href={getSafeUrl(smp.href)}
                    className="group block p-3.5 rounded-xl bg-[#070B15] border border-slate-800 hover:border-[#E5C158]/50 transition-all"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-bold text-sm text-slate-200 group-hover:text-[#E5C158] transition-colors">
                        {smp.title}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400">
                        {smp.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">{smp.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* I. AUTHOR / EXPERT REVIEW BOX */}
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158] shrink-0">
              <UserCheck className="w-6 h-6" />
            </div>
            <div className="text-xs md:text-sm text-slate-300 space-y-1">
              <div className="font-bold text-white flex items-center gap-2">
                <span>تاییدشده توسط هیئت تحریریه نگارش یار</span>
                <Award className="w-4 h-4 text-[#E5C158]" />
              </div>
              <p className="text-slate-400">
                این مقاله مطابق جدیدترین آیین‌نامه‌ها و قوانین موضوعه کشور توسط کارشناسان ارشد حقوقی بررسی و تایید شده است.
              </p>
            </div>
          </div>
        </div>

        {/* LEFT COLUMN: STICKY SIDEBAR (4 COLS) */}
        <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24 text-right">
          {/* 1. STICKY TABLE OF CONTENTS (DESKTOP) */}
          <div className="hidden lg:block p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center gap-2 mb-4 text-[#E5C158] font-bold text-base border-b border-slate-800 pb-3">
              <ListOrdered className="w-5 h-5" />
              <span>فهرست مطالب مقاله</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              {data.tableOfContents.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="hover:text-[#E5C158] transition-colors block py-1 border-b border-slate-800/50 hover:pr-1"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>

            {/* Share link button */}
            <button
              onClick={handleShare}
              className="mt-5 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
            >
              {copiedLink ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>لینک مقاله کپی شد</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 text-[#E5C158]" />
                  <span>اشتراک‌گذاری مقاله</span>
                </>
              )}
            </button>
          </div>

          {/* 2. SIDEBAR ORDER CTA WIDGET */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#121A2E] to-[#070B15] border-2 border-[#E5C158]/50 shadow-xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5C158]/10 text-[#E5C158] text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>خدمت اختصاصی</span>
            </div>
            <h3 className="text-lg font-bold text-white leading-snug">
              نیاز به نگارش تخصصی توسط وکیل دارید؟
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              تیم تخصصی نگارش یار با استناد به مواد قانونی و رویه قضایی، سند قضایی یا اداری شما را تنظیم می‌کند.
            </p>
            <Link
              href={getSafeUrl(data.ctaPrimaryHref)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#E5C158] to-[#C59B27] text-[#070B15] font-black text-xs md:text-sm shadow-lg shadow-[#E5C158]/20 hover:brightness-110 transition-all"
            >
              <span>ثبت آنلاین سفارش</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>

          {/* 2.5. LAWYER REFERRAL CONTEXTUAL CARD */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-blue-500/30 shadow-lg space-y-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold">
              <Scale className="w-3.5 h-3.5" />
              <span>پوشش سراسری دادرسی</span>
            </div>
            <h3 className="text-sm font-bold text-white leading-snug">
              نیاز به وکیل منصف برای پیگیری پرونده دارید؟
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              اگر ترجیح می‌دهید پیگیری پرونده توسط وکیل پایه یک دادگستری با دستمزد عادلانه و شفاف انجام شود، نگارش یار شما را به وکلای منصف متصل می‌کند.
            </p>
            <Link
              id="knowledge-sidebar-lawyer-referral-btn"
              href="/lawyer-referral?utm_source=knowledge_base&utm_medium=sidebar_card&utm_campaign=fair_lawyers"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors"
            >
              <span>معرفی وکیل منصف در ۳۱ استان</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 3. RELATED ARTICLES SIDEBAR */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <h3 className="font-bold text-sm text-white border-b border-slate-800 pb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#E5C158]" />
              مقالات مرتبط پایگاه دانش
            </h3>
            <div className="space-y-3 text-xs">
              {data.relatedArticles.map((art, idx) => (
                <Link
                  key={idx}
                  href={getSafeUrl(art.href)}
                  className="block p-3 rounded-xl bg-[#070B15] border border-slate-800/80 hover:border-[#E5C158]/40 transition-colors"
                >
                  <div className="font-bold text-slate-200 hover:text-[#E5C158] transition-colors mb-1">
                    {art.title}
                  </div>
                  <p className="text-slate-400 text-[11px] line-clamp-1">{art.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </Container>

      {/* ---------------------------------------------------- */}
      {/* 3. GOLDEN CTA BANNER AT BOTTOM */}
      {/* ---------------------------------------------------- */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#121A2E] via-[#0C1222] to-[#121A2E] border-2 border-[#E5C158]/50 p-8 md:p-12 text-center shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#E5C158]/10 rounded-full blur-3xl pointer-events-none" />
        <Container className="relative z-10 max-w-3xl space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold">
            <Sparkles className="w-4 h-4" />
            <span>تنظیم تخصصی اوراق قضایی و اداری</span>
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
            {data.ctaTitle}
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            {data.ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href={getSafeUrl(data.ctaPrimaryHref)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#E5C158] to-[#C59B27] text-[#070B15] font-black text-sm md:text-base shadow-xl shadow-[#E5C158]/20 hover:brightness-110 transition-all"
            >
              <span>{data.ctaPrimaryBtnText}</span>
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <Link
              href="/knowledge"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 font-bold text-sm md:text-base transition-colors"
            >
              <span>بازگشت به پایگاه دانش</span>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
