'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Container } from '@/components/ui/container';
import {
  Scale,
  ShieldCheck,
  ChevronDown,
  HelpCircle,
  ChevronLeft,
  MapPin,
  FileText,
  BookOpen,
  Sparkles,
  ArrowLeft,
  Check,
  AlertCircle,
  Briefcase,
  Users,
} from 'lucide-react';
import { LawyerCityData } from '@/data/lawyers/types';
import { ALL_LAWYER_CITIES } from '@/data/lawyers/lawyer-referral-cities';
import { LawyerMessengerCTA } from './LawyerMessengerCTA';
import { LawyerStickyMobileCTA } from './LawyerStickyMobileCTA';

interface LawyerCityTemplateProps {
  cityData: LawyerCityData;
}

export function LawyerCityTemplate({ cityData }: LawyerCityTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Select other cities for cross-linking
  const otherCities = ALL_LAWYER_CITIES.filter((c) => c.slug !== cityData.slug).slice(0, 8);

  const baseUrl = 'https://www.negaresh-yar.ir';
  const pageUrl = `${baseUrl}/lawyer-referral/${cityData.slug}`;

  // Structured Data Schemas (Strictly WebPage, BreadcrumbList, FAQPage - NO Lawyer directory schema)
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'صفحه اصلی',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'معرفی وکیل منصف',
        item: `${baseUrl}/lawyer-referral`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `وکیل منصف در ${cityData.city}`,
        item: pageUrl,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: cityData.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: cityData.seoTitle,
    description: cityData.seoDescription,
    url: pageUrl,
    inLanguage: 'fa-IR',
    isPartOf: {
      '@type': 'WebSite',
      name: 'نگارش یار',
      url: baseUrl,
    },
  };

  return (
    <div className="min-h-screen bg-[#070B15] text-slate-100 selection:bg-[#E5C158]/30 selection:text-white pb-20 md:pb-0" dir="rtl">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* Hero Header Section */}
      <header className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-slate-800/80 overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(229,193,88,0.06)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[radial-gradient(circle,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />

        <Container>
          {/* Breadcrumbs */}
          <nav aria-label="مسیر راهنما" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-[#E5C158] transition-colors">
                  صفحه اصلی
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-600">/</li>
              <li>
                <Link href="/lawyer-referral" className="hover:text-[#E5C158] transition-colors">
                  معرفی وکیل منصف
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-600">/</li>
              <li className="text-[#E5C158] font-medium" aria-current="page">
                {cityData.city} ({cityData.province})
              </li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            {/* City Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs sm:text-sm font-semibold mb-4">
              <MapPin className="w-4 h-4" />
              <span>استان {cityData.province} — حوزه قضایی {cityData.city}</span>
            </div>

            {/* H1 Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-4">
              {cityData.h1}
            </h1>

            {/* Subtitle / Intro */}
            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed mb-6">
              {cityData.intro}
            </p>

            {/* Direct Answer Box (Optimized for Quick Answer & AI Overviews) */}
            {cityData.directAnswer && (
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-5 sm:p-6 mb-8 backdrop-blur-sm shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-sm sm:text-base font-bold text-emerald-300 mb-1.5">
                      خلاصه راهنمای انتخاب وکیل در {cityData.city}:
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {cityData.directAnswer}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Value Props Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
                <Check className="w-4 h-4 text-[#E5C158] shrink-0" />
                <span>دستمزد عادلانه و شفافیت مالی</span>
              </div>
              <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
                <Check className="w-4 h-4 text-[#E5C158] shrink-0" />
                <span>بررسی تخصصی بر اساس حوزه دعوا</span>
              </div>
              <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
                <Check className="w-4 h-4 text-[#E5C158] shrink-0" />
                <span>عدم انتشار عمومی مشخصات</span>
              </div>
            </div>

            {/* Top Messenger CTA */}
            <LawyerMessengerCTA
              cityName={cityData.city}
              customMessage={cityData.messengerMessage}
              variant="top"
            />
          </div>
        </Container>
      </header>

      {/* Main Content Area */}
      <main className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Primary Content Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Section 1: City Context & Importance */}
              <section id="city-overview" className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#E5C158]/15 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
                    <Scale className="w-4 h-4" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    اهمیت انتخاب وکیل متناسب و منصف در {cityData.city}
                  </h2>
                </div>

                <div className="rounded-2xl bg-slate-900/40 border border-slate-800 p-6 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>{cityData.intro}</p>
                  {cityData.localJudicialContext && (
                    <p>{cityData.localJudicialContext}</p>
                  )}
                  {cityData.practicalAdvice && (
                    <div className="p-4 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/20 text-slate-200 text-xs sm:text-sm">
                      <strong className="block text-[#E5C158] font-bold mb-1">
                        توصیه کاربردی برای دادرسی در محاکم {cityData.city}:
                      </strong>
                      {cityData.practicalAdvice}
                    </div>
                  )}
                </div>
              </section>

              {/* Section 2: Common Legal Cases in the City */}
              <section id="common-cases" className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    مهم‌ترین زمینه‌های دعاوی قضایی در {cityData.city}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cityData.commonLegalNeeds.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl bg-slate-900/60 border border-slate-800/90 p-5 hover:border-[#E5C158]/40 transition-colors group"
                    >
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="w-6 h-6 rounded-md bg-[#E5C158]/15 text-[#E5C158] font-bold text-xs flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <h3 className="text-base font-bold text-white group-hover:text-[#E5C158] transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3: 3-Step Process */}
              <section id="referral-process" className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    مراحل دریافت راهنمایی و معرفی وکیل در {cityData.city}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-5 relative overflow-hidden">
                    <div className="text-4xl font-black text-slate-800 absolute -bottom-2 -left-2 select-none">
                      ۰۱
                    </div>
                    <div className="relative z-10 space-y-2">
                      <div className="w-7 h-7 rounded-lg bg-[#E5C158]/20 text-[#E5C158] font-bold text-xs flex items-center justify-center">
                        گام ۱
                      </div>
                      <h3 className="text-base font-bold text-white">پیام اولیه در پیام‌رسان</h3>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        از طریق ایتا، روبیکا، بله یا تلگرام با کارشناسان نگارش یار ارتباط برقرار کنید.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-5 relative overflow-hidden">
                    <div className="text-4xl font-black text-slate-800 absolute -bottom-2 -left-2 select-none">
                      ۰۲
                    </div>
                    <div className="relative z-10 space-y-2">
                      <div className="w-7 h-7 rounded-lg bg-[#E5C158]/20 text-[#E5C158] font-bold text-xs flex items-center justify-center">
                        گام ۲
                      </div>
                      <h3 className="text-base font-bold text-white">بیان موضوع و شرایط</h3>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        خلاصه موضوع پرونده در {cityData.city}، شعبه دادگاه و توان مالی خود را مطرح نمایید.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-5 relative overflow-hidden">
                    <div className="text-4xl font-black text-slate-800 absolute -bottom-2 -left-2 select-none">
                      ۰۳
                    </div>
                    <div className="relative z-10 space-y-2">
                      <div className="w-7 h-7 rounded-lg bg-[#E5C158]/20 text-[#E5C158] font-bold text-xs flex items-center justify-center">
                        گام ۳
                      </div>
                      <h3 className="text-base font-bold text-white">بررسی و هدایت مناسب</h3>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        ارزیابی انجام شده و در صورت نیاز به وکیل، با توجه به حوزه تخصصی و تعهد منصفانه ارتباط برقرار می‌شود.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: Notice on Responsible Legal Conduct */}
              <section id="ethical-notice" className="rounded-2xl border border-amber-500/30 bg-amber-950/20 p-5 sm:p-6 text-slate-200">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div className="space-y-1.5 text-xs sm:text-sm leading-relaxed">
                    <h3 className="font-bold text-amber-300">
                      نکته حقوقی مهم در رابطه با ادعاهای تضمین نتیجه
                    </h3>
                    <p className="text-slate-300">
                      طبق مقررات وکالت در ایران، هیچ وکیلی مجاز به «تضمین ۱۰۰٪ نتیجه رای دادگاه» نیست، زیرا تصمیم نهایی با قاضی صادرکننده رای است. تعهد وکیل، تعهد به وسیله، به‌کارگیری بالاترین دانش حقوقی، دفاع مستند و پیگیری دلسوزانه است.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: FAQs */}
              <section id="faq" className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E5C158]/15 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    پرسش‌های پرتکرار درباره وکیل در {cityData.city}
                  </h2>
                </div>

                <div className="space-y-3">
                  {cityData.faqs.map((faq, index) => {
                    const isOpen = openFaq === index;
                    return (
                      <div
                        key={index}
                        className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden transition-colors"
                      >
                        <button
                          type="button"
                          onClick={() => toggleFaq(index)}
                          className="w-full flex items-center justify-between p-4 sm:p-5 text-right font-bold text-sm sm:text-base text-white hover:text-[#E5C158] transition-colors focus:outline-none"
                          aria-expanded={isOpen}
                        >
                          <span>{faq.q}</span>
                          <ChevronDown
                            className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 mr-2 ${
                              isOpen ? 'transform rotate-180 text-[#E5C158]' : ''
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
                              <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
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

              {/* Bottom Messenger CTA */}
              <section id="bottom-cta">
                <LawyerMessengerCTA
                  cityName={cityData.city}
                  customMessage={cityData.messengerMessage}
                  variant="bottom"
                />
              </section>
            </div>

            {/* Sidebar Column */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Box 1: Related Legal Writing Services in Negaresh Yar */}
              <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-5 space-y-4">
                <div className="flex items-center gap-2 text-white font-bold text-base border-b border-slate-800 pb-3">
                  <FileText className="w-4 h-4 text-[#E5C158]" />
                  <span>خدمات نگارش لایحه و دادخواست</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  اگر مایل هستید بدون تحمیل هزینه‌های سنگین دادرسی، لوایح و دادخواست‌های خود را به‌صورت تخصصی تنظیم کنید:
                </p>
                <div className="space-y-2 pt-1">
                  {cityData.relatedServices && cityData.relatedServices.length > 0 ? (
                    cityData.relatedServices.map((srv, idx) => (
                      <Link
                        key={idx}
                        href={srv.href}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-xs text-slate-200 hover:text-[#E5C158] transition-colors"
                      >
                        <span>{srv.title}</span>
                        <ChevronLeft className="w-4 h-4 text-slate-400" />
                      </Link>
                    ))
                  ) : (
                    <>
                      <Link
                        href="/services/legal-brief"
                        className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-xs text-slate-200 hover:text-[#E5C158] transition-colors"
                      >
                        <span>تنظیم لایحه دفاعیه تخصصی</span>
                        <ChevronLeft className="w-4 h-4 text-slate-400" />
                      </Link>
                      <Link
                        href="/services/petition-writing"
                        className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-xs text-slate-200 hover:text-[#E5C158] transition-colors"
                      >
                        <span>تنظیم دادخواست و شکواییه</span>
                        <ChevronLeft className="w-4 h-4 text-slate-400" />
                      </Link>
                    </>
                  )}
                  <Link
                    href="/request"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 hover:bg-[#E5C158]/20 text-xs text-[#E5C158] font-bold transition-colors"
                  >
                    <span>ثبت مستقیم سفارش متن قضایی</span>
                    <ArrowLeft className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Box 2: Relevant Sample Documents */}
              <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-5 space-y-4">
                <div className="flex items-center gap-2 text-white font-bold text-base border-b border-slate-800 pb-3">
                  <BookOpen className="w-4 h-4 text-[#E5C158]" />
                  <span>نمونه متون حقوقی مرتبط</span>
                </div>
                <div className="space-y-2">
                  {cityData.relatedSamples && cityData.relatedSamples.length > 0 ? (
                    cityData.relatedSamples.map((sample, idx) => (
                      <Link
                        key={idx}
                        href={sample.href}
                        className="block p-2 rounded-lg text-xs text-slate-300 hover:text-[#E5C158] hover:bg-slate-800/40 transition-colors"
                      >
                        • {sample.title}
                      </Link>
                    ))
                  ) : (
                    <Link
                      href="/samples"
                      className="block p-2 rounded-lg text-xs text-slate-300 hover:text-[#E5C158] hover:bg-slate-800/40 transition-colors"
                    >
                      • مشاهده بانک نمونه اسناد قضایی
                    </Link>
                  )}
                  <Link
                    href="/samples"
                    className="inline-flex items-center gap-1.5 text-xs text-[#E5C158] font-bold pt-2 hover:underline"
                  >
                    <span>مشاهده تمام نمونه اسناد حقوقی</span>
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Box 3: Quick Navigation to Other Provincial Capitals */}
              <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-5 space-y-4">
                <div className="flex items-center gap-2 text-white font-bold text-base border-b border-slate-800 pb-3">
                  <MapPin className="w-4 h-4 text-[#E5C158]" />
                  <span>راهنمای وکیل در سایر استان‌ها</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {otherCities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/lawyer-referral/${city.slug}`}
                      className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-[#E5C158] transition-colors truncate"
                    >
                      وکیل در {city.city}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/lawyer-referral"
                  className="block text-center text-xs text-[#E5C158] font-semibold pt-1 hover:underline"
                >
                  مشاهده همه ۳۱ مرکز استان کشور ←
                </Link>
              </div>

              {/* Box 4: Lawyers Partnership Banner */}
              <div className="rounded-2xl border border-blue-500/20 bg-blue-950/20 p-5 space-y-3">
                <div className="flex items-center gap-2 text-blue-300 font-bold text-sm">
                  <Users className="w-4 h-4" />
                  <span>همکار وکیل هستید؟</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  اگر وکیل پایه‌یک دادگستری با پایبندی به تعرفه منصفانه هستید، جهت همکاری با سامانه نگارش یار اقدام فرمایید.
                </p>
                <Link
                  href="/lawyer-partnership"
                  className="inline-flex items-center gap-1 text-xs text-blue-400 font-bold hover:text-blue-300 hover:underline pt-1"
                >
                  <span>شرایط و نحوه همکاری وکلا</span>
                  <ChevronLeft className="w-3.5 h-3.5" />
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </main>

      {/* Sticky Mobile Bar & Messenger Drawer */}
      <LawyerStickyMobileCTA
        cityName={cityData.city}
        customMessage={cityData.messengerMessage}
      />
    </div>
  );
}
