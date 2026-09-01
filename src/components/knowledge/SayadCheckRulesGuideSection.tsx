'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FileText,
  Scale,
  ArrowLeft,
  AlertTriangle,
  Sparkles,
  ChevronLeft,
  SlidersHorizontal,
  FileCheck2,
  RefreshCw,
  Eye,
  ShieldAlert,
  ArrowRightLeft,
  CheckCircle2,
  Info,
} from 'lucide-react';

interface SayadStatusOption {
  id: string;
  scenario: string;
  statusType: 'registered_confirmed' | 'registered_not_confirmed' | 'not_registered' | 'transferred' | 'bounced';
  issue: string;
  immediateRisk: string;
  recommendedAction: string;
  legalTrack: string;
  serviceHref: string;
  serviceText: string;
  sampleHref?: string;
  sampleText?: string;
}

export function SayadCheckRulesGuideSection() {
  const [activeTab, setActiveTab] = useState<'matrix' | 'lifecycle' | 'comparison' | 'credit_colors' | 'unregistered_guide'>('matrix');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>('all');

  const statusOptions: SayadStatusOption[] = [
    {
      id: 'opt-unregistered',
      scenario: 'صادرکننده برگه فیزیکی چک بنفش را تحویل داده اما در سامانه صیاد ثبت نکرده است',
      statusType: 'not_registered',
      issue: 'برگه چک فاقد اثر سند تجاری بوده و بانک از پاس کردن، برگشت زدن و صدور گواهی عدم پرداخت امتناع می‌کند.',
      immediateRisk: 'سلب تمامی مزایای قانون جدید صدور چک (عدم امکان اجراییه ماده ۲۳ و عدم امکان شکایت کیفری).',
      recommendedAction: 'امتناع از پذیرش چک تا زمان ثبت سیستمی صادرکننده؛ در صورت تحویل کالا، ارسال اظهارنامه الزام به ثبت یا دادخواست حقوقی اثبات بدهی و مطالبه وجه به عنوان سند عادی.',
      legalTrack: 'دادخواست عمومی حقوقی الزام به ایفای تعهد / مطالبه وجه سند عادی (ماده ۱۹۸ ق.آ.د.م)',
      serviceHref: '/services/check-claim',
      serviceText: 'تنظیم دادخواست مطالبه وجه و اثبات دین',
      sampleHref: '/samples/check-payment-demand',
      sampleText: 'نمونه اظهارنامه رسمی مطالبه وجه و تسلیم لاشه',
    },
    {
      id: 'opt-not-confirmed',
      scenario: 'چک در سامانه صیاد توسط صادرکننده ثبت شده اما گیرنده دکمه تأیید را نزده است',
      statusType: 'registered_not_confirmed',
      issue: 'فرآیند انتقال سند تجاری کامل نشده و بانک وجه چک را تنها به شخصی که نامش تایید شده پرداخت می‌کند.',
      immediateRisk: 'بروز اختلاف در بانک هنگام وصول و عدم امکان انتقال قانونی چک به شخص دیگر در سامانه.',
      recommendedAction: 'ورود فوری دارنده به اینترنت‌بانک، همراه‌بانک یا اپلیکیشن‌های پرداخت معتبر و تطبیق اطلاعات فیزیکی با سیستمی و زدن دکمه «تأیید چک».',
      legalTrack: 'تکمیل فرآیند سیستمی تأیید قبل از سررسید؛ در صورت عدم امکان، استناد به ثبت صادرکننده و دادخواست حقوقی.',
      serviceHref: '/services/check-claim',
      serviceText: 'مشاوره و دادخواست حقوقی چک',
    },
    {
      id: 'opt-bounced-sayad-drawer',
      scenario: 'چک صیادی ثبت و تایید شده در سررسید به دلیل کسری یا فقدان موجودی پرداخت نشده است',
      statusType: 'bounced',
      issue: 'موجودی ناکافی و صدور گواهی عدم پرداخت رسمی از سامانه یکپارچه بانک مرکزی با کد رهگیری ثنا.',
      immediateRisk: 'انسداد تمام حساب‌های صادرکننده ظرف ۲۴ ساعت در تمامی بانک‌ها (ماده ۵ مکرر).',
      recommendedAction: 'اخذ گواهی عدم پرداخت رسمی با کد رهگیری و ثبت تقاضای صدور اجراییه مستقیم ماده ۲۳ بدون هزینه دادرسی و بدون تشکیل دادگاه.',
      legalTrack: 'اجراییه مستقیم ماده ۲۳ قانون صدور چک (سریع‌ترین مسیر وصول)',
      serviceHref: '/services/check-claim',
      serviceText: 'تنظیم تقاضای اجراییه ماده ۲۳ چک صیادی',
      sampleHref: '/samples/check-execution-petition',
      sampleText: 'نمونه تقاضای صدور برگ اجراییه ماده ۲۳',
    },
    {
      id: 'opt-bounced-with-guarantor',
      scenario: 'چک صیادی برگشت خورده و دارای ضامن ثبت‌شده در سامانه یا ظهرنویس است',
      statusType: 'bounced',
      issue: 'عدم پرداخت توسط صادرکننده اصلی و لزوم مسئول شناختن ضامن و ظهرنویسان بر اساس مسئولیت تضامنی.',
      immediateRisk: 'مسیر ماده ۲۳ منحصراً علیه صادرکننده است و ضامنین را پوشش نمی‌دهد.',
      recommendedAction: 'ثبت دادخواست حقوقی مطالبه وجه چک علیه صادرکننده و کلیه ضامنین با درخواست تأمین خواسته فوری جهت توقیف اموال هر دو.',
      legalTrack: 'دادخواست حقوقی مطالبه وجه و خسارت تأخیر تأدیه با مسئولیت تضامنی (ماده ۲۴۹ تجارت)',
      serviceHref: '/services/check-claim',
      serviceText: 'تنظیم دادخواست حقوقی چک علیه ضامن و صادرکننده',
      sampleHref: '/samples/sayad-check-claim-petition',
      sampleText: 'نمونه دادخواست مطالبه وجه چک صیادی با ضامن',
    },
    {
      id: 'opt-transferred-sayad',
      scenario: 'چک صیادی بنفش از طریق سامانه صیاد به دارنده جدید انتقال یافته است',
      statusType: 'transferred',
      issue: 'ظهرنویسی دستی پشت برگه چک صیادی بنفش دیگر معتبر نیست و انتقال حتماً باید سیستمی باشد.',
      immediateRisk: 'اگر انتقال فقط پشت‌نویسی دستی باشد، بانک دارنده را به رسمیت نمی‌شناسد و گواهی به نام او صادر نمی‌شود.',
      recommendedAction: 'الزام انتقال‌دهنده به ثبت شناسه ملی گیرنده جدید در سامانه صیاد و تأیید انتقال توسط دارنده نهایی در اپلیکیشن بانکی.',
      legalTrack: 'انتقال رسمی در بستر صیاد و حفظ حق مراجعه به ظهرنویسان زنجیره‌ای.',
      serviceHref: '/services/check-claim',
      serviceText: 'بررسی زنجیره انتقال و طرح دعوا',
    },
  ];

  const filteredOptions = selectedStatusFilter === 'all'
    ? statusOptions
    : statusOptions.filter((opt) => opt.statusType === selectedStatusFilter);

  const creditColors = [
    {
      color: 'سفید (عالی)',
      badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      dotColor: 'bg-emerald-400',
      description: 'صادرکننده هیچ‌گونه سابقه چک برگشتی ندارد یا کلیه سوابق قبلی را با رفع سوء اثر کامل پاک کرده است.',
      safetyLevel: 'امنیت کامل برای معامله و پذیرش چک',
    },
    {
      color: 'زرد (کم‌خطر)',
      badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      dotColor: 'bg-amber-400',
      description: 'صادرکننده دارای ۱ فقره چک برگشتی یا حداکثر تا سقف ۱۰ میلیون تومان تعهد معوق است.',
      safetyLevel: 'احتیاط در مبالغ بالا و لزوم اخذ ضمانت تکمیلی',
    },
    {
      color: 'نارنجی (متوسط)',
      badgeBg: 'bg-orange-500/20 text-orange-300 border-orange-500/40',
      dotColor: 'bg-orange-400',
      description: 'صادرکننده دارای ۲ تا ۴ فقره چک برگشتی یا تا سقف ۵۰ میلیون تومان تعهد پرداخت‌نشده دارد.',
      safetyLevel: 'ریسک بالا - عدم توصیه به دریافت بدون وثیقه ملکی یا ضامن معتبر',
    },
    {
      color: 'قهوه‌ای (پرخطر)',
      badgeBg: 'bg-amber-800/30 text-amber-200 border-amber-700/50',
      dotColor: 'bg-amber-700',
      description: 'صادرکننده دارای ۵ تا ۱۰ فقره چک برگشتی یا تعهد پرداخت‌نشده بین ۵۰ تا ۱۰۰ میلیون تومان است.',
      safetyLevel: 'خطر جدی سوخت شدن طلب - عدم پذیرش قطعی',
    },
    {
      color: 'قرمز (بحرانی)',
      badgeBg: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
      dotColor: 'bg-rose-500',
      description: 'صادرکننده دارای بیش از ۱۰ فقره چک برگشتی یا مبالغ بالای ۱۰۰ میلیون تومان چک بلامحل است و حساب‌ها مسدود می‌باشد.',
      safetyLevel: 'ممنوعیت کامل معامله - صادرکننده مجاز به صدور برگه جدید در سامانه نیست',
    },
  ];

  return (
    <div className="space-y-8 my-8 text-right">
      {/* ---------------------------------------------------- */}
      {/* 1. TOP INTERACTIVE NAVIGATION BAR */}
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
            <span>ماتریس وضعیت چک</span>
          </button>

          <button
            onClick={() => setActiveTab('lifecycle')}
            className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs md:text-sm font-bold transition-all ${
              activeTab === 'lifecycle'
                ? 'bg-gradient-to-r from-[#E5C158] to-[#C59B27] text-[#070B15] shadow-lg shadow-[#E5C158]/20'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <RefreshCw className="w-4 h-4 shrink-0" />
            <span>۴ مرحله صیاد (ثبت تا وصول)</span>
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
            <span>مقایسه صیادی با سنتی</span>
          </button>

          <button
            onClick={() => setActiveTab('credit_colors')}
            className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs md:text-sm font-bold transition-all ${
              activeTab === 'credit_colors'
                ? 'bg-gradient-to-r from-[#E5C158] to-[#C59B27] text-[#070B15] shadow-lg shadow-[#E5C158]/20'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Eye className="w-4 h-4 shrink-0" />
            <span>رنگ‌های اعتبارسنجی صیاد</span>
          </button>

          <button
            onClick={() => setActiveTab('unregistered_guide')}
            className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs md:text-sm font-bold transition-all ${
              activeTab === 'unregistered_guide'
                ? 'bg-gradient-to-r from-[#E5C158] to-[#C59B27] text-[#070B15] shadow-lg shadow-[#E5C158]/20'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <ShieldAlert className="w-4 h-4 shrink-0" />
            <span>حکم چک ثبت‌نشده</span>
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
                <span>ماتریس تصمیم‌گیری هوشمند وضعیت چک صیادی</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white">
                چک صیادی من در چه وضعیتی قرار دارد و چه اقدامی باید بکنم؟
              </h3>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-2 flex-wrap text-xs">
              <span className="text-slate-400 font-medium ml-1">فیلتر وضعیت:</span>
              <button
                onClick={() => setSelectedStatusFilter('all')}
                className={`px-3 py-1.5 rounded-lg border transition-colors ${
                  selectedStatusFilter === 'all'
                    ? 'bg-[#E5C158] text-[#070B15] border-[#E5C158] font-bold'
                    : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-500'
                }`}
              >
                همه موارد
              </button>
              <button
                onClick={() => setSelectedStatusFilter('not_registered')}
                className={`px-3 py-1.5 rounded-lg border transition-colors ${
                  selectedStatusFilter === 'not_registered'
                    ? 'bg-rose-500 text-white border-rose-500 font-bold'
                    : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-500'
                }`}
              >
                ثبت‌نشده در سامانه
              </button>
              <button
                onClick={() => setSelectedStatusFilter('bounced')}
                className={`px-3 py-1.5 rounded-lg border transition-colors ${
                  selectedStatusFilter === 'bounced'
                    ? 'bg-amber-500 text-[#070B15] border-amber-500 font-bold'
                    : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-500'
                }`}
              >
                برگشت‌خورده
              </button>
              <button
                onClick={() => setSelectedStatusFilter('registered_not_confirmed')}
                className={`px-3 py-1.5 rounded-lg border transition-colors ${
                  selectedStatusFilter === 'registered_not_confirmed'
                    ? 'bg-blue-500 text-white border-blue-500 font-bold'
                    : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-500'
                }`}
              >
                تاییدنشده توسط گیرنده
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-5">
            {filteredOptions.map((opt) => (
              <div
                key={opt.id}
                className="p-5 md:p-6 rounded-xl bg-[#070B15] border border-slate-800 hover:border-[#E5C158]/50 transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                  <div className="flex items-center gap-2.5 font-black text-white text-base">
                    <span className="p-1.5 rounded-lg bg-[#E5C158]/10 text-[#E5C158]">
                      <FileCheck2 className="w-5 h-5" />
                    </span>
                    <span>{opt.scenario}</span>
                  </div>
                  <span className="text-[11px] px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 self-start sm:self-auto">
                    مسیر: {opt.legalTrack}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1">
                    <span className="text-amber-400 font-bold flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                      مشکل و وضعیت حقوقی:
                    </span>
                    <p className="text-slate-300 leading-relaxed">{opt.issue}</p>
                  </div>

                  <div className="p-3 rounded-lg bg-rose-950/20 border border-rose-900/30 space-y-1">
                    <span className="text-rose-400 font-bold flex items-center gap-1.5">
                      <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
                      ریسک فوری:
                    </span>
                    <p className="text-rose-200/90 leading-relaxed">{opt.immediateRisk}</p>
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-900/30 space-y-1">
                    <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      اقدام عملی پیشنهادی:
                    </span>
                    <p className="text-emerald-200/90 leading-relaxed">{opt.recommendedAction}</p>
                  </div>
                </div>

                {/* Actions & Links */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Link
                      href={opt.serviceHref}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#E5C158] hover:bg-[#d4b044] text-[#070B15] font-black text-xs transition-colors"
                    >
                      <span>{opt.serviceText}</span>
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </Link>

                    {opt.sampleHref && (
                      <Link
                        href={opt.sampleHref}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-xs transition-colors"
                      >
                        <FileText className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{opt.sampleText}</span>
                      </Link>
                    )}
                  </div>

                  <Link
                    href="/knowledge/bounced-check-guide"
                    className="text-xs text-slate-400 hover:text-[#E5C158] flex items-center gap-1 transition-colors"
                  >
                    <span>مطالعه راهنمای جامع چک برگشتی</span>
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* 3. TAB 2: 4-STAGE LIFECYCLE (REGISTER TO RECOVERY) */}
      {/* ---------------------------------------------------- */}
      {activeTab === 'lifecycle' && (
        <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#0C1222] to-[#121A2E] border border-slate-800 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-[#E5C158]" />
              چرخه حیات کامل چک صیادی: ۴ گام حیاتی از صدور تا وصول
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              در قانون جدید صدور چک، هر برگه چک صیادی بنفش دارای یک فرآیند سیستمی الزام‌آور در سامانه صیاد است:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Step 1 */}
            <div className="p-5 rounded-xl bg-[#070B15] border border-slate-800 relative space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center">
                  ۱
                </span>
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-slate-900 text-slate-400 border border-slate-800">
                  اقدام صادرکننده
                </span>
              </div>
              <h4 className="font-bold text-sm text-white">ثبت اولیه در سامانه صیاد</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                صادرکننده پس از نوشتن برگه فیزیکی، وارد اپلیکیشن بانکی شده و شناسه ۱۶ رقمی، تاریخ سررسید، مبلغ و کد ملی گیرنده را ثبت می‌کند.
              </p>
              <div className="pt-2 text-[11px] text-amber-300 font-semibold border-t border-slate-900">
                بدون این مرحله چک فاقد اعتبار تجاری است.
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-xl bg-[#070B15] border border-slate-800 relative space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-full bg-indigo-500 text-white font-black text-sm flex items-center justify-center">
                  ۲
                </span>
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-slate-900 text-slate-400 border border-slate-800">
                  اقدام گیرنده
                </span>
              </div>
              <h4 className="font-bold text-sm text-white">استعلام و تأیید سیستمی</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                گیرنده برگه چک را تحویل گرفته، وارد درگاه بانکی خود شده، مشخصات فیزیکی را با داده‌های سامانه صیاد مطابقت داده و دکمه «تأیید» را می‌زند.
              </p>
              <div className="pt-2 text-[11px] text-indigo-300 font-semibold border-t border-slate-900">
                پذیرش چک بدون تأیید سیستمی ریسک مالی بالایی دارد.
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-xl bg-[#070B15] border border-slate-800 relative space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-full bg-emerald-500 text-white font-black text-sm flex items-center justify-center">
                  ۳
                </span>
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-slate-900 text-slate-400 border border-slate-800">
                  اقدام دارنده (اختیاری)
                </span>
              </div>
              <h4 className="font-bold text-sm text-white">انتقال سیستمی (ظهرنویسی)</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                اگر دارنده بخواهد چک را به شخص ثالث واگذار کند، باید شناسه ۱۶ رقمی و کد ملی گیرنده جدید را در صیاد ثبت کرده و گیرنده جدید نیز آن را تایید کند.
              </p>
              <div className="pt-2 text-[11px] text-emerald-300 font-semibold border-t border-slate-900">
                ظهرنویسی سنتی پشت چک صیادی باطل است.
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-5 rounded-xl bg-[#070B15] border border-slate-800 relative space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-full bg-rose-500 text-white font-black text-sm flex items-center justify-center">
                  ۴
                </span>
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-slate-900 text-slate-400 border border-slate-800">
                  سررسید و بانک
                </span>
              </div>
              <h4 className="font-bold text-sm text-white">وصول یا گواهی عدم پرداخت</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                در تاریخ سررسید، دارنده چک را به بانک ارائه می‌دهد. در صورت کسری موجودی، گواهی عدم پرداخت رسمی با کد رهگیری متمرکز صادر می‌شود.
              </p>
              <div className="pt-2 text-[11px] text-rose-300 font-semibold border-t border-slate-900">
                امکان صدور فوری اجراییه ماده ۲۳ از دادگاه.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* 4. TAB 3: COMPARISON TABLE (SAYAD VS OLD CHECKS) */}
      {/* ---------------------------------------------------- */}
      {activeTab === 'comparison' && (
        <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#0C1222] to-[#121A2E] border border-slate-800 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <ArrowRightLeft className="w-5 h-5 text-[#E5C158]" />
              جدول مقایسه جامع: چک صیادی بنفش در برابر چک‌های قدیمی سنتی
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              تفاوت‌های بنیادین حقوقی، ثبتی و ضمانت‌اجرایی میان دو نسل چک در نظام بانکی ایران:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm text-right border-collapse border border-slate-800">
              <thead>
                <tr className="bg-slate-900/90 text-white">
                  <th className="p-3.5 border border-slate-700 font-black">ویژگی و ملاک مقایسه</th>
                  <th className="p-3.5 border border-slate-700 text-[#E5C158] font-black">چک‌های جدید صیادی (بنفش)</th>
                  <th className="p-3.5 border border-slate-700 text-slate-400 font-black">چک‌های قدیمی (غیرصیادی / سنتی)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr className="hover:bg-slate-900/40">
                  <td className="p-3 border border-slate-800 font-bold text-white">شناسه ۱۶ رقمی یکتا و بارکد QR</td>
                  <td className="p-3 border border-slate-800 text-emerald-300 font-medium">دارد (درج در بالای سمت چپ چک)</td>
                  <td className="p-3 border border-slate-800 text-rose-300 font-medium">ندارد (فقط شماره سریال ساده بانک)</td>
                </tr>
                <tr className="hover:bg-slate-900/40">
                  <td className="p-3 border border-slate-800 font-bold text-white">الزام به ثبت سیستمی در سامانه صیاد</td>
                  <td className="p-3 border border-slate-800 text-emerald-300 font-medium">اجباری؛ بدون ثبت فاقد اثر سند تجاری است</td>
                  <td className="p-3 border border-slate-800 text-slate-400 font-medium">وجود ندارد (فقط برگه فیزیکی ملاک است)</td>
                </tr>
                <tr className="hover:bg-slate-900/40">
                  <td className="p-3 border border-slate-800 font-bold text-white">صدور در وجه حامل</td>
                  <td className="p-3 border border-slate-800 text-rose-300 font-medium">ممنوع و باطل؛ حتماً باید نام و کد ملی گیرنده قید شود</td>
                  <td className="p-3 border border-slate-800 text-slate-300 font-medium">امکان‌پذیر بود</td>
                </tr>
                <tr className="hover:bg-slate-900/40">
                  <td className="p-3 border border-slate-800 font-bold text-white">نحوه انتقال و ظهرنویسی (پشت‌نویسی)</td>
                  <td className="p-3 border border-slate-800 text-emerald-300 font-medium">منحصراً در سامانه صیاد با درج کد ملی دارنده جدید</td>
                  <td className="p-3 border border-slate-800 text-slate-300 font-medium">امضای دستی پشت برگه چک فیزیکی</td>
                </tr>
                <tr className="hover:bg-slate-900/40">
                  <td className="p-3 border border-slate-800 font-bold text-white">امکان صدور اجراییه مستقیم (ماده ۲۳)</td>
                  <td className="p-3 border border-slate-800 text-emerald-300 font-bold">بله؛ بدون تشکیل دادگاه و بدون هزینه دادرسی ۳.۵٪</td>
                  <td className="p-3 border border-slate-800 text-rose-300 font-medium">خیر؛ مستلزم دادخواست حقوقی کامل و دادرسی ماهوی</td>
                </tr>
                <tr className="hover:bg-slate-900/40">
                  <td className="p-3 border border-slate-800 font-bold text-white">انسداد خودکار حساب‌ها ظرف ۲۴ ساعت</td>
                  <td className="p-3 border border-slate-800 text-emerald-300 font-bold">بله؛ طبق ماده ۵ مکرر در تمام بانک‌های کشور</td>
                  <td className="p-3 border border-slate-800 text-rose-300 font-medium">خیر؛ فقط با دستور قضایی در حین دادرسی</td>
                </tr>
                <tr className="hover:bg-slate-900/40">
                  <td className="p-3 border border-slate-800 font-bold text-white">امکان استعلام وضعیت اعتباری صادرکننده</td>
                  <td className="p-3 border border-slate-800 text-emerald-300 font-medium">بله؛ رایگان و آنی از طریق پیامک یا اپلیکیشن‌ها (۵ رنگ)</td>
                  <td className="p-3 border border-slate-800 text-rose-300 font-medium">غیرممکن بود</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* 5. TAB 4: CREDIT RATING COLORS (WHITE TO RED) */}
      {/* ---------------------------------------------------- */}
      {activeTab === 'credit_colors' && (
        <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#0C1222] to-[#121A2E] border border-slate-800 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#E5C158]" />
              راهنمای رنگ‌بندی اعتبارسنجی صیاد بانک مرکزی
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              قبل از دریافت چک صیادی، شناسه ۱۶ رقمی آن را در سامانه بانک مرکزی استعلام کنید. رنگ وضعیت صادرکننده نشان‌دهنده ریسک معامله است:
            </p>
          </div>

          <div className="space-y-3.5">
            {creditColors.map((item, idx) => (
              <div
                key={idx}
                className="p-4 md:p-5 rounded-xl bg-[#070B15] border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 md:max-w-2xl">
                  <div className="flex items-center gap-2.5">
                    <span className={`w-3 h-3 rounded-full ${item.dotColor}`} />
                    <span className={`px-2.5 py-0.5 rounded-full border text-xs font-black ${item.badgeBg}`}>
                      وضعیت {item.color}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 md:text-left shrink-0">
                  <span className="text-slate-400 block text-[10px] mb-0.5">توصیه کارشناسان حقوقی:</span>
                  <span className="text-white font-bold">{item.safetyLevel}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-start gap-3 text-xs text-slate-300">
            <Info className="w-5 h-5 text-[#E5C158] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>روش استعلام پیامکی:</strong> ارسال پیامک با فرمت <code className="bg-slate-900 px-2 py-0.5 rounded text-[#E5C158] font-mono">1*1*شناسه 16 رقمی چک</code> به سرشماره <strong>۷۰۱۷۰۱</strong> بانک مرکزی جهت دریافت وضعیت اعتباری و رنگ صادرکننده.
            </p>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* 6. TAB 5: UNREGISTERED CHECK COMPREHENSIVE GUIDE */}
      {/* ---------------------------------------------------- */}
      {activeTab === 'unregistered_guide' && (
        <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#0C1222] to-[#121A2E] border-2 border-rose-900/40 space-y-6">
          <div className="flex items-center gap-3 border-b border-rose-900/40 pb-4">
            <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                اگر چک صیادی در سامانه صیاد ثبت نشده باشد چه اتفاقی می‌افتد؟
              </h3>
              <p className="text-xs text-rose-300/80">
                بررسی دقیق آثار حقوقی، بانکی و قضایی عدم ثبت چک صیادی بنفش طبق قانون جدید صدور چک
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
            <div className="p-4 rounded-xl bg-[#070B15] border border-rose-900/30 space-y-2.5">
              <h4 className="font-bold text-rose-400 text-sm flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                آثار در سیستم بانکی:
              </h4>
              <ul className="space-y-1.5 text-slate-300 pr-4 list-disc">
                <li>بانک از پرداخت هرگونه وجه بابت این چک معذور است.</li>
                <li>بانک برگه گواهی عدم پرداخت رسمی چک صادر نمی‌کند.</li>
                <li>حساب‌های صادرکننده به صورت خودکار مسدود نمی‌شود (محرومیت از ماده ۵ مکرر).</li>
                <li>بانک فقط می‌تواند گواهی عدم ثبت برگه در سامانه را تسلیم نماید.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-[#070B15] border border-amber-900/30 space-y-2.5">
              <h4 className="font-bold text-amber-400 text-sm flex items-center gap-2">
                <Scale className="w-4 h-4" />
                آثار در دادگاه و مراجع قضایی:
              </h4>
              <ul className="space-y-1.5 text-slate-300 pr-4 list-disc">
                <li>سقوط کامل وصف تجاری سند؛ تبدیل به «سند عادی اقرار به دین».</li>
                <li>عدم امکان تقاضای صدور برگ اجراییه مستقیم ماده ۲۳.</li>
                <li>عدم امکان شکایت کیفری صدور چک بلامحل در دادسرا.</li>
                <li>لزوم ثبت دادخواست عمومی مطالبه وجه با اثبات تعهد پایه و پرداخت ۳.۵٪ هزینه دادرسی.</li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
            <h4 className="font-bold text-white text-sm">چگونه طلب خود را از چک ثبت‌نشده وصول کنیم؟</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              اگر کالا، خدمات یا پولی تحویل داده‌اید و چک ثبت‌نشده دریافت کرده‌اید:
              <br />
              ۱. ابتدا فوراً «اظهارنامه رسمی الزام به ثبت چک در سامانه صیاد یا پرداخت وجه» ارسال کنید.
              <br />
              ۲. در صورت عدم اقدام، «دادخواست حقوقی مطالبه وجه و اثبات رابطه قراردادی» را با ضمیمه کردن فاکتور، رسید تحویل، شهادت شهود و تصویر لاشه چک ثبت نمایید.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <Link
                href="/services/check-claim"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#E5C158] hover:bg-[#d4b044] text-[#070B15] font-black text-xs transition-colors"
              >
                <span>تنظیم دادخواست مطالبه وجه سند عادی</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/samples/check-payment-demand"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition-colors"
              >
                <span>نمونه اظهارنامه رسمی</span>
              </Link>
            </div>
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
            <span>۳ مسیر شفاف اقدام برای پرونده‌های چک صیادی</span>
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            بر اساس نیاز پرونده خود، مناسب‌ترین مسیر را انتخاب کنید
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            نگارش یار در هر مرحله از آگاهی‌بخشی تا تنظیم اسناد قضایی و ارجاع به وکلای منصف در کنار شماست:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Path 1: Education */}
          <div className="p-5 rounded-xl bg-[#070B15] border border-slate-800 flex flex-col justify-between space-y-4 hover:border-slate-600 transition-colors">
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md inline-block">
                مسیر ۱ — آگاهی و آموزش
              </span>
              <h4 className="font-bold text-sm text-white">
                «فقط می‌خواهم بدانم چه اقدامی باید انجام دهم»
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                مطالعه راهنماهای جامع پایگاه دانش، مقایسه چک حقوقی و کیفری، و آشنایی با قوانین وصول مطالبات.
              </p>
            </div>
            <Link
              href="/knowledge/bounced-check-guide"
              className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-xs transition-colors"
            >
              <span>ادامه مطالعه راهنمای چک برگشتی</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Path 2: Document Drafting */}
          <div className="p-5 rounded-xl bg-[#070B15] border-2 border-[#E5C158]/60 flex flex-col justify-between space-y-4 shadow-lg shadow-[#E5C158]/5">
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-[#E5C158] bg-[#E5C158]/10 px-2.5 py-1 rounded-md inline-block">
                مسیر ۲ — تنظیم سند قضایی
              </span>
              <h4 className="font-bold text-sm text-white">
                «برای پرونده خودم به دادخواست یا لایحه نیاز دارم»
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                تنظیم فوری دادخواست مطالبه وجه، تقاضای اجراییه ماده ۲۳، اظهارنامه رسمی و لوایح دفاعیه توسط کارشناسان ارشد حقوقی.
              </p>
            </div>
            <Link
              href="/services/check-claim"
              className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-gradient-to-r from-[#E5C158] to-[#C59B27] text-[#070B15] font-black text-xs shadow-md hover:brightness-110 transition-all"
            >
              <span>ثبت سفارش تنظیم دادخواست و اجراییه</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Path 3: Complex Case / Lawyer Referral */}
          <div className="p-5 rounded-xl bg-[#070B15] border border-blue-500/40 flex flex-col justify-between space-y-4 hover:border-blue-500/70 transition-colors">
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md inline-block">
                مسیر ۳ — پرونده‌های پیچیده
              </span>
              <h4 className="font-bold text-sm text-white">
                «نیاز به وکیل برای پیگیری صفر تا صد پرونده دارم»
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                معرفی و اتصال مستقیم به وکلای پایه یک دادگستری منصف در سراسر کشور با دستمزد شفاف و نظارت کیفی.
              </p>
            </div>
            <Link
              href="/lawyer-referral?utm_source=knowledge_base&utm_medium=sayad_guide&utm_campaign=fair_lawyers"
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
