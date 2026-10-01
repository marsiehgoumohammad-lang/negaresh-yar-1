import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import {
  Scale,
  ShieldCheck,
  Coins,
  Building,
  Home,
  FileCheck2,
  ArrowLeft,
  CheckCircle2,
} from 'lucide-react';

export function LegalNoticeGuideSection() {
  return (
    <section className="py-12 border-t border-slate-800/80 bg-[#070B15]">
      <Container className="space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5C158]/10 text-[#E5C158] text-xs font-bold border border-[#E5C158]/20">
            <Scale className="w-3.5 h-3.5" />
            <span>راهنمای کاربردی دادرسی مدنی</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            اصول حقوقی و نکات کلیدی در ارسال اظهارنامه ماده ۱۵۶
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            پیش از ثبت هرگونه اظهارنامه قضایی در سامانه ثنا، این قواعد را به خاطر داشته باشید تا موضع دفاعی شما در دادگاه های آینده مخدوش نشود.
          </p>
        </div>

        {/* 4 Practical Notice Scenarios */}
        <div className="space-y-4">
          <h4 className="text-base font-bold text-white flex items-center gap-2 border-r-4 border-[#E5C158] pr-3">
            <span>چهار گروه از پرکاربردترین اظهارنامه های قضایی</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-[#0C1222] border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-[#E5C158]">
                <Coins className="w-5 h-5" />
              </div>
              <h5 className="font-bold text-white text-sm">مطالبه وجه و طلب مالی</h5>
              <p className="text-xs text-slate-400 leading-relaxed">
                اخطار رسمی تسویه بدهی های فاقد موعد صریح جهت ثبت تاریخ مطالبه برای محاسبه خسارت تاخیر تادیه طبق ماده ۵۲۲ قانون آیین دادرسی مدنی.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0C1222] border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400">
                <Building className="w-5 h-5" />
              </div>
              <h5 className="font-bold text-white text-sm">املاک و تحویل مبیع</h5>
              <p className="text-xs text-slate-400 leading-relaxed">
                اخطار به فروشنده یا خریدار ملک جهت حضور در دفترخانه برای تنظیم سند رسمی انتقال یا تحویل مبیع به همراه مدارک کامل.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0C1222] border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Home className="w-5 h-5" />
              </div>
              <h5 className="font-bold text-white text-sm">تخلیه و روابط استیجاری</h5>
              <p className="text-xs text-slate-400 leading-relaxed">
                اعلام آمادگی مستاجر برای تحویل کلید در پایان مدت اجاره و تقاضای ودیعه، یا اخطار موجر جهت تسویه اجاره های معوقه.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0C1222] border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h5 className="font-bold text-white text-sm">اعلام فسخ قرارداد</h5>
              <p className="text-xs text-slate-400 leading-relaxed">
                ابلاغ رسمی اراده انحلال معامله به دلیل تخلف از شروط قراردادی یا خیارات قانونی پیش از ثبت دادخواست تایید فسخ.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Golden Rules Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0F172A] to-[#070B15] border border-slate-800 space-y-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#E5C158]" />
            <div>
              <h4 className="font-black text-white text-base sm:text-lg">
                چهار اصل طلایی نگارش متن اظهارنامه برای پیشگیری از مخاطرات دادرسی
              </h4>
              <p className="text-xs text-slate-400">
                رعایت این اصول از تضعیف موقعیت شما در صورت ارجاع پرونده به دادگاه جلوگیری می کند:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800/80 space-y-2">
              <div className="font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E5C158]" />
                <span>۱. پرهیز اکید از اقرار ناخواسته</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                هر عبارتی که در اظهارنامه می نویسید سند رسمی تلقی می شود. تایید شفاهی ادعاهای مبهم طرف مقابل ممکن است به عنوان اقرار قانونی علیه شما استفاده شود.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800/80 space-y-2">
              <div className="font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>۲. استفاده از ادبیات رسمی و محترمانه</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                لحن تند، پرخاشگرانه یا حاوی اتهامات اثبات نشده، می تواند زمینه ساز شکایت کیفری توهین و افترا علیه ارسال کننده گردد.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800/80 space-y-2">
              <div className="font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                <span>۳. استناد دقیق به قرارداد و مواد قانونی</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                ذکر شماره قرارداد، تاریخ مبایعه نامه، شماره رسید یا مواد قانونی مرتبط وزن حقوقی اخطار را در نگاه قاضی دادرسی بالا می برد.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800/80 space-y-2">
              <div className="font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span>۴. تعیین مهلت منصفانه و روشن</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                اعطای فرصت معقول (مانند ۵ تا ۱۰ روز کاری پس از ابلاغ) برای اثبات این امر است که ارسال کننده فرصت کافی به طرف مقابل داده است.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Paths Breakdown */}
        <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
            <CheckCircle2 className="w-5 h-5" />
            <span>تفکیک شفاف مسیرهای حقوقی در نگارش یار</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-2">
              <h5 className="font-bold text-white">۱. آموزش حقوقی رایگان</h5>
              <p className="text-slate-400 leading-relaxed">
                برای درک عمیق مواد قانون آیین دادرسی مدنی و شرایط خسارت تاخیر تادیه، راهنمای جامع اظهارنامه را مطالعه کنید.
              </p>
              <Link
                href="/knowledge/what-is-legal-notice"
                className="text-[#E5C158] hover:underline inline-flex items-center gap-1 font-bold pt-1"
              >
                <span>مطالعه مقاله اظهارنامه چیست</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-2">
              <h5 className="font-bold text-[#E5C158]">۲. تنظیم تخصصی اظهارنامه</h5>
              <p className="text-slate-400 leading-relaxed">
                تنظیم دقیق متن اخطار قانونی توسط کارشناسان حقوقی بدون ریسک اقرار ناخواسته و متناسب با شرایط پرونده.
              </p>
              <Link
                href="/request?service=legal-notice"
                className="text-amber-300 hover:underline inline-flex items-center gap-1 font-bold pt-1"
              >
                <span>ثبت سفارش تنظیم اظهارنامه</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-2">
              <h5 className="font-bold text-sky-400">۳. معرفی وکیل منصف</h5>
              <p className="text-slate-400 leading-relaxed">
                اگر اختلاف شما پیچیده است و نیازمند پیگیری دادگاهی و وکالت رسمی در ۳۱ استان کشور هستید، از خدمات وکیل منصف استفاده کنید.
              </p>
              <Link
                href="/lawyer-referral"
                className="text-sky-400 hover:underline inline-flex items-center gap-1 font-bold pt-1"
              >
                <span>معرفی وکیل منصف دادگستری</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Conversion Box */}
        <div className="bg-gradient-to-r from-[#111827] via-[#0D1424] to-[#111827] border-2 border-[#E5C158]/50 rounded-3xl p-6 sm:p-8 text-center space-y-4 shadow-xl shadow-[#E5C158]/10">
          <h4 className="text-xl sm:text-2xl font-black text-white">
            قصد ارسال اظهارنامه دارید و به متنی محکم و قابل استناد نیاز دارید؟
          </h4>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            اجازه ندهید کلمات نسنجیده موضع شما را در دادگاه آینده تضعیف کند. متن اختصاصی اظهارنامه خود را بر اساس مواد قانونی آماده ثبت در دفاتر قضایی تحویل بگیرید.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/request?service=legal-notice"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#070B15] font-black text-sm shadow-lg shadow-[#E5C158]/20 hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <span>تنظیم اظهارنامه متناسب با پرونده شما</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <Link
              href="/samples/legal-notice"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-bold text-xs sm:text-sm hover:text-white transition-colors"
            >
              مشاهده نمونه متن اظهارنامه
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
