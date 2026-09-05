import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import {
  PenTool,
  FileText,
  Scale,
  Send,
  CheckCircle2,
  Clock,
  PhoneCall,
  MessageSquare,
  HelpCircle,
  Sparkles,
  ArrowLeft,
  Building2,
  FileCheck,
  FileSpreadsheet,
  Compass,
} from 'lucide-react';
import { ThreeServiceDiscovery } from '@/components/common/ThreeServiceDiscovery';
import { OFFICIAL_PHONE, OFFICIAL_INTL_PHONE, generateMessengerLinks } from '@/lib/messengers-links';

export const metadata: Metadata = {
  title: 'خدمات تخصصی تنظیم نامه اداری، دادخواست و اسناد حقوقی | نگارش یار',
  description:
    'تنظیم حرفه‌ای انواع نامه‌های اداری، عریضه، لوایح دفاعیه، دادخواست، شکواییه و استشهادیه کاملاً منطبق بر موازین دبیرخانه‌ای و رویه قضایی با پشتیبانی و تحویل فوری.',
  keywords: [
    'تنظیم نامه اداری',
    'عریضه نویسی',
    'تنظیم دادخواست',
    'تنظیم لایحه دفاعیه',
    'تنظیم شکواییه',
    'خدمات نگارش اداری',
    'عریضه نویسی آنلاین',
    'نامه نگاری رسمی',
    'تنظیم استشهادیه',
    'نگارش یار',
  ],
  alternates: {
    canonical: 'https://www.negaresh-yar.ir/services/document-writing',
  },
  openGraph: {
    title: 'خدمات تخصصی تنظیم نامه اداری، دادخواست و لایحه | نگارش یار',
    description:
      'تنظیم اختصاصی انواع نامه‌های اداری و اسناد قضایی توسط کارشناسان حقوقی و اداری نگارش یار به صورت کاملاً غیرحضوری و فوری.',
    url: 'https://www.negaresh-yar.ir/services/document-writing',
    siteName: 'نگارش یار',
    locale: 'fa_IR',
    type: 'website',
  },
};

const documentTypes = [
  {
    title: 'نامه‌ها و مکاتبات رسمی اداری',
    icon: Building2,
    desc: 'نامه‌های بانکی، تقسیط تسهیلات، بخشودگی جرایم، شهرداری، امور مالیاتی، اداره کار، تأمین اجتماعی، ادارات گاز، برق، آب و جهاد کشاورزی.',
    examples: ['نامه به رئیس شعبه بانک', 'عریضه کمیسیون ماده ۱۰۰ شهرداری', 'اعتراض به مالیات عملکرد و ارزش افزوده'],
    href: '/samples/administrative-letters',
  },
  {
    title: 'لوایح دفاعیه حقوقی و کیفری',
    icon: Scale,
    desc: 'لایحه دفاعیه بدوی، تجدیدنظرخواهی، فرجام‌خواهی دیوان عالی کشور، واخواهی از آرای غیابی و اعتراض به قرار منع تعقیب دادسرا.',
    examples: ['لایحه تجدیدنظرخواهی حقوقی', 'لایحه دفاع در برابر دعوای چک', 'اعتراض به قرار موقوفی یا منع تعقیب'],
    href: '/services/legal-brief',
  },
  {
    title: 'دادخواست‌های حقوقی تخصصی',
    icon: FileSpreadsheet,
    desc: 'دادخواست‌های مالی، ملکی، خانواده و اسناد تجاری مطابق با استانداردهای سامانه جامع خدمات الکترونیک قضایی (عدل ایران).',
    examples: ['دادخواست مطالبه وجه چک صیادی', 'دادخواست استرداد لاشه اسناد تجاری', 'دادخواست اعسار از محکوم‌به و هزینه دادرسی'],
    href: '/services/petition-writing',
  },
  {
    title: 'شکواییه‌های کیفری مستند',
    icon: FileText,
    desc: 'تنظیم شکواییه جرایم مالی، کلاهبرداری اینترنتی، خیانت در امانت، صدور چک بلامحل، جعل اسناد و تهدید و توهین با استناد به مواد قانون مجازات.',
    examples: ['شکواییه کلاهبرداری و تحصیل مال از طریق نامشروع', 'شکواییه خیانت در امانت اسناد', 'شکایت چک برگشتی'],
    href: '/services/appeal',
  },
  {
    title: 'عریضه‌ها و مکاتبات ویژه حکومتی',
    icon: Compass,
    desc: 'نگارش عریضه‌های معیشتی، درمانی و دادخواهی به دفتر مقام معظم رهبری، نهاد ریاست جمهوری، استانداری‌ها و سازمان بازرسی کل کشور.',
    examples: ['نامه به دفتر ارتباطات مردمی رهبری', 'نامه به مرکز ارتباطات مردمی ریاست جمهوری', 'شکایت به سازمان بازرسی'],
    href: '/services/president-letter',
  },
  {
    title: 'استشهادیه‌ها و اظهارنامه‌های رسمی',
    icon: FileCheck,
    desc: 'تنظیم استشهادیه محلی عسر و حرج، سکونت، فوت یا حوادث، همراه با متن اظهارنامه رسمی ماده ۱۵۶ قانون آیین دادرسی مدنی.',
    examples: ['استشهادیه محلی اعسار از پرداخت دین', 'اظهارنامه رسمی مطالبه طلب یا تحویل مبیع', 'استشهادیه تصرف مالکانه'],
    href: '/services/administrative-letter',
  },
];

