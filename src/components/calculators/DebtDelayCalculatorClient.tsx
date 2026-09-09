'use client';

import React, { useState, useId } from 'react';
import Link from 'next/link';
import {
  calculateDebtDelay,
  AVAILABLE_YEARS,
  CENTRAL_BANK_ANNUAL_CPI,
  formatToman,
} from '@/lib/calculators/legal-formulas';
import {
  TrendingUp,
  ArrowLeft,
  Scale,
  ChevronDown,
  ShieldCheck,
} from 'lucide-react';

export function DebtDelayCalculatorClient() {
  const [principalAmount, setPrincipalAmount] = useState<string>('50000000'); // 50 میلیون تومان پیش‌فرض
  const [dueYear, setDueYear] = useState<number>(1398);
  const [settlementYear, setSettlementYear] = useState<number>(1403);
  const [currencyUnit, setCurrencyUnit] = useState<'toman' | 'rial'>('toman');

  const principalInputId = useId();
  const dueYearId = useId();
  const settlementYearId = useId();

  const cleanNumber = parseInt(principalAmount.replace(/[^0-9]/g, ''), 10) || 0;
  const principalToman = currencyUnit === 'rial' ? Math.round(cleanNumber / 10) : cleanNumber;

  const result = calculateDebtDelay(principalToman, dueYear, settlementYear);

  const displayTotal =
    currencyUnit === 'rial' ? result.totalAmountToman * 10 : result.totalAmountToman;
  const displayPenalty =
    currencyUnit === 'rial' ? result.delayPenaltyToman * 10 : result.delayPenaltyToman;
  const displayPrincipal = cleanNumber;
  const unitLabel = currencyUnit === 'rial' ? 'ریال' : 'تومان';

  return (
    <div className="space-y-10">
      {/* Interactive Form Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-blue-500/15 text-blue-400 border border-blue-500/30">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-white">
                محاسبه‌گر رسمی خسارت تاخیر تادیه دین و بدهی
              </h2>
              <p className="text-xs text-slate-400">
                بر اساس ماده ۵۲۲ قانون آیین دادرسی دادگاه‌های عمومی و انقلاب در امور مدنی
              </p>
            </div>
          </div>

          {/* Unit Switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800 shrink-0">
            <button
              type="button"
              onClick={() => setCurrencyUnit('toman')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currencyUnit === 'toman'
                  ? 'bg-[#E5C158] text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              تومان
            </button>
            <button
              type="button"
              onClick={() => setCurrencyUnit('rial')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currencyUnit === 'rial'
                  ? 'bg-[#E5C158] text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              ریال
            </button>
          </div>
        </div>

        {/* Inputs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Principal Amount */}
          <div className="space-y-2">
            <label htmlFor={principalInputId} className="block text-xs sm:text-sm font-bold text-slate-200">
              اصل مبلغ بدهی / چک / سفته ({unitLabel}):
            </label>
            <div className="relative">
              <input
                id={principalInputId}
                type="text"
                value={cleanNumber ? cleanNumber.toLocaleString('fa-IR') : ''}
                onChange={(e) => {
                  const val = e.target.value.replace(/[^0-9]/g, '');
                  setPrincipalAmount(val);
                }}
                placeholder="مثلاً ۵۰,۰۰۰,۰۰۰"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white font-bold text-base focus:outline-none focus:border-[#E5C158] transition-all pl-12 text-left dir-ltr"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 pointer-events-none">
                {unitLabel}
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              مبلغ اصل بدهی بدون احتساب خسارت دیرکرد
            </p>
          </div>

          {/* Due Year */}
          <div className="space-y-2">
            <label htmlFor={dueYearId} className="block text-xs sm:text-sm font-bold text-slate-200">
              سال سررسید یا مطالبه قانونی:
            </label>
            <div className="relative">
              <select
                id={dueYearId}
                value={dueYear}
                onChange={(e) => setDueYear(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white font-bold text-base focus:outline-none focus:border-[#E5C158] transition-all appearance-none cursor-pointer"
              >
                {AVAILABLE_YEARS.map((y) => (
                  <option key={y} value={y} className="bg-slate-900 text-white">
                    سال {y}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            <p className="text-[11px] text-slate-400">
              تاریخ سررسید چک، موعد سند یا ابلاغ اظهارنامه
            </p>
          </div>

          {/* Settlement Year */}
          <div className="space-y-2">
            <label htmlFor={settlementYearId} className="block text-xs sm:text-sm font-bold text-slate-200">
              سال وصول / تادیه بدهی:
            </label>
            <div className="relative">
              <select
                id={settlementYearId}
                value={settlementYear}
                onChange={(e) => setSettlementYear(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white font-bold text-base focus:outline-none focus:border-[#E5C158] transition-all appearance-none cursor-pointer"
              >
                {AVAILABLE_YEARS.filter((y) => y >= dueYear).map((y) => (
                  <option key={y} value={y} className="bg-slate-900 text-white">
                    سال {y} {y === 1403 ? '(سال جاری)' : ''}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            <p className="text-[11px] text-slate-400">
              شاخص بهای سال تادیه: {CENTRAL_BANK_ANNUAL_CPI[settlementYear]}
            </p>
          </div>
        </div>

        {/* Results Screen */}
        <div className="p-5 sm:p-7 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-950 to-blue-950/40 border-2 border-blue-500/50 shadow-xl space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4 border-b border-slate-800">
            <div>
              <div className="text-xs text-slate-400">اصل مبلغ دین:</div>
              <div className="text-base sm:text-lg font-bold text-white">
                {formatToman(displayPrincipal)} {unitLabel}
              </div>
            </div>

            <div>
              <div className="text-xs text-amber-400 font-bold">خسارت تاخیر تادیه (دیرکرد):</div>
              <div className="text-base sm:text-lg font-black text-amber-400">
                + {formatToman(displayPenalty)} {unitLabel}
              </div>
            </div>

            <div>
              <div className="text-xs text-emerald-400 font-bold">مجموع کل قابل مطالبه:</div>
              <div className="text-xl sm:text-2xl font-black text-emerald-400">
                {formatToman(displayTotal)} {unitLabel}
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-300 leading-relaxed">
            <p>
              <strong className="text-white">فرمول محاسباتی ماده ۵۲۲:</strong>{' '}
              ({CENTRAL_BANK_ANNUAL_CPI[settlementYear]} [شاخص زمان تادیه]) ÷ ({CENTRAL_BANK_ANNUAL_CPI[dueYear]} [شاخص زمان سررسید]) × {formatToman(displayPrincipal)} ={' '}
              <strong className="text-emerald-400">{formatToman(displayTotal)} {unitLabel}</strong>
            </p>
          </div>
        </div>

        {/* CTA Next Action */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800">
          <div className="flex items-center gap-3">
            <Scale className="w-5 h-5 text-[#E5C158] shrink-0" />
            <p className="text-xs sm:text-sm text-slate-200">
              آیا مایل به تنظیم دادخواست رسمی <strong>مطالبه وجه به انضمام خسارت تاخیر تادیه</strong> و خسارات دادرسی هستید؟
            </p>
          </div>
          <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0">
            <Link
              href="/samples/sayad-check-claim-petition"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#E5C158] hover:bg-[#f3d376] text-slate-950 font-black text-xs transition-colors shadow-md whitespace-nowrap"
            >
              <span>نمونه دادخواست چک صیادی</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/services/check-claim"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors whitespace-nowrap"
            >
              <span>سفارش تنظیم دادخواست</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Guide FAQs */}
      <div className="space-y-6">
        <h3 className="text-xl sm:text-2xl font-black text-white">
          شروط قانونی دریافت خسارت تاخیر تادیه (ماده ۵۲۲ قانون آیین دادرسی مدنی)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h4 className="text-sm sm:text-base font-bold text-blue-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>شرط اول: موضوع دین وجه رایج (پول نقد) باشد</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              خسارت تاخیر تادیه تنها به دیونی تعلق می‌گیرد که موضوع آن پول نقد ایرانی باشد. در مورد تعهدات غیرپولی، تحویل کالا، طلا یا ارز، احکام خسارت عدم انجام تعهد جاری است.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h4 className="text-sm sm:text-base font-bold text-blue-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>شرط دوم: مطالبه رسمی توسط داین (طلبکار)</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              در چک‌های بانکی، تاریخ گواهی عدم پرداخت (برگشت زدن چک) تاریخ مطالبه محسوب می‌شود. اما در مورد سفته و دیون عادی، ارسال اظهارنامه رسمی یا ثبت دادخواست ملاک شروع محاسبه است.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h4 className="text-sm sm:text-base font-bold text-blue-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>شرط سوم: تمکن مدیون و امتناع از پرداخت</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              بدهکار باید با وجود توانایی مالی از پرداخت خودداری کرده باشد. اگر بدهکار حکم اعسار گرفته باشد، خسارت تاخیر تادیه تا زمان صدور حکم اعسار یا طبق رای دادگاه متوقف می‌شود.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h4 className="text-sm sm:text-base font-bold text-blue-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>شرط چهارم: تغییر فاحش قیمت سالانه (تورم)</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              تغییر قیمت بر اساس شاخص تورم اعلامی بانک مرکزی اثبات می‌شود که با اعمال شاخص در فرمول دادگستری، خسارت به صورت دقیق و روزشمار یا سال‌شمار در حکم دادگاه قید می‌گردد.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
