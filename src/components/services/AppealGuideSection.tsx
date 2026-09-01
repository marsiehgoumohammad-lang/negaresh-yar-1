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
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Building,
  Gavel,
  ShieldAlert,
} from 'lucide-react';

export function AppealGuideSection() {
  return (
    <section className="relative space-y-12">
      <Container>
        {/* Header Badge & Title */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold">
            <Sparkles className="w-4 h-4" />
            <span>راهنمای جامع و تخصصی اعتراض به رأی و لایحه تجدیدنظرخواهی</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            راهنمای کامل اعتراض به رأی دادگاه و تنظیم لایحه تجدیدنظرخواهی در ثنا
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            بررسی مهلت قانونی ۲۰ روزه، جهات نقض دادنامه طبق ماده ۳۴۸ مدنی و ۴۳۴ کیفری، جدول مقایسه آرای قطعی و قابل اعتراض، و مراحل ثبت در دفاتر خدمات الکترونیک قضایی.
          </p>
        </div>

        {/* Section 1: What is an Appeal */}
        <div id="what-is-appeal" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Gavel className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۱. اعتراض به رأی دادگاه چیست و چرا فرصت طلایی جبران است؟
            </h3>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              در نظام قضایی ایران، بر اساس اصل بنیادین <strong>«دو مرحله‌ای بودن دادرسی» (Two-Tier Justice System)</strong>، احکام صادره از دادگاه‌های بدوی (عمومی حقوقی، کیفری دو، خانواده و انقلاب) قطعی و نهایی نیستند. قانون‌گذار به منظور جلوگیری از اشتباهات قضایی، تضییع حقوق افراد و تضمین دادرسی عادلانه، حق <strong>«تجدیدنظرخواهی و اعتراض به رأی»</strong> را برای محکوم‌علیه یا طرف متضرر به رسمیت شناخته است.
            </p>
            <p>
              رسیدگی در مرحله تجدیدنظر، یک رسیدگی مجدد ماهوی و شکلی در <strong>دادگاه تجدیدنظر استان</strong> است. هیئت قضات تجدیدنظر (مرکب از رئیس و دو مستشار باتجربه) تمام اوراق، دادنامه بدوی، لوایح طرفین و ادله اثباتی را از ابتدا بازبینی می‌کنند. چنانچه لایحه تجدیدنظرخواهی شما به صورت علمی، مستدل و منطبق با بندهای قانونی تنظیم شده باشد، دادگاه تجدیدنظر رأی بدوی را <strong>«نقض»</strong> کرده و خود مبادرت به انشای رأی شایسته و برائت یا احقاق حق شما می‌نماید.
            </p>
            <div className="p-4 rounded-xl bg-[#070B15] border border-amber-500/20 text-amber-200 text-xs sm:text-sm leading-relaxed">
              <strong>قاعده طلایی لایحه تجدیدنظر:</strong> لایحه تجدیدنظرخواهی نباید صرفاً کپی لایحه مرحله بدوی باشد؛ بلکه هدف اصلی آن <strong>نقد استدلال‌های قاضی بدوی، کشف تناقضات دادنامه و اثبات نادیده گرفته شدن اسناد یا موازین قانونی</strong> است.
            </div>
          </div>
        </div>

        {/* Section 2: What judgments can be appealed */}
        <div id="appealable-judgments" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۲. چه آرایی قابل تجدیدنظر و اعتراض در دادگاه هستند؟
            </h3>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            بر اساس ماده ۳۳۱ قانون آیین دادرسی مدنی و ماده ۴۲۷ قانون آیین دادرسی کیفری، احکام و قرارهای زیر قابلیت تجدیدنظرخواهی در محاکم تجدیدنظر استان را دارند:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <FileText className="w-4 h-4" />
                <h4>آرای دادگاه‌های عمومی حقوقی</h4>
              </div>
              <ul className="text-xs sm:text-sm text-slate-400 space-y-1.5 list-disc list-inside leading-relaxed">
                <li>دعاوی مالی که خواسته یا ارزش آن بیش از ۲۰ میلیون ریال (۲ میلیون تومان) باشد.</li>
                <li>کلیه احکام صادره در دعاوی غیرمالی (الزام به تنظیم سند، تخلیه، بطلان معامله، فسخ قرارداد، تمکین، اثبات زوجیت، حجر و...).</li>
                <li>قرارهای قاطع دعوا شامل قرار ابطال دادخواست، قرار رد دادخواست، قرار رد دعوا، عدم استماع و سقوط دعوا.</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <ShieldAlert className="w-4 h-4" />
                <h4>آرای دادگاه‌های کیفری</h4>
              </div>
              <ul className="text-xs sm:text-sm text-slate-400 space-y-1.5 list-disc list-inside leading-relaxed">
                <li>احکام محکومیت به حبس‌های تعزیری (درجه ۱ تا ۷)، شلاق تعزیری و مجازات‌های تکمیلی.</li>
                <li>احکام محکومیت به پرداخت دیه یا ارش در صورتی که میزان آن بیش از یک‌دهم دیه کامل باشد.</li>
                <li>احکام ضبط یا مصادره اموال و جزای نقدی‌های بالای مصوب قانون.</li>
                <li>قرارهای منع تعقیب، موقوفی تعقیب و جلب به دادرسی در چارچوب قانون آیین دادرسی کیفری.</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <Building className="w-4 h-4" />
                <h4>آرای شورای حل اختلاف</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                کلیه آرای صادره از شعب شورای حل اختلاف ظرف مهلت ۲۰ روز قابل اعتراض و تجدیدنظرخواهی در <strong>دادگاه عمومی حقوقی</strong> همان حوزه قضایی می‌باشند.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <Layers className="w-4 h-4" />
                <h4>آرای دیوان عدالت اداری</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                آرای شعب بدوی دیوان عدالت اداری راجع به شکایات از تصمیمات شهرداری‌ها، کمیسیون ماده ۱۰۰، امور استخدامی و ادارات دولتی، ظرف ۲۰ روز در <strong>شعب تجدیدنظر دیوان عدالت اداری</strong> قابل اعتراض است.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Legal Deadlines (۲۰ Days) */}
        <div id="appeal-deadline" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۳. مهلت قانونی اعتراض به رأی دادگاه و نحوه دقیق محاسبه مواعد
            </h3>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              بر اساس ماده ۳۳۶ قانون آیین دادرسی مدنی و ماده ۴۳۱ قانون آیین دادرسی کیفری، مهلت تجدیدنظرخواهی از احکام و قرارهای قابل تجدیدنظر به شرح زیر است:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#070B15] border border-amber-500/30 space-y-1 text-center">
                <span className="text-2xl font-black text-[#E5C158]">۲۰ روز</span>
                <h4 className="text-sm font-bold text-white">برای اشخاص مقیم داخل کشور</h4>
                <p className="text-xs text-slate-400">از تاریخ ابلاغ واقعی یا ابلاغ قانونی در سامانه ثنا</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-1 text-center">
                <span className="text-2xl font-black text-sky-400">۲ ماه</span>
                <h4 className="text-sm font-bold text-white">برای اشخاص مقیم خارج از کشور</h4>
                <p className="text-xs text-slate-400">از تاریخ رویت یا ابلاغ در حساب کاربری ثنا</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2 text-xs sm:text-sm text-slate-300">
              <h4 className="font-bold text-[#E5C158]">قواعد مهم شمارش مهلت طبق مواد ۴۴۲ تا ۴۴۵ قانون آیین دادرسی مدنی:</h4>
              <ul className="space-y-1.5 list-disc list-inside text-slate-400 leading-relaxed">
                <li><strong>روز ابلاغ و روز اقدام</strong> در محاسبه مهلت ۲۰ روزه شمرده نمی‌شوند (مهلت عملاً ۲۲ روز خواهد بود).</li>
                <li>اگر روز بیستم با <strong>تعطیلی رسمی یا جمعه</strong> مصادف شود، آخرین روز مهلت، نخستین روز کاری پس از تعطیلات خواهد بود.</li>
                <li>انقضای مهلت ۲۰ روزه بدون ثبت دادخواست تجدیدنظر، منجر به <strong>«قطعیت رأی»</strong> و صدور قرار رد دادخواست تجدیدنظر می‌گردد.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 4: Civil vs Criminal Appeal */}
        <div id="civil-vs-criminal-appeal" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۴. تفاوت تجدیدنظرخواهی حقوقی و کیفری در یک نگاه
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-[#E5C158] font-bold">
                  <th className="p-3">شاخص مقایسه</th>
                  <th className="p-3">تجدیدنظرخواهی حقوقی (Civil Appeal)</th>
                  <th className="p-3">تجدیدنظرخواهی کیفری (Criminal Appeal)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr>
                  <td className="p-3 font-bold text-white">مبنا و جهات قانونی</td>
                  <td className="p-3">ماده ۳۴۸ قانون آیین دادرسی مدنی</td>
                  <td className="p-3">ماده ۴۳۴ قانون آیین دادرسی کیفری</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-white">هزینه دادرسی</td>
                  <td className="p-3">۴.۵ درصد بهای خواسته (مگر در صورت اثبات اعسار)</td>
                  <td className="p-3">تعرفه ثابت و اندک دولتی بابت ثبت لایحه و تمبر</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-white">اثر تعلیقی بر اجرای حکم</td>
                  <td className="p-3">مانع قطعی شدن رأی و مانع صدور اجراییه است</td>
                  <td className="p-3">اجرای مجازات تا صدور رأی قطعی متوقف می‌ماند</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-white">مرجع صالح رسیدگی</td>
                  <td className="p-3">دادگاه تجدیدنظر استان</td>
                  <td className="p-3">دادگاه تجدیدنظر استان (و دیوان عالی کشور در جرایم کیفری یک)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-white">تبادل لوایح</td>
                  <td className="p-3">ارسال دادخواست به تجدیدنظرخوانده جهت پاسخ ظرف ۱۰ روز</td>
                  <td className="p-3">معمولاً بدون تشریفات تبادل لایحه مستقیماً ارجاع می‌شود</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 5: Comparison Table of All Legal Remedies */}
        <div id="remedies-comparison-table" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۵. جدول مقایسه شیوه‌های اعتراض و وضعیت آراء قضایی
            </h3>
          </div>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            تشخیص دقیق اینکه پرونده شما در کدام وضعیت قرار دارد، گام اول انتخاب استراتژی دفاعی صحیح است:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-[#E5C158] font-bold">
                  <th className="p-3">عنوان وضعیت / شیوه اعتراض</th>
                  <th className="p-3">مفهوم و کاربرد اصلی</th>
                  <th className="p-3">مرجع رسیدگی</th>
                  <th className="p-3">مهلت قانونی</th>
                  <th className="p-3">اثر بر اجرای حکم</th>
                  <th className="p-3">مبنای قانونی</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr>
                  <td className="p-3 font-bold text-[#E5C158]">رأی قابل تجدیدنظر</td>
                  <td className="p-3">رأی بدوی حضوری که در مهلت قانونی ۲۰ روزه قرار دارد</td>
                  <td className="p-3">دادگاه تجدیدنظر استان</td>
                  <td className="p-3">۲۰ روز از ابلاغ ثنا</td>
                  <td className="p-3 text-emerald-400 font-bold">مانع اجرای حکم</td>
                  <td className="p-3">ماده ۳۳۰ ق.آ.د.م</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-red-400">رأی قطعی</td>
                  <td className="p-3">رأیی که غیرقابل اعتراض بوده یا مهلت ۲۰ روزه آن سپری شده</td>
                  <td className="p-3">واحد اجرای احکام مدنی / کیفری</td>
                  <td className="p-3">منقضی شده</td>
                  <td className="p-3 text-red-400 font-bold">لازم‌الاجرا و نهایی</td>
                  <td className="p-3">ماده ۵ قانون اجرای احکام</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-sky-400">واخواهی (حکم غیابی)</td>
                  <td className="p-3">اعتراض به حکمی که بدون ابلاغ واقعی، حضور یا ارسال لایحه صادر شده</td>
                  <td className="p-3">همان دادگاه بدوی صادرکننده رأی</td>
                  <td className="p-3">۲۰ روز از ابلاغ واقعی یا اطلاع</td>
                  <td className="p-3 text-emerald-400 font-bold">توقف فوری اجرای حکم</td>
                  <td className="p-3">ماده ۳۰۵ ق.آ.د.م</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-purple-400">تجدیدنظرخواهی</td>
                  <td className="p-3">اعتراض رسمی به تصمیمات دادگاه بدوی جهت نقض در دادگاه عالی</td>
                  <td className="p-3">دادگاه تجدیدنظر استان</td>
                  <td className="p-3">۲۰ روز از ابلاغ ثنا</td>
                  <td className="p-3 text-emerald-400 font-bold">تعلیق اجرای دادنامه</td>
                  <td className="p-3">ماده ۳۳۴ مدنی / ۴۲۶ کیفری</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-400">اعاده دادرسی</td>
                  <td className="p-3">اعتراض فوق‌العاده پس از قطعیت به دلیل کشف اسناد جعلی، حیله و تقلب یا مدارک مکتوم</td>
                  <td className="p-3">دادگاه صادرکننده حکم قطعی</td>
                  <td className="p-3">۲۰ روز از کشف سند جدید</td>
                  <td className="p-3">پس از صدور قرار قبولی اعاده</td>
                  <td className="p-3">ماده ۴۲۶ ق.آ.د.م</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 6: Steps to Register Appeal in Sana & Judicial Services */}
        <div id="steps-to-appeal" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۶. مراحل گام‌به‌گام ثبت دادخواست تجدیدنظر در دفاتر خدمات قضایی
            </h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۱
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">استخراج تاریخ دقیق ابلاغ در ثنا و محاسبه مهلت</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  بررسی تاریخ دقیق مشاهده ابلاغیه الکترونیک در سامانه ثنا جهت اطمینان از قرار داشتن در مهلت ۲۰ روزه قانونی.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۲
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">تحلیل استدلالی دادنامه و تنظیم لایحه تجدیدنظرخواهی</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  تنظیم بندبندی لایحه، انطباق با جهات ماده ۳۴۸ مدنی یا ۴۳۴ کیفری، استناد به مواد قانونی، آرای وحدت رویه و پیوست مدارک جدید.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۳
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">مراجعه به دفتر خدمات قضایی یا ثبت در خودکاربری ثنا</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  ارائه فایل متنی لایحه، اصل کارت ملی و تصویر دادنامه بدوی به متصدی دفتر خدمات الکترونیک قضایی یا درج مستقیم در سامانه عدل ایران.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۴
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">پرداخت هزینه دادرسی و ارسال پرونده به شعبه تجدیدنظر</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  پرداخت هزینه دادرسی تجدیدنظر (یا ثبت همزمان دادخواست اعسار از هزینه دادرسی تجدیدنظر)، تبادل لوایح و ارجاع پرونده به دادگاه تجدیدنظر استان.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 7: Grounds for Appeal in Law (ماده ۳۴۸ مدنی و ۴۳۴ کیفری) */}
        <div id="appeal-grounds" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۷. دلایل و جهات قانونی رایج نقض رأی در دادگاه تجدیدنظر
            </h3>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            بر اساس ماده ۳۴۸ قانون آیین دادرسی مدنی و ماده ۴۳۴ قانون آیین دادرسی کیفری، لایحه تجدیدنظرخواهی باید حداقل بر یکی از جهات تصریح‌شده زیر استوار باشد:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="font-bold text-[#E5C158] flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>۱. عدم توجه به دلایل ابرازی</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                قاضی بدوی به اسناد، قراردادها، فیش‌های واریزی یا دفاعیات موثر شما توجه نکرده و بدون بررسی آنها رأی صادر نموده است.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="font-bold text-[#E5C158] flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>۲. مخالفت رأی با موازین قانونی</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                استناد دادگاه بدوی به قانون منسوخ، تفسیر اشتباه از مفاد قرارداد یا نقض صریح آرای وحدت رویه دیوان عالی کشور.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="font-bold text-[#E5C158] flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>۳. عدم صلاحیت دادگاه یا قاضی</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                رسیدگی به پرونده خارج از صلاحیت محلی یا ذاتی دادگاه بدوی یا وجود جهات رد دادرس بر اساس قانون.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="font-bold text-[#E5C158] flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>۴. فقدان شرایط قانونی شهادت شهود</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                استناد رأی بدوی به شهادت شهودی که شرایط قانونی جرح را داشته، ذی‌نفع در دعوا بوده یا اظهارات متناقض داشته‌اند.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="font-bold text-[#E5C158] flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>۵. اشتباه در کارشناسی رسمی</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                عدم ارجاع موضوع فنی به کارشناس رسمی دادگستری یا استناد به نظریه ناقص بدون توجه به اعتراض به کارشناسی ۳ نفره.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="font-bold text-[#E5C158] flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>۶. عدم اعتبار اسناد طرف مقابل</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                اثبات جعلی بودن، بی‌اعتباری یا ابطال اسناد عادی و مدارکی که دادگاه بدوی مبنای صدور رأی محکومیت قرار داده است.
              </p>
            </div>
          </div>
        </div>

        {/* Section 8: Dangerous Mistakes in Writing Appeal Briefs */}
        <div id="appeal-mistakes" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۸. اشتباهات خطرناک در نوشتن لایحه تجدیدنظرخواهی
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-red-400">۱. از دست دادن مهلت ۲۰ روزه ابلاغ ثنا</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                حتی یک روز تأخیر در ثبت تجدیدنظرخواهی در دفاتر خدمات قضایی موجب صدور فوری قرار رد دادخواست و قطعی شدن برگشت‌ناپذیر دادنامه بدوی می‌شود.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-red-400">۲. تکرار صرف لایحه بدوی بدون نقد دادنامه</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                کپی کردن متن لوایح قبلی بدون تحلیل بند به بند استدلال‌های قاضی بدوی باعث می‌شود دادگاه تجدیدنظر با یک خط عبارت «اعتراض موثری به عمل نیامده» رأی را عیناً تأیید کند.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-red-400">۳. عدم ذکر بندهای جهات قانونی ماده ۳۴۸</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                اگر در لایحه تصریح نشود که اعتراض شما بر اساس کدام بند ماده ۳۴۸ مدنی یا ۴۳۴ کیفری است، شانس نقض رأی به شدت افت خواهد کرد.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-red-400">۴. استفاده از لحن احساسی و نامناسب</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                توهین، اتهام‌زنی یا بکارگیری عبارات احساسی به جای استدلال منطقی حقوقی، قضاوت دادگاه تجدیدنظر را علیه شما شکل می‌دهد.
              </p>
            </div>
          </div>
        </div>

        {/* Section 9: Clear Boundary Notice (Conversion Separation) */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#0C1222] via-[#0F172A] to-[#0C1222] border border-[#E5C158]/30 space-y-4">
          <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
            <CheckCircle2 className="w-5 h-5" />
            <span>تفکیک شفاف گزینه‌ها و نیازهای شما برای اعتراض به رأی دادگاه</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-1">
              <h4 className="font-bold text-white">۱. آموزش رایگان حقوقی</h4>
              <p className="text-slate-400">
                مطالعه راهنماها و مقالات پایگاه دانش نگارش یار برای آشنایی با روند تجدیدنظر و محاسبه مهلت‌ها بدون نیاز به پرداخت هزینه.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-1">
              <h4 className="font-bold text-[#E5C158]">۲. تنظیم لایحه توسط نگارش یار</h4>
              <p className="text-slate-400">
                تحلیل علمی و خط‌به‌خط دادنامه بدوی و نگارش لایحه تجدیدنظرخواهی مستدل منطبق با فرمت ثنا ظرف کمتر از ۲۴ ساعت با هزینه منصفانه.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-1">
              <h4 className="font-bold text-sky-400">۳. معرفی وکیل منصف</h4>
              <p className="text-slate-400">
                برای پرونده‌های سنگین مالی یا کیفری که نیازمند اعلام وکالت رسمی و حضور فیزیکی در شعبه تجدیدنظر هستند، از بخش <Link href="/lawyer-referral" className="text-[#E5C158] underline font-bold">معرفی وکیل منصف</Link> استفاده فرمایید.
              </p>
            </div>
          </div>
        </div>

        {/* Action Conversion Box */}
        <div className="bg-gradient-to-r from-[#111827] via-[#0D1424] to-[#111827] border-2 border-[#E5C158]/50 rounded-3xl p-6 sm:p-8 text-center space-y-4 shadow-xl shadow-[#E5C158]/10">
          <h3 className="text-xl sm:text-2xl font-black text-white">
            رأی نامساعد دریافت کرده‌اید و مهلت ۲۰ روزه رو به اتمام است؟
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            اجازه ندهید رأی اشتباه به دلیل عدم اعتراض یا تنظیم لایحه غیراصولی قطعی شود. تصویر دادنامه خود را بفرستید تا لایحه تخصصی تجدیدنظر شما تنظیم گردد.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/request?service=appeal"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#070B15] font-black text-sm shadow-lg shadow-[#E5C158]/20 hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <span>تنظیم لایحه تجدیدنظر متناسب با دادنامه شما</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <Link
              href="/samples/appeal"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-bold text-xs sm:text-sm hover:text-white transition-colors"
            >
              مشاهده نمونه لایحه تجدیدنظرخواهی
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
