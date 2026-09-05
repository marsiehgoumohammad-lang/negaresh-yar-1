'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Container } from '@/components/ui/container';
import { ThreeServiceDiscovery } from '@/components/common/ThreeServiceDiscovery';
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
} from 'lucide-react';

export interface ServiceLandingData {
  slug: string;
  categoryName: string;
  badge: string;
  h1Title: string;
  heroSubtitle: string;
  heroTrustChips: string[];
  
  // What is this service
  whatIsTitle: string;
  whatIsParagraphs: string[];
  whatIsHighlights: { title: string; desc: string }[];

  // Who needs this service
  whoNeedsTitle: string;
  whoNeedsSubtitle: string;
  whoNeedsList: { title: string; desc: string }[];

  // Why choose Negaresh Yar
  whyUsTitle: string;
  whyUsSubtitle: string;
  whyUsPillars: { title: string; desc: string; metric?: string }[];

  // Step-by-step process
  processTitle: string;
  processSubtitle: string;
  processSteps: { stepNumber: string; title: string; desc: string; detail: string }[];

  // Benefits
  benefitsTitle: string;
  benefitsSubtitle: string;
  benefitsList: { title: string; desc: string }[];

  // Common mistakes
  mistakesTitle: string;
  mistakesSubtitle: string;
  mistakesList: { mistake: string; impact: string; solution: string }[];

  // FAQs (20-30 items)
  faqTitle: string;
  faqs: { q: string; a: string }[];

  // Related services (Internal linking)
  relatedServices: { title: string; href: string; desc: string; badge: string }[];
  relatedSamples?: { title: string; href: string; desc: string; badge: string }[];
  showLawyerReferral?: boolean;
  relatedArticles?: { title: string; href: string; desc: string; badge: string }[];
  customGuideContent?: React.ReactNode;

  // CTA
  ctaTitle: string;
  ctaDescription: string;
  ctaPrimaryBtnText: string;
  ctaPrimaryHref: string;
}

