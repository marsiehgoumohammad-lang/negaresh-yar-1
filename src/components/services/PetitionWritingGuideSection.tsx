import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import {
  FileText,
  Clock,
  Scale,
  Layers,
  AlertTriangle,
  BookOpen,
  Coins,
  HeartHandshake,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Building,
  Home,
  FileCheck,
} from 'lucide-react';

export function PetitionWritingGuideSection() {
  return (
    <section className="relative space-y-12">
      <Container>
        {/* Header Badge & Title */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold">
            <Sparkles className="w-4 h-4" />
            <span>راهنمای جامع و کاربردی تنظیم دادخواست حقوقی</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            راهنمای کامل نوشتن و ثبت دادخواست حقوقی و قضایی در ثنا
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            بررسی ارکان اصلی دادخواست، نحوه تعیین خواسته و بهای آن، تفاوت با شکواییه، مراحل ثبت در دفاتر خدمات الکترونیک قضایی و نکات جلوگیری از رد دعوا.
          </p>
        </div>

        {/* Section 1: What is a Petition */}
        <div id="what-is-petition" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۱. دادخواست چیست و چرا شالوده اصلی دعوای حقوقی است؟
            </h3>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              در نظام قضایی ایران و بر اساس ماده ۴۸ قانون آیین دادرسی مدنی، <strong>«دادخواست» (Petition / Lawsuit Declaration)</strong> فرم و سند رسمی مکتوبی است که به وسیله آن شخص خواهان (مدعی) تقاضای رسیدگی به حق تضییع‌شده یا مطالبه طلب خود را از مرجع قضایی (دادگاه عمومی حقوقی، دادگاه خانواده یا شورای حل اختلاف) درخواست می‌نماید. رسیدگی در محاکم حقوقی صرفاً با تقدیم دادخواست استاندارد آغاز می‌شود.
            </p>
            <p>
              دادخواست حاوی ارکان کلیدی و الزام‌آوری مانند مشخصات دقیق خواهان و خوانده، تعیین دقیق موضوع خواسته، تقویم و تعیین بهای خواسته، فهرست ادله و منضمات و در نهایت شرح جامع ماوقع و استناد به مواد قانونی است. هرگونه نقص در ارکان شکلی یا عدم تعیین منجز خواسته منجر به صدور <strong>«اخطار رفع نقص»</strong> یا <strong>«قرار رد دادخواست»</strong> خواهد شد.
            </p>
            <div className="p-4 rounded-xl bg-[#070B15] border border-amber-500/20 text-amber-200 text-xs sm:text-sm leading-relaxed">
              <strong>قاعده طلایی دادخواست:</strong> دادگاه حقوقی تنها و منحصراً در چارچوب ستون خواسته مندرج در دادخواست رسیدگی و رأی صادر می‌کند. اگر خواسته‌ای در دادخواست قید نشده باشد، قاضی حتی در صورت محق بودن شما مجاز به صدور رأی در مورد آن نخواهد بود.
            </div>
          </div>
        </div>

        {/* Section 2: When do we need a petition */}
        <div id="when-needed" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۲. چه زمانی نیاز به تنظیم دادخواست حقوقی داریم؟
            </h3>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            در تمام مواردی که فرد قصد مطالبه حق مدنی، مالی، ملکی، قراردادی یا احوال شخصیه خود را دارد و طرف مقابل به صورت مسالمت‌آمیز یا پس از ارسال اظهارنامه رسمی تعهد خود را اجرا نکرده است، نیاز به تنظیم دادخواست است. مهم‌ترین این موارد عبارتند از:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <Coins className="w-4 h-4" />
                <h4>مطالبه مطالبات مالی و اسناد تجاری</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                <strong>دادخواست مطالبه وجه:</strong> چک‌های صیادی برگشتی، سفته، رسیدهای عادی، فاکتورهای پرداخت‌نشده، استرداد ودیعه مسکن (پول پیش) و مطالبه خسارت تأخیر تأدیه.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <Home className="w-4 h-4" />
                <h4>دعاوی ملکی، ساختمانی و سرقفلی</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                <strong>دادخواست الزام به تنظیم سند رسمی:</strong> املاک و آپارتمان‌ها، دادخواست تخلیه ید و دستور تخلیه فوری مستأجر، خلع ید غاصبانه، فسخ مبایعه‌نامه و مطالبه اجرت‌المثل ایام تصرف.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <HeartHandshake className="w-4 h-4" />
                <h4>دعاوی خانواده و زوجین</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                <strong>دادخواست‌های خانواده:</strong> مطالبه مهریه، دادخواست طلاق توافقی یا به درخواست زوجه/زوج، مطالبه نفقه زوجه و فرزند، تمکین، استرداد جهیزیه و حضانت و ملاقات فرزند.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <Scale className="w-4 h-4" />
                <h4>دعاوی اعسار و تقسیط</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                <strong>دادخواست اعسار:</strong> اعسار از پرداخت هزینه سنگین دادرسی یا اعسار و تقسیط محکوم‌به (بدهی مالی یا مهریه) به همراه استشهادیه و لیست اموال مطابق قانون نحوه اجرای محکومیت‌های مالی.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Petition vs Criminal Complaint */}
        <div id="petition-vs-complaint" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۳. تفاوت اساسی دادخواست حقوقی و شکواییه کیفری
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-[#E5C158] font-bold">
                  <th className="p-3">شاخص مقایسه</th>
                  <th className="p-3">دادخواست حقوقی (Civil Petition)</th>
                  <th className="p-3">شکواییه کیفری (Criminal Complaint)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr>
                  <td className="p-3 font-bold text-white">مرجع صالح رسیدگی</td>
                  <td className="p-3">دادگاه‌های عمومی حقوقی، دادگاه خانواده، شورای حل اختلاف</td>
                  <td className="p-3">دادسرا (دادیاری / بازپرسی)، دادگاه کیفری دو و یک، دادگاه انقلاب</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-white">موضوع و هدف اصلی</td>
                  <td className="p-3">احقاق حقوق مدنی، وصول مطالبات مالی، الزام به تعهدات قراردادی و امور خانواده</td>
                  <td className="p-3">مجازات مجرم به دلیل ارتکاب فعل ممنوعه قانونی (کلاهبرداری، سرقت، خیانت در امانت، ضرب‌وجرح)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-white">عنوان طرفین</td>
                  <td className="p-3">«خواهان» (شروع‌کننده) و «خوانده» (طرف مقابل)</td>
                  <td className="p-3">«شاکی» (بزه‌دیده) و «مشتکی‌عنه / متهم»</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-white">هزینه دادرسی</td>
                  <td className="p-3">در دعاوی مالی متغیر بین ۲.۵٪ تا ۳.۵٪ ارزش خواسته (مگر در صورت دادخواست اعسار)</td>
                  <td className="p-3">مبلغ ثابت و نسبتاً اندک دولتی بابت ثبت شکواییه و تمبر ورودی</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-white">فرم و ساختار ثبت</td>
                  <td className="p-3">الزام به پر کردن برگ چاپی/الکترونیک دادخواست با تقویم خواسته و ادله اثباتی</td>
                  <td className="p-3">فرم شکواییه استاندارد بدون نیاز به تقویم مالی اولیه خواسته</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 4: Steps to Register Petition */}
        <div id="steps-to-register" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۴. مراحل ثبت دادخواست در دفاتر خدمات الکترونیک قضایی و ثنا
            </h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۱
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">ثبت‌نام و احراز هویت در سامانه ثنا</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  تمامی طرفین پرونده باید دارای حساب کاربری فعال در سامانه ثنا (عدل ایران) باشند تا بتوان دادخواست را ثبت و ابلاغیه‌ها را دریافت کرد.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۲
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">تنظیم متن تخصصی دادخواست و آماده‌سازی منضمات</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  تنظیم ستون خواسته، تعیین بهای خواسته، پیوست کردن مدارک اثباتی (تصویر چک، قرارداد، فیش واریز، استشهادیه) و نگارش شرح ماوقع مستند.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۳
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">مراجعه به دفتر خدمات قضایی یا ثبت از طریق خودکاربری</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  ارائه فایل متنی دادخواست به متصدی دفتر خدمات الکترونیک قضایی یا درج در سامانه خودکاربری عدل ایران، تطبیق اصل مدارک و برابر با اصل کردن آنها.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۴
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">پرداخت هزینه دادرسی و ارجاع به شعبه</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  پرداخت هزینه دادرسی الکترونیک (یا ثبت همزمان دادخواست اعسار)، دریافت کد پیگیری پرونده ۱۶ رقمی و ارسال سیستمی پرونده به مجتمع قضایی صالح.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Common Mistakes in Petitions */}
        <div id="common-mistakes" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۵. اشتباهات رایج و زیان‌بار در نوشتن دادخواست
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-red-400">۱. درج خواسته اشتباه یا ناقص</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                مثلاً طرح دعوای خلع ید در ملکی که دارای قرارداد اجاره است (به جای دادخواست تخلیه)، یا تقاضای خسارت بدون مطالبه اصل طلب که منجر به صدور قرار عدم استماع می‌شود.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-red-400">۲. عدم ذکر تمامی خواندگان (عدم طرفیت)</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                در دعاوی ملکی یا انحصار وراثت، چنانچه حتی یکی از وراث یا ایادی قبلی فروشنده طرف دعوا قرار نگیرد، دادگاه دادخواست را به دلیل عدم طرفیت رد می‌کند.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-red-400">۳. فراموش کردن مطالبه خسارت تأخیر تأدیه و دادرسی</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                اگر خسارت تأخیر بر اساس شاخص بانک مرکزی و هزینه‌های وکیل/دادرسی در ستون خواسته قید نشود، دادگاه به آن رأی نمی‌دهد و خواهان دچار افت شدید ارزش پول می‌شود.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-red-400">۴. استناد به دادخواست‌های آماده و کپی‌های اینترنتی</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                استفاده از فرم‌های آماده بدون تطبیق با آخرین مصوبات قانونی و آرای وحدت رویه، پرونده را در همان جلسه اول با بن‌بست حقوقی مواجه می‌کند.
              </p>
            </div>
          </div>
        </div>

        {/* Section 6: Required Documents */}
        <div id="required-documents" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۶. مدارک لازم برای تنظیم و ثبت دادخواست
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="font-bold text-[#E5C158] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>۱. مدارک هویتی و ثبت ثنا</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                اصل و کپی کارت ملی، شناسنامه، اطلاعات تماس و ثبت‌نام در سامانه ابلاغ الکترونیک ثنا.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="font-bold text-[#E5C158] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>۲. اسناد و ادله اثبات دعوا</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                تصویر قرارداد، مبایعه‌نامه، فاکتور، رسید بانکی، چک، گواهی عدم پرداخت و اظهارنامه قبلی.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="font-bold text-[#E5C158] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>۳. شواهد و قرائن تکمیلی</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                استشهادیه امضاشده شهود، گزارش کارشناس تأمین دلیل، پیامک‌ها یا مکاتبات تجاری طرفین.
              </p>
            </div>
          </div>
        </div>

        {/* Section 7: Popular Topics / Keyword Coverage */}
        <div id="petition-topics" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۷. انواع دادخواست‌های پرکاربرد حقوقی در محاکم قضایی
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Topic 1: Money Claim */}
            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <Coins className="w-4 h-4" />
                <h4>دادخواست مطالبه وجه و طلب</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                مطالبه طلب بر اساس چک، سفته صیادی، رسید دستی، واریزی کارت‌به‌کارت به همراه مطالبه خسارت تأخیر تأدیه بر اساس شاخص بانک مرکزی.
              </p>
            </div>

            {/* Topic 2: Real Estate Deed */}
            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <Building className="w-4 h-4" />
                <h4>دادخواست الزام به تنظیم سند رسمی</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                الزام فروشنده به اخذ پایان‌کار، صورتمجلس تفکیکی و حضور در دفتر اسناد رسمی به همراه مطالبه وجه‌التزام و خسارت روزانه قرارداد.
              </p>
            </div>

            {/* Topic 3: Eviction */}
            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <Home className="w-4 h-4" />
                <h4>دادخواست تخلیه ملک و دستور تخلیه</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                درخواست دستور تخلیه فوری طبق قانون روابط موجر و مستأجر سال ۷۶، تخلیه به دلیل انقضای مدت یا عدم پرداخت ۳ ماه اجاره‌بها.
              </p>
            </div>

            {/* Topic 4: Divorce & Family */}
            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <HeartHandshake className="w-4 h-4" />
                <h4>دادخواست طلاق و دعاوی خانواده</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                تنظیم دادخواست طلاق توافقی، طلاق به دلیل عسر و حرج، مطالبه مهریه، دادخواست الزام به تمکین و استرداد طلا و جهیزیه.
              </p>
            </div>

            {/* Topic 5: Insolvency */}
            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <Scale className="w-4 h-4" />
                <h4>دادخواست اعسار و تقسیط</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                دادخواست اعسار از پرداخت هزینه دادرسی یا اعسار و تقسیط محکوم‌به و مهریه به همراه استشهادیه شهود و فرم اموال ماده ۸.
              </p>
            </div>

            {/* Topic 6: General Civil */}
            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <FileText className="w-4 h-4" />
                <h4>سایر دادخواست‌های حقوقی و قراردادی</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                فسخ قرارداد، تایید بطلان معامله، مطالبه اجرت‌المثل ایام تصرف، ممانعت از حق، تصرف عدوانی و اعتراض شخص ثالث به توقیف اموال.
              </p>
            </div>
          </div>
        </div>

        {/* Section 8: Clear Boundary Notice (Conversion Separation) */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#0C1222] via-[#0F172A] to-[#0C1222] border border-[#E5C158]/30 space-y-4">
          <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
            <CheckCircle2 className="w-5 h-5" />
            <span>تفکیک شفاف خدمات و نیازهای حقوقی شما در نگارش یار</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-1">
              <h4 className="font-bold text-white">۱. آموزش حقوقی رایگان</h4>
              <p className="text-slate-400">
                این مقالات و راهنماها به منظور افزایش دانش حقوقی عموم شهروندان و شفافیت فرآیندهای دادرسی منتشر گردیده است.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-1">
              <h4 className="font-bold text-[#E5C158]">۲. خدمت تنظیم دادخواست نگارش یار</h4>
              <p className="text-slate-400">
                تنظیم تخصصی و فوری دادخواست، شکواییه و اظهارنامه توسط کارشناسان مسلط بر آیین دادرسی و فرمت ثنا با هزینه منصفانه.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-1">
              <h4 className="font-bold text-sky-400">۳. معرفی وکیل منصف</h4>
              <p className="text-slate-400">
                برای پرونده‌های سنگین و پیچیده که نیاز به وکالت دادگستری و حضور فیزیکی در دادگاه دارند، صفحه <Link href="/lawyer-referral" className="text-[#E5C158] underline font-bold">معرفی وکیل منصف</Link> را ببینید.
              </p>
            </div>
          </div>
        </div>

        {/* Action Conversion Box */}
        <div className="bg-gradient-to-r from-[#111827] via-[#0D1424] to-[#111827] border-2 border-[#E5C158]/50 rounded-3xl p-6 sm:p-8 text-center space-y-4 shadow-xl shadow-[#E5C158]/10">
          <h3 className="text-xl sm:text-2xl font-black text-white">
            قصد ثبت دادخواست دارید و می‌خواهید پرونده بدون نقص وارد رسیدگی شود؟
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            اجازه ندهید حق قانونی شما به دلیل اشتباه در ستون خواسته یا عدم استناد به قوانین رد شود. دادخواست تخصصی پرونده خود را آماده ثبت در ثنا تحویل بگیرید.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/request?service=petition-writing"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#070B15] font-black text-sm shadow-lg shadow-[#E5C158]/20 hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <span>تنظیم دادخواست متناسب با پرونده شما</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <Link
              href="/samples/petition"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-bold text-xs sm:text-sm hover:text-white transition-colors"
            >
              مشاهده نمونه دادخواست‌های حقوقی
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
