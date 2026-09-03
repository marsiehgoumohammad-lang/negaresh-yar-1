'use client';

import React, { useState, useId } from 'react';
import Link from 'next/link';
import {
  Scale,
  Clock,
  FileText,
  AlertTriangle,
  CheckCircle2,
  ArrowLeft,
  BookOpen,
  Info,
  Gavel,
  Layers,
  Calculator,
} from 'lucide-react';

interface RemedyItem {
  id: string;
  remedyType: 'واخواهی' | 'تجدیدنظرخواهی' | 'فرجام‌خواهی' | 'اعاده دادرسی' | 'ماده ۴۷۷' | 'اعتراض ثالث';
  situationTitle: string;
  badge: string;
  badgeColor: string;
  whenApplies: string;
  targetCourt: string;
  legalDeadline: string;
  legalArticles: string;
  suspensiveEffect: string;
  courtFee: string;
  criticalTip: string;
  serviceHref: string;
  serviceText: string;
  sampleHref?: string;
  sampleText?: string;
}

export function CourtDecisionAppealGuideSection() {
  const [activeTab, setActiveTab] = useState<'decision-tree' | 'timeline-calc' | 'civil-vs-criminal' | 'grounds'>('decision-tree');
  const [selectedRemedy, setSelectedRemedy] = useState<string>('remedy-appeal');
  const [notificationDaysAgo, setNotificationDaysAgo] = useState<number>(5);
  const [residenceType, setResidenceType] = useState<'iran' | 'abroad'>('iran');

  const daysInputId = useId();

  // Remedy Options Matrix
  const remedies: RemedyItem[] = [
    {
      id: 'remedy-appeal',
      remedyType: 'تجدیدنظرخواهی',
      situationTitle: 'رای بدوی صادر شده و در جلسات حاضر بودم یا لایحه دادم (حکم حضوری در مهلت قانونی)',
      badge: 'عام‌ترین روش اعتراض',
      badgeColor: 'bg-amber-500/10 text-[#E5C158] border-amber-500/30',
      whenApplies: 'کلیه آرای حضوری دادگاه‌های عمومی حقوقی، کیفری دو، خانواده، و احکام دادگاه صلح یا شعب شورا که در متن دادنامه «قابل تجدیدنظر» اعلام شده‌اند.',
      targetCourt: 'دادگاه تجدیدنظر استان (از طریق دفاتر خدمات الکترونیک قضایی یا خودکاربری ثنا خطاب به دادگاه بدوی صادرکننده)',
      legalDeadline: '۲۰ روز برای افراد مقیم ایران و ۲ ماه برای افراد مقیم خارج از کشور از تاریخ ابلاغ دادنامه (ماده ۳۳۶ مدنی و ۴۳۱ کیفری)',
      legalArticles: 'مواد ۳۳۰ تا ۳۶۵ قانون آیین دادرسی مدنی و مواد ۴۲۶ تا ۴۶۱ قانون آیین دادرسی کیفری',
      suspensiveEffect: 'در دعاوی مدنی مانع اجرای حکم است تا رای قطعی صادر شود (ماده ۳۴۷ ق.آ.د.م)، مگر در موارد استثنایی نظیر تصرف عدوانی (ماده ۱۷۵ ق.آ.د.م). در کیفری نیز اجرای مجازات تا قطعیت متوقف می‌ماند.',
      courtFee: 'در دعاوی مالی ۴.۵ درصد ارزش محکوم‌به (یا خواسته) و در دعاوی غیرمالی و کیفری بر اساس تعرفه مصوب سالیانه (امکان ثبت دادخواست اعسار از هزینه دادرسی وجود دارد).',
      criticalTip: 'باید حداقل به یکی از جهات تصریح‌شده در ماده ۳۴۸ مدنی یا ۴۳۴ کیفری استناد کنید؛ ادعای صرف «نارضایتی از رای» بدون ذکر جهت قانونی رد می‌شود.',
      serviceHref: '/services/appeal',
      serviceText: 'سفارش تنظیم تخصصی لایحه تجدیدنظرخواهی',
      sampleHref: '/samples/appeal',
      sampleText: 'مشاهده نمونه لایحه تجدیدنظرخواهی',
    },
    {
      id: 'remedy-vakhahi',
      remedyType: 'واخواهی',
      situationTitle: 'هیچ ابلاغیه واقعی دریافت نکردم و در هیچ جلسه‌ای حاضر نبودم و لایحه ندادم (حکم غیابی)',
      badge: 'اعتراض به حکم غیابی',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      whenApplies: 'زمانی که خوانده (یا وکیل وی) در هیچ‌یک از جلسات دادگاه حاضر نبوده و لایحه دفاعیه نفرستاده و اخطاریه نیز به صورت واقعی (حضوری) ابلاغ نشده باشد.',
      targetCourt: 'همان دادگاه بدوی صادرکننده حکم غیابی (رسیدگی ماهوی در شعبه صادرکننده انجام می‌شود)',
      legalDeadline: '۲۰ روز برای مقیمین ایران و ۲ ماه برای مقیمین خارج از تاریخ ابلاغ واقعی؛ در ابلاغ قانونی، در صورت اثبات عدم اطلاع واقعی، مهلت از زمان اطلاع محاسبه می‌گردد (ماده ۳۰۶ مدنی و ۴۰۶ کیفری).',
      legalArticles: 'مواد ۳۰۵ تا ۳۰۸ قانون آیین دادرسی مدنی و ماده ۴۰۶ قانون آیین دادرسی کیفری',
      suspensiveEffect: 'دادخواست واخواهی اجرای حکم را معلق می‌کند؛ اگر حکم اجرا شده باشد، اجرای قرار توقیف عملیات اجرایی صورت می‌پذیرد.',
      courtFee: 'هزینه دادرسی واخواهی معادل هزینه دادرسی مرحله بدوی است (امکان ثبت دادخواست همزمان اعسار فراهم است).',
      criticalTip: 'در صورت عدم ثبت واخواهی، پس از انقضای مهلت واخواهی، مهلت تجدیدنظرخواهی آغاز می‌شود؛ اما چنانچه واخواهی ثبت نمایید، دادگاه بدوی مجدداً رسیدگی ماهوی می‌کند و دادنامه صادره در مرحله واخواهی مجدداً ظرف ۲۰ روز قابل تجدیدنظر خواهد بود.',
      serviceHref: '/services/objection-absent-judgment',
      serviceText: 'تنظیم دادخواست تخصصی واخواهی',
      sampleHref: '/samples/objection-absent-judgment',
      sampleText: 'مشاهده نمونه دادخواست واخواهی از رای غیابی',
    },
    {
      id: 'remedy-farjam',
      remedyType: 'فرجام‌خواهی',
      situationTitle: 'پرونده‌های سنگین کیفری یا دعاوی خاص حقوقی در دیوان عالی کشور',
      badge: 'رسیدگی شکلی در دیوان عالی',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      whenApplies: 'در کیفری: جرایم سلب حیات، حبس ابد، قطع عضو، حبس درجه یک تا سه و جنایات با دیه نصف دیه کامل یا بیشتر (ماده ۴۲۸ ق.آ.د.ک). در حقوقی: دعاوی اصل نکاح، طلاق، فسخ نکاح، نسب، حجر، وقف و دعاوی با خواسته بیش از بیست میلیون ریال صادره از دادگاه بدوی بدون تجدیدنظرخواهی (مواد ۳۶۷ و ۳۶۸ ق.آ.د.م).',
      targetCourt: 'شعب دیوان عالی کشور در تهران (ثبت از طریق دفاتر خدمات قضایی)',
      legalDeadline: '۲۰ روز برای مقیمین ایران و ۲ ماه برای مقیمین خارج از تاریخ ابلاغ رای قطعی یا انقضای مهلت تجدیدنظر (ماده ۳۹۷ مدنی)',
      legalArticles: 'مواد ۳۶۶ تا ۴۱۶ قانون آیین دادرسی مدنی و مواد ۴۲۶ و ۴۲۸ قانون آیین دادرسی کیفری',
      suspensiveEffect: 'در دعاوی مالی فرجام‌خواهی مانع اجرای حکم نیست مگر با اخذ تأمین مناسب (ماده ۳۸۶ مدنی)؛ در احکام کیفری اعدام و مجازات‌های بدنی مانع قطعی اجراست.',
      courtFee: 'در دعاوی مالی ۵.۵ درصد و در دعاوی غیرمالی طبق تعرفه مصوب دفاتر قضایی.',
      criticalTip: 'دیوان عالی کشور رسیدگی ماهوی (شنیدن شهادت شهود یا بررسی مجدد ادله) نمی‌کند؛ صرفاً انطباق یا عدم انطباق رای با موازین شرعی و مواد قانونی را می‌سنجد.',
      serviceHref: '/services/appeal',
      serviceText: 'سفارش لایحه فرجام‌خواهی تخصصی',
      sampleHref: '/samples/appeal',
      sampleText: 'مشاهده نمونه لایحه نقض دادنامه',
    },
    {
      id: 'remedy-rehearing',
      remedyType: 'اعاده دادرسی',
      situationTitle: 'رای قطعی شده است، اما مدرک جدید مکتوم یا جعلی بودن سند ثابت شده است',
      badge: 'روش فوق‌العاده اعتراض به حکم قطعی',
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      whenApplies: 'صرفاً در موارد مصرح قانونی: الف) صدور دو حکم متضاد در یک موضوع، ب) اثبات جعلیت یا حیله و تقلب طرف مقابل، ج) کشف اسناد و مدارکی که در جریان دادرسی مکتوم بوده، د) صدور حکم خارج از موضوع خواسته یا بیش از آن (ماده ۴۲۶ مدنی و ۴۷۴ کیفری).',
      targetCourt: 'همان دادگاهی که رای قطعی نهایی را صادر کرده است (بدوی یا تجدیدنظر استان)',
      legalDeadline: '۲۰ روز برای افراد مقیم داخل و ۲ ماه برای مقیم خارج، از تاریخ کشف سند جدید یا اثبات جعلیت و تقلب در دادگاه ذی‌صلاح.',
      legalArticles: 'مواد ۴۲۶ تا ۴۴۱ قانون آیین دادرسی مدنی و ماده ۴۷۴ قانون آیین دادرسی کیفری',
      suspensiveEffect: 'صرف ثبت اعاده دادرسی مانع اجرا نیست؛ اگر دادگاه پس از بررسی اولیه «قرار قبولی اعاده دادرسی» صادر نماید، عملیات اجرایی متوقف خواهد شد.',
      courtFee: 'معادل هزینه دادرسی فرجام‌خواهی (۵.۵ درصد در دعاوی مالی).',
      criticalTip: 'مدرک جدید باید در زمان دادرسی مکتوم بوده باشد و به دست آوردن آن خارج از اراده شخص بوده باشد؛ مدرکی که خود شخص قصور در ارائه‌اش داشته پذیرفته نمی‌شود.',
      serviceHref: '/services/legal-brief',
      serviceText: 'تنظیم دادخواست اعاده دادرسی با مستندات قانونی',
      sampleHref: '/samples/legal-brief',
      sampleText: 'مشاهده نمونه لایحه حقوقی مستدل',
    },
    {
      id: 'remedy-477',
      remedyType: 'ماده ۴۷۷',
      situationTitle: 'رای قطعی دارای اشتباه فاحش شرعی و «خلاف بیّن شرع» است',
      badge: 'اختیار خاص رئیس قوه قضاییه',
      badgeColor: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
      whenApplies: 'زمانی که تمام مراحل اعتراض طی شده یا رای قطعی شده است، اما رای صادره به طور آشکار و غیرقابل انکار با مسلمات فقهی و قواعد آمره در تضاد فاحش باشد.',
      targetCourt: 'از طریق حوزه معاونت قضایی رئیس کل دادگستری استان مربوطه جهت بررسی و ارسال به حوزه ریاست قوه قضاییه در تهران',
      legalDeadline: 'در قانون مهلت مقید تعیین نشده است، اما اقدام سریع مانع از اجرای کامل و تضییع غیرقابل جبران حقوق می‌شود.',
      legalArticles: 'ماده ۴۷۷ قانون آیین دادرسی کیفری و دستورالعمل اجرایی مصوب حوزه ریاست قوه قضاییه',
      suspensiveEffect: 'صرف درخواست اثری در اجرا ندارد؛ توقف اجرا صرفاً در صورت موافقت رئیس کل دادگستری استان یا دستور مستقیم رئیس قوه قضاییه صادر می‌شود.',
      courtFee: 'هزینه دادرسی سنگین ندارد، اما مستلزم تهیه گزارش توجیهی و لایحه فقهی و حقوقی فوق‌العاده مستند است.',
      criticalTip: 'پذیرش ماده ۴۷۷ بسیار استثنایی و دشوار است؛ باید دقیقاً نشان دهید کدام فتوای مسلم یا قاعده فقهی بنیادین نقض شده است.',
      serviceHref: '/services/appeal',
      serviceText: 'تنظیم لایحه تخصصی اعمال ماده ۴۷۷',
      sampleHref: '/samples/article-477-request',
      sampleText: 'مشاهده نمونه فرم و لایحه ماده ۴۷۷',
    },
    {
      id: 'remedy-thirdparty',
      remedyType: 'اعتراض ثالث',
      situationTitle: 'حکم بین دو نفر دیگر صادر شده اما به مال یا حقوق من لطمه می‌زند',
      badge: 'اعتراض شخص ثالث',
      badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      whenApplies: 'شخصی که خود یا نماینده‌اش در جریان رسیدگی حضور نداشته اما رای قطعی دادگاه مستقیماً حقوق وی را نقض کرده یا مال متعلق به او را توقیف نموده است.',
      targetCourt: 'اگر اعتراض قبل از اجرای کامل باشد: دادگاه صادرکننده حکم (اعتراض اصلی) یا دادگاه رسیدگی‌کننده به دعوای فعلی (اعتراض طاری).',
      legalDeadline: 'اعتراض ثالث مقید به مهلت ۲۰ روزه نیست و تا قبل از اجرای کامل حکم یا پس از آن در صورت اثبات حق قابل طرح است (ماده ۴۲۲ مدنی).',
      legalArticles: 'مواد ۴۱۷ تا ۴۲۵ قانون آیین دادرسی مدنی و مواد ۱۴۶ و ۱۴۷ قانون اجرای احکام مدنی',
      suspensiveEffect: 'در صورت احراز دلایل قوی و سپردن تأمین مناسب طبق ماده ۴۲۴ ق.آ.د.م، قرار تأخیر اجرای حکم صادر می‌شود.',
      courtFee: 'معادل هزینه دادرسی مرحله فرجام‌خواهی در دعاوی مالی.',
      criticalTip: 'برای توقیف نشدن مال در مرحله اجرای احکام، همزمان باید تقاضای دستور موقت یا توقف عملیات اجرایی تودیع شود.',
      serviceHref: '/services/legal-brief',
      serviceText: 'تنظیم دادخواست تخصصی اعتراض ثالث',
      sampleHref: '/samples/third-party-objection-ordinary-deed',
      sampleText: 'مشاهده نمونه دادخواست اعتراض ثالث اجرایی',
    },
  ];

  const currentRemedy = remedies.find((r) => r.id === selectedRemedy) || remedies[0];

  // Calculator Logic
  const totalAllowedDays = residenceType === 'iran' ? 20 : 60;
  const remainingDays = Math.max(0, totalAllowedDays - notificationDaysAgo);
  const isExpired = notificationDaysAgo > totalAllowedDays;

  return (
    <div className="space-y-8 my-8 text-right">
      {/* ---------------------------------------------------- */}
      {/* 1. ABOVE-THE-FOLD QUICK START: WHERE TO BEGIN */}
      {/* ---------------------------------------------------- */}
      <section className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-[#0C1222] via-[#0F172A] to-[#070B15] border-2 border-[#E5C158]/50 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-3 h-full bg-[#E5C158]" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#E5C158]/10 text-[#E5C158] border border-[#E5C158]/30">
              <Gavel className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-semibold text-[#E5C158] block mb-1">
                پاسخ فوری به دغدغه اصلی موکلان و محکومان
              </span>
              <h2 className="text-lg sm:text-xl md:text-2xl font-black text-white">
                اگر بخواهیم به رای دادگاه اعتراض کنیم، دقیقاً از کجا شروع کنیم؟
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
              <Clock className="w-3.5 h-3.5 text-[#E5C158]" />
              مهلت‌ها مشروط و غیریکنواخت هستند
            </span>
          </div>
        </div>

        {/* 3 Step Action Blueprint */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Step 1 */}
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2 relative">
            <div className="flex items-center justify-between">
              <span className="w-6 h-6 rounded-full bg-[#E5C158] text-[#070B15] font-black text-xs flex items-center justify-center">
                ۱
              </span>
              <span className="text-[11px] font-semibold text-[#E5C158]">بررسی سطر آخر دادنامه</span>
            </div>
            <h3 className="font-bold text-sm text-white">حضوری است یا غیابی؟ قطعی یا قابل تجدیدنظر؟</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              انتهای متن رای دادگاه را بخوانید. قاضی مکلف است صریحاً بنویسد: «رای صادره حضوری و ظرف ۲۰ روز قابل تجدیدنظرخواهی است» یا «غیابی و ظرف ۲۰ روز قابل واخواهی و سپس قابل تجدیدنظر است».
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2 relative">
            <div className="flex items-center justify-between">
              <span className="w-6 h-6 rounded-full bg-blue-500 text-white font-black text-xs flex items-center justify-center">
                ۲
              </span>
              <span className="text-[11px] font-semibold text-blue-400">محاسبه دقیق موعد ثنا</span>
            </div>
            <h3 className="font-bold text-sm text-white">تاریخ مشاهده ابلاغیه الکترونیک را چک کنید</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              طبق ماده ۴۴۵ ق.آ.د.م، <strong>روز ابلاغ و روز اقدام</strong> جزء مهلت ۲۰ روزه محاسبه نمی‌شوند. همچنین اگر روز بیستم جمعه یا تعطیل رسمی باشد، روز بعد از تعطیلی مهلت نهایی شماست (ماده ۴۴۴).
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2 relative">
            <div className="flex items-center justify-between">
              <span className="w-6 h-6 rounded-full bg-emerald-500 text-white font-black text-xs flex items-center justify-center">
                ۳
              </span>
              <span className="text-[11px] font-semibold text-emerald-400">تنظیم و ارسال لایحه قانونی</span>
            </div>
            <h3 className="font-bold text-sm text-white">استناد به جهات مصرح قانونی (نه صرفاً نارضایتی)</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              لایحه اعتراضی شما باید دقیقاً بر یکی از جهات ۵‌گانه ماده ۳۴۸ مدنی یا ۴۳۴ کیفری سوار شود و از طریق دفاتر خدمات قضایی یا کارتابل خودکاربری ثنا به شعبه بدوی ارسال گردد.
            </p>
          </div>
        </div>

        {/* Warning Callout */}
        <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-500/40 flex items-start gap-3 text-xs text-amber-200">
          <AlertTriangle className="w-4 h-4 text-[#E5C158] shrink-0 mt-0.5" />
          <span>
            <strong className="text-white">قاعده طلایی دادرسی ایران: </strong>
            هرگز تصور نکنید «مهلت اعتراض همیشه و برای همه ۲۰ روز است». مهلت اعتراض برای افراد مقیم خارج از کشور ۲ ماه است؛ برای احکام غیابی ابتدا مهلت واخواهی و سپس مهلت تجدیدنظر جریان می‌یابد؛ و در صورت وجود اعذار موجه ماده ۳۰۶ (مانند بستری در بیمارستان، فوت بستگان درجه یک یا حوادث غیرمترقبه) اعتراض خارج از مهلت نیز با اثبات عذر پذیرفته می‌شود.
          </span>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. INTERACTIVE TABS NAVIGATION */}
      {/* ---------------------------------------------------- */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-3">
        <button
          onClick={() => setActiveTab('decision-tree')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${
            activeTab === 'decision-tree'
              ? 'bg-[#E5C158] text-[#070B15] shadow-lg shadow-[#E5C158]/20'
              : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>بررسی اولیه مسیرهای احتمالی اعتراض (۶ روش قانونی)</span>
        </button>

        <button
          onClick={() => setActiveTab('timeline-calc')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${
            activeTab === 'timeline-calc'
              ? 'bg-[#E5C158] text-[#070B15] shadow-lg shadow-[#E5C158]/20'
              : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800'
          }`}
        >
          <Calculator className="w-4 h-4" />
          <span>محاسبه‌گر تقریبی مواعد و مهلت‌های ثنا</span>
        </button>

        <button
          onClick={() => setActiveTab('civil-vs-criminal')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${
            activeTab === 'civil-vs-criminal'
              ? 'bg-[#E5C158] text-[#070B15] shadow-lg shadow-[#E5C158]/20'
              : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800'
          }`}
        >
          <Scale className="w-4 h-4" />
          <span>مقایسه اعتراض در دعاوی حقوقی و کیفری</span>
        </button>

        <button
          onClick={() => setActiveTab('grounds')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${
            activeTab === 'grounds'
              ? 'bg-[#E5C158] text-[#070B15] shadow-lg shadow-[#E5C158]/20'
              : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>جهات ۵‌گانه نقض رای (مواد ۳۴۸ و ۴۳۴)</span>
        </button>
      </div>

      {/* ---------------------------------------------------- */}
      {/* TAB 1: DECISION TREE & REMEDY MATRIX */}
      {/* ---------------------------------------------------- */}
      {activeTab === 'decision-tree' && (
        <div className="space-y-6">
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
            <span className="text-xs text-[#E5C158] font-bold block mb-1">
              بررسی اولیه وضعیت پرونده بر اساس خوداظهاری
            </span>
            <p className="text-xs text-slate-300 mb-4">
              شرایط کلی پرونده خود را انتخاب نمایید تا مشخصات مسیر احتمالی، مرجع صالح، مهلت و الزامات قانونی جهت ارزیابی اولیه نمایش داده شود:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {remedies.map((remedy) => (
                <button
                  key={remedy.id}
                  onClick={() => setSelectedRemedy(remedy.id)}
                  className={`p-3 rounded-xl text-right transition-all border flex flex-col justify-between ${
                    selectedRemedy === remedy.id
                      ? 'bg-amber-500/15 border-[#E5C158] text-white shadow-md'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <span className="text-xs font-bold block text-[#E5C158] mb-1">
                    {remedy.remedyType}
                  </span>
                  <span className="text-[11px] line-clamp-2 leading-relaxed">
                    {remedy.badge}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Detailed Selected Remedy Card */}
          <div className="p-6 md:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div className="space-y-1">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${currentRemedy.badgeColor}`}>
                  {currentRemedy.badge}
                </span>
                <h3 className="text-xl font-black text-white pt-1">
                  مسیر پیشنهادی اولیه: {currentRemedy.remedyType}
                </h3>
              </div>
              <span className="text-xs text-slate-400">
                مستند قانونی: <strong className="text-slate-200">{currentRemedy.legalArticles}</strong>
              </span>
            </div>

            {/* Advisory Note */}
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 leading-relaxed flex items-start gap-2">
              <Info className="w-4 h-4 text-[#E5C158] shrink-0 mt-0.5" />
              <span>
                <strong>تذکر رویه‌ای: </strong>
                این پیشنهاد صرفاً یک ارزیابی اولیه بر اساس خوداظهاری شرایط پرونده است. انطباق قطعی روش دادرسی مستلزم تطبیق با سطر پایانی دادنامه بدوی، نوع ابلاغیه (واقعی یا قانونی در ثنا) و وضعیت قطعیت رای می‌باشد.
              </span>
            </div>

            {/* Situation Summary */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80">
              <span className="text-xs text-[#E5C158] font-bold block mb-1">
                این روش چه زمانی و برای چه وضعیتی اعمال می‌شود؟
              </span>
              <p className="text-sm text-slate-200 leading-relaxed font-medium">
                {currentRemedy.situationTitle}
              </p>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                {currentRemedy.whenApplies}
              </p>
            </div>

            {/* Spec Matrix Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1.5">
                <span className="text-slate-400 font-medium block">مرجع صالح رسیدگی:</span>
                <p className="text-slate-200 font-semibold leading-relaxed">
                  {currentRemedy.targetCourt}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1.5">
                <span className="text-slate-400 font-medium block">مهلت قانونی دقیق:</span>
                <p className="text-[#E5C158] font-semibold leading-relaxed">
                  {currentRemedy.legalDeadline}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1.5">
                <span className="text-slate-400 font-medium block">اثر تعلیقی بر اجرای حکم:</span>
                <p className="text-slate-200 leading-relaxed">
                  {currentRemedy.suspensiveEffect}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1.5">
                <span className="text-slate-400 font-medium block">هزینه دادرسی و تعرفه:</span>
                <p className="text-slate-200 leading-relaxed">
                  {currentRemedy.courtFee}
                </p>
              </div>
            </div>

            {/* Critical Legal Tip */}
            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 flex items-start gap-3 text-xs text-amber-200">
              <AlertTriangle className="w-4 h-4 text-[#E5C158] shrink-0 mt-0.5" />
              <span>
                <strong className="text-white">نکته حیاتی و رویه قضایی: </strong>
                {currentRemedy.criticalTip}
              </span>
            </div>

            {/* Direct Action Links */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <Link
                href={currentRemedy.serviceHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#E5C158] text-[#070B15] font-black text-xs md:text-sm hover:bg-amber-400 transition-colors shadow-lg shadow-[#E5C158]/20"
              >
                <span>{currentRemedy.serviceText}</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>

              {currentRemedy.sampleHref && (
                <Link
                  href={currentRemedy.sampleHref}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs md:text-sm transition-colors border border-slate-700 font-semibold"
                >
                  <FileText className="w-4 h-4 text-[#E5C158]" />
                  <span>{currentRemedy.sampleText}</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* TAB 2: TIMELINE CALCULATOR */}
      {/* ---------------------------------------------------- */}
      {activeTab === 'timeline-calc' && (
        <div className="p-6 md:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/30">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white">
                محاسبه‌گر تقریبی و تخمین اولیه مهلت‌های ثنا (ابزار کمکی)
              </h3>
              <p className="text-xs text-slate-400">
                برآورد اولیه مهلت قانونی ۲۰ روزه / ۲ ماهه بدون احتساب استثنائات رویه‌ای
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Input Controls */}
            <div className="space-y-4">
              <div>
                <span className="text-xs font-medium text-slate-300 block mb-1.5">
                  محل اقامت شخص معترض به رای:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setResidenceType('iran')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                      residenceType === 'iran'
                        ? 'bg-amber-500/20 border-[#E5C158] text-[#E5C158]'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    مقیم ایران (مهلت ۲۰ روزه)
                  </button>

                  <button
                    type="button"
                    onClick={() => setResidenceType('abroad')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                      residenceType === 'abroad'
                        ? 'bg-amber-500/20 border-[#E5C158] text-[#E5C158]'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    مقیم خارج از کشور (مهلت ۲ ماهه)
                  </button>
                </div>
                {residenceType === 'abroad' && (
                  <span className="text-[11px] text-slate-400 mt-1 block">
                    * مهلت اشخاص مقیم خارج ۲ ماه تقویمی است (در اینجا به صورت تخمینی ۶۰ روز لحاظ شده است).
                  </span>
                )}
              </div>

              <div>
                <label htmlFor={daysInputId} className="text-xs font-medium text-slate-300 block mb-1.5">
                  چند روز از تاریخ مشاهده ابلاغیه دادنامه در ثنا سپری شده است؟
                </label>
                <div className="flex items-center gap-3">
                  <input
                    id={daysInputId}
                    type="number"
                    min="0"
                    max="100"
                    value={notificationDaysAgo}
                    onChange={(e) => setNotificationDaysAgo(Number(e.target.value) || 0)}
                    className="w-24 px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white font-bold text-center focus:outline-none focus:border-[#E5C158]"
                  />
                  <span className="text-xs text-slate-400">روز گذشته است</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                <span className="font-bold text-[#E5C158] flex items-center gap-1.5">
                  <Info className="w-4 h-4" />
                  فرمول قانونی احتساب مواعد (مواد ۴۴۴ و ۴۴۵)
                </span>
                <p className="text-slate-300 leading-relaxed">
                  ۱. طبق ماده ۴۴۵ ق.آ.د.م روز ابلاغ و روز اقدام جزء موعد محسوب نمی‌شوند و شمارش از فردای رویت آغاز می‌گردد؛ با این حال هرگز نباید ثبت اعتراض را به امید روزهای اضافه به تأخیر انداخت.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  ۲. اگر روز پایانی موعد مصادف با تعطیل رسمی یا جمعه باشد، نخستین روز کاری پس از تعطیلات، پایان موعد خواهد بود.
                </p>
              </div>
            </div>

            {/* Output Status Card */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-xs text-slate-400 block">ارزیابی اولیه مهلت قانونی شما:</span>

                {!isExpired ? (
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                      برآورد اولیه: درون مهلت قانونی هستید
                    </div>
                    <div className="text-3xl font-black text-white">
                      حدود <span className="text-[#E5C158]">{remainingDays}</span> روز فرصت تقریبی دارید
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      بر مبنای ارقام واردشده، فرصت اولیه شما باقی است. پیشنهاد می‌شود لایحه مستدل خود را بلافاصله نهایی نموده و ثبت آن را به روزهای پایانی موکول نکنید.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold">
                      <AlertTriangle className="w-4 h-4" />
                      مهلت اولیه بر اساس تاریخ اعلامی سپری شده است
                    </div>
                    <div className="text-2xl font-black text-rose-400">
                      رای احتمالاً قطعی یا در آستانه قطعیت است
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      اگر عذر موجه قانونی دارید (ماده ۳۰۶ نظیر بستری در بیمارستان، فوت بستگان درجه یک یا عدم اطلاع واقعی از رای غیابی)، می‌توانید همزمان با ثبت اعتراض، تقاضای پذیرش عذر موجه نمایید؛ در غیر این صورت بررسی راه‌های فوق‌العاده نظیر اعاده دادرسی لازم است.
                    </p>
                  </div>
                )}
              </div>

              <Link
                href="/services/appeal"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#E5C158] text-[#070B15] font-black text-xs hover:bg-amber-400 transition-colors shadow-md"
              >
                <span>تنظیم فوری دادخواست و لایحه در مهلت قانونی</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Calculator Disclaimer Box */}
          <div className="p-3.5 rounded-xl bg-slate-950/90 border border-amber-500/20 text-xs text-slate-400 leading-relaxed flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-[#E5C158] shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-200">سلب مسئولیت و محدودیت‌های ابزار محاسباتی: </strong>
              این محاسبه‌گر صرفاً یک ابزار کمکی برای برآورد تقریبی است و نمی‌تواند استثنائات پیچیده رویه‌ای (مانند تعطیلات متوالی رسمی، توالی مهلت‌ها در احکام غیابی، نوع ابلاغ واقعی در برابر قانونی، و پذیرش اعذار موجه) را محاسبه نماید. تعیین موعد قطعی مستلزم رویت برگه ابلاغیه و تایید دفاتر خدمات قضایی یا کارشناس حقوقی است.
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* TAB 3: CIVIL VS CRIMINAL PROCEEDINGS */}
      {/* ---------------------------------------------------- */}
      {activeTab === 'civil-vs-criminal' && (
        <div className="p-6 md:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="space-y-1">
              <h3 className="text-lg md:text-xl font-bold text-white">
                تفاوت‌های بنیادین اعتراض در دعاوی حقوقی (مدنی) و کیفری
              </h3>
              <p className="text-xs text-slate-400">
                عدم تفکیک این دو حوزه باعث اشتباه در پرداخت هزینه دادرسی یا ارجاع به مرجع ناصالح می‌شود
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/80 text-slate-300">
                  <th className="p-3 font-bold text-[#E5C158]">شاخص مقایسه</th>
                  <th className="p-3 font-bold text-blue-400">دعاوی حقوقی (آیین دادرسی مدنی)</th>
                  <th className="p-3 font-bold text-rose-400">دعاوی کیفری (آیین دادرسی کیفری)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                <tr>
                  <td className="p-3 font-bold text-slate-200">قانون حاکم</td>
                  <td className="p-3">قانون آیین دادرسی دادگاه‌های عمومی و انقلاب در امور مدنی مصوب ۱۳۷۹</td>
                  <td className="p-3">قانون آیین دادرسی کیفری مصوب ۱۳۹۲ با اصلاحات بعدی</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-200">هزینه دادرسی تجدیدنظر</td>
                  <td className="p-3">در دعاوی مالی ۴.۵٪ ارزش خواسته یا محکوم‌به (در دعاوی غیرمالی طبق تعرفه ثابت مقطوع سالیانه)</td>
                  <td className="p-3">تعرفه ثابت و ناچیز قضایی مصوب بودجه (صرف‌نظر از مبلغ یا نوع جرم)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-200">قاعده عدم تشدید مجازات</td>
                  <td className="p-3">موضوعیت ندارد؛ دادگاه در چارچوب خواسته طرفین تصمیم می‌گیرد.</td>
                  <td className="p-3">ممنوعیت تشدید مجازات صرفاً با اعتراض متهم (ماده ۴۵۸ کیفری)؛ در صورت اعتراض دادستان یا شاکی نیز تشدید فقط تا حداقل قانونی ممکن است.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-200">مرجع اعتراض به آرای خاص</td>
                  <td className="p-3">دادگاه تجدیدنظر استان و برای موارد محدود احوال شخصیه دیوان عالی</td>
                  <td className="p-3">دادگاه تجدیدنظر استان (کیفری دو) یا دیوان عالی کشور (جرایم مهم کیفری یک)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-200">اثر تعلیقی اعتراض</td>
                  <td className="p-3">مانع اجرای حکم است مگر در موارد استثنا مانند احکام تصرف عدوانی (ماده ۱۷۵)</td>
                  <td className="p-3">اجرای مجازات‌های تعزیری تا قطعیت متوقف می‌ماند مگر قرارهای تأمین کیفری</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/30 space-y-1.5 text-xs">
              <span className="font-bold text-blue-300 block">مشکل تامین هزینه دادرسی سنگین حقوقی؟</span>
              <p className="text-slate-300 leading-relaxed">
                اگر توان پرداخت ۴.۵ درصد هزینه دادرسی تجدیدنظر را ندارید، می‌توانید همزمان دادخواست «اعسار از هزینه دادرسی تجدیدنظر» ثبت کنید تا بدون رد دادخواست، پرونده بررسی شود.
              </p>
              <Link href="/services/insolvency-court-fee" className="text-[#E5C158] font-bold inline-flex items-center gap-1 mt-1 hover:underline">
                سفارش دادخواست اعسار از هزینه تجدیدنظر
                <ArrowLeft className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-1.5 text-xs">
              <span className="font-bold text-rose-300 block">پرونده در دادسرا بسته شده است؟</span>
              <p className="text-slate-300 leading-relaxed">
                اگر در مرحله دادسرا قرار «منع تعقیب» یا «موقوفی تعقیب» صادر شده، این قرار در دادگاه کیفری دو ظرف ۱۰ روز قابل اعتراض است و تابع تجدیدنظرخواهی احکام نیست.
              </p>
              <Link href="/services/objection-non-prosecution-order" className="text-[#E5C158] font-bold inline-flex items-center gap-1 mt-1 hover:underline">
                تنظیم اعتراض به قرار منع تعقیب دادسرا
                <ArrowLeft className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* TAB 4: LEGAL GROUNDS (ARTICLES 348 & 434) */}
      {/* ---------------------------------------------------- */}
      {activeTab === 'grounds' && (
        <div className="p-6 md:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-lg md:text-xl font-bold text-white mb-1">
              جهات مصرح قانونی برای نقض دادنامه (شروط قبولی اعتراض)
            </h3>
            <p className="text-xs text-slate-400">
              دادگاه تجدیدنظر لایحه‌ای را بررسی می‌کند که ذیل یکی از این بندهای قانونی تنظیم شده باشد
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Grounds in Civil Law: Article 348 */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-amber-500/30 space-y-4">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm border-b border-slate-800 pb-2.5">
                <Scale className="w-4 h-4" />
                <span>جهات ۵‌گانه ماده ۳۴۸ آیین دادرسی مدنی</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-amber-500/10 text-[#E5C158] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    الف
                  </span>
                  <span>
                    <strong className="text-white">ادعای عدم اعتبار مستندات دادگاه: </strong>
                    اسناد مورد استناد قاضی بدوی مجعول، بی‌اعتبار یا فاقد اثر قانونی بوده‌اند.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-amber-500/10 text-[#E5C158] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    ب
                  </span>
                  <span>
                    <strong className="text-white">ادعای فقدان شرایط قانونی شهود: </strong>
                    شاهدان شرایط شرعی/قانونی شهادت (نظیر ذی‌نفع بودن یا دشمنی آشکار) را نداشته‌اند.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-amber-500/10 text-[#E5C158] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    ج
                  </span>
                  <span>
                    <strong className="text-white">ادعای عدم توجه قاضی به دلایل ابرازی: </strong>
                    فیش‌ها، قراردادها یا لوایح خوانده/خواهان بدون استدلال قضایی نادیده گرفته شده‌اند.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-amber-500/10 text-[#E5C158] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    د
                  </span>
                  <span>
                    <strong className="text-white">ادعای عدم صلاحیت قاضی یا دادگاه: </strong>
                    پرونده خارج از صلاحیت محلی یا ذاتی شعبه بدوی رسیدگی شده است.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-amber-500/10 text-[#E5C158] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    هـ
                  </span>
                  <span>
                    <strong className="text-white">ادعای مخالفت رای با موازین شرع و قوانین: </strong>
                    حکم صادره صریحاً با متن مواد قانونی آمره یا فتاوای معتبر در تضاد است.
                  </span>
                </li>
              </ul>
            </div>

            {/* Grounds in Criminal Law: Article 434 */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-blue-500/30 space-y-4">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-sm border-b border-slate-800 pb-2.5">
                <Gavel className="w-4 h-4" />
                <span>جهات ۵‌گانه ماده ۴۳۴ آیین دادرسی کیفری</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-500/10 text-blue-400 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    الف
                  </span>
                  <span>
                    <strong className="text-white">ادعای عدم اعتبار ادله یا اسناد استنادی دادگاه: </strong>
                    اسناد استنادی مجعول یا فاقد اعتبار بوده، یا گزارش ضابطین و اظهارات شهود دارای خدشه قانونی است.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-500/10 text-blue-400 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    ب
                  </span>
                  <span>
                    <strong className="text-white">ادعای مخالفت رای با قانون: </strong>
                    اشتباه در تفسیر عناصر مادی یا معنوی جرم، نادیده گرفتن علل رافع مسئولیت کیفری یا نقص در انطباق ماده قانونی.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-500/10 text-blue-400 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    پ
                  </span>
                  <span>
                    <strong className="text-white">عدم صلاحیت دادگاه صادرکننده رای یا وجود یکی از جهات رد دادرس: </strong>
                    رسیدگی خارج از صلاحیت ذاتی یا محلی شعبه بوده یا قاضی پرونده مشمول جهات رد دادرس (قرابت یا نفع شخصی) بوده است.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-500/10 text-blue-400 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    ت
                  </span>
                  <span>
                    <strong className="text-white">ادعای عدم توجه دادگاه به ادله ابرازی: </strong>
                    عدم ارجاع به کارشناسی، عدم استعلام از مراجع رسمی یا نادیده گرفتن لوایح و دفاعیات اساسی متهم یا وکیل وی.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-500/10 text-blue-400 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    ث
                  </span>
                  <span>
                    <strong className="text-white">ادعای عدم انطباق یا عدم تناسب مجازات با جرم ارتکابی: </strong>
                    عدم تناسب کیفر تعیین‌شده با ماهیت رفتار مرتکب یا عدم اعمال نهادهای ارفاقی مقرر در قانون مجازات اسلامی.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
