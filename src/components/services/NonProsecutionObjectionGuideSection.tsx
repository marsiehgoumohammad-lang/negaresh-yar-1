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
  UserCheck,
  Clock,
  Search,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';

export function NonProsecutionObjectionGuideSection() {
  return (
    <section className="relative space-y-12">
      <Container>
        {/* Header Badge & Title */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold">
            <Sparkles className="w-4 h-4" />
            <span>راهنمای جامع حقوقی اعتراض به قرار منع تعقیب دادسرا و نقض آن</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            راهنمای کامل اعتراض به قرار منع تعقیب و احقاق حقوق شاکی
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            بررسی مواد ۲۷۰ تا ۲۷۳ قانون آیین دادرسی کیفری، جهات نقض قرار در دادگاه کیفری دو، مهلت ۱۰ روزه سامانه ثنا، دلایل قانونی اعتراض و مقایسه انواع قرارهای دادسرا.
          </p>
        </div>

        {/* Section 1: What is Non-Prosecution Order */}
        <div id="what-is-non-prosecution" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Gavel className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۱. قرار منع تعقیب چیست و به چه دلایلی صادر می‌شود؟
            </h3>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              در پرونده‌های کیفری، پس از طرح شکواییه توسط شاکی و انجام تحقیقات مقدماتی در دادسرا، چنانچه بازپرس یا دادیار به این جمع‌بندی برسد که انتساب جرم به متهم ناممکن است یا رفتار ارتکابی اساساً وصف کیفری ندارد، اقدام به صدور <strong>«قرار منع تعقیب» (Order of Non-Prosecution)</strong> می‌نماید.
            </p>
            <p>
              قرار منع تعقیب عموماً بر پایه دو محور اصلی صادر می‌شود که درک تفاوت آن‌ها برای تنظیم لایحه اعتراض حیاتی است:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <h4>الف) جرم نبودن عمل ارتکابی (فقدان وصف کیفری)</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  مقام قضایی تشخیص می‌دهد که موضوع شکایت صرفاً یک اختلاف حقوقی، مدنی، خانوادگی یا قراردادی است و در قوانین جزایی کشور برای آن مجازاتی تعیین نشده است.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                  <Search className="w-4 h-4" />
                  <h4>ب) عدم کفایت ادله و مدارک اثباتی</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  عمل رخ‌داده جرم است، اما به دلیل نقص در ادله، عدم شهادت شهود، عدم وضوح مدارک یا عدم اقرار، بازپرس مدارک شاکی را برای انتساب اتهام به متهم کافی ندانسته است.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#070B15] border border-amber-500/20 text-amber-200 text-xs sm:text-sm leading-relaxed">
              <strong>نکته مهم:</strong> صدور قرار منع تعقیب به هیچ وجه به معنای پایان پرونده شما نیست. قانون‌گذار در ماده ۲۷۰ قانون آیین دادرسی کیفری حق اعتراض را برای شاکی به رسمیت شناخته تا دادگاه کیفری بتواند تصمیم دادسرا را با دقت بازبینی و نقض کند.
            </div>
          </div>
        </div>

        {/* Section 2: Who Has Right to Object */}
        <div id="who-can-object" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۲. چه کسانی حق اعتراض به قرار منع تعقیب را دارند؟
            </h3>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              بر اساس ماده ۲۷۰ قانون آیین دادرسی کیفری، اشخاص زیر صلاحیت قانونی جهت ثبت اعتراض به قرار منع تعقیب را دارا می‌باشند:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
                <h4 className="font-bold text-[#E5C158] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>۱. شاکی یا مدعی خصوصی</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  فردی که مستقیماً از وقوع جرم متضرر شده و شکواییه را در دادسرا ثبت کرده است.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
                <h4 className="font-bold text-[#E5C158] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>۲. وکیل دادگستری شاکی</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  وکیل دارای وکالت‌نامه رسمی معتبر که حق اعتراض به قرارها و تجدیدنظرخواهی در آن تصریح شده باشد.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
                <h4 className="font-bold text-[#E5C158] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>۳. نماینده قانونی یا قیم</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  ولی قهری، قیم محجورین، متولیان یا نمایندگان حقوقی شرکت‌ها و اشخاص حقوقی متضرر از جرم.
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              <strong>نقش ابلاغ در سامانه ثنا:</strong> مهلت اعتراض دقیقاً از زمانی محاسبه می‌شود که ابلاغیه قرار در کارتابل ثنای شاکی یا وکیل وی مشاهده گردد یا مهلت ابلاغ قانونی آن سپری شود.
            </p>
          </div>
        </div>

        {/* Section 3: Legal Deadline */}
        <div id="legal-deadline" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۳. مهلت قانونی اعتراض به قرار منع تعقیب و نحوه محاسبه آن
            </h3>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              بر اساس ماده ۲۷۰ قانون آیین دادرسی کیفری، مهلت‌های اعتراض به قرارهای نهایی دادسرا دقیقاً به شرح زیر است:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#070B15] border-r-4 border-[#E5C158] space-y-2">
                <h4 className="text-white font-bold text-base flex items-center gap-2">
                  <span>برای اشخاص مقیم ایران:</span>
                  <span className="text-[#E5C158] font-black">۱۰ روز</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  از تاریخ ابلاغ واقعی در سامانه ثنا. روز ابلاغ و روز اقدام محاسبه نمی‌شود، لذا عملاً شاکی ۱۲ روز برای تنظیم و ثبت لایحه مهلت دارد.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#070B15] border-r-4 border-sky-500 space-y-2">
                <h4 className="text-white font-bold text-base flex items-center gap-2">
                  <span>برای اشخاص مقیم خارج از کشور:</span>
                  <span className="text-sky-400 font-black">۱ ماه</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  از تاریخ ابلاغ رسمی به وکیل یا بستگان مقیم ایران یا ثبت در سامانه‌های کنسولی و ثنا.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#070B15] border border-red-500/20 text-red-300 text-xs sm:text-sm leading-relaxed">
              <strong>هشدار انقضای مهلت:</strong> در صورتی که لایحه اعتراض حتی یک روز پس از مهلت قانونی در سامانه دفاتر خدمات قضایی ثبت گردد، دادگاه بدون بررسی ماهوی پرونده، «قرار رد اعتراض به دلیل انقضای مهلت» صادر می‌کند و قرار منع تعقیب قطعی می‌شود.
            </div>
          </div>
        </div>

        {/* Section 4: Step-by-Step Objection Steps */}
        <div id="objection-steps" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۴. مراحل گام‌به‌گام اعتراض به قرار منع تعقیب تا نقض در دادگاه
            </h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۱
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">دریافت و بررسی دقیق قرار در سامانه ثنا</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  دانلود دادنامه قرار منع تعقیب و مطالعه استدلال‌های دادیار/بازپرس پیرامون علت رد شکایت یا نبود ادله.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۲
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">کشف ایرادات و نواقص تحقیقات مقدماتی</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  شناسایی شهودی که احضار نشده‌اند، اسناد بانکی یا قراردادهایی که بررسی نگردیده‌اند و خطاهای انطباق رفتار با قانون مجازات.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۳
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">تنظیم تخصصی لایحه اعتراض با درخواست جلب به دادرسی</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  نگارش لایحه مستند به مواد قانونی توسط متخصصان نگارش یار، متضمن درخواست نقض قرار و صدور قرار جلب به دادرسی.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۴
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">ثبت لایحه در دفاتر خدمات الکترونیک قضایی</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  ثبت رسمی اعتراض در دفاتر خدمات قضایی و ارسال مستقیم به دادگاه کیفری دو صالح به رسیدگی.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۵
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">رسیدگی دادگاه کیفری دو و صدور تصمیم نهایی</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  قاضی دادگاه پرونده را بررسی کرده و در صورت قبول اعتراض، قرار را نقض و پرونده را جهت تفهیم اتهام و صدور کیفرخواست به دادسرا برمی‌گرداند.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Key Grounds for Overturning Order */}
        <div id="grounds-for-overturning" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۵. مهم‌ترین دلایل قانونی برای نقض قرار منع تعقیب در دادگاه
            </h3>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            قضات دادگاه‌های کیفری دو بر اساس ۵ محور کلیدی زیر اقدام به نقض قرار منع تعقیب بازپرس می‌نمایند:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <h4>۱. نقص در تحقیقات مقدماتی</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                عدم استعلام تراکنش‌های بانکی، عدم بازبینی فیلم دوربین‌های مداربسته، عدم جلب نظر کارشناس رسمی یا عدم مواجهه حضوری میان طرفین پرونده.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <h4>۲. بی‌توجهی به شهادت شهود و مطلعین</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                معرفی شهود توسط شاکی در مرحله دادسرا که دادیار بدون احضار آنان یا بدون استماع شهادتشان اقدام به مختومه کردن پرونده نموده است.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <h4>۳. اشتباه در تطبیق رفتار با قانون مجازات</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                تلقی اشتباه عمل مجرمانه به عنوان دعوای حقوقی (نظیر پرونده‌های کلاهبرداری، انتقال مال غیر و خیانت در امانت که دادیار آن را اختلاف مالی دانسته).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <h4>۴. نادیده گرفتن اسناد کتبی و پیام‌های الکترونیکی</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                وجود رسیدهای پرداخت، چت‌های پیام‌رسان‌ها، اقرارنامه‌ها و پیامک‌هایی که ارتکاب جرم توسط متهم را به وضوح اثبات می‌کنند.
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
              ۶. جدول مقایسه قرار منع تعقیب، موقوفی تعقیب و حکم برائت
            </h3>
          </div>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            بررسی صادرکننده، مفهوم حقوقی، قابلیت اعتراض و اثر هر یک از تصمیمات نهایی در مراجع قضایی کیفری:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-[#E5C158] font-bold">
                  <th className="p-3">عنوان تصمیم قضایی</th>
                  <th className="p-3">صادرکننده</th>
                  <th className="p-3">مفهوم و علت صدور</th>
                  <th className="p-3">امکان اعتراض</th>
                  <th className="p-3">اثر حقوقی</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr>
                  <td className="p-3 font-bold text-amber-400">قرار منع تعقیب</td>
                  <td className="p-3">بازپرس یا دادیار در دادسرا</td>
                  <td className="p-3">جرم نبودن عمل یا فقدان ادله کافی</td>
                  <td className="p-3 text-emerald-400 font-bold">دارد (ظرف ۱۰ روز در دادگاه کیفری)</td>
                  <td className="p-3 text-slate-300">توقف تعقیب متهم مگر با نقض در دادگاه یا کشف دلیل جدید</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-yellow-300">قرار موقوفی تعقیب</td>
                  <td className="p-3">دادسرا یا دادگاه کیفری</td>
                  <td className="p-3">فوت متهم، گذشت شاکی در جرایم قابل گذشت، مشمول مرور زمان، عفو یا اعتبار امر مختومه</td>
                  <td className="p-3 text-emerald-400 font-bold">دارد (ظرف ۱۰ یا ۲۰ روز)</td>
                  <td className="p-3 text-slate-300">بسته شدن دائمی پرونده به دلیل موانع قانونی رسیدگی</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-sky-400">حکم برائت</td>
                  <td className="p-3">فقط دادگاه کیفری (بدوی یا تجدیدنظر)</td>
                  <td className="p-3">محاکمه ماهوی متهم و عدم احراز گناهکاری پس از صدور کیفرخواست</td>
                  <td className="p-3 text-emerald-400 font-bold">دارد (تجدیدنظرخواهی ظرف ۲۰ روز)</td>
                  <td className="p-3 text-slate-300">اعلام بی‌گناهی رسمی متهم با اثر قطعی و منع محاکمه مجدد</td>
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
              ۷. اشتباهات رایج در اعتراض به قرار منع تعقیب
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-red-500/20 space-y-2">
              <h4 className="font-bold text-red-400">۱. تکرار صرف متن شکایت اولیه</h4>
              <p className="text-slate-400 leading-relaxed">
                بسیاری از شاکیان عین متن شکواییه را دوباره کپی می‌کنند، در حالی که لایحه اعتراض باید دقیقاً استدلال‌های بازپرس را نقد کرده و دلایل رد آن‌ها را اثبات کند.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-amber-500/20 space-y-2">
              <h4 className="font-bold text-amber-400">۲. بیان مطالب احساسی و غیرحقوقی</h4>
              <p className="text-slate-400 leading-relaxed">
                توسل به مظلوم‌نمایی به جای ارائه مدارک محکمه‌پسند و استناد به مواد قانونی موجب رد فوری اعتراض در دادگاه می‌شود.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-blue-500/20 space-y-2">
              <h4 className="font-bold text-sky-400">۳. عدم اشاره به نقص تحقیقات دادسرا</h4>
              <p className="text-slate-400 leading-relaxed">
                اگر مشخص نکنید بازپرس چه اقدام تحقیقی (مانند استعلام حساب یا خطوط تلفن) را انجام نداده، قاضی دادگاه رأی دادسرا را تأیید خواهد کرد.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-purple-500/20 space-y-2">
              <h4 className="font-bold text-purple-400">۴. از دست دادن مهلت ۱۰ روزه ثنا</h4>
              <p className="text-slate-400 leading-relaxed">
                تعلل در آماده‌سازی لایحه باعث ثبت آن پس از انقضای مهلت و رد قطعی اعتراض بدون بررسی محتوایی پرونده می‌گردد.
              </p>
            </div>
          </div>
        </div>

        {/* Section 8: Clear Boundary Notice (Conversion Separation) */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#0C1222] via-[#0F172A] to-[#0C1222] border border-[#E5C158]/30 space-y-4">
          <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
            <CheckCircle2 className="w-5 h-5" />
            <span>تفکیک شفاف گزینه‌ها و خدمات نگارش یار در اعتراض به قرار دادسرا</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-1">
              <h4 className="font-bold text-white">۱. آموزش رایگان حقوقی</h4>
              <p className="text-slate-400">
                مطالعه راهنماها و مقالات پایگاه دانش درباره نحوه اعتراض به قرارهای دادسرا و مواد آیین دادرسی کیفری.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-1">
              <h4 className="font-bold text-[#E5C158]">۲. تنظیم لایحه توسط نگارش یار</h4>
              <p className="text-slate-400">
                بررسی پرونده، استناد به مواد قانونی، تنظیم دفاعیات منظم و تحویل فایل Word و PDF ظرف چند ساعت جهت ثبت در ثنا.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-1">
              <h4 className="font-bold text-sky-400">۳. معرفی وکیل منصف</h4>
              <p className="text-slate-400">
                برای پرونده‌های کیفری سنگین، پیچیده یا مواردی که نیاز به حضور وکیل در جلسه رسیدگی دادگاه دارند، از بخش <Link href="/lawyer-referral" className="text-[#E5C158] underline font-bold">معرفی وکیل منصف</Link> اقدام کنید.
              </p>
            </div>
          </div>
        </div>

        {/* Action Conversion Box */}
        <div className="bg-gradient-to-r from-[#111827] via-[#0D1424] to-[#111827] border-2 border-[#E5C158]/50 rounded-3xl p-6 sm:p-8 text-center space-y-4 shadow-xl shadow-[#E5C158]/10">
          <h3 className="text-xl sm:text-2xl font-black text-white">
            قصد اعتراض به قرار منع تعقیب و جلب به دادرسی متهم را دارید؟
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            مهلت ۱۰ روزه شما در حال سپری شدن است. با تنظیم لایحه‌ای مستدل و تخصصی توسط کارشناسان ارشد نگارش یار، زمینه نقض قرار دادسرا و احقاق حق خود را فراهم آورید.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/request?service=objection-non-prosecution-order"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#070B15] font-black text-sm shadow-lg shadow-[#E5C158]/20 hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <span>درخواست تنظیم فوری لایحه اعتراض به منع تعقیب</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <Link
              href="/samples/non-prosecution-objection"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-bold text-xs sm:text-sm hover:text-white transition-colors"
            >
              مشاهده نمونه لایحه اعتراض
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
