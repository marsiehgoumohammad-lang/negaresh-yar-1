'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Container } from '@/components/ui/container';
import {
  Scale,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  MapPin,
  Sparkles,
  Search,
  Users,
  Briefcase,
  Check,
  Building,
  Gavel,
  CreditCard,
  Building2,
  AlertCircle,
  FileText,
  HelpCircle,
  Clock,
  DollarSign,
  Layers,
  AlertTriangle,
  ChevronLeft,
  ArrowLeft,
  CheckSquare,
} from 'lucide-react';
import { ALL_LAWYER_CITIES } from '@/data/lawyers/lawyer-referral-cities';
import { LawyerMessengerCTA } from './LawyerMessengerCTA';
import { LawyerStickyMobileCTA } from './LawyerStickyMobileCTA';

export function LawyerPillarTemplate() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredCities = ALL_LAWYER_CITIES.filter(
    (c) =>
      c.city.includes(searchTerm.trim()) ||
      c.province.includes(searchTerm.trim())
  );

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pillarFaqs = [
    {
      question: 'وکیل منصف یعنی چه و چه تفاوت‌هایی با ادعای وکیل ارزان دارد؟',
      answer:
        'مفهوم «وکیل منصف» هرگز به معنای خدمات بی‌کیفیت یا وکیل بدون مهارت نیست. وکیل منصف، وکیل متعهد و متخصصی است که بدون اغراق درباره شانس پرونده، دستمزد خود را عادلانه و متناسب با حجم واقعی کار، میزان پیچیدگی و شرایط مالی موکل تنظیم می‌کند. در مقابل، تبلیغات «ارزان‌ترین وکیل» معمولاً به دلیل عدم تسلط به آیین دادرسی، بی‌توجهی به مهلت‌های اعتراضی یا اضافه کردن هزینه‌های پیش‌بینی‌نشده در میانه پرونده، خسارات جبران‌ناپذیری به بار می‌آورند.',
    },
    {
      question: 'هزینه وکیل و حق‌الوکاله چگونه تعیین و محاسبه می‌شود؟',
      answer:
        'حق‌الوکاله وکیل دادگستری طبق آیین‌نامه تعرفه قانونی مصوب قوه قضائیه یا بر اساس توافق کتبی و رسمی در سامانه خودکاربری ثنا تعیین می‌گردد. عوامل اصلی تعیین دستمزد شامل: ۱) مرحله رسیدگی (دادسرا، بدوی، تجدیدنظر، دیوان عالی یا اجرای احکام)، ۲) مالی یا غیرمالی بودن خواسته، ۳) ارزش ریالی موضوع دعوا، و ۴) میزان زمان‌بری و حساسیت ادله پرونده است.',
    },
    {
      question: 'آیا پرداخت حق‌الوکاله به صورت اقساطی امکان‌پذیر است؟',
      answer:
        'بله؛ با توجه به شرایط اقتصادی مراجعان، بسیاری از وکلای همکار با سامانه نگارش یار، حق‌الوکاله را در قالب اقساط توافقی (مثلاً پیش‌پرداخت در زمان تنظیم وکالت‌نامه الکترونیک و الباقی در مراحل پیشرفت دادرسی نظیر صدور رای بدوی و تجدیدنظر) دریافت می‌کنند. در زمان ارسال پیام به کارشناسان ما، می‌توانید شرایط بودجه و تقسیط مدنظرتان را مطرح فرمایید.',
    },
    {
      question: 'تفاوت تنظیم لایحه دفاعیه با استخدام وکیل کامل چیست؟',
      answer:
        'اگر توان مالی استخدام وکیل را ندارید اما قادر به حضور شخصی در جلسات دادگاه هستید، می‌توانید از خدمت «تنظیم لایحه تخصصی» توسط نگارش یار استفاده کنید. در این حالت کارشناسان ارشد حقوقی، لایحه و دادخواست شما را با استناد به مواد قانونی و آرای وحدت رویه می‌نویسند و شما آن را تقدیم دادگاه می‌کنید (هزینه بسیار اقتصادی). اما در صورت نیاز به «وکیل کامل»، وکیل شخصاً در تمامی جلسات دادسرا و دادگاه حاضر شده و کلیه امور اداری و دفاعی را صفر تا صد به عهده می‌گیرد.',
    },
    {
      question: 'چگونه وکیل مناسب پرونده خود را در شهر محل سکونت انتخاب کنیم؟',
      answer:
        'معیار اصلی انتخاب وکیل، تطابق موضوع پرونده با تخصص و سابقه وکیل در همان دادگاه است. به عنوان مثال، وکیل دعاوی ملکی باید بر قوانین ثبتی و اراضی مسلط باشد، در حالی که در پرونده‌های کیفری تسلط به آیین دادرسی کیفری و رویه دادسراها تعیین‌کننده است. نگارش یار با ارزیابی خلاصه پرونده شما در ۳۱ استان کشور، وکیل پایه یک متخصص همان حوزه را به شما متصل می‌کند.',
    },
    {
      question: 'آیا تضمین ۱۰۰٪ نتیجه یا پیروزی قطعی در پرونده قانونی است؟',
      answer:
        'خیر؛ بر اساس قوانین وکالت و موازین اخلاقی کانون وکلا و مرکز وکلای قوه قضائیه، تعهد وکیل «تعهد به وسیله» است و نه «تعهد به نتیجه». هیچ وکیلی از نظر قانونی و شرعی مجاز به دادن تضمین قطعی نتیجه دادگاه نیست، زیرا صدور رای نهایی بر عهده قاضی پرونده است. وکیل منصف کسی است که شانس و چالش‌های پرونده را با کمال صداقت و بدون وعده واهی به شما بازگو کند.',
    },
    {
      question: 'سامانه نگارش یار چگونه وکیل منصف را به مراجعان معرفی می‌کند؟',
      answer:
        'پس از ارسال خلاصه پرونده و شهر محل دادرسی از طریق یکی از پیام‌رسان‌ها (ایتا، روبیکا، بله، تلگرام یا واتس‌اپ)، کارشناسان حقوقی نگارش یار موضوع را بررسی کرده و بر اساس نوع دعوا و شرایط مالی اعلامی، شما را به وکیل پایه یک متخصص همان حوزه معرفی می‌نمایند تا قرارداد الکترونیک مستقیماً میان شما و وکیل منعقد گردد.',
    },
    {
      question: 'چرا اطلاعات شخصی و شماره تلفن وکلا به صورت عمومی در سایت درج نشده است؟',
      answer:
        'نگارش یار یک دایرکتوری تبلیغاتی انبوه نیست. به منظور حفظ حریم خصوصی وکلا و موکلان، جلوگیری از تماس‌های نامرتبط تبلیغاتی، و اطمینان از تطابق دقیق تخصص وکیل با موضوع دعوای شما، بررسی شرایط پرونده به صورت حرفه‌ای و توسط کارشناسان پشتیبانی انجام می‌شود.',
    },
  ];

  const baseUrl = 'https://www.negaresh-yar.ir';
  const pageUrl = `${baseUrl}/lawyer-referral`;

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
        item: pageUrl,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pillarFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'معرفی وکیل منصف و انتخاب وکیل مناسب پرونده | هزینه و دستمزد منصفانه - نگارش یار',
    description:
      'راهنمای جامع انتخاب وکیل مناسب پرونده و معرفی وکیل منصف در تهران، مشهد، کرج، اصفهان و سراسر کشور با حق‌الوکاله عادلانه متناسب با توان مالی موکل.',
    url: pageUrl,
    inLanguage: 'fa-IR',
    isPartOf: {
      '@type': 'WebSite',
      name: 'نگارش یار',
      url: baseUrl,
    },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'معرفی وکیل منصف و انتخاب وکیل متناسب با شرایط مالی',
    description:
      'خدمات مشاوره و معرفی وکیل پایه یک دادگستری منصف، با‌تجربه و متعهد در سراسر ایران متناسب با موضوع پرونده و توان مالی موکل.',
    provider: {
      '@type': 'Organization',
      name: 'نگارش یار',
      url: baseUrl,
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
    },
    areaServed: {
      '@type': 'Country',
      name: 'Iran',
    },
    serviceType: 'خدمات حقوقی و معرفی وکیل دادگستری',
    url: pageUrl,
  };

  const legalCategories = [
    {
      title: 'دعاوی ملکی و ثبتی',
      icon: Building,
      desc: 'الزام به تنظیم سند رسمی، خلع ید، تصرف عدوانی، پیش‌فروش ساختمان، دعاوی موجر و مستاجر، اراضی و تفکیک ملک.',
      tag: 'تخصصی ملکی',
    },
    {
      title: 'دعاوی کیفری و جرایم',
      icon: Gavel,
      desc: 'کلاهبرداری، خیانت در امانت، سرقت، ضرب و جرح، جرایم سایبری، جعل و استفاده از سند مجعول، لوایح دفاعیه دادسرا.',
      tag: 'دادسرا و کیفری',
    },
    {
      title: 'دعاوی خانواده و مهریه',
      icon: Users,
      desc: 'مطالبه مهریه، طلاق توافقی و یک‌طرفه، حضانت فرزندان، نفقه، اجرت‌المثل ایام زوجیت و استرداد جهیزیه در دادگاه خانواده.',
      tag: 'دادگاه خانواده',
    },
    {
      title: 'چک و مطالبات مالی',
      icon: CreditCard,
      desc: 'مطالبه وجه چک صیادی، سفته، خسارت تاخیر تادیه، توقیف اموال، تامین خواسته، اعسار از محکوم‌به و اجرای احکام مدنی.',
      tag: 'اسناد تجاری',
    },
    {
      title: 'امور شرکتی و قراردادها',
      icon: Briefcase,
      desc: 'تنظیم قراردادهای بازرگانی، حل اختلافات شرکا، انحلال و تصفیه شرکت، داوری حقوقی و قراردادهای سرمایه‌گذاری.',
      tag: 'تجاری و شرکت‌ها',
    },
    {
      title: 'دیوان عدالت اداری و شهرداری',
      icon: Building2,
      desc: 'اعتراض به آرای کمیسیون ماده ۱۰۰ شهرداری، دعاوی استخدامی و اداری، ابطال بخشنامه‌های دولتی و اعتراضات مالیاتی.',
      tag: 'دیوان عدالت اداری',
    },
  ];

  const majorCities = [
    {
      city: 'تهران',
      slug: 'tehran',
      province: 'تهران',
      badge: 'پایتخت و دیوان عالی',
      desc: 'دسترسی به وکلای متخصص در مجتمع‌های قضایی شهید بهشتی، صدر، عدالت، کارکنان دولت و دادگاه‌های تجدیدنظر استان تهران.',
    },
    {
      city: 'مشهد',
      slug: 'mashhad',
      province: 'خراسان رضوی',
      badge: 'مرکز حقوقی شرق کشور',
      desc: 'معرفی وکلای باتجربه در مجتمع‌های قضایی امام خمینی، شهید مطهری، شهید هاشمی‌نژاد و دادگاه‌های تجدیدنظر استان خراسان رضوی.',
    },
    {
      city: 'اصفهان',
      slug: 'isfahan',
      province: 'اصفهان',
      badge: 'مرکز و جنوب مرکزی',
      desc: 'ارتباط با وکلای متعهد در مجتمع‌های قضایی شهید مطهری، ۲۲ بهمن و محاکم تجدیدنظر استان اصفهان با تعرفه منصفانه.',
    },
    {
      city: 'کرج',
      slug: 'karaj',
      province: 'البرز',
      badge: 'استان البرز',
      desc: 'دسترسی سریع به وکلای منصف دعاوی ملکی، ثبتی و کیفری در مجتمع‌های قضایی کرج و فردیس متناسب با توان مالی موکل.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#070B15] text-slate-100 selection:bg-[#E5C158]/30 selection:text-white" dir="rtl">
      {/* Schemas */}
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* ---------------------------------------------------- */}
      {/* 1. HERO SECTION */}
      {/* ---------------------------------------------------- */}
      <header className="relative pt-8 pb-14 sm:pt-14 sm:pb-20 border-b border-slate-800/80 overflow-hidden bg-gradient-to-b from-[#0C1222] via-[#070B15] to-[#070B15]">
        <div className="absolute top-0 right-1/3 w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(229,193,88,0.08)_0%,transparent_70%)] pointer-events-none blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(59,130,246,0.06)_0%,transparent_70%)] pointer-events-none blur-3xl" />

        <Container>
          {/* Breadcrumbs */}
          <nav aria-label="مسیر راهنما" className="mb-6">
            <ol className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-[#E5C158] transition-colors">
                  صفحه اصلی
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-600">/</li>
              <li className="text-[#E5C158] font-semibold" aria-current="page">
                معرفی وکیل منصف
              </li>
            </ol>
          </nav>

          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs sm:text-sm font-bold">
              <Scale className="w-4 h-4" />
              <span>معرفی وکیل منصف و با‌انصاف در ۳۱ استان کشور</span>
            </div>

            {/* Core H1 Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              وکیل منصف و انتخاب وکیل مناسب پرونده متناسب با توان مالی شما
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-medium">
              سامانه نگارش یار با تحلیل نوع دعوا (ملکی، کیفری، خانواده، چک و دیوان) و بررسی شرایط بودجه شما، راه دسترسی به وکلای پایه یک دادگستری متخصص، متعهد و منصف را فراهم می‌کند تا با شفافیت کامل در قرارداد مالی، از حقوق قانونی خود دفاع کنید.
            </p>

            {/* Direct Answer & Core Definition Box */}
            <div className="rounded-2xl border border-[#E5C158]/30 bg-gradient-to-r from-[#0D1424] via-[#111A30] to-[#0D1424] p-5 sm:p-7 shadow-lg shadow-black/40 space-y-3">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#E5C158]/20 border border-[#E5C158]/40 flex items-center justify-center text-[#E5C158] shrink-0 mt-0.5">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <h2 className="text-base sm:text-lg font-bold text-white">
                    وکیل منصف یعنی چه و چگونه تعیین می‌شود؟
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                    <strong>وکیل منصف به معنای وکیل ارزان یا کم‌کیفیت نیست؛</strong> بلکه وکیلی است که بدون ایجاد امیدهای واهی یا ادعای غیرقانونی «تضمین نتیجه»، حق‌الوکاله را دقیقاً بر اساس حجم واقعی کار، دشواری مستندات و توان مالی موکل تنظیم نموده و امکان پرداخت اقساطی را با قرارداد الکترونیک در سامانه ثنا مهیا می‌سازد.
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-xs text-slate-200">
                <Check className="w-4 h-4 text-[#E5C158] shrink-0" />
                <span>دستمزد عادلانه و شفاف</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-xs text-slate-200">
                <Check className="w-4 h-4 text-[#E5C158] shrink-0" />
                <span>تخصص دقیق در موضوع دعوا</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-xs text-slate-200">
                <Check className="w-4 h-4 text-[#E5C158] shrink-0" />
                <span>امکان پرداخت اقساطی</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-xs text-slate-200">
                <Check className="w-4 h-4 text-[#E5C158] shrink-0" />
                <span>حفظ کامل محرمانگی اطلاعات</span>
              </div>
            </div>

            {/* Top CTA */}
            <div className="pt-2">
              <LawyerMessengerCTA variant="top" />
            </div>
          </div>
        </Container>
      </header>

      {/* ---------------------------------------------------- */}
      {/* MAIN CONTENT BODY */}
      {/* ---------------------------------------------------- */}
      <main className="py-12 sm:py-16 space-y-16 sm:space-y-24">
        <Container className="space-y-16 sm:space-y-24">
          {/* ---------------------------------------------------- */}
          {/* SECTION 1: WHAT IS A FAIR LAWYER (وکیل منصف یعنی چه؟) */}
          {/* ---------------------------------------------------- */}
          <section className="relative">
            <div className="max-w-3xl space-y-3 mb-10">
              <div className="inline-flex items-center gap-2 text-[#E5C158] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>تعریف اصولی و معیارهای اخلاقی</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                وکیل منصف یعنی چه؟ ویژگی‌های بنیادین وکیل با انصاف
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                انتخاب وکیل یکی از سرنوشت‌سازترین تصمیم‌ها در زندگی حقوقی و مالی هر فرد است. آگاهی از معیارهای یک وکیل منصف به شما کمک می‌کند تا از دام ادعاهای فریبنده یا دستمزدهای نامتعارف مصون بمانید:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#0D1424] border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-[#E5C158]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 text-[#E5C158] flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  ارزیابی واقع‌بینانه و پرهیز از تضمین نتیجه
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                  وکیل منصف پیش از هر اقدامی، مستندات پرونده را بررسی کرده و شانس موفقیت و نقاط ضعف قانونی را با صداقت کامل با شما در میان می‌گذارد. او هرگز برای جذب موکل، وعده پیروزی ۱۰۰٪ یا روابط خاص در مراجع قضایی نمی‌دهد.
                </p>
              </div>

              <div className="bg-[#0D1424] border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-[#E5C158]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 text-[#E5C158] flex items-center justify-center font-bold">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  تعیین دستمزد متناسب با حجم کار و توان مالی
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                  حق‌الوکاله وکیل با انصاف بر اساس تعداد جلسات دادرسی، پیچیدگی ماهوی پرونده و تعرفه قانونی مصوب محاسبه می‌شود، نه بر اساس سوءاستفاده از اضطرار موکل یا مبالغ نجومی غیرمنطقی.
                </p>
              </div>

              <div className="bg-[#0D1424] border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-[#E5C158]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 text-[#E5C158] flex items-center justify-center font-bold">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  تخصص‌محوری و تسلط در موضوع دقیق دعوا
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                  یک وکیل منصف در صورتی که در شاخه خاصی از پرونده (مثلاً دعاوی تخصصی سرقفلی، جرایم بانکی یا مصوبات شهرداری) تجربه کافی نداشته باشد، به صراحت موضوع را اعلام کرده یا موکل را به همکار متخصص ارجاع می‌دهد.
                </p>
              </div>

              <div className="bg-[#0D1424] border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-[#E5C158]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 text-[#E5C158] flex items-center justify-center font-bold">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  ثبت قرارداد مالی شفاف در سامانه ثنا
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                  کلیه توافقات مالی، مراحل پرداخت و تعهدات کاری وکیل در سامانه رسمی قرارداد الکترونیک وکالت (ثنا) ثبت شده و هیچ‌گونه هزینه پنهان یا ادعای مالی پیش‌بینی‌نشده در میانه مسیر مطرح نخواهد شد.
                </p>
              </div>
            </div>
          </section>

          {/* ---------------------------------------------------- */}
          {/* SECTION 2: HOW TO CHOOSE THE RIGHT LAWYER (چگونه وکیل مناسب انتخاب کنیم؟) */}
          {/* ---------------------------------------------------- */}
          <section className="relative bg-gradient-to-b from-[#0D1424] via-[#070B15] to-[#0D1424] p-8 sm:p-12 rounded-3xl border border-slate-800">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5C158]/10 text-[#E5C158] text-xs font-bold">
                <Sparkles className="w-4 h-4" />
                <span>راهنمای گام‌به‌گام و کاربردی</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                چگونه وکیل مناسب پرونده خود را انتخاب کنیم؟
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                برای انتخاب بهترین وکیل متناسب با شرایط حقوقی و مالی خود، این ۴ مرحله استاندارد را طی کنید:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-[#070B15] border border-slate-800 rounded-2xl p-6 space-y-3 relative">
                <div className="w-10 h-10 rounded-xl bg-[#E5C158]/20 text-[#E5C158] font-black text-base flex items-center justify-center">
                  ۱
                </div>
                <h3 className="text-base font-bold text-white">
                  تشخیص نوع دعوا و مرجع رسیدگی
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  مشخص کنید پرونده شما حقوقی، کیفری، خانواده، ملکی یا اداری است و در چه مرحله‌ای (دادسرا، بدوی، تجدیدنظر یا دیوان) قرار دارد.
                </p>
              </div>

              <div className="bg-[#070B15] border border-slate-800 rounded-2xl p-6 space-y-3 relative">
                <div className="w-10 h-10 rounded-xl bg-[#E5C158]/20 text-[#E5C158] font-black text-base flex items-center justify-center">
                  ۲
                </div>
                <h3 className="text-base font-bold text-white">
                  بررسی تجربه در موضوع مشابه
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  سابقه و رویه عملکرد وکیل را در پرونده‌های هم‌موضوع با پرونده خودتان در همان حوزه قضایی جویا شوید.
                </p>
              </div>

              <div className="bg-[#070B15] border border-slate-800 rounded-2xl p-6 space-y-3 relative">
                <div className="w-10 h-10 rounded-xl bg-[#E5C158]/20 text-[#E5C158] font-black text-base flex items-center justify-center">
                  ۳
                </div>
                <h3 className="text-base font-bold text-white">
                  سنجش واقع‌بینی در مشاوره اولیه
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  در جلسه یا تماس مشاوره اولیه، بسنجید که آیا وکیل به ضعف‌های پرونده نیز اشاره می‌کند یا تنها وعده‌های رویایی می‌دهد.
                </p>
              </div>

              <div className="bg-[#070B15] border border-slate-800 rounded-2xl p-6 space-y-3 relative">
                <div className="w-10 h-10 rounded-xl bg-[#E5C158]/20 text-[#E5C158] font-black text-base flex items-center justify-center">
                  ۴
                </div>
                <h3 className="text-base font-bold text-white">
                  توافق مالی شفاف و کتبی در ثنا
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  مبلغ دقیق حق‌الوکاله، شرایط پرداخت اقساطی و تعهدات هر طرف را به صورت رسمی در قرارداد الکترونیک سامانه ثنا ثبت فرمایید.
                </p>
              </div>
            </div>
          </section>

          {/* ---------------------------------------------------- */}
          {/* SECTION 3: LAWYER COST & LEGAL FEES (هزینه وکیل چگونه تعیین می‌شود؟) */}
          {/* ---------------------------------------------------- */}
          <section className="relative">
            <div className="max-w-3xl space-y-3 mb-10">
              <div className="inline-flex items-center gap-2 text-[#E5C158] text-xs font-bold uppercase tracking-wider">
                <CreditCard className="w-4 h-4" />
                <span>شفافیت مالی و تعرفه‌های حق‌الوکاله</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                هزینه وکیل و حق‌الوکاله چگونه تعیین می‌شود؟
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                محاسبه دستمزد وکیل بر اساس آیین‌نامه تعرفه حق‌الوکاله مصوب قوه قضائیه یا توافق طرفین انجام می‌گیرد. آگاهی از عوامل موثر بر هزینه وکیل مانع از پرداخت مبالغ غیرمنصفانه می‌شود:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#0D1424] border border-slate-800 rounded-2xl p-6 space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E5C158]" />
                  <span>عوامل موثر بر هزینه و دستمزد وکیل</span>
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#E5C158] shrink-0 mt-0.5" />
                    <span><strong>مرحله دادرسی:</strong> هزینه اعلام وکالت در مرحله بدوی با تجدیدنظر یا فرجام‌خواهی دیوان عالی متفاوت است.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#E5C158] shrink-0 mt-0.5" />
                    <span><strong>نوع و ارزش مالی خواسته:</strong> در دعاوی مالی درصدی از بهای خواسته ملاک است؛ در دعاوی غیرمالی مبالغ ثابت و توافقی است.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#E5C158] shrink-0 mt-0.5" />
                    <span><strong>میزان پیچیدگی ادله:</strong> پرونده‌هایی که نیاز به کارشناسی‌های متعدد، استعلامات ثبتی و جلسات مکرر دارند دستمزد بالاتری می‌طلبند.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#E5C158] shrink-0 mt-0.5" />
                    <span><strong>محل دادگاه و مسافت:</strong> حضور در حوزه‌های قضایی دورتر هزینه‌های سفر و زمان بیشتری نیاز دارد.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#0D1424] border border-slate-800 rounded-2xl p-6 space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>راهکارهای پرداخت متناسب با توان مالی موکل</span>
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <p className="leading-relaxed">
                    <strong>پرداخت اقساطی حق‌الوکاله:</strong> شما می‌توانید با وکیل توافق کنید که دستمزد را در ۳ تا ۴ قسط متناسب با پیشرفت مراحل دادسرا، دادگاه بدوی و تجدیدنظر پرداخت نمایید.
                  </p>
                  <p className="leading-relaxed">
                    <strong>تفکیک مراحل رسیدگی:</strong> در صورت محدودیت بودجه، می‌توانید برای مرحله خاصی (مثلاً فقط مرحله تجدیدنظر یا فقط تنظیم لوایح دفاعیه) قرارداد منعقد کنید تا هزینه‌ها مدیریت شود.
                  </p>
                  <div className="p-3 rounded-xl bg-[#070B15] border border-emerald-500/30 text-emerald-300 text-xs">
                    💡 نگارش یار به شما کمک می‌کند تا وکیلی را بیابید که شرایط پرداخت منعطف با وضعیت اقتصادی شما را پذیرا باشد.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ---------------------------------------------------- */}
          {/* SECTION 4: BRIEF WRITING VS FULL LAWYER REPRESENTATION */}
          {/* (تفاوت تنظیم لایحه با وکیل کامل) */}
          {/* ---------------------------------------------------- */}
          <section className="relative">
            <div className="max-w-3xl space-y-3 mb-10">
              <div className="inline-flex items-center gap-2 text-[#E5C158] text-xs font-bold uppercase tracking-wider">
                <Layers className="w-4 h-4" />
                <span>مدیریت هوشمندانه هزینه‌های دادرسی</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                تفاوت تنظیم لایحه با گرفتن وکیل کامل دادگستری
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                آیا پرونده شما واقعاً نیاز به وکیل کامل دارد یا با یک لایحه دفاعیه تخصصی می‌توانید خودتان در دادگاه از حقوقتان دفاع کنید؟ این جدول مقایسه‌ای به شما کمک می‌کند تصمیم درستی بگیرید:
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-[#0D1424]">
              <table className="w-full text-right border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-700 bg-slate-900/90 text-white">
                    <th className="p-4 sm:p-5 font-black text-[#E5C158]">معیار مقایسه</th>
                    <th className="p-4 sm:p-5 font-black">تنظیم لایحه و دادخواست (نگارش یار)</th>
                    <th className="p-4 sm:p-5 font-black">استخدام وکیل کامل دادگستری</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr className="hover:bg-slate-900/40 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-white">هزینه و صرفه اقتصادی</td>
                    <td className="p-4 sm:p-5 text-emerald-400 font-semibold">بسیار اقتصادی و مقرون‌به‌صرفه (کسری از هزینه وکیل)</td>
                    <td className="p-4 sm:p-5">پرداخت حق‌الوکاله کامل بر اساس تعرفه یا توافق</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-white">حضور در جلسات دادگاه</td>
                    <td className="p-4 sm:p-5">خود شخص موکل با لایحه آماده در دادگاه حاضر می‌شود</td>
                    <td className="p-4 sm:p-5">وکیل به عنوان نماینده قانونی در جلسات شرکت می‌کند</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-white">استناد به مواد قانونی</td>
                    <td className="p-4 sm:p-5">استناد کامل به مواد قانون، آرا و نظریات مشورتی</td>
                    <td className="p-4 sm:p-5">دفاع شفاهی و کتبی همه‌جانبه توسط وکیل</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-white">مناسب برای چه پرونده‌هایی؟</td>
                    <td className="p-4 sm:p-5">پرونده‌های با موضوع مشخص، مطالبه طلب، اعسار، لوایح اعتراضی</td>
                    <td className="p-4 sm:p-5">دعاوی سنگین کیفری، پرونده‌های پیچیده ملکی، عدم توانایی حضور موکل</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-white">سرعت آماده‌سازی</td>
                    <td className="p-4 sm:p-5 text-emerald-400 font-semibold">تحویل سریع زیر چند ساعت در پیام‌رسان</td>
                    <td className="p-4 sm:p-5">نیازمند جلسه حضوری، امضای وکالت‌نامه و تمبر مالیاتی</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm">
              <span className="text-slate-300">
                اگر تنها نیاز به تنظیم لایحه یا دادخواست دارید، می‌توانید مستقیماً از خدمات آنلاین نگارش یار استفاده کنید:
              </span>
              <div className="flex items-center gap-3">
                <Link
                  href="/services/legal-brief"
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold transition-colors"
                >
                  سفارش تنظیم لایحه
                </Link>
                <Link
                  href="/services/petition-writing"
                  className="px-4 py-2 rounded-xl bg-[#E5C158] hover:bg-[#d4af37] text-slate-950 font-black transition-colors"
                >
                  تنظیم دادخواست
                </Link>
              </div>
            </div>
          </section>

          {/* ---------------------------------------------------- */}
          {/* SECTION 5: WHEN SHOULD YOU HIRE A LAWYER? (چه زمانی وکیل بگیریم؟) */}
          {/* ---------------------------------------------------- */}
          <section className="relative">
            <div className="max-w-3xl space-y-3 mb-10">
              <div className="inline-flex items-center gap-2 text-[#E5C158] text-xs font-bold uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>تشخیص ضرورت حضور وکیل در دادگاه</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                چه زمانی بهتر است حتماً وکیل بگیریم؟
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                در برخی پرونده‌ها، به دلیل حساسیت بالا یا پیامدهای غیرقابل جبران، حضور وکیل پایه یک دادگستری اکیداً توصیه می‌شود:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#0D1424] border border-amber-500/20 rounded-2xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                  <Gavel className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">پرونده‌های کیفری و اتهامات حساس</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                  در پرونده‌هایی نظیر کلاهبرداری، خیانت در امانت، جرایم مالی سنگین یا مواردی که با آزادی و مجازات فرد مرتبط است، دفاع تخصصی وکیل در دادسرا از بازداشت یا تضییع حقوق پیشگیری می‌کند.
                </p>
              </div>

              <div className="bg-[#0D1424] border border-amber-500/20 rounded-2xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                  <Building className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">دعاوی ملکی با اسناد معارض و ارزش بالا</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                  دعاوی اثبات مالکیت، ابطال سند رسمی، خلع ید مشاعی و پیش‌فروش نیازمند تسلط به قوانین ثبتی، مقررات اوقاف و کارشناسی‌های ثبتی هستند و هر خطای کوچک می‌تواند منجر به از دست رفتن سرمایه شود.
                </p>
              </div>

              <div className="bg-[#0D1424] border border-amber-500/20 rounded-2xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">عدم امکان حضور فیزیکی یا بعد مسافت</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                  اگر در شهری غیر از شهر دادگاه سکونت دارید یا به دلیل مشغله شغلی امکان شرکت در جلسات متعدد دادگاه را ندارید، استخدام وکیل دادگستری مانع از صدور آرای غیابی و تاخیر در دادرسی می‌شود.
                </p>
              </div>
            </div>
          </section>

          {/* ---------------------------------------------------- */}
          {/* SECTION 6: MAJOR CITIES SPOTLIGHT (وکلای منصف در کلان‌شهرها) */}
          {/* ---------------------------------------------------- */}
          <section className="relative">
            <div className="max-w-3xl space-y-3 mb-10">
              <div className="inline-flex items-center gap-2 text-[#E5C158] text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>دسترسی محلی در قطب‌های قضایی کشور</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                معرفی وکیل منصف در کلان‌شهرهای ایران
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                سامانه نگارش یار ارتباط با وکلای معتمد و منصف را در تمامی کلان‌شهرها و مراکز استان‌های کشور پوشش می‌دهد:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              {majorCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/lawyer-referral/${c.slug}`}
                  className="bg-[#0D1424] border border-slate-800 hover:border-[#E5C158]/50 rounded-2xl p-5 space-y-3 group transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#E5C158] bg-[#E5C158]/10 px-2.5 py-1 rounded-full border border-[#E5C158]/20">
                      {c.badge}
                    </span>
                    <MapPin className="w-4 h-4 text-slate-500 group-hover:text-[#E5C158] transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#E5C158] transition-colors">
                    وکیل منصف در {c.city}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {c.desc}
                  </p>
                  <div className="pt-2 text-xs text-[#E5C158] font-bold flex items-center gap-1">
                    <span>مشاهده راهنمای وکیل {c.city}</span>
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ---------------------------------------------------- */}
          {/* SECTION 7: 31 PROVINCIAL CAPITALS DIRECTORY */}
          {/* ---------------------------------------------------- */}
          <section id="provincial-capitals" className="relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-white">
                  دسترسی به راهنمای وکیل منصف در ۳۱ مرکز استان کشور
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  جهت دریافت راهنمای اختصاصی و ارتباط با وکیل در استان خود، شهر مورد نظر را انتخاب نمایید:
                </p>
              </div>

              {/* Search filter */}
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="جستجوی شهر یا استان..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-3 pr-10 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#E5C158]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {filteredCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/lawyer-referral/${city.slug}`}
                  className="group flex flex-col p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-[#E5C158]/50 hover:bg-slate-900 transition-all text-right"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white group-hover:text-[#E5C158] transition-colors">
                      وکیل در {city.city}
                    </span>
                    <MapPin className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#E5C158] transition-colors shrink-0" />
                  </div>
                  <span className="text-[11px] text-slate-400">
                    استان {city.province}
                  </span>
                </Link>
              ))}
            </div>

            {filteredCities.length === 0 && (
              <div className="text-center py-10 text-slate-400 text-sm">
                شهری با عبارت جستجو شده یافت نشد.
              </div>
            )}
          </section>

          {/* ---------------------------------------------------- */}
          {/* SECTION 8: LEGAL PRACTICE CATEGORIES */}
          {/* ---------------------------------------------------- */}
          <section className="relative">
            <div className="max-w-2xl mb-8">
              <h2 className="text-xl sm:text-2xl font-black text-white mb-2">
                دسته‌بندی موضوعات حقوقی و تخصصی وکالت
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                راهنمایی و معرفی وکیل متخصص در تمامی شاخه‌های دعاوی دادگستری:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {legalCategories.map((cat, idx) => {
                const IconComp = cat.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-[#0D1424] border border-slate-800 p-5 hover:border-[#E5C158]/40 transition-colors space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#E5C158]/15 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <h3 className="text-base font-bold text-white">{cat.title}</h3>
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                        {cat.tag}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ---------------------------------------------------- */}
          {/* SECTION 9: FAQS (سوالات متداول و پاسخ‌های عمیق) */}
          {/* ---------------------------------------------------- */}
          <section id="faqs" className="relative scroll-mt-24 max-w-4xl mx-auto">
            <div className="text-center mb-10 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5C158]/10 text-[#E5C158] text-xs font-bold">
                <HelpCircle className="w-4 h-4" />
                <span>پاسخ شفاف به پرسش‌های پرتکرار</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                پرسش‌های متداول درباره انتخاب و هزینه وکیل
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                پاسخ‌های تحلیلی و مستند به متداول‌ترین سوالات مراجعان نگارش یار
              </p>
            </div>

            <div className="space-y-3">
              {pillarFaqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-slate-800 bg-[#0D1424] overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-4 sm:p-6 text-right font-bold text-sm sm:text-base text-white hover:text-[#E5C158] transition-colors focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#E5C158]/10 text-[#E5C158] text-xs flex items-center justify-center shrink-0">
                          {index + 1}
                        </span>
                        <span>{faq.question}</span>
                      </span>
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
                          <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4 text-justify">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ---------------------------------------------------- */}
          {/* SECTION 10: ETHICAL & LEGAL NOTICE */}
          {/* ---------------------------------------------------- */}
          <section className="max-w-4xl mx-auto rounded-2xl border border-amber-500/30 bg-amber-950/20 p-5 sm:p-7 text-slate-200">
            <div className="flex items-start gap-3.5">
              <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-2 text-xs sm:text-sm leading-relaxed">
                <h3 className="font-bold text-amber-300 text-sm sm:text-base">
                  نکته ضروری پیرامون منع قانونی ادعای تضمین نتیجه در وکالت
                </h3>
                <p className="text-slate-300 text-justify">
                  مطابق با موازین قانونی و انتظامی کانون‌های وکلای دادگستری و مرکز وکلای قوه قضائیه، تعهد وکیل دادگستری، تعهد به تلاش حداکثری و دفاع مستند قانونی است، نه تعهد به نتیجه قطعی. هیچ وکیلی نمی‌تواند نتیجه رای دادگاه را به صورت صددرصدی تضمین نماید. در سامانه نگارش یار، اصل بر صداقت حرفه‌ای، تحلیل مستند مدارک و دستمزد عادلانه است.
                </p>
              </div>
            </div>
          </section>

          {/* ---------------------------------------------------- */}
          {/* SECTION 11: LAWYER PARTNERSHIP BANNER */}
          {/* ---------------------------------------------------- */}
          <section className="max-w-4xl mx-auto rounded-2xl border border-blue-500/30 bg-blue-950/20 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-blue-300 font-bold text-base sm:text-lg">
                  <Users className="w-5 h-5" />
                  <span>همکاری وکلای پایه یک دادگستری با سامانه نگارش یار</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl text-justify">
                  وکلای محترم دادگستری در سراسر ۳۱ استان کشور که علاقه‌مند به دریافت ارجاع پرونده‌های متناسب با تخصص خود با رعایت موازین انصاف و تعرفه شفاف هستند، می‌توانند فرم همکاری را تکمیل نمایند.
                </p>
              </div>

              <Link
                href="/lawyer-partnership"
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold transition-colors shrink-0 shadow-lg shadow-blue-900/30"
              >
                ثبت اطلاعات و فرم همکاری وکلا
              </Link>
            </div>
          </section>

          {/* ---------------------------------------------------- */}
          {/* SECTION 12: BOTTOM MESSENGER CTA */}
          {/* ---------------------------------------------------- */}
          <section className="max-w-4xl mx-auto">
            <LawyerMessengerCTA variant="bottom" />
          </section>
        </Container>
      </main>

      {/* Mobile Sticky CTA */}
      <LawyerStickyMobileCTA />
    </div>
  );
}

