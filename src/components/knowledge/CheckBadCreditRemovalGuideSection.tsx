'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Scale,
  ArrowLeft,
  Sparkles,
  SlidersHorizontal,
  FileCheck2,
  RefreshCw,
  ArrowRightLeft,
  CheckCircle2,
  Clock,
  Banknote,
  ClipboardList,
} from 'lucide-react';

interface RemovalScenario {
  id: string;
  title: string;
  scenarioType: 'has_fund' | 'has_holder' | 'lost_corpse' | 'sayad' | 'old' | 'court_closed';
  conditionDesc: string;
  recommendedMethod: string;
  requiredDocuments: string;
  bankTimeline: string;
  systemUpdate: string;
  legalTip: string;
}

export function CheckBadCreditRemovalGuideSection() {
  const [activeTab, setActiveTab] = useState<'matrix' | 'methods' | 'steps' | 'checklist' | 'comparison'>('matrix');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const scenarios: RemovalScenario[] = [
    {
      id: 'sc-fund',
      title: 'صادرکننده وجه چک را دارد اما به دارنده دسترسی ندارد',
      scenarioType: 'has_fund',
      conditionDesc: 'موجودی کامل یا کسری چک موجود است، اما دارنده چک برای وصول مراجعه نمی‌کند یا مفقودالاثر است.',
      recommendedMethod: 'تأمین موجودی و مسدودسازی وجه در حساب جاری (ماده ۵ مکرر)',
      requiredDocuments: 'فرم تکمیل‌شده درخواست مسدودسازی وجه، کارت ملی، پرداخت کارمزد بانکی',
      bankTimeline: 'ظرف چند ساعت پس از واریز و ثبت در شعبه',
      systemUpdate: 'حداکثر ۲۴ تا ۴۸ ساعت کاری در سامانه یکپارچه بانک مرکزی',
      legalTip: 'بانک ظرف ۳ روز با ارسال اخطاریه واریز وجه را به دارنده اعلام می‌کند. مبلغ به مدت حداکثر ۲ سال مسدود می‌ماند و بلافاصله رفع سوء اثر می‌شود.',
    },
    {
      id: 'sc-holder',
      title: 'دارنده چک در دسترس بوده و حاضر به همکاری و دریافت طلب است',
      scenarioType: 'has_holder',
      conditionDesc: 'بدهی با دارنده به صورت نقدی یا تهاتر تسویه شده و لاشه فیزیکی چک قابل دریافت است.',
      recommendedMethod: 'واریز وجه و دریافت لاشه فیزیکی چک و تسلیم آن به شعبه بانک',
      requiredDocuments: 'اصل برگه چک برگشتی (لاشه چک) و گواهی عدم پرداخت، کارت ملی صادرکننده',
      bankTimeline: 'همان روز با ارائه لاشه چک و دریافت رسید باطلی از متصدی بانک',
      systemUpdate: '۲۴ ساعت کاری پس از ارسال صورتجلسه ابطال به بانک مرکزی',
      legalTip: 'سریع‌ترین و بی‌دردسرترین روش رفع سوء اثر، ارائه مستقیم اصل لاشه چک به بانک صادرکننده دسته چک است.',
    },
    {
      id: 'sc-lost-corpse',
      title: 'وجه پرداخت شده اما لاشه چک مفقود شده یا تحویل داده نمی‌شود',
      scenarioType: 'lost_corpse',
      conditionDesc: 'بدهی تسویه گردیده اما لاشه چک گم شده، در دادگاه ضبط شده یا دارنده از استرداد آن طفره می‌رود.',
      recommendedMethod: 'اخذ رضایت‌نامه رسمی (محضری) در دفترخانه اسناد رسمی',
      requiredDocuments: 'اصل سند اقرارنامه و رضایت‌نامه محضری با قید شماره ۱۶ رقمی صیاد/سریال و مبلغ چک',
      bankTimeline: 'ثبت در شعبه ظرف ۱ روز کاری با ارائه اصل سند محضری',
      systemUpdate: '۲۴ تا ۴۸ ساعت کاری در سامانه بانک مرکزی',
      legalTip: 'متن رضایت‌نامه باید صریح و بدون شرط باشد. رضایت‌نامه دست‌نویس یا پشت چک بدون تایید محضری در شعب بانکی پذیرفته نمی‌شود.',
    },
    {
      id: 'sc-sayad',
      title: 'چک از نوع صیادی بنفش با شناسه ۱۶ رقمی است',
      scenarioType: 'sayad',
      conditionDesc: 'چک صیادی بنفش دارای گواهی عدم پرداخت رسمی و اعمال محدودیت‌های مسدودیتی ماده ۵ مکرر است.',
      recommendedMethod: 'رفع سوء اثر سیستمی از طریق سامانه صیاد بانک مرکزی پس از تسویه',
      requiredDocuments: 'ارائه لاشه یا رضایت محضری یا مسدودسازی حساب متصل به شناسه ۱۶ رقمی',
      bankTimeline: 'انجام ثبت سیستمی در همان روز در شعبه',
      systemUpdate: 'رفع محدودیت کارت‌ها و حساب‌های سایر بانک‌ها ظرف ۲۴ ساعت؛ بازگشت رنگ صیاد به سفید',
      legalTip: 'با رفع سوء اثر چک صیادی، وضعیت اعتباری صادرکننده در سامانه صیاد از قرمز/قهوه‌ای به سفید تغییر کرده و امکان صدور چک جدید آزاد می‌شود.',
    },
    {
      id: 'sc-court-closed',
      title: 'پرونده با رأی دادگاه مختومه شده یا ۳ سال از برگشت چک گذشته است',
      scenarioType: 'court_closed',
      conditionDesc: 'حکم قطعی برائت/بطلان/صلح دادگاه صادر شده، یا ۳ سال بدون ثبت هرگونه دادخواست قضایی گذشته است.',
      recommendedMethod: 'ارائه حکم قطعی دادگاه یا رفع سوء اثر خودکار ناشی از مرور زمان ۳ ساله',
      requiredDocuments: 'نامه رسمی اجرای احکام/دادگاه مبنی بر مختومه شدن یا استعلام عدم ثبت دعوا در ثنا',
      bankTimeline: 'ارائه نامه قضایی به واحد حقوقی بانک یا اقدام خودکار سامانه بعد از ۳ سال',
      systemUpdate: '۲۴ تا ۷۲ ساعت کاری پس از تأیید واحد حقوقی سرپرستی بانک',
      legalTip: 'مرور زمان ۳ ساله تنها در صورتی عمل می‌کند که هیچ دادخواست یا شکواییه‌ای در طول ۳ سال در سامانه ثنا ثبت نشده باشد.',
    },
  ];

  const filteredScenarios = selectedFilter === 'all'
    ? scenarios
    : scenarios.filter((s) => s.scenarioType === selectedFilter);

  const methodsList = [
    {
      id: 1,
      name: '۱. تأمین موجودی و مسدودسازی وجه در حساب جاری',
      summary: 'واریز کسری موجودی به حساب و انسداد آن به مدت حداکثر ۲ سال به نفع دارنده',
      legalBasis: 'بند (الف) ماده ۵ مکرر قانون صدور چک',
      speed: 'فوری (۲۴ تا ۴۸ ساعت)',
      cost: 'صرفاً کارمزد مختصر بانکی',
      pros: 'عدم نیاز به دسترسی یا حضور دارنده چک؛ ایده‌آل برای زمان‌هایی که دارنده حاضر به مراجعه به بانک نیست.',
      cons: 'نیاز به تأمین کامل نقدینگی و بلوکه شدن وجه تا زمان مراجعه دارنده یا انقضای ۲ سال.',
    },
    {
      id: 2,
      name: '۲. ارائه لاشه چک برگشتی به شعبه بانک',
      summary: 'تحویل اصل برگه فیزیکی چک و اخذ رسید ابطال از متصدی شعبه',
      legalBasis: 'بند (ب) ماده ۵ مکرر قانون صدور چک',
      speed: 'سریع‌ترین روش (همان روز تا ۲۴ ساعت)',
      cost: 'بدون هزینه جانبی',
      pros: 'ساده‌ترین و قطعی‌ترین روش بدون نیاز به تنظیم سند در دفترخانه یا مکاتبه قضایی.',
      cons: 'مشروط به در دسترس بودن دارنده و تسلیم فیزیکی برگه چک.',
    },
    {
      id: 3,
      name: '۳. ارائه رضایت‌نامه محضری دارنده چک',
      summary: 'تنظیم اقرارنامه رسمی در دفترخانه اسناد رسمی در صورت گم شدن یا عدم دسترسی به لاشه',
      legalBasis: 'بند (ج) ماده ۵ مکرر قانون صدور چک',
      speed: '۲۴ تا ۴۸ ساعت کاری',
      cost: 'هزینه حق‌التحریر دفترخانه اسناد رسمی',
      pros: 'راهکار نجات‌بخش هنگام مفقودی لاشه یا عدم امکان تسلیم فیزیکی چک.',
      cons: 'نیاز به حضور شخص دارنده (یا وکیل با وکالت‌نامه رسمی) در دفترخانه اسناد رسمی.',
    },
    {
      id: 4,
      name: '۴. ارائه نامه رسمی دادگاه یا مرجع ثبتی',
      summary: 'تسلیم گواهی قطعی مبنی بر بطلان، برائت، سازش یا اجرای کامل حکم دادگاه/ثبت',
      legalBasis: 'بند (د) ماده ۵ مکرر قانون صدور چک',
      speed: '۲ تا ۴ روز کاری (بررسی واحد حقوقی بانک)',
      cost: 'هزینه‌های معمول دادرسی/اجرای ثبت',
      pros: 'رفع سوء اثر حتی بدون رضایت دارنده، بر مبنای رأی قطعی مراجع قضایی.',
      cons: 'نیازمند طی فرآیند دادرسی و اخذ مکاتبه رسمی سیستمی از اجرای احکام.',
    },
    {
      id: 5,
      name: '۵. انقضای مدت ۳ سال از تاریخ گواهی عدم پرداخت',
      summary: 'رفع سوء اثر خودکار پس از گذشت ۳ سال در صورت عدم طرح دعوای حقوقی یا کیفری',
      legalBasis: 'بند (هـ) ماده ۵ مکرر قانون صدور چک',
      speed: 'خودکار سیستمی از طریق بانک مرکزی',
      cost: 'رایگان',
      pros: 'عدم نیاز به پرداخت وجه یا مراجعه به شعبه در چک‌های قدیمی رهاشده.',
      cons: 'مشروط به عدم ثبت هرگونه دعوا در مراجع قضایی؛ در صورت طرح دعوا این بند اعمال نمی‌شود.',
    },
  ];

  return (
    <div className="space-y-8 my-8 text-right">
      {/* ---------------------------------------------------- */}
      {/* 1. TOP TAB NAVIGATION */}
      {/* ---------------------------------------------------- */}
      <div className="p-2 rounded-2xl bg-[#0C1222] border border-slate-800 shadow-xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1.5">
          <button
            onClick={() => setActiveTab('matrix')}
            className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs md:text-sm font-bold transition-all ${
              activeTab === 'matrix'
                ? 'bg-gradient-to-r from-[#E5C158] to-[#C59B27] text-[#070B15] shadow-lg shadow-[#E5C158]/20'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <SlidersHorizontal className="w-4 h-4 shrink-0" />
            <span>ماتریس تصمیم رفع سوء اثر</span>
          </button>

          <button
            onClick={() => setActiveTab('methods')}
            className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs md:text-sm font-bold transition-all ${
              activeTab === 'methods'
                ? 'bg-gradient-to-r from-[#E5C158] to-[#C59B27] text-[#070B15] shadow-lg shadow-[#E5C158]/20'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Banknote className="w-4 h-4 shrink-0" />
            <span>۵ روش قانونی بانک مرکزی</span>
          </button>

          <button
            onClick={() => setActiveTab('steps')}
            className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs md:text-sm font-bold transition-all ${
              activeTab === 'steps'
                ? 'bg-gradient-to-r from-[#E5C158] to-[#C59B27] text-[#070B15] shadow-lg shadow-[#E5C158]/20'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <RefreshCw className="w-4 h-4 shrink-0" />
            <span>مراحل اجرایی در بانک</span>
          </button>

          <button
            onClick={() => setActiveTab('checklist')}
            className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs md:text-sm font-bold transition-all ${
              activeTab === 'checklist'
                ? 'bg-gradient-to-r from-[#E5C158] to-[#C59B27] text-[#070B15] shadow-lg shadow-[#E5C158]/20'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <ClipboardList className="w-4 h-4 shrink-0" />
            <span>چک‌لیست مدارک مورد نیاز</span>
          </button>

          <button
            onClick={() => setActiveTab('comparison')}
            className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs md:text-sm font-bold transition-all ${
              activeTab === 'comparison'
                ? 'bg-gradient-to-r from-[#E5C158] to-[#C59B27] text-[#070B15] shadow-lg shadow-[#E5C158]/20'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <ArrowRightLeft className="w-4 h-4 shrink-0" />
            <span>جدول مقایسه‌ای روش‌ها</span>
          </button>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. TAB 1: DECISION MATRIX */}
      {/* ---------------------------------------------------- */}
      {activeTab === 'matrix' && (
        <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#0C1222] to-[#121A2E] border-2 border-[#E5C158]/30 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5C158]/10 text-[#E5C158] text-xs font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>راهنمای انتخاب هوشمند روش رفع سوء اثر</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white">
                چک برگشتی شما در چه وضعیتی قرار دارد؟
              </h3>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-2 flex-wrap text-xs">
              <span className="text-slate-400 font-medium ml-1">وضعیت پرونده:</span>
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-3 py-1.5 rounded-lg border transition-colors ${
                  selectedFilter === 'all'
                    ? 'bg-[#E5C158] text-[#070B15] border-[#E5C158] font-bold'
                    : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-500'
                }`}
              >
                همه شرایط
              </button>
              <button
                onClick={() => setSelectedFilter('has_fund')}
                className={`px-3 py-1.5 rounded-lg border transition-colors ${
                  selectedFilter === 'has_fund'
                    ? 'bg-emerald-500 text-white border-emerald-500 font-bold'
                    : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-500'
                }`}
              >
                وجه موجود است
              </button>
              <button
                onClick={() => setSelectedFilter('lost_corpse')}
                className={`px-3 py-1.5 rounded-lg border transition-colors ${
                  selectedFilter === 'lost_corpse'
                    ? 'bg-amber-500 text-[#070B15] border-amber-500 font-bold'
                    : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-500'
                }`}
              >
                لاشه گم شده
              </button>
              <button
                onClick={() => setSelectedFilter('sayad')}
                className={`px-3 py-1.5 rounded-lg border transition-colors ${
                  selectedFilter === 'sayad'
                    ? 'bg-indigo-500 text-white border-indigo-500 font-bold'
                    : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-500'
                }`}
              >
                چک صیادی بنفش
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-5">
            {filteredScenarios.map((sc) => (
              <div
                key={sc.id}
                className="p-5 md:p-6 rounded-xl bg-[#070B15] border border-slate-800 hover:border-[#E5C158]/50 transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                  <div className="flex items-center gap-2.5 font-black text-white text-base">
                    <span className="p-1.5 rounded-lg bg-[#E5C158]/10 text-[#E5C158]">
                      <FileCheck2 className="w-5 h-5" />
                    </span>
                    <span>{sc.title}</span>
                  </div>
                  <span className="text-[11px] px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 self-start sm:self-auto">
                    {sc.recommendedMethod}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1">
                    <span className="text-amber-400 font-bold flex items-center gap-1.5">
                      <ClipboardList className="w-3.5 h-3.5 shrink-0" />
                      مدارک مورد نیاز:
                    </span>
                    <p className="text-slate-300 leading-relaxed">{sc.requiredDocuments}</p>
                  </div>

                  <div className="p-3 rounded-lg bg-blue-950/20 border border-blue-900/30 space-y-1">
                    <span className="text-blue-400 font-bold flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 shrink-0" />
                      زمان‌بندی و ثبت سامانه:
                    </span>
                    <p className="text-blue-200/90 leading-relaxed">
                      <strong>بانک:</strong> {sc.bankTimeline} <br />
                      <strong>سامانه:</strong> {sc.systemUpdate}
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-900/30 space-y-1">
                    <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      نکته کلیدی و راهکار:
                    </span>
                    <p className="text-emerald-200/90 leading-relaxed">{sc.legalTip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* 3. TAB 2: 5 LEGAL METHODS */}
      {/* ---------------------------------------------------- */}
      {activeTab === 'methods' && (
        <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#0C1222] to-[#121A2E] border border-slate-800 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <Banknote className="w-5 h-5 text-[#E5C158]" />
              ۵ روش قانونی رفع سوء اثر چک مطابق ماده ۵ مکرر قانون صدور چک
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              قانون صدور چک و دستورالعمل‌های بانک مرکزی جمهوری اسلامی ایران، راه‌های قانونی رفع سوء اثر را منحصراً در ۵ روش زیر معین نموده‌اند:
            </p>
          </div>

          <div className="space-y-4">
            {methodsList.map((m) => (
              <div
                key={m.id}
                className="p-5 rounded-xl bg-[#070B15] border border-slate-800 space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
                  <h4 className="font-black text-base text-white">{m.name}</h4>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#E5C158]/10 text-[#E5C158] border border-[#E5C158]/30">
                    مستند قانونی: {m.legalBasis}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {m.summary}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs pt-1">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">سرعت اجرا:</span>
                    <span className="text-emerald-400 font-bold">{m.speed}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">هزینه جانبی:</span>
                    <span className="text-slate-200 font-bold">{m.cost}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-emerald-950/20 border border-emerald-900/30 col-span-1 sm:col-span-2">
                    <span className="text-emerald-400 font-bold block text-[11px]">مزیت اصلی:</span>
                    <span className="text-emerald-200/90 leading-normal">{m.pros}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* 4. TAB 3: STEP-BY-STEP WORKFLOW AT BANK */}
      {/* ---------------------------------------------------- */}
      {activeTab === 'steps' && (
        <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#0C1222] to-[#121A2E] border border-slate-800 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-[#E5C158]" />
              مراحل اجرایی رفع سوء اثر در شعب بانکی و سامانه متمرکز
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              فرآیند گام‌به‌گام از زمان مراجعه به شعبه تا برطرف شدن محدودیت‌های کارت‌ها و حساب‌های بانکی:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Step 1 */}
            <div className="p-5 rounded-xl bg-[#070B15] border border-slate-800 relative space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center">
                  ۱
                </span>
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-slate-900 text-slate-400 border border-slate-800">
                  انتخاب روش و مدرک
                </span>
              </div>
              <h4 className="font-bold text-sm text-white">آماده‌سازی مدرک معتبر</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                تهیه یکی از مدارک پنج‌گانه (اصل لاشه چک، رضایت‌نامه محضری، واریز وجه به حساب یا نامه دادگاه).
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-xl bg-[#070B15] border border-slate-800 relative space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-full bg-indigo-500 text-white font-black text-sm flex items-center justify-center">
                  ۲
                </span>
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-slate-900 text-slate-400 border border-slate-800">
                  مراجعه به شعبه افتتاح‌کننده
                </span>
              </div>
              <h4 className="font-bold text-sm text-white">ثبت درخواست در شعبه</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                مراجعه به شعبه صادرکننده چک، تکمیل فرم رفع سوء اثر و دریافت رسید کتبی با مهر برجسته شعبه.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-xl bg-[#070B15] border border-slate-800 relative space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-full bg-emerald-500 text-white font-black text-sm flex items-center justify-center">
                  ۳
                </span>
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-slate-900 text-slate-400 border border-slate-800">
                  ارسال سیستمی به بانک مرکزی
                </span>
              </div>
              <h4 className="font-bold text-sm text-white">بروزرسانی سامانه صیاد</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                ارسال تاییدیه توسط سرپرستی بانک به سامانه یکپارچه بانک مرکزی و خروج شناسه چک از وضعیت برگشتی.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-5 rounded-xl bg-[#070B15] border border-slate-800 relative space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-full bg-rose-500 text-white font-black text-sm flex items-center justify-center">
                  ۴
                </span>
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-slate-900 text-slate-400 border border-slate-800">
                  رفع کامل محدودیت‌ها
                </span>
              </div>
              <h4 className="font-bold text-sm text-white">آزادسازی حساب‌ها و اعتبارسنجی</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                رفع انسداد خودکار موجودی سایر بانک‌ها، سفید شدن وضعیت صیاد و بازگشت امکان صدور چک و دریافت وام.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* 5. TAB 4: CHECKLIST OF DOCUMENTS */}
      {/* ---------------------------------------------------- */}
      {activeTab === 'checklist' && (
        <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#0C1222] to-[#121A2E] border border-slate-800 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <ClipboardList className="w-5 h-5 text-[#E5C158]" />
              چک‌لیست رسمی مدارک مورد نیاز برای رفع سوء اثر
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              بر اساس روش انتخابی خود، مدارک زیر را پیش از مراجعه به شعبه بانک همراه داشته باشید:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-3">
              <h4 className="font-bold text-[#E5C158] text-sm flex items-center gap-2">
                <FileCheck2 className="w-4 h-4" />
                مدارک روش ارائه لاشه چک:
              </h4>
              <ul className="text-xs text-slate-300 space-y-2 pr-4 list-disc">
                <li>اصل برگه چک برگشتی (لاشه چک) بدون مخدوشی.</li>
                <li>اصل گواهی عدم پرداخت صادره از بانک.</li>
                <li>کارت ملی هوشمند و شناسنامه صادرکننده چک.</li>
                <li>فرم تکمیل‌شده ابطال چک و رفع سوء اثر در شعبه.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-3">
              <h4 className="font-bold text-[#E5C158] text-sm flex items-center gap-2">
                <FileCheck2 className="w-4 h-4" />
                مدارک روش رضایت‌نامه محضری:
              </h4>
              <ul className="text-xs text-slate-300 space-y-2 pr-4 list-disc">
                <li>اصل سند رسمی اقرارنامه و رضایت‌نامه تنظیمی در دفترخانه اسناد رسمی.</li>
                <li>درج دقیق شناسه ۱۶ رقمی صیاد، شماره سریال، مبلغ و تاریخ چک در متن سند محضری.</li>
                <li>کارت ملی صادرکننده چک.</li>
                <li>رسید ثبت اظهارنامه یا پرداخت حق‌التحریر در صورت نیاز.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-3">
              <h4 className="font-bold text-[#E5C158] text-sm flex items-center gap-2">
                <FileCheck2 className="w-4 h-4" />
                مدارک روش تأمین موجودی و انسداد:
              </h4>
              <ul className="text-xs text-slate-300 space-y-2 pr-4 list-disc">
                <li>واریز نقد یا انتقال وجه معادل کسری مبلغ چک به حساب جاری.</li>
                <li>تکمیل فرم رسمی درخواست مسدودسازی وجه به مدت حداکثر ۲ سال.</li>
                <li>کارت ملی صادرکننده.</li>
                <li>پرداخت کارمزد ارسال پیامک یا اخطاریه پستی به دارنده چک.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-3">
              <h4 className="font-bold text-[#E5C158] text-sm flex items-center gap-2">
                <FileCheck2 className="w-4 h-4" />
                مدارک روش حکم دادگاه / اجرای ثبت:
              </h4>
              <ul className="text-xs text-slate-300 space-y-2 pr-4 list-disc">
                <li>نامه رسمی با سربرگ ممهور به مهر برجسته اجرای احکام دادگاه یا اجرای ثبت.</li>
                <li>تصویر دادنامه قطعی مبنی بر رد دعوا، بطلان چک، برائت یا سازش طرفین.</li>
                <li>گواهی واریز وجه چک به حساب سپرده دادگستری (در صورت تودیع).</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* 6. TAB 5: COMPARISON TABLE */}
      {/* ---------------------------------------------------- */}
      {activeTab === 'comparison' && (
        <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#0C1222] to-[#121A2E] border border-slate-800 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <ArrowRightLeft className="w-5 h-5 text-[#E5C158]" />
              جدول مقایسه جامع روش‌های قانونی رفع سوء اثر
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              ارزیابی تطبیقی روش‌های رفع سوء اثر از منظر سرعت، مدرک اصلی، هزینه و شرایط کاربرد:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm text-right border-collapse border border-slate-800">
              <thead>
                <tr className="bg-slate-900/90 text-white">
                  <th className="p-3.5 border border-slate-700 font-black">روش رفع سوء اثر</th>
                  <th className="p-3.5 border border-slate-700 text-[#E5C158] font-black">مدرک اصلی</th>
                  <th className="p-3.5 border border-slate-700 text-emerald-300 font-black">مدت زمان سامانه</th>
                  <th className="p-3.5 border border-slate-700 text-slate-300 font-black">بهترین کاربرد</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr className="hover:bg-slate-900/40">
                  <td className="p-3 border border-slate-800 font-bold text-white">ارائه لاشه چک</td>
                  <td className="p-3 border border-slate-800 text-emerald-300">اصل برگه چک فیزیکی</td>
                  <td className="p-3 border border-slate-800 font-medium">همان روز تا ۲۴ ساعت</td>
                  <td className="p-3 border border-slate-800">تسویه نقدی با دارنده و دریافت اصل برگه</td>
                </tr>
                <tr className="hover:bg-slate-900/40">
                  <td className="p-3 border border-slate-800 font-bold text-white">رضایت‌نامه محضری</td>
                  <td className="p-3 border border-slate-800 text-amber-300">اقرارنامه رسمی دفترخانه</td>
                  <td className="p-3 border border-slate-800 font-medium">۲۴ تا ۴۸ ساعت کاری</td>
                  <td className="p-3 border border-slate-800">گم شدن یا عدم امکان استرداد لاشه چک</td>
                </tr>
                <tr className="hover:bg-slate-900/40">
                  <td className="p-3 border border-slate-800 font-bold text-white">تأمین موجودی و انسداد</td>
                  <td className="p-3 border border-slate-800 text-indigo-300">رسید واریز و فرم انسداد</td>
                  <td className="p-3 border border-slate-800 font-medium">۲۴ تا ۴۸ ساعت کاری</td>
                  <td className="p-3 border border-slate-800">عدم دسترسی یا امتناع دارنده از مراجعه</td>
                </tr>
                <tr className="hover:bg-slate-900/40">
                  <td className="p-3 border border-slate-800 font-bold text-white">نامه رسمی دادگاه</td>
                  <td className="p-3 border border-slate-800 text-rose-300">نامه اجرای احکام / دادنامه</td>
                  <td className="p-3 border border-slate-800 font-medium">۲ تا ۴ روز کاری</td>
                  <td className="p-3 border border-slate-800">صدور حکم برائت، بطلان یا صلح در پرونده قضایی</td>
                </tr>
                <tr className="hover:bg-slate-900/40">
                  <td className="p-3 border border-slate-800 font-bold text-white">مرور زمان ۳ ساله</td>
                  <td className="p-3 border border-slate-800 text-slate-400">استعلام سیستمی بانک مرکزی</td>
                  <td className="p-3 border border-slate-800 font-medium">خودکار سیستمی</td>
                  <td className="p-3 border border-slate-800">چک‌های قدیمی بدون ثبت دعوا در مراجع قضایی</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* 7. THREE TRANSPARENT CONVERSION PATHWAYS */}
      {/* ---------------------------------------------------- */}
      <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-[#0C1222] via-[#121A2E] to-[#0C1222] border-2 border-[#E5C158]/40 shadow-xl space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5C158]/10 text-[#E5C158] text-xs font-bold">
            <Scale className="w-3.5 h-3.5" />
            <span>۳ مسیر شفاف اقدام برای رفع سوء اثر و حل اختلافات چک</span>
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            بر اساس وضعیت پرونده، اقدام مناسب را انتخاب کنید
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            رفع سوء اثر یک فرآیند اداری-بانکی است؛ با این حال در صورت وجود اختلاف مالی یا پرونده قضایی، نگارش یار در کنار شماست:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Path 1: Education & Rules */}
          <div className="p-5 rounded-xl bg-[#070B15] border border-slate-800 flex flex-col justify-between space-y-4 hover:border-slate-600 transition-colors">
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md inline-block">
                مسیر ۱ — آگاهی و استعلام بانکی
              </span>
              <h4 className="font-bold text-sm text-white">
                «می‌خواهم وضعیت چک صیادی را استعلام کنم»
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                آشنایی با قوانین چک صیادی، بررسی رنگ وضعیت اعتباری و نحوه ثبت و تایید سیستمی در سامانه بانک مرکزی.
              </p>
            </div>
            <Link
              href="/knowledge/sayad-check-rules"
              className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-xs transition-colors"
            >
              <span>مطالعه راهنمای چک صیادی</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Path 2: Document Drafting */}
          <div className="p-5 rounded-xl bg-[#070B15] border-2 border-[#E5C158]/60 flex flex-col justify-between space-y-4 shadow-lg shadow-[#E5C158]/5">
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-[#E5C158] bg-[#E5C158]/10 px-2.5 py-1 rounded-md inline-block">
                مسیر ۲ — اسناد و دادخواست قضایی
              </span>
              <h4 className="font-bold text-sm text-white">
                «برای استرداد لاشه یا اثبات دین نیاز به دادخواست دارم»
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                تنظیم دادخواست استرداد لاشه چک، الزام به تحویل سند، دادخواست اثبات بدهی یا دفاعیه در برابر ادعای دارنده.
              </p>
            </div>
            <Link
              href="/services/check-claim"
              className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-gradient-to-r from-[#E5C158] to-[#C59B27] text-[#070B15] font-black text-xs shadow-md hover:brightness-110 transition-all"
            >
              <span>ثبت سفارش تنظیم دادخواست و لایحه</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Path 3: Complex Disputes */}
          <div className="p-5 rounded-xl bg-[#070B15] border border-blue-500/40 flex flex-col justify-between space-y-4 hover:border-blue-500/70 transition-colors">
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md inline-block">
                مسیر ۳ — اختلافات قضایی پیچیده
              </span>
              <h4 className="font-bold text-sm text-white">
                «پرونده وارد دادگاه شده و نیاز به وکیل دارم»
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                معرفی و اتصال مستقیم به وکلای پایه یک دادگستری با دستمزد شفاف جهت وکالت در پرونده‌های مطالبه و خیانت در امانت چک.
              </p>
            </div>
            <Link
              href="/lawyer-referral?utm_source=knowledge_base&utm_medium=bad_credit_removal&utm_campaign=fair_lawyers"
              className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors"
            >
              <span>درخواست معرفی وکیل منصف</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
