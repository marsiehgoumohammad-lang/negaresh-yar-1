import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import {
  Scale,
  Layers,
  ArrowLeft,
  Sparkles,
  Gavel,
  ShieldCheck,
  AlertTriangle,
  Building2,
} from 'lucide-react';

export function CitizenshipAndCivilRegistrationGuideSection() {
  return (
    <section className="relative space-y-12">
      <Container>
        {/* Header Badge & Title */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold">
            <Sparkles className="w-4 h-4" />
            <span>راهنمای تنظیم اسناد و لوایح تخصصی امور تابعیت، نسب و اسناد سجلی</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            راهنمای مراجع صالح و مسیرهای قانونی پرونده های تابعیت و ثبت احوال
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            بررسی تخصصی تفکیک مراجع اداری (اداره کل امور اتباع استانداری و کمیسیون تابعیت) از مراجع قضایی دادگستری (دادگاه حقوقی و خانواده)، اثبات نسب و هویت، و شیوه های دفاع حقوقی در پرونده های سجلی.
          </p>
        </div>

        {/* Section 1: Administrative vs Judicial Routes */}
        <div id="authorities-distinction" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۱. تفکیک مراجع صالح: استانداری و امور اتباع در برابر دادگاه و ثبت احوال
            </h3>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              یکی از عمده ترین علل رد پرونده ها و اتلاف وقت متقاضیان، ارائه دادخواست به مرجع ناصالح است. در حقوق موضوعه ایران، مرجع بررسی صلاحیت متقاضی بسته به ماهیت درخواست کاملا متفاوت است:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>مراجع اداری تابعیت (استانداری و وزارت کشور)</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  رسیدگی به درخواست اعلام تابعیت فرزندان مادر ایرانی (قانون ۱۳۹۸)، تحصیل تابعیت بند ۴ ماده ۹۷۶ قانون مدنی، رفع نقص پرونده در اداره کل اتباع و تجدیدنظر در کمیسیون تابعیت وزارت کشور.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                  <Gavel className="w-4 h-4" />
                  <span>مراجع قضایی دادگستری (دادگاه حقوقی و خانواده)</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  رسیدگی به دعاوی اثبات نسب مادری و پدری، الزام اداره ثبت احوال به صدور شناسنامه طبق رای وحدت رویه ۷۴۸، و اعتراض به آرای هیات حل اختلاف ثبت احوال مستند به ماده ۴ قانون ثبت احوال.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#070B15] border border-amber-500/20 text-amber-200 text-xs sm:text-sm leading-relaxed">
              <strong>قاعده حاکم:</strong> اداره ثبت احوال مجری ثبت وقایع حیاتی است و پیش از احراز قطعی تابعیت یا اخذ حکم قطعی دادگاه در خصوص اثبات نسب، به موجب مقررات حاکمیتی صلاحیت صدور اولیه شناسنامه را ندارد.
            </div>
          </div>
        </div>

        {/* Section 2: Exclusions from this Service */}
        <div id="service-boundaries" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۲. محدوده خدمت نگارش یار: عدم پوشش اقدامات روتین کافی نت
            </h3>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              خدمت حاضر منحصرا متمرکز بر <strong>تنظیم مستند و تخصصی لوایح دفاعیه، درخواست های رسمی و دادخواست های ترافعی</strong> است. اقدامات خدماتی روتین از شمول این خدمت خارج بوده و متقاضیان این امور باید به بخش های مربوطه مراجعه نمایند:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-center gap-2 p-3 rounded-xl bg-[#070B15] border border-slate-800">
                <span className="w-2 h-2 rounded-full bg-red-400"></span>
                <span>تعویض شناسنامه مستعمل یا عکس دار کردن شناسنامه (مربوط به بخش کافی نت آنلاین)</span>
              </li>
              <li className="flex items-center gap-2 p-3 rounded-xl bg-[#070B15] border border-slate-800">
                <span className="w-2 h-2 rounded-full bg-red-400"></span>
                <span>درخواست المثنی برای شناسنامه مفقودی بدون وجود اختلاف حقوقی</span>
              </li>
              <li className="flex items-center gap-2 p-3 rounded-xl bg-[#070B15] border border-slate-800">
                <span className="w-2 h-2 rounded-full bg-red-400"></span>
                <span>نوبت گیری سامانه های ثبت احوال یا پرداخت هزینه های اداری دفاتر پیشخوان</span>
              </li>
              <li className="flex items-center gap-2 p-3 rounded-xl bg-[#070B15] border border-slate-800">
                <span className="w-2 h-2 rounded-full bg-red-400"></span>
                <span>تنظیم دادخواست های عمومی نامرتبط نظیر چک، تخلیه ملک یا دعاوی مالی عمومی</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 3: Legal Pillars & Precedents */}
        <div id="legal-foundations" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۳. تکیه گاه های قانونی در تنظیم اسناد تابعیت و دعاوی سجلی
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <span className="text-[#E5C158] font-bold">ماده ۴ قانون ثبت احوال</span>
              <p className="text-slate-400 leading-relaxed">
                مهلت قطعی ۱۰ روزه اعتراض به تصمیمات هیات حل اختلاف ثبت احوال در دادگاه عمومی حقوقی محل اقامت متقاضی.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <span className="text-[#E5C158] font-bold">رای وحدت رویه ۷۴۸</span>
              <p className="text-slate-400 leading-relaxed">
                صلاحیت عام محاکم دادگستری در دعاوی اثبات نسب و الزام ثبت احوال به صدور شناسنامه مستقل از هیات اداری.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <span className="text-[#E5C158] font-bold">بند ۴ ماده ۹۷۶ قانون مدنی</span>
              <p className="text-slate-400 leading-relaxed">
                تحصیل تابعیت بر مبنای سیستم خاک مضاعف با اثبات ولادت متقاضی در ایران و ولادت یکی از والدین در خاک ایران.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Samples Navigation Matrix */}
        <div id="samples-matrix" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۴. دسته بندی نمونه اسناد و دادخواست های مرتبط در نگارش یار
            </h3>
          </div>

          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            جهت مشاهده فرمت های رسمی، مواد قانونی مرتبط و نکات کلیدی، به نمونه های تخصصی هر گروه مراجعه فرمایید:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-3">
              <h4 className="text-white font-bold text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E5C158]"></span>
                <span>گروه اول: تابعیت، اقامت و امور اتباع استانداری</span>
              </h4>
              <div className="flex flex-col gap-2 text-xs">
                <Link href="/samples/mother-iranian-citizenship-application" className="text-slate-300 hover:text-[#E5C158] transition-colors flex items-center justify-between p-2 rounded-lg bg-slate-900/50">
                  <span>درخواست تابعیت فرزند حاصل از مادر ایرانی</span>
                  <ArrowLeft className="w-3.5 h-3.5 text-slate-500" />
                </Link>
                <Link href="/samples/article-976-clause-4-nationality-verification-request" className="text-slate-300 hover:text-[#E5C158] transition-colors flex items-center justify-between p-2 rounded-lg bg-slate-900/50">
                  <span>احراز تابعیت بند ۴ ماده ۹۷۶ قانون مدنی</span>
                  <ArrowLeft className="w-3.5 h-3.5 text-slate-500" />
                </Link>
                <Link href="/samples/suspected-nationality-verification-request" className="text-slate-300 hover:text-[#E5C158] transition-colors flex items-center justify-between p-2 rounded-lg bg-slate-900/50">
                  <span>احراز تابعیت پرونده مشکوک التابعیت (ماده ۴۵)</span>
                  <ArrowLeft className="w-3.5 h-3.5 text-slate-500" />
                </Link>
                <Link href="/samples/citizenship-security-rejection-objection" className="text-slate-300 hover:text-[#E5C158] transition-colors flex items-center justify-between p-2 rounded-lg bg-slate-900/50">
                  <span>اعتراض به رد درخواست تابعیت به علت استعلام امنیتی</span>
                  <ArrowLeft className="w-3.5 h-3.5 text-slate-500" />
                </Link>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-3">
              <h4 className="text-white font-bold text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E5C158]"></span>
                <span>گروه دوم: اسناد سجلی، اثبات نسب و هیات ثبت احوال</span>
              </h4>
              <div className="flex flex-col gap-2 text-xs">
                <Link href="/samples/filiation-proof-birth-certificate-petition" className="text-slate-300 hover:text-[#E5C158] transition-colors flex items-center justify-between p-2 rounded-lg bg-slate-900/50">
                  <span>دادخواست اثبات نسب و صدور شناسنامه (رای ۷۴۸)</span>
                  <ArrowLeft className="w-3.5 h-3.5 text-slate-500" />
                </Link>
                <Link href="/samples/civil-registry-dispute-board-objection" className="text-slate-300 hover:text-[#E5C158] transition-colors flex items-center justify-between p-2 rounded-lg bg-slate-900/50">
                  <span>اعتراض به رای هیات حل اختلاف ثبت احوال (ماده ۴)</span>
                  <ArrowLeft className="w-3.5 h-3.5 text-slate-500" />
                </Link>
                <Link href="/samples/maternal-filiation-proof-petition" className="text-slate-300 hover:text-[#E5C158] transition-colors flex items-center justify-between p-2 rounded-lg bg-slate-900/50">
                  <span>دادخواست اثبات نسب مادری در دادگاه خانواده</span>
                  <ArrowLeft className="w-3.5 h-3.5 text-slate-500" />
                </Link>
                <Link href="/samples/annul-dispute-board-decision-petition" className="text-slate-300 hover:text-[#E5C158] transition-colors flex items-center justify-between p-2 rounded-lg bg-slate-900/50">
                  <span>دادخواست ابطال رای هیات حل اختلاف در دادگاه حقوقی</span>
                  <ArrowLeft className="w-3.5 h-3.5 text-slate-500" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
