'use client';

import React from 'react';
import Link from 'next/link';
import { PenTool, Scale, Globe, ArrowLeft, CheckCircle2, Shield, PhoneCall } from 'lucide-react';

export type ServiceDiscoveryCategory = 'bank' | 'court' | 'administrative' | 'cafe' | 'lawyer' | 'general';

export interface ThreeServiceDiscoveryProps {
  currentService?: 'writing' | 'lawyer' | 'cafe' | 'sample' | 'knowledge';
  category?: ServiceDiscoveryCategory;
  contextTitle?: string;
  className?: string;
}

function detectCategory(title?: string, currentService?: string): ServiceDiscoveryCategory {
  if (currentService === 'cafe') return 'cafe';
  if (currentService === 'lawyer') return 'lawyer';
  if (!title) return 'general';
  const t = title.toLowerCase();
  if (
    t.includes('بانک') ||
    t.includes('وام') ||
    t.includes('رهن') ||
    t.includes('چک') ||
    t.includes('بدهی') ||
    t.includes('تسهیلات') ||
    t.includes('جریمه') ||
    t.includes('ضامن')
  ) {
    return 'bank';
  }
  if (
    t.includes('لایحه') ||
    t.includes('دادخواست') ||
    t.includes('شکواییه') ||
    t.includes('دادگاه') ||
    t.includes('تجدیدنظر') ||
    t.includes('اعتراض') ||
    t.includes('کیفری') ||
    t.includes('حقوقی') ||
    t.includes('دیوان') ||
    t.includes('قضایی')
  ) {
    return 'court';
  }
  if (
    t.includes('ثنا') ||
    t.includes('ابلاغیه') ||
    t.includes('مزایده') ||
    t.includes('ستاد') ||
    t.includes('سوءپیشینه') ||
    t.includes('کافی‌نت') ||
    t.includes('کافی نت') ||
    t.includes('سامانه')
  ) {
    return 'cafe';
  }
  if (
    t.includes('نامه') ||
    t.includes('شهرداری') ||
    t.includes('اداره') ||
    t.includes('سازمان') ||
    t.includes('مالیات') ||
    t.includes('بیمه') ||
    t.includes('تامین اجتماعی') ||
    t.includes('ماده ۱۰۰')
  ) {
    return 'administrative';
  }
  return 'general';
}

