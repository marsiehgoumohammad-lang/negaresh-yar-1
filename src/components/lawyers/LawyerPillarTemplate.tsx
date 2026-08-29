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
} from 'lucide-react';
import { ALL_LAWYER_CITIES } from '@/data/lawyers/lawyer-referral-cities';
import { LawyerMessengerCTA } from './LawyerMessengerCTA';

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
      question: 'سامانه نگارش یار چگونه به من در انتخاب وکیل کمک می‌کند؟',
      answer:
        'نگارش یار پس از دریافت خلاصه موضوع حقوقی یا کیفری شما و مشخص شدن شهر محل دادرسی، موضوع را با وکلای پایه یک دادگستری معتمد و دارای سابقه موثر که به تعرفه عادلانه و منصفانه پایبند هستند مطرح کرده و در صورت توافق، هماهنگی‌های لازم را جهت ارتباط مستقیم انجام می‌دهد.',
    },
    {
      question: 'آیا هزینه اولیه برای درخواست معرفی وکیل دریافت می‌شود؟',
      answer:
        'خیر، دریافت راهنمایی و استعلام اولیه از طریق پیام‌رسان‌های نگارش یار هزینه‌ای ندارد و حق‌الوکاله پس از توافق مستقیم شما با وکیل و بر اساس قرارداد مالی وکالت معین می‌گردد.',
    },
    {
      question: 'منظور از «وکیل منصف» چیست؟ آیا به معنای خدمات ارزان و بی‌کیفیت است؟',
      answer:
        'خیر، وکیل منصف به معنای حق‌الوکاله متناسب با حجم و پیچیدگی واقعی پرونده، شفافیت کامل قرارداد مالی، پرهیز از ادعاهای واهی یا مبالغ نامتعارف و تعهد صادقانه به پیگیری پرونده است.',
    },
    {
      question: 'آیا برای تمام دعاوی ملکی، کیفری، خانواده و دیوان عدالت اداری امکان راهنمایی وجود دارد؟',
      answer:
        'بله، از آنجا که هر وکیل در حوزه‌های معینی تخصص و تجربه بیشتری دارد، نگارش یار پرونده‌های ملکی، مالی، تجاری، خانوادگی، کیفری و اداری را تفکیک نموده و متناسب با موضوع پرونده اقدام می‌کند.',
    },
    {
      question: 'چرا اطلاعات شخصی و شماره تلفن وکلا در سایت منتشر نمی‌شود؟',
      answer:
        'نگارش یار یک دایرکتوری عمومی یا سامانه تبلیغاتی وکلا نیست. حفظ حریم خصوصی وکلا و مراجعان، جلوگیری از سوءاستفاده‌های تبلیغاتی و بررسی دقیق تناسب پرونده با وکیل، از دلایل بررسی سازمانی و عدم انتشار عمومی اطلاعات است.',
    },
  ];

  const baseUrl = 'https://negaresh-yar.ir';
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
    name: 'معرفی وکیل منصف در سراسر ایران | حمایت حقوقی و انتخاب وکیل متناسب - نگارش یار',
    description:
      'راهنمای معرفی وکیل منصف در سراسر کشور با دستمزد عادلانه و تعهد حرفه‌ای برای دعاوی ملکی، کیفری، خانواده، چک و مطالبات مالی در ۳۱ استان ایران.',
    url: pageUrl,
    inLanguage: 'fa-IR',
    isPartOf: {
      '@type': 'WebSite',
      name: 'نگارش یار',
      url: baseUrl,
    },
  };

  const legalCategories = [
    {
      title: 'دعاوی ملکی و ثبتی',
      icon: Building,
      desc: 'خلع ید، الزام به تنظیم سند رسمی، تصرف عدوانی، پیش‌فروش ساختمان، دعاوی موجر و مستاجر و اراضی.',
    },
    {
      title: 'دعاوی خانواده و احوال شخصیه',
      icon: Users,
      desc: 'مهریه، طلاق توافقی و یک‌طرفه، حضانت فرزندان، نفقه، اجرت‌المثل ایام زوجیت و استرداد جهیزیه.',
    },
    {
      title: 'دعاوی کیفری و جرایم',
      icon: Gavel,
      desc: 'کلاهبرداری، خیانت در امانت، سرقت، ضرب و جرح، جرایم رایانه‌ای، جعل اسناد و لوایح دفاعیه کیفری.',
    },
    {
      title: 'چک و مطالبات مالی',
      icon: CreditCard,
      desc: 'چک صیادی، سفته، خسارت تاخیر تادیه، توقیف اموال، تامین خواسته و دعاوی ورشکستگی و اعسار.',
    },
    {
      title: 'امور شرکتی و قراردادها',
      icon: Briefcase,
      desc: 'تنظیم قراردادهای تجاری، اختلافات شرکا، انحلال شرکت، قراردادهای سرمایه‌گذاری و داوری.',
    },
    {
      title: 'دیوان عدالت اداری و شهرداری',
      icon: Building2,
      desc: 'اعتراض به آرای کمیسیون ماده ۱۰۰، دعاوی استخدامی، ابطال مصوبات دولتی و اعتراضات مالیاتی.',
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

      {/* Hero Section */}
      <header className="relative pt-8 pb-14 sm:pt-14 sm:pb-20 border-b border-slate-800/80 overflow-hidden">
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(229,193,88,0.07)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(59,130,246,0.06)_0%,transparent_70%)] pointer-events-none" />

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
              <li className="text-[#E5C158] font-medium" aria-current="page">
                معرفی وکیل منصف
              </li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs sm:text-sm font-semibold mb-4">
              <Scale className="w-4 h-4" />
              <span>پوشش سراسری در ۳۱ مرکز استان کشور</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
              معرفی وکیل منصف در سراسر ایران؛ حمایت حقوقی متناسب با شرایط شما
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed mb-6">
              نگارش یار با در نظر گرفتن موضوع دعوا، شهر محل طرح پرونده و امکانات مالی شما، مسیر ارتباط با وکلای متعهد و منصف را هموار می‌سازد.
            </p>

            {/* Direct Answer Box for Google AI Overview */}
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-5 sm:p-6 mb-8 backdrop-blur-sm shadow-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm sm:text-base font-bold text-emerald-300 mb-1.5">
                    پاسخ سریع و راهنمای معرفی وکیل:
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    اگر برای پیگیری پرونده حقوقی، کیفری، ملکی یا خانواده خود نیازمند حمایت وکیل هستید، سامانه نگارش یار با ارزیابی دقیق موضوع پرونده، شهر و توان مالی، شما را به وکلای منصف، معتمد و با دستمزد عادلانه متصل می‌نماید تا بدون دغدغه هزینه‌های نامتعارف، از حقوقتان دفاع کنید.
                  </p>
                </div>
              </div>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
                <Check className="w-4 h-4 text-[#E5C158] shrink-0" />
                <span>دستمزد عادلانه و شفافیت قرارداد مالی</span>
              </div>
              <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
                <Check className="w-4 h-4 text-[#E5C158] shrink-0" />
                <span>تناسب کامل با حوزه تخصصی دعوا</span>
              </div>
              <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
                <Check className="w-4 h-4 text-[#E5C158] shrink-0" />
                <span>حفظ محرمانگی و عدم انتشار اطلاعات</span>
              </div>
            </div>

            {/* Top Messenger CTA */}
            <LawyerMessengerCTA variant="top" />
          </div>
        </Container>
      </header>

      {/* Main Content */}
      <main className="py-12 sm:py-16">
        <Container>
          {/* Section 1: Why Choosing the Right Lawyer Matters */}
          <section className="mb-16">
            <div className="max-w-3xl mb-8">
              <div className="flex items-center gap-2.5 text-[#E5C158] text-xs sm:text-sm font-semibold mb-2">
                <Sparkles className="w-4 h-4" />
                <span>ضرورت آگاهی حقوقی</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-black text-white leading-tight">
                چرا انتخاب وکیل متناسب و منصف سرنوشت‌ساز است؟
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-slate-900/50 border border-slate-800 p-6 space-y-3 hover:border-[#E5C158]/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#E5C158]/15 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">تخصص‌محوری در حوزه‌های متنوع</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  قوانین حقوقی و کیفری در ایران دارای ظرافت‌ها و آیین‌های دادرسی متفاوتی هستند. وکیلی که در دعاوی ملکی سال‌ها تجربه دارد ممکن است در امور جرایم مالی تخصص لازم را نداشته باشد.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-900/50 border border-slate-800 p-6 space-y-3 hover:border-[#E5C158]/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">پرهیز از هزینه‌های نامتعارف</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  وکیل منصف حق‌الوکاله را بر پایه حجم واقعی کار و توان مالی موکل تنظیم می‌کند و از تحمیل هزینه‌های گزاف یا وعده‌های بی‌پشتوانه خودداری می‌نماید.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-900/50 border border-slate-800 p-6 space-y-3 hover:border-[#E5C158]/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">پیگیری موثر در مهلت‌های قانونی</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  در دادرسی‌های قضایی، از دست دادن مهلت‌های ۲۰ روزه تجدیدنظر یا واخواهی جبران‌ناپذیر است. وکیل متعهد با برنامه‌ریزی دقیق از اتلاف فرصت‌ها جلوگیری می‌کند.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: 3-Step Process */}
          <section className="mb-16 rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-950/80 p-6 sm:p-10 relative overflow-hidden">
            <div className="max-w-2xl mb-8">
              <h2 className="text-xl sm:text-2xl font-black text-white mb-2">
                مراحل دریافت راهنمایی و معرفی وکیل
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                در ۳ گام شفاف و سریع، شرایط پرونده شما مورد ارزیابی اولیه قرار می‌گیرد:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-slate-900/80 border border-slate-800/80 p-6 space-y-3 relative">
                <span className="w-8 h-8 rounded-xl bg-[#E5C158]/20 text-[#E5C158] font-black text-sm flex items-center justify-center">
                  ۱
                </span>
                <h3 className="text-base font-bold text-white">ارتباط در پیام‌رسان</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  از طریق پیام‌رسان دلخواه خود (ایتا، روبیکا، بله، تلگرام یا واتس‌اپ) با کارشناسان ما گفتگو را آغاز کنید.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-900/80 border border-slate-800/80 p-6 space-y-3 relative">
                <span className="w-8 h-8 rounded-xl bg-[#E5C158]/20 text-[#E5C158] font-black text-sm flex items-center justify-center">
                  ۲
                </span>
                <h3 className="text-base font-bold text-white">بیان شهر و موضوع پرونده</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  شهر محل رسیدگی، مرحله دادرسی (بدوی، تجدیدنظر یا دیوان) و خلاصه موضوع دعوا را مطرح فرمایید.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-900/80 border border-slate-800/80 p-6 space-y-3 relative">
                <span className="w-8 h-8 rounded-xl bg-[#E5C158]/20 text-[#E5C158] font-black text-sm flex items-center justify-center">
                  ۳
                </span>
                <h3 className="text-base font-bold text-white">بررسی و ارتباط با وکیل منصف</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  پس از ارزیابی، وکیل متخصص در آن شهر که با شرایط و تعرفه منصفانه هماهنگ است به شما معرفی می‌شود.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Legal Practice Categories */}
          <section className="mb-16">
            <div className="max-w-2xl mb-8">
              <h2 className="text-xl sm:text-2xl font-black text-white mb-2">
                دسته‌بندی موضوعات حقوقی و تخصصی
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                راهنمایی و معرفی وکیل متناسب در تمامی شاخه‌های دعاوی دادرسی:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {legalCategories.map((cat, idx) => {
                const IconComp = cat.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-slate-900/40 border border-slate-800 p-5 hover:border-[#E5C158]/40 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-[#E5C158]/15 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-white">{cat.title}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Section 4: 31 Provincial Capitals Directory Grid */}
          <section id="provincial-capitals" className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-white">
                  دسترسی به راهنمای وکیل در ۳۱ مرکز استان ایران
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  برای مشاهده راهنمای اختصاصی شهر خود، روی نام استان یا مرکز استان کلیک کنید:
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
                  className="w-full pl-3 pr-10 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#E5C158]"
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

          {/* Section 5: FAQs */}
          <section className="mb-16 max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-2xl font-black text-white mb-2">
                پرسش‌های متداول درباره انتخاب وکیل
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                پاسخ به سوالات پرتکرار مراجعان نگارش یار
              </p>
            </div>

            <div className="space-y-3">
              {pillarFaqs.map((faq, index) => {
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
                      <span>{faq.question}</span>
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

          {/* Section 6: Bottom Messenger CTA */}
          <section className="max-w-4xl mx-auto mb-16">
            <LawyerMessengerCTA variant="bottom" />
          </section>

          {/* Section 7: Lawyer Partnership Info Banner */}
          <section className="max-w-4xl mx-auto rounded-2xl border border-blue-500/30 bg-blue-950/20 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-blue-300 font-bold text-base">
                  <Users className="w-5 h-5" />
                  <span>همکاری وکلا با سامانه نگارش یار</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                  وکلای محترم دادگستری در سراسر کشور که علاقه‌مند به دریافت ارجاع پرونده‌های متناسب با حوزه تخصصی و با رعایت موازین انصاف هستند، می‌توانند اعلام آمادگی نمایند.
                </p>
              </div>

              <Link
                href="/lawyer-partnership"
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold transition-colors shrink-0"
              >
                ثبت اطلاعات همکاری وکلا
              </Link>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}
