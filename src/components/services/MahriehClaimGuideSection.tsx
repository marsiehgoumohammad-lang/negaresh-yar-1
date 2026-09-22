'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import {
  FileText,
  Scale,
  Building2,
  AlertTriangle,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  Coins,
  FileCheck2,
  Calculator,
  UserCheck,
  Ban,
  Clock,
} from 'lucide-react';

export function MahriehClaimGuideSection() {
  return (
    <section className="relative space-y-12 my-12" id="service-guide">
      <Container>
        {/* Header Badge & Title */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold">
            <Sparkles className="w-4 h-4" />
            <span>راهنمای جامع، کاربردی و قانونی مطالبه مهریه</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            راهنمای تخصصی مطالبه مهریه، اجرای اسناد رسمی و توقیف اموال
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            بررسی دقیق ماده ۱۰۸۲ قانون مدنی، مقررات اجرای مفاد اسناد رسمی، ماده ۲۲ قانون حمایت خانواده، صلاحیت های دادگاه خانواده و نحوه توقیف اموال.
          </p>
        </div>

        {/* Section 1: Definition & Legal Scope */}
        <div id="what-is-mahrieh-claim" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Coins className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۱. ماهیت حقوقی مهریه و تفاوت عندالمطالبه با عندالاستطاعه
            </h3>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              به موجب <strong>ماده ۱۰۸۲ قانون مدنی</strong>، به مجرد وقوع عقد نکاح، زوجه مالک مهر می شود و می تواند هر نوع تصرفی که بخواهد در آن بنماید. مهریه دینی است ممتاز که بر ذمه زوج مستقر می شود و حتی در صورت فوت زوج، قبل از تقسیم ترکه میان وراث از دارایی های متوفی تسویه خواهد شد.
            </p>
            <p>
              با این حال، شیوه مطالبه و ضمانت های اجرایی وصول مهریه بستگی به قید <strong>عندالمطالبه</strong> یا <strong>عندالاستطاعه</strong> بودن آن در سند رسمی ازدواج دارد:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-[#E5C158] font-bold text-base">
                  <CheckCircle2 className="w-5 h-5" />
                  <h4>مهریه عندالمطالبه</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  زوجه در هر زمان پس از وقوع عقد، بدون نیاز به اثبات توانایی مالی زوج، حق مطالبه تمام مهریه را دارد. در صورت استنکاف زوج از پرداخت، بار اثبات عدم تمکن مالی (اعسار) بر عهده مرد است و تا سقف قانونی، ضمانت های اجرای حبس (ماده ۳) قابل اعمال خواهد بود.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-base">
                  <Scale className="w-5 h-5" />
                  <h4>مهریه عندالاستطاعه</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  پرداخت مهریه مشروط به داشتن استطاعت و توان مالی شوهر است. در این حالت، بار اثبات دارایی و تمکن زوج بر عهده زوجه است و چنانچه زوجه نتواند مالی از شوهر شناسایی و معرفی کند، امکان صدور حکم جلب یا بازداشت زوج وجود نخواهد داشت.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#070B15] border border-amber-500/20 text-amber-200 text-xs sm:text-sm leading-relaxed">
              <strong>نکته کلیدی:</strong> نوع مسکوکات یا وجه نقد در مهریه تعیین کننده است. مهریه ریالی با استعلام از بانک مرکزی بر اساس <strong>شاخص بهای کالا و خدمات مصرفی</strong> به نرخ روز محاسبه و وصول می گردد.
            </div>
          </div>
        </div>

        {/* Section 2: Legal Basis */}
        <div id="legal-basis" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۲. مستندات و چارچوب قانونی مطالبه مهریه در نظام قضایی ایران
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <FileCheck2 className="w-4 h-4 shrink-0" />
                <h4>آیین نامه اجرای مفاد اسناد رسمی و رویه قضایی</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                برای مهریه های مندرج در سند رسمی ازدواج، طبق بخشنامه های قضایی و مقررات ثبتی، فرآیند وصول بدواً از طریق اجرای ثبت پیگیری می شود و در صورت عدم دستیابی به مال، با اخذ گواهی ثبتی در دادگاه خانواده اقامه دعوا می گردد. در اسناد عادی ازدواج، صلاحیت دادگاه از ابتدا محفوظ است.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <FileCheck2 className="w-4 h-4 shrink-0" />
                <h4>ماده ۲۲ قانون حمایت خانواده</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                هرگاه مهریه تا ۱۱۰ سکه تمام بهار آزادی یا معادل آن باشد، وصول آن مشمول مقررات ماده ۳ قانون نحوه اجرای محکومیت های مالی است. نسبت به مازاد ۱۱۰ سکه، تنها در صورت ملائت و معرفی اموال زوج، وصول مهریه امکان پذیر خواهد بود.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <FileCheck2 className="w-4 h-4 shrink-0" />
                <h4>ماده ۳ قانون نحوه اجرای محکومیت های مالی</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                در صورتی که زوج پس از ابلاغ اجرائیه دادگاه نسبت به تأدیه محکوم به اقدام ننماید و ظرف مهلت قانونی ۳۰ روزه دادخواست اعسار ندهد، به تقاضای زوجه تا زمان پرداخت یا اثبات اعسار حبس می شود.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <FileCheck2 className="w-4 h-4 shrink-0" />
                <h4>ماده ۲۴ قانون محکومیت های مالی و مستثنیات دین</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                قانون گذار برخی اموال ضروری بدهکار (مسکن در شأن، ابزار کار، ودیعه مسکن) را مصون از توقیف دانسته است تا حداقل معاش و سکونت بدهکار حفظ گردد.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Conditions and Criteria */}
        <div id="criteria-route-selection" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۳. مسیر دادرسی: چه زمانی اجرای ثبت و چه زمانی دادگاه خانواده؟
            </h3>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              یکی از مهم ترین ابهامات متقاضیان، تقدم و تأخر مراجعه به ثبت و دادگاه است. رویه قضایی و اداری فعلی مسیر را به شرح زیر مشخص کرده است:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <h4>مرحله اول: مراجعه به اداره اجرای ثبت اسناد</h4>
                </div>
                <ul className="text-xs sm:text-sm text-slate-400 space-y-1.5 list-disc list-inside">
                  <li>الزام قانونی برای اسناد رسمی ثبت ازدواج</li>
                  <li>سرعت فوق العاده در توقیف حساب ها، املاک و خودرو</li>
                  <li>امکان صدور فوری دستور ممنوع الخروجی بدهکار</li>
                  <li>عدم الزام به پرداخت هزینه دادرسی ۳.۵ درصدی در بدو امر</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <h4>مرحله دوم: مراجعه به دادگاه خانواده</h4>
                </div>
                <ul className="text-xs sm:text-sm text-slate-400 space-y-1.5 list-disc list-inside">
                  <li>در صورت عدم کشف اموال کافی در مراجع ثبتی</li>
                  <li>پس از صدور گواهی عدم دسترسی یا انصراف زوجه از اجرای ثبت</li>
                  <li>امکان بهره گیری از ضمانت اجرای جلب و حبس بدهکار (ماده ۳)</li>
                  <li>امکان رسیدگی به دعاوی ابطال معامله صوری به قصد فرار از دین</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Required Documents */}
        <div id="required-documents" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۴. مدارک و ضمائم ضروری برای مطالبه مهریه
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="text-[#E5C158] font-bold text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                سند رسمی ازدواج (عقدنامه)
              </div>
              <p className="text-xs text-slate-400">
                اصل سند نکاحیه یا رونوشت رسمی تأییدشده از همان دفترخانه محل ثبت عقد.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="text-[#E5C158] font-bold text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                مدارک هویتی زوجه
              </div>
              <p className="text-xs text-slate-400">
                اصل و تصویر کارت ملی هوشمند و شناسنامه کامل متقاضی همراه با ثبت نام سامانه ثنا.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="text-[#E5C158] font-bold text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                فرم تقاضای صدور اجراییه
              </div>
              <p className="text-xs text-slate-400">
                درخواست کتبی صدور اجراییه نسبت به تمام یا بخشی از مهریه مافی القباله.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="text-[#E5C158] font-bold text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                مشخصات اموال شناخته شده زوج
              </div>
              <p className="text-xs text-slate-400">
                شماره پلاک ثبتی ملک، شماره پلاک یا شاسی خودرو، نام بانک ها یا محل کار زوج.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="text-[#E5C158] font-bold text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                گواهی اجرای ثبت (مرحله دادگاه)
              </div>
              <p className="text-xs text-slate-400">
                گواهی رسمی اداره اجرای اسناد مبنی بر مختومه شدن یا عدم وصول مهریه در ثبت.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="text-[#E5C158] font-bold text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                تقاضای تأمین خواسته پیش از ابلاغ
              </div>
              <p className="text-xs text-slate-400">
                درج مستدل تقاضای قرار تأمین خواسته در دادخواست جهت جلوگیری از انتقال اموال.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5: Step-by-Step Procedure */}
        <div id="step-by-step-procedure" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۵. نقشه راه و مراحل اجرایی وصول مهریه از آغاز تا دریافت
            </h3>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4 items-start p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <div className="w-8 h-8 rounded-full bg-[#E5C158]/20 text-[#E5C158] font-bold flex items-center justify-center shrink-0">
                ۱
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-white text-base">مراجعه به دفترخانه ازدواج محل ثبت عقد</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  زوجه یا نماینده قانونی وی با همراه داشتن اصل سند نکاحیه و شناسنامه، به دفترخانه ای که عقد در آن جاری شده مراجعه کرده و فرم تقاضای صدور اجراییه را امضا می کند. سردفتر پس از احراز هویت، اجراییه را صادر و پرونده را الکترونیکی به اداره اجرای ثبت اسناد ارسال می نماید.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <div className="w-8 h-8 rounded-full bg-[#E5C158]/20 text-[#E5C158] font-bold flex items-center justify-center shrink-0">
                ۲
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-white text-base">تشکیل پرونده در اداره اجرای اسناد و استعلامات سه گانه</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  با وصول پرونده به دایره اجرای ثبت، ابلاغیه پرداخت صادر شده و استعلامات سراسری بانکی (بانک مرکزی)، پلاک ثبتی املاک (سازمان ثبت اسناد) و پلاک خودرو (راهور ناجا) به صورت سیستمی ثبت می شود. همزمان زوجه می تواند تقاضای ممنوع الخروجی زوج را مطرح کند.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <div className="w-8 h-8 rounded-full bg-[#E5C158]/20 text-[#E5C158] font-bold flex items-center justify-center shrink-0">
                ۳
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-white text-base">توقیف اموال، کارشناسی و برگزاری مزایده</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  چنانچه مالی از زوج شناسایی گردد (به استثنای مستثنیات دین)، دستور بازداشت صادر شده و مال توسط کارشناس رسمی دادگستری قیمت گذاری می شود. در نهایت مال از طریق سامانه مزایده الکترونیک به فروش رفته و مهریه پرداخت می گردد. اگر زوج کارمند باشد، ماهانه یک سوم (در صورت نداشتن فرزند) یا یک چهارم (با داشتن فرزند) از حقوق او کسر می شود.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <div className="w-8 h-8 rounded-full bg-[#E5C158]/20 text-[#E5C158] font-bold flex items-center justify-center shrink-0">
                ۴
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-white text-base">اخذ گواهی انصراف و مراجعه به دفاتر خدمات الکترونیک قضایی</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  چنانچه اموالی در اجرای ثبت پیدا نشود یا اموال شناسایی شده تکافوی مهریه را ندهد، زوجه با اخذ گواهی مربوطه از ثبت، به دفاتر خدمات قضایی مراجعه نموده و دادخواست مطالبه مهریه به همراه تقاضای صدور قرار تأمین خواسته پیش از ابلاغ را به دادگاه خانواده ارسال می دارد.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <div className="w-8 h-8 rounded-full bg-[#E5C158]/20 text-[#E5C158] font-bold flex items-center justify-center shrink-0">
                ۵
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-white text-base">رسیدگی در دادگاه خانواده و اجرای احکام مدنی</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  دادگاه خانواده وقت رسیدگی تعیین کرده و پس از احراز رابطه زوجیت و استقرار مهریه بر ذمه زوج، رأی محکومیت صادر می نماید. با قطعیت دادنامه و صدور اجرائیه، زوج موظف است مهریه را بپردازد یا دادخواست اعسار دهد؛ در غیر این صورت تا سقف ۱۱۰ سکه امکان بازداشت وی طبق ماده ۳ وجود خواهد داشت.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 6: Comparison Matrix */}
        <div id="comparison-matrix" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۶. مقایسه تطبیقی اجرای ثبت اسناد رسمی در برابر دادگاه خانواده
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-[#070B15] text-[#E5C158]">
                  <th className="p-3 sm:p-4 font-bold">معیار مقایسه</th>
                  <th className="p-3 sm:p-4 font-bold">اداره اجرای ثبت اسناد</th>
                  <th className="p-3 sm:p-4 font-bold">دادگاه خانواده</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr className="hover:bg-slate-900/40">
                  <td className="p-3 sm:p-4 font-medium text-white">سرعت توقیف اموال</td>
                  <td className="p-3 sm:p-4 text-emerald-400">بسیار سریع و مکانیزه (سامانه ای)</td>
                  <td className="p-3 sm:p-4 text-amber-300">منوط به صدور قرار تأمین خواسته</td>
                </tr>
                <tr className="hover:bg-slate-900/40">
                  <td className="p-3 sm:p-4 font-medium text-white">هزینه اولیه دادرسی</td>
                  <td className="p-3 sm:p-4">نیم عشر اجرایی پس از وصول از بدهکار دریافت می شود</td>
                  <td className="p-3 sm:p-4">۳.۵٪ ارزش خواسته (مگر ثبت دادخواست اعسار)</td>
                </tr>
                <tr className="hover:bg-slate-900/40">
                  <td className="p-3 sm:p-4 font-medium text-white">دستور ممنوع الخروجی</td>
                  <td className="p-3 sm:p-4 text-emerald-400">سریع و با تقاضای کتبی زوجه</td>
                  <td className="p-3 sm:p-4">پس از قطعیت حکم و صدور اجرائیه</td>
                </tr>
                <tr className="hover:bg-slate-900/40">
                  <td className="p-3 sm:p-4 font-medium text-white">امکان حکم جلب (حبس)</td>
                  <td className="p-3 sm:p-4 text-rose-400">به هیچ عنوان ممکن نیست (فقط توقیف مال)</td>
                  <td className="p-3 sm:p-4 text-emerald-400">ممکن است (ماده ۳ تا سقف ۱۱۰ سکه)</td>
                </tr>
                <tr className="hover:bg-slate-900/40">
                  <td className="p-3 sm:p-4 font-medium text-white">رسیدگی به ادعای اعسار</td>
                  <td className="p-3 sm:p-4">در ثبت اعسار رسیدگی نمی شود</td>
                  <td className="p-3 sm:p-4">دادگاه به دادخواست اعسار و تقسیط رسیدگی می کند</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 7: Exemptions & Dangerous Mistakes */}
        <div id="exemptions-and-mistakes" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۷. مستثنیات دین و خطاهای مهلک در پرونده های مهریه
            </h3>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-amber-500/20 space-y-2">
              <h4 className="font-bold text-amber-300 text-sm sm:text-base flex items-center gap-2">
                <Ban className="w-4 h-4 shrink-0" />
                اموالی که قانوناً قابل توقیف نیستند (مستثنیات دین ماده ۲۴)
              </h4>
              <ul className="text-xs sm:text-sm text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
                <li>منزل مسکونی که عرفاً در شأن زوج در حالت اعسار باشد.</li>
                <li>اثاثیه مورد نیاز ضروری زندگی که برای رفع حوائج اولیه لازم است.</li>
                <li>آذوقه و وسایل کار و امرار معاش (نظیر تاکسی و خودروی کاری راننده، ابزار کارگاهی).</li>
                <li>ودیعه مسکن پرداختی به موجر مشروط بر آنکه زوج بدون آن نتواند مسکن مناسبی اجاره کند.</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#070B15] border border-rose-500/20 space-y-2">
                <div className="text-rose-400 font-bold text-sm flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  طرح دعوای سند رسمی بدون گواهی ثبتی
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  در مهریه های رسمی، ثبت دادخواست در دادگاه بدون اخذ گواهی انصراف یا عدم وصول از اجرای ثبت، به دلیل رویه اداری دفاتر با عدم استماع یا توقف رسیدگی مواجه می شود.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#070B15] border border-rose-500/20 space-y-2">
                <div className="text-rose-400 font-bold text-sm flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  غفلت از تأمین خواسته پیش از ابلاغ
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  اگر در متن دادخواست تقاضای صدور قرار تأمین خواسته بدون ابلاغ نشود، زوج بلافاصله پس از پیامک ثنا اموال را منتقل نموده و روند وصول پیچیده می شود.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 8: User Options & Direct Cluster Links */}
        <div id="user-options" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Calculator className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۸. ابزارها و خدمات تکمیلی نگارش یار در دعاوی مهریه
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/calculators/mehrieh"
              className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 hover:border-[#E5C158]/50 transition-all space-y-2 group"
            >
              <div className="text-[#E5C158] font-bold text-sm flex items-center justify-between">
                <span>ماشین حساب مهریه</span>
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                محاسبه آنلاین شاخص بهای روز مهریه ریالی به نرخ بانک مرکزی.
              </p>
            </Link>

            <Link
              href="/samples/mehrieh-execution-registry-petition"
              className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 hover:border-[#E5C158]/50 transition-all space-y-2 group"
            >
              <div className="text-[#E5C158] font-bold text-sm flex items-center justify-between">
                <span>فرم تقاضای اجرای ثبت</span>
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                قالب رسمی درخواست صدور اجراییه از دفترخانه و دایره ثبت اسناد.
              </p>
            </Link>

            <Link
              href="/samples/mahrieh-court-petition"
              className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 hover:border-[#E5C158]/50 transition-all space-y-2 group"
            >
              <div className="text-[#E5C158] font-bold text-sm flex items-center justify-between">
                <span>دادخواست دادگاه خانواده</span>
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                متن استاندارد دادخواست مهریه با تأمین خواسته پیش از ابلاغ.
              </p>
            </Link>

            <Link
              href="/services/insolvency-from-judgment"
              className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 hover:border-[#E5C158]/50 transition-all space-y-2 group"
            >
              <div className="text-[#E5C158] font-bold text-sm flex items-center justify-between">
                <span>اعسار و تقسیط مهریه</span>
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                خدمت تخصصی تنظیم دادخواست اعسار، فرم ماده ۸ و توقف جلب.
              </p>
            </Link>
          </div>
        </div>

        {/* Section 9: Conversion Layer */}
        <div className="bg-gradient-to-br from-[#0D1424] to-[#141E36] border border-[#E5C158]/30 rounded-3xl p-6 sm:p-10 text-center space-y-5">
          <div className="w-12 h-12 rounded-2xl bg-[#E5C158]/10 border border-[#E5C158]/40 flex items-center justify-center text-[#E5C158] mx-auto">
            <UserCheck className="w-6 h-6" />
          </div>
          <div className="space-y-2 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              نیاز به تنظیم فوری و مستدل دادخواست مهریه یا لایحه توقیف اموال دارید؟
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              کارشناسان حقوقی نگارش یار با ارزیابی عقدنامه و شرایط پرونده، مستندترین اوراق قضایی و اداری را در کوتاه ترین زمان برای شما تدوین می نمایند.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/request?service=mahrieh-claim"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#E5C158] hover:bg-[#d4b045] text-black font-extrabold text-sm transition-all shadow-lg hover:shadow-xl"
            >
              ثبت سفارش تنظیم دادخواست مطالبه مهریه
            </Link>
            <Link
              href="/knowledge/mahrieh-claim-guide"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm transition-all border border-slate-700"
            >
              مطالعه دانشنامه کامل مهریه
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
