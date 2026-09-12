'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, CheckCircle2, ChevronLeft, Eye } from 'lucide-react';
import { Container } from '../ui/container';

const popularSamples = [
  { title: 'درخواست مساعدت مالی', href: '/samples/relief-foundation-letter', tag: 'حمایتی' },
  { title: 'درخواست انتقالی و جابجایی', href: '/samples/education-office-letter', tag: 'آموزش و پرورش' },
  { title: 'درخواست مرخصی استحقاقی/استعلاجی', href: '/samples/administrative-letter', tag: 'اداری و کارگری' },
  { title: 'اعتراض به جریمه و تخلفات', href: '/samples/discretionary-punishments-letter', tag: 'تعزیرات و تخلفات' },
  { title: 'درخواست وام و تسهیلات بانکی', href: '/samples/bank-loan-request', tag: 'بانک‌ها' },
  { title: 'درخواست استخدام و همکاری', href: '/samples/administrative-letter', tag: 'استخدامی' },
  { title: 'درخواست پروانه و امور شهرداری', href: '/samples/municipality-letter', tag: 'شهرداری' },
];

export function RealSamplePreview() {
  return (
    <section className="bg-[#070B15] py-16 sm:py-20 text-white relative">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-3">
            قبل از اینکه درخواست بدهی، نمونه‌ها را ببین.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            نمونه نامه‌های واقعی برای موقعیت‌های مختلف؛ برای اینکه هم ایده بگیری، هم بدانی چه متنی مناسب درخواستت است.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto mb-10">
          
          {/* Main Featured Sample Document Box (7 cols on lg) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#FCFBF8] text-slate-900 p-6 sm:p-8 shadow-2xl border border-amber-200/60 relative overflow-hidden text-right">
              
              {/* Header Meta */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-200 text-xs text-stone-500">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-stone-900 text-xs sm:text-sm">نگارشیار</span>
                  <span className="text-stone-300">|</span>
                  <span className="bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded text-[10px]">
                    نمونه رسمی و استاندارد
                  </span>
                </div>
                <span className="text-[11px] text-stone-400 font-mono">
                  دسته‌بندی: مکاتبات بانکی
                </span>
              </div>

              {/* Document Subject & Addressee */}
              <div className="mb-4 space-y-1.5 text-xs sm:text-sm">
                <p className="text-stone-700">
                  <strong className="text-stone-900">مخاطب:</strong> ریاست محترم بانک — شعبه و دایره اعتبارات
                </p>
                <p className="text-stone-800 font-bold text-sm sm:text-base pt-1 flex items-center gap-1.5">
                  <span className="text-[#B38A19]">موضوع:</span>
                  <span>درخواست تقسیط بدهی و استمهال وام معوق</span>
                </p>
              </div>

              {/* Sample Content Lines */}
              <div className="space-y-3 text-xs sm:text-[13px] text-stone-700 leading-relaxed text-justify bg-stone-50 p-4 rounded-xl border border-stone-200/70">
                <p className="font-bold text-stone-900">
                  با سلام و احترام؛
                </p>
                <p>
                  به استحضار می‌رساند اینجانب متقاضی تسهیلات شماره [...]، تا پیش از بروز مشکلات اقتصادی اخیر همواره اقساط خود را در موعد مقرر و با تعهد کامل تسویه نموده‌ام.
                </p>
                <p>
                  متاسفانه به دلایل قهری و خارج از اختیار که اسناد مثبته آن به پیوست تقدیم می‌گردد، جریان نقدینگی اینجانب دچار وقفه موقت گردیده است. با توجه به قصد قطعی جهت ادای دین، خواهشمند است با استناد به بخشنامه‌های اممهال بانک مرکزی، با تقسیط باقیمانده اصل و سود و اعطای مهلت موافقت فرمایید.
                </p>
              </div>

              {/* Formal Closing */}
              <div className="mt-5 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs border-t border-stone-200">
                <div className="flex items-center gap-2 text-stone-600 text-[11px]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>تنظیم‌شده با لحن موجه، مستند و بدون ابهام</span>
                </div>
                <span className="text-stone-500 font-medium">با تجدید احترام و سپاس — [امضاء متقاضی]</span>
              </div>

              {/* Link to Full Sample Page */}
              <div className="mt-5">
                <Link
                  href="/samples/bank-debt-installment"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-all"
                >
                  <Eye className="w-4 h-4 text-[#E5C158]" />
                  <span>مشاهده نمونه کامل و دانلود متن</span>
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>

          {/* Quick List of Popular Real Samples (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-3">
            <div className="space-y-2.5">
              <h3 className="text-sm font-bold text-slate-300 mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#E5C158]" />
                <span>سایر نمونه‌های پرکاربرد آماده</span>
              </h3>

              {popularSamples.map((sample, idx) => (
                <Link
                  key={idx}
                  href={sample.href}
                  className="flex items-center justify-between p-3 rounded-xl bg-[#0D1424] hover:bg-[#121A2D] border border-slate-800 hover:border-[#E5C158]/40 transition-all text-right group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158]/70 group-hover:bg-[#E5C158] transition-colors" />
                    <span className="text-xs sm:text-sm font-bold text-slate-200 group-hover:text-[#E5C158] transition-colors">
                      {sample.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/50">
                      {sample.tag}
                    </span>
                    <ChevronLeft className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:-translate-x-0.5 transition-all" />
                  </div>
                </Link>
              ))}
            </div>

            {/* View All Samples CTA */}
            <div className="pt-2">
              <Link
                href="/samples"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#162036] hover:bg-[#1D2B4A] text-slate-200 hover:text-white font-bold text-xs sm:text-sm border border-slate-700 hover:border-[#E5C158]/50 transition-all"
              >
                <span>مشاهده همه نمونه‌ها در بانک اسناد</span>
                <ArrowLeft className="w-4 h-4 text-[#E5C158]" />
              </Link>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
