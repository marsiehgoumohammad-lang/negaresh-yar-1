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
} from '@/lib/calculators/legal-formulas';
import {
  ShieldAlert,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Plus,
  Trash2,
} from 'lucide-react';

interface SelectedInjuryItem {
  id: string;
  title: string;
  percentage: number;
}

export function DiyaCalculatorClient() {
  const [selectedYear, setSelectedYear] = useState<number>(1403);
  const [isSacredMonth, setIsSacredMonth] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'custom_percent' | 'injuries' | 'bones' | 'organs'>('custom_percent');

  // تب درصد دلخواه
  const [customPercentage, setCustomPercentage] = useState<string>('5.5');

  // اقلام اضافه شده در سبد دیه
  const [basketItems, setBasketItems] = useState<SelectedInjuryItem[]>([
    { id: '1', title: 'جراحت حارصه پیشانی (۱٪)', percentage: 1.0 },
    { id: '2', title: 'شکستگی استخوان درشت‌نی پا (بهبود بدون عیب - ۸٪)', percentage: 8.0 },
  ]);

  const currentRateInfo =
    OFFICIAL_DIYA_RATES.find((r) => r.year === selectedYear) || OFFICIAL_DIYA_RATES[1];
  const baseDiya = isSacredMonth
    ? currentRateInfo.sacredMonthsToman
    : currentRateInfo.normalMonthsToman;

  // محاسبه مبلغ تب درصد دلخواه
  const cleanPercent = parseFloat(customPercentage) || 0;
  const customAmountResult = calculateDiyaAmount(cleanPercent, selectedYear, isSacredMonth);

  // محاسبه مجموع اقلام انتخاب شده
  const totalBasketPercentage = basketItems.reduce((acc, item) => acc + item.percentage, 0);
  const totalBasketAmount = Math.round((totalBasketPercentage / 100) * baseDiya);

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
                بر اساس بخشنامه مصوب ریاست قوه قضاییه
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Year Selector */}
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
              className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-bold text-xs cursor-pointer"
            >
              {OFFICIAL_DIYA_RATES.map((rate) => (
                <option key={rate.year} value={rate.year}>
                  دیه سال {rate.year} {rate.year === 1403 ? '(مصوب فعلی)' : ''}
                </option>
              ))}
            </select>

            {/* Sacred Month Toggle */}
            <button
              type="button"
              onClick={() => setIsSacredMonth(!isSacredMonth)}
              className={`px-3.5 py-2 rounded-xl border text-xs font-bold transition-all ${
                isSacredMonth
                  ? 'bg-rose-600 text-white border-rose-500 shadow-md'
                  : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
              }`}
            >
              {isSacredMonth ? '✓ ماه حرام (تغلیظ شده)' : 'ماه غیرحرام (عادی)'}
            </button>
          </div>
        </div>

        {/* Highlight Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1">
            <div className="text-xs text-slate-400">دیه کامل در ماه‌های عادی (غیرحرام):</div>
            <div className="text-xl sm:text-2xl font-black text-white">
              {formatToman(currentRateInfo.normalMonthsToman)} <span className="text-xs font-normal text-slate-400">تومان</span>
            </div>
            <div className="text-[11px] text-slate-500">معادل ۱۲ میلیارد ریال</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1">
            <div className="text-xs text-rose-400 font-bold">دیه کامل در ۴ ماه حرام (رجب، ذی‌القعده، ذی‌الحجه، محرم):</div>
            <div className="text-xl sm:text-2xl font-black text-rose-400">
              {formatToman(currentRateInfo.sacredMonthsToman)} <span className="text-xs font-normal text-slate-400">تومان</span>
            </div>
            <div className="text-[11px] text-slate-500">یک‌سوم (۳۳.۳٪) به اصل دیه اضافه می‌شود</div>
          </div>
        </div>
      </div>

      {/* Tabs Switcher */}
      <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-950 border border-slate-800">
        <button
          type="button"
          onClick={() => setActiveTab('custom_percent')}
          className={`flex-1 min-w-[130px] py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'custom_percent'
              ? 'bg-[#E5C158] text-slate-950 shadow-md'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          محاسبه با درصد پزشکی قانونی
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('injuries')}
          className={`flex-1 min-w-[130px] py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'injuries'
              ? 'bg-[#E5C158] text-slate-950 shadow-md'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          جراحات سر، صورت و بدن
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('bones')}
          className={`flex-1 min-w-[130px] py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
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
          className={`flex-1 min-w-[130px] py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'organs'
              ? 'bg-[#E5C158] text-slate-950 shadow-md'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          اعضای اصلی بدن
        </button>
      </div>

      {/* Tab 1: Custom Percentage */}
      {activeTab === 'custom_percent' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6">
          <div className="max-w-xl space-y-3">
            <label className="block text-sm font-bold text-white">
              درصد دیه قید شده در گواهی پزشکی قانونی یا رای دادگاه:
            </label>
            <div className="relative">
              <input
                type="number"
                step="0.1"
                min="0"
                max="500"
                value={customPercentage}
                onChange={(e) => setCustomPercentage(e.target.value)}
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

          <div className="p-5 sm:p-7 rounded-2xl bg-gradient-to-r from-rose-950/40 via-slate-950 to-rose-950/40 border-2 border-rose-500/50 shadow-xl space-y-2">
            <div className="text-xs text-slate-400">مبلغ ریالی دیه قابل پرداخت:</div>
            <div className="text-2xl sm:text-4xl font-black text-rose-400">
              {formatToman(customAmountResult.amountToman)} <span className="text-sm sm:text-base font-bold text-slate-300">تومان</span>
            </div>
            <p className="text-xs text-slate-300 pt-2 border-t border-slate-800">
              بر مبنای دیه پایه {formatToman(baseDiya)} تومان در سال {selectedYear} ({isSacredMonth ? 'ماه حرام' : 'ماه غیرحرام'})
            </p>
          </div>
        </div>
      )}

      {/* Tab 2: Legal Injuries */}
      {activeTab === 'injuries' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-white">جدول انواع جراحات طبق ماده ۷۰۹ قانون مجازات اسلامی</h3>
            <p className="text-xs text-slate-400">روی هر جراحت کلیک کنید تا به لیست محاسبات شما افزوده شود:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {LEGAL_INJURY_TYPES.map((injury) => {
              const amount = Math.round((injury.percentage / 100) * baseDiya);
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
            <p className="text-xs text-slate-400">بر اساس مقررات دیه شکستگی استخوان‌ها در قانون مجازات اسلامی:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BONE_FRACTURE_TYPES.map((bone) => {
              const amount = Math.round((bone.percentage / 100) * baseDiya);
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
            <p className="text-xs text-slate-400">جدول سهم دیه از دست رفتن اعضای اصلی، حواس پنجگانه و منافع بدن:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BODY_ORGAN_DIYA_LIST.map((organ) => {
              const amount = Math.round((organ.fullLossPercentage / 100) * baseDiya);
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
              const itemAmount = Math.round((item.percentage / 100) * baseDiya);
              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs"
                >
                  <span className="text-slate-200 font-medium">{item.title}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400 font-bold">{formatToman(itemAmount)} تومان</span>
                    <button
                      type="button"
                      onClick={() => removeItemFromBasket(item.id)}
                      className="text-slate-400 hover:text-rose-400 transition-colors p-1"
                      title="حذف این مورد"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-xs text-slate-400">مجموع کل درصد دیه و ارش: {totalBasketPercentage.toFixed(2)}٪</div>
              <div className="text-xl sm:text-2xl font-black text-emerald-400">
                جمع کل دیه: {formatToman(totalBasketAmount)} تومان
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="/samples/expert-opinion-objection"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#E5C158] hover:bg-[#f3d376] text-slate-950 font-black text-xs transition-colors shadow-md"
              >
                <span>لایحه اعتراض به پزشکی قانونی</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Guide & Rules */}
      <div className="space-y-6">
        <h3 className="text-xl sm:text-2xl font-black text-white">
          نکات ضروری درباره پرداخت و مطالبه دیه در قانون مجازات اسلامی
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h4 className="text-sm sm:text-base font-bold text-rose-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>دیه روز پرداخت محاسبه می‌شود یا زمان وقوع حادثه؟</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              بر اساس ماده ۴۹۰ قانون مجازات اسلامی، ملاک محاسبه دیه، زمان «پرداخت و اجرای حکم» است، نه زمان وقوع تصادف یا ضرب و جرح. بنابراین اگر حادثه در سال قبل رخ داده باشد ولی اجرای احکام در سال ۱۴۰۳ دیه را بگیرد، دیه با نرخ سال ۱۴۰۳ پرداخت خواهد شد.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h4 className="text-sm sm:text-base font-bold text-rose-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>تفاوت دیه و ارش چیست؟</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              دیه، مالی است که مقدار آن در شرع و قانون به صورت معین تعیین شده (مانند شکستگی یا قطع عضو). ارش، خسارتی است که میزان آن در شرع تعیین نشده و قاضی بر اساس نظر کارشناسی پزشکی قانونی و شدت نقص عضو مقدار آن را به صورت درصد تعیین می‌نماید.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h4 className="text-sm sm:text-base font-bold text-rose-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>شرط تغلیظ دیه در ماه‌های حرام چیست؟</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              تغلیظ دیه (افزایش یک‌سوم به مبلغ دیه) تنها در صورتی رخ می‌دهد که هم رفتار مرتکب و هم فوت قربانی هر دو در یکی از چهار ماه حرام (رجب، ذی‌القعده، ذی‌الحجه و محرم) واقع شده باشد. در صدمات و جراحات مادون نفس (نقص عضو بدون فوت)، تغلیظ دیه وجود ندارد.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h4 className="text-sm sm:text-base font-bold text-rose-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>مهلت پرداخت دیه چقدر است؟</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              در جرایم عمدی مهلت پرداخت ۱ سال قمری، در شبه‌عمد ۲ سال قمری (سالانه نصف)، و در خطای محض ۳ سال قمری (سالانه یک‌سوم) از تاریخ وقوع جنایت است، مگر طرفین توافق دیگری نمایند. شرکت‌های بیمه در تصادفات رانندگی موظف به پرداخت فوری هستند.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
