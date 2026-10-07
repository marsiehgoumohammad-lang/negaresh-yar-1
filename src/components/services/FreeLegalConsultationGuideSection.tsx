'use client';

import React from 'react';
import Link from 'next/link';
import {
  MessageCircle,
  ShieldCheck,
  FileText,
  Clock,
  ChevronLeft,
  Building,
  Users,
  CreditCard,
  FileSignature,
  Gavel,
  Mail,
  AlertCircle,
  CheckCircle2,
  MapPin,
} from 'lucide-react';
import { generateMessengerLinks, OFFICIAL_PHONE } from '@/lib/messengers-links';

export function FreeLegalConsultationGuideSection() {
  const defaultConsultationMessage =
    'سلام. برای دریافت مشاوره حقوقی اولیه و بررسی پرونده پیام می دهم. موضوع سوال من: ';
  const messengers = generateMessengerLinks(defaultConsultationMessage);

  const topics = [
    {
      id: 'real-estate',
      title: 'دعاوی ملکی و سرقفلی',
      desc: 'الزام به تنظیم سند، تخلیه، مشارکت در ساخت و سرقفلی',
      icon: Building,
      href: '/services/real-estate-lawyer',
      badge: 'ملکی',
    },
    {
      id: 'family',
      title: 'امور خانواده و مهریه',
      desc: 'تعدیل اقساط مهریه، طلاق توافقی، حضانت فرزند و نفقه',
      icon: Users,
      href: '/services/family-lawyer',
      badge: 'خانواده',
    },
    {
      id: 'check',
      title: 'چک صیادی و اسناد تجاری',
      desc: 'صدور اجراییه مستقیم ماده ۲۳، توقیف حساب و سفته',
      icon: CreditCard,
      href: '/knowledge/check-guide',
      badge: 'چک',
    },
    {
      id: 'contracts',
      title: 'قراردادها و تعهدات مالی',
      desc: 'تنظیم، بازبینی، فسخ و مطالبه خسارت تاخیر تادیه',
      icon: FileSignature,
      href: '/services/contract-drafting',
      badge: 'قرارداد',
    },
    {
      id: 'court-verdict',
      title: 'ابلاغیه ثنا و دادنامه دادگاه',
      desc: 'تفسیر مفاد رای، محاسبه مواعد تجدیدنظر و واخواهی',
      icon: Mail,
      href: '/services/court-document-explainer',
      badge: 'ابلاغیه',
    },
    {
      id: 'criminal',
      title: 'دعاوی کیفری و دادسرا',
      desc: 'کلاهبرداری، خیانت در امانت، سرقت و قرارهای تامین',
      icon: Gavel,
      href: '/knowledge/criminal-court-jurisdiction-guide',
      badge: 'کیفری',
    },
  ];

  const whatToSendItems = [
    {
      title: '۱. خلاصه شرح مسئله یا ماجرا',
      desc: 'به طور خلاصه و شفاف بیان کنید که چه اتفاقی افتاده، خواسته شما چیست و طرف مقابل چه اقدامی انجام داده است.',
    },
    {
      title: '۲. مرجع رسیدگی و شهر پرونده',
      desc: 'اگر پرونده ای در شورای حل اختلاف، دادسرا، دادگاه یا اداره اجرای ثبت دارید، نام شهر و شعبه را ذکر نمایید.',
    },
    {
      title: '۳. تاریخ ها و مواعد مهم',
      desc: 'تاریخ دریافت آخرین ابلاغیه ثنا، تاریخ جلسه دادگاه یا تاریخ برگشت خوردن چک را حتما بنویسید.',
    },
    {
      title: '۴. تصویر خوانا از سند یا ابلاغیه',
      desc: 'در صورت تمایل، عکس واضحی از برگه رای، ابلاغیه یا قرارداد بفرستید تا دقیق تر بررسی شود.',
    },
  ];

  return (
    <div className="space-y-12 sm:space-y-16" dir="rtl">
      {/* ---------------------------------------------------- */}
      {/* 1. DIRECT MESSENGERS BOX (MOBILE-FIRST ANCHOR) */}
      {/* ---------------------------------------------------- */}
      <section
        id="consultation-messengers"
        className="rounded-2xl sm:rounded-3xl border border-[#E5C158]/40 bg-gradient-to-b from-[#0D1527] to-[#070B15] p-5 sm:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)] relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle_at_top_right,rgba(229,193,88,0.12)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#E5C158]/15 border border-[#E5C158]/40 flex items-center justify-center text-[#E5C158] flex-shrink-0">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-black text-white">
                  ارتباط مستقیم و ارسال پیام در پیام رسان ها
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                  پیام رسان دلخواه خود را انتخاب کنید تا صفحه چت پشتیبانی باز شود
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 self-start sm:self-auto px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>پشتیبانی فعال روزانه</span>
            </div>
          </div>

          {/* Messenger Action Buttons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {messengers.map((m) => (
              <a
                key={m.id}
                href={m.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={m.ariaLabel}
                className="group flex items-center justify-between p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-[#E5C158]/50 transition-all duration-200 active:scale-[0.98]"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm text-white shadow-sm transition-transform group-hover:scale-105"
                    style={{ backgroundColor: m.color }}
                  >
                    {m.name.slice(0, 1)}
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-white group-hover:text-[#E5C158] transition-colors">
                      {m.name}
                    </div>
                    <div className="text-xs text-slate-400">{m.badge}</div>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-[#E5C158] group-hover:bg-slate-700 transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>

          {/* Quick Notice under messengers */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#E5C158] flex-shrink-0" />
              <span>
                بررسی اولیه پیام ها و تصاویر مدارک به صورت رایگان انجام می شود.
              </span>
            </div>
            <div className="text-slate-400 text-xs">
              تلفن پشتیبانی اداری:{' '}
              <a
                href={`tel:${OFFICIAL_PHONE}`}
                className="text-[#E5C158] font-bold dir-ltr hover:underline"
              >
                {OFFICIAL_PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. TOPIC SELECTOR GRID */}
      {/* ---------------------------------------------------- */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-2xl font-black text-white">
              موضوعات قابل طرح در مشاوره حقوقی اولیه
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              موضوع سوال خود را انتخاب کنید یا مستقیما در پیام رسان ها ارسال فرمایید
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {topics.map((t) => {
            const IconComp = t.icon;
            return (
              <Link
                key={t.id}
                href={t.href}
                className="group flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/90 hover:border-[#E5C158]/40 transition-all duration-200"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center text-[#E5C158] group-hover:bg-[#E5C158]/15 group-hover:border-[#E5C158]/40 transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {t.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#E5C158] transition-colors">
                      {t.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mt-1">
                      {t.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 group-hover:text-slate-200">
                  <span>مشاهده جزئیات و خدمات مرتبط</span>
                  <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. WHAT TO SEND & PRIVACY NOTICE */}
      {/* ---------------------------------------------------- */}
      <section className="rounded-2xl sm:rounded-3xl bg-slate-900/50 border border-slate-800/80 p-5 sm:p-7 space-y-6">
        <div>
          <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#E5C158]" />
            <span>چه اطلاعاتی را هنگام ارسال سوال بفرستید؟</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            ارائه این موارد به کارشناسان ما کمک می کند در کوتاه ترین زمان، پاسخ دقیق تری ارائه دهند
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {whatToSendItems.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1.5"
            >
              <h3 className="text-sm font-bold text-slate-200">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Privacy & Safety Callout Box */}
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 text-right">
          <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs leading-relaxed text-amber-200">
            <div className="font-bold text-amber-300">
              نکته مهم امنیتی پیرامون حفظ حریم خصوصی:
            </div>
            <p>
              لطفا از ارسال اطلاعات محرمانه غیرضروری نظیر رمز عبور شخصی سامانه ثنا، رمز کارت های بانکی، اطلاعات هویتی نامرتبط یا عکس های خصوصی اکیدا خودداری فرمایید. برای بررسی پرونده صرفا متن تصمیم قضایی و شرح ماجرا کفایت می کند.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 4. DEFINE FREE CONSULTATION SCOPE & WHEN NOT ENOUGH */}
      {/* ---------------------------------------------------- */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Scope Box */}
        <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>محدوده مشاوره اولیه رایگان</span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-white">
            بررسی اولیه رایگان شامل چه مواردی است؟
          </h3>

          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158] mt-2 flex-shrink-0" />
              <span>فهم دقیق موضوع و ابعاد حقوقی ماجرا</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158] mt-2 flex-shrink-0" />
              <span>بررسی اولیه مواعد و تاریخ های مهم بر اساس اطلاعات و مدارک ارسالی</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158] mt-2 flex-shrink-0" />
              <span>تشخیص اینکه آیا پرونده با تنظیم لایحه حل می شود یا نیاز به وکیل دارد</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158] mt-2 flex-shrink-0" />
              <span>معرفی نمونه دادخواست ها و مقالات آموزشی مرتبط در سایت</span>
            </li>
          </ul>
        </div>

        {/* When Consultation is not enough */}
        <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
            <Clock className="w-3.5 h-3.5" />
            <span>چه زمانی مشاوره اولیه کافی نیست؟</span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-white">
            اقدامات تکمیلی که نیازمند خدمات تخصصی است
          </h3>

          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
              <span>نگارش اختصاصی دادخواست، شکواییه یا لوایح دفاعیه مستدل و استناد به مواد قانونی</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
              <span>تدوین و بازبینی قراردادهای چندجانبه، مشارکت در ساخت یا توافق نامه های مالی</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
              <span>اعلام وکالت رسمی و حضور فیزیکی در جلسات رسیدگی دادگاه های کیفری یک و دیوان عالی</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
              <span>ارجاع به وکیل پایه یک دادگستری در صورت پیچیدگی پرونده از طریق بخش معرفی وکیل</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 5. NATIONWIDE COVERAGE SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="rounded-2xl sm:rounded-3xl bg-slate-950 border border-slate-800 p-5 sm:p-7 space-y-4 text-right">
        <div className="flex items-center gap-2 text-sm font-bold text-[#E5C158]">
          <MapPin className="w-4 h-4" />
          <span>مشاوره حقوقی آنلاین از سراسر ایران</span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-white">
          دسترسی یکسان شهروندان در تمامی استان ها به خدمات اداری و حقوقی
        </h3>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          فرقی نمی کند پرونده شما در کدام مرجع قضایی کشور در جریان باشد؛ خدمات نگارش یار به صورت تمام الکترونیک و از طریق بستر پیام رسان ها ارائه می شود. شما می توانید مدارک خود را از سراسر ایران بدون نیاز به رفت و آمد ارسال کرده و راهنمایی اولیه دریافت فرمایید.
        </p>

        <div className="pt-2">
          <Link
            href="/lawyer-referral"
            className="inline-flex items-center gap-1.5 text-xs text-[#E5C158] hover:underline font-bold"
          >
            <span>مشاهده راهنمای انتخاب وکیل منصف در ۳۱ مرکز استان کشور</span>
            <ChevronLeft className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
