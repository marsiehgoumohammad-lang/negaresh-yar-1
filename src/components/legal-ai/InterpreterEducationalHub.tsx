import React from 'react';
import Link from 'next/link';
import { BookOpen, Scale, AlertTriangle, CheckCircle2, Clock, ShieldAlert, ArrowLeft } from 'lucide-react';

export function InterpreterEducationalHub() {
  return (
    <section className="py-12 border-b border-slate-800/80 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-right space-y-3 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>آموزش جامع حقوقی</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
            تفسیر رای دادگاه به زبان ساده و راهنمای کامل خواندن دادنامه
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            دریافت برگه‌های قضایی برای اکثر افراد جامعه همراه با اضطراب و سردرگمی است. ادبیات پیچیده حقوقی، استفاده از کلمات عربی سنگین و ساختار رسمی دادنامه‌ها باعث می‌شود بسیاری از شهروندان نتوانند مفاد اصلی رای دادگاه یا ابلاغیه ثنا را به‌درستی درک کنند.
          </p>
        </div>

        {/* Detailed Crawlable Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Educational Articles - Column 1 & 2 */}
          <div className="lg:col-span-2 space-y-8 text-right">
            {/* Article 1: What is a verdict / dadnameh? */}
            <article className="p-6 sm:p-8 rounded-2xl bg-[#0D1424] border border-slate-800 space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-[#E5C158] flex items-center gap-2">
                <Scale className="w-5 h-5 text-[#E5C158]" />
                <span>رای دادگاه و دادنامه چیست؟</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-loose">
                هنگامی که پرونده‌ای در دادگاه بدوی یا تجدیدنظر رسیدگی می‌شود، قاضی پرونده پس از استماع دفاعیات طرفین و بررسی دلایل، تصمیم نهایی خود را صادر می‌کند. به این تصمیم «رای» گفته می‌شود. اگر رای مربوط به اصل دعوا باشد و پرونده را در آن مرحله تمام کند، «حکم» و اگر در جریان رسیدگی باشد یا مربوط به مسائل شکلی باشد، «قرار» نام دارد.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-loose">
                «دادنامه» در واقع پاک‌نویس رسمی رای قاضی است که دارای شماره دادنامه، تاریخ صدور، مشخصات شعبه دادگاه، مشخصات کامل خواهان (یا شاکی) و خوانده (یا متهم)، خلاصه گردش‌کار و متن نهایی رای می‌باشد.
              </p>
            </article>

            {/* Article 2: How to identify winner/loser and key terms */}
            <article className="p-6 sm:p-8 rounded-2xl bg-[#0D1424] border border-slate-800 space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-[#E5C158] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#E5C158]" />
                <span>چگونه برنده پرونده را در رای دادگاه تشخیص دهیم؟</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-loose">
                برای فهم اینکه رای دادگاه به نفع شما صادر شده یا به ضررتان، باید به قسمت انتهایی دادنامه (بخش «رای دادگاه» یا «منطق‌المحکوم») توجه کنید. کلمات کلیدی زیر نقش تعیین‌کننده دارند:
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 pr-4 list-disc marker:text-[#E5C158]">
                <li>
                  <strong className="text-white font-bold">محکوم‌له:</strong> شخصی که رای دادگاه به نفع او صادر شده است (کسی که دادگاه ادعایش را پذیرفته).
                </li>
                <li>
                  <strong className="text-white font-bold">محکوم‌علیه:</strong> شخصی که رای دادگاه به ضرر او صادر شده و باید ملزم به انجام کاری، پرداخت وجه یا تحمل مجازات شود.
                </li>
                <li>
                  <strong className="text-white font-bold">حکم به رد دعوا یا بطلان دعوا:</strong> یعنی دادگاه ادعای شاکی یا خواهان را نپذیرفته و پرونده به نفع خوانده تمام شده است.
                </li>
                <li>
                  <strong className="text-white font-bold">حکم به محکومیت خوانده:</strong> یعنی دادگاه ادعای خواهان را وارد دانسته و خوانده را محکوم کرده است.
                </li>
              </ul>
            </article>

            {/* Article 3: Calculation of Objections & Deadlines */}
            <article className="p-6 sm:p-8 rounded-2xl bg-[#0D1424] border border-slate-800 space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-[#E5C158] flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#E5C158]" />
                <span>مهلت اعتراض به رای دادگاه از چه زمانی آغاز می‌شود؟</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-loose">
                مهلت‌های قانون آیین دادرسی مدنی و کیفری بسیار حیاتی هستند. از دست دادن مهلت قانونی می‌تواند باعث قطعی شدن رای دادگاه و سلب امکان اعتراض گردد.
              </p>

              <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#F3E0A2]">
                  <AlertTriangle className="w-4 h-4 text-[#E5C158]" />
                  <span>اصل مهلت ۲۰ روزه تجدیدنظرخواهی و واخواهی</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  مهلت اعتراض به آراء قابل تجدیدنظر یا واخواهی برای اشخاص مقیم ایران <strong className="text-white font-bold">۲۰ روز</strong> و برای اشخاص مقیم خارج از کشور <strong className="text-white font-bold">۲ ماه</strong> است. مبنای محاسبه، تاریخ «ابلاغ واقعی» یا ثبت در حساب کاربری سامانه ثنا می‌باشد.
                </p>
              </div>

              <p className="text-[11px] text-slate-400 leading-relaxed italic">
                * نکته بسیار مهم: مهلت‌های دقیق بسته به نوع مرجع (دادسرا، دادگاه بدوی، دادگاه تجدیدنظر، شورای حل اختلاف)، نوع ابلاغ (واقعی یا قانونی) و موضوع پرونده تفاوت دارد و باید حتماً بر اساس تاریخ ثبت در ثنا و قوانین مربوطه تطبیق داده شود.
              </p>
            </article>
          </div>

          {/* High Intent Search Clusters Box - Column 3 */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-[#0D1424] border border-[#E5C158]/30 space-y-4">
              <h3 className="text-sm font-extrabold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                <ShieldAlert className="w-4 h-4 text-[#E5C158]" />
                <span>موضوعات پرجستجوی تحلیل دادنامه</span>
              </h3>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-[#070B15] border border-slate-800 space-y-1">
                  <h4 className="font-bold text-white text-xs">تفسیر ابلاغیه ثنا</h4>
                  <p className="text-[11px] text-slate-400">
                    آگاهی از تاریخ ابلاغیه، علت احضار و مهلت‌های درج‌شده در سامانه عدل ایران.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#070B15] border border-slate-800 space-y-1">
                  <h4 className="font-bold text-white text-xs">تفسیر قرار منع تعقیب دادسرا</h4>
                  <p className="text-[11px] text-slate-400">
                    تحلیل عدم انتساب جرم به متهم و مهلت ۱۰ روزه اعتراض شاکی در دادگاه کیفری دو.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#070B15] border border-slate-800 space-y-1">
                  <h4 className="font-bold text-white text-xs">تفسیر حکم غیابی و واخواهی</h4>
                  <p className="text-[11px] text-slate-400">
                    بررسی آراء غیابی حقوقی و کیفری و ثبت دادخواست واخواهی جهت توقف اجرای حکم.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#070B15] border border-slate-800 space-y-1">
                  <h4 className="font-bold text-white text-xs">تفسیر اجرائیه و جلب</h4>
                  <p className="text-[11px] text-slate-400">
                    محاسبه مهلت ۱۰ روزه اجرائیه، درخواست اعسار از محکوم‌به و تقسیط بدهی.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/knowledge"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <span>ورود به پایگاه دانش حقوقی</span>
                  <ArrowLeft className="w-3.5 h-3.5 text-[#E5C158]" />
                </Link>
              </div>
            </div>

            {/* Quick Action Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#111A2E] to-[#0D1424] border border-[#E5C158]/40 text-right space-y-3">
              <h4 className="text-xs font-extrabold text-[#F3E0A2]">
                نیاز به تنظیم لایحه یا دادخواست اعتراض دارید؟
              </h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                پس از دریافت تفسیر رای، می‌توانید تنظیم لایحه تجدیدنظر، واخواهی یا اعتراض را به متخصصین نگارش یار بسپارید.
              </p>
              <Link
                href="/request"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E5C158] hover:underline"
              >
                <span>ثبت سریع سفارش نگارش سند</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
