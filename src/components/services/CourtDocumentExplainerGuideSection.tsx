import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import {
  Scale,
  Layers,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Gavel,
  ShieldCheck,
  Clock,
  FileText,
  AlertTriangle,
  BookOpen,
  Send,
  Check,
  Brain,
  FileSearch,
  Compass,
} from 'lucide-react';

export function CourtDocumentExplainerGuideSection() {
  return (
    <section className="relative space-y-12">
      <Container>
        {/* Header Badge & Title */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold">
            <Sparkles className="w-4 h-4" />
            <span>راهنمای جامع تحلیل اوراق قضایی، ابلاغیه‌های ثنا و آراء دادگاه</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            راهنمای کامل تفسیر رأی دادگاه، تفاوت قرار و دادنامه و خواندن ابلاغیه ثنا
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            بررسی اصطلاحات دشوار دادنامه، قرارهای دادسرا، مواعد قانونی اعتراض، محاسبه دقیق مهلت‌های ۲۰ روزه و راهنمای گام‌به‌گام اقدامات پس از دریافت پیامک سامانه ابلاغ قضایی.
          </p>
        </div>

        {/* Section 1: What is Court Verdict & Why understanding matters */}
        <div id="what-is-verdict" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Gavel className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۱. رأی دادگاه چیست و چرا فهم دقیق و سریع آن حیاتی است؟
            </h3>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              <strong>رأی دادگاه</strong> تصمیم رسمی، کتبی و الزام‌آور قاضی شعبه در خصوص دعوای حقوقی یا پرونده کیفری مطروحه است. آراء دادگاه‌ها به دو دسته کلی <strong>«حکم»</strong> (تصمیم قاطع ماهوی درباره اصل دعوا) و <strong>«قرار»</strong> (تصمیمات شکلی یا موقتی در جریان دادرسی) تقسیم می‌شوند.
            </p>
            <p>
              متاسفانه متن دادنامه‌ها و قرارهای قضایی با ادبیات فقهی، نگارش حقوقی فشرده و ارجاع به مواد قانونی متعدد تنظیم می‌شوند. کوچک‌ترین سوءبرداشت از کلماتی نظیر «رد دعوا»، «عدم استماع»، «بی‌حقی خواهان»، «برائت متهم» یا «اسقاط حق تجدیدنظرخواهی» می‌تواند شما را به اشتباه انداخته و باعث <strong>انقضای مهلت‌های قانونی اعتراض</strong> و ورود ضرر مالی یا محکومیت سنگین جبران‌ناپذیر گردد.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                  <Clock className="w-4 h-4" />
                  <h4>کنترل مهلت‌های حیاتی اعتراض</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  مهلت واخواهی (۲۰ روز)، تجدیدنظرخواهی (۲۰ روز) و اعتراض به قرار دادسرا (۱۰ روز) غیرقابل تمدید است و عدم اقدام در مهلت، رأی را قطعی می‌کند.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <h4>شناسایی برنده و بازنده واقعی پرونده</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  گاهی رأی در ظاهر به نفع شماست اما به دلیل پذیرش بخشی از خواسته یا مشروط شدن به خسارت، نیازمند دفاع متقابل است.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                  <Compass className="w-4 h-4" />
                  <h4>تعیین فوری گام بعدی (Action Plan)</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  فهمیدن اینکه اکنون باید لایحه تجدیدنظر بنویسید، دادخواست را مجدداً اصلاح و ثبت کنید یا برای اجرای احکام آماده شوید.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Difference between Dadnameh, Gharar, Eblaghieh, Ekhtariyeh */}
        <div id="document-types" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۲. تفاوت اساسی دادنامه، قرار، ابلاغیه و اخطاریه
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <FileText className="w-5 h-5" />
                <h4>دادنامه (حکم دادگاه)</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                سند رسمی ممهور دادگاه که نتیجه نهایی و ماهوی رسیدگی به دعوا را مشخص می‌کند (مانند حکم به پرداخت بدهی، حکم محکومیت به حبس، حکم به الزام به تنظیم سند رسمی یا حکم بطلان دعوا).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
                <Gavel className="w-5 h-5" />
                <h4>قرار قضایی (دادسرا یا دادگاه)</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                تصمیمی که قاطع اصل دعوا نیست یا جنبه شکلی و مقدماتی دارد؛ مانند <strong>قرار منع تعقیب</strong>، <strong>قرار جلب به دادرسی</strong>، <strong>قرار رد دعوا</strong>، <strong>قرار عدم استماع</strong>، <strong>قرار ارجاع به کارشناسی</strong> یا <strong>قرار تأمین خواسته</strong>.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <Send className="w-5 h-5" />
                <h4>ابلاغیه الکترونیک (سامانه ثنا)</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                برگه رسمی الکترونیکی ارسالی در سامانه عدل ایران (ثنا) که وقوع یک رویداد قضایی، ارسال دادنامه، وقت حضور در دادگاه یا مهلت ارسال لایحه را به اطلاع اصحاب دعوا می‌رساند.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <AlertTriangle className="w-5 h-5" />
                <h4>اخطاریه / احضاریه قضایی</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                دستور قضایی الزام‌آور جهت انجام یک کار ظرف مهلت معین؛ مانند اخطار رفع نقص دادخواست، اخطار پرداخت هزینه کارشناسی، یا احضار متهم/شاهد به شعبه بازپرسی.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Common Legal Terms Explained */}
        <div id="legal-terms" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۳. پرکاربردترین اصطلاحات در آراء دادگاه و معنی ساده آنها
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-1.5">
              <div className="font-bold text-[#E5C158]">قرار منع تعقیب</div>
              <p className="text-slate-400 leading-relaxed">
                دادسرا به دلیل نبود دلیل کافی یا جرم نبودن عمل، متهم را بی‌گناه دانسته و پرونده را مختومه کرده است (شاکی ۱۰ روز فرصت اعتراض دارد).
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-1.5">
              <div className="font-bold text-[#E5C158]">قرار جلب به دادرسی</div>
              <p className="text-slate-400 leading-relaxed">
                بازپرس دلایل جرم را کافی دانسته و متهم را مجرم تشخیص داده و پرونده را با کیفرخواست برای محاکمه به دادگاه کیفری می‌فرستد.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-1.5">
              <div className="font-bold text-[#E5C158]">قرار رد دعوا / عدم استماع</div>
              <p className="text-slate-400 leading-relaxed">
                دعوا به دلیل ایراد شکلی (مانند طرح پیش از موعد، عدم داشتن سمت قانونی یا عدم رعایت تشریفات) رد شده و قاضی وارد ماهیت نشده است.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-1.5">
              <div className="font-bold text-[#E5C158]">حکم بی‌حقی خواهان</div>
              <p className="text-slate-400 leading-relaxed">
                دادگاه ادعای خواهان را بررسی کرده و تشخیص داده که خواهان هیچ حق قانونی ندارد و ادعایش کلاً باطل است.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-1.5">
              <div className="font-bold text-[#E5C158]">حکم غیابی و حضوری</div>
              <p className="text-slate-400 leading-relaxed">
                حکم غیابی در غیاب خوانده و بدون دریافت لایحه از او صادر شده و حق واخواهی دارد؛ حکم حضوری فقط قابل تجدیدنظر است.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-1.5">
              <div className="font-bold text-[#E5C158]">حکم قطعی دادگاه</div>
              <p className="text-slate-400 leading-relaxed">
                رأیی که مهلت اعتراض آن گذشته یا از دادگاه تجدیدنظر صادر شده و فوراً قابل صدور اجرائیه و توقیف اموال است.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Steps to analyze a court verdict */}
        <div id="verdict-analysis-steps" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <FileSearch className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۴. مراحل گام‌به‌گام تحلیل و خواندن یک سند قضایی
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2 relative">
              <div className="w-7 h-7 rounded-full bg-[#E5C158] text-slate-950 font-black flex items-center justify-center text-xs">
                ۱
              </div>
              <h4 className="font-bold text-white text-sm">شناسایی سربرگ و مرجع صادرکننده</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                بررسی شماره پرونده، شعبه صادرکننده (دادسرا، دادگاه بدوی، تجدیدنظر یا شورا) و اصحاب دعوا (خواهان/خوانده).
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2 relative">
              <div className="w-7 h-7 rounded-full bg-[#E5C158] text-slate-950 font-black flex items-center justify-center text-xs">
                ۲
              </div>
              <h4 className="font-bold text-white text-sm">استخراج گردش‌کار و استدلال قاضی</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                شناسایی دلایل مورد استناد قاضی (شهادت، اسناد رسمی، نظر کارشناس یا اقرار) و مواد قانونی مندرج در متن.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2 relative">
              <div className="w-7 h-7 rounded-full bg-[#E5C158] text-slate-950 font-black flex items-center justify-center text-xs">
                ۳
              </div>
              <h4 className="font-bold text-white text-sm">بررسی بخش پایانی و منطوق رأی</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                خواندن پاراگراف نهایی که دستور اصلی دادگاه (محکومیت، برائت، پرداخت، رد دعوا) در آن اعلام شده است.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2 relative">
              <div className="w-7 h-7 rounded-full bg-[#E5C158] text-slate-950 font-black flex items-center justify-center text-xs">
                ۴
              </div>
              <h4 className="font-bold text-white text-sm">محاسبه دقیق مهلت و شیوه اعتراض</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                بررسی حضوری یا غیابی بودن رأی، مرجع تجدیدنظر، و محاسبه دقیق روز آخر مهلت با احتساب مواعد تعطیل قانونی.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5: Comparison Table */}
        <div id="comparison-table" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۵. جدول مقایسه تطبیقی: دادنامه، قرار، ابلاغیه و اخطاریه
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-slate-800 bg-[#070B15] text-slate-300 text-xs sm:text-sm">
                  <th className="p-3 sm:p-4 font-bold">نوع سند قضایی</th>
                  <th className="p-3 sm:p-4 font-bold">مرجع صادرکننده</th>
                  <th className="p-3 sm:p-4 font-bold">ماهیت و اثر حقوقی</th>
                  <th className="p-3 sm:p-4 font-bold">قابلیت اعتراض</th>
                  <th className="p-3 sm:p-4 font-bold">مهلت اقدام معمول</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-xs sm:text-sm text-slate-300">
                <tr className="hover:bg-slate-800/20 transition-colors">
                  <td className="p-3 sm:p-4 font-bold text-[#E5C158]">دادنامه (حکم ماهوی)</td>
                  <td className="p-3 sm:p-4">دادگاه‌های بدوی یا تجدیدنظر</td>
                  <td className="p-3 sm:p-4">تصمیم قطعی یا بدوی درباره پیروزی یا شکست اصل دعوا</td>
                  <td className="p-3 sm:p-4">واخواهی، تجدیدنظر یا فرجام</td>
                  <td className="p-3 sm:p-4">۲۰ روز از تاریخ ابلاغ ثنا</td>
                </tr>
                <tr className="hover:bg-slate-800/20 transition-colors">
                  <td className="p-3 sm:p-4 font-bold text-sky-400">قرار قضایی</td>
                  <td className="p-3 sm:p-4">دادسرا (بازپرس/دادیار) یا دادگاه</td>
                  <td className="p-3 sm:p-4">تصمیمات شکلی، مقدماتی یا منع تعقیب بدون ورود ماهوی</td>
                  <td className="p-3 sm:p-4">اکثر قرارها قابل اعتراض در دادگاه بالاترند</td>
                  <td className="p-3 sm:p-4">۱۰ تا ۲۰ روز متناسب با نوع قرار</td>
                </tr>
                <tr className="hover:bg-slate-800/20 transition-colors">
                  <td className="p-3 sm:p-4 font-bold text-emerald-400">ابلاغیه ثنا</td>
                  <td className="p-3 sm:p-4">سامانه عدل ایران (مرکز فناوری قوه قضاییه)</td>
                  <td className="p-3 sm:p-4">اطلاع‌رسانی رسمی صدور رأی، تعیین وقت یا تبادل لوایح</td>
                  <td className="p-3 sm:p-4">ابلاغیه صرفاً اطلاع‌رسانی است نه خود تصمیم</td>
                  <td className="p-3 sm:p-4">ملاک آغاز شمارش کلیه مهلت‌ها</td>
                </tr>
                <tr className="hover:bg-slate-800/20 transition-colors">
                  <td className="p-3 sm:p-4 font-bold text-amber-400">اخطاریه / احضاریه</td>
                  <td className="p-3 sm:p-4">مدیر دفتر شعبه، دادیار یا بازپرس</td>
                  <td className="p-3 sm:p-4">دستور انجام تکالیف (رفع نقص، پرداخت وجه کارشناس، حضور)</td>
                  <td className="p-3 sm:p-4">معمولاً غیرقابل اعتراض مستقیم (تکلیف قانونی)</td>
                  <td className="p-3 sm:p-4">معمولاً ۵ الی ۱۰ روز از ابلاغ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 6: Common Mistakes */}
        <div id="common-mistakes" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۶. اشتباهات رایج و خسارت‌بار مردم هنگام دریافت رأی و ابلاغیه ثنا
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="font-bold text-rose-400">۱. باز نکردن ابلاغیه به تصور به تعویق انداختن مهلت</div>
              <p className="text-slate-400 leading-relaxed">
                طبق آیین‌نامه ابلاغ الکترونیک، وصول پیامک به حساب ثنا ابلاغ قانونی محسوب شده و روزشمار مهلت آغاز می‌گردد؛ باز نکردن ابلاغیه مانع قطعی شدن حکم نیست.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="font-bold text-rose-400">۲. اشتباه در محاسبه مهلت ۲۰ روزه</div>
              <p className="text-slate-400 leading-relaxed">
                روز ابلاغ و روز اقدام محاسبه نمی‌شود، اما ثبت اعتراض در روز بیست و یکم موجب صدور قرار رد تجدیدنظرخواهی و از دست رفتن قطعی پرونده می‌شود.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="font-bold text-rose-400">۳. اشتباه گرفتن «قرار رد دعوا» با شکست قطعی</div>
              <p className="text-slate-400 leading-relaxed">
                قرار رد دعوا ناشی از ایراد شکلی است و شما می‌توانید با رفع ایراد دادخواست جدید ثبت کنید، در حالی که حکم بطلان دعوا اعتبار امر مختومه دارد.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="font-bold text-rose-400">۴. اقدام اشتباه بر اساس مشاوره‌های غیرتخصصی</div>
              <p className="text-slate-400 leading-relaxed">
                تنظیم اشتباه دادخواست به جای لایحه اعتراضی یا بالعکس، باعث اتلاف وقت، پرداخت هزینه دادرسی مضاعف و رد اعتراض می‌شود.
              </p>
            </div>
          </div>
        </div>

        {/* Section 7: Three User Pathways */}
        <div id="conversion-pathways" className="bg-[#0D1424] border border-[#E5C158]/30 rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5C158]/10 text-[#E5C158] text-xs font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>سه مسیر راهنمایی و اقدام برای تحلیل اوراق قضایی</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-black text-white">
              چگونه ابلاغیه یا رأی دادگاه خود را همین امروز تحلیل و اقدام کنید؟
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto">
              بسته به نیاز و میزان حساسیت پرونده، یکی از سه مسیر شفاف زیر را انتخاب نمایید:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Path 1: Free Educational Knowledge Base */}
            <div className="p-6 rounded-2xl bg-[#070B15] border border-slate-800 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white">مسیر ۱: آموزش رایگان حقوقی</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  اگر مایلید مفهوم ابلاغیه ثنا، اصطلاحات دادنامه و نحوه محاسبه مواعد قانونی را شخصاً مطالعه و بررسی کنید.
                </p>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                  <li>مقاله راهنمای خواندن و تحلیل دادنامه</li>
                  <li>راهنمای ورود به سامانه ثنا و ابلاغیه</li>
                  <li>مشاهده نمونه آراء و لوایح اعتراضی</li>
                </ul>
              </div>
              <div className="pt-2">
                <Link
                  href="/knowledge/what-is-e-notification"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all"
                >
                  <span>مطالعه مقالات آموزشی ثنا</span>
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Path 2: Document Explainer by Negaresh Yar */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#0D1424] to-[#121B2F] border-2 border-[#E5C158] flex flex-col justify-between space-y-5 relative shadow-xl shadow-[#E5C158]/5">
              <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-[#E5C158] text-slate-950 text-[11px] font-black">
                پیشنهاد هوشمند و سریع
              </div>
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
                  <Brain className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white">مسیر ۲: تفسیر و خلاصه رأی در نگارش یار</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  آپلود عکس یا PDF دادنامه و ابلاغیه؛ دریافت خلاصه روان به زبان ساده، استخراج مهلت‌های اعتراض و راهنمای فوری اقدام بعدی.
                </p>
                <ul className="text-xs text-slate-300 space-y-1.5">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>ترجمه روان اصطلاحات سنگین به زبان ساده</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>محاسبه دقیق مهلت‌های ۱۰ و ۲۰ روزه</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>امکان اتصال فوری به سفارش تنظیم لایحه</span>
                  </li>
                </ul>
              </div>
              <div className="pt-2">
                <Link
                  href="/ai-interpreter"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#E5C158] hover:bg-[#d4b046] text-slate-950 text-xs font-black transition-all shadow-md shadow-[#E5C158]/20"
                >
                  <span>شروع فوری تفسیر هوشمند رأی و ابلاغیه</span>
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Path 3: Lawyer Referral */}
            <div className="p-6 rounded-2xl bg-[#070B15] border border-slate-800 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Scale className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white">مسیر ۳: معرفی وکیل منصف</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  برای پرونده‌های ملکی سنگین، احکام کیفری مجازات‌های سنگین، قرارهای جلب پیچیده یا نیاز به مطالعه پرونده و اعلام وکالت در دادگاه تجدیدنظر.
                </p>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                  <li>ارزیابی جامع پرونده توسط وکیل پایه یک</li>
                  <li>حضور و دفاع حضوری در مراجع تجدیدنظر</li>
                  <li>پیگیری توقف اجرای احکام و اعاده دادرسی</li>
                </ul>
              </div>
              <div className="pt-2">
                <Link
                  href="/lawyer-referral"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/40 text-purple-200 text-xs font-bold transition-all"
                >
                  <span>درخواست معرفی وکیل منصف</span>
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
