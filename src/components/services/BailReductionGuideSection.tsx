import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import {
  FileText,
  Scale,
  Layers,
  BookOpen,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Building,
  Gavel,
  Coins,
  FileCheck2,
} from 'lucide-react';

export function BailReductionGuideSection() {
  return (
    <section className="relative space-y-12">
      <Container>
        {/* Header Badge & Title */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold">
            <Sparkles className="w-4 h-4" />
            <span>راهنمای جامع حقوقی تقلیل وثیقه و تعدیل قرارهای تأمین کیفری</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            راهنمای کامل درخواست تقلیل وثیقه، کاهش مبلغ و تبدیل قرار تأمین در دادسرا
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            بررسی ماده ۲۴۳ آیین دادرسی کیفری، راه‌های رهایی از بازداشت ناشی از عجز از تودیع وثیقه سنگین، شرایط کاهش مبلغ قرار، مدارک مورد نیاز و مراحل ثبت درخواست در مراجع قضایی.
          </p>
        </div>

        {/* Section 1: What is Bail & When is it Issued */}
        <div id="what-is-bail" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Gavel className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۱. قرار وثیقه چیست و چه زمانی در دادسرا و دادگاه صادر می‌شود؟
            </h3>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              در دادرسی‌های کیفری، <strong>قرار وثیقه (Bail)</strong> یکی از شدیدترین انواع <strong>قرارهای تأمین کیفری</strong> است که طبق ماده ۲۱۷ قانون آیین دادرسی کیفری توسط بازپرس یا دادیار به منظور دسترسی به متهم، حضور به موقع وی در مراحل رسیدگی و جبران خسارت احتمالی شاکی صادر می‌شود. وثیقه می‌تواند به صورت <strong>سند مالکیت غیرمنقول (ملک مسکونی یا تجاری ۶ دانگ)</strong>، ضمانت‌نامه بانکی یا وجه نقد تودیع گردد.
            </p>
            <p>
              بر اساس قانون، صدور قرار وثیقه باید با <strong>«اهمیت جرم، شدت مجازات، دلایل و اسناد، احتمال فرار یا مخفی شدن متهم و میزان خسارت وارده به بزه دیده»</strong> تناسب داشته باشد. چنانچه متهم پس از تفهیم اتهام نتواند وثیقه تعیین‌شده را فوراً معرفی و تودیع نماید، مقام قضایی به استناد ماده ۲۲۶ قانون آیین دادرسی کیفری دستور <strong>«بازداشت متهم به علت عجز از تودیع وثیقه»</strong> را صادر کرده و متهم روانه زندان می‌شود.
            </p>
            <div className="p-4 rounded-xl bg-[#070B15] border border-amber-500/20 text-amber-200 text-xs sm:text-sm leading-relaxed">
              <strong>اصل بنیادین آزادی و تناسب تأمین:</strong> قرار تأمین نباید جنبه مجازات پیش از صدور حکم قطعی به خود بگیرد. اگر مبلغ وثیقه بسیار فراتر از توان مالی متهم یا فراتر از خسارت شاکی تعیین شود، متهم حق قانونی دارد تقاضای تقلیل یا تبدیل آن را مطرح نماید.
            </div>
          </div>
        </div>

        {/* Section 2: What is Bail Reduction */}
        <div id="what-is-bail-reduction" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Coins className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۲. تقلیل وثیقه یعنی چه و مبنای قانونی آن چیست؟
            </h3>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              <strong>«تقلیل وثیقه» (Bail Reduction)</strong> عبارت است از درخواست رسمی متهم یا وکیل او از مقام قضایی رسیدگی‌کننده (بازپرس، دادیار یا قاضی دادگاه کیفری) جهت <strong>کاهش مبلغ ریالی قرار وثیقه</strong> به میزانی متناسب با توان واقعی متهم و اوضاع‌واحوال پرونده.
            </p>
            <p>
              مبنای قانونی این حق در <strong>ماده ۲۴۳ قانون آیین دادرسی کیفری</strong> تصریح شده است:
            </p>
            <blockquote className="p-4 rounded-2xl bg-[#070B15] border-r-4 border-[#E5C158] text-slate-200 text-xs sm:text-sm font-medium leading-relaxed">
              «دادگاه یا دادسرا می‌تواند در تمام مراحل تحقیقات و دادرسی، با در نظر گرفتن اوضاع‌واحوال و خصوصیات متهم، قرار تأمین صادره را به قرار خفیف‌تر تبدیل کند یا مبلغ آن را کاهش دهد...»
            </blockquote>
            <p>
              این ماده به صراحت این اختیار و تکلیف را به مقام قضایی می‌دهد که چنانچه متهم با ارائه لایحه مستدل و مدارک کافی، عدم توانایی مالی در فراهم کردن وثیقه سنگین و حسن نیت خود را اثبات کند، قرار وثیقه را تعدیل و تقلیل دهد تا آزادی متهم تا روز دادگاه میسر گردد.
            </p>
          </div>
        </div>

        {/* Section 3: Conditions for Bail Reduction */}
        <div id="conditions-for-reduction" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۳. چه شرایطی برای موافقت با کاهش مبلغ وثیقه وجود دارد؟
            </h3>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            بازپرس یا قاضی دادگاه زمانی با درخواست تقلیل وثیقه موافقت می‌نماید که شرایط و اوضاع‌واحوال زیر در لایحه تقدیمی به اثبات برسد:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <h4>عدم تناسب وثیقه با میزان خسارت شاکی</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                اگر ارزش خسارت یا رقم ادعایی پرونده مثلاً ۲۰۰ میلیون تومان باشد اما وثیقه ۲ میلیارد تومانی صادر شده باشد، با استناد به ماده ۲۱۷ ق.آ.د.ک زمینه تقلیل آن کاملاً مهیاست.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <h4>اثبات عجز و ناتوانی مالی واقعی متهم</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                ارائه مستندات فقدان ملک ثبتی، فیش حقوقی کارگری، اجاره‌نشینی، سرپرستی خانوار و ناتوانی در تودیع اسناد ملکی میلیاردی.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <h4>فقدان سابقه کیفری و حسن شهرت</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                نداشتن سابقه محکومیت کیفری مؤثر، اقامتگاه ثابت و مشخص و عدم وجود بیم تبانی یا امحای آثار جرم.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <h4>جبران بخشی از خسارت یا جلب رضایت</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                پرداخت بخشی از طلب شاکی، تودیع مبالغ جزئی یا توافق اولیه با شاکی خصوصی پرونده شانس تقلیل را چند برابر می‌کند.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Bail Reduction vs Bail to Surety (Conversion) */}
        <div id="bail-vs-surety" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۴. تفاوت تقلیل وثیقه با تبدیل وثیقه به کفالت
            </h3>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              دو راهکار اصلی برای متهمانی که در تأمین وثیقه ناتوان هستند وجود دارد که بر اساس شرایط متهم انتخاب می‌شوند:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#070B15] border border-[#E5C158]/30 space-y-2">
                <h4 className="text-base font-bold text-[#E5C158]">تقلیل وثیقه (کاهش رقم)</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  در این حالت، نوع تأمین همچنان <strong>«وثیقه»</strong> باقی می‌ماند، اما ارزیابی مبلغ کاهش می‌یابد؛ برای مثال وثیقه از ۵ میلیارد تومان به ۱ میلیارد تومان کاهش می‌یابد تا ملکی با ارزش کمتر یا وجه نقد موجود در دسترس تودیع شود.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#070B15] border border-sky-500/30 space-y-2">
                <h4 className="text-base font-bold text-sky-400">تبدیل وثیقه به کفالت</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  در این حالت، <strong>ماهیت قرار تأمین</strong> به طور کلی از وثیقه ملکی به <strong>قرار کفالت</strong> با معرفی ضامن معتبر (کارمند رسمی دارای فیش حقوقی یا کاسب دارای پروانه کسب فعال) تغییر می‌یابد. برای اطلاعات بیشتر صفحه <Link href="/services/bail-to-surety" className="text-[#E5C158] underline font-bold">تبدیل وثیقه به کفالت</Link> را ببینید.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Comparison Table of All Precautionary Measures */}
        <div id="bail-comparison-table" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۵. جدول مقایسه انواع قرارهای تأمین کیفری و شیوه‌های تعدیل
            </h3>
          </div>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            بررسی جامع شدت، تضامین، مدارک مورد نیاز و اثر حقوقی هر یک از قرارهای تأمین طبق قانون آیین دادرسی کیفری:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-[#E5C158] font-bold">
                  <th className="p-3">نوع قرار / اقدام</th>
                  <th className="p-3">ضمانت و مدارک مورد نیاز</th>
                  <th className="p-3">میزان سختی تودیع</th>
                  <th className="p-3">نتیجه عدم تأمین</th>
                  <th className="p-3">قابلیت تعدیل و تقلیل</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr>
                  <td className="p-3 font-bold text-amber-400">قرار وثیقه (سند ملکی / وجه نقد)</td>
                  <td className="p-3">سند رسمی تک‌برگ ۶ دانگ، نظریه کارشناس ثبتی یا فیش واریز نقدی</td>
                  <td className="p-3 text-red-400 font-bold">بسیار سنگین</td>
                  <td className="p-3 text-red-400 font-bold">بازداشت فوری در زندان</td>
                  <td className="p-3 text-emerald-400 font-bold">قابل تقلیل یا تبدیل (ماده ۲۴۳)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-sky-400">قرار کفالت</td>
                  <td className="p-3">حضور ضامن با فیش حقوقی و گواهی کسر از حقوق یا پروانه کسب معتبر</td>
                  <td className="p-3 text-amber-300 font-bold">متوسط</td>
                  <td className="p-3 text-red-400 font-bold">بازداشت تا معرفی کفیل</td>
                  <td className="p-3 text-emerald-400 font-bold">قابل تبدیل به وجه التزام</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-emerald-400">وجه التزام با قول شرف</td>
                  <td className="p-3">تعهد کتبی و امضای شخص متهم بدون نیاز به ضامن یا سند</td>
                  <td className="p-3 text-emerald-400 font-bold">بسیار آسان</td>
                  <td className="p-3 text-slate-300 font-medium">عدم بازداشت (آزادی فوری)</td>
                  <td className="p-3 text-slate-400">خفیف‌ترین قرار مالی</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-purple-400">تقلیل مبلغ وثیقه</td>
                  <td className="p-3">لایحه مستند به عدم تناسب، مدارک عدم تمکن مالی و سوابق متهم</td>
                  <td className="p-3 text-sky-300 font-bold">راهکار قانونی</td>
                  <td className="p-3 text-emerald-400 font-bold">کاهش ارزش سند و آزادی</td>
                  <td className="p-3 text-emerald-400 font-bold">طبق ماده ۲۴۳ ق.آ.د.ک</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-blue-400">تبدیل قرار تأمین</td>
                  <td className="p-3">معرفی کفیل یا وثیقه خفیف‌تر همراه لایحه تعویض قرار</td>
                  <td className="p-3 text-sky-300 font-bold">راهکار جایگزین</td>
                  <td className="p-3 text-emerald-400 font-bold">فک سند ملکی یا رهایی از بند</td>
                  <td className="p-3 text-emerald-400 font-bold">در تمام مراحل دادرسی</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 6: Documents Required for Bail Reduction */}
        <div id="required-documents" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۶. مدارک و مستندات لازم برای درخواست تقلیل وثیقه
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158] flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>۱. لایحه مستدل تقلیل وثیقه</span>
              </h4>
              <p className="text-slate-400 leading-relaxed">
                لایحه کتبی و حقوقی خطاب به مقام قضایی با استناد صریح به مواد ۲۱۷، ۲۱۹ و ۲۴۳ قانون آیین دادرسی کیفری.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158] flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>۲. مدارک اثبات عدم تمکن مالی متهم</span>
              </h4>
              <p className="text-slate-400 leading-relaxed">
                گواهی اشتغال، فیش حقوقی، استشهاد محلی ناتوانی مالی، اجاره‌نامه مسکونی و مدارک افراد تحت تکفل.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158] flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>۳. مدارک تأمین جایگزین پیشنهادی</span>
              </h4>
              <p className="text-slate-400 leading-relaxed">
                در صورت تقاضای تبدیل، تصویر فیش حقوقی کفیل یا سند ملکی با ارزش کمتر جهت بررسی بازپرس ضمیمه می‌گردد.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158] flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>۴. گواهی فقدان سوءپیشینه یا حسن شهرت</span>
              </h4>
              <p className="text-slate-400 leading-relaxed">
                مدارک اثبات کننده سابقه پاک متهم، عدم محکومیت کیفری مؤثر و سکونت دائمی در حوزه قضایی رسیدگی‌کننده.
              </p>
            </div>
          </div>
        </div>

        {/* Section 7: Steps to Submit Bail Reduction Request */}
        <div id="steps-to-submit" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۷. مراحل ثبت درخواست تقلیل وثیقه در دادسرا و دادگاه کیفری
            </h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۱
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">تنظیم لایحه اختصاصی تقلیل وثیقه</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  تنظیم فنی و مستدل لایحه با تبیین عجز از تودیع وثیقه سنگین و استناد به مواد قانونی توسط متخصصان نگارش یار.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۲
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">ارائه درخواست به شعبه رسیدگی‌کننده</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  تقدیم لایحه به دفتر بازپرسی یا دادیاری شعبه (در دادسرا) یا دفتر شعبه دادگاه کیفری توسط متهم، وکیل یا اعضای درجه یک خانواده.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۳
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">بررسی بازپرس و اتخاذ تصمیم قضایی</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  مقام قضایی لایحه و مدارک را بررسی کرده و در صورت احراز تناسب و عجز، دستور کاهش مبلغ وثیقه یا تبدیل آن را صادر می‌نماید.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۴
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">تودیع تأمین تعدیل‌شده و آزادی فوری متهم</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  تودیع وثیقه با رقم جدید یا قبولی کفالت و صدور دستور رفع بازداشت و آزادی متهم به زندان یا تحت‌نظرگاه.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 8: Role of Specialized Brief */}
        <div id="role-of-brief" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۸. نقش لایحه حقوقی تخصصی در پذیرش تقلیل وثیقه توسط بازپرس
            </h3>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              درخواست‌های شفاهی خانواده‌ها در راهروهای دادسرا اغلب به علت مشغله شدید بازپرسان بی‌پاسخ می‌ماند. مقام قضایی برای تغییر تصمیم خود نیازمند <strong>«مستند کتبی ثبتی در پرونده»</strong> است که در مراجع نظارتی و دادستانی قابل دفاع باشد.
            </p>
            <p>
              یک لایحه تخصصی تقلیل وثیقه با تنظیم منسجم، نگارش در قالب فرمت دادسرا، ارجاع به مواد ۲۱۷ و ۲۴۳ آیین دادرسی کیفری، و ارائه ادله منطقی مبنی بر عدم خطر فرار متهم، قاضی را از نظر وجدانی و قانونی مجاب به پذیرش تقاضای تعدیل قرار می‌سازد.
            </p>
          </div>
        </div>

        {/* Section 9: Clear Boundary Notice (Conversion Separation) */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#0C1222] via-[#0F172A] to-[#0C1222] border border-[#E5C158]/30 space-y-4">
          <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
            <CheckCircle2 className="w-5 h-5" />
            <span>تفکیک شفاف خدمات و گزینه‌های شما در خصوص قرار وثیقه</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-1">
              <h4 className="font-bold text-white">۱. آموزش حقوقی رایگان</h4>
              <p className="text-slate-400">
                مطالعه راهنماها و مقالات پایگاه دانش نگارش یار پیرامون انواع قرارهای تأمین، ماده ۲۱۷ و روش‌های فک وثیقه به صورت کاملاً رایگان.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-1">
              <h4 className="font-bold text-[#E5C158]">۲. تنظیم لایحه توسط نگارش یار</h4>
              <p className="text-slate-400">
                نگارش فوری و استدلالی درخواست تقلیل وثیقه یا تبدیل به کفالت ظرف ۳ تا ۵ ساعت جهت ارائه اضطراری به دادسرا با هزینه کاملاً منصفانه.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-1">
              <h4 className="font-bold text-sky-400">۳. معرفی وکیل منصف</h4>
              <p className="text-slate-400">
                برای پرونده‌های حساس کیفری یک و دادگاه انقلاب که نیاز به حضور فیزیکی وکیل در شعبه دارند، از بخش <Link href="/lawyer-referral" className="text-[#E5C158] underline font-bold">معرفی وکیل منصف</Link> اقدام نمایید.
              </p>
            </div>
          </div>
        </div>

        {/* Action Conversion Box */}
        <div className="bg-gradient-to-r from-[#111827] via-[#0D1424] to-[#111827] border-2 border-[#E5C158]/50 rounded-3xl p-6 sm:p-8 text-center space-y-4 shadow-xl shadow-[#E5C158]/10">
          <h3 className="text-xl sm:text-2xl font-black text-white">
            وثیقه سنگین صادر شده و متهم در خطر بازداشت قرار دارد؟
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            اجازه ندهید ناتوانی در تودیع وثیقه سنگین موجب تداوم بازداشت شود. همین حالا مشخصات پرونده را ارسال کنید تا لایحه فوری تقلیل وثیقه تنظیم گردد.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/request?service=bail-reduction"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#070B15] font-black text-sm shadow-lg shadow-[#E5C158]/20 hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <span>درخواست تنظیم فوری لایحه تقلیل وثیقه</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <Link
              href="/samples/bail-reduction"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-bold text-xs sm:text-sm hover:text-white transition-colors"
            >
              مشاهده نمونه درخواست تقلیل وثیقه
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
