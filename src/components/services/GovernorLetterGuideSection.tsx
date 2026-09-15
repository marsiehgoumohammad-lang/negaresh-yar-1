import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import {
  Building2,
  AlertCircle,
  Sparkles,
  Layers,
  ArrowLeft,
  FileCheck,
} from 'lucide-react';

export function GovernorLetterGuideSection() {
  return (
    <section className="relative space-y-12">
      <Container>
        {/* Header Badge & Title */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold">
            <Sparkles className="w-4 h-4" />
            <span>راهنمای نگارش مکاتبات رسمی، عریضه و استشهادیه به استانداری، فرمانداری و بخشداری</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            راهنمای مکاتبه با استاندار و فرماندار، پیگیری مطالبات محلی، عمرانی و کارگروه‌های استانی
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            بررسی جایگاه استاندار به عنوان نماینده عالی دولت، کارگروه تسهیل و رفع موانع تولید، شورای تأمین استان، نظارت بر شهرداری‌ها و دهیاری‌ها و استشهادیه‌های اهالی.
          </p>
        </div>

        {/* Section 1: Role and Competence of Governors and District Administrators */}
        <div id="what-is-governor-letter" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۱. استاندار و فرماندار چه اختیاراتی دارند و چه موضوعاتی به آن‌ها ارجاع می‌شود؟
            </h3>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              بر اساس مصوبه شورای عالی اداری در خصوص وظایف و اختیارات استانداران و فرمانداران، استاندار بالاترین مقام اجرایی و نماینده عالی دولت در استان است که بر تمامی ادارات کل، سازمان‌های دولتی، نهادهای عمومی و شرکت‌های دولتی در سطح استان نظارت و هماهنگی دارد. فرمانداران و بخشداران نیز در حوزه شهرستان و بخش همین مسئولیت حاکمیتی را دارا هستند.
            </p>
            <p>
              استانداری مرجع عالی رسیدگی به مطالبات جمعی اهالی (آسفالت، گازرسانی، آب شرب، بهداشت روستایی)، شکایات از عملکرد شهرداری‌ها و شوراها، رفع موانع تولید و اشتغال و حل تعارضات اداری بین دستگاه‌هاست.
            </p>
            <div className="p-4 rounded-xl bg-[#070B15] border border-amber-500/20 text-amber-200 text-xs sm:text-sm leading-relaxed">
              <strong>کارگروه تسهیل و رفع موانع تولید استان:</strong> یکی از نیرومندترین اهرم‌های استاندار، ریاست این کارگروه است. مصوبات این کارگروه برای تمامی بانک‌های استان، ادارات امور مالیاتی و تأمین اجتماعی جهت استمهال تسهیلات و جلوگیری از پلمب واحدهای تولیدی لازم‌الاجراست.
            </div>
          </div>
        </div>

        {/* Section 2: Administrative Hierarchy */}
        <div id="administrative-hierarchy" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۲. سلسله‌مراتب مراجع تابعه وزارت کشور جهت ارسال نامه
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#E5C158]/20 flex items-center justify-center text-xs">۱</span>
                <span>استانداری (استاندار و معاونین)</span>
              </h4>
              <p className="text-slate-400 leading-relaxed">
                موضوعات کلان استانی، پروژه‌های ملی، کارگروه تسهیل، تعارض بین‌دستگاهی، نظارت عالی بر شهرداری‌ها و عریضه‌های عمومی گسترده.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#E5C158]/20 flex items-center justify-center text-xs">۲</span>
                <span>فرمانداری شهرستان</span>
              </h4>
              <p className="text-slate-400 leading-relaxed">
                مسائل اختصاصی شهرستان، شکایات اهالی از ادارات شهرستانی، نظارت بر مصوبات شورای شهر، مسائل اصناف، امنیت محلی و آرد و نان.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#E5C158]/20 flex items-center justify-center text-xs">۳</span>
                <span>بخشداری و دهیاری</span>
              </h4>
              <p className="text-slate-400 leading-relaxed">
                امور روستایی، طرح هادی، مسائل کشاورزی و انهار، نظارت بر شوراهای اسلامی روستا و دهیاری‌ها و استشهادیه‌های محلی.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Essential Requirements & Collective Petitions */}
        <div id="collective-petitions" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۳. ساختار استاندارد نامه‌های جمعی و استشهادیه اهالی به استانداری
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158]">عنوان خطاب به مقام رسمی ذی‌ربط</h4>
              <p className="text-slate-400 leading-relaxed">
                مانند «جناب آقای ... استاندار محترم استان ...» یا «فرماندار محترم شهرستان ...» با قید دقیق نام استان و شهرستان.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158]">جدول امضا و کدملی اهالی و معتمدین محله</h4>
              <p className="text-slate-400 leading-relaxed">
                درخواست‌های جمعی باید همراه با نام، نام خانوادگی، شماره کدملی، شماره تماس و امضای اهالی محل یا امضای شورای محل باشد.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158]">سوابق مکاتبات قبلی با اداره مربوطه</h4>
              <p className="text-slate-400 leading-relaxed">
                ذکر اینکه قبلاً به اداره آب و فاضلاب یا شهرداری مراجعه شده اما به دلیل عدم تخصیص بودجه اقدامی صورت نگرفته است.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158]">طرح راهکار اجرایی و تقاضای دستور هامش</h4>
              <p className="text-slate-400 leading-relaxed">
                تقاضای صدور دستور کارشناسی و بازدید میدانی بازرسان استانداری جهت حل معضل و ارائه گزارش رسمی.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Common Mistakes */}
        <div id="common-mistakes-governor" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۴. اشتباهات رایج در نامه‌نگاری با استانداری و فرمانداری
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-red-500/20 space-y-2">
              <h4 className="font-bold text-red-400">۱. دور زدن سلسله‌مراتب اداری</h4>
              <p className="text-slate-400 leading-relaxed">
                ارسال نامه به استاندار در موضوعاتی که بدون هیچ سابقه‌ای مستقیماً باید در بخشداری یا اداره شهرستان مطرح می‌شد.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-amber-500/20 space-y-2">
              <h4 className="font-bold text-amber-400">۲. استشهادیه بدون مشخصات معتبر</h4>
              <p className="text-slate-400 leading-relaxed">
                جمع‌آوری امضا بدون درج کدملی یا با خط‌های یکدست که ارزش اداری استشهادیه را نزد حراست و بازرسی مخدوش می‌کند.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-blue-500/20 space-y-2">
              <h4 className="font-bold text-sky-400">۳. عدم پیگیری شماره دبیرخانه</h4>
              <p className="text-slate-400 leading-relaxed">
                رها کردن نامه پس از تحویل بدون دریافت شماره ثبت اندیکاتور دبیرخانه استانداری یا کد پیگیری اتوماسیون اداری.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5: Conversion Modules */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#0C1222] via-[#0F172A] to-[#0C1222] border border-[#E5C158]/30 space-y-4">
          <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
            <Sparkles className="w-5 h-5" />
            <span>خدمات و الگوهای عریضه‌نویسی به استانداری در نگارش یار</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-2 flex flex-col justify-between">
              <div className="space-y-1">
                <h4 className="font-bold text-white">مشاهده و کپی رایگان نمونه نامه</h4>
                <p className="text-slate-400 leading-relaxed">
                  الگوی آماده و متن استاندارد درخواست رسیدگی به مشکلات شهری، عمرانی و کارگروه رفع موانع تولید.
                </p>
              </div>
              <Link
                href="/samples/letter-to-governor"
                className="inline-flex items-center gap-1 text-[#E5C158] font-bold hover:underline pt-2 text-xs"
              >
                <span>مشاهده نمونه نامه به استاندار</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-4 rounded-xl bg-[#070B15] border border-[#E5C158]/40 space-y-2 flex flex-col justify-between">
              <div className="space-y-1">
                <h4 className="font-bold text-[#E5C158]">تنظیم تخصصی عریضه و استشهادیه</h4>
                <p className="text-slate-400 leading-relaxed">
                  تدوین ساختاریافته عریضه جمعی یا نامه اختصاصی توسط کارشناسان امور اداری با استناد به اختیارات استانداری.
                </p>
              </div>
              <Link
                href="/request?service=letter-to-governor"
                className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-[#E5C158] text-[#070B15] font-black hover:bg-[#d4b045] transition-colors text-xs"
              >
                <span>سفارش تنظیم نامه استانداری</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
