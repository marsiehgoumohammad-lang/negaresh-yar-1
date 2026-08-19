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
  Scale,
  UserCheck,
  Calendar,
  Layers,
} from 'lucide-react';
import { SampleLandingData } from '@/data/samples/types';
import { SampleMessengerCTA } from './SampleMessengerCTA';

export function SampleLandingPageTemplate({ data }: { data: SampleLandingData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copied, setCopied] = useState(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const sampleContent =
    data.content || data.sampleStructureContent || data.sampleText || '';

  const handleCopyText = () => {
    if (typeof window !== 'undefined' && sampleContent) {
      navigator.clipboard.writeText(sampleContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const formattedDate = data.updatedAt
    ? new Date(data.updatedAt).toLocaleDateString('fa-IR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'مرداد ۱۴۰۵';

  const categoryName = data.category || data.categoryName || 'درخواست‌های قضایی';
  const title = data.title || data.h1Title || '';
  const shortDescription = data.shortDescription || data.heroSubtitle || '';
  const excerpt =
    data.excerpt ||
    (data.whatIsParagraphs && data.whatIsParagraphs.length > 0
      ? data.whatIsParagraphs[0]
      : shortDescription);

  const whenToUseItems =
    data.whenToUse ||
    (data.whenToUseList
      ? data.whenToUseList.map((w) => ({ title: w.title, desc: w.desc }))
      : []);

  const documentItems =
    data.documents ||
    (data.requiredInfoList
      ? data.requiredInfoList.map((r) => ({ title: r.title, desc: r.desc }))
      : data.guideSteps
      ? data.guideSteps.map((g) => ({ title: `گام ${g.stepNumber}: ${g.title}`, desc: g.desc }))
      : []);

  const importantNotesList =
    data.importantNotes ||
    data.legalNotesList ||
    [
      'پیش از ثبت در سامانه ثنا یا تحویل به مرجع قضایی، مشخصات و تاریخ‌ها را مجدداً بررسی نمایید.',
      'پیوست کردن اصل یا برابر اصل مدارک در دفاتر خدمات الکترونیک قضایی الزامی است.',
    ];

  const commonMistakesList =
    data.commonMistakes ||
    data.commonMistakesList ||
    [
      {
        mistake: 'عدم درج دقیق شماره پرونده یا ابلاغیه',
        impact: 'تأخیر در ثبت و بایگانی لوایح در شعبه.',
        solution: 'شماره ۱۶ رقمی پرونده و شماره بایگانی را در بالای برگه قید کنید.',
      },
    ];

  const legalBasisList =
    data.legalBasis && data.legalBasis.length > 0
      ? data.legalBasis
      : data.legalArticles && data.legalArticles.length > 0
      ? data.legalArticles.map((la) => ({
          article: la.articleName,
          title: 'مستند قانونی',
          description: la.description,
        }))
      : [
          {
            article: 'قوانین و مقررات عمومی آیین دادرسی',
            title: 'رعایت مهلت‌ها و اختیارات قانونی',
            description: 'انطباق متن با مواد قانون آیین دادرسی و فرمت‌های استاندارد قوه قضاییه.',
          },
        ];

  const faqsList =
    data.faq && data.faq.length > 0
      ? data.faq
      : data.faqs
      ? data.faqs.map((f) => ({ question: f.q, answer: f.a }))
      : [];

  const authorName = data.author?.name || 'تیم حقوقی نگارش یار';
  const authorRole = data.author?.role || 'متخصص تنظیم اوراق قضایی و اداری';
  const reviewerName = data.reviewer?.name || 'بررسی و نظارت حقوقی نگارش یار';

  return (
    <div className="space-y-12 sm:space-y-16 py-6 sm:py-10 selection:bg-[#E5C158] selection:text-[#070B15]">
      {/* ---------------------------------------------------- */}
      {/* 1. HERO SECTION, BREADCRUMB, H1 & AUTHOR META */}
      {/* ---------------------------------------------------- */}
      <section className="relative overflow-hidden pt-6 pb-10 md:pt-12 md:pb-16 border-b border-slate-800/80 bg-gradient-to-b from-[#0C1222] via-[#070B15] to-[#070B15] rounded-3xl">
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
                  بانک نمونه اسناد
                </Link>
              </li>
              <li className="text-slate-600">/</li>
              <li className="text-[#E5C158] font-semibold">{categoryName}</li>
            </ol>
          </nav>

          {/* Category Badge & Meta */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold">
              <Layers className="w-3.5 h-3.5" />
              <span>{categoryName}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/70 text-slate-300 text-xs">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>به‌روزرسانی: {formattedDate}</span>
            </span>
          </div>

          {/* H1 Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight md:leading-tight max-w-4xl mx-auto tracking-tight mb-5"
          >
            {title}
          </motion.h1>

          {/* Subtitle / Short Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-normal mb-6"
          >
            {shortDescription}
          </motion.p>

          {/* Author / Reviewer Attribution Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 pt-2 border-t border-slate-800/60 max-w-2xl mx-auto">
            <div className="flex items-center gap-1.5">
              <PenTool className="w-3.5 h-3.5 text-[#E5C158]" />
              <span>تدوین: <strong className="text-slate-200">{authorName}</strong> ({authorRole})</span>
            </div>
            <div className="flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>نظارت حقوقی: <strong className="text-slate-200">{reviewerName}</strong></span>
            </div>
          </div>
        </Container>
      </section>

      <Container className="space-y-12 sm:space-y-16">
        {/* ---------------------------------------------------- */}
        {/* 2. DIRECT INTENT ANSWER BOX (پاسخ مستقیم به Intent کاربر) */}
        {/* ---------------------------------------------------- */}
        <section
          id="direct-intent-answer"
          className="p-5 sm:p-7 rounded-2xl bg-gradient-to-r from-blue-950/30 via-slate-900/80 to-blue-950/30 border border-blue-500/30 text-slate-200"
        >
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>پاسخ مستقیم و خلاصه کاربردی این درخواست</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {excerpt}
              </p>
              {data.audience && (
                <div className="pt-2 text-xs text-blue-300 flex items-center gap-2">
                  <span className="font-semibold text-slate-400">مناسب برای:</span>
                  <span>{data.audience}</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* 3. TOP MESSENGER CTA (درباره این درخواست سؤال دارید؟) */}
        {/* ---------------------------------------------------- */}
        <SampleMessengerCTA
          sampleTitle={title}
          customMessage={data.messengerMessage}
          variant="top"
        />

        {/* ---------------------------------------------------- */}
        {/* 4. FULL SAMPLE DOCUMENT TEXT & COPY BUTTON */}
        {/* ---------------------------------------------------- */}
        <section id="sample-template" className="scroll-mt-24 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E5C158]/10 text-[#E5C158] text-xs font-semibold mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>متن کامل و آماده نمونه سند</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                {data.sampleStructureTitle || `نمونه متن کامل ${title}`}
              </h2>
            </div>

            <button
              onClick={handleCopyText}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs sm:text-sm text-slate-200 transition-colors shrink-0 shadow-sm"
              aria-label="کپی متن کامل نمونه به حافظه"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">متن نمونه کپی شد!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#E5C158]" />
                  <span>کپی متن نمونه</span>
                </>
              )}
            </button>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            {data.sampleStructureIntro ||
              'شما می‌توانید از قالب متنی زیر برای تنظیم و ثبت در سامانه ثنا یا ارائه به شعبه مربوطه استفاده کنید. جاهای خالی (نقطه‌چین‌ها) را با اطلاعات واقعی پرونده خود تکمیل نمایید:'}
          </p>

          {/* Sample Document Box */}
          <div className="relative rounded-2xl bg-slate-950 border border-slate-800 p-5 sm:p-8 text-xs sm:text-sm text-slate-200 leading-loose overflow-x-auto whitespace-pre-wrap selection:bg-[#E5C158] selection:text-[#070B15] shadow-inner font-sans">
            <div className="absolute top-3 left-3 flex items-center gap-1.5 opacity-60 pointer-events-none">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            </div>
            <div className="pt-3 border-t border-slate-800/60">
              {sampleContent}
            </div>
          </div>

          {/* Features checklist below template */}
          {data.sampleStructureFeatures && data.sampleStructureFeatures.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {data.sampleStructureFeatures.map((ft, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300 flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#E5C158] shrink-0" />
                  <span>{ft}</span>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ---------------------------------------------------- */}
        {/* 5. ANALYSIS & LEGAL EXPLANATION */}
        {/* ---------------------------------------------------- */}
        {(data.whatIsParagraphs || data.whatIsHighlights) && (
          <section className="scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E5C158]/10 text-[#E5C158] text-xs font-semibold">
                  <FileText className="w-3.5 h-3.5" />
                  <span>تحلیل و مبانی کاربردی</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  {data.whatIsTitle || `توضیح و تحلیل حقوقی ${title}`}
                </h2>
                <div className="space-y-3.5 text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {data.whatIsParagraphs &&
                    data.whatIsParagraphs.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                </div>
              </div>

              {data.whatIsHighlights && (
                <div className="lg:col-span-5 grid grid-cols-1 gap-3.5">
                  {data.whatIsHighlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#E5C158]/40 transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-[#E5C158]/10 text-[#E5C158] shrink-0 mt-0.5">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                          <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* ---------------------------------------------------- */}
        {/* 6. WHEN TO USE (چه زمانی از این متن استفاده کنیم؟) */}
        {/* ---------------------------------------------------- */}
        {whenToUseItems.length > 0 && (
          <section className="p-6 sm:p-8 rounded-3xl bg-slate-900/50 border border-slate-800 relative overflow-hidden">
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs font-semibold mb-2">
                <Clock className="w-3.5 h-3.5" />
                <span>کاربردها و موقعیت‌ها</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {data.whenToUseTitle || `چه زمانی از ${title} استفاده کنیم؟`}
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm">
                {data.whenToUseSubtitle || 'موقعیت‌های حقوقی و اداری که نیاز به این سند دارند:'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {whenToUseItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-all"
                >
                  <div className="flex items-center gap-2.5 mb-2 text-[#E5C158]">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <h3 className="text-sm sm:text-base font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pr-6">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ---------------------------------------------------- */}
        {/* 7. REQUIRED DOCUMENTS & INFORMATION (مدارک موردنیاز) */}
        {/* ---------------------------------------------------- */}
        {documentItems.length > 0 && (
          <section>
            <div className="text-center max-w-3xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-2">
                <FileCheck className="w-3.5 h-3.5" />
                <span>چک‌لیست مدارک</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {data.requiredInfoTitle || 'مدارک و اطلاعات ضروری'}
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm">
                {data.requiredInfoSubtitle || 'قبل از ثبت یا مراجعه حضوری، این مدارک را آماده داشته باشید:'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {documentItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/30 transition-all"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-400 font-bold text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <h3 className="text-sm font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pr-9">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ---------------------------------------------------- */}
        {/* 8. IMPORTANT LEGAL NOTES (نکات مهم حقوقی) */}
        {/* ---------------------------------------------------- */}
        {importantNotesList.length > 0 && (
          <section className="p-5 sm:p-7 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-amber-200">
            <div className="flex items-center gap-2.5 mb-3">
              <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0" />
              <h2 className="text-base sm:text-lg font-bold text-amber-300">
                {data.legalNotesTitle || 'نکات مهم حقوقی و نگارشی'}
              </h2>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed list-disc list-inside">
              {importantNotesList.map((note, idx) => (
                <li key={idx} className="marker:text-amber-400">
                  {note}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* ---------------------------------------------------- */}
        {/* 9. COMMON MISTAKES & RISKS (اشتباهات رایج) */}
        {/* ---------------------------------------------------- */}
        {commonMistakesList.length > 0 && (
          <section>
            <div className="text-center max-w-3xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-500/10 text-rose-400 text-xs font-semibold mb-2">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>اشتباهات رایج</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {data.commonMistakesTitle || 'اشتباهات رایج و خسارت‌بار'}
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm">
                {data.commonMistakesSubtitle || 'پرهیز از این خطاها از رد درخواست شما جلوگیری می‌کند:'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {commonMistakesList.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/60 border border-rose-900/30 hover:border-rose-500/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-rose-400 font-bold text-xs sm:text-sm">
                      <ShieldAlert className="w-4 h-4 shrink-0" />
                      <h3>{item.mistake}</h3>
                    </div>
                    <div className="p-2.5 rounded-xl bg-rose-950/40 border border-rose-900/20 text-xs text-rose-300 leading-relaxed">
                      <span className="font-bold block mb-0.5">اثر / پیامد:</span>
                      {item.impact || item.consequence}
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-800 text-xs text-emerald-400 leading-relaxed">
                    <span className="font-bold block text-slate-300 mb-0.5">راه‌حل صحیح:</span>
                    {item.solution}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ---------------------------------------------------- */}
        {/* 10. LEGAL BASIS & ARTICLES (مبانی و مستندات قانونی) */}
        {/* ---------------------------------------------------- */}
        {legalBasisList.length > 0 && (
          <section className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  مبانی و مستندات قانونی مرتبط
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  استناد به مواد قانونی مصوب و آیین‌نامه‌های رسمی
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {legalBasisList.map((lb, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs sm:text-sm text-slate-300"
                >
                  <div className="flex items-center gap-2 font-bold text-indigo-300 mb-1.5">
                    <Scale className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>{lb.article} - {lb.title}</span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed pr-6">{lb.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ---------------------------------------------------- */}
        {/* 11. FREQUENTLY ASKED QUESTIONS (FAQ) */}
        {/* ---------------------------------------------------- */}
        {faqsList.length > 0 && (
          <section className="scroll-mt-24 space-y-6">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs font-semibold mb-2">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>پرسش‌های متداول</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {data.faqTitle || `سوالات متداول درباره ${title}`}
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm">
                پاسخ به سوالات پرتکرار مراجعین و متقاضیان این سند
              </p>
            </div>

            <div className="space-y-3 max-w-4xl mx-auto">
              {faqsList.map((faqItem, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-800/90 bg-slate-900/40 overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-right p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-slate-800/30 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-xs sm:text-sm text-white leading-snug">
                        {idx + 1}. {faqItem.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#E5C158] shrink-0 transition-transform duration-300 ${
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
                          <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs text-slate-300 leading-relaxed border-t border-slate-800/50 pt-3">
                            {faqItem.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ---------------------------------------------------- */}
        {/* 12. INTERNAL LINKING: RELATED SAMPLES, ARTICLES & SERVICES */}
        {/* ---------------------------------------------------- */}
        {((data.relatedServices && data.relatedServices.length > 0) ||
          (data.relatedSamples && data.relatedSamples.length > 0) ||
          (data.relatedArticles && data.relatedArticles.length > 0)) && (
          <section className="space-y-6 pt-6 border-t border-slate-800/80">
            <div className={`grid grid-cols-1 ${data.relatedArticles && data.relatedArticles.length > 0 ? 'lg:grid-cols-3' : 'md:grid-cols-2'} gap-6`}>
              {/* Related Services */}
              {data.relatedServices && data.relatedServices.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#E5C158]" />
                    <span>خدمات تخصصی نگارش یار</span>
                  </h3>
                  <div className="space-y-2.5">
                    {data.relatedServices.map((srv, idx) => (
                      <Link
                        key={idx}
                        href={srv.href}
                        className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-[#E5C158]/40 transition-all flex items-center justify-between group block"
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#E5C158]/10 text-[#E5C158]">
                              {srv.badge}
                            </span>
                            <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#E5C158] transition-colors">
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
              )}

              {/* Related Samples */}
              {data.relatedSamples && data.relatedSamples.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-blue-400" />
                    <span>نمونه اسناد و لوایح مرتبط</span>
                  </h3>
                  <div className="space-y-2.5">
                    {data.relatedSamples.map((smp, idx) => {
                      const href =
                        typeof smp === 'string'
                          ? `/samples/${smp}`
                          : smp.href;
                      const smpTitle =
                        typeof smp === 'string'
                          ? `مشاهده نمونه ${smp}`
                          : smp.title;
                      const smpBadge =
                        typeof smp === 'object' && smp.badge
                          ? smp.badge
                          : 'نمونه سند';
                      const smpDesc =
                        typeof smp === 'object' && smp.desc
                          ? smp.desc
                          : 'مشاهده و دانلود قالب استاندارد';

                      return (
                        <Link
                          key={idx}
                          href={href}
                          className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition-all flex items-center justify-between group block"
                        >
                          <div>
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400">
                                {smpBadge}
                              </span>
                              <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                                {smpTitle}
                              </h4>
                            </div>
                            <p className="text-xs text-slate-400">{smpDesc}</p>
                          </div>
                          <ChevronLeft className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-transform group-hover:-translate-x-1 shrink-0" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Related Knowledge Articles */}
              {data.relatedArticles && data.relatedArticles.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <FileText className="w-4 h-4 text-emerald-400" />
                    <span>راهنماها و مقالات حقوقی</span>
                  </h3>
                  <div className="space-y-2.5">
                    {data.relatedArticles.map((art, idx) => (
                      <Link
                        key={idx}
                        href={art.href}
                        className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all flex items-center justify-between group block"
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400">
                              {art.badge || 'مقاله آموزشی'}
                            </span>
                            <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                              {art.title}
                            </h4>
                          </div>
                          <p className="text-xs text-slate-400">{art.desc}</p>
                        </div>
                        <ChevronLeft className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-transform group-hover:-translate-x-1 shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ---------------------------------------------------- */}
        {/* 13. BOTTOM MESSENGER CTA & FINAL SERVICE CTA */}
        {/* ---------------------------------------------------- */}
        <div className="space-y-6 pt-4">
          <SampleMessengerCTA
            sampleTitle={title}
            customMessage={data.messengerMessage}
            variant="bottom"
          />

          <section className="relative overflow-hidden rounded-3xl p-6 sm:p-10 text-center bg-gradient-to-r from-[#111A2E] via-[#0E1729] to-[#111A2E] border border-[#E5C158]/30 shadow-xl">
            <div className="relative z-10 max-w-3xl mx-auto space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#E5C158]/20 border border-[#E5C158]/40 text-[#E5C158] text-xs font-bold">
                تنظیم تخصصی و بدون نقص توسط کارشناسان حقوقی
              </span>
              <h2 className="text-xl sm:text-3xl font-black text-white leading-tight">
                {data.ctaTitle || `سفارش تنظیم اختصاصی ${title}`}
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {data.ctaDescription ||
                  'اگر پرونده شما دارای پیچیدگی‌های خاصی است، تنظیم متن را با ضمانت ویرایش به کارشناسان نگارش یار بسپارید.'}
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href={data.ctaPrimaryHref || '/request'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#E5C158] via-[#D4952B] to-[#E5C158] text-[#070B15] font-bold text-sm hover:brightness-110 transition-all shadow-lg shadow-[#E5C158]/20 group"
                >
                  <Send className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  <span>{data.ctaPrimaryBtnText || 'درخواست تنظیم متن اختصاصی'}</span>
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs sm:text-sm text-slate-200 transition-colors"
                >
                  <span>دریافت راهنمایی و تماس</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}