export function ThreeServiceDiscovery({
  currentService = 'sample',
  category,
  contextTitle,
  className = '',
}: ThreeServiceDiscoveryProps) {
  const activeCategory = category || detectCategory(contextTitle, currentService);

  // Define data per category
  interface PillarConfig {
    id: 'writing' | 'lawyer' | 'cafe';
    badge: string;
    engineTag: string;
    title: string;
    description: string;
    bullets: string[];
    btnText: string;
    btnHref: string;
    accentColor: 'gold' | 'blue' | 'emerald';
    isHighlighted: boolean;
  }

  let introText = 'متناسب با نوع نیاز، فوریت و مرحله‌ای که در آن قرار دارید، یکی از سه خدمت تخصصی زیر آماده ارائه به شماست:';
  let pillars: PillarConfig[] = [];

  if (activeCategory === 'bank') {
    introText = contextTitle
      ? `در ارتباط با «${contextTitle}»، بسته به اینکه در مرحله مکاتبه با شعبه، تسویه، یا پیگیری حقوقی هستید، این ۳ خدمت متناسب در دسترس شماست:`
      : 'در حل مسائل بانکی و تسهیلاتی، این ۳ مسیر تخصصی متناسب با مرحله پیگیری شما طراحی شده‌اند:';

    pillars = [
      {
        id: 'writing',
        badge: 'مسیر اول: نامه‌نگاری و مکاتبه',
        engineTag: 'تنظیم متون بانکی',
        title: 'تنظیم نامه، تقسیط و استمهال بانکی',
        description: 'نگارش اختصاصی نامه تقسیط بدهی، بخشودگی جرایم، فک رهن یا اعتراض به سود مازاد بر اساس قرارداد بانکی و فیش‌های واریزی.',
        bullets: [
          'استناد به آخرین بخشنامه‌های بانک مرکزی و مصوبات شورای پول و اعتبار',
          'ذکر دقیق شماره قرارداد، مبالغ تسهیلات و ادله توجیهی تأخیر',
          'پشتیبانی و امکان ویرایش تکمیلی تا رسیدن به توافق با شعبه',
        ],
        btnText: 'درخواست تنظیم نامه بانکی',
        btnHref: '/request?service=bank_letter',
        accentColor: 'gold',
        isHighlighted: true,
      },
      {
        id: 'lawyer',
        badge: 'مسیر دوم: دفاع و وکالت',
        engineTag: 'دعاوی بانکی',
        title: 'معرفی وکیل متخصص امور بانکی و ملکی',
        description: 'اگر با اخطاریه اجراییه ثبت، توقیف ملک وثیقه یا شکایت بانکی مواجهید، وکیل منصف با دستمزد عادلانه در کنار شما خواهد بود.',
        bullets: [
          'دادخواست ابطال سود مرکب و جرایم غیرقانونی تسهیلات',
          'توقف عملیات اجرایی مزایده وثایق بانکی و رفع توقیف ملک',
          'تنظیم قرارداد وکالت شفاف در سامانه ثنا با تعرفه منصفانه',
        ],
        btnText: 'مشاوره با وکیل بانکی',
        btnHref: '/lawyer-referral?utm_source=bank_discovery&utm_medium=three_services&utm_campaign=fair_lawyers',
        accentColor: 'blue',
        isHighlighted: false,
      },
      {
        id: 'cafe',
        badge: 'مسیر سوم: خدمات الکترونیک',
        engineTag: 'استعلامات بانکی',
        title: 'استعلامات اعتباری و سامانه‌ای',
        description: 'استعلام چک برگشتی صیادی، بررسی وضعیت اعتبارسنجی بانکی و ثبت شکایت رسمی در سامانه نظارت و بازرسی بانک مرکزی.',
        bullets: [
          'استعلام فوری رتبه اعتباری و تسهیلات فعال',
          'ثبت شکایت اینترنتی در سامانه پاسخگویی به شکایات بانک مرکزی',
          'امور کاربری سامانه ثنا جهت دریافت ابلاغیه‌های بانکی',
        ],
        btnText: 'خدمات آنلاین و استعلام',
        btnHref: '/services/online-cafe',
        accentColor: 'emerald',
        isHighlighted: false,
      },
    ];
  } else if (activeCategory === 'court') {
    introText = contextTitle
      ? `در روند رسیدگی قضایی به «${contextTitle}»، بر حسب ضرورت حضور در محکمه یا صرفاً ارائه دفاعیه کتبی، این ۳ مسیر فراهم است:`
      : 'در پرونده‌های دادسرا و دادگاه، بسته به اینکه پرونده در چه مرحله‌ای است، گزینه‌های زیر در دسترس شماست:';

    pillars = [
      {
        id: 'writing',
        badge: 'مسیر اول: نگارش حقوقی',
        engineTag: 'لوایح و دادخواست‌ها',
        title: 'تنظیم لایحه دفاعیه، دادخواست و شکواییه',
        description: 'تدوین لایحه دقیق با استناد به مواد قانون مجازات، مدنی، آیین دادرسی و آرای وحدت رویه بدون نیاز به پرداخت هزینه‌های سنگین وکالت.',
        bullets: [
          'بررسی کامل مستندات پرونده و ادله اثباتی شما',
          'نگارش با ادبیات قضایی مؤثر برای جلب نظر قاضی پرونده',
          'پشتیبانی بازبینی تا انطباق کامل با اوراق پرونده',
        ],
        btnText: 'درخواست تنظیم لایحه یا دادخواست',
        btnHref: '/request?service=legal_brief',
        accentColor: 'gold',
        isHighlighted: true,
      },
      {
        id: 'lawyer',
        badge: 'مسیر دوم: وکیل دادگستری',
        engineTag: 'وکالت در محکمه',
        title: 'معرفی وکیل منصف و متناسب با پرونده',
        description: 'اگر برای حضور در جلسات رسیدگی، دادسرا یا اجرای احکام نیاز به وکیل پایه یک دارید، با وکلای معتمد با دستمزد عادلانه در ارتباط باشید.',
        bullets: [
          'انتخاب وکیل متناسب با موضوع تخصصی و شهر شما',
          'امکان پرداخت اقساطی حق‌الوکاله با قرارداد الکترونیک ثنا',
          'جلسه مشاوره تلفنی یا حضوری پیش از اعطای وکالت',
        ],
        btnText: 'درخواست معرفی وکیل دادگستری',
        btnHref: '/lawyer-referral?utm_source=court_discovery&utm_medium=three_services&utm_campaign=fair_lawyers',
        accentColor: 'blue',
        isHighlighted: false,
      },
      {
        id: 'cafe',
        badge: 'مسیر سوم: دفاتر قضایی آنلاین',
        engineTag: 'سامانه عدل ایران',
        title: 'ثبت الکترونیک لایحه، دادخواست و ثنا',
        description: 'ارسال غیرحضوری دادخواست، لایحه و شکواییه از طریق سامانه خودکاربری، پیگیری ابلاغیه و دریافت گواهی سوءپیشینه.',
        bullets: [
          'ثبت‌نام و احراز هویت فوری در سامانه ثنا',
          'بارگذاری و ارسال الکترونیک لوایح به شعبه دادگاه',
          'استعلام آخرین وضعیت پرونده در عدل ایران',
        ],
        btnText: 'خدمات ثنا و ارسال اوراق',
        btnHref: '/services/online-cafe',
        accentColor: 'emerald',
        isHighlighted: false,
      },
    ];
  } else if (activeCategory === 'cafe') {
    introText = contextTitle
      ? `در ارتباط با خدمات اینترنتی و سامانه‌ای «${contextTitle}»، زنجیره خدمات نگارش یار به شرح زیر در خدمت شماست:`
      : 'برای انجام اینترنتی خدمات اداری، ثنا و ثبت‌نام‌ها، این ۳ خدمت پشتیبان یکدیگرند:';

    // Prioritize Cafe first!
    pillars = [
      {
        id: 'cafe',
        badge: 'مسیر اصلی: خدمات اینترنتی',
        engineTag: 'کافی‌نت آنلاین',
        title: 'انجام غیرحضوری امور در سامانه‌ها',
        description: 'ثبت فوری نامه‌ها در سامانه ثنا، ثبت‌نام مزایدات دولت در ستاد، دریافت گواهی سوءپیشینه و استعلامات الکترونیک بدون مراجعه حضوری.',
        bullets: [
          'انجام سریع و دقیق توسط متصدیان مسلط به سامانه‌ها',
          'پشتیبانی مستقیم در پیام‌رسان‌ها تا دریافت خروجی و کد رهگیری',
          'حفظ کامل محرمانگی اطلاعات هویتی و کلمات عبور',
        ],
        btnText: 'ثبت سفارش خدمت آنلاین',
        btnHref: '/services/online-cafe',
        accentColor: 'emerald',
        isHighlighted: true,
      },
      {
        id: 'writing',
        badge: 'مسیر مکمل: تنظیم متن',
        engineTag: 'نگارش محتوای سامانه',
        title: 'تنظیم متن رسمی جهت بارگذاری در سامانه',
        description: 'اگر برای بارگذاری در ثنا، سامد، ستاد ایران یا دبیرخانه نیاز به نگارش شکواییه، نامه یا فرم استشهادیه دارید، متن را اختصاصی دریافت کنید.',
        bullets: [
          'تنظیم دقیق متناسب با محدودیت کاراکتر و فرمت سامانه‌ها',
          'تحویل همزمان در دو فرمت فایل متنی Word و PDF',
          'راهنمای کامل بارگذاری مرحله‌به‌مرحله در سامانه',
        ],
        btnText: 'درخواست تنظیم متن برای سامانه',
        btnHref: '/request',
        accentColor: 'gold',
        isHighlighted: false,
      },
      {
        id: 'lawyer',
        badge: 'مسیر پشتیبان: مشاوره تخصصی',
        engineTag: 'وکالت و داوری',
        title: 'معرفی وکیل برای پرونده‌های ناشی از ابلاغیه',
        description: 'در صورتی که با دریافت ابلاغیه یا حکم توقیف در ثنا نیاز به پیگیری فوری حقوقی دارید، به وکیل متخصص و باانصاف معرفی می‌شوید.',
        bullets: [
          'بررسی فوری ابلاغیه‌ها و آرای غیابی صادره',
          'اعلام وکالت در پرونده‌های دارای مهلت محدود قانونی',
          'تعرفه شفاف و حق‌الوکاله متناسب با شرایط موکل',
        ],
        btnText: 'مشاوره و معرفی وکیل',
        btnHref: '/lawyer-referral?utm_source=cafe_discovery&utm_medium=three_services&utm_campaign=fair_lawyers',
        accentColor: 'blue',
        isHighlighted: false,
      },
    ];
  } else if (activeCategory === 'administrative') {
    introText = contextTitle
      ? `در مکاتبات با سازمان‌ها، شهرداری‌ها و ادارات دولتی پیرامون «${contextTitle}»، این ۳ خدمت راهگشاست:`
      : 'در ارتباط با ادارات، سازمان‌های دولتی، شهرداری‌ها و نهادهای حاکمیتی:';

    pillars = [
      {
        id: 'writing',
        badge: 'مسیر اول: نگارش اداری',
        engineTag: 'مکاتبات رسمی',
        title: 'تنظیم نامه اداری رسمی و سازمانی',
        description: 'نگارش نامه با رعایت اصول مکاتبات اداری، سلسله‌مراتب سازمانی، واژگان محترمانه و استناد به قوانین مرتبط.',
        bullets: [
          'تنظیم متناسب با عنوان سازمانی دقیق مقام دریافت‌کننده',
          'بیان منطقی و مؤثر خواسته همراه با فهرست پیوست‌ها',
          'تحویل فوری با پشتیبانی ویرایش تکمیلی',
        ],
        btnText: 'درخواست تنظیم نامه اداری',
        btnHref: '/request?service=administrative_letter',
        accentColor: 'gold',
        isHighlighted: true,
      },
      {
        id: 'cafe',
        badge: 'مسیر دوم: ثبت الکترونیک',
        engineTag: 'دبیرخانه‌های اداری',
        title: 'ثبت در سامانه‌های دولتی و سامد ۱۱۱',
        description: 'ثبت غیرحضوری نامه‌ها و درخواست‌ها در سامانه ارتباط مردم و دولت (سامد)، درگاه‌های ملی و میز خدمت الکترونیک دستگاه‌ها.',
        bullets: [
          'ثبت رسمی با دریافت شماره پیگیری و کد رهگیری کشوری',
          'پیگیری اینترنتی پاسخ دستگاه‌ها و ارجاعات دبیرخانه‌ای',
          'عدم نیاز به مراجعه حضوری به شعب و سازمان‌ها',
        ],
        btnText: 'ثبت در سامانه‌های اداری',
        btnHref: '/services/online-cafe',
        accentColor: 'emerald',
        isHighlighted: false,
      },
      {
        id: 'lawyer',
        badge: 'مسیر سوم: دعاوی اداری',
        engineTag: 'دیوان عدالت اداری',
        title: 'وکیل متخصص دعاوی اداری و شهرداری‌ها',
        description: 'اعتراض تخصصی به آرای کمیسیون ماده ۱۰۰ شهرداری، هیئت‌های حل اختلاف مالیاتی، اداره کار و دادخواست به دیوان عدالت اداری.',
        bullets: [
          'دفاع در برابر جریمه‌ها و دستورات تخریب کمیسیون‌های شهرداری',
          'تنظیم دادخواست نقض رأی در شعب بدوی و تجدیدنظر دیوان عدالت',
          'معرفی وکلای باتجربه در حوزه دعاوی اداری و استخدامی',
        ],
        btnText: 'مشاوره با وکیل دعاوی اداری',
        btnHref: '/lawyer-referral?utm_source=admin_discovery&utm_medium=three_services&utm_campaign=fair_lawyers',
        accentColor: 'blue',
        isHighlighted: false,
      },
    ];
  } else {
    // General fallback
    pillars = [
      {
        id: 'writing',
        badge: 'موتور اول: نگارش متون',
        engineTag: 'اسناد و لوایح',
        title: 'تنظیم تخصصی نامه، دادخواست و لایحه',
        description: 'نگارش متن کاملاً اختصاصی بر اساس شرایط واقعی، مستندات و طرف دعوا با استناد به قوانین موضوعه و اصول دبیرخانه‌ای.',
        bullets: [
          'تنظیم متناسب با مدارک و شرح ماجرای شما',
          'پشتیبانی بازبینی و امکان ویرایش تکمیلی',
          'تحویل سریع در قالب فایل متنی Word و PDF',
        ],
        btnText: 'درخواست تنظیم اختصاصی متن',
        btnHref: '/request',
        accentColor: 'gold',
        isHighlighted: currentService !== 'cafe' && currentService !== 'lawyer',
      },
      {
        id: 'lawyer',
        badge: 'موتور دوم: وکالت دادگستری',
        engineTag: 'وکلای معتمد',
        title: 'معرفی وکیل منصف و متناسب با پرونده',
        description: 'اگر پرونده نیازمند حضور وکیل در دادسرا، دادگاه یا اجرای احکام است، به وکلای متعهد با دستمزد عادلانه متصل شوید.',
        bullets: [
          'انتخاب وکیل متناسب با موضوع پرونده و شهر شما',
          'تعرفه و دستمزد منصفانه با قرارداد مالی شفاف در ثنا',
          'امکان مشاوره تلفنی یا حضوری قبل از اعطای وکالت',
        ],
        btnText: 'درخواست معرفی وکیل منصف',
        btnHref: '/lawyer-referral?utm_source=three_services&utm_medium=discovery_card&utm_campaign=fair_lawyers',
        accentColor: 'blue',
        isHighlighted: currentService === 'lawyer',
      },
      {
        id: 'cafe',
        badge: 'موتور سوم: خدمات آنلاین',
        engineTag: 'کافی‌نت اینترنتی',
        title: 'کافی‌نت آنلاین و ثبت در سامانه‌ها',
        description: 'انجام اینترنتی امور سامانه ثنا، ثبت‌نام مزایدات ستاد ایران، استعلامات و خدمات اداری بدون نیاز به مراجعه حضوری.',
        bullets: [
          'امور ثنا، پیگیری ابلاغیه و دریافت گواهی عدم سوءپیشینه',
          'شرکت در مزایدات دولتی، خودرویی و املاک ستاد',
          'استعلامات بانکی، مالیاتی و ثبت‌نام‌های کشوری',
        ],
        btnText: 'خدمات کافی‌نت آنلاین',
        btnHref: '/services/online-cafe',
        accentColor: 'emerald',
        isHighlighted: currentService === 'cafe',
      },
    ];
  }

  return (
    <section
      id="three-service-discovery-section"
      aria-label="مسیرهای خدمات نگارش یار"
      className={`rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 lg:p-10 relative overflow-hidden text-right ${className}`}
    >
      {/* Background radial accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(229,193,88,0.06)_0%,transparent_70%)] pointer-events-none -z-10" />

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center space-y-3 mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold">
          <Shield className="w-3.5 h-3.5" />
          <span>زنجیره خدمات یکپارچه نگارش یار</span>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-snug">
          سه مسیر متناسب برای حل مسئله اداری و قضایی شما
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
          {introText}
        </p>
      </div>

      {/* 3 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
        {pillars.map((p) => {
          let cardBorderClass = 'bg-slate-900/80 border border-slate-800 hover:border-slate-700';
          let icon = <PenTool className="w-5 h-5" />;
          let iconBg = 'bg-[#E5C158]/10 text-[#E5C158]';
          let btnClass = 'bg-[#E5C158] hover:bg-[#d8b347] text-[#070B15]';

          if (p.accentColor === 'gold') {
            icon = <PenTool className="w-5 h-5" />;
            iconBg = 'bg-[#E5C158]/10 text-[#E5C158]';
            if (p.isHighlighted) {
              cardBorderClass = 'bg-gradient-to-b from-[#151f38] to-[#0d1424] border-2 border-[#E5C158]/60 shadow-lg shadow-[#E5C158]/10';
            }
            btnClass = 'bg-[#E5C158] hover:bg-[#d8b347] text-[#070B15]';
          } else if (p.accentColor === 'blue') {
            icon = <Scale className="w-5 h-5" />;
            iconBg = 'bg-blue-500/10 text-blue-400';
            if (p.isHighlighted) {
              cardBorderClass = 'bg-gradient-to-b from-[#111f3d] to-[#0c162c] border-2 border-blue-500/60 shadow-lg shadow-blue-900/20';
            }
            btnClass = 'bg-blue-600 hover:bg-blue-500 text-white';
          } else if (p.accentColor === 'emerald') {
            icon = <Globe className="w-5 h-5" />;
            iconBg = 'bg-emerald-500/10 text-emerald-400';
            if (p.isHighlighted) {
              cardBorderClass = 'bg-gradient-to-b from-[#112d28] to-[#0c1f1c] border-2 border-emerald-500/60 shadow-lg shadow-emerald-900/20';
            }
            btnClass = 'bg-emerald-600 hover:bg-emerald-500 text-white';
          }

          return (
            <div
              key={p.id}
              id={`pillar-${p.id}-service`}
              className={`flex flex-col justify-between rounded-2xl p-5 sm:p-6 transition-all relative ${cardBorderClass}`}
            >
              {p.isHighlighted && (
                <span className="absolute -top-3 right-5 px-2.5 py-0.5 rounded-full bg-[#E5C158] text-[#070B15] text-[11px] font-extrabold shadow-sm">
                  پیشنهاد متناسب
                </span>
              )}

              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className={`p-2.5 rounded-xl shrink-0 ${iconBg}`}>
                    {icon}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 px-2 py-0.5 rounded bg-slate-800">
                    {p.engineTag}
                  </span>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <ul className="space-y-2 text-xs text-slate-300 pt-1 border-t border-slate-800/80">
                  {p.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E5C158] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-800/80">
                <Link
                  id={`pillar-${p.id}-btn`}
                  href={p.btnHref}
                  className={`w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-extrabold text-xs sm:text-sm transition-all shadow-md active:scale-[0.98] ${btnClass}`}
                >
                  <span>{p.btnText}</span>
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Direct Assistance Strip */}
      <div className="mt-8 pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-2 text-center sm:text-right">
          <PhoneCall className="w-4 h-4 text-[#E5C158] shrink-0" />
          <span>
            نیاز به راهنمایی در انتخاب خدمت متناسب دارید؟ خط رسمی پشتیبانی و مشاوره:{' '}
            <a href="tel:09915147789" className="text-white dir-ltr font-mono font-bold hover:text-[#E5C158]">
              09915147789
            </a>
          </span>
        </div>
        <Link
          id="three-service-contact-btn"
          href="/contact"
          className="text-[#E5C158] hover:underline font-semibold shrink-0"
        >
          راه‌های ارتباط در پیام‌رسان‌ها و تماس مستقیم ←
        </Link>
      </div>
    </section>
  );
}
