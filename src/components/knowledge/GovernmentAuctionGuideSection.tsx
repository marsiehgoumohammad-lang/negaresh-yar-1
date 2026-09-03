'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Sparkles,
  FileCheck2,
  CheckCircle2,
  AlertOctagon,
  Check,
  ShieldCheck,
  AlertTriangle,
  Car,
  Home,
  Clock,
  Calculator,
  FileText,
  Gavel,
  RefreshCw,
} from 'lucide-react';

interface DecisionResult {
  title: string;
  badge: string;
  badgeColor: string;
  statusSummary: string;
  legalArticle: string;
  deadlineNotice: string;
  immediateAction: string;
  recommendedPath: string;
  requiredDocuments: string[];
  criticalWarning: string;
  serviceLink: {
    title: string;
    href: string;
    badge: string;
  };
  sampleLink?: {
    title: string;
    href: string;
    badge: string;
  };
}

type UserRoleType =
  | 'car-buyer'
  | 'property-buyer'
  | 'auction-winner'
  | 'refund-seeker'
  | 'auction-objector';

export function GovernmentAuctionGuideSection() {
  // 1. Role / Scenario State
  const [selectedRole, setSelectedRole] = useState<UserRoleType>('car-buyer');

  // 2. Interactive Pre-bid Checklist State
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
    item6: false,
    item7: false,
  });

  // 3. Simple Calculator State
  const [bidAmountInput, setBidAmountInput] = useState<string>('500000000');

  const toggleCheckItem = (key: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const totalChecked = Object.values(checkedItems).filter(Boolean).length;
  const readinessPercent = Math.round((totalChecked / 7) * 100);

  // Financial calculations
  const parsedAmount = parseInt(bidAmountInput.replace(/,/g, ''), 10) || 0;
  const deposit10Percent = Math.round(parsedAmount * 0.1);
  const remaining90Percent = parsedAmount - deposit10Percent;
  // هزینه‌های جانبی احتمالی انتقال سند، دفترخانه یا تعویض پلاک (تخمینی ۲ تا ۳ درصد طبق شرایط آگهی)
  const estimatedTransferFees = Math.round(parsedAmount * 0.025);

  const formatNumber = (num: number) => {
    return num.toLocaleString('fa-IR');
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value.replace(/[^0-9]/g, '');
    setBidAmountInput(rawVal);
  };

  const getRoleRecommendation = (): DecisionResult => {
    switch (selectedRole) {
      case 'car-buyer':
        return {
          title: 'راهنمای اختصاصی خرید خودرو از مزایده دادگاه و اجرای احکام',
          badge: 'خرید خودرو توقیفی',
          badgeColor: 'bg-amber-500/10 text-[#E5C158] border-[#E5C158]/30',
          statusSummary:
            'خودروهای توقیفی ناشی از پرونده‌های مهریه، چک برگشتی یا تصادفات در پارکینگ نگهداری می‌شوند. تمامی مزایدات از طریق درگاه ستاد ایران (setadiran.ir) برگزار می‌شود.',
          legalArticle: 'مواد ۱۱۴ الی ۱۲۹ قانون اجرای احکام مدنی',
          deadlineNotice: 'مهلت ۵ روزه قبل از مزایده برای بازدید حضوری خودرو در پارکینگ',
          immediateAction:
            'با در دست داشتن برگه آگهی به پارکینگ توقیفی مراجعه و وضعیت فیزیکی، کارکرد، شماره موتور/شاسی، خلافی و بیمه‌نامه را رویت نمایید.',
          recommendedPath:
            'ثبت‌نام در ستاد، دریافت گواهی امضای الکترونیک، واریز ۱۰٪ پایه از طریق فیش شناسه دادگستری و ارسال پیشنهاد رقابتی.',
          requiredDocuments: [
            'شناسه ثبت‌نامی سامانه ستاد و حساب بانکی شبا به نام شخص متقاضی',
            'توکن امضای دیجیتال (سخت‌افزاری یا نرم‌افزاری معتبر)',
            'رسید پرداخت الکترونیکی ۱۰٪ سپرده تضمین به حساب سپرده اجرای احکام',
            'مدارک شناسایی معتبر (کارت ملی و شناسنامه)',
          ],
          criticalWarning:
            'هزینه پارکینگ توقیفی، خلافی انباشته و عوارض شهرداری ممکن است طبق شرایط آگهی بر عهده خریدار باشد؛ حتماً قبل از ثبت قیمت این مبالغ را از اجرای احکام استعلام کنید.',
          serviceLink: {
            title: 'سفارش ثبت‌نام و پیشنهاد قیمت در مزایده ستاد',
            href: '/services/government-auctions',
            badge: 'کافی‌نت آنلاین',
          },
          sampleLink: {
            title: 'نمونه درخواست صدور دستور تعویض پلاک و انتقال سند',
            href: '/samples/auction-deed-transfer-request',
            badge: 'نمونه درخواست',
          },
        };

      case 'property-buyer':
        return {
          title: 'راهنمای بررسی ریسک و خرید ملک از مزایده دادگستری',
          badge: 'خرید ملک و آپارتمان توقیفی',
          badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
          statusSummary:
            'املاک توقیفی توسط کارشناس رسمی دادگستری ارزیابی می‌شوند. پس از پرداخت کامل ثمن و تایید دادگاه، سند رسمی بدون نیاز به حضور بدهکار توسط نماینده دادگاه در دفترخانه منتقل می‌شود.',
          legalArticle: 'مواد ۱۳۷ الی ۱۴۵ قانون اجرای احکام مدنی (به‌ویژه ماده ۱۴۳)',
          deadlineNotice: 'مهلت یک‌ماهه تسویه حساب پس از برنده شدن در مزایده',
          immediateAction:
            'پیش از مزایده حتماً وضعیت تصرف ملک را بررسی کنید. دادگاه سند را منتقل می‌کند اما اگر ملک در تصرف شخص ثالث یا مستاجر باشد، تخلیه آن نیازمند فرآیند قضایی جداگانه است.',
          recommendedPath:
            'بررسی گزارش کارشناسی ثبتی، استعلام بدهی عوارض شهرداری و پایان‌کار، شرکت در حراج آنلاین و پرداخت ثمن در موعد مقرر.',
          requiredDocuments: [
            'گواهی امضای الکترونیکی ثبت‌شده در ستاد ایران',
            'فیش واریز ۱۰ درصد تضمین به حساب دادگستری',
            'شناسه پرونده اجرای احکام و شماره بایگانی شعبه',
            'تصویر گزارش ارزیابی کارشناس رسمی دادگستری',
          ],
          criticalWarning:
            'در صورت مسکونی بودن و حضور متصرف، اگر در آگهی تصریح به تخلیه نشده باشد، تحویل کلید و خلع ید به عهده برنده است که ممکن است چند ماه زمان ببرد.',
          serviceLink: {
            title: 'مشاوره و همراهی وکیل در مزایده املاک دادگاه',
            href: '/lawyer-referral',
            badge: 'وکیل متخصص ملکی',
          },
          sampleLink: {
            title: 'نمونه لایحه درخواست انتقال سند رسمی ملک مزایده‌ای',
            href: '/samples/auction-deed-transfer-request',
            badge: 'دستور انتقال سند',
          },
        };

      case 'auction-winner':
        return {
          title: 'اقدامات حیاتی برنده مزایده: تسویه ۹۰ درصد و انتقال سند',
          badge: 'برنده مزایده و حفظ سپرده',
          badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
          statusSummary:
            'برنده مزایده کسی است که بالاترین قیمت را پیشنهاد داده است. طبق قانون، وی موظف است باقیمانده مبلغ را دقیقاً ظرف مهلت اعلامی دادگاه (حداکثر یک ماه) واریز نماید.',
          legalArticle: 'ماده ۱۲۹ و ۱۴۳ قانون اجرای احکام مدنی',
          deadlineNotice: 'حداکثر ۳۰ روز از تاریخ جلسه مزایده برای تسویه کامل ثمن',
          immediateAction:
            'بلافاصله فیش واریزی باقیمانده ۹۰ درصد را به همراه لایحه اعلام تسویه به شعبه اجرای احکام تسلیم و صدور تاییدیه صحت مزایده را از قاضی پیگیری نمایید.',
          recommendedPath:
            'واریز ۹۰ درصد به حساب سپرده با شناسه اختصاصی، اخذ گواهی قطعیت مزایده از دادورز، صدور نامه به اداره ثبت/راهور و امضای سند رسمی توسط دادورز.',
          requiredDocuments: [
            'اصل فیش واریز ۱۰ درصد اولیه و ۹۰ درصد باقیمانده',
            'برگه پرینت اعلام برنده سامانه ستاد ایران',
            'لایحه درخواست تایید مزایده و صدور دستور انتقال سند رسمی',
            'مشخصات دقیق دفترخانه اسناد رسمی جهت تنظیم سند',
          ],
          criticalWarning:
            'اگر ظرف مهلت یک ماه باقیمانده مبلغ را نپردازید، بدون هیچ استثنایی کل سپرده ۱۰ درصدی شما به نفع صندوق دولت ضبط شده و مزایده تجدید می‌شود!',
          serviceLink: {
            title: 'تنظیم لایحه تسویه و درخواست انتقال قطعی سند',
            href: '/services/legal-brief',
            badge: 'تنظیم لایحه رسمی',
          },
          sampleLink: {
            title: 'نمونه درخواست مهلت قانونی جهت پرداخت مابقی ثمن',
            href: '/samples/judgment-enforcement-grace-period',
            badge: 'درخواست مهلت',
          },
        };

      case 'refund-seeker':
        return {
          title: 'نحوه استرداد سریع ۱۰ درصد سپرده مزایده برای برنده نشدگان',
          badge: 'استرداد سپرده ۱۰ درصدی',
          badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
          statusSummary:
            'مبالغ ۱۰ درصدی واریزی شرکت‌کنندگانی که برنده نشده‌اند، متعلق به خود آن‌هاست و هیچ‌گونه کسر یا جریمه‌ای متوجه آنان نخواهد بود.',
          legalArticle: 'ماده ۱۲۸ قانون اجرای احکام مدنی',
          deadlineNotice: 'بلافاصله پس از اعلام نتایج و امضای صورتجلسه مزایده',
          immediateAction:
            'در سامانه ستاد از بخش «کارتابل مالی / سپرده‌ها» درخواست عودت وجه ثبت کنید یا در صورت عدم واریز خودکار ظرف ۷۲ ساعت، به دایره مالی اجرای احکام مراجعه نمایید.',
          recommendedPath:
            'ارائه شماره شبا ثبت‌شده در ثنا به واحد حسابداری اجرای احکام یا ارسال درخواست الکترونیکی از طریق دفاتر خدمات الکترونیک قضایی.',
          requiredDocuments: [
            'رسید پرداخت الکترونیک ۱۰ درصد با شماره پیگیری بانکی',
            'تصویر صفحه اعلام نتایج سامانه ستاد مبنی بر عدم برنده شدن',
            'شماره شبا بانکی به نام دقیق شرکت‌کننده',
            'درخواست کتبی استرداد سپرده خطاب به رئیس اجرای احکام',
          ],
          criticalWarning:
            'شماره حساب مقصد باید حتماً به نام شخص واریزکننده باشد؛ دادگستری وجه سپرده را به حساب اشخاص ثالث عودت نمی‌دهد.',
          serviceLink: {
            title: 'تنظیم درخواست کتبی استرداد سپرده به اجرای احکام',
            href: '/services/legal-brief',
            badge: 'خدمات لایحه',
          },
          sampleLink: {
            title: 'نمونه متن درخواست استرداد ۱۰ درصد سپرده مزایده',
            href: '/samples/auction-deposit-refund-request',
            badge: 'نمونه رایگان',
          },
        };

      case 'auction-objector':
        return {
          title: 'نحوه اعتراض به مزایده، درخواست ابطال و توقف انتقال سند',
          badge: 'اعتراض و ابطال مزایده',
          badgeColor: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
          statusSummary:
            'اگر در ارزیابی، آگهی، زمان برگزاری، صلاحیت شرکت‌کنندگان یا حقوق اشخاص ثالث تخلفی رخ داده باشد، متضرر می‌تواند ابطال مزایده را از دادگاه بخواهد.',
          legalArticle: 'مواد ۱۳۶، ۱۴۲، ۱۴۶ و ۱۴۷ قانون اجرای احکام مدنی',
          deadlineNotice: 'حداکثر ۱ هفته از تاریخ برگزاری مزایده طبق ماده ۱۴۲',
          immediateAction:
            'سریعاً پیش از تایید مزایده و صدور دستور انتقال سند رسمی، لایحه اعتراض مستند به ماده ۱۳۶ را ثبت و دستور توقف موقت عملیات اجرایی را تقاضا کنید.',
          recommendedPath:
            'اگر مال متعلق به شخص دیگری است: ثبت دادخواست «اعتراض ثالث اجرایی (ماده ۱۴۶)». اگر تشریفات رعایت نشده: ثبت «اعتراض به تشریفات مزایده (ماده ۱۴۲)».',
          requiredDocuments: [
            'گزارش آگهی مزایده و مستندات نشان‌دهنده نقص در اطلاع‌رسانی یا ساعت حراج',
            'مستندات مالکیت رسمی یا عادی مقدم شخص ثالث در اعتراض ثالث',
            'نظریه کارشناسی اولیه و دلایل غیرواقعی بودن فاحش قیمت پایه',
            'لایحه حقوقی مستدل با استناد به آرای وحدت رویه و قوانین موضوعه',
          ],
          criticalWarning:
            'مهلت اعتراض بسیار کوتاه است (فقط یک هفته). پس از تایید مزایده توسط قاضی و صدور دستور انتقال سند رسمی، ابطال آن در مراجع قضایی فوق‌العاده پیچیده و زمان‌بر خواهد بود.',
          serviceLink: {
            title: 'تنظیم فوری لایحه تخصصی ابطال مزایده دادگاه',
            href: '/services/legal-brief',
            badge: 'تنظیم تخصصی لایحه',
          },
          sampleLink: {
            title: 'نمونه لایحه اعتراض به مزایده و تقاضای ابطال آن',
            href: '/samples/auction-cancellation-objection',
            badge: 'نمونه لایحه ابطال',
          },
        };
    }
  };

  const rec = getRoleRecommendation();

  return (
    <div id="government-auction-interactive-suite" className="space-y-10 my-8">
      {/* ---------------------------------------------------- */}
      {/* 1. INTERACTIVE DECISION & ACTION WIZARD */}
      {/* ---------------------------------------------------- */}
      <div className="p-6 md:p-8 rounded-3xl bg-[#0C1222] border-2 border-[#E5C158]/40 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E5C158]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#E5C158]/10 text-[#E5C158] shrink-0">
                <Gavel className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-black text-white">
                  سامانه هوشمند هدایت و اقدام در مزایده دادگاه
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  نقش یا موقعیت پرونده خود را انتخاب کنید تا نقشه راه و مواد قانونی منطبق با شما نمایش داده شود.
                </p>
              </div>
            </div>
            <span className="self-start sm:self-auto text-[11px] px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
              مطابق قانون اجرای احکام مدنی
            </span>
          </div>

          {/* Role selector tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            <button
              id="role-btn-car"
              onClick={() => setSelectedRole('car-buyer')}
              className={`p-3 rounded-xl border text-right transition-all flex flex-col justify-between gap-2 min-h-[76px] ${
                selectedRole === 'car-buyer'
                  ? 'bg-[#E5C158]/15 border-[#E5C158] text-[#E5C158] shadow-lg shadow-[#E5C158]/10'
                  : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
              }`}
            >
              <div className="flex items-center justify-between">
                <Car className="w-4 h-4" />
                {selectedRole === 'car-buyer' && <Check className="w-3.5 h-3.5" />}
              </div>
              <span className="text-xs font-bold leading-tight">خرید خودرو توقیفی</span>
            </button>

            <button
              id="role-btn-property"
              onClick={() => setSelectedRole('property-buyer')}
              className={`p-3 rounded-xl border text-right transition-all flex flex-col justify-between gap-2 min-h-[76px] ${
                selectedRole === 'property-buyer'
                  ? 'bg-[#E5C158]/15 border-[#E5C158] text-[#E5C158] shadow-lg shadow-[#E5C158]/10'
                  : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
              }`}
            >
              <div className="flex items-center justify-between">
                <Home className="w-4 h-4" />
                {selectedRole === 'property-buyer' && <Check className="w-3.5 h-3.5" />}
              </div>
              <span className="text-xs font-bold leading-tight">خرید ملک و آپارتمان</span>
            </button>

            <button
              id="role-btn-winner"
              onClick={() => setSelectedRole('auction-winner')}
              className={`p-3 rounded-xl border text-right transition-all flex flex-col justify-between gap-2 min-h-[76px] ${
                selectedRole === 'auction-winner'
                  ? 'bg-[#E5C158]/15 border-[#E5C158] text-[#E5C158] shadow-lg shadow-[#E5C158]/10'
                  : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
              }`}
            >
              <div className="flex items-center justify-between">
                <ShieldCheck className="w-4 h-4" />
                {selectedRole === 'auction-winner' && <Check className="w-3.5 h-3.5" />}
              </div>
              <span className="text-xs font-bold leading-tight">برنده مزایده و تسویه</span>
            </button>

            <button
              id="role-btn-refund"
              onClick={() => setSelectedRole('refund-seeker')}
              className={`p-3 rounded-xl border text-right transition-all flex flex-col justify-between gap-2 min-h-[76px] ${
                selectedRole === 'refund-seeker'
                  ? 'bg-[#E5C158]/15 border-[#E5C158] text-[#E5C158] shadow-lg shadow-[#E5C158]/10'
                  : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
              }`}
            >
              <div className="flex items-center justify-between">
                <RefreshCw className="w-4 h-4" />
                {selectedRole === 'refund-seeker' && <Check className="w-3.5 h-3.5" />}
              </div>
              <span className="text-xs font-bold leading-tight">استرداد ۱۰٪ سپرده</span>
            </button>

            <button
              id="role-btn-objector"
              onClick={() => setSelectedRole('auction-objector')}
              className={`p-3 rounded-xl border text-right transition-all flex flex-col justify-between gap-2 min-h-[76px] col-span-2 sm:col-span-1 ${
                selectedRole === 'auction-objector'
                  ? 'bg-[#E5C158]/15 border-[#E5C158] text-[#E5C158] shadow-lg shadow-[#E5C158]/10'
                  : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
              }`}
            >
              <div className="flex items-center justify-between">
                <AlertTriangle className="w-4 h-4" />
                {selectedRole === 'auction-objector' && <Check className="w-3.5 h-3.5" />}
              </div>
              <span className="text-xs font-bold leading-tight">اعتراض و ابطال مزایده</span>
            </button>
          </div>

          {/* Dynamic Result Display Card */}
          <div className="p-5 md:p-6 rounded-2xl bg-[#070B15] border border-slate-800 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
              <div className="space-y-1">
                <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${rec.badgeColor}`}>
                  <Sparkles className="w-3 h-3" />
                  {rec.badge}
                </span>
                <h4 className="text-base md:text-lg font-bold text-white mt-1">{rec.title}</h4>
              </div>
              <div className="flex items-center gap-2 text-xs text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 rounded-xl font-medium">
                <Clock className="w-4 h-4 shrink-0" />
                <span>{rec.deadlineNotice}</span>
              </div>
            </div>

            <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-medium">
              {rec.statusSummary}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Box 1: Action */}
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                <span className="text-xs font-bold text-[#E5C158] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  اقدام فوری پیشنهادی:
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">{rec.immediateAction}</p>
                <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-800">
                  <strong className="text-slate-300">مستند قانونی: </strong>
                  {rec.legalArticle}
                </div>
              </div>

              {/* Box 2: Documents */}
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-indigo-400" />
                  مدارک و الزامات پرونده:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {rec.requiredDocuments.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-1.5" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Critical warning */}
            <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-900/40 text-xs text-rose-300 flex items-start gap-2.5">
              <AlertOctagon className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong className="font-bold text-rose-200">هشدار بسیار مهم: </strong>
                {rec.criticalWarning}
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <Link
                id="wizard-service-link"
                href={rec.serviceLink.href}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#E5C158] to-[#C59B27] text-[#070B15] font-black text-xs shadow-md shadow-[#E5C158]/20 hover:brightness-110 transition-all"
              >
                <span>{rec.serviceLink.title}</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </Link>

              {rec.sampleLink && (
                <Link
                  id="wizard-sample-link"
                  href={rec.sampleLink.href}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 transition-colors"
                >
                  <FileCheck2 className="w-3.5 h-3.5 text-[#E5C158]" />
                  <span>{rec.sampleLink.title}</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. PRE-BID RISK CHECKLIST (چک‌لیست بررسی ریسک) */}
      {/* ---------------------------------------------------- */}
      <div className="p-6 md:p-8 rounded-3xl bg-slate-900/50 border border-slate-800 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-black text-white">
                چک‌لیست هوشمند ارزیابی ریسک قبل از ورود به مزایده
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                قبل از واریز ۱۰ درصد سپرده و پیشنهاد قیمت، موارد زیر را بررسی کرده و تیک بزنید تا ضریب ریسک خرید شما ارزیابی شود.
              </p>
            </div>
          </div>

          {/* Score Badge */}
          <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-2xl border border-slate-700 self-start sm:self-auto">
            <span className="text-xs text-slate-400">ضریب امنیت:</span>
            <span
              className={`text-sm font-black ${
                readinessPercent >= 80
                  ? 'text-emerald-400'
                  : readinessPercent >= 50
                  ? 'text-amber-400'
                  : 'text-rose-400'
              }`}
            >
              {readinessPercent}٪
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
          <div
            className={`h-2.5 transition-all duration-300 ${
              readinessPercent >= 80
                ? 'bg-emerald-500'
                : readinessPercent >= 50
                ? 'bg-amber-500'
                : 'bg-rose-500'
            }`}
            style={{ width: `${readinessPercent}%` }}
          />
        </div>

        {/* Checklist items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            {
              id: 'item1',
              category: 'الزام قانونی آمره',
              categoryColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
              title: 'بازدید فیزیکی از مال در بازه ۵ روزه قبل از حراج (ماده ۱۲۶ ق.ا.ا.م)',
              desc: 'مشاهده سلامت بدنه، موتور، مدارک، یا وضعیت سازه و مصالح آپارتمان با هماهنگی دادورز.',
            },
            {
              id: 'item2',
              category: 'مدیریت ریسک عملیاتی',
              categoryColor: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
              title: 'استعلام وضعیت تخلیه، معارض یا حضور مستاجر در ملک توقیفی',
              desc: 'اطمینان از اینکه خلع ید یا تخلیه بر عهده دادگاه است یا خریدار باید جداگانه دادخواست دهد.',
            },
            {
              id: 'item3',
              category: 'الزام قانونی و ثبتی',
              categoryColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
              title: 'استعلام سوابق ثبتی، بازداشتی‌های مقدم و در رهن بودن ملک در اداره ثبت',
              desc: 'بررسی عدم توقیف مقدم توسط سایر طلبکاران یا قرار نگرفتن در وثیقه اسناد رسمی.',
            },
            {
              id: 'item4',
              category: 'شرایط اختصاصی آگهی',
              categoryColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
              title: 'بررسی خلافی سنگین، جرایم انباشته و امکان تعویض پلاک خودرو',
              desc: 'استعلام شماره شاسی در سامانه پلیس راهور برای اطمینان از اصالت فنی و عدم دو تکه بودن.',
            },
            {
              id: 'item5',
              category: 'شرایط اختصاصی آگهی',
              categoryColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
              title: 'محاسبه بدهی عوارض شهرداری، پایان‌کار، دارایی و مالیات نقل و انتقال',
              desc: 'روشن بودن مسئول پرداخت این هزینه‌ها در مفاد آگهی مزایده.',
            },
            {
              id: 'item6',
              category: 'مدیریت ریسک نقدینگی',
              categoryColor: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
              title: 'تامین ۱۰۰٪ وجه نقد باقیمانده (۹۰ درصد) ظرف مهلت مقرر آگهی (حداکثر ۳۰ روز)',
              desc: 'مهلت طبق آگهی تعیین می‌شود و سقف آن ۱ ماه است؛ تاخیر در وام موجب ضبط ۱۰٪ سپرده طبق ماده ۱۲۹ می‌شود.',
            },
            {
              id: 'item7',
              category: 'الزام فنی و هویتی',
              categoryColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
              title: 'آماده‌سازی توکن گواهی امضای دیجیتال و حساب ثنا و ستاد به نام خود خریدار',
              desc: 'جلوگیری از رد پیشنهاد به دلیل عدم تطابق امضای الکترونیک یا نقص در اطلاعات بانکی.',
            },
          ].map((item) => (
            <label
              key={item.id}
              htmlFor={`chk-${item.id}`}
              className={`p-3.5 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
                checkedItems[item.id]
                  ? 'bg-emerald-950/20 border-emerald-500/50 text-emerald-100'
                  : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <input
                type="checkbox"
                id={`chk-${item.id}`}
                checked={!!checkedItems[item.id]}
                onChange={() => toggleCheckItem(item.id)}
                className="mt-1 w-4 h-4 rounded border-slate-700 text-emerald-600 focus:ring-emerald-500 focus:ring-offset-slate-900 bg-slate-800"
              />
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${item.categoryColor}`}>
                    {item.category}
                  </span>
                  <span className="text-xs font-bold block">{item.title}</span>
                </div>
                <span className="text-[11px] text-slate-400 block leading-relaxed">
                  {item.desc}
                </span>
              </div>
            </label>
          ))}
        </div>

        {readinessPercent < 80 && (
          <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-900/40 text-xs text-amber-300 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>
              نکته ایمنی: قبل از تیک زدن تمام ۷ بند فوق، پیشنهاد قیمت نهایی را در سامانه ستاد ثبت نکنید.
            </span>
          </div>
        )}
      </div>

      {/* ---------------------------------------------------- */}
      {/* 3. AUCTION FINANCIAL CALCULATOR */}
      {/* ---------------------------------------------------- */}
      <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-[#0C1222] to-[#121A2E] border border-slate-800 shadow-xl space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
          <div className="p-2.5 rounded-xl bg-[#E5C158]/10 text-[#E5C158]">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-black text-white">
              محاسبه‌گر شفاف هزینه‌ها و مبالغ مزایده دادگاه
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              مبلغ کارشناسی یا رقم پیشنهادی خود را به تومان وارد کنید تا مبالغ دقیق واریزی و باقیمانده تفکیک شود.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Input field (5 cols) */}
          <div className="md:col-span-5 space-y-2">
            <label htmlFor="bid-amount-input" className="block text-xs font-bold text-slate-300">
              مبلغ پیشنهادی خرید یا پایه کارشناسی (تومان):
            </label>
            <div className="relative">
              <input
                id="bid-amount-input"
                type="text"
                value={Number(bidAmountInput).toLocaleString('en-US')}
                onChange={handleAmountChange}
                placeholder="مثلاً ۵۰۰,۰۰۰,۰۰۰"
                className="w-full pl-12 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white font-bold text-sm focus:border-[#E5C158] focus:outline-none tracking-wider text-left dir-ltr"
              />
              <span className="absolute left-3 top-3 text-xs text-slate-400 font-medium">تومان</span>
            </div>
            <p className="text-[11px] text-slate-400">
              معادل حروف: {formatNumber(parsedAmount)} تومان
            </p>
          </div>

          {/* Results grid (7 cols) */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Box 1: 10% Deposit */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-[#E5C158]/40 space-y-1">
              <span className="text-[11px] text-slate-400 block font-medium">
                سپرده ۱۰٪ تضمین ورودی:
              </span>
              <span className="text-sm font-black text-[#E5C158] block">
                {formatNumber(deposit10Percent)} <span className="text-[10px] font-normal">تومان</span>
              </span>
              <span className="text-[10px] text-slate-400 block">واریز قبل از مزایده</span>
            </div>

            {/* Box 2: 90% Remaining */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-blue-500/30 space-y-1">
              <span className="text-[11px] text-slate-400 block font-medium">
                ۹۰٪ باقیمانده ثمن:
              </span>
              <span className="text-sm font-black text-blue-400 block">
                {formatNumber(remaining90Percent)} <span className="text-[10px] font-normal">تومان</span>
              </span>
              <span className="text-[10px] text-slate-400 block">حداکثر ۱ ماه پس از برنده شدن</span>
            </div>

            {/* Box 3: Transfer & Notary approx */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700 space-y-1">
              <span className="text-[11px] text-slate-400 block font-medium">
                هزینه‌های انتقال و دفترخانه:
              </span>
              <span className="text-sm font-black text-slate-200 block">
                {formatNumber(estimatedTransferFees)} <span className="text-[10px] font-normal">تومان</span>
              </span>
              <span className="text-[10px] text-slate-400 block">تخمینی طبق آگهی</span>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Note on Fees */}
        <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800 text-[11px] text-slate-400 leading-relaxed flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <span>
            <strong className="text-slate-300">مستند قانونی ماده ۱۵۸ ق.ا.ا.م: </strong>
            پرداخت نیم‌عشر اجرایی (۵٪ حق‌الاجرای دولت) قانوناً بر عهده محکوم‌علیه (بدهکار) است و از حاصل فروش کسر می‌شود؛ برنده مزایده موظف به پرداخت حق‌الاجرا مازاد بر ثمن پیشنهادی نیست و صرفاً هزینه‌های انتقال سند و دفترخانه را بر اساس شرایط آگهی می‌پردازد.
          </span>
        </div>
      </div>
    </div>
  );
}
