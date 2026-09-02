import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import {
  Scale,
  Layers,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Building,
  Gavel,
  ShieldCheck,
  UserCheck,
  Clock,
  Search,
  AlertCircle,
  FileText,
} from 'lucide-react';

export function AbsentJudgmentObjectionGuideSection() {
  return (
    <section className="relative space-y-12">
      <Container>
        {/* Header Badge & Title */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold">
            <Sparkles className="w-4 h-4" />
            <span>راهنمای جامع حقوقی واخواهی از احکام غیابی دادگاه حقوقی و کیفری</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            راهنمای کامل واخواهی از حکم غیابی، مهلت و توقف اجرای حکم
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            بررسی ماده ۳۰۵ و ۳۰۶ قانون آیین دادرسی مدنی و ماده ۴۰۶ کیفری، شرایط قانونی واخواهی، مهلت ۲۰ روزه سامانه ثنا، توقف فوری عملیات اجرایی و لایحه دفاعیه مؤثر.
          </p>
        </div>

        {/* Section 1: What is Absent Judgment */}
        <div id="what-is-absent-judgment" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Gavel className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۱. حکم غیابی چیست و چه تفاوتی با حکم حضوری دارد؟
            </h3>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              در نظام دادرسی ایران، اصل بر برگزاری دادگاه با حضور دو طرف دعوا (خواهان و خوانده در دعاوی حقوقی؛ شاکی و متهم در دعاوی کیفری) و استماع اظهارات و دفاعیات طرفین است. با این وجود، چنانچه دادگاه جلسه‌ای تشکیل دهد و یکی از طرفین (معمولاً خوانده یا متهم) در فرآیند دادرسی حاضر نباشد، رأیی که صادر می‌شود ممکن است <strong>«حکم غیابی» (Default / Absent Judgment)</strong> باشد.
            </p>
            <p>
              بر اساس <strong>ماده ۳۰۳ قانون آیین دادرسی مدنی</strong> و <strong>ماده ۴۰۶ قانون آیین دادرسی کیفری</strong>، یک حکم زمانی «غیابی» محسوب می‌شود که هر سه شرط زیر به طور همزمان محقق شده باشد:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                  <Search className="w-4 h-4" />
                  <h4>۱. عدم ابلاغ واقعی اخطاریه</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  اخطاریه دادگاه و وقت جلسه رسیدگی شخصاً به خود خوانده یا متهم تحویل داده نشده و در سامانه ثنا نیز مشاهده مستقیم و واقعی ثبت نگردیده باشد (ابلاغ قانونی/الصاقی).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                  <UserCheck className="w-4 h-4" />
                  <h4>۲. عدم حضور در جلسات دادگاه</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  خوانده، متهم، وکیل تعیینی یا نماینده قانونی وی در هیچ‌یک از جلسات دادگاه حاضر نشده باشند.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                  <FileText className="w-4 h-4" />
                  <h4>۳. عدم ارسال لایحه دفاعیه</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  خوانده یا متهم هیچ‌گونه لایحه، پاسخ کتبی یا دفاعیه‌ای به دادگاه ارسال نکرده باشد.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#070B15] border border-amber-500/20 text-amber-200 text-xs sm:text-sm leading-relaxed">
              <strong>تفاوت کلیدی حکم حضوری و غیابی:</strong> اگر حتی یک برگ لایحه فرستاده باشید یا در یکی از جلسات حاضر شده باشید یا ابلاغ واقعی شده باشد، رأی دادگاه «حضوری» بوده و حق واخواهی از بین می‌رود و تنها راه اعتراض، تجدیدنظرخواهی خواهد بود.
            </div>
          </div>
        </div>

        {/* Section 2: When is objection possible */}
        <div id="when-is-objection-possible" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۲. چه زمانی امکان ثبت دادخواست واخواهی وجود دارد؟
            </h3>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              طبق <strong>ماده ۳۰۵ قانون آیین دادرسی مدنی</strong>، محکوم‌علیه غیابی حق دارد به حکمی که در غیاب او صادر شده اعتراض نماید. این حق قانونی «واخواهی» نام دارد و باعث می‌شود پرونده مجدداً در همان شعبه بدوی صادرکننده رأی با حضور خوانده به جریان بیفتد.
            </p>
            <p>
              امکان واخواهی در وضعیت‌های حقوقی زیر وجود دارد:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
                <h4 className="font-bold text-[#E5C158] flex items-center gap-2 text-sm sm:text-base">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>واخواهی در دعاوی حقوقی</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  احکام مطالبه وجه چک، سفته، مطالبات قراردادی، خسارت تأخیر تأدیه، الزام به تنظیم سند رسمی، تخلیه ید و دعاوی مالی که خوانده در دادرسی بی‌اطلاع بوده است.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
                <h4 className="font-bold text-[#E5C158] flex items-center gap-2 text-sm sm:text-base">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>واخواهی در دعاوی کیفری</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  احکام غیابی محکومیت به حبس، جزای نقدی، کلاهبرداری، صدور چک بلامحل و جرایم تعزیری که متهم در مراحل دادسرا یا دادگاه کیفری احضار نشده یا حضور نداشته است.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
                <h4 className="font-bold text-[#E5C158] flex items-center gap-2 text-sm sm:text-base">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>دعاوی خانوادگی و مهریه</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  احکام غیابی مطالبه مهریه، نفقه معوقه، اجرت‌المثل ایام زوجیت یا طلاق غیابی صادرشده از دادگاه‌های خانواده.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
                <h4 className="font-bold text-[#E5C158] flex items-center gap-2 text-sm sm:text-base">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>توقف فوری اجرائیه و جلب</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  هنگامی که اجرائیه صادر شده و حساب‌های بانکی مسدود یا دستور جلب صادر شده است، با ثبت واخواهی کلیه اقدامات اجرایی تا تصمیم بعدی معلق می‌شود.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Legal Deadlines */}
        <div id="legal-deadline" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۳. مهلت قانونی واخواهی و نحوه محاسبه آن در سامانه ثنا
            </h3>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              مهلت‌های قانونی برای ثبت دادخواست واخواهی مطابق قانون آیین دادرسی مدنی و کیفری به شرح زیر است:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#070B15] border-r-4 border-[#E5C158] space-y-2">
                <h4 className="text-white font-bold text-base flex items-center gap-2">
                  <span>برای اشخاص مقیم ایران:</span>
                  <span className="text-[#E5C158] font-black">۲۰ روز</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  از تاریخ «ابلاغ واقعی» دادنامه در سامانه ثنا (روزی که شخصاً ابلاغیه را باز کرده و مشاهده نموده‌اید) یا از تاریخ اطلاع واقعی از صدور رأی غیابی.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#070B15] border-r-4 border-sky-500 space-y-2">
                <h4 className="text-white font-bold text-base flex items-center gap-2">
                  <span>برای اشخاص مقیم خارج از کشور:</span>
                  <span className="text-sky-400 font-black">۲ ماه</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  از تاریخ ابلاغ رسمی در سامانه‌های کنسولی/ثنا یا ابلاغ به وکیل و نماینده مقیم ایران.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#070B15] border border-blue-500/20 text-sky-300 text-xs sm:text-sm leading-relaxed space-y-1">
              <strong>واخواهی خارج از مهلت با عذر موجه (ماده ۳۰۶ ق.آ.د.م):</strong>
              <p className="text-slate-400 text-xs">
                اگر مهلت ۲۰ روزه سپری شده باشد اما شما دارای عذر موجه قانونی نظیر: بیماری مانع حرکت، فوت همسر یا بستگان درجه یک، حوادث غیرمترقبه (سیل، زلزله)، توقیف یا حبس، و یا عدم اطلاع واقعی از مفاد رأی به دلیل نقص در ابلاغ ثنا باشید، می‌توانید همزمان با دادخواست واخواهی، مدارک عذر موجه را ضمیمه نمایید تا دادگاه به اصل دعوا رسیدگی کند.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Steps to file */}
        <div id="steps-to-file" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۴. مراحل گام‌به‌گام ثبت دادخواست واخواهی و توقف اجرای حکم
            </h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۱
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">دریافت دادنامه و بررسی وضعیت ابلاغ در سامانه ثنا</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  دانلود متن کامل دادنامه از کارتابل ابلاغ الکترونیک قضایی و بررسی تاریخ و نوع ابلاغ‌ها و ادعاهای مطرح‌شده توسط خواهان.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۲
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">بررسی شرایط حقوقی غیابی بودن و احراز صلاحیت واخواهی</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  اطمینان از عدم حضور در جلسات بدوی و عدم ارسال لایحه سابق، به همراه محاسبه دقیق مهلت ۲۰ روزه از زمان اطلاع واقعی.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۳
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">تنظیم دادخواست واخواهی و لایحه دفاعیه مستند</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  نگارش حقوقی دادخواست با استناد به ماده ۳۰۵ و ارائه ادله ماهوی جدید (رسیدهای پرداخت، مدارک رد بدهی، اسناد مالکیت و فاکتورها) توسط کارشناسان نگارش یار.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۴
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">ثبت دادخواست در دفاتر خدمات الکترونیک قضایی</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  ثبت رسمی دادخواست در دفاتر خدمات قضایی یا خودکاربری ثنا و دریافت گواهی ثبت به همراه کد پیگیری پرونده.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۵
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">رسیدگی مجدد در شعبه صادرکننده رأی و توقف اجرای حکم</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  پرونده به همان شعبه ارجاع می‌شود؛ قاضی دستور توقف فوری عملیات اجرایی و رفع انسداد حساب‌ها را صادر کرده و جلسه دادرسی جدید با حضور طرفین برگزار می‌گردد.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Grounds for Accepting Objection */}
        <div id="grounds-for-accepting" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۵. مهم‌ترین دلایل پذیرش واخواهی و نقض رأی غیابی در دادگاه
            </h3>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            دادگاه‌های حقوقی و کیفری در صورت ارائه ادله زیر توسط واخواه (محکوم‌علیه غیابی)، رأی سابق را فسخ کرده و حکم به نفع وی صادر می‌نمایند:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <h4>۱. عدم اطلاع واقعی از فرایند دادرسی و جلسه دادگاه</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                اثبات اینکه ابلاغ‌ها به آدرس اشتباه ارسال شده یا متهم/خوانده به دلیل عدم ثبت در ثنا یا مشکلات سامانه‌ای اصلاً از تشکیل دادگاه باخبر نبوده است.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <h4>۲. وجود عذر موجه قانونی (ماده ۳۰۶ ق.آ.د.م)</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                ارائه اسناد پزشکی، مدارک مسافرت اضطراری یا گواهی مراجع ذی‌ربط دال بر بروز بیماری یا حوادث قهری که مانع حضور فرد در دادگاه شده است.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <h4>۳. ارائه اسناد و دفاعیات جدید ماهوی</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                ارائه فیش‌های واریزی، اسناد تسویه حساب، رسید امانی بودن وجوه، شهادت شهود یا درخواست ارجاع به کارشناسی رسمی که قبلاً در پرونده غایب بوده است.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <h4>۴. ایرادات شکلی در نحوه رسیدگی دادگاه</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                نبود صلاحیت محلی یا ذاتی دادگاه، عدم رعایت تشریفات نشر آگهی یا خطای فاحش در محاسبه مبلغ خواسته و خسارات دادرسی.
              </p>
            </div>
          </div>
        </div>

        {/* Section 6: Comprehensive Comparison Table */}
        <div id="comparison-table" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۶. جدول مقایسه واخواهی، تجدیدنظرخواهی و اعاده دادرسی
            </h3>
          </div>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            بررسی مرجع رسیدگی، زمان استفاده، مهلت و اثر حقوقی روش‌های گوناگون اعتراض به آرای دادگاه‌ها:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-[#E5C158] font-bold">
                  <th className="p-3">عنوان اعتراض</th>
                  <th className="p-3">مرجع رسیدگی</th>
                  <th className="p-3">زمان و شرایط استفاده</th>
                  <th className="p-3">مهلت قانونی</th>
                  <th className="p-3">اثر حقوقی بر رأی</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr>
                  <td className="p-3 font-bold text-amber-400">واخواهی</td>
                  <td className="p-3">همان شعبه صادرکننده رأی بدوی</td>
                  <td className="p-3">فقط در احکام غیابی که خوانده/متهم در دادگاه حضور و دفاع نداشته است</td>
                  <td className="p-3 text-emerald-400 font-bold">۲۰ روز (ایران) / ۲ ماه (خارج)</td>
                  <td className="p-3 text-slate-300">توقف فوری عملیات اجرایی و رسیدگی مجدد ماهوی پرونده از ابتدا</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-sky-400">تجدیدنظرخواهی</td>
                  <td className="p-3">دادگاه تجدیدنظر استان</td>
                  <td className="p-3">احکام حضوری یا احکام صادرشده پس از رسیدگی به واخواهی</td>
                  <td className="p-3 text-emerald-400 font-bold">۲۰ روز (ایران) / ۲ ماه (خارج)</td>
                  <td className="p-3 text-slate-300">بررسی مجدد توسط هیئت قضات دادگاه استان و امکان تأیید یا نقض رأی</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-purple-400">اعاده دادرسی</td>
                  <td className="p-3">همان دادگاه صادرکننده حکم قطعی</td>
                  <td className="p-3">کشف اسناد مکتوم، اثبات جعلی بودن اسناد یا صدور حکم متناقض</td>
                  <td className="p-3 text-emerald-400 font-bold">۲۰ روز از تاریخ کشف سند/جهت اعاده</td>
                  <td className="p-3 text-slate-300">رسیدگی استثنایی به احکام قطعی در صورت اثبات جهت قانونی مندرج در قانون</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 7: Common Mistakes */}
        <div id="common-mistakes" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۷. اشتباهات رایج و مهلک در فرآیند واخواهی
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-red-500/20 space-y-2">
              <h4 className="font-bold text-red-400">۱. تصور اینکه هر رأی دادگاه قابل واخواهی است</h4>
              <p className="text-slate-400 leading-relaxed">
                اگر حتی یک بار لایحه فرستاده باشید یا ابلاغ واقعی شده باشد، رأی حضوری است و دادخواست واخواهی فوراً رد می‌شود؛ در این حالت باید مستقیماً تجدیدنظرخواهی کنید.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-amber-500/20 space-y-2">
              <h4 className="font-bold text-amber-400">۲. از دست دادن مهلت قانونی ۲۰ روزه</h4>
              <p className="text-slate-400 leading-relaxed">
                تعلل در ثبت دادخواست پس از اطلاع از رأی در ثنا باعث انقضای مهلت و قطعی شدن رأی می‌گردد؛ مگر اینکه بتوانید عذر موجه قانونی را در دادگاه اثبات کنید.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-blue-500/20 space-y-2">
              <h4 className="font-bold text-sky-400">۳. تکرار ادعاها بدون نقد و تحلیل استدلال رأی</h4>
              <p className="text-slate-400 leading-relaxed">
                دادخواست واخواهی باید حاوی دفاعیات دقیق ماهوی و دلایل جدید باشد؛ صرف ابراز بی‌اطلاعی بدون ارائه مدارک نقض‌کننده ادعای خواهان، نتیجه‌ای نخواهد داشت.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-purple-500/20 space-y-2">
              <h4 className="font-bold text-purple-400">۴. عدم ارائه دلیل و مستندات برای عدم حضور</h4>
              <p className="text-slate-400 leading-relaxed">
                اگر دیرتر از ۲۰ روز اقدام کرده‌اید، حتماً باید مدارک پزشکی، مأموریت یا ادله عدم ابلاغ واقعی را ضمیمه کنید تا دادگاه به واخواهی ورود پیدا کند.
              </p>
            </div>
          </div>
        </div>

        {/* Section 8: Clear Boundary Notice (Conversion Separation) */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#0C1222] via-[#0F172A] to-[#0C1222] border border-[#E5C158]/30 space-y-4">
          <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
            <CheckCircle2 className="w-5 h-5" />
            <span>تفکیک شفاف سه مسیر کاربری در خدمات واخواهی نگارش یار</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-1">
              <h4 className="font-bold text-white">۱. آموزش رایگان حقوقی</h4>
              <p className="text-slate-400">
                مطالعه مقالات پایگاه دانش درباره نحوه خواندن دادنامه غیابی، شرایط ابلاغ ثنا و مواد قانون آیین دادرسی مدنی و کیفری.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-1">
              <h4 className="font-bold text-[#E5C158]">۲. تنظیم دادخواست و لایحه توسط نگارش یار</h4>
              <p className="text-slate-400">
                بررسی دقیق دادنامه، استخراج ایرادات شکلی و دفاعیات ماهوی، تنظیم دادخواست واخواهی و تحویل سریع فایل Word و PDF استاندارد.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-1">
              <h4 className="font-bold text-sky-400">۳. معرفی وکیل منصف</h4>
              <p className="text-slate-400">
                برای پرونده‌های پیچیده، دعاوی مالی سنگین یا مواردی که نیاز به حضور وکیل در جلسه دادرسی بدوی دارید، از بخش <Link href="/lawyer-referral" className="text-[#E5C158] underline font-bold">معرفی وکیل منصف</Link> اقدام کنید.
              </p>
            </div>
          </div>
        </div>

        {/* Action Conversion Box */}
        <div className="bg-gradient-to-r from-[#111827] via-[#0D1424] to-[#111827] border-2 border-[#E5C158]/50 rounded-3xl p-6 sm:p-8 text-center space-y-4 shadow-xl shadow-[#E5C158]/10">
          <h3 className="text-xl sm:text-2xl font-black text-white">
            حکم غیابی علیه شما صادر شده و نگران توقیف اموال یا جلب هستید؟
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            با تنظیم یک دادخواست واخواهی اصولی و مستند توسط کارشناسان ارشد نگارش یار، اجرای حکم و انسداد حساب‌ها را فوراً متوقف کرده و پرونده را از نو با دفاع قوی پیگیری کنید.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/request?service=objection-absent-judgment"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#070B15] font-black text-sm shadow-lg shadow-[#E5C158]/20 hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <span>درخواست فوری تنظیم دادخواست و لایحه واخواهی</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <Link
              href="/samples/objection-absent-judgment"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-bold text-xs sm:text-sm hover:text-white transition-colors"
            >
              مشاهده نمونه دادخواست واخواهی
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