export function LandingPageTemplate({ data }: { data: ServiceLandingData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.h1Title,
    description: data.heroSubtitle,
    provider: {
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
    areaServed: {
      '@type': 'Country',
      name: 'Iran',
    },
    serviceType: data.categoryName,
    url: `https://www.negaresh-yar.ir/services/${data.slug}`,
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
        name: 'خدمات نگارش یار',
        item: 'https://www.negaresh-yar.ir/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: data.h1Title,
        item: `https://www.negaresh-yar.ir/services/${data.slug}`,
      },
    ],
  };

  return (
    <div className="space-y-16 sm:space-y-24 py-6 sm:py-10 selection:bg-[#E5C158] selection:text-[#070B15]">
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
              <li>/</li>
              <li>
                <Link href="/services" className="hover:text-[#E5C158] transition-colors">
                  خدمات نگارش یار
                </Link>
              </li>
              <li>/</li>
              <li className="text-[#E5C158] font-bold">{data.categoryName}</li>
            </ol>
          </nav>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-[#E5C158]" />
              <span>{data.badge}</span>
              <span className="w-2 h-2 rounded-full bg-[#E5C158] animate-pulse" />
            </motion.div>

            {/* Main H1 Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight sm:leading-tight"
            >
              {data.h1Title}
            </motion.h1>

            {/* Subtitle / Intro Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-medium"
            >
              {data.heroSubtitle}
            </motion.p>

            {/* Primary & Secondary Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href={data.ctaPrimaryHref}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#070B15] font-black text-base shadow-lg shadow-[#E5C158]/20 hover:shadow-[#E5C158]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span>{data.ctaPrimaryBtnText}</span>
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#faqs"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#0D1424] border border-slate-700 hover:border-[#E5C158]/50 text-slate-200 font-bold text-sm hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
              >
                <HelpCircle className="w-4 h-4 text-[#E5C158]" />
                <span>سوالات متداول و پاسخ‌ها</span>
              </Link>
            </motion.div>

            {/* Hero Trust Chips */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-300">
              {data.heroTrustChips.map((chip, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E5C158]" />
                  <span>{chip}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. WHAT IS THIS SERVICE (معرفی کامل سرویس) */}
      {/* ---------------------------------------------------- */}
      <section className="relative">
        <Container>
          <div className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-2 h-full bg-[#E5C158]" />

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-[#E5C158] text-xs font-bold uppercase tracking-wider">
                <FileText className="w-4 h-4" />
                <span>توضیحات جامع و تخصصی</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                {data.whatIsTitle}
              </h2>
            </div>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {data.whatIsParagraphs.map((p, idx) => (
                <p key={idx} className="text-justify">
                  {p}
                </p>
              ))}
            </div>

            {/* Key Features / Highlights */}
            {data.whatIsHighlights.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                {data.whatIsHighlights.map((hl, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#070B15]/80 border border-slate-800/80 space-y-1.5"
                  >
                    <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                      <Check className="w-4 h-4 text-[#E5C158]" />
                      <h3>{hl.title}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {hl.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. WHO NEEDS THIS SERVICE (چه کسانی به این خدمت نیاز دارند) */}
      {/* ---------------------------------------------------- */}
      <section className="relative">
        <Container>
          <div className="text-center space-y-3 mb-10">
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              {data.whoNeedsTitle}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              {data.whoNeedsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.whoNeedsList.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="bg-[#0D1424] border border-slate-800 hover:border-[#E5C158]/40 rounded-2xl p-6 space-y-3 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158] font-bold">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 4. WHY CHOOSE NEGARESH YAR (چرا نگارش یار؟) */}
      {/* ---------------------------------------------------- */}
      <section className="relative bg-gradient-to-b from-[#070B15] via-[#0D1424]/60 to-[#070B15] py-12 rounded-3xl border border-slate-800/60">
        <Container>
          <div className="text-center space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5C158]/10 text-[#E5C158] text-xs font-bold">
              <Award className="w-4 h-4" />
              <span>مزیت رقابتی نگارش یار</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              {data.whyUsTitle}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              {data.whyUsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.whyUsPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-[#070B15] border border-slate-800 hover:border-[#E5C158]/40 rounded-2xl p-6 space-y-3 relative overflow-hidden group transition-all"
              >
                {pillar.metric && (
                  <span className="absolute top-4 left-4 text-xs font-black text-[#E5C158] bg-[#E5C158]/10 px-2.5 py-1 rounded-full border border-[#E5C158]/30">
                    {pillar.metric}
                  </span>
                )}
                <div className="w-12 h-12 rounded-xl bg-[#E5C158]/10 flex items-center justify-center text-[#E5C158]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#E5C158] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 5. STEP-BY-STEP PROCESS (مراحل گام‌به‌گام انجام سفارش) */}
      {/* ---------------------------------------------------- */}
      <section className="relative">
        <Container>
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              {data.processTitle}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              {data.processSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {data.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#0D1424] border border-slate-800 rounded-2xl p-6 space-y-3 relative flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-[#E5C158]">
                      گام {step.stepNumber}
                    </span>
                    <Clock className="w-5 h-5 text-slate-500" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{step.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-800/80 text-xs text-slate-400 font-medium">
                  {step.detail}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 6. BENEFITS (مزایا و دستاوردهای قانونی) */}
      {/* ---------------------------------------------------- */}
      <section className="relative">
        <Container>
          <div className="bg-gradient-to-r from-[#0D1424] via-[#111A30] to-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                {data.benefitsTitle}
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                {data.benefitsSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.benefitsList.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#070B15]/80 border border-slate-800/80"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#E5C158]/15 text-[#E5C158] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-white">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 7. COMMON MISTAKES (اشتباهات رایج و خطرات) */}
      {/* ---------------------------------------------------- */}
      <section className="relative">
        <Container>
          <div className="text-center space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold">
              <ShieldAlert className="w-4 h-4" />
              <span>هشدار حقوقی و کاربردی</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              {data.mistakesTitle}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              {data.mistakesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.mistakesList.map((m, idx) => (
              <div
                key={idx}
                className="bg-[#0D1424] border border-red-900/30 hover:border-red-500/40 rounded-2xl p-6 space-y-4 transition-all"
              >
                <div className="flex items-center gap-2 text-red-400 font-bold text-base">
                  <AlertTriangle className="w-5 h-5 shrink-0" />
                  <h3>{m.mistake}</h3>
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                  <p>
                    <span className="text-red-400 font-bold">پیامد: </span>
                    {m.impact}
                  </p>
                  <p className="pt-2 border-t border-slate-800 text-emerald-400 font-medium">
                    <span className="font-bold">راهکار نگارش یار: </span>
                    {m.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 7.5 CUSTOM GUIDE CONTENT (راهنمای جامع اختصاصی) */}
      {/* ---------------------------------------------------- */}
      {data.customGuideContent && (
        <section className="relative">
          {data.customGuideContent}
        </section>
      )}

      {/* ---------------------------------------------------- */}
      {/* 8. FAQS (20-30 سوالات متداول و پاسخ‌های تخصصی) */}
      {/* ---------------------------------------------------- */}
      <section id="faqs" className="relative scroll-mt-24">
        <Container>
          <div className="text-center space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5C158]/10 text-[#E5C158] text-xs font-bold">
              <HelpCircle className="w-4 h-4" />
              <span>پاسخ جامع به سوالات شما</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              {data.faqTitle}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              مجموعه کامل پرسش‌ها و پاسخ‌های مرتبط با این خدمت
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {data.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#0D1424] border border-slate-800 hover:border-[#E5C158]/30 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-right p-5 sm:p-6 flex items-center justify-between gap-4 text-white font-bold text-sm sm:text-base hover:text-[#E5C158] transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#E5C158]/10 text-[#E5C158] text-xs flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span>{faq.q}</span>
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
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------- */}
      
      {/* ---------------------------------------------------- */}
      {/* 8.5 LAWYER REFERRAL (وکیل منصف) */}
      {/* ---------------------------------------------------- */}
      {data.showLawyerReferral && (
        <section className="relative">
          <Container>
            <div className="bg-[#0A101A] border border-[#D4AF37]/30 rounded-3xl p-6 sm:p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
              <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                <div className="flex-1 space-y-4 text-center md:text-right">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#E5C158] text-xs font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>وکیل منصف، متناسب با پرونده شما</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white">
                    نیاز به وکیل برای حضور در دادگاه دارید؟
                  </h2>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                    اگر خدمات نگارش یار (تنظیم لایحه و دادخواست) برای پرونده شما کافی نیست و نیاز به حضور وکیل در دادگاه، دفاع شفاهی، و پیگیری مستمر دارید، ما می‌توانیم شما را به یک <strong>وکیل منصف و متخصص</strong> در زمینه پرونده‌تان معرفی کنیم. ما بر اساس بودجه و نوع دعوای شما، بهترین گزینه را پیشنهاد می‌دهیم تا انتخاب آگاهانه‌ای داشته باشید.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/lawyer-referral"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#070B15] font-black text-sm shadow-lg shadow-[#E5C158]/20 hover:shadow-[#E5C158]/40 hover:scale-105 transition-all"
                    >
                      <span>بررسی شرایط و معرفی وکیل منصف</span>
                      <ChevronLeft className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* 9. RELATED SERVICES (لینک‌سازی داخلی و خدمات مرتبط) */}
      {/* ---------------------------------------------------- */}
      <section className="relative">
        <Container>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl font-black text-white">
                خدمات مرتبط نگارش یار
              </h2>
              <Link
                href="/services"
                className="text-xs sm:text-sm text-[#E5C158] font-bold hover:underline flex items-center gap-1"
              >
                <span>مشاهده تمامی خدمات</span>
                <ChevronLeft className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {data.relatedServices.map((rel, idx) => (
                <Link
                  key={idx}
                  href={rel.href}
                  className="bg-[#0D1424] border border-slate-800 hover:border-[#E5C158]/50 rounded-xl p-4 space-y-2 group transition-all"
                >
                  <span className="text-[10px] font-bold text-[#E5C158] bg-[#E5C158]/10 px-2 py-0.5 rounded border border-[#E5C158]/20 inline-block">
                    {rel.badge}
                  </span>
                  <h3 className="text-sm font-bold text-white group-hover:text-[#E5C158] transition-colors">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {rel.desc}
                  </p>
                </Link>
              ))}
            </div>

            {/* Related Samples */}
            {data.relatedSamples && data.relatedSamples.length > 0 && (
              <div className="pt-6 space-y-4 border-t border-slate-800/80">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">
                    نمونه اسناد و فرم‌های حقوقی مرتبط
                  </h3>
                  <Link
                    href="/samples"
                    className="text-xs text-[#E5C158] font-bold hover:underline flex items-center gap-1"
                  >
                    <span>بانک نمونه اسناد</span>
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {data.relatedSamples.map((rel, idx) => (
                    <Link
                      key={idx}
                      href={rel.href}
                      className="bg-[#0D1424] border border-slate-800 hover:border-[#E5C158]/50 rounded-xl p-4 space-y-2 group transition-all"
                    >
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 inline-block">
                        {rel.badge}
                      </span>
                      <h4 className="text-sm font-bold text-white group-hover:text-[#E5C158] transition-colors">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-2">
                        {rel.desc}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Related Knowledge Articles */}
            {data.relatedArticles && data.relatedArticles.length > 0 && (
              <div className="pt-6 space-y-4 border-t border-slate-800/80">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">
                    مقالات و راهنماهای تخصصی پایگاه دانش
                  </h3>
                  <Link
                    href="/knowledge"
                    className="text-xs text-[#E5C158] font-bold hover:underline flex items-center gap-1"
                  >
                    <span>پایگاه دانش</span>
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {data.relatedArticles.map((rel, idx) => (
                    <Link
                      key={idx}
                      href={rel.href}
                      className="bg-[#0D1424] border border-slate-800 hover:border-[#E5C158]/50 rounded-xl p-4 space-y-2 group transition-all"
                    >
                      <span className="text-[10px] font-bold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20 inline-block">
                        {rel.badge}
                      </span>
                      <h4 className="text-sm font-bold text-white group-hover:text-[#E5C158] transition-colors">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-2">
                        {rel.desc}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 9.5. THREE-SERVICE DISCOVERY (WRITING, FAIR LAWYER, ONLINE CAFE) */}
      {/* ---------------------------------------------------- */}
      <section className="relative">
        <Container>
          <ThreeServiceDiscovery
            currentService={data.slug === 'online-cafe' ? 'cafe' : 'writing'}
            contextTitle={data.h1Title}
          />
        </Container>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 10. GOLDEN CTA (دعوت به اقدام پایانی) */}
      {/* ---------------------------------------------------- */}
      <section className="relative">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#111827] via-[#0D1424] to-[#111827] border-2 border-[#E5C158]/40 p-8 sm:p-12 text-center space-y-6 shadow-2xl shadow-[#E5C158]/10">
            {/* Ambient Lighting */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#E5C158]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-2xl mx-auto space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#E5C158]/10 text-[#E5C158] text-xs font-bold border border-[#E5C158]/30">
                شروع فوری و غیرحضوری سفارش
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                {data.ctaTitle}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {data.ctaDescription}
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={data.ctaPrimaryHref}
                className="w-full sm:w-auto px-10 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#070B15] font-black text-base shadow-xl shadow-[#E5C158]/25 hover:shadow-[#E5C158]/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span>{data.ctaPrimaryBtnText}</span>
                <Send className="w-5 h-5 rotate-180" />
              </Link>
              <Link
                href="/request"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-bold text-sm hover:text-white hover:border-slate-500 transition-colors"
              >
                ارتباط با پشتیبانی پیام‌رسان‌ها
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