const processSteps = [
  {
    step: '۱',
    title: 'ارسال خلاصه ماجرا و مدارک',
    desc: 'شرح وضعیت خود را به زبان ساده در یکی از پیام‌رسان‌ها (ایتا، بله، روبیکا، تلگرام، واتساپ) یا فرم درخواست برای ما ارسال کنید.',
  },
  {
    step: '۲',
    title: 'بررسی کارشناسی و تطبیق ساختار',
    desc: 'کارشناسان اداری و حقوقی نگارش یار مدارک را ارزیابی کرده و متن نامه یا سند را مطابق ضوابط سازمان گیرنده یا آیین دادرسی تدوین می‌کنند.',
  },
  {
    step: '۳',
    title: 'تحویل فایل Word و PDF + پشتیبانی',
    desc: 'متن نهایی در دو فرمت قابل ویرایش (Word) و آماده چاپ (PDF) تحویل شده و در صورت نیاز به افزودن نکته تکمیلی، بدون هزینه ویرایش می‌شود.',
  },
];

const requiredDataItems = [
  {
    title: 'مشخصات هویتی متقاضی',
    desc: 'نام و نام خانوادگی، کد ملی، شماره تماس و در اسناد قضایی، مشخصات ثبت‌شده در سامانه ثنا.',
  },
  {
    title: 'مشخصات دقیق مرجع یا طرف مقابل',
    desc: 'عنوان دقیق اداره، نام شعبه بانک، نام شعبه دادگاه/دادسرا، یا مشخصات و کد ملی شخص خوانده.',
  },
  {
    title: 'شرح واقعه به زبان ساده',
    desc: 'تاریخ‌ها، اتفاقات رخ‌داده، مبالغ، تعهدات مالی و خواسته‌ای که از آن مرجع دارید (به همان صورت عامیانه و مستند).',
  },
  {
    title: 'تصاویر یا مستندات پرونده',
    desc: 'تصویر قرارداد، فیش واریزی، ابلاغیه، برگ اخطاریه، چک یا نامه قبلی سازمان در صورت وجود.',
  },
];

