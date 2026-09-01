'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Scale,
  ArrowLeft,
  Sparkles,
  FileCheck2,
  CheckCircle2,
  ClipboardList,
  AlertOctagon,
  Check,
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

export function SayadCheckExecutionArticle23GuideSection() {
  const [checkType, setCheckType] = useState<'sayad' | 'old'>('sayad');
  const [hasCertificate, setHasCertificate] = useState<boolean>(true);
  const [isConditionalOrGuarantee, setIsConditionalOrGuarantee] = useState<boolean>(false);
  const [userGoal, setUserGoal] = useState<
    'quick-execution' | 'seize-assets' | 'object-execution' | 'stop-execution' | 'installment'
  >('quick-execution');

  const calculateRecommendation = (): DecisionResult => {
    // اگر هدف اعتراض یا توقف عملیات اجرایی باشد
    if (userGoal === 'object-execution' || userGoal === 'stop-execution') {
      if (isConditionalOrGuarantee) {
        return {
          title: 'طرح دعوای ابطال اجراییه به همراه درخواست دستور موقت توقف عملیات اجرایی',
          badge: 'دفاع متعهد و صادرکننده',
          badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
          statusSummary:
            'بر اساس ماده ۲۳ قانون صدور چک، اگر چک بابت تضمین، مشروط یا ناشی از جرم بوده و متن چک یا گواهی عدم پرداخت حاکی از آن باشد، اجراییه نباید صادر می‌شد. صادرکننده باید دادخواست ابطال اجراییه داده و همزمان تقاضای توقف عملیات اجرایی با تودیع خسارت احتمالی نماید.',
          immediateAction:
            'فوراً قبل از انقضای مهلت ۱۰ روزه و توقیف اموال یا جلب، دادخواست ابطال اجراییه را در دادگاه صادرکننده اجراییه ثبت کرده و دستور توقف اجرای حکم را درخواست کنید.',
          recommendedPath:
            'ثبت دادخواست حقوقی با خواسته «ابطال اجراییه موضوع ماده ۲۳ و توقف عملیات اجرایی» به انضمام قرارداد مبنا، شهود یا مستندات عدم تحقق شرط.',
          requiredDocuments: [
            'ابلاغیه اجراییه صادره از شعبه دادگاه',
            'قرارداد، فاکتور یا سند مبنای صدور چک مشروط/تضمینی',
            'شهادت شهود یا پیام‌های کتبی دال بر امانی/تضمینی بودن',
            'تأمین خسارت احتمالی نقدی یا ملکی در صورت صلاحدید قاضی',
          ],
          legalWarning:
            'صرف ادعای شفاهی مبنی بر تضمینی بودن مانع ادامه توقیف اموال نخواهد شد؛ دادگاه زمانی دستور توقف صادر می‌کند که دلایل ابرازی قوی باشد یا خسارت احتمالی واریز گردد.',
          serviceLink: {
            title: 'تنظیم تخصصی لایحه اعتراض و ابطال اجراییه چک',
            href: '/services/check-claim',
          },
          sampleLink: {
            title: 'نمونه دادخواست ابطال اجراییه چک ماده ۲۳',
            href: '/samples/check-execution-objection',
          },
        };
      } else {
        return {
          title: 'اعتراض به فرآیند اجرا یا اثبات ادعای جعل و پرداخت قبلی وجه',
          badge: 'دفاعیات صادرکننده',
          badgeColor: 'bg-rose-50 text-rose-800 border-rose-200',
          statusSummary:
            'در صورتی که ادعای جعل چک، خیانت در امانت یا پرداخت پیشین کل یا بخشی از وجه چک را دارید، باید فوراً اقدام قضایی نمایید.',
          immediateAction:
            'ارائه فیش‌های واریزی، رسید تسویه یا ثبت شکواییه جعل/خیانت در امانت و ارائه گواهی آن به شعبه اجرای احکام مدنی.',
          recommendedPath:
            'طرح دعوای ابطال اجراییه در دادگاه حقوقی صادرکننده اجراییه به همراه درخواست توقف اجرا.',
          requiredDocuments: [
            'رسیدهای انتقال وجه بانکی به حساب دارنده',
            'گواهی ثبت شکایت کیفری جعل یا سرقت چک در سامانه ثنا',
            'نسخه ابلاغیه اجراییه',
          ],
          legalWarning:
            'اگر ادعای جعل یا خیانت در امانت رد شود، ممکن است طرف مقابل بابت تأخیر در وصول طلب خسارت مازاد مطالبه کند.',
          serviceLink: {
            title: 'تنظیم لایحه و دادخواست توقف عملیات اجرایی چک',
            href: '/services/check-claim',
          },
          sampleLink: {
            title: 'نمونه لایحه توقف عملیات اجرایی چک',
            href: '/samples/check-stop-payment-objection',
          },
        };
      }
    }

    // اگر هدف اعسار و تقسیط باشد
    if (userGoal === 'installment') {
      return {
        title: 'ثبت فوری دادخواست اعسار از پرداخت محکوم‌به و تقسیط وجه چک',
        badge: 'جلوگیری از حکم جلب و حبس',
        badgeColor: 'bg-blue-50 text-blue-800 border-blue-200',
        statusSummary:
          'پس از ابلاغ اجراییه ماده ۲۳، صادرکننده ۱۰ روز مهلت دارد بدهی را تسویه یا اموال معرفی کند. در صورت عدم تمکن مالی، باید ظرف ۳۰ روز از تاریخ ابلاغ اجراییه دادخواست اعسار بدهد تا از صدور برگ جلب جلوگیری شود.',
        immediateAction:
          'تنظیم دقیق فرم صورت اموال و دارایی‌ها و معرفی ۲ شاهد در دفتر خدمات الکترونیک قضایی.',
        recommendedPath:
          'ثبت دادخواست «اعسار از پرداخت دفعتاً واحده وجه چک و تقسیط محکوم‌به موضوع اجراییه» در همان دادگاه صادرکننده اجراییه.',
        requiredDocuments: [
          'ابلاغیه اجراییه دادگاه',
          'فرم لیست کلیه حساب‌های بانکی و موجودی آن‌ها',
          'لیست دارایی‌ها، املاک، خودرو و درآمدهای ۱ سال گذشته',
          'استشهادیه کتبی امضا شده توسط دو شاهد با ذکر مشخصات و منبع اطلاع',
        ],
        legalWarning:
          'اگر خارج از مهلت ۳۰ روزه دادخواست اعسار بدهید، برای جلوگیری از جلب باید کفیل معتبر یا وثیقه بسپارید.',
        serviceLink: {
          title: 'خدمت تخصصی دادخواست اعسار از پرداخت محکوم‌به',
          href: '/services/insolvency-from-judgment',
        },
      };
    }

    // برای دارنده چک (وصول سریع و توقیف اموال)
    if (checkType === 'old') {
      return {
        title: 'طرح دادخواست مطالبه وجه چک یا مراجعه به اجرای ثبت',
        badge: 'چک‌های قدیمی (غیرصیادی)',
        badgeColor: 'bg-stone-50 text-stone-800 border-stone-200',
        statusSummary:
          'چک‌های قدیمی غیراصل و فاقد ثبت صیادی مشمول امتیاز ماده ۲۳ (صدور اجراییه مستقیم بدون تشکیل دادگاه) نمی‌شوند و دارنده باید از طریق دادخواست حقوقی یا اداره اجرای ثبت اقدام کند.',
        immediateAction:
          'دریافت گواهی عدم پرداخت رسمی از بانک و اقدام از طریق اداره اجرای ثبت یا ثبت دادخواست حقوقی مطالبه وجه.',
        recommendedPath:
          'ثبت دادخواست حقوقی مطالبه وجه چک + خسارت تأخیر تادیه + دستور موقت / تامین خواسته فوری.',
        requiredDocuments: [
          'اصل لاشه چک برگشتی و ظهر آن',
          'اصل گواهی عدم پرداخت صادره از بانک',
          'شناسنامه و کارت ملی دارنده چک',
        ],
        legalWarning:
          'در دادخواست حقوقی، ۳.۵ درصد هزینه دادرسی باید پرداخت شود و پس از صدور رای قطعی وارد مرحله اجرا خواهید شد.',
        serviceLink: {
          title: 'تنظیم دادخواست مطالبه وجه چک قدیمی',
          href: '/services/check-claim',
        },
      };
    }

    if (!hasCertificate) {
      return {
        title: 'گام اول: دریافت گواهی عدم پرداخت با کد رهگیری صیاد',
        badge: 'پیش‌نیاز اجباری ماده ۲۳',
        badgeColor: 'bg-rose-50 text-rose-800 border-rose-200',
        statusSummary:
          'بدون داشتن گواهی عدم پرداخت رسمی بانک مرکزی دارای کد رهگیری متمرکز (UID)، هیچ دادگاهی اجراییه مستقیم ماده ۲۳ صادر نخواهد کرد.',
        immediateAction:
          'مراجعه به شعبه بانک و تقاضای صدور گواهی عدم پرداخت با درج کد رهگیری سیستمی در سامانه یکپارچه.',
        recommendedPath:
          'پس از دریافت گواهی عدم پرداخت، مطابقت امضای صادرکننده با نمونه موجود در بانک را در متن گواهی کنترل نمایید.',
        requiredDocuments: [
          'اصل چک صیادی بنفش',
          'کارت ملی دارنده ثبت‌شده در سامانه صیاد',
          'تقاضای کتبی ثبت برگشت در سامانه بانک مرکزی',
        ],
        legalWarning:
          'حتماً مطمئن شوید بانک عبارت «مطابقت امضا با نمونه امضای موجود در بانک گواهی می‌شود» را در گواهی قید کرده باشد.',
        serviceLink: {
          title: 'راهنمای قوانین و برگشت چک صیادی',
          href: '/knowledge/sayad-check-rules',
        },
      };
    }

    // حالت چک صیادی با گواهی عدم پرداخت دارای کد رهگیری
    return {
      title: 'اقدام فوری برای صدور اجراییه مستقیم ماده ۲۳ دادگاه (سریع‌ترین مسیر)',
      badge: 'وصول فوق‌العاده سریع بدون نوبت رسیدگی',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      statusSummary:
        'شما تمامی شرایط طلایی ماده ۲۳ قانون صدور چک را دارید: چک در سامانه صیاد ثبت شده، گواهی عدم پرداخت دارای کد رهگیری است و متن چک حاکی از شرط یا ضمانت نیست. بدون نیاز به تشکیل جلسات متعدد دادگاه، مستقیماً اجراییه صادر می‌شود.',
      immediateAction:
        'مراجعه به دفتر خدمات الکترونیک قضایی و ثبت فرم «درخواست صدور اجراییه در خصوص چک‌های موضوع ماده ۲۳».',
      recommendedPath:
        'پس از صدور اجراییه و ابلاغ به صادرکننده، مهلت ۱۰ روزه آغاز می‌شود؛ در صورت عدم تسویه، با سامانه هوشمند اجرای احکام (سهام، خودرو، حساب‌های بانکی و پلاک ثبتی) توقیف می‌شود.',
      requiredDocuments: [
        'اصل و تصویر پشت‌وروی چک صیادی',
        'اصل گواهی عدم پرداخت ممهور به مهر بانک با کد رهگیری صیاد',
        'تأییدیه ثبت انتقال و مالکیت در سامانه صیاد',
        'کارت ملی دارنده چک',
      ],
      legalWarning:
        'توجه داشته باشید که از طریق اجراییه مستقیم ماده ۲۳، صرفاً علیه «صادرکننده» و «صاحب حساب» اجراییه صادر می‌شود و خسارت تأخیر تادیه یا مسئولیت ضامنین/ظهرنویسان نیازمند دادخواست مستقل است.',
      serviceLink: {
        title: 'سفارش تنظیم فرم درخواست اجراییه مستقیم چک ماده ۲۳',
        href: '/services/check-claim',
      },
      sampleLink: {
        title: 'نمونه متن درخواست صدور اجراییه چک ماده ۲۳',
        href: '/samples/check-execution-petition',
      },
    };
  };

  const result = calculateRecommendation();

  return (
    <section className="mb-14 rounded-2xl border border-stone-200/80 bg-gradient-to-b from-stone-50/70 to-white p-6 sm:p-8 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-stone-200/80 pb-5">
        <div>
          <div className="mb-1.5 inline-flex items-center gap-2 rounded-lg bg-emerald-100/70 px-3 py-1 text-xs font-semibold text-emerald-900">
            <Sparkles className="h-3.5 w-3.5" />
            سیستم هوشمند ارزیابی مسیر وصول و اعتراض به چک ماده ۲۳
          </div>
          <h3 className="text-lg font-bold text-stone-900 sm:text-xl">
            کدام مسیر قانونی برای چک شما مناسب است؟ (اجراییه، دادخواست یا ابطال)
          </h3>
          <p className="mt-1 text-xs text-stone-600 sm:text-sm">
            با انتخاب وضعیت چک و هدف حقوقی خود، استراتژی بهینه، مدارک و مراحل اجرایی را مشاهده کنید.
          </p>
        </div>
      </div>

      {/* Interactive Controls */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Step 1: Check Type */}
        <div className="rounded-xl border border-stone-200/80 bg-white p-4">
          <label className="mb-2 block text-xs font-bold text-stone-800">۱. نوع چک شما چیست؟</label>
          <div className="space-y-2">
            <button
              onClick={() => setCheckType('sayad')}
              className={`w-full rounded-lg px-3 py-2.5 text-right text-xs font-semibold transition-all ${
                checkType === 'sayad'
                  ? 'border border-emerald-500 bg-emerald-50 text-emerald-900 shadow-xs'
                  : 'border border-stone-200 bg-stone-50/50 text-stone-700 hover:bg-stone-100'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>چک صیادی بنفش (ثبت‌شده در سامانه)</span>
                {checkType === 'sayad' && <Check className="h-4 w-4 text-emerald-600" />}
              </div>
            </button>

            <button
              onClick={() => setCheckType('old')}
              className={`w-full rounded-lg px-3 py-2.5 text-right text-xs font-semibold transition-all ${
                checkType === 'old'
                  ? 'border border-emerald-500 bg-emerald-50 text-emerald-900 shadow-xs'
                  : 'border border-stone-200 bg-stone-50/50 text-stone-700 hover:bg-stone-100'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>چک قدیمی (فاقد شناسه صیادی یا ثبت‌نشده)</span>
                {checkType === 'old' && <Check className="h-4 w-4 text-emerald-600" />}
              </div>
            </button>
          </div>
        </div>

        {/* Step 2: Has Certificate with Tracking Code */}
        <div className="rounded-xl border border-stone-200/80 bg-white p-4">
          <label className="mb-2 block text-xs font-bold text-stone-800">
            ۲. گواهی عدم پرداخت دارید؟
          </label>
          <div className="space-y-2">
            <button
              onClick={() => setHasCertificate(true)}
              className={`w-full rounded-lg px-3 py-2.5 text-right text-xs font-semibold transition-all ${
                hasCertificate
                  ? 'border border-emerald-500 bg-emerald-50 text-emerald-900 shadow-xs'
                  : 'border border-stone-200 bg-stone-50/50 text-stone-700 hover:bg-stone-100'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>بله، با کد رهگیری سیستمی صیاد</span>
                {hasCertificate && <Check className="h-4 w-4 text-emerald-600" />}
              </div>
            </button>

            <button
              onClick={() => setHasCertificate(false)}
              className={`w-full rounded-lg px-3 py-2.5 text-right text-xs font-semibold transition-all ${
                !hasCertificate
                  ? 'border border-emerald-500 bg-emerald-50 text-emerald-900 shadow-xs'
                  : 'border border-stone-200 bg-stone-50/50 text-stone-700 hover:bg-stone-100'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>خیر، هنوز برگشت نزده‌ام</span>
                {!hasCertificate && <Check className="h-4 w-4 text-emerald-600" />}
              </div>
            </button>
          </div>
        </div>

        {/* Step 3: Condition or Guarantee */}
        <div className="rounded-xl border border-stone-200/80 bg-white p-4">
          <label className="mb-2 block text-xs font-bold text-stone-800">
            ۳. ماهیت چک (ضمانت یا مشروط بودن)؟
          </label>
          <div className="space-y-2">
            <button
              onClick={() => setIsConditionalOrGuarantee(false)}
              className={`w-full rounded-lg px-3 py-2.5 text-right text-xs font-semibold transition-all ${
                !isConditionalOrGuarantee
                  ? 'border border-emerald-500 bg-emerald-50 text-emerald-900 shadow-xs'
                  : 'border border-stone-200 bg-stone-50/50 text-stone-700 hover:bg-stone-100'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>چک عادی بابت بدهی معین و قطعی</span>
                {!isConditionalOrGuarantee && <Check className="h-4 w-4 text-emerald-600" />}
              </div>
            </button>

            <button
              onClick={() => setIsConditionalOrGuarantee(true)}
              className={`w-full rounded-lg px-3 py-2.5 text-right text-xs font-semibold transition-all ${
                isConditionalOrGuarantee
                  ? 'border border-emerald-500 bg-emerald-50 text-emerald-900 shadow-xs'
                  : 'border border-stone-200 bg-stone-50/50 text-stone-700 hover:bg-stone-100'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>چک بابت ضمانت، حسن انجام کار یا مشروط</span>
                {isConditionalOrGuarantee && <Check className="h-4 w-4 text-emerald-600" />}
              </div>
            </button>
          </div>
        </div>

        {/* Step 4: User Goal */}
        <div className="rounded-xl border border-stone-200/80 bg-white p-4">
          <label className="mb-2 block text-xs font-bold text-stone-800">۴. هدف و موقعیت شما چیست؟</label>
          <div className="space-y-2">
            <button
              onClick={() => setUserGoal('quick-execution')}
              className={`w-full rounded-lg px-3 py-2 text-right text-xs font-semibold transition-all ${
                userGoal === 'quick-execution'
                  ? 'border border-emerald-500 bg-emerald-50 text-emerald-900 shadow-xs'
                  : 'border border-stone-200 bg-stone-50/50 text-stone-700 hover:bg-stone-100'
              }`}
            >
              <span>وصول سریع و صدور اجراییه (دارنده)</span>
            </button>

            <button
              onClick={() => setUserGoal('object-execution')}
              className={`w-full rounded-lg px-3 py-2 text-right text-xs font-semibold transition-all ${
                userGoal === 'object-execution'
                  ? 'border border-emerald-500 bg-emerald-50 text-emerald-900 shadow-xs'
                  : 'border border-stone-200 bg-stone-50/50 text-stone-700 hover:bg-stone-100'
              }`}
            >
              <span>اعتراض / ابطال اجراییه (صادرکننده)</span>
            </button>

            <button
              onClick={() => setUserGoal('stop-execution')}
              className={`w-full rounded-lg px-3 py-2 text-right text-xs font-semibold transition-all ${
                userGoal === 'stop-execution'
                  ? 'border border-emerald-500 bg-emerald-50 text-emerald-900 shadow-xs'
                  : 'border border-stone-200 bg-stone-50/50 text-stone-700 hover:bg-stone-100'
              }`}
            >
              <span>توقف فوری توقیف اموال / جلب</span>
            </button>

            <button
              onClick={() => setUserGoal('installment')}
              className={`w-full rounded-lg px-3 py-2 text-right text-xs font-semibold transition-all ${
                userGoal === 'installment'
                  ? 'border border-emerald-500 bg-emerald-50 text-emerald-900 shadow-xs'
                  : 'border border-stone-200 bg-stone-50/50 text-stone-700 hover:bg-stone-100'
              }`}
            >
              <span>تقسیط بدهی و ادعای اعسار (صادرکننده)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Dynamic Recommendation Output Box */}
      <div className="mt-6 rounded-xl border border-stone-300 bg-white p-5 shadow-xs sm:p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 pb-3">
          <div className="flex items-center gap-2">
            <Scale className="h-5 w-5 text-emerald-700" />
            <h4 className="text-base font-bold text-stone-950 sm:text-lg">{result.title}</h4>
          </div>
          <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold ${result.badgeColor}`}>
            {result.badge}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {/* Col 1 & 2: Explanation & Action */}
          <div className="space-y-4 lg:col-span-2">
            <div>
              <span className="mb-1 block text-xs font-bold text-stone-500">وضعیت و تحلیل حقوقی:</span>
              <p className="text-xs sm:text-sm leading-relaxed text-stone-800">{result.statusSummary}</p>
            </div>

            <div className="rounded-lg bg-stone-50 p-3 border border-stone-200/70">
              <span className="mb-1 block text-xs font-bold text-emerald-900">اقدام فوری پیشنهادی:</span>
              <p className="text-xs text-stone-700 leading-relaxed">{result.immediateAction}</p>
            </div>

            <div className="rounded-lg bg-amber-50/70 p-3 border border-amber-200/70">
              <span className="mb-1 flex items-center gap-1 text-xs font-bold text-amber-900">
                <AlertOctagon className="h-3.5 w-3.5" />
                هشدار حقوقی و ضمانت اجرا:
              </span>
              <p className="text-xs text-amber-950 leading-relaxed">{result.legalWarning}</p>
            </div>
          </div>

          {/* Col 3: Checklist & Action CTA */}
          <div className="flex flex-col justify-between rounded-xl border border-stone-200/80 bg-stone-50/40 p-4">
            <div>
              <span className="mb-2.5 flex items-center gap-1.5 text-xs font-bold text-stone-900">
                <ClipboardList className="h-4 w-4 text-stone-600" />
                مدارک و ضمائم ضروری:
              </span>
              <ul className="space-y-1.5 text-xs text-stone-700">
                {result.requiredDocuments.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 space-y-2 pt-3 border-t border-stone-200">
              <Link
                href={result.serviceLink.href}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-700 px-3 py-2 text-center text-xs font-bold text-white transition-all hover:bg-emerald-800 shadow-xs"
              >
                <span>{result.serviceLink.title}</span>
                <ArrowLeft className="h-3.5 w-3.5" />
              </Link>
              {result.sampleLink && (
                <Link
                  href={result.sampleLink.href}
                  className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-stone-300 bg-white px-3 py-2 text-center text-xs font-semibold text-stone-700 transition-all hover:bg-stone-100"
                >
                  <FileCheck2 className="h-3.5 w-3.5 text-stone-500" />
                  <span>{result.sampleLink.title}</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
