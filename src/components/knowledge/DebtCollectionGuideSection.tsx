'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Scale,
  FileCheck2,
  AlertTriangle,
  CheckCircle2,
  Clock,
  ArrowLeft,
  FileText,
  ShieldAlert,
  Layers,
  Banknote,
  Send,
  Building2,
} from 'lucide-react';

interface EvidenceItem {
  id: string;
  name: string;
  legalBasis: string;
  evidentialValue: string;
  limitations: string;
  preservationTips: string;
  badge: string;
  badgeColor: string;
}

interface ScenarioItem {
  id: string;
  scenarioTitle: string;
  documents: string;
  firstAction: string;
  competentCourt: string;
  interimRelief: string;
  riskFactor: string;
  recommendedService: {
    title: string;
    href: string;
  };
}

export function DebtCollectionGuideSection() {
  const [activeTab, setActiveTab] = useState<'decision-matrix' | 'evidence-comparison' | 'procedural-checklist' | 'self-vs-pro'>('decision-matrix');
  const [selectedScenario, setSelectedScenario] = useState<string>('scenario-bank-transfer');

  const evidenceList: EvidenceItem[] = [
    {
      id: 'signed-contract',
      name: 'قرارداد کتبی با امضا یا اثر انگشت',
      legalBasis: 'مواد ۱۰، ۱۲۸۴ و ۱۲۹۱ قانون مدنی',
      evidentialValue: 'بسیار بالا؛ سند عادی معتبر اثبات کننده توافق، سررسید و تعهدات متقابل',
      limitations: 'امکان ادعای انکار، تردید یا جعل توسط خوانده و لزوم ارجاع به کارشناسی خط و امضا',
      preservationTips: 'نگهداری دقیق نسخه فیزیکی اصل قرارداد؛ تهیه کپی برابر با اصل در دفاتر اسناد رسمی',
      badge: 'محکم ترین دلیل عادی',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    },
    {
      id: 'bank-receipt',
      name: 'فیش واریز بانکی یا رسید انتقال وجه (ساتنا/پایا/کارت به کارت)',
      legalBasis: 'ماده ۲۶۵ قانون مدنی و امارات قضایی',
      evidentialValue: 'اثبات کننده خروج پول از حساب شما به حساب خوانده (ظاهر در عدم تبرع و بخشش)',
      limitations: 'رسید به تنهایی منشا طلب را اثبات نمی کند؛ اگر طرف ادعا کند طلب پیشین خود را گرفته بار اثبات بر شماست',
      preservationTips: 'اخذ پرینت ممهور از شعبه بانک مبدا با درج شماره پیگیری و درج علت در فیلد بابت',
      badge: 'نیازمند قرینه کمکی',
      badgeColor: 'bg-amber-500/10 text-[#E5C158] border-amber-500/30',
    },
    {
      id: 'electronic-messages',
      name: 'پیام های متنی، پیام رسان ها (واتساپ، ایتا، بله) و صوت',
      legalBasis: 'مواد ۱۲۵۸ مکرر قانون مدنی و مواد ۱۲ تا ۱۵ قانون تجارت الکترونیک',
      evidentialValue: 'اماره قضایی بسیار موثر؛ در صورت تایید کارشناس فناوری اطلاعات قرینه قوی اقرار است',
      limitations: 'امکان انکار انتساب شماره یا ادعای دستکاری و ویرایش پیام؛ لزوم استعلام سیم کارت و گوشی',
      preservationTips: 'تامین دلیل فوری از طریق شورای حل اختلاف برای ثبت رسمی اسکرین شات ها و پیام های صوتی',
      badge: 'اماره نوین قضایی',
      badgeColor: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
    },
    {
      id: 'invoice-bill',
      name: 'فاکتور فروش کالا و حواله انبار',
      legalBasis: 'قانون تجارت و قانون مدنی',
      evidentialValue: 'اثبات تحویل مال به خریدار در صورتی که امضای تحویل گیرنده در پای فاکتور وجود داشته باشد',
      limitations: 'فاکتور بدون امضای تحویل گیرنده ارزش اثباتی اندکی داشته و صرفا ادعای یک طرفه فروشنده است',
      preservationTips: 'اخذ امضا و اثر انگشت با ذکر نام کامل تحویل گیرنده، تاریخ دقیق و شماره کارت ملی',
      badge: 'مشروط به امضای تحویل',
      badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
    },
    {
      id: 'witnesses',
      name: 'شهادت شهود و مطلعین محلی',
      legalBasis: 'مواد ۱۳۰۶ تا ۱۳۲۰ قانون مدنی و مواد ۲۳۰ به بعد ق.آ.د.م',
      evidentialValue: 'دلیل تکمیلی جهت اثبات وقوع معامله شفاهی، توافق پرداخت یا اقرار بدهکار در حضور دیگران',
      limitations: 'احراز شرایط شرعی شاهد (عدالت، عدم نفع شخصی، عدم خصومت) و استماع دقیق دادگاه',
      preservationTips: 'تنظیم استشهادنامه کتبی با مشخصات هویتی و شماره تماس ۲ شاهد مرد یا ۱ مرد و ۲ زن عادل',
      badge: 'دلیل تکمیلی شرعی',
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    },
    {
      id: 'commercial-paper',
      name: 'سفته واخواست شده یا چک صیادی برگشتی',
      legalBasis: 'قانون صدور چک و مواد ۳۰۷ تا ۳۰۹ قانون تجارت',
      evidentialValue: 'سند تجاری با قابلیت تامین خواسته بدون تودیع خسارت احتمالی و صدور اجرائیه مستقیم (در چک)',
      limitations: 'رعایت مواعد واخواست ظرف ۱۰ روز (سفته) و رعایت شرایط قانونی ثبت سامانه صیاد (چک)',
      preservationTips: 'اخذ گواهی عدم پرداخت از بانک یا انجام تشریفات واخواست سفته از طریق مجتمع قضایی',
      badge: 'سند تجاری ممتاز',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    },
  ];

  const scenarios: ScenarioItem[] = [
    {
      id: 'scenario-contract',
      scenarioTitle: '۱. بدهی دارای قرارداد کتبی رسمی یا عادی امضا شده با سررسید معین',
      documents: 'اصل قرارداد، مدارک واریز یا تحویل مال، گواهی عدم انجام تعهد یا انقضای موعد',
      firstAction: 'ارسال اظهارنامه رسمی ماده ۱۵۶ جهت اتمام حجت، اعلام نقض عهد و مطالبه خسارت روزشمار',
      competentCourt: 'تا سقف ۱۰۰ میلیون تومان دادگاه صلح؛ بالاتر از ۱۰۰ میلیون تومان دادگاه عمومی حقوقی',
      interimRelief: 'امکان تقاضای تامین خواسته همزمان با دادخواست (در سند عادی منوط به تودیع خسارت احتمالی نقدی به نظر دادگاه)',
      riskFactor: 'ادعای فسخ قرارداد، اقاله، تهاتر یا جعل امضا از سوی خوانده',
      recommendedService: {
        title: 'تنظیم دادخواست مطالبه طلب قراردادی',
        href: '/services/petition-writing',
      },
    },
    {
      id: 'scenario-bank-transfer',
      scenarioTitle: '۲. بدهی بدون قرارداد کتبی و صرفا متکی به رسید واریز بانکی یا کارت به کارت',
      documents: 'پرینت حساب بانکی ممهور به مهر بانک، متن پیامک ها، چت های متنی دال بر قرض، صورتحساب',
      firstAction: 'ارسال اظهارنامه رسمی استرداد وجه با استناد به ماده ۲۶۵ مدنی و درخواست بازپرداخت ظرف مهلت معین',
      competentCourt: 'تا ۱۰۰ میلیون تومان دادگاه صلح محل اقامت خوانده؛ بالاتر دادگاه حقوقی',
      interimRelief: 'صرف فیش بانکی بدون سند رسمی معمولا منوط به تودیع خسارت احتمالی نقدی در صندوق دادگستری به میزان تعیین شده توسط دادگاه است',
      riskFactor: 'ادعای بدهکار مبنی بر اینکه واریز بابت معامله قبلی، اجاره بها یا تسویه بدهی پیشین بوده است',
      recommendedService: {
        title: 'تنظیم اظهارنامه استرداد وجه واریزی',
        href: '/services/legal-notice',
      },
    },
    {
      id: 'scenario-acknowledged',
      scenarioTitle: '۳. بدهی مورد اقرار کتبی در دست نوشته یا فایل صوتی و پیام رسان',
      documents: 'دست نوشته اقرارنامه، اسکرین شات های پیام رسان، فایل صوتی اقرار، تامین دلیل شورای حل اختلاف',
      firstAction: 'ثبت درخواست تامین دلیل جهت ضبط رسمی پیام ها و متعاقبا ارسال اظهارنامه اخطار رسمی',
      competentCourt: 'دادگاه صلح (تا ۱۰۰ میلیون) یا دادگاه عمومی حقوقی (بیش از ۱۰۰ میلیون)',
      interimRelief: 'در صورت قوی بودن امارات اقرار، امکان صدور قرار تامین خواسته با صلاحدید قاضی تسهیل می گردد',
      riskFactor: 'ادعای تقطیع فایل صوتی، عدم انتساب شماره به خوانده یا انکار اصالت دست نوشته عادی',
      recommendedService: {
        title: 'تنظیم دادخواست مطالبه وجه مستند به اقرار',
        href: '/services/petition-writing',
      },
    },
    {
      id: 'scenario-invoice',
      scenarioTitle: '۴. طلب ناشی از فاکتور فروش کالا، ارایه خدمات یا رسید باربری',
      documents: 'فاکتور ممهور و امضا شده توسط خریدار، بارنامه، رسید تحویل انبار، گواهی کارشناس',
      firstAction: 'ارسال اظهارنامه رسمی به خریدار و اعلام سررسید قطعی پرداخت ثمن معامله',
      competentCourt: 'دادگاه صلح یا عمومی حقوقی حوزه اقامت خریدار یا محل انعقاد معامله یا تحویل کالا',
      interimRelief: 'قابل تقاضا در ستون خواسته دادخواست با پرداخت احتمالی سپرده نقدی در صندوق دادگستری',
      riskFactor: 'ادعای معیوب بودن کالا، تاخیر در تحویل، یا عدم احراز سمت شخص امضا کننده فاکتور',
      recommendedService: {
        title: 'تنظیم دادخواست مطالبه بهای کالا و خدمات',
        href: '/services/petition-writing',
      },
    },
    {
      id: 'scenario-commercial',
      scenarioTitle: '۵. طلب مستند به چک صیادی برگشتی یا سفته تجاری واخواست شده',
      documents: 'گواهینامه عدم پرداخت بانک دارای کد رهگیری ثنا یا برگه واخواست سفته ممهور دادگستری',
      firstAction: 'در چک صیادی ثبت شده: درخواست مستقیم صدور اجرائیه طبق ماده ۲۳ قانون صدور چک بدون نیاز به دادخواست ماهوی',
      competentCourt: 'دادگاه حقوقی صادرکننده اجرائیه یا اجرای ثبت اسناد رسمی',
      interimRelief: 'تامین خواسته بدون پرداخت خسارت احتمالی به صورت کاملا فوری و قبل از ابلاغ به بدهکار',
      riskFactor: 'ادعای امانی بودن چک یا ادعای خیانت در امانت که نیازمند اثبات قضایی توسط صادرکننده است',
      recommendedService: {
        title: 'راهنمای صدور اجرائیه چک ماده ۲۳',
        href: '/knowledge/sayad-check-execution-article-23',
      },
    },
    {
      id: 'scenario-denied',
      scenarioTitle: '۶. طلب شفاهی که بدهکار اصل معامله و واریزی را کاملا انکار می کند',
      documents: 'استشهادیه شهود عادل، پرینت تراکنش های بانکی مرتبط، سوگند شرعی (در صورت فقدان ادله دیگر)',
      firstAction: 'تکمیل مدارک اماراتی، جمع آوری شهادت شهود، عدم درگیری فیزیکی یا توهین، ارسال اظهارنامه',
      competentCourt: 'دادگاه صلح تا ۱۰۰ میلیون تومان؛ دادگاه عمومی حقوقی بیش از ۱۰۰ میلیون تومان',
      interimRelief: 'در این حالت معمولا صدور قرار تامین خواسته تا پیش از اثبات اصل دین پذیرفته نمی شود',
      riskFactor: 'خطر صدور حکم بر بی حقی به دلیل فقدان ادله اثباتی و حاکمیت اصل برائت (ماده ۱۹۷ ق.آ.د.م)',
      recommendedService: {
        title: 'مشاوره و ارزیابی ادله اثبات دعوا',
        href: '/services/petition-writing',
      },
    },
  ];

  return (
    <div className="rounded-3xl border border-slate-800 bg-[#0C1222]/90 p-5 sm:p-8 backdrop-blur-md shadow-2xl space-y-8">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#E5C158]/10 text-[#E5C158] border border-[#E5C158]/30 mb-2">
            <Scale className="w-3.5 h-3.5" />
            ابزار هوشمند تحلیل ادله و انتخاب مسیر وصول طلب
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            میز کار کارشناسی: جدول تصمیم گیری و ارزیابی ادله اثبات بدهی
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            بر اساس مستنداتی که در دست دارید، مسیر قانونی، مرجع صالح و ریسک های پرونده را بسنجید.
          </p>
        </div>
      </div>

      {/* NAVIGATION TABS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 bg-[#070B15] p-1.5 rounded-2xl border border-slate-800">
        <button
          type="button"
          onClick={() => setActiveTab('decision-matrix')}
          className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'decision-matrix'
              ? 'bg-[#E5C158] text-[#070B15] shadow-lg shadow-[#E5C158]/20'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
          }`}
        >
          <Layers className="w-4 h-4" />
          سناریوهای ۶ گانه مطالبه طلب
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('evidence-comparison')}
          className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'evidence-comparison'
              ? 'bg-[#E5C158] text-[#070B15] shadow-lg shadow-[#E5C158]/20'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
          }`}
        >
          <FileCheck2 className="w-4 h-4" />
          جدول مقایسه ادله قانونی
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('procedural-checklist')}
          className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'procedural-checklist'
              ? 'bg-[#E5C158] text-[#070B15] shadow-lg shadow-[#E5C158]/20'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
          }`}
        >
          <Clock className="w-4 h-4" />
          چک لیست گام به گام وصول
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('self-vs-pro')}
          className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'self-vs-pro'
              ? 'bg-[#E5C158] text-[#070B15] shadow-lg shadow-[#E5C158]/20'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
          }`}
        >
          <ShieldAlert className="w-4 h-4" />
          اقدام شخصی یا وکیل دادگستری؟
        </button>
      </div>

      {/* TAB 1: DECISION MATRIX */}
      {activeTab === 'decision-matrix' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
            {scenarios.map((sc) => (
              <button
                key={sc.id}
                type="button"
                onClick={() => setSelectedScenario(sc.id)}
                className={`text-right p-4 rounded-2xl border text-xs sm:text-sm transition-all flex flex-col justify-between ${
                  selectedScenario === sc.id
                    ? 'border-[#E5C158] bg-[#E5C158]/10 text-white font-bold'
                    : 'border-slate-800 bg-[#070B15]/60 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="flex items-start gap-2">
                  <div className={`mt-0.5 p-1 rounded-full ${selectedScenario === sc.id ? 'bg-[#E5C158] text-[#070B15]' : 'bg-slate-800 text-slate-400'}`}>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>{sc.scenarioTitle}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Selected Scenario Details Card */}
          {(() => {
            const current = scenarios.find((s) => s.id === selectedScenario) || scenarios[0];
            return (
              <div className="rounded-2xl border border-[#E5C158]/30 bg-gradient-to-b from-[#0C1222] to-[#070B15] p-6 space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                  <div className="p-2.5 rounded-xl bg-[#E5C158]/10 text-[#E5C158] border border-[#E5C158]/20">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      بررسی وضعیت: {current.scenarioTitle}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      راهکار قانونی منطبق بر مقررات قانون آیین دادرسی مدنی و آخرین صلاحیت دادگاه های صلح
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="p-4 rounded-xl border border-slate-800/80 bg-[#070B15]/80 space-y-1.5">
                    <div className="flex items-center gap-2 text-slate-400 font-medium">
                      <FileText className="w-4 h-4 text-sky-400" />
                      مدارک و ضمائم اثباتی مورد نیاز:
                    </div>
                    <p className="text-slate-200 font-semibold leading-relaxed">
                      {current.documents}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-800/80 bg-[#070B15]/80 space-y-1.5">
                    <div className="flex items-center gap-2 text-slate-400 font-medium">
                      <Send className="w-4 h-4 text-amber-400" />
                      اقدام مقدماتی پیشنهادی:
                    </div>
                    <p className="text-slate-200 font-semibold leading-relaxed">
                      {current.firstAction}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-800/80 bg-[#070B15]/80 space-y-1.5">
                    <div className="flex items-center gap-2 text-slate-400 font-medium">
                      <Building2 className="w-4 h-4 text-emerald-400" />
                      مرجع صالح قضایی رسیدگی کننده:
                    </div>
                    <p className="text-slate-200 font-semibold leading-relaxed">
                      {current.competentCourt}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-800/80 bg-[#070B15]/80 space-y-1.5">
                    <div className="flex items-center gap-2 text-slate-400 font-medium">
                      <Banknote className="w-4 h-4 text-purple-400" />
                      تامین خواسته و توقیف اموال بدهکار:
                    </div>
                    <p className="text-slate-200 font-semibold leading-relaxed">
                      {current.interimRelief}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-rose-500/30 bg-rose-950/20 text-rose-200 text-xs sm:text-sm flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-rose-300">مهم ترین ریسک حقوقی و دفاع احتمالی بدهکار: </span>
                    {current.riskFactor}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <span className="text-xs text-slate-400">
                    برای این وضعیت، تنظیم دادخواست یا اظهارنامه استاندارد توسط کارشناس نگارش یار پیشنهاد می شود.
                  </span>
                  <Link
                    href={current.recommendedService.href}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E5C158] text-[#070B15] text-xs font-bold hover:bg-[#d4b046] transition-colors shadow-md shadow-[#E5C158]/20"
                  >
                    <span>{current.recommendedService.title}</span>
                    <ArrowLeft className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* TAB 2: EVIDENCE COMPARISON */}
      {activeTab === 'evidence-comparison' && (
        <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-400">
            در نظام قضایی ایران، بار اثبات ادعا (Onus of Proof) همواره بر عهده طلبکار است (ماده ۱۲۵۷ قانون مدنی). جدول زیر توان اثباتی و حدود حقوقی ادله رایج را تفکیک می کند:
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-800">
            <table className="w-full text-right text-xs sm:text-sm">
              <thead className="bg-[#070B15] text-slate-300 border-b border-slate-800">
                <tr>
                  <th className="p-3.5 font-bold">نوع مدرک</th>
                  <th className="p-3.5 font-bold">مبنای قانونی</th>
                  <th className="p-3.5 font-bold">میزان ارزش اثباتی</th>
                  <th className="p-3.5 font-bold">محدودیت و نقطه ضعف</th>
                  <th className="p-3.5 font-bold">نحوه حفظ و تثبیت دلیل</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 bg-[#0C1222]/50">
                {evidenceList.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-3.5 font-bold text-white whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] border ${item.badgeColor}`}>
                          {item.badge}
                        </span>
                        <span>{item.name}</span>
                      </div>
                    </td>
                    <td className="p-3.5 text-slate-300 whitespace-nowrap font-mono text-[11px]">
                      {item.legalBasis}
                    </td>
                    <td className="p-3.5 text-slate-200 leading-relaxed">
                      {item.evidentialValue}
                    </td>
                    <td className="p-3.5 text-rose-300/90 leading-relaxed">
                      {item.limitations}
                    </td>
                    <td className="p-3.5 text-slate-400 leading-relaxed">
                      {item.preservationTips}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-950/20 text-amber-200 text-xs flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong>هشدار درباره ماده ۲۶۵ قانون مدنی: </strong>
              صرف واریز وجه به حساب شخصی، اثبات کننده قرض یا بدهی نیست. قانون مدنی فرض را بر عدم تبرع می گذارد، اما اثبات این که واریزی بابت بدهی مشخص بوده نیازمند انضمام چت ها، فاکتور یا شهادت شهود است.
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: PROCEDURAL CHECKLIST */}
      {activeTab === 'procedural-checklist' && (
        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl border border-slate-800 bg-[#070B15]/70 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-[#E5C158] flex items-center justify-center font-bold text-sm border border-amber-500/20">
                  ۱
                </div>
                <h4 className="font-bold text-white text-sm">ارزیابی ادله و استخراج تاریخ دقیق</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                تمام پرینت های واریزی، قراردادها، پیامک ها و چت های پیام رسان را گردآوری کنید. سررسید بازپرداخت و مشخصات دقیق هویتی و کدملی بدهکار را استخراج نمایید.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-800 bg-[#070B15]/70 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center font-bold text-sm border border-sky-500/20">
                  ۲
                </div>
                <h4 className="font-bold text-white text-sm">ارسال اظهارنامه رسمی ماده ۱۵۶</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                قبل از طرح دعوا، با ارسال اظهارنامه قضایی از طریق دفاتر خدمات الکترونیک قضایی، مطالبه رسمی را اثبات کرده و مبنای خسارت تاخیر تادیه ماده ۵۲۲ را قطعی کنید.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-800 bg-[#070B15]/70 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold text-sm border border-indigo-500/20">
                  ۳
                </div>
                <h4 className="font-bold text-white text-sm">تقاضای تامین خواسته فوری</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                در صورتی که بیم انتقال یا مخفی کردن اموال از سوی بدهکار وجود دارد، قبل از ابلاغ دادخواست یا همزمان با آن، قرار تامین خواسته ماده ۱۰۸ را جهت مسدودی حساب یا توقیف خودرو مطالبه کنید.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-800 bg-[#070B15]/70 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-sm border border-emerald-500/20">
                  ۴
                </div>
                <h4 className="font-bold text-white text-sm">ثبت دادخواست در مرجع صالح</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                دعاوی تا سقف ۱۰۰ میلیون تومان به دادگاه صلح و دعاوی بالاتر به دادگاه عمومی حقوقی ارجاع می شود. هزینه دادرسی در مرحله بدوی ۲.۵ تا ۳.۵ درصد ارزش خواسته می باشد.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-800 bg-[#070B15]/70 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold text-sm border border-purple-500/20">
                  ۵
                </div>
                <h4 className="font-bold text-white text-sm">حضور در جلسه و پاسخ به دفاعیات</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                در صورت ادعای انکار، تردید یا جعل امضا از سوی خوانده، سریعا تقاضای کارشناسی خط و امضا یا شهادت شهود دهید و مستندات پرداخت را به قاضی نشان دهید.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-800 bg-[#070B15]/70 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center font-bold text-sm border border-rose-500/20">
                  ۶
                </div>
                <h4 className="font-bold text-white text-sm">صدور اجرائیه و وصول نهایی</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                پس از قطعیت رای، صدور اجراییه را بخواهید. پس از مهلت ۱۰ روزه ماده ۳۴، استعلام های سه گانه بانکی، ثبت اسناد و پلاک خودرو (ماده ۱۹) را فعال نمایید.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: SELF ACTION VS LAWYER */}
      {activeTab === 'self-vs-pro' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl border border-emerald-500/30 bg-emerald-950/10 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                اقداماتی که خودتان می توانید مستقلا انجام دهید:
              </div>
              <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                <li>اخذ پرینت گردش حساب ممهور از شعبه بانک مبدا</li>
                <li>ثبت نام در سامانه ثنا جهت دریافت ابلاغیه های الکترونیک</li>
                <li>سفارش و ارسال اظهارنامه رسمی اخطار به بدهکار با نگارش یار</li>
                <li>ثبت دادخواست تامین دلیل در شورای حل اختلاف برای حفظ اسکرین شات ها</li>
                <li>ارائه مشخصات هویتی و شماره تماس بدهکار به دفاتر خدمات قضایی</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl border border-amber-500/30 bg-amber-950/10 space-y-3">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <AlertTriangle className="w-4 h-4" />
                مواردی که نیازمند حضور وکیل یا مشاوره تخصصی است:
              </div>
              <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                <li>مواردی که بدهکار ادعای جعل امضا یا دستکاری در متن سند نموده است</li>
                <li>پرونده های با مبالغ سنگین و تعهدات قراردادی پیچیده و چندلایه</li>
                <li>مواردی که بدهکار اموال خود را به قصد فرار از دین به دیگران انتقال داده است</li>
                <li>پیگیری دعوای ابطال معاملات صوری به قصد فرار از دین (ماده ۲۱۸ مکرر مدنی)</li>
                <li>پاسخ به دادخواست های متقابل اعسار از پرداخت محکوم به و تقسیط</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
