'use client';

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
  Building,
  Gavel,
  ShieldCheck,
  AlertTriangle,
  AlertOctagon,
  FileCheck2,
} from 'lucide-react';

export function JudiciaryAuctionGuideSection() {
  return (
    <section className="relative space-y-12 my-12" id="service-guide">
      <Container>
        {/* Header Badge & Title */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold">
            <Sparkles className="w-4 h-4" />
            <span>راهنمای جامع، کاربردی و قانونی مزایدات دادگستری و اجرای احکام</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            راهنمای تخصصی مزایده های اجرای احکام، سامانه ستاد، انتقال سند و ابطال حراج
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            بررسی مواد ۱۱۴ تا ۱۴۷ قانون اجرای احکام مدنی، ضوابط ودیعه ۱۰ درصدی، مهلت تسویه ثمن، مواد ۱۳۶ و ۱۴۲، دستور انتقال سند رسمی و رأی وحدت رویه شماره ۸۴۵ دیوان عالی کشور.
          </p>
        </div>

        {/* Section 1: Definition & Scope */}
        <div id="what-is-judiciary-auction" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Gavel className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۱. مزایده اجرای احکام مدنی چیست و چه قلمروی دارد؟
            </h3>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              در نظام دادرسی حقوقی و کیفری ایران، هنگامی که حکم قطعی مبنی بر محکومیت مالی یا دستور فروش صادر می شود (نظیر مطالبه مهریه، دیه، چک، تقسیم ترکه موروثی یا مطالبات تجاری) و بدهکار از پرداخت داوطلبانه محکوم به امتناع می کند، دایره اجرای احکام دادگستری به تقاضای محکوم له اقدام به توقیف اموال منقول یا غیرمنقول وی می نماید.
            </p>
            <p>
              بر اساس <strong>ماده ۱۱۴ قانون اجرای احکام مدنی</strong>، فروش اموال توقیف شده صرفا از طریق مزایده عمومی و رقابتی امکان پذیر است. طبق تکالیف قانونی و ماده ۱۰۸ قانون برنامه هفتم، تمامی مزایدات اجرای احکام دادگستری سراسر کشور به صورت الکترونیکی از طریق بخش حراج سامانه تدارکات الکترونیکی دولت (ستاد ایران به نشانی setadiran.ir) برگزار می شود.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <h4>مزایده اجرای احکام دادگاه</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  ناشی از رسیدگی قضایی و صدور دادنامه اجراییه در مراجع دادگستری است. قیمت پایه توسط کارشناس رسمی دادگستری ارزیابی شده و دستور انتقال رسمی سند مستقیما توسط قاضی صادر می گردد.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
                  <Scale className="w-4 h-4" />
                  <h4>تمایز با مزایدات ثبت و اموال تملیکی</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  مزایده اجرای ثبت مستقیما در دوایر اجرای اسناد رسمی اداره ثبت برگزار می شود؛ در حالی که مزایدات سازمان اموال تملیکی مختص کالاهای متروکه گمرکی و اموال قاچاق ضبط شده به نفع دولت است.
                </p>
              </div>
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
              ۲. مبانی و چارچوب قانونی مزایده، بطلان و رأی وحدت رویه ۸۴۵
            </h3>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              تشریفات قانونی مزایده در اجرای احکام مدنی بر پایه مواد ۱۱۴ تا ۱۴۷ قانون اجرای احکام مدنی استوار است. رعایت دقیق این مواد الزامی و از قواعد آمره دادرسی است:
            </p>

            <blockquote className="p-4 rounded-2xl bg-[#070B15] border-r-4 border-[#E5C158] text-slate-200 text-xs sm:text-sm font-medium leading-relaxed space-y-2">
              <p>
                <strong>ماده ۱۲۹ قانون اجرای احکام مدنی:</strong> «در مزایده حضوری برنده مزایده باید ده درصد بهای مال را فی المجلس به عنوان سپرده به مسئول فروش بدهد و باقیمانده بهای مال را حداکثر ظرف یک ماه از تاریخ مزایده بپردازد؛ در غیر این صورت ده درصد سپرده پس از کسر هزینه های عملیات اجرایی به نفع دولت ضبط و مزایده تجدید خواهد شد.»
              </p>
            </blockquote>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
                <span className="text-xs font-bold text-[#E5C158] block">ماده ۱۳۶ ق.ا.ا.م (جهات قانونی بطلان مزایده)</span>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  فروش در غیر روز، ساعت یا محلی که به موجب آگهی معین شده، ممانعت از خرید اشخاص بدون جهت قانونی یا رد بالاترین پیشنهاد، برگزاری مزایده بدون حضور نماینده دادسرا، و خرید توسط اشخاص ممنوع در ماده ۱۲۷.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
                <span className="text-xs font-bold text-[#E5C158] block">ماده ۱۴۲ و ۱۴۳ ق.ا.ا.م (شکایت و دستور انتقال)</span>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  شکایت از تنظیم صورت ملک، ارزیابی، تخلف از مقررات مزایده و سایر اقدامات دادورز ظرف یک هفته از تاریخ وقوع به دادگاهی که دادورز در آنجا ماموریت دارد داده می‌شود و قبل از رسیدگی و اتخاذ تصمیم دادگاه، سند انتقال داده نمی‌شود. دادگاه پیش از صدور دستور انتقال، صحت کل فرآیند را بررسی می‌نماید.
                </p>
              </div>
            </div>

            {/* Supreme Court Opinion 845 Callout */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#172033] to-[#0D1424] border-2 border-[#E5C158]/50 text-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm sm:text-base">
                <Sparkles className="w-5 h-5 text-[#E5C158] shrink-0" />
                <span>نقطه عطف قضایی: رأی وحدت رویه شماره ۸۴۵ هیئت عمومی دیوان عالی کشور</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                به موجب <strong>رأی وحدت رویه شماره ۸۴۵ مورخ ۱۴۰۲/۱۲/۰۸ هیئت عمومی دیوان عالی کشور</strong>، تایید صحت جریان مزایده توسط دادگاه صادرکننده اجراییه و صدور دستور انتقال سند رسمی موضوع ماده ۱۴۳ قانون اجرای احکام مدنی، مانع از استماع و پذیرش دعوای مستقل «ابطال مزایده و ابطال سند انتقال اجرایی» در دادگاه صلاحیت دار نخواهد بود.
              </p>
              <div className="text-xs text-amber-200 bg-amber-500/10 p-3 rounded-xl border border-amber-500/20 leading-relaxed">
                <strong>اثر حقوقی عملی:</strong> چنانچه تخلفات اساسی قانونی در جریان اجرای مزایده رخ داده باشد، تایید اولیه صحت مزایده مانع از طرح دعوای ابطال در مرجع صالح قضایی نبوده و در صورت اثبات شرایط قانونی، دادگاه می تواند نسبت به رسیدگی ماهوی و صدور حکم مقتضی اقدام نماید.
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Judicial Criteria */}
        <div id="judicial-criteria" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۳. معیارهای قضایی پذیرش اعتراض و ابطال مزایده
            </h3>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            قضات محاکم در رسیدگی به اعتراضات یا دعاوی ابطال مزایده، معیارهای زیر را به دقت ممیزی می نمایند:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <h4>عدم ابلاغ وقت و مفاد آگهی به محکوم علیه</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                مالک مال توقیف شده باید از زمان، مکان و ارزیابی مطلع باشد تا بتواند خریدار بهتری معرفی کند یا بدهی را تسویه نماید. عدم ابلاغ قانونی موجب ابطال است.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <h4>بررسی فاصله زمانی کارشناسی و نوسانات ارزش مال</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                چنانچه فاصله زمانی میان نظریه کارشناسی تا برگزاری مزایده قابل توجه بوده یا تغییر محسوسی در ارزش مال ایجاد شده باشد، ذی نفع می تواند موضوع تجدید ارزیابی را حسب مقررات و اوضاع و احوال پرونده نزد مرجع ذی صلاح مطرح نماید؛ لیکن فاصله زمانی به خودی خود موجب بطلان خودکار نیست و احراز ضرورت تجدید ارزیابی منوط به نظر دادگاه است.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <h4>حقوق اشخاص ثالث (مواد ۱۴۶ و ۱۴۷)</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                چنانچه شخص ثالث نسبت به مال توقیف شده اظهار حقی نماید، طبق ماده ۱۴۶ ق.ا.ا.م در صورت استناد به حکم قطعی یا سند رسمی با تاریخ مقدم بر توقیف، رفع توقیف به عمل می آید؛ در غیر این صورت عملیات اجرایی تعقیب می گردد و مدعی حق می تواند به دادگاه شکایت کند که بر اساس ماده ۱۴۷، در صورت قوی یافتن دلایل، دادگاه قرار توقیف عملیات اجرایی را تا تعیین تکلیف نهایی صادر می نماید.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <h4>تخلف خریدار در پرداخت باقیمانده ثمن</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                برنده مزایده مکلف است مابقی ۹۰ درصد را در مهلت تعیین شده در آگهی واریز کند. انقضای مهلت موجب ضبط سپرده ۱۰ درصدی و ابطال پیروزی برنده خواهد شد.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Required Documents & Checklist */}
        <div id="required-documents" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۴. مدارک، استعلامات و چک لیست ضروری شرکت در مزایده
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158] flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>۱. حساب کاربری سامانه ستاد و گواهی امضای الکترونیک</span>
              </h4>
              <p className="text-slate-400 leading-relaxed">
                ثبت نام در پنجره ملی دولت هوشمند، احراز هویت در سامانه ستاد (setadiran.ir) و داشتن توکن امضای دیجیتال معتبر به نام پیشنهاد دهنده.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158] flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>۲. فیش یا واریز آنلاین ۱۰ درصد تضمین ورودی</span>
              </h4>
              <p className="text-slate-400 leading-relaxed">
                واریز سیستمی ۱۰ درصد قیمت پایه کارشناسی ملک یا خودرو قبل از سررسید زمان پایانی پیشنهاد قیمت در سامانه ستاد.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158] flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>۳. استعلام سوابق ثبتی و بازداشتی های مقدم</span>
              </h4>
              <p className="text-slate-400 leading-relaxed">
                بررسی بازداشتی های سایر طلبکاران، توثیق اسناد در بانک یا وجود موقوفات از طریق استعلام ثبتی و بررسی متن آگهی حراج.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158] flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>۴. گواهی خلافی، تعویض پلاک و وضعیت تصرف ملک</span>
              </h4>
              <p className="text-slate-400 leading-relaxed">
                استعلام شماره شاسی خودرو در پلیس راهور برای اصالت قطعات و استعلام حضور مستاجر یا متصرف در آپارتمان برای صدور دستور تخلیه.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5: Step-by-Step Flow */}
        <div id="steps-to-auction" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۵. مراحل گام به گام شرکت در مزایده تا اخذ سند رسمی انتقال
            </h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۱
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">انتخاب آگهی و بازدید فیزیکی در مهلت ۵ روزه</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  جستجوی آگهی در سامانه ستاد ایران و انجام بازدید حضوری از مال توقیفی با هماهنگی دادورز اجرای احکام مستند به ماده ۱۲۶ قانون اجرای احکام مدنی.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۲
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">واریز ودیعه ۱۰ درصدی و ثبت پیشنهاد قیمت</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  واریز سیستمی ودیعه از طریق درگاه بانکی سامانه و درج رقم پیشنهادی با امضای الکترونیک قبل از زمان اتمام حراج.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۳
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">بازگشایی پاکت ها، تعیین برنده و استرداد سپرده غیربرندگان</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  اعلام بالاترین پیشنهاد در سامانه، تنظیم صورتمجلس حراج و عودت ۱۰ درصد ودیعه به حساب شبای سایر شرکت کنندگان پس از پایان جلسه مزایده و طی مراحل اداری و بانکی.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۴
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">واریز باقیمانده ثمن معامله در مهلت مقرر (حداکثر ۱ ماه)</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  برنده اول موظف است ۹۰ درصد مابقی را طبق مهلت مقرر در آگهی به حساب اجرای احکام واریز کرده و فیش نهایی را تحویل دهد.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۵
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">احراز صحت، صدور دستور انتقال سند رسمی و تخلیه (ماده ۱۴۳ و ۱۴۴)</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  قاضی اجرای احکام پس از انقضای مهلت یک هفته ای اعتراض، دستور معرفی به دفترخانه را صادر کرده و در صورت استنکاف مالک، نماینده دادگاه سند را امضا و ملک را تخلیه می نماید.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 6: Comparison Matrix */}
        <div id="auction-comparison-table" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۶. جدول مقایسه انواع مزایدات قضایی، ثبتی و دولتی در ایران
            </h3>
          </div>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            بررسی جامع ماهیت، مرجع برگزارکننده، بستر اجرا، میزان سپرده و وضعیت صدور سند مالکیت در مزایدات مختلف:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-[#E5C158] font-bold">
                  <th className="p-3">نوع مزایده</th>
                  <th className="p-3">مرجع صالح برگزارکننده</th>
                  <th className="p-3">بستر برگزاری</th>
                  <th className="p-3">میزان ودیعه ورودی</th>
                  <th className="p-3">تضمین انتقال سند رسمی</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr>
                  <td className="p-3 font-bold text-amber-400">مزایده نوبت اول اجرای احکام</td>
                  <td className="p-3">شعبه اجرای احکام مدنی دادگستری</td>
                  <td className="p-3">سامانه ستاد ایران (setadiran.ir)</td>
                  <td className="p-3 text-emerald-400 font-bold">۱۰ درصد قیمت پایه</td>
                  <td className="p-3 text-emerald-400 font-bold">توسط نماینده دادگاه (ماده ۱۴۳)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-sky-400">مزایده نوبت دوم اجرای احکام</td>
                  <td className="p-3">شعبه اجرای احکام (در صورت نبود خریدار در نوبت اول)</td>
                  <td className="p-3">سامانه ستاد ایران</td>
                  <td className="p-3 text-emerald-400 font-bold">۱۰ درصد قیمت پایه</td>
                  <td className="p-3 text-emerald-400 font-bold">فروش به بالاترین قیمت پیشنهادی</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-purple-400">مزایده دوایر اجرای ثبت</td>
                  <td className="p-3">اداره ثبت اسناد و املاک (وصول مهریه و چک)</td>
                  <td className="p-3">سامانه حراج الکترونیک ثبت اسناد</td>
                  <td className="p-3 text-emerald-400 font-bold">۱۰ درصد ارزیابی ثبتی</td>
                  <td className="p-3 text-sky-300 font-bold">صدور سند انتقال اجرایی ثبتی</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-rose-400">مزایده سازمان اموال تملیکی</td>
                  <td className="p-3">سازمان جمع آوری و فروش اموال تملیکی</td>
                  <td className="p-3">سامانه ستاد ایران (بخش حراج تملیکی)</td>
                  <td className="p-3 text-amber-300 font-bold">۵ تا ۱۵ درصد بر اساس نوع مال</td>
                  <td className="p-3 text-slate-300 font-medium">سند رسمی خودرو یا کالای تملیکی</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-blue-400">حراج مزایده تقسیم ترکه</td>
                  <td className="p-3">دادگاه صلح / شعبه حقوقی جهت تقسیم ارث</td>
                  <td className="p-3">سامانه ستاد ایران</td>
                  <td className="p-3 text-emerald-400 font-bold">۱۰ درصد بهای کارشناسی</td>
                  <td className="p-3 text-emerald-400 font-bold">انتقال سند و تقسیم وجوه میان وراث</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 7: Dangerous Mistakes */}
        <div id="critical-mistakes" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۷. اشتباهات خطرناک در مزایده دادگاه که باعث ضرر میلیاردی می شود
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#070B15] border border-rose-900/30 space-y-2">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                <AlertOctagon className="w-4 h-4 shrink-0" />
                <h4>تاخیر در پرداخت ۹۰ درصد باقیمانده (ماده ۱۲۹)</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                حتی یک روز تاخیر پس از مهلت آگهی، موجب ابطال خرید و ضبط سپرده ۱۰ درصدی به نفع صندوق دولت پس از کسر هزینه ها می شود. قبل از پیشنهاد از نقدینگی خود مطمئن شوید.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#070B15] border border-rose-900/30 space-y-2">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                <AlertOctagon className="w-4 h-4 shrink-0" />
                <h4>عدم بررسی وضعیت تصرف و خلع ید ملک</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                برخی املاک دارای مستاجر رسمی یا متصرف عدوانی هستند. اگر در پرونده دستور تخلیه صادر نشده باشد، خریدار باید جداگانه ماه ها در دادگاه برای خلع ید دادرسی کند.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#070B15] border border-rose-900/30 space-y-2">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                <AlertOctagon className="w-4 h-4 shrink-0" />
                <h4>خرید بدون استعلام بدهی شهرداری و دارایی</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                بدهی های سنگین عوارض ساختمانی، پایان کار و جرایم ماده ۱۰۰ ممکن است در دفترخانه مانع تنظیم سند شود مگر آنکه در آگهی صراحتا تسویه آن از ثمن قید شده باشد.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#070B15] border border-rose-900/30 space-y-2">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                <AlertOctagon className="w-4 h-4 shrink-0" />
                <h4>غفلت از مهلت یک هفته ای شکایت و رأی وحدت رویه ۸۴۵</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                محکوم علیه نباید فرصت طلایی شکایت یک هفته ای ماده ۱۴۲ را از دست بدهد. با این حال با استناد به رأی وحدت رویه ۸۴۵، امکان طرح دعوای حقوقی ابطال همچنان پابرجاست.
              </p>
            </div>
          </div>
        </div>

        {/* Section 8: 3-Tier Option Delineation */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#0C1222] via-[#0F172A] to-[#0C1222] border border-[#E5C158]/30 space-y-4">
          <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
            <CheckCircle2 className="w-5 h-5" />
            <span>تفکیک شفاف خدمات و گزینه های شما در خصوص مزایده های دادگستری</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-1">
              <h4 className="font-bold text-white">۱. آموزش حقوقی رایگان</h4>
              <p className="text-slate-400">
                مطالعه راهنماها و مقالات پایگاه دانش نگارش یار پیرامون مواد ۱۱۴ تا ۱۴۷، کارشناسی دادگاه و نحوه کار سامانه ستاد به صورت کاملا رایگان.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-1">
              <h4 className="font-bold text-[#E5C158]">۲. تنظیم لایحه و پشتیبانی نگارش یار</h4>
              <p className="text-slate-400">
                نگارش فوری لوایح اعتراض به مزایده، لایحه ابطال حراج، تقاضای استرداد ۱۰ درصد و ثبت درخواست انتقال سند رسمی ظرف چند ساعت با هزینه منصفانه.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-1">
              <h4 className="font-bold text-sky-400">۳. معرفی وکیل منصف</h4>
              <p className="text-slate-400">
                برای دعاوی پیچیده ابطال سند انتقال، اعتراض ثالث اجرایی و دادخواست های بدوی ماده ۱۴۳ که نیاز به حضور وکیل در دادگاه دارند، از بخش <Link href="/lawyer-referral" className="text-[#E5C158] underline font-bold">معرفی وکیل منصف</Link> اقدام نمایید.
              </p>
            </div>
          </div>
        </div>

        {/* Section 9: Dual Action Conversion CTA Box */}
        <div className="bg-gradient-to-r from-[#111827] via-[#0D1424] to-[#111827] border-2 border-[#E5C158]/50 rounded-3xl p-6 sm:p-8 text-center space-y-4 shadow-xl shadow-[#E5C158]/10">
          <h3 className="text-xl sm:text-2xl font-black text-white">
            قصد شرکت در مزایده را دارید یا به دنبال ابطال حراج غیرقانونی هستید؟
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            از بررسی کارشناسی و ثبت پیشنهاد قیمت در سامانه ستاد تا تنظیم لوایح تخصصی استرداد سپرده یا ابطال مزایده، کارشناسان نگارش یار در کنار شما هستند.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/request?service=judiciary-auction"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#070B15] font-black text-sm shadow-lg shadow-[#E5C158]/20 hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <span>درخواست خدمات مزایده و تنظیم لایحه</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <Link
              href="/samples/auction-cancellation-objection"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-bold text-xs sm:text-sm hover:text-white transition-colors"
            >
              مشاهده نمونه لایحه ابطال مزایده
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