const faqList = [
  {
    q: 'تفاوت متن تنظیم‌شده توسط نگارش یار با نمونه‌های آماده اینترنتی چیست؟',
    a: 'نمونه‌های آماده اینترنتی بسیار کلی هستند و اطلاعات پرونده، اعداد، تاریخ‌ها، معاذیر قانونی و شرایط خاص شما را پوشش نمی‌دهند. کارشناسان نگارش یار متن را مشخصاً بر اساس اسناد، هدف و مخاطب ویژه شما تنظیم می‌کنند تا از اتلاف وقت و رد درخواست در دبیرخانه‌ها جلوگیری شود.',
  },
  {
    q: 'مدت زمان تنظیم و تحویل متن چقدر است؟',
    a: 'اغلب نامه‌های اداری و عریضه‌ها ظرف ۲ تا ۵ ساعت کاری آماده می‌شوند. لوایح پیچیده و دادخواست‌های چندطرفه نیز معمولاً ظرف ۱۲ تا حداکثر ۲۴ ساعت پس از تکمیل مدارک تحویل متقاضی خواهند شد.',
  },
  {
    q: 'آیا برای شهرهای دیگر به جز مشهد و تهران هم خدمات دارید؟',
    a: 'بله؛ خدمات نگارش یار به صورت ۱۰۰٪ غیرحضوری از طریق پیام‌رسان‌های امن داخلی و بین‌المللی ارائه می‌شود و شهروندان محترم از تمامی استان‌ها و شهرستان‌های کشور می‌توانند سفارش خود را ثبت کنند.',
  },
  {
    q: 'چنانچه پس از تحویل نیاز به اصلاح جزییات باشد، فرآیند چگونه است؟',
    a: 'تمامی متون تنظیم‌شده توسط نگارش یار دارای پشتیبانی و بازبینی هستند. چنانچه نیاز به اصلاح جزئیات یا افزودن پیوست جدیدی باشد، کارشناس مربوطه بدون دریافت وجه اضافی اصلاحات را اعمال می‌کند.',
  },
  {
    q: 'آیا نگارش یار نتیجه قطعی در دادگاه یا ادارات را تضمین می‌کند؟',
    a: 'خیر؛ طبق موازین قانونی و اصول حرفه‌ای، هیچ مرجعی حق تضمین نتیجه رسیدگی در ادارات یا صدور رأی در محاکم را ندارد، زیرا تصمیم نهایی در اختیار مقام اداری یا قاضی پرونده است. نگارش یار متعهد به رعایت بالاترین استانداردهای نگارشی، استناد به قوانین موضوعه و تدوین دقیق و بدون نقص شکلی است.',
  },
];

