'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  FileText,
  Scale,
  ArrowLeft,
  AlertTriangle,
  Zap,
  Check,
  Layers,
  Sparkles,
  SlidersHorizontal,
} from 'lucide-react';

interface DecisionOption {
  id: string;
  conditionTitle: string;
  checkType: string;
  hasGuarantor: boolean;
  isDateCurrent: boolean;
  recommendedAction: string;
  legalBasis: string;
  pros: string;
  cons: string;
  serviceHref: string;
  serviceText: string;
  sampleHref?: string;
  sampleText?: string;
}

export function BouncedCheckGuideSection() {
  const [activeTab, setActiveTab] = useState<'matrix' | 'steps' | 'methods' | 'mistakes' | 'timelines'>('matrix');
  const [filterCheckType, setFilterCheckType] = useState<'all' | 'sayad' | 'old' | 'guarantee'>('all');


  const decisionMatrix: DecisionOption[] = [
    {
      id: 'sayad-drawer-only',
      conditionTitle: 'چک صیادی بنفش فقط علیه صادرکننده (بدون ظهرنویس)',
      checkType: 'صیادی بنفش',
      hasGuarantor: false,
      isDateCurrent: false,
      recommendedAction: 'اجراییه مستقیم دادگاه (ماده ۲۳ قانون صدور چک)',
      legalBasis: 'ماده ۲۳ اصلاحی قانون صدور چک مصوب ۱۳۹۷',
      pros: 'بدون نیاز به جلسه دادگاه، بدون پرداخت ۳.۵٪ هزینه دادرسی، صدور ظرف کمتر از ۱۰ روز کاری، توقیف فوری کلیه حساب‌ها.',
      cons: 'صرفاً علیه صادرکننده و صاحب حساب امکان‌پذیر است و ضامنین یا ظهرنویسان را در بر نمی‌گیرد.',
      serviceHref: '/services/check-claim',
      serviceText: 'تنظیم تقاضای اجراییه ماده ۲۳',
      sampleHref: '/samples/check-execution-petition',
      sampleText: 'مشاهده نمونه درخواست اجراییه',
    },
    {
      id: 'sayad-with-guarantor',
      conditionTitle: 'چک صیادی با ضامن یا ظهرنویس (مسئولیت تضامنی)',
      checkType: 'صیادی بنفش',
      hasGuarantor: true,
      isDateCurrent: false,
      recommendedAction: 'دادخواست حقوقی مطالبه وجه چک و خسارت تأخیر تأدیه با تأمین خواسته فوری',
      legalBasis: 'مواد ۳۱۰ تا ۳۱۵ و ۲۴۹ قانون تجارت + ماده ۱۰۸ قانون آیین دادرسی مدنی',
      pros: 'توقیف همزمان اموال صادرکننده، ظهرنویس و ضامن؛ امکان مطالبه خسارت تأخیر تأدیه از تاریخ سررسید تا اجرای حکم.',
      cons: 'نیازمند پرداخت ۳.۵٪ هزینه دادرسی (مگر ثبت دادخواست اعسار) و تشکیل جلسات دادرسی.',
      serviceHref: '/services/check-claim',
      serviceText: 'تنظیم دادخواست مطالبه وجه چک با ضامنین',
      sampleHref: '/samples/sayad-check-claim-petition',
      sampleText: 'مشاهده نمونه دادخواست صیادی تضامنی',
    },
    {
      id: 'criminal-check',
      conditionTitle: 'چک روز و بدون وعده (رعایت دو مهلت ۶ ماهه)',
      checkType: 'روز / نقدی',
      hasGuarantor: false,
      isDateCurrent: true,
      recommendedAction: 'شکایت کیفری صدور چک بلامحل در دادسرا',
      legalBasis: 'مواد ۳، ۷ و ۱۱ قانون صدور چک',
      pros: 'فشار روانی و مجازات حبس تا ۲ سال برای صادرکننده؛ ممنوعیت از دریافت دسته‌چک تا ۳ سال؛ هزینه دادرسی ناچیز.',
      cons: 'مستلزم رعایت دقیق مهلت‌های ۶ ماهه؛ عدم شمول نسبت به چک‌های تضمینی، امانی، وعده‌دار و مشروط.',
      serviceHref: '/lawyer-referral',
      serviceText: 'مشاوره با وکیل کیفری',
      sampleHref: '/samples/check-bounced-complaint',
      sampleText: 'مشاهده نمونه شکواییه کیفری چک',
    },
    {
      id: 'old-check-claim',
      conditionTitle: 'چک‌های سنتی قدیمی (غیر صیادی یا بدون ثبت سامانه)',
      checkType: 'سنتی / قدیمی',
      hasGuarantor: true,
      isDateCurrent: false,
      recommendedAction: 'دادخواست حقوقی مطالبه وجه به استناد سند تجاری / سند عادی',
      legalBasis: 'ماده ۱۹۸ قانون آیین دادرسی مدنی و مواد ۲۴۹ و ۳۱۵ قانون تجارت',
      pros: 'رسیدگی به عنوان سند تجاری یا عادی طلب و توقیف اموال با تأمین خواسته.',
      cons: 'عدم امکان استفاده از اجراییه مستقیم ماده ۲۳.',
      serviceHref: '/services/check-claim',
      serviceText: 'تنظیم دادخواست مطالبه وجه چک سنتی',
      sampleHref: '/samples/check-civil-claim',
      sampleText: 'مشاهده نمونه دادخواست چک حقوقی',
    },
    {
      id: 'notary-execution',
      conditionTitle: 'وجود اموال ملکی یا خودروی رسمی به نام صادرکننده',
      checkType: 'کلیه چک‌ها',
      hasGuarantor: false,
      isDateCurrent: false,
      recommendedAction: 'صدور اجراییه از طریق اداره اجرای ثبت اسناد',
      legalBasis: 'ماده ۲ قانون صدور چک و آیین‌نامه اجرای مفاد اسناد رسمی لازم‌الاجرا',
      pros: 'ممنوع‌الخروجی سریع صادرکننده، توقیف فوری پلاک ثبتی و خودرو بدون نیاز به دادگاه.',
      cons: 'پرداخت حق‌الاجرای ۵ درصدی دولتی و محدودیت اقدام صرفاً علیه اموال رسمی صادرکننده.',
      serviceHref: '/services/check-claim',
      serviceText: 'تنظیم مدارک صدور اجراییه ثبت',
      sampleHref: '/samples/check-execution-petition',
      sampleText: 'مشاهده فرم درخواست اجراییه',
    },
  ];

  const filteredMatrix = decisionMatrix.filter((item) => {
    if (filterCheckType === 'sayad' && item.checkType !== 'صیادی بنفش') return false;
    if (filterCheckType === 'old' && item.checkType !== 'سنتی / قدیمی') return false;
    if (filterCheckType === 'guarantee' && item.checkType !== 'کلیه چک‌ها' && !item.hasGuarantor) return false;
    if (filterTarget === 'guarantor' && !item.hasGuarantor) return false;
    if (filterTarget === 'drawer' && item.hasGuarantor) return false;
    return true;
  });

  return (
    <div className="space-y-12">
      {/* ---------------------------------------------------- */}
      {/* 1. INTERACTIVE PATH SELECTION & NAVIGATION TABS */}
      {/* ---------------------------------------------------- */}
      <div className="p-2 rounded-2xl bg-[#0C1222] border border-slate-800 flex flex-wrap items-center justify-center gap-1.5 shadow-lg">
        {[
          { id: 'matrix', label: 'جدول تصمیم‌گیری هوشمند', icon: SlidersHorizontal },
          { id: 'steps', label: 'مراحل گام‌به‌گام بعد از برگشت', icon: CheckCircle2 },
          { id: 'methods', label: 'مقایسه ۴ روش وصول', icon: Layers },
          { id: 'timelines', label: 'مهلت‌های حیاتی قانونی', icon: Clock },
          { id: 'mistakes', label: 'اشتباهات مهلک دارندگان چک', icon: AlertTriangle },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-[#E5C158] to-[#C59B27] text-[#070B15] shadow-md shadow-[#E5C158]/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-[#070B15]' : 'text-[#E5C158]'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ---------------------------------------------------- */}
      {/* TAB 1: DECISION MATRIX */}
      {/* ---------------------------------------------------- */}
      {activeTab === 'matrix' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Header & Filters */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0C1222] to-[#121A2E] border border-slate-800 space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5 text-[#E5C158]" />
                  <span>راهنمای انتخاب مسیر: چک شما در کدام وضعیت قرار دارد؟</span>
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  با مشخص کردن نوع چک و طرف‌های دعوا، بهترین راهکار قانونی و سریع‌ترین روش وصول را مشاهده کنید.
                </p>
              </div>
              <span className="text-[11px] px-3 py-1 rounded-full bg-[#E5C158]/10 text-[#E5C158] border border-[#E5C158]/30 font-semibold shrink-0">
                بروزرسانی طبق قانون جدید
              </span>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="text-slate-400 font-medium">فیلتر نوع چک:</span>
              <button
                onClick={() => setFilterCheckType('all')}
                className={`px-3 py-1.5 rounded-lg border transition-colors ${
                  filterCheckType === 'all'
                    ? 'bg-[#E5C158] text-[#070B15] border-[#E5C158] font-bold'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                همه موارد
              </button>
              <button
                onClick={() => setFilterCheckType('sayad')}
                className={`px-3 py-1.5 rounded-lg border transition-colors ${
                  filterCheckType === 'sayad'
                    ? 'bg-[#E5C158] text-[#070B15] border-[#E5C158] font-bold'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                چک صیادی بنفش
              </button>
              <button
                onClick={() => setFilterCheckType('old')}
                className={`px-3 py-1.5 rounded-lg border transition-colors ${
                  filterCheckType === 'old'
                    ? 'bg-[#E5C158] text-[#070B15] border-[#E5C158] font-bold'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                چک سنتی / قدیمی
              </button>
            </div>
          </div>

          {/* Result Cards Grid */}
          <div className="grid grid-cols-1 gap-5">
            {filteredMatrix.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-[#E5C158]/50 transition-all space-y-4"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E5C158]" />
                    <h4 className="font-bold text-base md:text-lg text-white">
                      {item.conditionTitle}
                    </h4>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-[#E5C158] border border-slate-700 w-fit">
                    مستند: {item.legalBasis}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 text-xs md:text-sm">
                  {/* Action & Pros (8 cols) */}
                  <div className="md:col-span-8 space-y-3">
                    <div className="p-3.5 rounded-xl bg-[#070B15] border border-slate-800 space-y-1">
                      <span className="text-[#E5C158] font-bold text-xs">مسیر پیشنهادی حقوقی:</span>
                      <p className="text-white font-bold text-sm md:text-base leading-relaxed">
                        {item.recommendedAction}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-900/30 text-emerald-200 space-y-1">
                        <span className="font-bold flex items-center gap-1.5 text-xs text-emerald-400">
                          <Check className="w-3.5 h-3.5" /> مزایای اصلی:
                        </span>
                        <p className="text-xs leading-relaxed text-slate-300">{item.pros}</p>
                      </div>
                      <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-900/30 text-amber-200 space-y-1">
                        <span className="font-bold flex items-center gap-1.5 text-xs text-amber-400">
                          <AlertCircle className="w-3.5 h-3.5" /> محدودیت‌ها و شرایط:
                        </span>
                        <p className="text-xs leading-relaxed text-slate-300">{item.cons}</p>
                      </div>
                    </div>
                  </div>

                  {/* CTAs (4 cols) */}
                  <div className="md:col-span-4 flex flex-col justify-center gap-2.5 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                    <Link
                      href={item.serviceHref}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#E5C158] to-[#C59B27] text-[#070B15] font-bold text-xs shadow-md shadow-[#E5C158]/20 hover:brightness-110 transition-all text-center"
                    >
                      <span>{item.serviceText}</span>
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </Link>

                    {item.sampleHref && (
                      <Link
                        href={item.sampleHref}
                        className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors text-center"
                      >
                        <FileText className="w-3.5 h-3.5 text-[#E5C158]" />
                        <span>{item.sampleText}</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* ---------------------------------------------------- */}
      {/* TAB 2: STEP-BY-STEP ACTION GUIDE */}
      {/* ---------------------------------------------------- */}
      {activeTab === 'steps' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
            <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-4">
              <CheckCircle2 className="w-5 h-5 text-[#E5C158]" />
              <span>مراحل عملی و فوری پس از برگشت خوردن چک در بانک</span>
            </h3>

            <div className="relative border-r-2 border-[#E5C158]/40 pr-6 space-y-8 mr-3">
              {/* Step 1 */}
              <div className="relative space-y-2">
                <span className="absolute -right-[33px] top-0 w-6 h-6 rounded-full bg-[#E5C158] text-[#070B15] text-xs font-black flex items-center justify-center">
                  ۱
                </span>
                <h4 className="text-base font-bold text-[#E5C158]">
                  دریافت گواهی عدم پرداخت رسمی با کد رهگیری ثنا
                </h4>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                  هنگام مراجعه به بانک و عدم تکافوی موجودی، حتماً از متصدی بانک بخواهید اطلاعات چک را در سامانه یکپارچه بانک مرکزی ثبت کرده و <strong>گواهی عدم پرداخت دارای کد رهگیری یکتا</strong> را با مهر و امضای رسمی بانک به شما تحویل دهد.
                </p>
                <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-900/30 text-amber-200 text-xs">
                  <strong>نکته کلیدی:</strong> بدون کد رهگیری سامانه بانک مرکزی، دفاتر خدمات الکترونیک قضایی و محاکم دادگستری دادخواست یا تقاضای اجراییه ماده ۲۳ شما را نمی‌پذیرند.
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative space-y-2">
                <span className="absolute -right-[33px] top-0 w-6 h-6 rounded-full bg-[#E5C158] text-[#070B15] text-xs font-black flex items-center justify-center">
                  ۲
                </span>
                <h4 className="text-base font-bold text-[#E5C158]">
                  مسدود شدن خودکار کلیه حساب‌های بانکی صادرکننده (ظرف ۲۴ ساعت)
                </h4>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                  طبق ماده ۵ مکرر قانون صدور چک، پس از ثبت گواهی عدم پرداخت در سامانه، بانک مرکزی ظرف ۲۴ ساعت دستور انسداد کلیه حساب‌ها، کارت‌های بانکی و اعتبارات صادرکننده را به میزان مبلغ کسری چک به تمام بانک‌های کشور ارسال می‌کند.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative space-y-2">
                <span className="absolute -right-[33px] top-0 w-6 h-6 rounded-full bg-[#E5C158] text-[#070B15] text-xs font-black flex items-center justify-center">
                  ۳
                </span>
                <h4 className="text-base font-bold text-[#E5C158]">
                  ارسال اظهارنامه رسمی یا مذاکره سازش (اختیاری اما موثر)
                </h4>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                  پیش از اقدام قضایی رسمی، می‌توانید با ارسال اظهارنامه رسمی مطالبه وجه، مهلتی ۴۸ ساعته برای پرداخت تعیین کنید. این اظهارنامه تاریخ رسمی مطالبه خسارت تأخیر تأدیه را نیز مستحکم‌تر می‌کند.
                </p>
                <Link
                  href="/samples/check-payment-demand"
                  className="inline-flex items-center gap-1.5 text-xs text-[#E5C158] underline underline-offset-4 hover:text-amber-300"
                >
                  مشاهده نمونه متن رسمی اظهارنامه مطالبه وجه چک ←
                </Link>
              </div>

              {/* Step 4 */}
              <div className="relative space-y-2">
                <span className="absolute -right-[33px] top-0 w-6 h-6 rounded-full bg-[#E5C158] text-[#070B15] text-xs font-black flex items-center justify-center">
                  ۴
                </span>
                <h4 className="text-base font-bold text-[#E5C158]">
                  انتخاب مسیر قضایی: اجراییه مستقیم، دادخواست حقوقی یا شکایت کیفری
                </h4>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                  اگر چک صیادی بنفش دارید و فقط علیه صادرکننده اقدام می‌کنید، درخواست اجراییه ماده ۲۳ ثبت نمایید. اگر ضامن و ظهرنویس دارید، دادخواست مطالبه وجه با تأمین خواسته فوری ثبت کنید. اگر چک روز بوده و مواعد ۶ ماهه را رعایت کرده‌اید، شکواییه کیفری ثبت کنید.
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  <Link
                    href="/services/check-claim"
                    className="px-4 py-2 rounded-xl bg-[#E5C158] text-[#070B15] font-bold text-xs hover:brightness-110 transition-all"
                  >
                    تنظیم آنلاین دادخواست و اوراق چک در نگارش یار
                  </Link>
                  <Link
                    href="/knowledge/civil-vs-criminal-check"
                    className="px-4 py-2 rounded-xl bg-slate-800 text-slate-200 text-xs hover:bg-slate-700 transition-colors"
                  >
                    مطالعه تفاوت چک حقوقی و کیفری
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* ---------------------------------------------------- */}
      {/* TAB 3: 4 METHODS COMPARISON */}
      {/* ---------------------------------------------------- */}
      {activeTab === 'methods' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Method 1: Article 23 */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#0C1222] to-[#121A2E] border-2 border-[#E5C158]/40 space-y-4">
              <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#E5C158]/10 text-[#E5C158]">
                  محبوب‌ترین و سریع‌ترین روش
                </span>
                <span className="text-xs text-slate-400">دادگاه حقوقی</span>
              </div>
              <h4 className="text-lg font-black text-white">
                ۱. اجراییه مستقیم ماده ۲۳ قانون چک
              </h4>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                بدون نیاز به طرح دعوای زمان‌بر، دادگاه مستقیماً بر اساس گواهی عدم پرداخت بانک، برگه اجراییه صادر می‌کند. پس از ابلاغ ۱۰ روزه، اموال توقیف و در صورت عدم پرداخت و عدم ادعای اعسار، حکم جلب صادر می‌شود.
              </p>
              <ul className="text-xs space-y-1.5 text-slate-300 border-t border-slate-800 pt-3">
                <li className="flex items-center gap-2 text-emerald-300">
                  <Check className="w-3.5 h-3.5 shrink-0" /> بدون هزینه دادرسی ۳.۵ درصدی
                </li>
                <li className="flex items-center gap-2 text-emerald-300">
                  <Check className="w-3.5 h-3.5 shrink-0" /> صدور ظرف چند روز کاری
                </li>
                <li className="flex items-center gap-2 text-rose-300">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" /> صرفاً علیه صادرکننده و صاحب حساب
                </li>
              </ul>
              <Link
                href="/samples/check-execution-petition"
                className="block text-center py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-[#E5C158] transition-colors"
              >
                مشاهده نمونه فرم تقاضای اجراییه ماده ۲۳
              </Link>
            </div>

            {/* Method 2: Civil Claim */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400">
                  جامع‌ترین پوشش تضامنی
                </span>
                <span className="text-xs text-slate-400">دادگاه عمومی حقوقی</span>
              </div>
              <h4 className="text-lg font-black text-white">
                ۲. دادخواست حقوقی مطالبه وجه و تأمین خواسته
              </h4>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                طرح دادخواست علیه صادرکننده، ظهرنویس‌ها و کلیه ضامنین با تقاضای توقیف فوری اموال بدون پرداخت خسارت احتمالی (ماده ۱۰۸ ق.آ.د.م) و محاسبه خسارت تأخیر روزشمار.
              </p>
              <ul className="text-xs space-y-1.5 text-slate-300 border-t border-slate-800 pt-3">
                <li className="flex items-center gap-2 text-emerald-300">
                  <Check className="w-3.5 h-3.5 shrink-0" /> امکان محکومیت تضامنی ضامن و ظهرنویس
                </li>
                <li className="flex items-center gap-2 text-emerald-300">
                  <Check className="w-3.5 h-3.5 shrink-0" /> محاسبه رسمی خسارت تأخیر شاخص بانک مرکزی
                </li>
                <li className="flex items-center gap-2 text-rose-300">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" /> پرداخت ۳.۵٪ هزینه دادرسی اولیه
                </li>
              </ul>
              <Link
                href="/services/check-claim"
                className="block text-center py-2 rounded-xl bg-[#E5C158] text-[#070B15] text-xs font-bold hover:brightness-110 transition-all"
              >
                ثبت سفارش دادخواست مطالبه وجه چک
              </Link>
            </div>

            {/* Method 3: Criminal Complaint */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-rose-500/10 text-rose-400">
                  دارای مجازات حبس
                </span>
                <span className="text-xs text-slate-400">دادسرا و دادگاه کیفری</span>
              </div>
              <h4 className="text-lg font-black text-white">
                ۳. شکایت کیفری صدور چک بلامحل
              </h4>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                شکایت در دادسرای محل وقوع بانک صادرکننده گواهی عدم پرداخت. در صورت اثبات، صادرکننده به حبس از ۳ ماه تا ۲ سال و محرومیت بانکی محکوم می‌شود.
              </p>
              <ul className="text-xs space-y-1.5 text-slate-300 border-t border-slate-800 pt-3">
                <li className="flex items-center gap-2 text-emerald-300">
                  <Check className="w-3.5 h-3.5 shrink-0" /> فشار سنگین روانی و مجازات زندان
                </li>
                <li className="flex items-center gap-2 text-rose-300">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" /> الزام به رعایت مواعد ۶ ماهه
                </li>
                <li className="flex items-center gap-2 text-rose-300">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" /> عدم شمول چک‌های مدت‌دار و تضمینی (ماده ۱۳)
                </li>
              </ul>
              <Link
                href="/samples/check-bounced-complaint"
                className="block text-center py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-[#E5C158] transition-colors"
              >
                مشاهده نمونه شکواییه چک بلامحل
              </Link>
            </div>

            {/* Method 4: Registration Office */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400">
                  ممنوع‌الخروجی و توقیف ثبتی
                </span>
                <span className="text-xs text-slate-400">اداره اجرای اسناد رسمی</span>
              </div>
              <h4 className="text-lg font-black text-white">
                ۴. اقدام از طریق اداره اجرای ثبت اسناد
              </h4>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                مراجعه به دایره اجرای ثبت اسناد بر اساس ماده ۲ قانون چک و صدور اجراییه برای توقیف پلاک‌های ثبتی، خودرو و ممنوع‌الخروج نمودن صادرکننده.
              </p>
              <ul className="text-xs space-y-1.5 text-slate-300 border-t border-slate-800 pt-3">
                <li className="flex items-center gap-2 text-emerald-300">
                  <Check className="w-3.5 h-3.5 shrink-0" /> ممنوع‌الخروجی بدون نیاز به جلسه دادگاه
                </li>
                <li className="flex items-center gap-2 text-emerald-300">
                  <Check className="w-3.5 h-3.5 shrink-0" /> توقیف سریع سند ملکی رسمی
                </li>
                <li className="flex items-center gap-2 text-rose-300">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" /> تعلق ۵٪ حق‌الاجرا به اداره ثبت
                </li>
              </ul>
              <Link
                href="/lawyer-referral"
                className="block text-center py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-blue-400 transition-colors"
              >
                مشاوره با وکیل در امور اجرای ثبت
              </Link>
            </div>
          </div>
        </motion.div>
      )}

      {/* ---------------------------------------------------- */}
      {/* TAB 4: TIMELINES & DEADLINES */}
      {/* ---------------------------------------------------- */}
      {activeTab === 'timelines' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
            <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-4">
              <Clock className="w-5 h-5 text-[#E5C158]" />
              <span>مهلت‌ها و مواعد قانونی سرنوشت‌ساز در دعاوی چک</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
              <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-[#E5C158] font-bold">
                  <span>مهلت ۶ ماهه اول (ماده ۱۱)</span>
                  <span className="px-2 py-0.5 rounded bg-[#E5C158]/10 text-[11px]">شکایت کیفری</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  حداکثر ظرف <strong>۶ ماه از تاریخ سررسید مندرج در چک</strong>، باید گواهی عدم پرداخت از بانک دریافت شود تا حق شکایت کیفری حفظ گردد.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-[#E5C158] font-bold">
                  <span>مهلت ۶ ماهه دوم (ماده ۱۱)</span>
                  <span className="px-2 py-0.5 rounded bg-[#E5C158]/10 text-[11px]">شکایت کیفری</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  حداکثر ظرف <strong>۶ ماه از تاریخ صدور گواهی عدم پرداخت</strong>، باید شکواییه کیفری در دادسرا ثبت شود. گذشت این مهلت، چک را حقوقی محض می‌کند.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-blue-400 font-bold">
                  <span>مهلت ۱۵ روز و ۴۵ روز (ماده ۳۱۵ تجارت)</span>
                  <span className="px-2 py-0.5 rounded bg-blue-500/10 text-[11px]">مسئولیت ظهرنویس</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  اگر چک در همان شهر صدور تادیه شود ظرف <strong>۱۵ روز</strong> و اگر در شهر دیگری باشد ظرف <strong>۴۵ روز</strong> باید برگشت بخورد تا بتوان علیه ظهرنویس اقامه دعوا کرد.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-indigo-400 font-bold">
                  <span>مهلت ۱۰ روزه ابلاغ اجراییه ماده ۲۳</span>
                  <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-[11px]">اجرای احکام</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  پس از ابلاغ اجراییه، صادرکننده <strong>۱۰ روز مهلت دارد</strong> طلب را پرداخت کند یا مالی معرفی نماید، در غیر این صورت توقیف اموال و صدور جلب در دستور کار قرار می‌گیرد.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* ---------------------------------------------------- */}
      {/* TAB 5: MISTAKES & COMMON TRAPS */}
      {/* ---------------------------------------------------- */}
      {activeTab === 'mistakes' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="p-6 rounded-2xl bg-rose-950/20 border border-rose-900/30 space-y-4">
            <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-2 border-b border-rose-900/40 pb-3">
              <AlertTriangle className="w-5 h-5 text-rose-400" />
              <span>۵ خطای پرتکرار که مانع وصول وجه چک می‌شود</span>
            </h3>

            <div className="space-y-3 text-xs md:text-sm">
              <div className="p-4 rounded-xl bg-[#070B15] border border-rose-900/30 space-y-1.5">
                <div className="font-bold text-rose-300">
                  ۱. عدم دریافت گواهی عدم پرداخت با کد رهگیری ثنا
                </div>
                <p className="text-slate-300 leading-relaxed">
                  برخی شعب بانک صرفاً فیش کسری موجودی دستی صادر می‌کنند. بدون ثبت سیستمی و چاپ برگه رسمی دارای کد رهگیری متصل به بانک مرکزی، امکان استفاده از ماده ۲۳ یا طرح دعوا وجود ندارد.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#070B15] border border-rose-900/30 space-y-1.5">
                <div className="font-bold text-rose-300">
                  ۲. انتقال چک پس از برگشت خوردن (سقوط جنبه کیفری)
                </div>
                <p className="text-slate-300 leading-relaxed">
                  طبق ماده ۱۱، اگر دارنده چک پس از صدور گواهی عدم پرداخت، چک را به شخص دیگری انتقال دهد، حق تعقیب کیفری برای دارنده جدید برای همیشه ساقط می‌شود.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#070B15] border border-rose-900/30 space-y-1.5">
                <div className="font-bold text-rose-300">
                  ۳. دادخواست حقوقی سنتی در جایی که اجراییه ماده ۲۳ ممکن است
                </div>
                <p className="text-slate-300 leading-relaxed">
                  اگر فقط صادرکننده چک صیادی طرف شماست، طرح دادخواست ماهوی حقوقی باعث اتلاف چند ماه زمان و پرداخت ۳.۵ درصد هزینه دادرسی غیرضروری می‌شود.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#070B15] border border-rose-900/30 space-y-1.5">
                <div className="font-bold text-rose-300">
                  ۴. فراموش کردن تقاضای تأمین خواسته فوری بدون خسارت احتمالی
                </div>
                <p className="text-slate-300 leading-relaxed">
                  در دعاوی حقوقی چک، دارنده حق دارد قبل از ابلاغ به خوانده، اموال او را فوراً توقیف کند تا بدهکار فرصت انتقال اموال را پیدا نکند.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#070B15] border border-rose-900/30 space-y-1.5">
                <div className="font-bold text-rose-300">
                  ۵. عدم استرداد لاشه چک پس از پرداخت و خطر وصول مجدد یا سوءاستفاده
                </div>
                <p className="text-slate-300 leading-relaxed">
                  صادرکنندگانی که وجه چک را نقدی یا با کارت به کارت تسویه می‌کنند ولی لاشه چک را تحویل نمی‌گیرند، در معرض طرح دعوای مجدد یا خیانت در امانت قرار می‌گیرند.
                </p>
                <Link
                  href="/samples/check-carcass-restitution"
                  className="inline-flex items-center gap-1 text-xs text-[#E5C158] font-bold hover:underline pt-1"
                >
                  مشاهده نمونه دادخواست رسمی استرداد لاشه چک ←
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* ---------------------------------------------------- */}
      {/* 2. THREE-TIER CONVERSION FUNNEL AT BOTTOM OF GUIDE */}
      {/* ---------------------------------------------------- */}
      <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-[#0C1222] via-[#121A2E] to-[#070B15] border-2 border-[#E5C158]/50 shadow-2xl space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5C158]/10 text-[#E5C158] text-xs font-bold border border-[#E5C158]/30">
            <Sparkles className="w-3.5 h-3.5" />
            راهنمای تصمیم‌گیری در انتهای بررسی
          </span>
          <h3 className="text-xl md:text-2xl font-black text-white">
            اگر درباره پرونده چک خود نمی‌دانید کدام مسیر حقوقی مناسب‌تر است
          </h3>
          <p className="text-xs md:text-sm text-slate-300">
            بر اساس میزان پیچیدگی چک، یکی از ۳ مسیر زیر را انتخاب نمایید:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          {/* Path 1: Free Knowledge */}
          <div className="p-5 rounded-2xl bg-[#070B15]/80 border border-slate-800 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-slate-800 text-[#E5C158] flex items-center justify-center mx-auto">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-white">
                ۱. مطالعه رایگان و دانلود نمونه‌ها
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                اگر پرونده ساده است و تمایل دارید متن دادخواست یا فرم اجراییه را خودتان آماده کنید.
              </p>
            </div>
            <Link
              href="/samples"
              className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-[#E5C158] border border-slate-700 transition-colors"
            >
              مشاهده بانک نمونه اسناد چک
            </Link>
          </div>

          {/* Path 2: Professional Service Order (Primary) */}
          <div className="p-5 rounded-2xl bg-gradient-to-b from-[#162038] to-[#0D1527] border-2 border-[#E5C158] space-y-3 flex flex-col justify-between shadow-lg shadow-[#E5C158]/10">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#E5C158] text-[#070B15] flex items-center justify-center mx-auto font-black">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-white">
                ۲. تنظیم تخصصی دادخواست چک
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                تنظیم فوری دادخواست مطالبه وجه، اجراییه ماده ۲۳ و تأمین خواسته توسط کارشناسان ارشد حقوقی نگارش یار.
              </p>
            </div>
            <Link
              href="/services/check-claim"
              className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#E5C158] to-[#C59B27] text-[#070B15] font-black text-xs shadow-md shadow-[#E5C158]/20 hover:brightness-110 transition-all"
            >
              ثبت آنلاین سفارش تنظیم چک
            </Link>
          </div>

          {/* Path 3: Lawyer Referral */}
          <div className="p-5 rounded-2xl bg-[#070B15]/80 border border-blue-500/30 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto">
                <Scale className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-white">
                ۳. معرفی وکیل منصف پایه یک
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                برای پرونده‌های پیچیده، مبالغ سنگین، فرار از دین یا حضور در دادگاه با دستمزد شفاف و منصفانه.
              </p>
            </div>
            <Link
              href="/lawyer-referral?utm_source=bounced_check_guide&utm_medium=pillar_footer&utm_campaign=check_lawyers"
              className="py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors"
            >
              ارتباط با وکیل منصف در استان شما
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
