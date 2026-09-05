'use client';

import React from 'react';
import Link from 'next/link';
import {
  FileText,
  Sparkles,
  Check,
  AlertCircle,
  ArrowLeft,
  ShieldCheck,
  Clock,
  MessageSquare,
  HelpCircle,
} from 'lucide-react';
import { generateMessengerLinks } from '@/lib/messengers-links';

interface GeneralSampleVsCustomSectionProps {
  sampleTitle: string;
  orderHref?: string;
  customMessage?: string;
}

export function GeneralSampleVsCustomSection({
  sampleTitle,
  orderHref = '/request',
  customMessage,
}: GeneralSampleVsCustomSectionProps) {
  const defaultMsg = customMessage || `سلام، درباره تنظیم اختصاصی ${sampleTitle} راهنمایی می‌خواستم.`;
  const messengers = generateMessengerLinks(defaultMsg);
  const primaryMessenger = messengers[0]; // WhatsApp

  return (
    <section
      id="general-vs-custom-section"
      className="my-8 rounded-3xl bg-gradient-to-b from-slate-900/90 to-[#0B1120] border border-slate-800 p-6 sm:p-8 lg:p-10 relative overflow-hidden text-right shadow-xl"
    >
      {/* Ambient background glow */}
      <div className="absolute -top-20 left-1/3 w-80 h-80 bg-[radial-gradient(circle_at_center,rgba(229,193,88,0.08)_0%,transparent_70%)] pointer-events-none blur-2xl" />

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center space-y-3 mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>راهنمای انتخاب هوشمندانه متن</span>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-snug">
          تفاوت نمونه متنی عمومی با تنظیم اختصاصی سند
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
          الگوی متنی بالا به رایگان در اختیار شماست تا ساختار و لحن رسمی را بشناسید. اما بسته به حساسیت موضوع، ممکن است به متنی فراتر از یک قالب از پیش‌آماده نیاز داشته باشید:
        </p>
      </div>

      {/* Section 2: Helpful Guidance Banner */}
      <div className="mb-6 p-4 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-start gap-3">
        <HelpCircle className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-sky-200/90 leading-relaxed">
          <strong className="text-sky-300 font-bold block mb-0.5">راهنمای استفاده حرفه‌ای:</strong>
          این نمونه برای آشنایی با ساختار، لحن و چارچوب کلی بسیار مفید است؛ اما متن نهایی شما باید با در نظر گرفتن وقایع واقعی، مدارک، هدف و مخاطب مشخص خودتان نگارش شود تا اثربخشی لازم را در مرجع مربوطه داشته باشد.
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-8">
        {/* Column 1: Generic Template (Free) */}
        <div className="rounded-2xl bg-slate-950/70 border border-slate-800/80 p-5 sm:p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-3 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-slate-400" />
                <h3 className="text-base sm:text-lg font-bold text-slate-200">
                  قالب متنی عمومی (رایگان)
                </h3>
              </div>
              <span className="text-[11px] font-semibold text-slate-400 px-2 py-0.5 rounded bg-slate-800/60">
                جهت آشنایی و ایده گرفتن
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              این نمونه برای موارد بسیار ساده، درخواست‌های روزمره یا شروع نگارش شخصی بسیار مفید است.
            </p>

            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>ارائه ساختار استاندارد اداری و واژگان معمول</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>دسترسی آنی و کپی رایگان بدون نیاز به ثبت‌نام</span>
              </li>
              <li className="flex items-start gap-2.5 text-amber-300/90">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>نیازمند اصلاح دستی و پر کردن دقیق تمامی نقطه‌چین‌ها</span>
              </li>
              <li className="flex items-start gap-2.5 text-amber-300/90">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>فاقد مدارک اختصاصی، گردش مالی، مواد قانونی یا شرایط ویژه شما</span>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400">
                <Check className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>نیازمند متناسب‌سازی با مدارک، مشخصات و طرف مکاتبه اختصاصی شما</span>
              </li>
            </ul>
          </div>

          <div className="pt-3 border-t border-slate-800/60 text-center">
            <span className="text-xs text-slate-400">
              مناسب برای: درخواست‌های عمومی، کم‌ریسک و شناخت قالب سند
            </span>
          </div>
        </div>

        {/* Column 2: Custom Document (Section 3: Custom Solution) */}
        <div className="rounded-2xl bg-gradient-to-b from-[#141E34] to-[#0A101D] border-2 border-[#E5C158]/50 p-5 sm:p-6 flex flex-col justify-between space-y-4 shadow-lg shadow-[#E5C158]/5 relative">
          <span className="absolute -top-3 right-5 px-3 py-0.5 rounded-full bg-[#E5C158] text-[#070B15] text-xs font-black shadow-sm">
            پیشنهاد تخصصی نگارش یار
          </span>

          <div className="space-y-4">
            <div className="flex items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#E5C158]" />
                <h3 className="text-base sm:text-lg font-bold text-white">
                  تنظیم اختصاصی توسط نگارش یار
                </h3>
              </div>
              <span className="text-[11px] font-bold text-[#E5C158] px-2 py-0.5 rounded bg-[#E5C158]/10 border border-[#E5C158]/30">
                بر اساس ماجرا و مدارک شما
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#E5C158] font-bold leading-relaxed">
              نگارش یار متن اختصاصی شما را بر اساس موضوع، مخاطب، مدارک و هدف درخواست تنظیم می‌کند.
            </p>

            <ul className="space-y-3 text-xs text-slate-200">
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>تحلیل شرح واقعه و انطباق دقیق با شرایط خاص و معاذیر قانونی شما</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>استناد به جدیدترین بخشنامه‌ها، رویه قضایی و مستندات قانونی مرتبط</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>ذکر صریح شماره نامه‌ها، قراردادها، پیوست‌ها و ادله اثباتی</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>لحن اداری یا حقوقی رسا و مستدل با رعایت کامل موازین دبیرخانه‌ای</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>پشتیبانی و امکان ویرایش تکمیلی متن تا تأیید نهایی شما</span>
              </li>
            </ul>
          </div>

          <div className="pt-3 border-t border-slate-800/80 text-center">
            <span className="text-xs text-[#E5C158] font-medium">
              مناسب برای: نامه‌های بانکی مهم، لوایح دادگاه، دادخواست‌ها و درخواست‌های حساس اداری
            </span>
          </div>
        </div>
      </div>

      {/* Direct Decision & Action Box */}
      <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="space-y-1.5 text-center sm:text-right">
          <h4 className="text-sm sm:text-base font-bold text-white">
            مشکل و هدفتان را بگویید؛ متن متناسب با آن را تنظیم می‌کنیم
          </h4>
          <p className="text-xs text-slate-400 max-w-xl">
            نگارش یار بر اساس مستندات، مدارک و طرف مکاتبه، متنی مستدل و رسمی را در کوتاه‌ترین زمان در قالب فایل متنی و PDF تحویل می‌دهد.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5 shrink-0 w-full sm:w-auto">
          <Link
            id="general-vs-custom-order-btn"
            href={orderHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#E5C158] via-[#d4af37] to-[#E5C158] text-[#070B15] font-extrabold text-xs sm:text-sm shadow-md hover:brightness-110 transition-all active:scale-[0.98]"
          >
            <span>درخواست تنظیم متن اختصاصی</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>

          <a
            id="general-vs-custom-phone-btn"
            href="tel:09915147789"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs sm:text-sm text-slate-200 font-semibold transition-colors"
          >
            <span>تماس: ۰۹۹۱۵۱۴۷۷۸۹</span>
          </a>

          {primaryMessenger && (
            <a
              id="general-vs-custom-whatsapp-btn"
              href={primaryMessenger.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center gap-2 px-3.5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs sm:text-sm text-slate-300 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>واتساپ</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
