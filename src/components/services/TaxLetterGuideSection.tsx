import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import {
  FileText,
  Scale,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowLeft,
  Building,
  Calculator,
} from 'lucide-react';

export function TaxLetterGuideSection() {
  return (
    <section className="relative space-y-12">
      <Container>
        {/* Header Badge & Title */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold">
            <Sparkles className="w-4 h-4" />
            <span>راهنمای تخصصی اعتراض به برگ تشخیص، لوایح مالیاتی و توافق ماده ۲۳۸</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            راهنمای دفاع مالیاتی، اعتراض به برگ تشخیص و هیئت‌های حل اختلاف مالیاتی
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            بررسی مواد ۲۱۶، ۲۳۸، ۲۴۴، ۲۴۷ و ۲۵۱ مکرر قانون مالیات‌های مستقیم، نحوه تنظیم لایحه دفاعیه مالیاتی، مهلت‌های قانونی اعتراض و مدارک اثبات دفاتر و هزینه‌ها.
          </p>
        </div>

        {/* Section 1: Nature of Tax Disputes & Assessment Notices */}
        <div id="what-is-tax-defense" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Calculator className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۱. برگ تشخیص مالیات چیست و چرا دفاع مکتوب سرنوشت‌ساز است؟
            </h3>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              پس از رسیدگی ممیزان سازمان امور مالیاتی به اظهارنامه یا پرونده مؤدی، سندی تحت عنوان <strong>«برگ تشخیص مالیات»</strong> صادر و ابلاغ می‌شود. در صورتی که مؤدی مالیات تعیین‌شده را غیرواقعی یا بدون احتساب معافیت‌ها و هزینه‌های قابل قبول بداند، موظف است ظرف مهلت قانونی اعتراض کتبی و مستند خود را تسلیم نماید.
            </p>
            <p>
              تفاوت بنیادین مکاتبات مالیاتی با نامه‌های عادی اداری در این است که نامه‌های مالیاتی در حکم <strong>«لایحه دفاعیه شبه‌قضایی»</strong> هستند. عدم استناد دقیق به اسناد مثبته حسابداری، فاکتورهای رسمی سامانه مؤدیان و مواد قانون مالیات‌های مستقیم، منجر به قطعی شدن مالیات و صدور برگ قطعی و صدور اجراییه ماده ۲۱۶ خواهد شد.
            </p>
            <div className="p-4 rounded-xl bg-[#070B15] border border-amber-500/20 text-amber-200 text-xs sm:text-sm leading-relaxed">
              <strong>مهلت قطعی ۳۰ روزه اعتراض:</strong> به موجب ماده ۲۳۸ قانون مالیات‌های مستقیم، مؤدی از تاریخ ابلاغ برگ تشخیص دقیقاً ۳۰ روز تقویمی فرصت دارد تا اعتراض کتبی خود را ثبت کند. انقضای این مهلت بدون اقدام کتبی، موجب قطعیت رقم مالیات و سلب حق اعتراض در مراجع بعدی خواهد شد.
            </div>
          </div>
        </div>

        {/* Section 2: Stages of Tax Dispute Resolution */}
        <div id="tax-dispute-stages" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۲. مراحل چهارگانه حل اختلاف مالیاتی در قانون مالیات‌های مستقیم
            </h3>
          </div>

          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            قانون‌گذار مسیر پلکانی زیر را برای رسیدگی به اعتراضات مالیاتی پیش‌بینی کرده است:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs sm:text-sm border border-slate-800 rounded-2xl overflow-hidden">
              <thead className="bg-[#070B15] text-[#E5C158] font-bold border-b border-slate-800">
                <tr>
                  <th className="p-3">مرحله رسیدگی</th>
                  <th className="p-3">مستند قانونی</th>
                  <th className="p-3">ترکیب مرجع و ماهیت</th>
                  <th className="p-3">مهلت اقدام</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr>
                  <td className="p-3 font-bold text-yellow-300">مرحله ۱: توافق با رئیس اداره (ممیز کل)</td>
                  <td className="p-3">ماده ۲۳۸ ق.م.م</td>
                  <td className="p-3">مذاکره اداری و رسیدگی مجدد اسناد توسط مسئول امور مالیاتی</td>
                  <td className="p-3 text-emerald-400">۳۰ روز پس از ابلاغ برگ تشخیص</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-sky-400">مرحله ۲: هیئت حل اختلاف بدوی</td>
                  <td className="p-3">ماده ۲۴۴ ق.م.م</td>
                  <td className="p-3">هیئت سه‌نفره (قاضی دادگستری، نماینده مالیات، نماینده صنف یا اتاق)</td>
                  <td className="p-3 text-sky-400">در صورت عدم توافق در مرحله ماده ۲۳۸</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-400">مرحله ۳: هیئت حل اختلاف تجدیدنظر</td>
                  <td className="p-3">ماده ۲۴۷ ق.م.م</td>
                  <td className="p-3">رسیدگی ماهوی به رأی بدوی با حضور قاضی و نمایندگان جدید</td>
                  <td className="p-3 text-amber-400">۲۰ روز پس از ابلاغ رأی هیئت بدوی</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-purple-400">مرحله ۴: شورای عالی مالیاتی / هیئت ۲۵۱ مکرر</td>
                  <td className="p-3">مواد ۲۵۱ و ۲۵۱ مکرر</td>
                  <td className="p-3">رسیدگی شکلی و ماهوی عالی در صورت ادعای بی‌عدالتی غیرقابل تجدیدنظر</td>
                  <td className="p-3 text-purple-400">مقررات خاص وزارت اقتصاد</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 3: Essential Documents for Tax Defense */}
        <div id="required-documents" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۳. مدارک و مستندات حیاتی برای پیوست به لایحه اعتراض مالیاتی
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#E5C158]/20 flex items-center justify-center text-xs">۱</span>
                <span>برگ تشخیص و گزارش مبنای ارزیابی (گزارش رسیدگی)</span>
              </h4>
              <p className="text-slate-400 leading-relaxed">
                اخذ و تحلیل ریز گزارش رسیدگی ممیز، مشخص کردن این‌که کدام بخش از درآمدها یا ضرایب سود علی‌الرأس مورد اعتراض است.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#E5C158]/20 flex items-center justify-center text-xs">۲</span>
                <span>فاکتورها و صورتحساب‌های رسمی و الکترونیک</span>
              </h4>
              <p className="text-slate-400 leading-relaxed">
                ارائه فاکتورهای خرید، رسیدهای پرداخت بانکی متصل به سامانه مؤدیان و اثبات بهای تمام‌شده کالای فروش‌رفته.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#E5C158]/20 flex items-center justify-center text-xs">۳</span>
                <span>مدارک هزینه‌های قابل قبول مالیاتی (مواد ۱۴۷ و ۱۴۸)</span>
              </h4>
              <p className="text-slate-400 leading-relaxed">
                اسناد بیمه کارکنان، اجاره‌نامه، قبوض تأسیسات و استهلاک تجهیزات که اثبات‌کننده هزینه‌های واقعی کسب‌وکار هستند.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#E5C158]/20 flex items-center justify-center text-xs">۴</span>
                <span>لایحه مدون دفاعیه با استناد به بخشنامه‌های سازمان</span>
              </h4>
              <p className="text-slate-400 leading-relaxed">
                نگارش متن فنی با جداول مقایسه‌ای مالی و استناد به بخشنامه‌های تسهیل‌کننده و آرای وحدت رویه شورای عالی مالیاتی.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Step-by-Step Procedure */}
        <div id="step-by-step-tax-objection" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۴. مراحل گام‌به‌گام ثبت اعتراض و دفاع در اداره امور مالیاتی
            </h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۱
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">ثبت الکترونیکی اعتراض در درگاه ملی خدمات مالیاتی (my.tax.gov.ir)</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  ورود به کارپوشه، ثبت اعتراض در پنجره ماده ۲۳۸ ظرف مهلت ۳۰ روزه و دریافت کد رهگیری رسمی اعتراض.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۲
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">جلسه مذاکره ماده ۲۳۸ و ارائه لایحه دفاعیه</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  حضور نزد مسئول امور مالیاتی ذی‌صلاح همراه با لایحه تدوین‌شده توسط متخصصان نگارش یار جهت تعدیل درآمد مشمول مالیات.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۳
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">ارجاع پرونده به هیئت حل اختلاف در صورت عدم توافق</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  اگر تعدیل مورد نظر حاصل نشود، پرونده به هیئت ماده ۲۴۴ ارجاع می‌شود و موعد رسیدگی با پیامک ابلاغ می‌گردد.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Common Mistakes in Tax Correspondence */}
        <div id="common-tax-mistakes" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۵. اشتباهات رایج مؤدیان که منجر به جریمه و قطعیت مالیات می‌شود
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-red-500/20 space-y-2">
              <h4 className="font-bold text-red-400">۱. از دست دادن مهلت ۳۰ روزه</h4>
              <p className="text-slate-400 leading-relaxed">
                مذاکرات شفاهی بدون ثبت مکتوب اعتراض در سیستم، باعث گذشت ۳۰ روز و قطعی شدن تمام مبالغ ناعادلانه می‌گردد.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-amber-500/20 space-y-2">
              <h4 className="font-bold text-amber-400">۲. اعتراض کلی بدون ارائه عدد و سند</h4>
              <p className="text-slate-400 leading-relaxed">
                نوشتن جملات کلی مثل «مالیات زیاد است و توان پرداخت ندارم» بدون پیوست مدارک خرید، فروش و استهلاک.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-blue-500/20 space-y-2">
              <h4 className="font-bold text-sky-400">۳. عدم درخواست بخشودگی جرایم ماده ۱۹۱</h4>
              <p className="text-slate-400 leading-relaxed">
                غفلت از درج بند تقاضای بخشودگی جرایم قابل بخشش در لایحه که می‌تواند تا ۱۰۰٪ جرایم را کاهش دهد.
              </p>
            </div>
          </div>
        </div>

        {/* Section 6: Practical Tax Checklist */}
        <div id="tax-checklist" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۶. چک‌لیست نهایی قبل از تسلیم لایحه اعتراض مالیاتی
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2 p-3 rounded-xl bg-[#070B15] border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>شماره و تاریخ دقیق ابلاغ برگ تشخیص کنترل شده است.</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-[#070B15] border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>ریز اقلام و درآمدهای مورد اختلاف محاسبه شده است.</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-[#070B15] border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>مدارک هزینه‌های قابل قبول مواد ۱۴۷ و ۱۴۸ ضمیمه شده است.</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-[#070B15] border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>تقاضای استفاده از تسهیلات ماده ۲۳۸ و بخشودگی جرایم ماده ۱۹۱ قید شده است.</span>
            </div>
          </div>
        </div>

        {/* Section 7: Three-Tier Conversion & Lawyer Referral */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#0C1222] via-[#0F172A] to-[#0C1222] border border-[#E5C158]/30 space-y-4">
          <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
            <Sparkles className="w-5 h-5" />
            <span>مسیرهای سه‌گانه حل اختلاف مالیاتی در نگارش یار</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-2 flex flex-col justify-between">
              <div className="space-y-1">
                <h4 className="font-bold text-white">۱. مطالعه الگوها و قوانین</h4>
                <p className="text-slate-400 leading-relaxed">
                  مشاهده نمونه متون لایحه اعتراض به برگ تشخیص و آشنایی با مواد قانون مالیات‌های مستقیم.
                </p>
              </div>
              <Link
                href="/samples/letter-to-tax-office"
                className="inline-flex items-center gap-1 text-[#E5C158] font-bold hover:underline pt-2 text-xs"
              >
                <span>مشاهده نمونه لایحه مالیاتی</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-4 rounded-xl bg-[#070B15] border border-[#E5C158]/40 space-y-2 flex flex-col justify-between">
              <div className="space-y-1">
                <h4 className="font-bold text-[#E5C158]">۲. تنظیم تخصصی لایحه دفاعیه</h4>
                <p className="text-slate-400 leading-relaxed">
                  تنظیم لایحه رسمی و مستدل مالیاتی بر اساس پرونده شما، آماده بارگذاری در سامانه امور مالیاتی.
                </p>
              </div>
              <Link
                href="/request?service=letter-to-tax-office"
                className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-[#E5C158] text-[#070B15] font-black hover:bg-[#d4b045] transition-colors text-xs"
              >
                <span>ثبت سفارش لایحه مالیاتی</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-2 flex flex-col justify-between">
              <div className="space-y-1">
                <h4 className="font-bold text-white">۳. ارجاع به وکیل و مشاور مالیاتی</h4>
                <p className="text-slate-400 leading-relaxed">
                  برای پرونده‌های سنگین شرکتی، تراکنش‌های بانکی مشکوک و هیئت‌های حل اختلاف تجدیدنظر و ۲۵۱ مکرر.
                </p>
              </div>
              <Link
                href="/request?service=letter-to-tax-office&mode=lawyer"
                className="inline-flex items-center gap-1 text-sky-400 font-bold hover:underline pt-2 text-xs"
              >
                <span>درخواست مشاوره وکیل مالیاتی</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
