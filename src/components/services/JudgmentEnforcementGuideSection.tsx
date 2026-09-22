import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import {
  FileText,
  Scale,
  Layers,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Gavel,
  ShieldCheck,
  UserCheck,
  AlertTriangle,
  Clock,
} from 'lucide-react';

export function JudgmentEnforcementGuideSection() {
  return (
    <section className="relative space-y-12">
      <Container>
        {/* Header Badge & Title */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold">
            <Sparkles className="w-4 h-4" />
            <span>راهنمای جامع تنظیم اسناد و لوایح مرحله اجرای احکام مدنی</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            راهنمای کاربردی اقدامات حقوقی و لوایح در شعبه اجرای احکام دادگاه
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            بررسی جایگاه قانونی مرحله اجرا، تفکیک صلاحیت دادورز و دادگاه، تفاوت اعتراض ثالث اجرایی با اعتراض به حکم، مستثنیات دین و اشتباهات رایج طرفین پرونده.
          </p>
        </div>

        {/* Section 1: When Does Enforcement Begin */}
        <div id="enforcement-stages" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Gavel className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۱. اجرای حکم از چه مرحله ای آغاز می شود؟
            </h3>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              فرآیند دادرسی و احقاق حق به طور کلی شامل دو بخش متمایز است: نخست مرحله رسیدگی و صدور دادنامه در محاکم بدوی و تجدیدنظر، و دوم مرحله تحقق عینی مفاد رأی که در <strong>«دایره اجرای احکام مدنی دادگاه»</strong> جریان مییابد.
            </p>
            <p>
              پس از قطعیت دادنامه یا لازمالاجرا شدن آن، اجرای حکم خودبهخود آغاز نمیشود؛ بلکه نیازمند <strong>تقاضای کتبی محکومله (طلبکار)</strong> و صدور برگ اجراییه توسط دادگاه نخستین است. با ابلاغ برگ اجراییه از طریق سامانه ثنا به محکومعلیه (بدهکار)، مهلتهای قانونی برای اجرای ارادی دادنامه یا انجام اقدامات قانونی متناسب آغاز میگردد.
            </p>
            <div className="p-4 rounded-xl bg-[#070B15] border border-amber-500/20 text-amber-200 text-xs sm:text-sm leading-relaxed">
              <strong>قاعده محوری:</strong> پس از ابلاغ اجراییه، مدیر و دادورز اجرای احکام مأمور به اجرای مفاد دادنامه میگردند. اقدامات دادورز در چارچوب تقاضاهای قانونی طرفین صورت میپذیرد و اختیارات او با صلاحیت قاضی صادرکننده رأی متفاوت است.
            </div>
          </div>
        </div>

        {/* Section 2: Who May Need This Service */}
        <div id="target-audiences" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۲. چه کسانی ممکن است به تنظیم سند در اجرای احکام نیاز داشته باشند؟
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>محکومعلیه (بدهکار یا متعهد پرونده)</span>
              </h4>
              <p className="text-slate-400 leading-relaxed">
                اشخاصی که با ابلاغ اجراییه مواجه شده و نیازمند اعلام مستثنیات دین، تقاضای مهلت، تبدیل مال توقیفشده یا اثبات پرداخت پیشین هستند.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>شخص ثالث متضرر از توقیف مال</span>
              </h4>
              <p className="text-slate-400 leading-relaxed">
                افرادی که خارج از طرفین دعوا بوده اما مال، خودرو یا ملک آنها به تصور تعلق به بدهکار، توسط اجرای احکام بازداشت شده است.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>محکومله (طلبکار یا برنده رأی)</span>
              </h4>
              <p className="text-slate-400 leading-relaxed">
                طرف پیروز در دادرسی که نیازمند تقدیم درخواست استعلام سهگانه اموال، توقیف مطالبات، ارزیابی کارشناسی یا اعمال مقررات حبس مالی است.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Typical Requests & Briefs */}
        <div id="typical-enforcement-requests" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۳. چه نوع درخواستها و لوایحی در مرحله اجرای احکام مطرح میشوند؟
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158]">درخواست رفع توقیف اموال (مستثنیات دین)</h4>
              <p className="text-slate-400 leading-relaxed">
                بر اساس ماده ۲۴ قانون نحوه اجرای محکومیتهای مالی، توقیف اموالی نظیر مسکن در حد شأن عرفی و وسایل امرار معاش ممنوع است. این لایحه با ارائه اسناد معیشتی، تقاضای رفع بازداشت را تبیین مینماید.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158]">درخواست تبدیل مال توقیفشده (ماده ۵۳)</h4>
              <p className="text-slate-400 leading-relaxed">
                محکومعلیه میتواند تبدیل مال توقیفشده را مشروط به رعایت شرایط قانونی، از جمله تکافوی ارزش و سهولت فروش مال جایگزین، به دادورز اجرای احکام تقاضا نماید.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158]">دادخواست اعتراض شخص ثالث اجرایی (مواد ۱۴۶ و ۱۴۷)</h4>
              <p className="text-slate-400 leading-relaxed">
                اگر شخص ثالثی مدعی حق یا مالکیت نسبت به مال توقیفشده باشد، بر حسب اینکه دارای سند رسمی یا عادی است، اقدام به طرح اعتراض یا اقامه دعوا در دادگاه صادرکننده اجراییه مینماید.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158]">درخواست اعطای مهلت و استمهال</h4>
              <p className="text-slate-400 leading-relaxed">
                بیان علل موجه و پیشنهاد نحوه تسویه دیون به صورت مکتوب، جهت انعکاس به طلبکار و دادگاه جهت تعیین مهلت منصفانه بدون تضییع حقوق طرفین.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Required Documents */}
        <div id="required-documents" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۴. مدارک و اطلاعات مورد نیاز برای تنظیم اسناد
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158]">۱. مشخصات پرونده و شعبه</h4>
              <p className="text-slate-400 leading-relaxed">
                شماره پرونده اجرایی، کلاسه بایگانی شعبه و تصویر ابلاغیه برگ اجراییه ثبتشده در ثنا.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158]">۲. اسناد و سوابق توقیف</h4>
              <p className="text-slate-400 leading-relaxed">
                برگه اخطاریه توقیف خودرو، صورتمجلس توقیف اموال منقول یا نامه مسدودی حسابهای بانکی.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158]">۳. ادله اثبات مالکیت یا معیشت</h4>
              <p className="text-slate-400 leading-relaxed">
                مبایعهنامه معتبر، سند رسمی خودرو، پروانه کسب، فیش حقوقی یا مستندات ضرورت وسیله برای امرار معاش.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158]">۴. مستندات تسویه یا پرداخت</h4>
              <p className="text-slate-400 leading-relaxed">
                رسیدهای واریز به حساب سپرده دادگستری، چکهای تسویه یا توافقنامههای کتبی میان طرفین.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5: Preparation Workflow */}
        <div id="preparation-workflow" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۵. روند آماده سازی سند در نگارش یار
            </h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۱
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">دریافت اسناد و تعیین خواسته قانونی</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  ارسال تصاویر مدارک پرونده و بررسی اولیه جهت احراز مرحله رسیدگی و نوع سند مورد نیاز.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۲
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">انطباق با مواد قانون اجرای احکام و رویه قضایی</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  استخراج استنادات قانونی مرتبط با شرایط توقیف، تشریفات ماده ۳۴، ۵۳ یا مواد ۱۴۶ و ۱۴۷ توسط کارشناسان حقوقی.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۳
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">نگارش دقیق متن لایحه یا دادخواست</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  تدوین ساختار استاندارد حقوقی با تفکیک مشخصات خواسته، شرح ماوقع و نتیجهگیری روشن قابل طرح در دادسرا یا دادگاه.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۴
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">تحویل فایل نهایی و راهنمای ثبت در ثنا</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  ارسال فایلهای Word و PDF به همراه نکات تکمیلی جهت تسلیم به دفاتر خدمات الکترونیک قضایی یا شعبه اجرای احکام.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 6: Comparative Matrix */}
        <div id="comparative-matrix" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۶. تفاوت چند اقدام مهم در مرحله اجرای حکم
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            تمایز دقیق میان ماهیت و آثار حقوقی اقدامات مختلف در دایره اجرای احکام مدنی:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs sm:text-sm">
              <thead className="bg-[#070B15] text-[#E5C158] border-b border-slate-800">
                <tr>
                  <th className="p-3">عنوان اقدام قانونی</th>
                  <th className="p-3">شخص متقاضی</th>
                  <th className="p-3">مرجع رسیدگیکننده</th>
                  <th className="p-3">مستند قانونی</th>
                  <th className="p-3">اثر مستقیم بر عملیات اجرایی</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr>
                  <td className="p-3 font-bold text-amber-400">درخواست رفع توقیف مال</td>
                  <td className="p-3">محکومعلیه</td>
                  <td className="p-3">دادگاه صادرکننده اجراییه</td>
                  <td className="p-3">ماده ۲۴ قانون نحوه اجرای محکومیتهای مالی</td>
                  <td className="p-3 text-emerald-400">آزادسازی مال در صورت احراز مستثنیات</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-sky-400">اعتراض ثالث اجرایی</td>
                  <td className="p-3">شخص ثالث خارج از دعوا</td>
                  <td className="p-3">دادگاه مجری یا صادرکننده حکم</td>
                  <td className="p-3">مواد ۱۴۶ و ۱۴۷ قانون اجرای احکام مدنی</td>
                  <td className="p-3 text-amber-300">رسیدگی به مالکیت؛ توقف منوط به دستور دادگاه</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-purple-400">اعتراض به دادنامه (ماده ۴۱۷)</td>
                  <td className="p-3">شخص ثالث متضرر از رأی</td>
                  <td className="p-3">دادگاه صادرکننده رأی قطعی</td>
                  <td className="p-3">ماده ۴۱۷ قانون آیین دادرسی مدنی</td>
                  <td className="p-3 text-slate-300">نقض خود رأی دادگاه در صورت اثبات</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-blue-400">تبدیل مال توقیفشده</td>
                  <td className="p-3">محکومعلیه</td>
                  <td className="p-3">دادورز اجرای احکام</td>
                  <td className="p-3">ماده ۵۳ قانون اجرای احکام مدنی</td>
                  <td className="p-3 text-emerald-400">جایگزینی مال در صورت تکافوی ارزش و سهولت فروش</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-emerald-400">دادخواست اعسار و تقسیط</td>
                  <td className="p-3">محکومعلیه معسر</td>
                  <td className="p-3">دادگاه بدوی رسیدگیکننده به اصل دعوا</td>
                  <td className="p-3">قانون نحوه اجرای محکومیتهای مالی</td>
                  <td className="p-3 text-emerald-400">تقسیط بدهی و جلوگیری از حبس مالی</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 7: Important Warnings */}
        <div id="legal-warnings" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۷. هشدارهای قانونی مهم در مرحله اجرای احکام
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-amber-400">۱. صرف ثبت لایحه یا اعتراض مانع عملیات اجرایی نیست</h4>
              <p className="text-slate-400 leading-relaxed">
                طبق قواعد دادرسی اجرایی، طرح اعتراض یا تسلیم لایحه به تنهایی موجب توقف اقدامات دادورز نمیگردد؛ مگر اینکه دستور توقف یا تأخیر از سوی مرجع قضایی صالح صادر و به پرونده اجرایی ابلاغ شود.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-amber-400">۲. تمایز اعتراض ثالث اجرایی با اعتراض ثالث به دادنامه</h4>
              <p className="text-slate-400 leading-relaxed">
                اعتراض شخص ثالث بر اساس مواد ۱۴۶ و ۱۴۷ قانون اجرای احکام مدنی صرفاً ناظر بر مال توقیفی در فرآیند اجراست؛ در حالی که اعتراض موضوع ماده ۴۱۷ آیین دادرسی مدنی مستقیماً متوجه ماهیت دادنامه صادره است.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-amber-400">۳. شرایط قانونی شمول مستثنیات دین</h4>
              <p className="text-slate-400 leading-relaxed">
                تشخیص اینکه مالی جزء مستثنیات دین است یا خیر بر عهده دادگاه است. صرف ادعای وابستگی خودرو یا منزل مسکونی کافی نبوده و احراز شأن عرفی و ضرورت معیشت نیازمند ادله متقن است.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-amber-400">۴. مواعد قانونی اقدامات دادورز و محکومعلیه</h4>
              <p className="text-slate-400 leading-relaxed">
                انقضای مهلت ۱۰ روزه ماده ۳۴ قانون اجرای احکام زمینه اقدامات بعدی طلبکار را فراهم میسازد؛ با این حال شروع عملیات توقیف مستلزم درخواست محکومله و طی تشریفات قانونی دایره اجرا است.
              </p>
            </div>
          </div>
        </div>

        {/* Section 8: Related Samples Links */}
        <div id="enforcement-samples-links" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۸. نمونه متنها و فرمهای مرتبط با اجرای احکام در نگارش یار
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            جهت آشنایی با ساختار رسمی لوایح و درخواستهای این مرحله، میتوانید نمونههای زیر را مطالعه فرمایید:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/samples/third-party-objection-to-execution"
              className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 hover:border-[#E5C158]/50 transition-colors group block space-y-2"
            >
              <h4 className="text-sm font-bold text-white group-hover:text-[#E5C158] transition-colors flex items-center justify-between">
                <span>اعتراض ثالث اجرایی</span>
                <ArrowLeft className="w-4 h-4 text-slate-500 group-hover:text-[#E5C158]" />
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                نمونه دادخواست اعتراض شخص ثالث بر مال توقیفشده و تقاضای رفع اثر.
              </p>
            </Link>

            <Link
              href="/samples/property-attachment-lifting-request"
              className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 hover:border-[#E5C158]/50 transition-colors group block space-y-2"
            >
              <h4 className="text-sm font-bold text-white group-hover:text-[#E5C158] transition-colors flex items-center justify-between">
                <span>رفع توقیف مستثنیات دین</span>
                <ArrowLeft className="w-4 h-4 text-slate-500 group-hover:text-[#E5C158]" />
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                نمونه لایحه اعلام مستثنیات دین خودرو یا مسکن بر اساس ماده ۲۴.
              </p>
            </Link>

            <Link
              href="/samples/judgment-enforcement-grace-period"
              className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 hover:border-[#E5C158]/50 transition-colors group block space-y-2"
            >
              <h4 className="text-sm font-bold text-white group-hover:text-[#E5C158] transition-colors flex items-center justify-between">
                <span>درخواست اعطای مهلت</span>
                <ArrowLeft className="w-4 h-4 text-slate-500 group-hover:text-[#E5C158]" />
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                الگوی درخواست مهلت عادله جهت پرداخت بدهی و تسویه پرونده اجرایی.
              </p>
            </Link>

            <Link
              href="/samples/attached-property-substitution-request"
              className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 hover:border-[#E5C158]/50 transition-colors group block space-y-2"
            >
              <h4 className="text-sm font-bold text-white group-hover:text-[#E5C158] transition-colors flex items-center justify-between">
                <span>تبدیل مال توقیفشده</span>
                <ArrowLeft className="w-4 h-4 text-slate-500 group-hover:text-[#E5C158]" />
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                نمونه لایحه درخواست جایگزینی مال توقیفی بر پایه ماده ۵۳ قانون اجرا.
              </p>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
