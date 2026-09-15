import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import {
  FileText,
  AlertCircle,
  Sparkles,
  ArrowLeft,
  Compass,
  FileCheck,
} from 'lucide-react';

export function LeaderOfficeLetterGuideSection() {
  return (
    <section className="relative space-y-12">
      <Container>
        {/* Header Badge & Title */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold">
            <Sparkles className="w-4 h-4" />
            <span>راهنمای نگارش عریضه رسمی به دفتر مقام معظم رهبری و پیگیری در بخش ارتباطات مردمی</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            راهنمای عریضه‌نویسی به دفتر رهبری، شرایط پذیرش درخواست‌های حمایتی، عفو و گزارش‌ها
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            بررسی اختیارات قانونی ولایت فقیه، سازوکار مکاتبات دفتر ارتباطات مردمی، کمیسیون عفو و بخشودگی (بند ۱۱ اصل ۱۱۰)، استفتائات و کمک‌های اضطراری بیت رهبری.
          </p>
        </div>

        {/* Section 1: Nature and Role of Leader's Office Correspondence */}
        <div id="what-is-leader-letter" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۱. عریضه به دفتر مقام معظم رهبری چیست و چه موضوعاتی را پوشش می‌دهد؟
            </h3>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              دفتر مقام معظم رهبری به عنوان عالی‌ترین مرجع حاکمیتی کشور، دارای بخشی ویژه تحت عنوان <strong>«معاونت ارتباطات مردمی»</strong> است که وظیفه دریافت، دسته‌بندی و پیگیری گزارش‌ها، شکایات مردمی از عملکرد دستگاه‌های حاکمیتی، تقاضای عفو و تخفیف مجازات، استمدادهای معیشتی و سوالات شرعی را بر عهده دارد.
            </p>
            <p>
              نامه‌های ارسالی پس از کدگذاری، حسب موضوع به یکی از بخش‌های تخصصی (از قبیل کمیسیون عفو و بخشودگی قوه قضاییه، نهادهای حمایتی مانند بنیاد برکت، بنیاد مستضعفان، کمیته امداد، ستاد کل نیروهای مسلح یا دفتر بازرسی رهبری) ارجاع و پیگیری می‌شوند.
            </p>
            <div className="p-4 rounded-xl bg-[#070B15] border border-amber-500/20 text-amber-200 text-xs sm:text-sm leading-relaxed">
              <strong>تقاضای عفو محکومان (بند ۱۱ اصل ۱۱۰ قانون اساسی):</strong> یکی از مهم‌ترین صلاحیت‌های خاص رهبری، عفو یا تخفیف مجازات محکومان در حدود موازین اسلامی پس از پیشنهاد رئیس قوه قضاییه است. عریضه‌های مربوط به عفو زندانیان دارای شرایط خاص شکلی و سوابق رفتاری در زندان هستند که باید با استناد دقیق تدوین شوند.
            </div>
          </div>
        </div>

        {/* Section 2: Channels of Submission */}
        <div id="submission-channels" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۲. کانال‌های رسمی ارسال نامه به دفتر مقام معظم رهبری
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#E5C158]/20 flex items-center justify-center text-xs">۱</span>
                <span>پورتال رسمی leader.ir</span>
              </h4>
              <p className="text-slate-400 leading-relaxed">
                ارسال درخواست از بخش ارتباطات مردمی پایگاه اطلاع‌رسانی دفتر مقام معظم رهبری با دریافت کد پیگیری اختصاصی.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#E5C158]/20 flex items-center justify-center text-xs">۲</span>
                <span>ارسال پستی به صندوق پستی دفتر رهبری</span>
              </h4>
              <p className="text-slate-400 leading-relaxed">
                ارسال پستی به نشانی: تهران، خیابان فلسطین جنوبی، دفتر مقام معظم رهبری، صندوق پستی ۱۳۱۴۵-۴۳۱۵ همراه با نسخه فیزیکی مدارک.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#E5C158]/20 flex items-center justify-center text-xs">۳</span>
                <span>دفاتر نمایندگی ولی فقیه و ائمه جمعه در استان‌ها</span>
              </h4>
              <p className="text-slate-400 leading-relaxed">
                تحویل حضوری عریضه به دبیرخانه دفتر نماینده ولی فقیه در مراکز استان‌ها جهت ارجاع مستقیم به دفتر مرکزی.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Essential Requirements & Respectful Tone */}
        <div id="required-tone-and-data" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۳. الزامات متنی و مدارک ضروری در عریضه به رهبری
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158]">رعایت القاب رسمی و لحن تواضع و احترام</h4>
              <p className="text-slate-400 leading-relaxed">
                استفاده از عباراتی نظیر «محضر مبارک رهبر معظم انقلاب اسلامی، حضرت آیت‌الله العظمی خامنه‌ای (مدظله‌العالی)» در صدر نامه.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158]">مستندات پرونده کیفری (در تقاضای عفو و بخشودگی)</h4>
              <p className="text-slate-400 leading-relaxed">
                تصویر دادنامه قطعی، گواهی حسن رفتار از زندان، سابقه حبس تحمل‌شده و اعلام رضایت شاکی خصوصی (در صورت وجود).
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158]">مدارک ایثارگری و سوابق حضور در جبهه</h4>
              <p className="text-slate-400 leading-relaxed">
                در صورتی که متقاضی یا خانواده ایشان از جامعه ایثارگران، شهدا، جانبازان یا آزادگان هستند، پیوست کارت ایثارگری دارای اولویت رسیدگی است.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158]">بیان موجز و پرهیز از اطاله کلام</h4>
              <p className="text-slate-400 leading-relaxed">
                متن نامه ترجیحاً نباید از یک صفحه فراتر رود؛ تشریح مختصر وضعیت، علت استمداد و بیان تقاضای مشخص.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Common Mistakes */}
        <div id="common-mistakes-leader" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۴. اشتباهات رایج در نامه‌نگاری با دفتر رهبری
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-red-500/20 space-y-2">
              <h4 className="font-bold text-red-400">۱. تقاضای عفو قبل از قطعیت حکم</h4>
              <p className="text-slate-400 leading-relaxed">
                کمیسیون عفو تنها به احکام قطعی دادگاه‌ها رسیدگی می‌کند؛ ارسال درخواست حین تحقیقات مقدماتی یا مرحله تجدیدنظر بی‌اثر است.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-amber-500/20 space-y-2">
              <h4 className="font-bold text-amber-400">۲. فقدان آدرس یا مشخصات هویتی</h4>
              <p className="text-slate-400 leading-relaxed">
                نامه‌های ناشناس یا فاقد کدملی و شماره تماس معتبر به هیچ وجه مورد بررسی و ارجاع قرار نخواهند گرفت.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-blue-500/20 space-y-2">
              <h4 className="font-bold text-sky-400">۳. تقاضای تغییر قوانین مصوب مجلس</h4>
              <p className="text-slate-400 leading-relaxed">
                درخواست اصلاح قوانین عمومی کشور باید از طریق نمایندگان مجلس یا لوایح دولت پیگیری شود نه عریضه‌های فردی.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5: Conversion Modules */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#0C1222] via-[#0F172A] to-[#0C1222] border border-[#E5C158]/30 space-y-4">
          <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
            <Sparkles className="w-5 h-5" />
            <span>خدمات و الگوهای عریضه‌نویسی به دفتر مقام معظم رهبری در نگارش یار</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-2 flex flex-col justify-between">
              <div className="space-y-1">
                <h4 className="font-bold text-white">مشاهده و کپی رایگان نمونه عریضه</h4>
                <p className="text-slate-400 leading-relaxed">
                  الگوی آماده و متن استاندارد درخواست استمداد، کمک‌هزینه و عریضه به دفتر رهبری.
                </p>
              </div>
              <Link
                href="/samples/leader-office-letter"
                className="inline-flex items-center gap-1 text-[#E5C158] font-bold hover:underline pt-2 text-xs"
              >
                <span>مشاهده نمونه نامه به دفتر رهبری</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-4 rounded-xl bg-[#070B15] border border-[#E5C158]/40 space-y-2 flex flex-col justify-between">
              <div className="space-y-1">
                <h4 className="font-bold text-[#E5C158]">تنظیم تخصصی عریضه توسط کارشناس</h4>
                <p className="text-slate-400 leading-relaxed">
                  تدوین ساختاریافته عریضه شما با رعایت پروتکل‌های تشریفاتی و ادبیات فاخر مکتوب در فایل Word و PDF.
                </p>
              </div>
              <Link
                href="/request?service=leader-office-letter"
                className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-[#E5C158] text-[#070B15] font-black hover:bg-[#d4b045] transition-colors text-xs"
              >
                <span>سفارش تنظیم عریضه دفتر رهبری</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
