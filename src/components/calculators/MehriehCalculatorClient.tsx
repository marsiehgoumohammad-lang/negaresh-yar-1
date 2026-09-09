'use client';

import React, { useState, useId } from 'react';
import Link from 'next/link';
import {
  calculateMehrieh,
  AVAILABLE_YEARS,
  CENTRAL_BANK_ANNUAL_CPI,
  formatToman,
} from '@/lib/calculators/legal-formulas';
import {
  Coins,
  ArrowLeft,
  CheckCircle2,
  Scale,
  Sparkles,
  ChevronDown,
} from 'lucide-react';

export function MehriehCalculatorClient() {
  const [initialAmount, setInitialAmount] = useState<string>('5000000'); // 5 میلیون تومان پیش‌فرض
  const [marriageYear, setMarriageYear] = useState<number>(1375);
  const [targetYear, setTargetYear] = useState<number>(1403);
  const [currencyUnit, setCurrencyUnit] = useState<'toman' | 'rial'>('toman');

  const amountInputId = useId();
  const marriageYearId = useId();
  const targetYearId = useId();

  // تبدیل ورودی به عدد صحیح
  const cleanNumber = parseInt(initialAmount.replace(/[^0-9]/g, ''), 10) || 0;
  const initialToman = currencyUnit === 'rial' ? Math.round(cleanNumber / 10) : cleanNumber;

  const result = calculateMehrieh(initialToman, marriageYear, targetYear);

  const displayResult =
    currencyUnit === 'rial'
      ? result.adjustedAmountToman * 10
      : result.adjustedAmountToman;

  const displayInitial = cleanNumber;
  const unitLabel = currencyUnit === 'rial' ? 'ریال' : 'تومان';

  return (
    <div className="space-y-10">
      {/* Interactive Tool Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-amber-500/15 text-amber-400 border border-amber-500/30">
              <Coins className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-white">
                محاسبه‌گر رسمی مهریه وجه نقد (شاخص بانک مرکزی)
              </h2>
              <p className="text-xs text-slate-400">
                بر اساس آیین‌نامه اجرایی تبصره الحاقی به ماده ۱۰۸۲ قانون مدنی
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

        {/* Form Inputs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Amount Input */}
          <div className="space-y-2">
            <label htmlFor={amountInputId} className="block text-xs sm:text-sm font-bold text-slate-200">
              مبلغ اولیه مهریه مندرج در عقدنامه ({unitLabel}):
            </label>
            <div className="relative">
              <input
                id={amountInputId}
                type="text"
                value={cleanNumber ? cleanNumber.toLocaleString('fa-IR') : ''}
                onChange={(e) => {
                  const val = e.target.value.replace(/[^0-9]/g, '');
                  setInitialAmount(val);
                }}
                placeholder="مثلاً ۵,۰۰۰,۰۰۰"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white font-bold text-base focus:outline-none focus:border-[#E5C158] transition-all pl-12 text-left dir-ltr"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 pointer-events-none">
                {unitLabel}
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              مبلغ وجه نقدی که دقیقاً در سند ازدواج نوشته شده است
            </p>
          </div>

          {/* Marriage Year */}
          <div className="space-y-2">
            <label htmlFor={marriageYearId} className="block text-xs sm:text-sm font-bold text-slate-200">
              سال وقوع عقد (نکاح):
            </label>
            <div className="relative">
              <select
                id={marriageYearId}
                value={marriageYear}
                onChange={(e) => setMarriageYear(Number(e.target.value))}
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
              شاخص بهای بانک مرکزی در سال عقد: {CENTRAL_BANK_ANNUAL_CPI[marriageYear]}
            </p>
          </div>

          {/* Target Year */}
          <div className="space-y-2">
            <label htmlFor={targetYearId} className="block text-xs sm:text-sm font-bold text-slate-200">
              سال محاسبه یا وصول مهریه:
            </label>
            <div className="relative">
              <select
                id={targetYearId}
                value={targetYear}
                onChange={(e) => setTargetYear(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white font-bold text-base focus:outline-none focus:border-[#E5C158] transition-all appearance-none cursor-pointer"
              >
                {AVAILABLE_YEARS.filter((y) => y >= marriageYear).map((y) => (
                  <option key={y} value={y} className="bg-slate-900 text-white">
                    سال {y} {y === 1403 ? '(سال جاری)' : ''}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            <p className="text-[11px] text-slate-400">
              شاخص بهای سال وصول: {CENTRAL_BANK_ANNUAL_CPI[targetYear]}
            </p>
          </div>
        </div>

        {/* Calculation Result Screen */}
        <div className="p-5 sm:p-7 rounded-2xl bg-gradient-to-r from-amber-950/40 via-slate-950 to-amber-950/40 border-2 border-[#E5C158]/60 shadow-xl space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                <Sparkles className="w-4 h-4" />
                <span>ارزش روز مهریه (محاسبه شده طبق قانون):</span>
              </div>
              <div className="text-2xl sm:text-4xl font-black text-[#E5C158] tracking-tight">
                {formatToman(displayResult)} <span className="text-sm sm:text-lg font-bold text-slate-300">{unitLabel}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-center">
                <div className="text-[10px] text-slate-400">ضریب افزایش تورم</div>
                <div className="text-sm sm:text-base font-extrabold text-white">
                  {formatToman(result.multiplier)} برابر
                </div>
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-center">
                <div className="text-[10px] text-slate-400">میزان افزایش نسبت به اصل</div>
                <div className="text-sm sm:text-base font-extrabold text-emerald-400">
                  + {formatToman(currencyUnit === 'rial' ? result.differenceToman * 10 : result.differenceToman)} {unitLabel}
                </div>
              </div>
            </div>
          </div>

          {/* Formula Breakdown Details */}
          <div className="pt-3 border-t border-slate-800/80 text-xs text-slate-300 leading-relaxed space-y-1.5">
            <p>
              <strong className="text-white">فرمول محاسباتی دادگاه:</strong>{' '}
              ({CENTRAL_BANK_ANNUAL_CPI[targetYear]} [شاخص سال {targetYear}]) ÷ ({CENTRAL_BANK_ANNUAL_CPI[marriageYear]} [شاخص سال {marriageYear}]) × {formatToman(displayInitial)} {unitLabel} ={' '}
              <strong className="text-[#E5C158]">{formatToman(displayResult)} {unitLabel}</strong>
            </p>
          </div>
        </div>

        {/* CTA Next Action */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800">
          <div className="flex items-center gap-3">
            <Scale className="w-5 h-5 text-[#E5C158] shrink-0" />
            <p className="text-xs sm:text-sm text-slate-200">
              برای مطالبه این مبلغ، نیاز به تنظیم <strong>دادخواست مطالبه مهریه</strong> یا <strong>تقاضای صدور اجراییه از ثبت</strong> دارید؟
            </p>
          </div>
          <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0">
            <Link
              href="/samples/mahrieh-court-petition"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#E5C158] hover:bg-[#f3d376] text-slate-950 font-black text-xs transition-colors shadow-md whitespace-nowrap"
            >
              <span>مشاهده نمونه دادخواست مهریه</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/services/mahrieh-claim"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors whitespace-nowrap"
            >
              <span>سفارش تنظیم اختصاصی</span>
            </Link>
          </div>
        </div>
      </div>

      {/* SEO & Legal Guide FAQ Section */}
      <div className="space-y-6">
        <h3 className="text-xl sm:text-2xl font-black text-white">
          راهنمای حقوقی و نکات کلیدی محاسبه مهریه به نرخ روز
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2.5">
            <h4 className="text-sm sm:text-base font-bold text-[#E5C158] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>مبنای قانونی محاسبه مهریه به نرخ روز چیست؟</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              مطابق تبصره الحاقی به ماده ۱۰۸۲ قانون مدنی (مصوب ۱۳۷۶): چنانچه مهریه وجه رایج باشد، متناسب با تغییر شاخص قیمت سالانه زمان تادیه نسبت به سال وقوع عقد که توسط بانک مرکزی جمهوری اسلامی ایران تعیین می‌گردد محاسبه و پرداخت خواهد شد.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2.5">
            <h4 className="text-sm sm:text-base font-bold text-[#E5C158] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>آیا مهریه سکه طلا هم مشمول تعدیل با شاخص می‌شود؟</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              خیر؛ محاسبه بر اساس شاخص تورم فقط برای مهریه با وجه رایج (تومان و ریال) است. مهریه سکه طلا (بهار آزادی، امامی، سکه پهلوی) عین مال است و زوجه مستحق دریافت خود سکه طلا یا قیمت روز آن در بازار در زمان وصول خواهد بود.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2.5">
            <h4 className="text-sm sm:text-base font-bold text-[#E5C158] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>مهریه در صورت فوت زوج چگونه محاسبه می‌شود؟</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              بر اساس ماده ۳ آیین‌نامه اجرایی، در صورت فوت زوج، مبنای محاسبه تاریخ فوت زوج خواهد بود؛ یعنی شاخص سال فوت شوهر تقسیم بر شاخص سال عقد ضربدر مبلغ اولیه مهریه می‌شود. مهریه از ترکه متوفی قبل از تقسیم ارث کسر می‌گردد.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2.5">
            <h4 className="text-sm sm:text-base font-bold text-[#E5C158] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>مراحل وصول مهریه از اجرای ثبت و دادگاه</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              مطابق قانون برنامه ششم، زوجه ابتدا باید از طریق دفترخانه محل ثبت ازدواج و اداره اجرای اسناد رسمی ثبت اقدام به صدور اجراییه و توقیف اموال (خودرو، ملک، حساب بانکی) نماید و در صورت عدم دستیابی به مال، پرونده به دادگاه ارسال خواهد شد.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