export default function DocumentWritingServicePage() {
  const messengers = generateMessengerLinks('سلام، متقاضی تنظیم تخصصی نامه اداری یا سند حقوقی هستم. لطفاً راهنمایی فرمایید.');

  // JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'خدمات تنظیم نامه اداری و اسناد حقوقی نگارش یار',
    serviceType: 'Professional Administrative and Legal Document Drafting',
    provider: {
      '@type': 'LocalBusiness',
      name: 'نگارش یار',
      telephone: OFFICIAL_INTL_PHONE,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'مشهد',
        addressRegion: 'خراسان رضوی',
        addressCountry: 'IR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 36.2972,
        longitude: 59.6067,
      },
    },
    areaServed: {
      '@type': 'Country',
      name: 'Iran',
    },
    description:
      'تنظیم تخصصی انواع نامه‌های اداری، عریضه، دادخواست، شکواییه و لوایح دفاعیه منطبق بر موازین دبیرخانه‌ای و اصول دادرسی.',
  };

  return (
    <main className="min-h-screen bg-[#070B15] text-slate-200 selection:bg-[#E5C158] selection:text-[#070B15]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ---------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-800/80 bg-gradient-to-b from-[#0A101E] via-[#070B15] to-[#070B15]">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(229,193,88,0.08)_0%,transparent_70%)] pointer-events-none" />

        <Container className="relative z-10 space-y-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">
              صفحه اصلی
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">
              خدمات
            </Link>
            <span>/</span>
            <span className="text-[#E5C158]">تنظیم تخصصی اسناد و مکاتبات</span>
          </div>

          <div className="max-w-4xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>موتور اول نگارش یار: تنظیم حرفه‌ای اسناد و مکاتبات اداری و قضایی</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              تنظیم تخصصی نامه اداری، دادخواست و لایحه
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-3xl">
              یک متن نامناسب، غیرمستند یا با لحن عامیانه می‌تواند ماه‌ها پیگیری شما را در ادارات یا محاکم با بن‌بست روبه‌رو کند. متخصصین نگارش یار متن درخواست یا دفاعیه شما را کاملاً متناسب با مدارک، ضوابط سازمانی و اصول حقوقی تدوین می‌کنند.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2">
              {[
                'انطباق با فرمت دبیرخانه‌ای و عدل ایران',
                'استناد به بخشنامه‌ها و مواد قانونی',
                'پشتیبانی و امکان ویرایش تکمیلی',
                'تحویل سریع در قالب فایل Word و PDF',
              ].map((chip, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-200 flex items-center gap-2"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E5C158]" />
                  <span>{chip}</span>
                </div>
              ))}
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href="/request"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#E5C158] via-[#d4af37] to-[#E5C158] text-[#070B15] font-black text-sm hover:brightness-110 transition-all shadow-lg shadow-[#E5C158]/20"
              >
                <Send className="w-4 h-4" />
                <span>ثبت فوری درخواست نگارش</span>
              </Link>

              <a
                href={`tel:${OFFICIAL_PHONE}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-sm font-bold text-white transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#E5C158]" />
                <span>تماس مستقیم: {OFFICIAL_PHONE}</span>
              </a>

              <Link
                href="/samples/administrative-letters"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 text-xs sm:text-sm font-semibold text-slate-300 transition-colors"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>مشاهده الگوها و نمونه نامه‌ها</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-12 sm:py-16 space-y-16 lg:space-y-20">
        {/* ---------------------------------------------------- */}
        {/* 1. چه چیزی برای شما تنظیم می‌کنیم؟ */}
        {/* ---------------------------------------------------- */}
        <section id="what-we-write" className="space-y-8 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E5C158]/10 text-[#E5C158] text-xs font-bold">
              <PenTool className="w-3.5 h-3.5" />
              <span>دامنه خدمات نگارشی</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-black text-white">
              چه چیزی برای شما تنظیم می‌کنیم؟
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              از ساده‌ترین مکاتبات با شعب بانک و شهرداری تا تخصصی‌ترین لوایح قضایی دیوان عالی کشور:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {documentTypes.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl p-6 bg-slate-900/60 border border-slate-800 hover:border-[#E5C158]/40 transition-all flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="p-3 rounded-xl bg-[#E5C158]/10 text-[#E5C158] group-hover:bg-[#E5C158] group-hover:text-[#070B15] transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-semibold text-slate-500 px-2 py-0.5 rounded bg-slate-800/80">
                        سند شماره ۰{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#E5C158] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-slate-800/60">
                      <span className="text-[11px] font-bold text-slate-400 block">نمونه‌های پرتکرار:</span>
                      <ul className="space-y-1 text-xs text-slate-400">
                        {item.examples.map((ex, eIdx) => (
                          <li key={eIdx} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158]" />
                            <span>{ex}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link
                    href={item.href}
                    className="pt-3 border-t border-slate-800/80 text-xs font-bold text-[#E5C158] hover:text-[#f3d97f] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>جزئیات و ثبت سفارش</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* 2. چطور سفارش بدهم؟ */}
        {/* ---------------------------------------------------- */}
        <section id="how-to-order" className="rounded-3xl bg-slate-900/40 border border-slate-800 p-6 sm:p-10 relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto space-y-2.5 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs font-bold">
              <Clock className="w-3.5 h-3.5" />
              <span>مراحل ساده و غیرحضوری</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-black text-white">
              چطور سفارش بدهم؟ (فرآیند ۳ مرحله‌ای)
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              بدون نیاز به مراجعه حضوری یا خروج از منزل، در هر ساعت از شبانه‌روز درخواست خود را ثبت کنید:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {processSteps.map((st, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800/90 relative space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E5C158] to-[#996c15] text-[#070B15] font-black text-base flex items-center justify-center shadow-md">
                    {st.step}
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {st.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/60 text-[11px] text-slate-500">
                  مرحله {idx + 1} از ۳
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/request"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#E5C158] hover:bg-[#d8b13c] text-[#070B15] font-bold text-xs sm:text-sm transition-all shadow-md"
            >
              <span>شروع سفارش آنلاین متن</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* 3. چه اطلاعات و مدارکی لازم است؟ */}
        {/* ---------------------------------------------------- */}
        <section id="required-information" className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-bold">
              <FileCheck className="w-3.5 h-3.5" />
              <span>پیش‌نیازهای اولیه</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-black text-white">
              چه اطلاعاتی برای تنظیم متن لازم است؟
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              نیازی به اصطلاحات پیچیده حقوقی نیست؛ کافی است اطلاعات پایه زیر را در اختیار کارشناس قرار دهید:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {requiredDataItems.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#E5C158]">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <h3 className="text-sm font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <span className="text-[10px] text-slate-500 pt-2 border-t border-slate-800">
                  ضروری جهت استناد
                </span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 leading-relaxed text-center max-w-3xl mx-auto">
            <span className="text-[#E5C158] font-bold ml-1">توجه به حریم خصوصی:</span>
            تمامی تصاویر، اسناد هویتی و مدارک ارسالی شما در سامانه‌های امن نگارش یار به صورت کاملاً محرمانه نگهداری شده و پس از پایان فرآیند تنظیم و تأیید نهایی، مطابق پروتکل‌های امنیتی مدیریت می‌شوند.
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* 4. چطور با ما تماس بگیرید؟ (MESSENGERS & PHONE) */}
        {/* ---------------------------------------------------- */}
        <section id="contact-channels" className="rounded-3xl bg-gradient-to-b from-slate-900/80 to-slate-950 border border-slate-800 p-6 sm:p-10 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 text-xs font-bold">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>ارتباط مستقیم و فوری</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-black text-white">
              چطور با کارشناسان نگارش یار تماس بگیرید؟
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              از طریق پیام‌رسان دلخواه خود یا تماس مستقیم تلفنی، مدارک را ارسال و مشاوره اولیه رایگان دریافت کنید:
            </p>
          </div>

          {/* Official Phone & Location Card */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-700/80 flex flex-col md:flex-row items-center justify-between gap-5 max-w-3xl mx-auto">
            <div className="space-y-1.5 text-center md:text-right">
              <div className="text-xs text-slate-400">شماره تلفن رسمی پشتیبانی و مشاوره:</div>
              <div className="text-xl sm:text-2xl font-black text-[#E5C158] tracking-wider dir-ltr font-mono">
                {OFFICIAL_PHONE}
              </div>
              <div className="text-xs text-slate-400">
                مرکز عملیات: مشهد، خراسان رضوی | پاسخگویی به متقاضیان سراسر کشور
              </div>
            </div>

            <a
              href={`tel:${OFFICIAL_PHONE}`}
              className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md transition-all active:scale-95 shrink-0"
            >
              <PhoneCall className="w-4 h-4" />
              <span>برقراری تماس مستقیم</span>
            </a>
          </div>

          {/* Messenger Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {messengers.map((m) => (
              <a
                key={m.id}
                href={m.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all flex flex-col items-center text-center space-y-2 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-xs font-bold transition-transform group-hover:scale-105"
                  style={{ backgroundColor: m.color }}
                >
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">{m.name}</div>
                  <div className="text-[10px] text-slate-400">{m.badge}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* 5. پرسش‌های متداول (FAQ) */}
        {/* ---------------------------------------------------- */}
        <section id="faqs" className="space-y-6 max-w-3xl mx-auto">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs font-bold">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>پاسخ به ابهامات رایج</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              سوالات پرتکرار متقاضیان تنظیم اسناد
            </h2>
          </div>

          <div className="space-y-3">
            {faqList.map((item, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-2"
              >
                <h3 className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                  <span className="text-[#E5C158] font-black">{idx + 1}.</span>
                  <span>{item.q}</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed pr-5">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* THREE SERVICE DISCOVERY (Writing, Lawyer, Cafe) */}
        {/* ---------------------------------------------------- */}
        <ThreeServiceDiscovery currentService="writing" contextTitle="تنظیم متون اداری و حقوقی" />

        {/* ---------------------------------------------------- */}
        {/* FINAL CONVERSION BANNER */}
        {/* ---------------------------------------------------- */}
        <section className="rounded-3xl p-8 sm:p-12 text-center bg-gradient-to-r from-[#111A2E] via-[#0E1729] to-[#111A2E] border border-[#E5C158]/40 shadow-xl space-y-5">
          <span className="inline-block px-3 py-1 rounded-full bg-[#E5C158]/10 text-[#E5C158] text-xs font-bold">
            صرفه‌جویی در زمان و اطمینان از صحت شکلی و ماهوی متن
          </span>
          <h2 className="text-xl sm:text-3xl font-black text-white leading-tight">
            همین حالا تنظیم اختصاصی سند اداری یا قضایی خود را بسپارید
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            کارشناسان نگارش یار آماده بررسی سریع مدارک شما هستند. متن نهایی در کوتاه‌ترین زمان، با فرمت رسمی و همراه با پشتیبانی تحویل خواهد شد.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/request"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#E5C158] hover:bg-[#d8b13c] text-[#070B15] font-black text-sm transition-all shadow-lg shadow-[#E5C158]/20"
            >
              <Send className="w-4 h-4" />
              <span>ثبت سفارش آنلاین</span>
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs sm:text-sm text-slate-200 transition-colors"
            >
              <span>مشاهده اطلاعات تماس و پیام‌رسان‌ها</span>
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}
