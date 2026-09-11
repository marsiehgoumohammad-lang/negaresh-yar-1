'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  OFFICIAL_DIYA_RATES,
  LEGAL_INJURY_TYPES,
  BONE_FRACTURE_TYPES,
  BODY_ORGAN_DIYA_LIST,
  calculateDiyaAmount,
  formatToman,
  toEnglishDigits,
} from '@/lib/calculators/legal-formulas';
import {
  ShieldAlert,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Plus,
  Trash2,
  AlertTriangle,
  Scale,
  FileCheck,
} from 'lucide-react';

interface SelectedInjuryItem {
  id: string;
  title: string;
  percentage: number;
}

export function DiyaCalculatorClient() {
  const [selectedYear, setSelectedYear] = useState<number>(1405);
  const [deathSacredMonth, setDeathSacredMonth] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<
    'death_life' | 'custom_percent' | 'injuries' | 'bones' | 'organs'
  >('death_life');

  // تب درصد دلخواه پزشکی قانونی
  const [customPercentage, setCustomPercentage] = useState<string>('5.5');

  // اقلام اضافه شده در سبد دیه
  const [basketItems, setBasketItems] = useState<SelectedInjuryItem[]>([
    { id: '1', title: 'جراحت حارصه صورت یا پیشانی (۱٪)', percentage: 1.0 },
    { id: '2', title: 'شکستگی استخوان درشت‌نی پا (بهبود بدون عیب - ۸٪)', percentage: 8.0 },
  ]);

  const currentRateInfo =
    OFFICIAL_DIYA_RATES.find((r) => r.year === selectedYear) || OFFICIAL_DIYA_RATES[0];

  // بر اساس ماده ۵۵۷ قانون مجازات اسلامی:
  // تغلیظ دیه فقط به فوت انسان (دیه نفس) تعلق می‌گیرد و در اعضا و جراحات جاری نیست.
  const normalBaseDiya = currentRateInfo.normalMonthsToman;
  const sacredDeathBaseDiya = currentRateInfo.sacredMonthsToman;

  // محاسبه تب فوت و قتل نفس
  const deathCalculation = calculateDiyaAmount(100, selectedYear, deathSacredMonth, true);

  // محاسبه تب درصد دلخواه (پزشکی قانونی و ارش اعضا - ماده ۵۵۷: بدون تغلیظ)
  const cleanPercent =
    parseFloat(toEnglishDigits(customPercentage).replace(/[^0-9.]/g, '')) || 0;
  const customAmountResult = calculateDiyaAmount(cleanPercent, selectedYear, false, false);

  // محاسبه مجموع اقلام سبد جراحات و اعضا (بر مبنای ماه‌های عادی)
  const totalBasketPercentage = basketItems.reduce((acc, item) => acc + item.percentage, 0);
  const totalBasketAmount = Math.round((totalBasketPercentage / 100) * normalBaseDiya);

  const addItemToBasket = (title: string, percentage: number) => {
    const newItem: SelectedInjuryItem = {
      id: Date.now().toString(),
      title,
      percentage,
    };
    setBasketItems([...basketItems, newItem]);
  };

  const removeItemFromBasket = (id: string) => {
    setBasketItems(basketItems.filter((i) => i.id !== id));
  };

  return (
    <div className="space-y-10">
      {/* Rate Banner */}
      <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-rose-500/15 text-rose-400 border border-rose-500/30">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-white">
                نرخ مصوب دیه کامل انسان در سال {selectedYear}
              </h2>
              <p className="text-xs text-slate-400">
                بر اساس بخشنامه مصوب و ابلاغی قوه قضاییه
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Year Selector */}
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
              className="px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white font-bold text-xs sm:text-sm cursor-pointer focus:outline-none focus:border-[#E5C158]"
            >
              {OFFICIAL_DIYA_RATES.map((rate) => (
                <option key={rate.year} value={rate.year}>
                  دیه سال {rate.year} (مصوب قوه قضاییه)
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Highlight Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1.5">
            <div className="text-xs text-slate-400">دیه کامل نفس در ماه‌های عادی (غیرحرام):</div>
            <div className="text-xl sm:text-2xl font-black text-white">
              {formatToman(currentRateInfo.normalMonthsToman)} <span className="text-xs font-normal text-slate-400">تومان</span>
            </div>
            <div className="text-[11px] text-slate-500">
              معادل {formatToman(currentRateInfo.normalMonthsToman * 10)} ریال (مبنای محاسبه کلیه اعضا و جراحات)
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1.5">
            <div className="text-xs text-rose-400 font-bold">دیه کامل نفس در ماه‌های حرام (ماده ۵۵۵):</div>
            <div className="text-xl sm:text-2xl font-black text-rose-400">
              {formatToman(currentRateInfo.sacredMonthsToman)} <span className="text-xs font-normal text-slate-400">تومان</span>
            </div>
            <div className="text-[11px] text-slate-500">
              معادل {formatToman(currentRateInfo.sacredMonthsToman * 10)} ریال (یک‌سوم تغلیظ فقط در صورت فوت)
            </div>
          </div>
        </div>

        {/* Legal Advisory regarding Taghliz and Case Reality */}
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs leading-relaxed flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 text-[#E5C158] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="text-white block font-bold">
              قاعده قطعی قانونی تغلیظ دیه (مواد ۵۵۵ و ۵۵۷ قانون مجازات اسلامی):
            </strong>
            <p>
              تغلیظ دیه (افزودن یک‌سوم به مبلغ دیه) <strong>منحصراً مربوط به قتل و فوت انسان (دیه نفس)</strong> است. طبق ماده ۵۵۷ قانون مجازات اسلامی، در جنایت بر اعضا، جراحات، شکستگی استخوان و منافع به هیچ وجه تغلیظ جاری نیست و مبالغ جراحات بر مبنای دیه ماه غیرحرام محاسبه می‌شود.
            </p>
            <p className="text-[11px] text-amber-300 font-medium pt-1 border-t border-amber-500/20">
              ⚠️ <strong>توجه قضایی:</strong> این محاسبه صرفاً بر اساس درصد/میزان انتخاب‌شده انجام شده و در پرونده واقعی ممکن است احکام تعدد، تداخل، ارش و سایر مقررات قانونی مؤثر باشد.
            </p>
          </div>
        </div>
      </div>

      {/* Tabs Switcher */}
      <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-950 border border-slate-800">
        <button
          type="button"
          onClick={() => setActiveTab('death_life')}
          className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'death_life'
              ? 'bg-[#E5C158] text-slate-950 shadow-md'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          <Scale className="w-3.5 h-3.5" />
          <span>دیه کامل نفس (فوت و قتل)</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('custom_percent')}
          className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'custom_percent'
              ? 'bg-[#E5C158] text-slate-950 shadow-md'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          <FileCheck className="w-3.5 h-3.5" />
          <span>درصد پزشکی قانونی و ارش</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('injuries')}
          className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'injuries'
              ? 'bg-[#E5C158] text-slate-950 shadow-md'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          جراحات سر، صورت و بدن (ماده ۷۰۹)
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('bones')}
          className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'bones'
              ? 'bg-[#E5C158] text-slate-950 shadow-md'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          شکستگی استخوان‌ها
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('organs')}
          className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'organs'
              ? 'bg-[#E5C158] text-slate-950 shadow-md'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          اعضای اصلی بدن
        </button>
      </div>

      {/* Tab 0: Full Death / Life Diya */}
      {activeTab === 'death_life' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6">
          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-white">
              محاسبه دیه فوت انسان (دیه نفس) در سال {selectedYear}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              دیه قتل نفس اعم از تصادف رانندگی، حوادث کار، قتل غیرعمد یا شبه‌عمد بر اساس زمان وقوع حادثه و فوت محاسبه می‌گردد.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <label className="block text-xs sm:text-sm font-bold text-slate-200">
              زمان وقوع صدمه و فوت مجنی‌علیه:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setDeathSacredMonth(false)}
                className={`p-4 rounded-xl border text-right transition-all flex items-start gap-3 ${
                  !deathSacredMonth
                    ? 'bg-blue-950/40 border-blue-500 text-white shadow-md'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <div className={`w-4 h-4 rounded-full border mt-0.5 shrink-0 flex items-center justify-center ${!deathSacredMonth ? 'border-blue-400 bg-blue-400' : 'border-slate-600'}`}>
                  {!deathSacredMonth && <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                </div>
                <div className="space-y-1">
                  <div className="text-xs sm:text-sm font-bold text-white">ماه عادی (غیرحرام)</div>
                  <div className="text-[11px] text-slate-400">وقوع حادثه یا فوت در یکی از ۸ ماه عادی سال</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setDeathSacredMonth(true)}
                className={`p-4 rounded-xl border text-right transition-all flex items-start gap-3 ${
                  deathSacredMonth
                    ? 'bg-rose-950/40 border-rose-500 text-white shadow-md'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <div className={`w-4 h-4 rounded-full border mt-0.5 shrink-0 flex items-center justify-center ${deathSacredMonth ? 'border-rose-400 bg-rose-400' : 'border-slate-600'}`}>
                  {deathSacredMonth && <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                </div>
                <div className="space-y-1">
                  <div className="text-xs sm:text-sm font-bold text-rose-300">ماه حرام (تغلیظ شده - ماده ۵۵۵)</div>
                  <div className="text-[11px] text-slate-400">وقوع هر دو رفتار و فوت در ماه‌های رجب، ذی‌القعده، ذی‌الحجه یا محرم</div>
                </div>
              </button>
            </div>
          </div>

          <div className="p-5 sm:p-7 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-2 border-[#E5C158]/50 shadow-xl space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4 border-b border-slate-800">
              <div>
                <div className="text-xs text-slate-400">اصل دیه نفس:</div>
                <div className="text-lg sm:text-xl font-bold text-white">
                  {formatToman(normalBaseDiya)} تومان
                </div>
              </div>

              <div>
                <div className="text-xs text-rose-400 font-bold">مبلغ تغلیظ دیه (یک‌سوم):</div>
                <div className="text-lg sm:text-xl font-bold text-rose-400">
                  {deathSacredMonth ? `+ ${formatToman(sacredDeathBaseDiya - normalBaseDiya)} تومان` : '۰ تومان (ماه غیرحرام)'}
                </div>
              </div>

              <div>
                <div className="text-xs text-emerald-400 font-bold">مجموع دیه کامل قابل پرداخت:</div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">
                  {formatToman(deathCalculation.amountToman)} تومان
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  معادل {formatToman(deathCalculation.amountToman * 10)} ریال
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {deathCalculation.taghlizNotice}
            </p>
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-400">
              <strong className="text-amber-400">نکته قضایی:</strong> {deathCalculation.legalDisclaimer}
            </div>
          </div>
        </div>
      )}

      {/* Tab 1: Custom Percentage */}
      {activeTab === 'custom_percent' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6">
          <div className="max-w-xl space-y-3">
            <label className="block text-sm font-bold text-white">
              درصد دیه قید شده در نظریه پزشکی قانونی یا دادنامه:
            </label>
            <div className="relative">
              <input
                type="text"
                inputMode="decimal"
                value={customPercentage}
                onChange={(e) => {
                  const val = toEnglishDigits(e.target.value).replace(/[^0-9.]/g, '');
                  const parts = val.split('.');
                  const sanitized = parts.length > 2 ? `${parts[0]}.${parts.slice(1).join('')}` : val;
                  setCustomPercentage(sanitized);
                }}
                placeholder="مثلاً ۵.۵"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white font-bold text-lg focus:outline-none focus:border-[#E5C158] transition-all pl-12 dir-ltr text-left"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-[#E5C158] pointer-events-none">
                درصد (%)
              </span>
            </div>
            <p className="text-xs text-slate-400">
              اگر در نامه پزشکی قانونی نوشته شده مثلاً «سه صدم دیه کامل» عدد ۳ و اگر نوشته شده «پنج و نیم درصد» عدد ۵.۵ را وارد کنید.
            </p>
          </div>

          <div className="p-5 sm:p-7 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-950 to-blue-950/40 border-2 border-blue-500/50 shadow-xl space-y-3">
            <div className="text-xs text-slate-400">مبلغ ریالی دیه صدمه / ارش تعیین شده:</div>
            <div className="text-2xl sm:text-4xl font-black text-emerald-400">
              {formatToman(customAmountResult.amountToman)} <span className="text-sm sm:text-base font-bold text-slate-300">تومان</span>
            </div>
            <div className="text-xs text-slate-300 pt-2 border-t border-slate-800">
              بر مبنای نرخ مصوب سال {selectedYear} ({formatToman(normalBaseDiya)} تومان) × {customAmountResult.percentageFormatted}٪
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-400 space-y-1">
              <div>
                <strong className="text-amber-400">نکته حقوقی ماده ۵۵۷:</strong> تغلیظ دیه (افزایش یک‌سوم) اختصاص به قتل نفس دارد و در جنایت بر اعضا و منافع به هیچ وجه جاری نیست؛ بنابراین محاسبه اعضا و جراحات بر مبنای دیه ماه غیرحرام انجام شده است.
              </div>
              <div className="text-slate-400 pt-1 border-t border-slate-850">
                ⚠️ <strong className="text-slate-300">توجه قضایی:</strong> این محاسبه صرفاً بر اساس درصد/میزان انتخاب‌شده انجام شده و در پرونده واقعی ممکن است احکام تعدد، تداخل، ارش و سایر مقررات قانونی مؤثر باشد.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Legal Injuries */}
      {activeTab === 'injuries' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-white">جدول انواع جراحات طبق ماده ۷۰۹ قانون مجازات اسلامی</h3>
            <p className="text-xs text-slate-400">روی هر جراحت کلیک کنید تا به فاکتور نهایی دیه پرونده افزوده شود (مبنا: دیه عادی طبق ماده ۵۵۷):</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {LEGAL_INJURY_TYPES.map((injury) => {
              const amount = Math.round((injury.percentage / 100) * normalBaseDiya);
              return (
                <div
                  key={injury.id}
                  className="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-[#E5C158] transition-all space-y-2 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-sm font-bold text-white">
                        {injury.name} ({injury.arabicName})
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-[#E5C158]/15 text-[#E5C158] text-xs font-black">
                        {injury.percentage}%
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{injury.description}</p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-850 gap-2">
                    <span className="text-xs font-bold text-emerald-400">
                      {formatToman(amount)} تومان
                    </span>
                    <button
                      type="button"
                      onClick={() => addItemToBasket(`${injury.name} (${injury.percentage}٪)`, injury.percentage)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-[#E5C158] text-xs font-bold text-slate-200 hover:text-slate-950 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>افزودن به فاکتور دیه</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 3: Bone Fractures */}
      {activeTab === 'bones' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-white">دیه انواع شکستگی و آسیب‌های استخوانی</h3>
            <p className="text-xs text-slate-400">بر اساس احکام دیه استخوان در قانون مجازات اسلامی (مبنا: دیه عادی طبق ماده ۵۵۷):</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BONE_FRACTURE_TYPES.map((bone) => {
              const amount = Math.round((bone.percentage / 100) * normalBaseDiya);
              return (
                <div
                  key={bone.id}
                  className="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-[#E5C158] transition-all space-y-2 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-sm font-bold text-white">{bone.title}</span>
                      <span className="px-2 py-0.5 rounded-md bg-blue-500/15 text-blue-400 text-xs font-black">
                        {bone.percentage}%
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{bone.description}</p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-850 gap-2">
                    <span className="text-xs font-bold text-emerald-400">
                      {formatToman(amount)} تومان
                    </span>
                    <button
                      type="button"
                      onClick={() => addItemToBasket(`${bone.title} (${bone.percentage}٪)`, bone.percentage)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-[#E5C158] text-xs font-bold text-slate-200 hover:text-slate-950 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>افزودن به فاکتور دیه</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 4: Organs */}
      {activeTab === 'organs' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-white">دیه اعضای اصلی بدن طبق قانون مجازات اسلامی</h3>
            <p className="text-xs text-slate-400">سهم دیه از بین رفتن اعضا، حواس و منافع بدن (مبنا: دیه عادی طبق ماده ۵۵۷):</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BODY_ORGAN_DIYA_LIST.map((organ) => {
              const amount = Math.round((organ.fullLossPercentage / 100) * normalBaseDiya);
              return (
                <div
                  key={organ.id}
                  className="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-[#E5C158] transition-all space-y-2 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-sm font-bold text-white">{organ.name}</span>
                      <span className="px-2 py-0.5 rounded-md bg-amber-500/15 text-amber-400 text-xs font-black">
                        {organ.fullLossPercentage}%
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{organ.description}</p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-850 gap-2">
                    <span className="text-xs font-bold text-emerald-400">
                      {formatToman(amount)} تومان
                    </span>
                    <button
                      type="button"
                      onClick={() => addItemToBasket(`${organ.name} (${organ.fullLossPercentage}٪)`, organ.fullLossPercentage)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-[#E5C158] text-xs font-bold text-slate-200 hover:text-slate-950 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>افزودن به فاکتور دیه</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Aggregated Basket Component */}
      {basketItems.length > 0 && (
        <div className="p-6 sm:p-7 rounded-3xl bg-slate-900 border-2 border-emerald-500/40 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>فاکتور تجمیعی صدمات و دیه پرونده شما:</span>
            </h3>
            <span className="text-xs text-slate-400">
              {basketItems.length} صدمه ثبت شده
            </span>
          </div>

          <div className="space-y-2">
            {basketItems.map((item) => {
              const itemAmount = Math.round((item.percentage / 100) * normalBaseDiya);
              return (
                <div
                  key={item.id}
                  className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-2"
                >
                  <div className="space-y-0.5">
                    <div className="text-xs sm:text-sm font-bold text-slate-200">{item.title}</div>
                    <div className="text-[11px] text-slate-400">
                      {item.percentage}٪ از دیه پایه سال {selectedYear}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs sm:text-sm font-black text-emerald-400">
                      {formatToman(itemAmount)} تومان
                    </span>
                    <button
                      type="button"
                      onClick={() => removeItemFromBasket(item.id)}
                      className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                      title="حذف صدمه"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-xs text-slate-400">مجموع درصد صدمات پرونده:</div>
              <div className="text-sm font-bold text-white">
                {totalBasketPercentage.toFixed(2)} درصد دیه کامل
              </div>
            </div>

            <div className="text-left">
              <div className="text-xs text-slate-400">مبلغ کل قابل پرداخت دیه اعضا:</div>
              <div className="text-xl sm:text-2xl font-black text-emerald-400">
                {formatToman(totalBasketAmount)} تومان
              </div>
              <div className="text-[11px] text-slate-400">
                معادل {formatToman(totalBasketAmount * 10)} ریال
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-[11px] text-slate-400">
            ⚠️ <strong className="text-slate-300">توجه قضایی:</strong> این محاسبه صرفاً بر اساس درصد/میزان انتخاب‌شده انجام شده و در پرونده واقعی ممکن است احکام تعدد، تداخل، ارش و سایر مقررات قانونی مؤثر باشد.
          </div>
        </div>
      )}

      {/* CTA Next Action */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-[#E5C158] shrink-0" />
          <p className="text-xs sm:text-sm text-slate-200">
            نیاز به تنظیم دادخواست یا لایحه دفاعیه مطالبه دیه، تصادف رانندگی یا ضرب و جرح دارید؟
          </p>
        </div>
        <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0">
          <Link
            href="/samples"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#E5C158] hover:bg-[#f3d376] text-slate-950 font-black text-xs transition-colors shadow-md whitespace-nowrap"
          >
            <span>نمونه لوایح کیفری و دیه</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/services/diya-claim"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors whitespace-nowrap"
          >
            <span>سفارش تنظیم لایحه</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
