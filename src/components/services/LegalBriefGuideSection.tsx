import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import {
  FileText,
  Clock,
  Scale,
  Layers,
  AlertTriangle,
  BookOpen,
  FolderLock,
  ShieldCheck,
  MessageSquareWarning,
  Coins,
  HeartHandshake,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export function LegalBriefGuideSection() {
  return (
    <section className="relative space-y-12">
      <Container>
        {/* Header Badge & Title */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold">
            <Sparkles className="w-4 h-4" />
            <span>راهنمای مرجع و استدلالی تنظیم لایحه دفاعیه</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            راهنمای جامع تنظیم لایحه دفاعیه دادگاه، دادسرا و مراجع قضایی
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            بررسی اصول بنیادین نگارش دفاعیات مستدل حقوقی و کیفری، نحوه پاسخ به ادعاهای طرف مقابل، استناد به آرای وحدت رویه و تشریفات ثبت در سامانه ثنا.
          </p>
        </div>

        {/* Section 1: What is a Legal Brief */}
        <div id="what-is-legal-brief" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۱. لایحه دفاعیه چیست و چرا تعیین‌کننده‌ترین سند پرونده است؟
            </h3>
          </div>
          
          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              در اصطلاح حقوقی و قضایی، <strong>«لایحه دفاعیه» (Legal Brief)</strong> نوشته‌ای رسمی، مستدل و ساختاریافته است که توسط یکی از طرفین دعوا (خواهان، خوانده، شاکی، متهم، وکیل یا نماینده قانونی) تنظیم شده و به منظور تبیین مواضع، رد ادعاهای طرف مقابل، ارائه ادله اثباتی و استناد به قوانین حاکم به مرجع قضایی (دادسرا، دادگاه بدوی، دادگاه تجدیدنظر، شورای حل اختلاف یا دیوان عالی کشور) تقدیم می‌گردد.
            </p>
            <p>
              در نظام دادرسی کنونی، به دلیل حجم بالای پرونده‌ها و محدودیت زمانی قضات در جلسات استماع حضوری، <strong>لایحه مکتوب اصلی‌ترین ابزار اقناع قاضی</strong> است. اظهارات شفاهی در دادگاه ممکن است به دلیل استرس، فراموشی یا عدم درج کامل در صورتجلسه نادیده گرفته شوند؛ اما لایحه دفاعیه که به صورت الکترونیک در سامانه ثنا (عدل ایران) ثبت می‌شود، سندی ماندگار و رسمی در پرونده است که قاضی هنگام انشای رأی، کلمه‌به‌کلمه آن را ملاک داوری قرار می‌دهد.
            </p>
            <div className="p-4 rounded-xl bg-[#070B15] border border-amber-500/20 text-amber-200 text-xs sm:text-sm leading-relaxed">
              <strong>نکته بنیادین:</strong> لایحه دفاعیه صرفاً یک نامه ساده نیست؛ بلکه ترکیب هماهنگی از <strong>شرح وقایع مستند</strong>، <strong>ایرادات شکلی و آیین دادرسی</strong>، <strong>دفاعیات ماهوی</strong> و <strong>استناد به مواد قانونی و آرای وحدت رویه</strong> است.
            </div>
          </div>
        </div>

        {/* Section 2: When to submit */}
        <div id="when-to-submit" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۲. چه زمانی باید لایحه دفاعیه ارائه شود؟
            </h3>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            زمان‌بندی ارائه لایحه نقشی حیاتی در اثرگذاری آن بر ذهن قاضی دارد. مهم‌ترین موعدهای ارائه لایحه دفاعیه عبارتند از:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <h4>۲۴ الی ۴۸ ساعت پیش از جلسه دادگاه</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                ایده‌آل‌ترین زمان ممکن؛ ثبت لایحه در ثنا قبل از جلسه به قاضی فرصت می‌دهد پیش از شروع جلسه دادگاه، مستندات و دفاعیات شما را با آرامش مطالعه کند.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <h4>در جریان جلسه رسیدگی حضوری</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                چنانچه امکان ثبت در ثنا قبل از جلسه فراهم نشد، می‌توانید نسخه چاپی لایحه را شخصاً در جلسه به قاضی تسلیم نموده و از وی بخواهید در صورتجلسه قید نماید.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <h4>پس از جلسه (مهلت اخذ لایحه تکمیلی)</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                در صورتی که طرف مقابل در جلسه مدارک جدیدی ارائه دهد، می‌توانید از قاضی مهلت چند روزه (مثلاً ۳ یا ۵ روز) برای تقدیم لایحه تکمیلی و جوابیه تقاضا کنید.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <h4>همراه با دادخواست تجدیدنظر یا واخواهی</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                هنگام اعتراض به رأی دادگاه بدوی ظرف مهلت ۲۰ روزه، لایحه تجدیدنظرخواهی حاوی نقد فنی رأی صادره و استناد به جهات نقض به دادگاه استان ارسال می‌شود.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Civil vs Criminal Briefs */}
        <div id="civil-vs-criminal" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۳. تفاوت اساسی لایحه دفاعیه حقوقی و لایحه دفاعیه کیفری
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-[#E5C158] font-bold">
                  <th className="p-3">شاخص مقایسه</th>
                  <th className="p-3">لایحه دفاعیه حقوقی (مدنی / خانواده / ملکی)</th>
                  <th className="p-3">لایحه دفاعیه کیفری (دادسرا / دادگاه کیفری)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr>
                  <td className="p-3 font-bold text-white">مرجع مخاطب</td>
                  <td className="p-3">شعب دادگاه عمومی حقوقی، دادگاه خانواده و شورای حل اختلاف</td>
                  <td className="p-3">شعب دادیاری، بازپرسی، دادگاه کیفری ۲، کیفری ۱ و انقلاب</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-white">محور اصلی دفاع</td>
                  <td className="p-3">تفسیر قراردادها، شرایط تعهد، اسناد مالی، حق حبس، تهاتر و مقررات قانون مدنی</td>
                  <td className="p-3">نفی عناصر متشکله جرم (مادی، روانی و قانونی)، اثبات فقدان سوءنیت و استناد به اصل برائت</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-white">بار اثبات دعوا</td>
                  <td className="p-3">بر عهده مدعی (خواهان) بر اساس ماده ۱۲۵۷ قانون مدنی</td>
                  <td className="p-3">بر عهده شاکی و دادسرا بر اساس ماده ۴ قانون آیین دادرسی کیفری</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-white">پیامد و ضمانت‌اجرا</td>
                  <td className="p-3">محکومیت مالی، الزام به انجام تعهد، بطلان معامله، تخلیه ملک یا پرداخت مهریه</td>
                  <td className="p-3">مجازات‌های حبس، جزای نقدی، دیه، رد مال، شلاق و محرومیت‌های اجتماعی</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 4: Core Components of a Brief */}
        <div id="components-of-brief" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۴. اجزای اصلی و ساختار یک لایحه دفاعیه حرفه‌ای
            </h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۱
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">سربرگ و مشخصات کلاسه پرونده و شعبه</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  درج نام مرجع قضایی (مثلاً ریاست و مستشاران محترم دادگاه تجدیدنظر استان)، شماره کلاسه پرونده، شماره بایگانی شعبه و مشخصات دقیق موکل/طرفین.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۲
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">ایرادات شکلی اولیه (در صورت وجود)</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  بررسی ایراد عدم صلاحیت ذاتی یا محلی دادگاه، ایراد مرور زمان، عدم اهلیت خواهان یا اعتبار امر قضاوت‌شده (موضوع ماده ۸۴ قانون آیین دادرسی مدنی).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۳
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">شرح موجز و واقعی ماوقع با رعایت تقدم تاریخی</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  بیان وقایع پرونده به زبان منطقی و محترمانه بر اساس تاریخ‌ها و رخدادهای مستند، بدون گزافه‌گویی و حاشیه‌پردازی‌های بی‌مورد.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۴
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">دفاعیات ماهوی و استناد صریح به مواد قانونی و وحدت رویه</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  پاسخ بندبه‌بند به ادعاهای طرف مقابل، نقد ادله ابرازی وی و انطباق دفاعیات با مواد قانون مدنی، مجازات اسلامی و آرای وحدت رویه دیوان عالی کشور.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۵
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">نتیجه‌گیری شفاف و بیان دقیق خواسته نهایی</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  تقاضای مشخص از دادگاه (مانند صدور حکم بر بی‌حقی خواهان، صدور قرار منع تعقیب متهم، برائت یا نقض دادنامه بدوی و ارجاع به کارشناسی).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Common Mistakes */}
        <div id="common-mistakes" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۵. اشتباهات رایج و مهلک در تنظیم لایحه دفاعیه
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-red-400">۱. اقرار ناخواسته به ضرر خود</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                استفاده از عبارات مبهم که قاضی یا طرف مقابل آن را به عنوان قبول بدهی، دریافت مال یا پذیرش تقصیر تلقی کنند. اقرار در دادگاه قاطع دعواست و قابل پس گرفتن نیست.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-red-400">۲. نگارش احساسی و توهین به طرف مقابل</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                دادگاه مرجع بررسی اسناد حقوقی است نه تسویه‌حساب شخصی. توهین و افترا در لایحه می‌تواند به تشکیل پرونده کیفری جدید علیه نویسنده لایحه منجر شود.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-red-400">۳. اطاله کلام و نگارش متن‌های طولانی و مبهم</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                لوایح طولانی چند ده صفحه‌ای بدون دسته‌بندی و تیتربندی موجب خستگی ذهن قاضی و نادیده ماندن نکات کلیدی پرونده می‌گردد.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-red-400">۴. کپی ناشیانه از نمونه‌های اینترنتی</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                هر پرونده شرایط منحصربه‌فرد، اسناد و تاریخ‌های متفاوتی دارد. استفاده از لوایح آماده اینترنتی ریسک خطای شدید و رد استدلال در دادگاه را بالا می‌برد.
              </p>
            </div>
          </div>
        </div>

        {/* Section 6: Legal Citations & Precedents */}
        <div id="legal-citations" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۶. اهمیت استناد قانونی، دکترین حقوقی و آرای وحدت رویه
            </h3>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              یک لایحه زمانی نزد قاضی پرونده از وزن بالا برخوردار است که هر ادعا یا دفاعی، مستند به ماده قانونی صریح، نظریه مشورتی اداره حقوقی قوه قضائیه یا <strong>رأی وحدت رویه دیوان عالی کشور</strong> باشد. طبق اصل ۱۶۶ قانون اساسی جمهوری اسلامی ایران، احکام دادگاه‌ها باید مستدل و مستند به قوانین و اصولی باشد که بر اساس آن حکم صادر شده است.
            </p>
            <p>
              هنگامی که شما در لایحه دفاعیه خود دقیقاً به شماره ماده قانون، بندهای آیین‌نامه‌ای مرتبط و آرای لازم‌الاتباع دیوان عالی استناد می‌کنید، قاضی شعبه را در چارچوب قانونی قرار می‌دهید و مسیر صدور رأی عادلانه را هموار می‌سازید. کارشناسان نگارش یار در تنظیم لوایح، تمام استنادات را متناسب با آخرین اصلاحات قوانین و رویه قضایی جاری اعمال می‌نمایند.
            </p>
          </div>
        </div>

        {/* Section 7: Common Topics & Examples */}
        <div id="common-topics" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۷. موضوعات رایج لایحه دفاعیه در دادگاه‌ها و مراجع قضایی
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Topic 1: Breach of Trust */}
            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <FolderLock className="w-4 h-4" />
                <h4>لایحه خیانت در امانت (ماده ۶۷۴)</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                اثبات فقدان رابطه امانی، عدم سوءنیت متهم، اثبات اختلاف حساب مالی حقوقی به جای رفتار مجرمانه و اثبات عدم تصاحب، استعمال یا اتلاف مال موضوع شکایت.
              </p>
            </div>

            {/* Topic 2: Fraud */}
            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <h4>لایحه کلاهبرداری و تحصیل نامشروع</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                رد ادعای مانور متقلبانه، اثبات تجاری یا مدنی بودن معامله و عدم انطباق موضوع با ماده ۱ قانون تشدید مجازات مرتکبین ارتشاء، اختلاس و کلاهبرداری.
              </p>
            </div>

            {/* Topic 3: Threats & Defamation */}
            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <MessageSquareWarning className="w-4 h-4" />
                <h4>لایحه تهدید، توهین و نشر اکاذیب</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                دفاع در برابر اسکرین‌شات‌ها و ادعاهای پیامکی، اثبات عدم احراز شرایط تهدید مؤثر، نفی انتساب فعل مجرمانه و بررسی ادله قانونی اثبات دعوا.
              </p>
            </div>

            {/* Topic 4: Financial & Commercial */}
            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <Coins className="w-4 h-4" />
                <h4>لایحه دعاوی مالی، چک و تعهدات</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                دفاع در برابر دعوای مطالبه وجه، اثبات پرداخت قبلی (ایفای تعهد)، اثبات امانی بودن یا تضمینی بودن چک صیادی و ادعای تهاتر یا بطلان معامله پایه.
              </p>
            </div>

            {/* Topic 5: Family Disputes */}
            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <HeartHandshake className="w-4 h-4" />
                <h4>لایحه دعاوی خانواده (مهریه و تمکین)</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                تنظیم دفاعیات پرونده تمکین زوجه (اثبات تهیه مسکن مستقل یا اثبات خوف ضرر بدنی)، تقسیط مهریه، نفقه گذشته، اجرت‌المثل و حضانت فرزند.
              </p>
            </div>

            {/* Topic 6: Real Estate & Contracts */}
            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <FileText className="w-4 h-4" />
                <h4>لایحه دعاوی ملکی و سرقفلی</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                دفاع در دعاوی الزام به تنظیم سند رسمی، فسخ قرارداد بیع، تخلیه ید، خلع ید، تصرف عدوانی، مطالبه خسارت تأخیر تأدیه و اجرت‌المثل ایام تصرف.
              </p>
            </div>
          </div>
        </div>

        {/* Clear Boundary Notice: Information vs Service vs Lawyer */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#0C1222] via-[#0F172A] to-[#0C1222] border border-[#E5C158]/30 space-y-4">
          <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
            <CheckCircle2 className="w-5 h-5" />
            <span>تفکیک شفاف مسئولیت‌ها و خدمات در نگارش یار</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-1">
              <h4 className="font-bold text-white">۱. آموزش و محتوای حقوقی</h4>
              <p className="text-slate-400">
                این راهنما با هدف ارتقای دانش حقوقی و شفاف‌سازی نحوه دفاع در محاکم قضایی مطابق قوانین کشور تدوین شده است.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-1">
              <h4 className="font-bold text-[#E5C158]">۲. خدمت تنظیم لایحه تخصصی</h4>
              <p className="text-slate-400">
                کارشناسان نگارش یار متن لایحه دفاعیه شما را بر اساس اسناد اختصاصی پرونده، قوانین موضوعه و فرمت استاندارد ثنا تنظیم می‌کنند.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-1">
              <h4 className="font-bold text-sky-400">۳. معرفی وکیل منصف</h4>
              <p className="text-slate-400">
                در صورتی که پرونده شما نیازمند حضور فیزیکی وکیل در جلسات دادگاه و پیگیری اجرایی است، صفحه <Link href="/lawyer-referral" className="text-[#E5C158] underline font-bold">معرفی وکیل منصف</Link> را ببینید.
              </p>
            </div>
          </div>
        </div>

        {/* Action Conversion Box */}
        <div className="bg-gradient-to-r from-[#111827] via-[#0D1424] to-[#111827] border-2 border-[#E5C158]/50 rounded-3xl p-6 sm:p-8 text-center space-y-4 shadow-xl shadow-[#E5C158]/10">
          <h3 className="text-xl sm:text-2xl font-black text-white">
            جلسه دادگاه در پیش دارید و نیاز به لایحه دفاعیه قوی دارید؟
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            اجازه ندهید حق قانونی‌تان به خاطر عدم تسلط بر زبان قضایی تضییع شود. لایحه دفاعیه اختصاصی پرونده خود را با استناد به آخرین قوانین و آرای قضایی دریافت کنید.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/request?service=legal-brief"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#070B15] font-black text-sm shadow-lg shadow-[#E5C158]/20 hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <span>تنظیم لایحه دفاعیه متناسب با پرونده شما</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <Link
              href="/samples/legal-brief"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-bold text-xs sm:text-sm hover:text-white transition-colors"
            >
              مشاهده نمونه لوایح دفاعیه
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
