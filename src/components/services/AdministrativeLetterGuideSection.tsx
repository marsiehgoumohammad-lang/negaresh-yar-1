import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import {
  FileText,
  Building,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Layers,
  ArrowLeft,
  FileCheck,
} from 'lucide-react';

export function AdministrativeLetterGuideSection() {
  return (
    <section className="relative space-y-12">
      <Container>
        {/* Header Badge & Title */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold">
            <Sparkles className="w-4 h-4" />
            <span>راهنمای جامع تدوین، ثبت و پیگیری مکاتبات اداری و عریضه‌نویسی سازمانی</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            راهنمای کامل نگارش نامه اداری، ثبت دبیرخانه و پیگیری رسمی در دستگاه‌های اجرایی
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            بررسی ارکان ۵‌گانه نامه رسمی، استانداردهای اتوماسیون اداری کشور، نحوه اخذ شماره ثبت و اندیکاتور، پیگیری قانونی خواسته و تفکیک نامه اداری از دعاوی قضایی.
          </p>
        </div>

        {/* Section 1: Definition and Administrative Nature */}
        <div id="what-is-administrative-letter" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۱. نامه اداری چیست و چه جایگاهی در روابط شهروندان با سازمان‌ها دارد؟
            </h3>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              در نظام اداری و اجرایی کشور، هرگونه مطالبه، تقاضا، گزارش، دفاعیه یا اعلام نظر از سوی اشخاص حقیقی یا حقوقی خطاب به وزارتخانه‌ها، سازمان‌های دولتی، نهادهای عمومی غیردولتی (نظیر شهرداری‌ها و تأمین اجتماعی)، بانک‌ها و شرکت‌ها باید در قالب <strong>«نامه اداری رسمی» (Formal Administrative Letter)</strong> یا <strong>«عریضه اداری»</strong> مکتوب و ثبت شود.
            </p>
            <p>
              درخواست‌های شفاهی در مراجع اداری معمولاً فاقد اثر اجرایی و ضمانت پیگیری هستند. به موجب قوانین اداری، سندی که در دبیرخانه اداره ثبت شده و دارای <strong>«شماره اندیکاتور»</strong> و <strong>«تاریخ ورود»</strong> باشد، مبدأ قانونی ایجاد تکلیف برای واحد مربوطه جهت رسیدگی، بررسی کارشناسی و ارائه پاسخ مکتوب است.
            </p>
            <div className="p-4 rounded-xl bg-[#070B15] border border-amber-500/20 text-amber-200 text-xs sm:text-sm leading-relaxed">
              <strong>حق قانونی شهروندان در پاسخگویی اداری:</strong> بر اساس اصل ۳۴ قانون اساسی و مواد فصل سوم قانون مدیریت خدمات کشوری و همچنین ماده ۳ قانون ارتقای سلامت نظام اداری، مراجع اداری و دستگاه‌های اجرایی مکلف به پاسخگویی شفاف و ثبت مطالبات کتبی مردم در سامانه‌های اداری و اتوماسیون مراجع مربوطه هستند.
            </div>
          </div>
        </div>

        {/* Section 2: Distinction Matrix (Letter vs Petition vs Legal Brief) */}
        <div id="document-distinctions" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۲. تفکیک دقیق انواع اسناد: نامه اداری، عریضه، شکواییه، دادخواست و لایحه
            </h3>
          </div>

          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            یکی از رایج‌ترین خطاهای اداری، اشتباه گرفتن مراجع قضایی با مراجع اجرایی است. جدول زیر مرز دقیق کارکرد هر سند را مشخص می‌کند:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs sm:text-sm border border-slate-800 rounded-2xl overflow-hidden">
              <thead className="bg-[#070B15] text-[#E5C158] font-bold border-b border-slate-800">
                <tr>
                  <th className="p-3">نوع سند</th>
                  <th className="p-3">مرجع صالح دریافت</th>
                  <th className="p-3">چارچوب و ادبیات نگارش</th>
                  <th className="p-3">نتیجه حقوقی و اداری</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr>
                  <td className="p-3 font-bold text-yellow-300">نامه اداری و عریضه</td>
                  <td className="p-3">ادارات، شهرداری‌ها، بانک‌ها، استانداری، نهادهای اجرایی</td>
                  <td className="p-3">ادبیات محترمانه رسمی، تقاضا، پیشنهاد یا اعتراض اداری</td>
                  <td className="p-3 text-emerald-400">بررسی کارشناسی، هامش مدیر و تصمیم سازمانی</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-sky-400">دادخواست حقوقی</td>
                  <td className="p-3">دادگاه‌های عمومی حقوقی و دیوان عدالت اداری</td>
                  <td className="p-3">فرم چاپی مخصوص، تعیین خواسته و دلایل بر مبنای قانون آیین دادرسی مدنی</td>
                  <td className="p-3 text-sky-400">تشکیل پرونده قضایی و صدور رأی یا دادنامه لازم‌الاجرا</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-400">شکواییه کیفری</td>
                  <td className="p-3">دادسراهای عمومی و انقلاب و ضابطان قضایی (پلیس)</td>
                  <td className="p-3">بیان جرم انتسابی، تاریخ و محل وقوع و تقاضای تعقیب مرتکب</td>
                  <td className="p-3 text-amber-400">تحقیقات مقدماتی، احضار متهم و صدور قرار جلب به دادرسی</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-purple-400">لایحه دفاعیه</td>
                  <td className="p-3">شعب دادگاه، شورای حل اختلاف، هیئت‌های حل اختلاف مالیاتی و کار</td>
                  <td className="p-3">مستدل به مواد قانونی، رد ادعای طرف مقابل و تحلیل حقوقی</td>
                  <td className="p-3 text-purple-400">تأثیرگذاری در انشای رأی قاضی یا اعضای هیئت رسیدگی</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 3: 5 Key Components of Standard Administrative Letters */}
        <div id="five-components" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۳. ارکان پنج‌گانه ساختار رسمی یک نامه اداری استاندارد
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#E5C158]/20 flex items-center justify-center text-xs">۱</span>
                <span>سربرگ و مشخصات ثبتی (Header)</span>
              </h4>
              <p className="text-slate-400 leading-relaxed">
                ذکر نام خدا در بالاترین بخش میانی، تاریخ روز، شماره اندیکاتور و وضعیت پیوست (دارد/ندارد) در گوشه سمت چپ بالای نامه.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#E5C158]/20 flex items-center justify-center text-xs">۲</span>
                <span>عنوان دقیق گیرنده و موضوع نامه</span>
              </h4>
              <p className="text-slate-400 leading-relaxed">
                درج سمت سازمانی مخاطب با عبارات رسمی (مانند «ریاست محترم اداره...») و قید موضوع صریح و کوتاه در یک سطر قبل از شروع متن.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#E5C158]/20 flex items-center justify-center text-xs">۳</span>
                <span>مقدمه و ادای احترام (Salutation & Intro)</span>
              </h4>
              <p className="text-slate-400 leading-relaxed">
                شروع با «با سلام و احترام» و بیان عباراتی نظیر «به استحضار می‌رساند» جهت آماده‌سازی ذهن مخاطب برای ورود به اصل مطلب.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#E5C158]/20 flex items-center justify-center text-xs">۴</span>
                <span>متن اصلی خواسته، سوابق و استدلال</span>
              </h4>
              <p className="text-slate-400 leading-relaxed">
                تشریح شفاف خواسته، ذکر شماره مکاتبات قبلی در صورت وجود سابقه، استناد به بخشنامه‌ها و ارائه راه‌حل یا تقاضای مشخص.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2 md:col-span-2">
              <h4 className="font-bold text-[#E5C158] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#E5C158]/20 flex items-center justify-center text-xs">۵</span>
                <span>پایان‌بندی محترمانه، مشخصات متقاضی و امضا</span>
              </h4>
              <p className="text-slate-400 leading-relaxed">
                استفاده از عباراتی نظیر «پیشاپیش از بذل توجه و مساعدت جنابعالی کمال امتنان را دارم» همراه با درج نام، کدملی، شماره همراه و امضای شفاف فرستنده.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Registration, Secretariat and Automation Follow-up */}
        <div id="secretariat-and-tracking" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۴. روش صحیح ثبت در دبیرخانه، اتوماسیون اداری و پیگیری قانونی
            </h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۱
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">چاپ در دو نسخه و امضای دستی</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  نامه اداری را در کاغذ تمیز سایز A4 چاپ نمایید. همیشه یک نسخه اصلی را به دبیرخانه تحویل دهید و از نسخه دوم به عنوان <strong>«نسخه ثانی»</strong> برای دریافت مهر و شماره ثبت استفاده کنید.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۲
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">اخذ شماره اندیکاتور و تاریخ دقیق ثبت</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  مسئول دبیرخانه مکلف است مشخصات نامه و پیوست‌های آن را در سیستم اتوماسیون اداری اسکن کرده و برچسب یا مهر شماره ثبت و بارکد پیگیری را روی نسخه ثانی شما درج کند.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۳
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">پیگیری ارجاع، هامش مدیریتی و پاسخ کارشناسی</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  با در دست داشتن شماره ثبت می‌توانید از طریق باجه پیگیری مراجعان یا پورتال اینترنتی سازمان، نام کارشناس ارجاع‌شونده و دستورات صادره را دنبال نمایید.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Common Mistakes in Administrative Writing */}
        <div id="common-mistakes" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۵. اشتباهات مهلک در نگارش نامه اداری که مانع رسیدگی می‌شود
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-red-500/20 space-y-2">
              <h4 className="font-bold text-red-400">۱. کلی‌گویی و ابهام در خواسته</h4>
              <p className="text-slate-400 leading-relaxed">
                طولانی‌نویسی، بیان درددل‌های شخصی و ذکر نکردن تقاضای مشخص در پایان نامه که منجر به ارجاعات بیهوده و بایگانی نامه می‌شود.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-amber-500/20 space-y-2">
              <h4 className="font-bold text-amber-400">۲. لحن تند یا ادبیات نامناسب</h4>
              <p className="text-slate-400 leading-relaxed">
                استفاده از لحن تهاجمی، کنایه‌آمیز یا تهدید کارمندان که مقاومت روانی ایجاد کرده و انگیزه کارشناسی را از بین می‌برد.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-blue-500/20 space-y-2">
              <h4 className="font-bold text-sky-400">۳. ارسال به مرجع غیرصالح</h4>
              <p className="text-slate-400 leading-relaxed">
                خطاب قرار دادن مقامی که اختیار قانونی در موضوع ندارد؛ نامه‌ها باید خطاب به بالاترین مقام اجرایی ذی‌ربط با ذکر سمت دقیق ارسال گردند.
              </p>
            </div>
          </div>
        </div>

        {/* Section 6: Practical Pre-Submission Checklist */}
        <div id="practical-checklist" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۶. چک‌لیست نهایی قبل از امضا و تحویل نامه اداری به دبیرخانه
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2 p-3 rounded-xl bg-[#070B15] border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>عنوان و سمت دقیق مخاطب بازبینی شده است.</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-[#070B15] border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>کادر موضوع صریح، کوتاه و بدون ابهام است.</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-[#070B15] border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>کدملی، شماره همراه و آدرس متقاضی دقیق قید شده است.</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-[#070B15] border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>کلیه مدارک و مستندات ضمیمه در کادر پیوست ذکر شده است.</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-[#070B15] border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>نامه در دو نسخه پرینت گرفته شده و نسخه ثانی آماده مهر است.</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-[#070B15] border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>لحن اداری متناسب با سلسله‌مراتب رعایت شده است.</span>
            </div>
          </div>
        </div>

        {/* Section 7: Three-Tier Conversion & Ecosystem Links */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#0C1222] via-[#0F172A] to-[#0C1222] border border-[#E5C158]/30 space-y-4">
          <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
            <Sparkles className="w-5 h-5" />
            <span>مسیرهای سه‌گانه دسترسی و خدمات نگارش یار در حوزه مکاتبات اداری</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-2 flex flex-col justify-between">
              <div className="space-y-1">
                <h4 className="font-bold text-white">۱. آموزش و مقالات راهنما</h4>
                <p className="text-slate-400 leading-relaxed">
                  مطالعه اصول نامه‌نگاری رسمی، مقررات دبیرخانه و آیین نگارش اسناد دولتی در پایگاه دانش.
                </p>
              </div>
              <Link
                href="/knowledge/how-to-write-administrative-letter"
                className="inline-flex items-center gap-1 text-[#E5C158] font-bold hover:underline pt-2 text-xs"
              >
                <span>مطالعه مقاله جامع اصول نگارش</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-2 flex flex-col justify-between">
              <div className="space-y-1">
                <h4 className="font-bold text-white">۲. بانک ۳۱ نمونه آماده</h4>
                <p className="text-slate-400 leading-relaxed">
                  مشاهده و کپی رایگان ۳۱ الگوی استاندارد مکاتبه با ادارات، بانک‌ها، شهرداری و شرکت‌ها.
                </p>
              </div>
              <Link
                href="/samples/administrative-letters"
                className="inline-flex items-center gap-1 text-[#E5C158] font-bold hover:underline pt-2 text-xs"
              >
                <span>مشاهده بانک نمونه نامه‌ها</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-4 rounded-xl bg-[#070B15] border border-[#E5C158]/40 space-y-2 flex flex-col justify-between">
              <div className="space-y-1">
                <h4 className="font-bold text-[#E5C158]">۳. تنظیم تخصصی با کارشناس</h4>
                <p className="text-slate-400 leading-relaxed">
                  سفارش نگارش اختصاصی نامه اداری بر اساس شرح دقیق موضوع شما در فرمت Word و PDF.
                </p>
              </div>
              <Link
                href="/request?service=administrative-letter"
                className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-[#E5C158] text-[#070B15] font-black hover:bg-[#d4b045] transition-colors text-xs"
              >
                <span>سفارش تنظیم فوری نامه</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
