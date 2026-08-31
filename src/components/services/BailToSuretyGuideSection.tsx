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
  CreditCard,
  Briefcase,
  AlertCircle,
} from 'lucide-react';

export function BailToSuretyGuideSection() {
  return (
    <section className="relative space-y-12">
      <Container>
        {/* Header Badge & Title */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold">
            <Sparkles className="w-4 h-4" />
            <span>راهنمای جامع حقوقی تبدیل وثیقه به کفالت و تعدیل قرارهای تأمین کیفری</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            راهنمای کامل درخواست تبدیل قرار وثیقه به کفالت در دادسرا و دادگاه
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            بررسی ماده ۲۱۷ و ۲۴۳ آیین دادرسی کیفری، نحوه رهایی متهم از بازداشت با فیش حقوقی یا جواز کسب، مدارک معتبر کفیل، مراحل اداری و مقایسه انواع قرارهای تأمین.
          </p>
        </div>

        {/* Section 1: What is Bail to Surety */}
        <div id="what-is-bail-to-surety" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Gavel className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۱. تبدیل وثیقه به کفالت چیست و چه هدف قانونی دارد؟
            </h3>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              در پرونده‌های کیفری، هنگامی که بازپرس یا دادیار برای متهم <strong>«قرار وثیقه»</strong> (تودیع سند مالکیت رسمی یا وجه نقد) صادر می‌کند و متهم یا بستگان او به دلیل عدم دسترسی به سند ملکی آزاد توان تودیع آن را ندارند، متهم روانه بازداشتگاه موقت یا زندان می‌شود.
            </p>
            <p>
              <strong>«تبدیل وثیقه به کفالت» (Substitution of Bail with Surety)</strong> یک راهکار قانونی و رسمی است که به موجب آن، متهم یا وکیل او از مرجع قضایی تقاضا می‌کنند که به جای الزام به تودیع سند ملکی سنگین، <strong>«قرار کفالت»</strong> صادر شده و ضمانت شخص معتبر (نظیر کارمند رسمی دولت با فیش حقوقی یا کاسب با جواز کسب معتبر) پذیرفته شود تا متهم بلافاصله آزاد گردد.
            </p>
            <div className="p-4 rounded-xl bg-[#070B15] border border-amber-500/20 text-amber-200 text-xs sm:text-sm leading-relaxed">
              <strong>هدف قانون‌گذار از امکان تبدیل قرار:</strong> اصل بر برائت و آزادی متهم تا زمان صدور حکم قطعی است. هدف قرار تأمین صرفاً تضمین دسترسی به متهم و جبران ضرر احتمالی است، نه مجازات و حبس پیش از محاکمه. بنابراین اگر حضور متهم با معرفی کفیل معتبر تضمین شود، تبدیل وثیقه کاملاً منطبق با عدالت قضایی است.
            </div>
          </div>
        </div>

        {/* Section 2: Legal Grounds for Modifying Security Order */}
        <div id="legal-basis" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۲. مبنای قانونی تبدیل قرار تأمین و اصل تناسب تأمین کیفری
            </h3>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              مبنای بنیادین تبدیل قرار تأمین در <strong>مواد ۲۱۷، ۲۱۹ و ۲۴۳ قانون آیین دادرسی کیفری</strong> مصوب ۱۳۹۲ پیش‌بینی شده است:
            </p>
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-[#070B15] border-r-4 border-[#E5C158] text-slate-200 text-xs sm:text-sm leading-relaxed">
                <strong>ماده ۲۱۷ ق.آ.د.ک (اصل تناسب قرار):</strong> «صدور قرار تأمین باید مستدل و موجه و با نوع و اهمیت جرم، شدت مجازات، دلایل و اسباب اتهام، احتمال فرار یا مخفی شدن متهم و از بین رفتن آثار جرم، سابقه متهم، وضعیت روحی و جسمی، سن، جنس، شخصیت و حیثیت او متناسب باشد.»
              </div>
              <div className="p-4 rounded-2xl bg-[#070B15] border-r-4 border-sky-500 text-slate-200 text-xs sm:text-sm leading-relaxed">
                <strong>ماده ۲۴۳ ق.آ.د.ک (اختیار تبدیل و تخفیف تأمین):</strong> «دادگاه یا دادسرا می‌تواند در تمام مراحل تحقیقات و دادرسی، با در نظر گرفتن اوضاع‌واحوال و خصوصیات متهم، قرار تأمین صادره را به قرار خفیف‌تر تبدیل کند یا مبلغ آن را کاهش دهد...»
              </div>
            </div>
            <p>
              این احکام قانونی به روشنی بیان می‌کنند که قرار تأمین امری ثابت و تغییرناپذیر نیست و با تغییر شرایط پرونده یا اثبات عدم توانایی مالی متهم، مقام قضایی اختیار تام برای تبدیل وثیقه به کفالت دارد.
            </p>
          </div>
        </div>

        {/* Section 3: Conditions for Approval of Conversion */}
        <div id="approval-conditions" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۳. شرایط موافقت مقام قضایی با تبدیل قرار وثیقه به کفالت
            </h3>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            بازپرس یا قاضی دادگاه بر اساس چهار شاخصه کلیدی زیر با لایحه تبدیل قرار موافقت می‌نماید:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <h4>۱. تناسب قرار با نوع اتهام و خسارت</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                چنانچه جرم ارتکابی از جرایم سبک، غیرعمدی، مالی کم‌ارزش یا دارای جنبه خصوصی محدود باشد، وثیقه ملکی سنگین نامتناسب بوده و کفالت کفایت می‌کند.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <h4>۲. اثبات عجز مالی و شرایط شخصی متهم</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                ارائه مستندات فقدان ملک ثبتی، کارگری بودن شغل متهم، مستأجر بودن، سرپرستی خانوار یا بیماری که ادامه بازداشت را غیرقابل تحمل می‌سازد.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <h4>۳. معرفی کفیل معتبر و دارای ملائت</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                معرفی شخص ضامنی که اعتبار مالی یا استخدامی وی (فیش حقوقی رسمی دولتی، حکم کارگزینی یا پروانه کسب فعال) توانایی پاسخگویی به وجه‌الکفاله را تضمین کند.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <h4>۴. فقدان بیم فرار یا سابقه کیفری مؤثر</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                سکونت دائم متهم در حوزه قضایی رسیدگی‌کننده، حسن شهرت و عدم سابقه محکومیت کیفری مؤثر که اطمینان بازپرس را برای حضور در جلسات جلب کند.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Required Documents for Surety / Guarantor */}
        <div id="required-documents" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۴. مدارک لازم برای معرفی کفیل و اثبات اعتبار مالی (ملائت)
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158] flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                <span>۱. مدارک هویتی کفیل</span>
              </h4>
              <p className="text-slate-400 leading-relaxed">
                اصل و تصویر کارت ملی هوشمند، شناسنامه کفیل و ثبت‌نام قطعی در سامانه ثنا جهت ارسال ابلاغیه‌ها.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158] flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span>۲. مدارک شغلی کارمندان (فیش حقوقی)</span>
              </h4>
              <p className="text-slate-400 leading-relaxed">
                آخرین فیش حقوقی معتبر، حکم کارگزینی یا گواهی اشتغال به کار با ذکر میزان دریافتی یا گواهی کسر از حقوق.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158] flex items-center gap-2">
                <Building className="w-4 h-4" />
                <span>۳. مدارک شغلی کسبه (جواز کسب)</span>
              </h4>
              <p className="text-slate-400 leading-relaxed">
                اصل پروانه کسب معتبر دارای تاریخ انقضای فعال همراه با استعلام از درگاه ملی مجوزها یا اتحادیه مربوطه.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158] flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>۴. لایحه رسمی درخواست تبدیل قرار</span>
              </h4>
              <p className="text-slate-400 leading-relaxed">
                لایحه مدون حقوقی متضمن تشریح عجز از تودیع وثیقه، معرفی ضامن و تعهد حضور منظم متهم.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5: Steps of Request & Release */}
        <div id="steps-to-convert" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۵. مراحل گام‌به‌گام درخواست تبدیل وثیقه به کفالت و آزادی متهم
            </h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۱
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">تنظیم لایحه رسمی تبدیل قرار تأمین</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  نگارش لایحه مستدل حقوقی خطاب به بازپرس، دادیار یا رئیس شعبه دادگاه با استناد به ماده ۲۴۳ آیین دادرسی کیفری توسط متخصصان نگارش یار.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۲
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">ارائه درخواست به شعبه رسیدگی‌کننده دادسرا</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  تسلیم لایحه و مدارک ملائت ضامن به مدیر دفتر شعبه توسط متهم، وکیل یا خانواده درجه یک متهم بازداشتی.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۳
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">بررسی اعتبار کفیل و صدور قرار قبولی کفالت</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  حضور فیزیکی کفیل در شعبه، امضای برگ قرار کفالت و تفهیم تعهد حضور متهم ظرف موعد مقرر.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۴
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">صدور دستور آزادی متهم و رفع بازداشت</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  ارسال دستور آزادی فوری به زندان یا تحت‌نظرگاه و آزادی بدون معطلی متهم تا روز دادرسی نهایی.
                </p>
              </div>
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
              ۶. جدول مقایسه جامع انواع قرارهای تأمین کیفری
            </h3>
          </div>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            بررسی نوع تضامین، سرعت پذیرش در شعبه، درجه سختی تأمین و تناسب کاربردی هر یک از قرارهای تأمین:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-[#E5C158] font-bold">
                  <th className="p-3">نوع قرار تأمین</th>
                  <th className="p-3">مدارک لازم</th>
                  <th className="p-3">سرعت پذیرش</th>
                  <th className="p-3">میزان سختی تأمین</th>
                  <th className="p-3">مناسب برای چه افرادی</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr>
                  <td className="p-3 font-bold text-amber-400">وثیقه ملکی (سند رسمی)</td>
                  <td className="p-3">اصل سند تک‌برگ ۶ دانگ، نظریه کارشناس رسمی دادگستری، نامه ثبت</td>
                  <td className="p-3 text-red-400 font-bold">کند (۲ تا ۵ روز)</td>
                  <td className="p-3 text-red-400 font-bold">بسیار سخت</td>
                  <td className="p-3 text-slate-300">جرایم مالی سنگین، کلاهبرداری کلان و پرونده‌های با خسارت بالا</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-yellow-300">وثیقه نقدی</td>
                  <td className="p-3">فیش واریز نقدی به حساب سپرده دادگستری بانک ملی</td>
                  <td className="p-3 text-sky-400 font-bold">متوسط (چند ساعت)</td>
                  <td className="p-3 text-amber-400 font-bold">وابسته به موجودی</td>
                  <td className="p-3 text-slate-300">افرادی که نقدینگی دارند اما ملک آزاد ندارند</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-sky-400">قرار کفالت (ضامن)</td>
                  <td className="p-3">فیش حقوقی کارمند رسمی دولتی یا جواز کسب معتبر + کارت ملی</td>
                  <td className="p-3 text-emerald-400 font-bold">بسیار سریع (۱ تا ۲ ساعت)</td>
                  <td className="p-3 text-emerald-400 font-bold">آسان تا متوسط</td>
                  <td className="p-3 text-slate-300">اکثر متهمان، کارمندان، اصناف و جرایم خرد و متوسط</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-emerald-400">وجه التزام با قول شرف</td>
                  <td className="p-3">تعهدنامه کتبی خود متهم بدون نیاز به ضامن یا واریز وجه</td>
                  <td className="p-3 text-emerald-400 font-bold">فوری و آنی</td>
                  <td className="p-3 text-emerald-400 font-bold">بسیار آسان</td>
                  <td className="p-3 text-slate-300">جرایم غیرعمدی، حوادث رانندگی، اختلافات خانوادگی و افراد موجه</td>
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
              ۷. اشتباهات رایج در درخواست تبدیل وثیقه به کفالت
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-red-500/20 space-y-2">
              <h4 className="font-bold text-red-400">۱. معرفی کفیل فاقد اعتبار کافی</h4>
              <p className="text-slate-400 leading-relaxed">
                معرفی ضامنی با فیش حقوقی شرکتی نامعتبر، پروانه کسب منقضی یا حقوق ناکافی که سریعاً توسط بازپرس رد می‌شود.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-amber-500/20 space-y-2">
              <h4 className="font-bold text-amber-400">۲. درخواست بدون استدلال حقوقی</h4>
              <p className="text-slate-400 leading-relaxed">
                تقاضای شفاهی یا نوشتن متنی بدون استناد به مواد ۲۱۷ و ۲۴۳ قانون آیین دادرسی کیفری و اثبات عجز مالی.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-blue-500/20 space-y-2">
              <h4 className="font-bold text-sky-400">۳. تأخیر در اقدام پس از صدور قرار</h4>
              <p className="text-slate-400 leading-relaxed">
                تعلل در تقدیم لایحه که موجب انتقال متهم از بازداشتگاه موقت دادسرا به زندان عمومی و دشوارتر شدن روند می‌گردد.
              </p>
            </div>
          </div>
        </div>

        {/* Section 8: Clear Boundary Notice (Conversion Separation) */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#0C1222] via-[#0F172A] to-[#0C1222] border border-[#E5C158]/30 space-y-4">
          <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
            <CheckCircle2 className="w-5 h-5" />
            <span>تفکیک شفاف گزینه‌ها و خدمات نگارش یار در تبدیل قرار تأمین</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-1">
              <h4 className="font-bold text-white">۱. آموزش رایگان حقوقی</h4>
              <p className="text-slate-400">
                مطالعه راهنماها و مقالات پایگاه دانش درباره مقررات کفالت، شرایط ضامن و مواد آیین دادرسی کیفری در سایت.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-1">
              <h4 className="font-bold text-[#E5C158]">۲. تنظیم لایحه توسط نگارش یار</h4>
              <p className="text-slate-400">
                نگارش فوری و استدلالی لایحه درخواست تبدیل قرار وثیقه به کفالت ظرف ۳ تا ۵ ساعت جهت تقدیم اضطراری به بازپرس.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-1">
              <h4 className="font-bold text-sky-400">۳. معرفی وکیل منصف</h4>
              <p className="text-slate-400">
                برای پرونده‌های کیفری پیچیده یا با قرارهای میلیاردی که نیاز به حضور وکیل در شعبه دارند، از بخش <Link href="/lawyer-referral" className="text-[#E5C158] underline font-bold">معرفی وکیل منصف</Link> اقدام کنید.
              </p>
            </div>
          </div>
        </div>

        {/* Action Conversion Box */}
        <div className="bg-gradient-to-r from-[#111827] via-[#0D1424] to-[#111827] border-2 border-[#E5C158]/50 rounded-3xl p-6 sm:p-8 text-center space-y-4 shadow-xl shadow-[#E5C158]/10">
          <h3 className="text-xl sm:text-2xl font-black text-white">
            قصد تبدیل قرار وثیقه به کفالت و نجات متهم از بازداشت را دارید؟
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            اجازه ندهید نبود سند ملکی مانع آزادی متهم شود. با تنظیم لایحه‌ای مستدل و حقوقی بر مبنای ماده ۲۴۳ آیین دادرسی کیفری، زمینه موافقت بازپرس با کفالت را فراهم کنید.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/request?service=bail-to-surety"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#070B15] font-black text-sm shadow-lg shadow-[#E5C158]/20 hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <span>درخواست تنظیم فوری لایحه تبدیل وثیقه به کفالت</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <Link
              href="/samples/bail-to-surety"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-bold text-xs sm:text-sm hover:text-white transition-colors"
            >
              مشاهده نمونه لایحه تبدیل وثیقه
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
