'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import {
  Users,
  ShieldCheck,
  Scale,
  Lock,
  MessageCircle,
  Briefcase,
} from 'lucide-react';
import { generateMessengerLinks, OFFICIAL_PHONE } from '@/lib/messengers-links';

export function LawyerPartnershipTemplate() {
  const partnerMessage =
    'سلام. وکیل دادگستری هستم و مایل به بررسی شرایط همکاری و دریافت ارجاع پرونده در نگارش یار می‌باشم.';
  const messengers = generateMessengerLinks(partnerMessage);

  const baseUrl = 'https://negaresh-yar.ir';
  const pageUrl = `${baseUrl}/lawyer-partnership`;

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
        name: 'همکاری با وکلا',
        item: pageUrl,
      },
    ],
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'همکاری با وکلای دادگستری در سراسر کشور | سامانه نگارش یار',
    description:
      'دعوت به همکاری از وکلای پایه یک دادگستری در سراسر ایران جهت ارجاع هدفمند پرونده‌ها در زمینه‌های تخصصی با حفظ محرمانگی و انصاف مالی.',
    url: pageUrl,
    inLanguage: 'fa-IR',
    isPartOf: {
      '@type': 'WebSite',
      name: 'نگارش یار',
      url: baseUrl,
    },
  };

  return (
    <div className="min-h-screen bg-[#070B15] text-slate-100 selection:bg-[#E5C158]/30 selection:text-white" dir="rtl">
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* Header / Hero */}
      <header className="relative pt-8 pb-14 sm:pt-14 sm:pb-20 border-b border-slate-800/80 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(59,130,246,0.08)_0%,transparent_70%)] pointer-events-none" />

        <Container>
          <nav aria-label="مسیر راهنما" className="mb-6">
            <ol className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-[#E5C158] transition-colors">
                  صفحه اصلی
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-600">/</li>
              <li className="text-[#E5C158] font-medium" aria-current="page">
                همکاری با وکلا
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-semibold mb-4">
              <Users className="w-4 h-4" />
              <span>شبکه تخصصی وکلای متعهد و منصف</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-4">
              همکاری با وکلای دادگستری در سراسر کشور
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              سامانه نگارش یار از وکلای پایه یک دادگستری در تمامی ۳۱ استان کشور که در حوزه‌های تخصصی ملکی، کیفری، خانواده، اسناد تجاری و دیوان عدالت اداری فعالیت دارند و به موازین انصاف مالی و صداقت حرفه‌ای پایبندند، دعوت به همکاری می‌نماید.
            </p>

            {/* Privacy Guarantee Box */}
            <div className="rounded-2xl border border-blue-500/30 bg-blue-950/20 p-5 sm:p-6 backdrop-blur-sm shadow-sm mb-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-sm sm:text-base font-bold text-blue-300 mb-1">
                    اصل حفظ محرمانگی و عدم انتشار عمومی اطلاعات وکلا
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    نگارش یار یک دایرکتوری عمومی یا وب‌سایت تبلیغات وکالت نیست. اطلاعات، رزومه و مشخصات تماس همکاران وکیل صرفاً جهت ارزیابی داخلی، تطبیق با موضوعات تخصصی پرونده‌های مراجعان و ارجاع مستقیم نگهداری شده و به هیچ عنوان به صورت عمومی منتشر نخواهد شد.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* Main Content */}
      <main className="py-12 sm:py-16">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Value Pillars for Lawyers */}
            <section className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="rounded-2xl bg-slate-900/50 border border-slate-800 p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#E5C158]/15 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">ارجاع هدفمند بر اساس تخصص</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  پرونده‌ها پس از تحلیل دقیق موضوع دعوا و شهر مربوطه، صرفاً به وکلایی ارجاع می‌شوند که در آن شاخه حقوقی متمرکز هستند.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-900/50 border border-slate-800 p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">انصاف و قرارداد مستقیم</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  روابط مالی و تنظیم قرارداد وکالت مستقیماً میان وکیل و موکل در بستر سامانه ثنا و بر اساس تعرفه‌های مصوب یا توافق قانونی انجام می‌گیرد.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-900/50 border border-slate-800 p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">بدون اتلاف وقت و تبلیغات</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  ارتباط موکلان با پرونده‌های واقعی و پالایش‌شده انجام می‌پذیرد و وکلا درگیر تماس‌های نامرتبط نخواهند شد.
                </p>
              </div>
            </section>

            {/* How cooperation works */}
            <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 space-y-6">
              <h2 className="text-xl font-bold text-white">
                نحوه آغاز همکاری و اعلام آمادگی
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  جهت پیوستن به شبکه همکاران نگارش یار، کافی است از طریق یکی از پیام‌رسان‌های زیر پیام ارسال فرمایید و اطلاعات زیر را در قالب یک پیام ارسال نمایید:
                </p>
                <ul className="space-y-2 pr-4 list-disc text-slate-200">
                  <li>نام و نام خانوادگی و شماره پروانه وکالت (کانون وکلا یا مرکز وکلا)</li>
                  <li>شهر و استان محل اشتغال دادرسی</li>
                  <li>حوزه‌های تخصصی اصلی (مثلاً ملکی، دعاوی کیفری اقتصادی، خانواده، دیوان عدالت)</li>
                  <li>رویکرد و تمایل شما در خصوص حق‌الوکاله منصفانه یا شرایط تقسیط</li>
                </ul>
              </div>

              {/* Messenger Action Box */}
              <div className="rounded-2xl border border-slate-700 bg-slate-950/80 p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-[#E5C158]" />
                  <h3 className="text-base font-bold text-white">
                    ارسال پیام به واحد هماهنگی و پذیرش وکلا:
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {messengers.map((m) => (
                    <a
                      key={m.id}
                      href={m.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs sm:text-sm font-bold text-white border border-slate-700 transition-colors"
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: m.color }}
                      />
                      <span>{m.name}</span>
                    </a>
                  ))}
                </div>

                <div className="pt-2 text-center text-xs text-slate-400">
                  همچنین امکان تماس مستقیم با شماره تلفن{' '}
                  <a href={`tel:${OFFICIAL_PHONE}`} className="text-[#E5C158] font-bold">
                    {OFFICIAL_PHONE}
                  </a>{' '}
                  وجود دارد.
                </div>
              </div>
            </section>
          </div>
        </Container>
      </main>
    </div>
  );
}
