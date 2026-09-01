'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  ArrowLeft,
  Sparkles,
  FileCheck2,
  CheckCircle2,
  ClipboardList,
  AlertOctagon,
  Check,
  Scale,
  Briefcase,
  Home,
  Building,
  Handshake,
  Lock,
} from 'lucide-react';

interface DecisionResult {
  title: string;
  badge: string;
  badgeColor: string;
  statusSummary: string;
  immediateAction: string;
  recommendedPath: string;
  requiredDocuments: string[];
  legalWarning: string;
  serviceLink: {
    title: string;
    href: string;
  };
  sampleLink?: {
    title: string;
    href: string;
  };
}

type RelationType = 'private-contract' | 'employment' | 'landlord-tenant' | 'contractor' | 'other';
type CheckNatureType = 'guarantee' | 'good-performance' | 'safekeeping' | 'conditional' | 'unspecified';
type CheckStatusType = 'not-bounced' | 'bounced' | 'execution-issued' | 'demanded' | 'refused-return';
type UserGoalType =
  | 'retrieve-check'
  | 'prevent-collection'
  | 'stop-execution'
  | 'annul-execution'
  | 'collect-check'
  | 'criminal-complaint'
  | 'draft-petition';

export function GuaranteeCheckRulesGuideSection() {
  const [relationType, setRelationType] = useState<RelationType>('employment');
  const [checkNature, setCheckNature] = useState<CheckNatureType>('good-performance');
  const [checkStatus, setCheckStatus] = useState<CheckStatusType>('refused-return');
  const [userGoal, setUserGoal] = useState<UserGoalType>('retrieve-check');

  const calculateRecommendation = (): DecisionResult => {
    // ۱. اگر اجراییه صادر شده باشد و کاربر قصد توقف یا ابطال دارد
    if (checkStatus === 'execution-issued' || userGoal === 'stop-execution' || userGoal === 'annul-execution') {
      return {
        title: 'طرح دعوای ابطال اجراییه مستقیم و درخواست دستور موقت توقف عملیات اجرایی',
        badge: 'ابطال و توقف اجراییه',
        badgeColor: 'bg-rose-50 text-rose-800 border-rose-200',
        statusSummary:
          'بر اساس تبصره ماده ۲۳ قانون صدور چک، در صورتی که چک بابت تضمین انجام معامله یا تعهد صادر شده باشد و این موضوع در متن چک، سامانه صیاد یا قرارداد مبنا احراز گردد، صدور اجراییه مستقیم فاقد وجاهت قانونی است.',
        immediateAction:
          'فوراً ظرف مهلت ۱۰ روز از ابلاغ اجراییه، دادخواست حقوقی ابطال اجراییه را به همراه تقاضای صدور دستور موقت توقف عملیات اجرایی در دادگاه صادرکننده اجراییه ثبت نمایید.',
        recommendedPath:
          'ثبت دادخواست با خواسته «ابطال اجراییه موضوع ماده ۲۳ و صدور دستور موقت توقف عملیات اجرایی» با ضمیمه کردن قرارداد، صورتجلسه تحویل یا شهادت شهود.',
        requiredDocuments: [
          'نسخه ابلاغیه اجراییه صادره از اجرای احکام دادگاه',
          'قرارداد، حکم کارگزینی یا سند نشان‌دهنده شماره صیادی چک ضمانتی',
          'گواهی‌ها یا رسیدهای دال بر انجام تعهد یا عدم ورود خسارت',
          'تأمین خسارت احتمالی در صورت تشخیص و صدور دستور قاضی',
        ],
        legalWarning:
          'صرف ادعای ضمانتی بودن بدون ارائه قرارداد یا مدرک مکتوب، مانع عملیات توقیف اموال و مسدودی حساب‌ها نخواهد شد؛ اقدام سریع پیش از مسدودی حساب‌ها حیاتی است.',
        serviceLink: {
          title: 'تنظیم تخصصی دادخواست ابطال اجراییه و لایحه توقف اجرا',
          href: '/services/check-claim',
        },
        sampleLink: {
          title: 'نمونه دادخواست ابطال اجراییه چک ماده ۲۳',
          href: '/samples/check-execution-objection',
        },
      };
    }

    // ۲. استرداد لاشه چک پس از اتمام قرارداد یا انجام کار (طرف مقابل پس نمی‌دهد)
    if (checkStatus === 'refused-return' || userGoal === 'retrieve-check') {
      return {
        title: 'ارسال اظهارنامه رسمی استرداد و ثبت دادخواست استرداد لاشه چک ضمانت',
        badge: 'استرداد لاشه چک',
        badgeColor: 'bg-blue-50 text-blue-800 border-blue-200',
        statusSummary:
          'با خاتمه قرارداد کار، تخلیه ملک یا تکمیل تعهدات پیمانکاری، دارنده چک ملزم به استرداد لاشه چک است و نگهداری یا اقدام به وصول آن تخلف و مصداق دارا شدن بلاجهت است.',
        immediateAction:
          'ابتدا یک اظهارنامه قضایی رسمی به دارنده چک ارسال کنید و مهلت معین (مثلاً ۴۸ الی ۷۲ ساعت) برای پس دادن چک تعیین نمایید تا امتناع دارنده رسماً اثبات شود.',
        recommendedPath:
          'در صورت عدم استرداد پس از ابلاغ اظهارنامه، ثبت دادخواست حقوقی «استرداد لاشه چک به انضمام خسارات دادرسی و صدور دستور موقت منع نقل و انتقال و وصول».',
        requiredDocuments: [
          'تصویر چک یا شماره صیادی ۱۶ رقمی ثبت‌شده در قرارداد',
          'قرارداد کار، اجاره‌نامه، قرارداد پیمانکاری یا بیع مبنای ضمانت',
          'رسید تخلیه، صورتجلسه تحویل کار، تسویه‌حساب یا استعفانامه قانونی',
          'نسخه ابلاغ‌شده اظهارنامه رسمی استرداد لاشه چک',
        ],
        legalWarning:
          'در قراردادهای استخدام، نگه داشتن چک حسن انجام کار توسط کارفرما پس از تسویه حساب نقض صریح قانون کار است و شکایت از طریق اداره کار و محاکم حقوقی مسموع است.',
        serviceLink: {
          title: 'تنظیم دادخواست استرداد لاشه چک و اظهارنامه رسمی',
          href: '/services/check-claim',
        },
        sampleLink: {
          title: 'نمونه دادخواست استرداد لاشه چک',
          href: '/samples/check-carcass-restitution',
        },
      };
    }

    // ۳. شکایت خیانت در امانت بابت خرج کردن یا برگشت زدن چک امانی/ضمانتی
    if (userGoal === 'criminal-complaint' || checkNature === 'safekeeping') {
      return {
        title: 'بررسی ارکان جرم خیانت در امانت (ماده ۶۷۴ ق.م.ا) و شکایت در دادسرا',
        badge: 'شکواییه خیانت در امانت',
        badgeColor: 'bg-purple-50 text-purple-800 border-purple-200',
        statusSummary:
          'اگر چکی به عنوان امانت یا تضمین مشخص به کسی سپرده شده باشد و قرار بر استرداد یا عدم واگذاری بوده، اما دارنده آن را تصاحب، تلف یا به دیگری انتقال دهد، ممکن است عنصر مادی خیانت در امانت محقق شود.',
        immediateAction:
          'مدارک دال بر امانی بودن و شرط عدم وصول را گردآوری کنید؛ همزمان اظهارنامه استرداد فرستاده و گواهی ابلاغ آن را به عنوان دلیل استنکاف ضمیمه شکواییه کنید.',
        recommendedPath:
          'ثبت شکواییه کیفری «خیانت در امانت» در دفتر خدمات الکترونیک قضایی به همراه دادخواست موازی استرداد لاشه چک در دادگاه حقوقی.',
        requiredDocuments: [
          'رسید امانی بودن چک یا متن قرارداد مبنی بر امانت بودن سند',
          'اظهارنامه رسمی مطالبه لاشه چک و اثبات سوءنیت دارنده',
          'استعلام گواهی عدم پرداخت یا انتقال به غیر در سامانه صیاد',
          'شهادت شهود یا پیام‌رسان‌های کتبی در زمان تحویل چک',
        ],
        legalWarning:
          'اثبات جرم خیانت در امانت نیازمند احراز شرایط ماده ۶۷۴ است؛ اگر اثبات امانی بودن ناموفق باشد، دادگاه قرار منع تعقیب صادر کرده و باید از مسیر حقوقی پیگیری کنید.',
        serviceLink: {
          title: 'تنظیم تخصصی شکواییه خیانت در امانت چک',
          href: '/services/check-claim',
        },
        sampleLink: {
          title: 'نمونه شکواییه خیانت در امانت چک',
          href: '/samples/breach-of-trust-complaint',
        },
      };
    }

    // ۴. وصول چک ضمانت توسط دارنده به دلیل تخلف متعهد
    if (userGoal === 'collect-check') {
      return {
        title: 'طرح دادخواست حقوقی مطالبه وجه چک ضمانتی به همراه اثبات تخلف قراردادی',
        badge: 'وصول چک توسط دارنده',
        badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
        statusSummary:
          'دارنده چک ضمانتی در صورتی که طرف مقابل از تعهدات قراردادی تخلف کرده یا خسارتی وارد نموده، می‌تواند با برگشت زدن چک، دادخواست مطالبه وجه و خسارت تأخیر تادیه ثبت کند.',
        immediateAction:
          'مستندات تخلف متعهد (نظیر تامین دلیل کارشناسی، صورتجلسه تاخیر، عدم تحویل کالا یا خسارت وارده) را با قرار کارشناسی رسمی ثبت و آماده کنید.',
        recommendedPath:
          'اخذ گواهی عدم پرداخت از بانک و ثبت دادخواست حقوقی «مطالبه وجه چک و خسارت ناشی از عدم ایفای تعهد و تامین خواسته توقیف اموال».',
        requiredDocuments: [
          'اصل چک صیادی و گواهی عدم پرداخت بانکی با کد رهگیری صیاد',
          'قرارداد پایه و بندهای مربوط به ضمانت و خسارت وجه التزام',
          'گزارش کارشناس رسمی دادگستری (تأمین دلیل) مبنی بر وقوع تخلف یا خسارت',
          'اظهارنامه اخطار قبلی به متعهد برای رفع نقص یا انجام تعهد',
        ],
        legalWarning:
          'چک‌های تضمینی قابلیت شکایت کیفری (حبس) ندارند و در صورتی که در متن چک قید ضمانت شده باشد، صدور اجراییه مستقیم ماده ۲۳ مقدور نبوده و صرفاً باید از مسیر دادخواست حقوقی اقدام شود.',
        serviceLink: {
          title: 'تنظیم دادخواست حقوقی مطالبه وجه چک و خسارت قراردادی',
          href: '/services/check-claim',
        },
        sampleLink: {
          title: 'نمونه دادخواست مطالبه وجه چک صیادی',
          href: '/samples/sayad-check-claim-petition',
        },
      };
    }

    // ۵. جلوگیری از وصول و دفاع در برابر چک ضمانت برگشت‌خورده
    return {
      title: 'دفاع حقوقی در دادگاه با اثبات وصف تضمینی و تقاضای توقف وصول',
      badge: 'دفاع صادرکننده چک',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
      statusSummary:
        'اگر دارنده چک ضمانتی را برگشت زده و قصد وصول دارد، صادرکننده باید با ارائه قرارداد پایه اثبات کند که تعهد انجام شده یا اساساً هنوز زمان تحقق شرط یا مطالبه خسارت نرسیده است.',
      immediateAction:
        'ارسال اظهارنامه به دارنده مبنی بر عدم استحقاق و آماده‌سازی اسناد انجام کار یا عدم انقضای مهلت تعهد.',
      recommendedPath:
        'حضور در جلسه دادگاه حقوقی و تقدیم لایحه دفاعیه متقن، یا طرح دعوای تقابل «استرداد لاشه چک و اعلام برائت ذمه».',
      requiredDocuments: [
        'قرارداد همکاری، قرارداد اجاره یا فاکتور مبنای صدور چک',
        'مدارک نشان‌دهنده ایفای تعهدات یا تسویه‌حساب مرحله‌ای',
        'استشهادیه محلی، فیش‌های واریزی یا پیام‌های کتبی تأیید عملکرد',
        'گواهی عدم پرداخت بانک صادرشده توسط دارنده',
      ],
      legalWarning:
        'در صورت عدم دفاع فعال، دادگاه با استناد به اصل تجریدی اسناد تجاری و عدم حضور صادرکننده، حکم به پرداخت وجه چک صادر خواهد کرد.',
      serviceLink: {
        title: 'تنظیم لایحه دفاعیه تخصصی دعاوی چک تضمینی',
        href: '/services/check-claim',
      },
      sampleLink: {
        title: 'نمونه دادخواست دستور عدم پرداخت چک',
        href: '/samples/check-stop-payment-objection',
      },
    };
  };

  const rec = calculateRecommendation();

  return (
    <section
      id="interactive-guarantee-decision-matrix"
      className="my-12 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 p-6 md:p-8 text-white shadow-xl border border-slate-700/50"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/80 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
            سامانه هوشمند ارزیابی وضعیت چک ضمانت و حسن انجام کار
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
            ماتریس تصمیم‌گیری حقوقی: چک ضمانت، استرداد و ابطال
          </h3>
          <p className="text-sm text-slate-300 mt-1">
            با انتخاب نوع رابطه، ماهیت چک و وضعیت فعلی، استراتژی و مسیر حقوقی بهینه پرونده خود را مشخص کنید.
          </p>
        </div>
        <div className="hidden lg:flex items-center gap-2 text-xs text-slate-400 bg-slate-800/80 px-3 py-2 rounded-xl border border-slate-700">
          <Scale className="w-4 h-4 text-emerald-400" />
          منطبق بر مواد ۱۳ و ۲۳ قانون صدور چک و ماده ۶۷۴ ق.م.ا
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
        {/* پنل انتخاب پارامترها */}
        <div className="lg:col-span-5 space-y-6">
          {/* ۱. نوع رابطه */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2.5">
              ۱. نوع رابطه و مبنای صدور چک:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'employment', label: 'کارفرما / کارگر (استخدام)', icon: Briefcase },
                { id: 'landlord-tenant', label: 'موجر / مستأجر (اجاره)', icon: Home },
                { id: 'contractor', label: 'پیمانکاری / مجری پروژه', icon: Building },
                { id: 'private-contract', label: 'قرارداد خصوصی / بیع / شراکت', icon: Handshake },
              ].map((item) => {
                const Icon = item.icon;
                const isSelected = relationType === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setRelationType(item.id as RelationType)}
                    className={`flex items-center gap-2 p-3 rounded-xl text-right text-xs font-medium transition-all ${
                      isSelected
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 border border-indigo-400'
                        : 'bg-slate-800/90 text-slate-300 hover:bg-slate-750 border border-slate-700'
                    }`}
                  >
                    <Icon className={`w-4 h-4 flex-shrink-0 ${isSelected ? 'text-white' : 'text-indigo-400'}`} />
                    <span className="leading-tight">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ۲. ماهیت چک */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2.5">
              ۲. ماهیت و عبارت درج‌شده برای چک:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'good-performance', label: 'بابت حسن انجام کار / تعهد' },
                { id: 'guarantee', label: 'بابت تضمین قرارداد' },
                { id: 'safekeeping', label: 'چک امانی (بدون معامله)' },
                { id: 'conditional', label: 'چک مشروط به واقعه خاص' },
                { id: 'unspecified', label: 'چک عادی (بدون قید در متن)' },
              ].map((item) => {
                const isSelected = checkNature === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCheckNature(item.id as CheckNatureType)}
                    className={`p-2.5 rounded-xl text-center text-xs font-medium transition-all ${
                      isSelected
                        ? 'bg-indigo-600 text-white shadow-md border border-indigo-400'
                        : 'bg-slate-800/90 text-slate-300 hover:bg-slate-750 border border-slate-700'
                    } ${item.id === 'unspecified' ? 'col-span-2' : ''}`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ۳. وضعیت فعلی چک */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2.5">
              ۳. وضعیت فعلی چک در چرخه حقوقی:
            </label>
            <div className="space-y-1.5">
              {[
                { id: 'refused-return', label: 'قرارداد پایان یافته اما دارنده چک را پس نمی‌دهد' },
                { id: 'not-bounced', label: 'هنوز سررسید نشده یا به بانک ارائه نشده است' },
                { id: 'bounced', label: 'چک توسط دارنده برگشت خورده است' },
                { id: 'execution-issued', label: 'اجراییه دادگاه (ماده ۲۳ یا اجراییه دادنامه) ابلاغ شده' },
                { id: 'demanded', label: 'دارنده با اظهارنامه یا دادخواست وجه را طلب کرده' },
              ].map((item) => {
                const isSelected = checkStatus === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCheckStatus(item.id as CheckStatusType)}
                    className={`w-full p-2.5 rounded-xl text-right text-xs font-medium flex items-center justify-between transition-all ${
                      isSelected
                        ? 'bg-indigo-600 text-white shadow-md border border-indigo-400'
                        : 'bg-slate-800/90 text-slate-300 hover:bg-slate-750 border border-slate-700'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isSelected && <Check className="w-4 h-4 text-emerald-300 flex-shrink-0 mr-2" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ۴. هدف کاربر */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2.5">
              ۴. اولویت و هدف اصلی شما در این مرحله:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'retrieve-check', label: 'پس گرفتن لاشه چک' },
                { id: 'stop-execution', label: 'توقف فوری اجراییه دادگاه' },
                { id: 'annul-execution', label: 'ابطال کامل اجراییه' },
                { id: 'prevent-collection', label: 'جلوگیری از وصول و مسدودی' },
                { id: 'criminal-complaint', label: 'شکایت خیانت در امانت' },
                { id: 'collect-check', label: 'وصول چک (برای دارنده طلبکار)' },
              ].map((item) => {
                const isSelected = userGoal === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setUserGoal(item.id as UserGoalType)}
                    className={`p-2.5 rounded-xl text-center text-xs font-medium transition-all ${
                      isSelected
                        ? 'bg-emerald-600 text-white shadow-md border border-emerald-400'
                        : 'bg-slate-800/90 text-slate-300 hover:bg-slate-750 border border-slate-700'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* پنل خروجی و راهکار */}
        <div className="lg:col-span-7 flex flex-col justify-between bg-slate-800/70 rounded-2xl p-6 border border-slate-700">
          <div className="space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700/80 pb-4">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${rec.badgeColor}`}
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                {rec.badge}
              </span>
              <span className="text-xs text-slate-400">راهنمای هوشمند حقوقی نگارش یار</span>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white leading-snug">{rec.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed mt-2.5 bg-slate-900/60 p-3.5 rounded-xl border border-slate-700/60">
                {rec.statusSummary}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div className="bg-amber-950/30 border border-amber-500/30 rounded-xl p-3.5">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-xs mb-1.5">
                  <AlertOctagon className="w-4 h-4 flex-shrink-0" />
                  اقدام فوری و اضطراری:
                </div>
                <p className="text-xs text-amber-100/90 leading-relaxed">{rec.immediateAction}</p>
              </div>

              <div className="bg-indigo-950/30 border border-indigo-500/30 rounded-xl p-3.5">
                <div className="flex items-center gap-2 text-indigo-300 font-bold text-xs mb-1.5">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  مسیر حقوقی پیشنهادی:
                </div>
                <p className="text-xs text-indigo-100/90 leading-relaxed">{rec.recommendedPath}</p>
              </div>
            </div>

            <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-700/80">
              <div className="flex items-center gap-2 text-slate-200 font-bold text-xs mb-2.5">
                <ClipboardList className="w-4 h-4 text-indigo-400" />
                مدارک و ضمائم ضروری برای اقدام:
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300">
                {rec.requiredDocuments.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-slate-800/60 p-2 rounded-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-rose-950/30 border border-rose-500/30 text-xs text-rose-200/90 flex items-start gap-2.5">
              <Lock className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <strong className="text-rose-300">هشدار پرخطر حقوقی: </strong>
                {rec.legalWarning}
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-3">
            <Link
              href={rec.serviceLink.href}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs shadow-lg shadow-emerald-600/30 transition-all"
            >
              <FileCheck2 className="w-4 h-4" />
              {rec.serviceLink.title}
              <ArrowLeft className="w-3.5 h-3.5" />
            </Link>

            {rec.sampleLink && (
              <Link
                href={rec.sampleLink.href}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-600 transition-all"
              >
                {rec.sampleLink.title}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
