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
  AlertCircle,
  FileText,
  AlertTriangle,
  HeartHandshake,
  BookOpen,
  Check,
  XCircle,
  FileCheck2,
} from 'lucide-react';

export function ConditionalReleaseGuideSection() {
  return (
    <section className="relative space-y-12">
      <Container>
        {/* Header Badge & Title */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold">
            <Sparkles className="w-4 h-4" />
            <span>راهنمای جامع حقوقی آزادی مشروط زندانیان و امور اجرای احکام کیفری</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            راهنمای کامل آزادی مشروط، شرایط ماده ۵۸، مراحل و تنظیم درخواست
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            بررسی دقیق ماده ۵۸ قانون مجازات اسلامی، نصاب مدت حبس، نحوه اخذ گزارش حسن رفتار از شورای طبقه‌بندی زندان، جبران خسارت شاکی و مراحل ثبت لایحه در دادگاه صادرکننده رأی.
          </p>
        </div>

        {/* Section 1: What is Conditional Release */}
        <div id="what-is-conditional-release" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Gavel className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۱. آزادی مشروط چیست و چه تفاوتی با آزادی کامل دارد؟
            </h3>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              <strong>آزادی مشروط (Parole / Conditional Release)</strong> یکی از مهم‌ترین نهادهای ارفاقی و اصلاحی در حقوق کیفری ایران است که به محکومان به حبس تعزیری این فرصت را می‌دهد تا پیش از پایان کامل دوره محکومیت، از زندان آزاد شده و باقی‌مانده مدت کیفر خود را تحت نظارت قانون در جامعه سپری نمایند.
            </p>
            <p>
              <strong>هدف اصلی قانون‌گذار</strong> از پیش‌بینی آزادی مشروط، کاهش جمعیت کیفری زندان‌ها، تشویق زندانیان به اصلاح و بازپروری رفتاری، و کمک به بازگشت سریع‌تر و سالم‌تر فرد به کانون خانواده و اشتغال سالم است.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                  <UserCheck className="w-4 h-4" />
                  <h4>فرصت بازگشت به جامعه</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  زندانی با اثبات ندامت و اصلاح رفتار، می‌تواند بقیه حبس خود را در کنار خانواده بگذراند و شغل خود را بازیابد.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <h4>تکالیف نظارتی و تعلیقی</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  فرد موظف است در دوره آزادی مشروط دستورات دادگاه (مثل عدم ارتکاب جرم عمدی، معرفی دوره‌ای یا گذراندن دوره بازپروری) را رعایت کند.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                  <AlertTriangle className="w-4 h-4" />
                  <h4>تفاوت اساسی با آزادی قطعی</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  در آزادی مشروط در صورت ارتکاب جرم عمدی جدید یا نقض دستورات دادگاه، آزادی لغو شده و فرد برای تحمل باقیمانده حبس به زندان بازمی‌گردد.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#070B15] border border-amber-500/20 text-amber-200 text-xs sm:text-sm leading-relaxed">
              <strong>نکته مهم:</strong> آزادی مشروط حق مطلق زندانی نیست، بلکه یک «تسهیل و ارفاق قضایی» است که صدور آن مستلزم احراز شرایط قانونی، تایید رفتار در زندان و موافقت قاضی دادگاه صادرکننده حکم قطعی است.
            </div>
          </div>
        </div>

        {/* Section 2: Legal conditions under Article 58 */}
        <div id="legal-conditions-article-58" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۲. شرایط قانونی آزادی مشروط بر اساس ماده ۵۸ قانون مجازات اسلامی
            </h3>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              مطابق با <strong>ماده ۵۸ قانون مجازات اسلامی (مصوب ۱۳۹۲)</strong>، دادگاه صادرکننده حکم قطعی می‌تواند به پیشنهاد دادستان یا قاضی اجرای احکام پس از گذراندن مدت زمان معین با آزادی مشروط محکوم‌علیه موافقت نماید. شرایط اساسی به شرح زیر است:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <Clock className="w-5 h-5" />
                  <h4>شرط اول: نصاب زمانی تحمل مدت حبس</h4>
                </div>
                <ul className="text-xs sm:text-sm text-slate-300 space-y-2 list-disc list-inside leading-relaxed">
                  <li><strong>حبس بیش از ۱۰ سال:</strong> گذراندن حداقل <strong>نصف (یک‌دوم)</strong> از کل مدت مجازات حبس.</li>
                  <li><strong>حبس ۱۰ سال و کمتر:</strong> گذراندن حداقل <strong>یک‌سوم (۱/۳)</strong> از مدت مجازات حبس.</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <HeartHandshake className="w-5 h-5" />
                  <h4>شرط دوم: حسن اخلاق و رفتار در زندان</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  محکوم‌علیه در مدت اجرای مجازات همواره از خود حسن اخلاق و رفتار نشان دهد به‌گونه‌ای که شورای طبقه‌بندی و ریاست زندان رفتار مثبت وی را کتباً تایید کنند.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <UserCheck className="w-5 h-5" />
                  <h4>شرط سوم: پیش‌بینی عدم ارتکاب جرم مجدد</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  اوضاع و احوال و سوابق رفتاری محکوم نشان دهد که پس از آزادی مرتکب جرم دیگری نخواهد شد و برای نظم جامعه خطری ندارد.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <FileCheck2 className="w-5 h-5" />
                  <h4>شرط چهارم: جبران ضرر و زیان یا تعهد به آن</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  محکوم‌علیه تا آنجا که استطاعت دارد ضرر و زیان مورد حکم را پرداخت کرده یا برای پرداخت آن با شاکی توافق نموده یا ترتیب پرداخت و تامین آن را بدهد.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 text-xs sm:text-sm leading-relaxed">
              <strong>عدم استفاده قبلی:</strong> آزادی مشروط برای هر محکوم در هر مجازات تنها یک بار قابل اعمال است. در صورتی که فرد قبلاً از آزادی مشروط استفاده کرده و به دلیل تخلف لغو شده باشد، امکان استفاده مجدد نخواهد داشت.
            </div>
          </div>
        </div>

        {/* Section 3: Who can apply */}
        <div id="who-can-apply" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۳. چه کسانی می‌توانند درخواست آزادی مشروط بدهند و نقش مراجع چیست؟
            </h3>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              تمامی <strong>محکومان به مجازات‌های حبس تعزیری</strong> (اعم از درجات ۱ تا ۸) که نصاب قانونی را سپری کرده باشند، حق دارند تقاضای آزادی مشروط خود را مطرح کنند. این درخواست می‌تواند توسط خود زندانی، وکیل دادگستری یا بستگان درجه یک وی پیگیری شود.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
                <div className="text-[#E5C158] font-bold text-sm">شورای طبقه‌بندی زندان</div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  بررسی اخلاق و رفتار زندانی، شرکت در دوره‌های آموزشی، فرهنگی و حفظ قرآن و صدور گواهی حسن اخلاق و پیشرفت اصلاحی.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
                <div className="text-[#E5C158] font-bold text-sm">قاضی اجرای احکام و دادیار ناظر</div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  بررسی استحقاق قانونی، کنترل وضعیت شاکی خصوصی و رد مال و ارسال پرونده با اظهارنظر موافق به دادگاه صادرکننده رأی.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
                <div className="text-[#E5C158] font-bold text-sm">دادگاه صادرکننده حکم قطعی</div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  مرجع نهایی تصمیم‌گیری (دادگاه کیفری یک، کیفری دو یا دادگاه تجدیدنظر استان) که پس از بررسی گزارش‌ها دادنامه آزادی مشروط را صادر می‌کند.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Step-by-step process */}
        <div id="step-by-step-process" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۴. مراحل گام‌به‌گام درخواست و اخذ آزادی مشروط
            </h3>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2 relative">
                <div className="w-7 h-7 rounded-full bg-[#E5C158] text-slate-950 font-black flex items-center justify-center text-xs">
                  ۱
                </div>
                <h4 className="font-bold text-white text-sm">بررسی شرایط محکوم‌علیه</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  محاسبه دقیق مدت حبس سپری شده (یک‌سوم یا نصف)، بررسی وضعیت رضایت شاکی یا جبران ضرر و زیان.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2 relative">
                <div className="w-7 h-7 rounded-full bg-[#E5C158] text-slate-950 font-black flex items-center justify-center text-xs">
                  ۲
                </div>
                <h4 className="font-bold text-white text-sm">تهیه درخواست یا لایحه مستدل</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  تنظیم لایحه رسمی با استناد به ماده ۵۸ و پیوست نمودن مدارک ندامت، عدم سابقه و تعهدات خانوادگی.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2 relative">
                <div className="w-7 h-7 rounded-full bg-[#E5C158] text-slate-950 font-black flex items-center justify-center text-xs">
                  ۳
                </div>
                <h4 className="font-bold text-white text-sm">ارسال گزارش زندان و اجرای احکام</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  طرح موضوع در شورای طبقه‌بندی زندان، اخذ تاییدیه اخلاقی و ارجاع پرونده از دادیار ناظر به قاضی اجرای احکام.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2 relative">
                <div className="w-7 h-7 rounded-full bg-[#E5C158] text-slate-950 font-black flex items-center justify-center text-xs">
                  ۴
                </div>
                <h4 className="font-bold text-white text-sm">بررسی توسط مرجع قضایی</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  ارسال پرونده به دادگاه بدوی یا تجدیدنظر صادرکننده حکم قطعی جهت بررسی ماهوی و احراز شرایط.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2 relative">
                <div className="w-7 h-7 rounded-full bg-[#E5C158] text-slate-950 font-black flex items-center justify-center text-xs">
                  ۵
                </div>
                <h4 className="font-bold text-white text-sm">صدور تصمیم و آزادی زندانی</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  صدور دادنامه آزادی مشروط با تعیین مدت نظارت (بین ۱ تا ۵ سال) و ابلاغ به زندان جهت ترخیص زندانی.
                </p>
              </div>
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
              ۵. جدول مقایسه تطبیقی: آزادی مشروط، مرخصی، عفو و تعلیق مجازات
            </h3>
          </div>

          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            بسیاری از خانواده‌ها و محکومان تفاوت این نهادهای ارفاقی را نمی‌دانند. جدول زیر تفاوت‌های کاربردی هریک را مشخص می‌کند:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-slate-800 bg-[#070B15] text-slate-300 text-xs sm:text-sm">
                  <th className="p-3 sm:p-4 font-bold">عنوان تسهیل قانونی</th>
                  <th className="p-3 sm:p-4 font-bold">مرجع تصمیم‌گیرنده</th>
                  <th className="p-3 sm:p-4 font-bold">زمان استفاده</th>
                  <th className="p-3 sm:p-4 font-bold">اثر حقوقی</th>
                  <th className="p-3 sm:p-4 font-bold">مدت زمان</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-xs sm:text-sm text-slate-300">
                <tr className="hover:bg-slate-800/20 transition-colors">
                  <td className="p-3 sm:p-4 font-bold text-[#E5C158]">آزادی مشروط (ماده ۵۸)</td>
                  <td className="p-3 sm:p-4">دادگاه صادرکننده حکم قطعی به پیشنهاد قاضی اجرای احکام</td>
                  <td className="p-3 sm:p-4">پس از سپری شدن ۱/۳ یا نصف حبس</td>
                  <td className="p-3 sm:p-4">خروج قطعی از زندان تا پایان مدت حبس با رعایت دستورات</td>
                  <td className="p-3 sm:p-4">معادل باقی‌مانده مدت حبس (۱ تا ۵ سال)</td>
                </tr>
                <tr className="hover:bg-slate-800/20 transition-colors">
                  <td className="p-3 sm:p-4 font-bold text-sky-400">مرخصی زندان</td>
                  <td className="p-3 sm:p-4">شورای طبقه‌بندی زندان و دادیار ناظر</td>
                  <td className="p-3 sm:p-4">در طول تحمل حبس با داشتن امتیاز لازم</td>
                  <td className="p-3 sm:p-4">خروج موقت با تودیع وثیقه یا کفالت</td>
                  <td className="p-3 sm:p-4">چند روز تا یک ماه (قابل تمدید)</td>
                </tr>
                <tr className="hover:bg-slate-800/20 transition-colors">
                  <td className="p-3 sm:p-4 font-bold text-emerald-400">عفو عمومی / مناسبتی</td>
                  <td className="p-3 sm:p-4">کمیسیون عفو، رییس قوه قضاییه و مقام رهبری</td>
                  <td className="p-3 sm:p-4">در مناسبت‌های ملی و مذهبی اعلامی</td>
                  <td className="p-3 sm:p-4">بخشش کامل یا تقلیل بخشی از مجازات حبس</td>
                  <td className="p-3 sm:p-4">دائمی و بدون بازگشت</td>
                </tr>
                <tr className="hover:bg-slate-800/20 transition-colors">
                  <td className="p-3 sm:p-4 font-bold text-purple-400">تعلیق اجرای مجازات (ماده ۴۶)</td>
                  <td className="p-3 sm:p-4">دادگاه صادرکننده حکم در زمان صدور رأی یا پس از ۱/۳ حبس</td>
                  <td className="p-3 sm:p-4">هنگام صدور حکم یا پس از سپری شدن ۱/۳ حبس</td>
                  <td className="p-3 sm:p-4">توقف موقت اجرای مجازات تا پایان مدت تعلیق</td>
                  <td className="p-3 sm:p-4">۱ تا ۵ سال</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 6: Reasons for Rejection */}
        <div id="reasons-for-rejection" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۶. دلایل رد درخواست آزادی مشروط چیست؟
            </h3>
          </div>

          <div className="space-y-3 text-slate-300 text-xs sm:text-sm leading-relaxed">
            <p>
              رد درخواست آزادی مشروط معمولاً ناشی از عدم انطباق پرونده با الزامات ماده ۵۸ است. عمده‌ترین دلایل عبارتند از:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">عدم احراز اصلاح رفتار و گزارش منفی زندان</h4>
                  <p className="text-xs text-slate-400 mt-1">تخلفات انضباطی در داخل بند، نزاع یا عدم شرکت در برنامه‌های اصلاحی زندان.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">عدم جبران خسارت شاکی یا تعیین تکلیف رد مال</h4>
                  <p className="text-xs text-slate-400 mt-1">وجود شاکی خصوصی که خسارت او جبران نشده و تلاشی برای مصالحه یا جلب رضایت صورت نگرفته است.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">نرسیدن به حداقل مدت حبس قانونی</h4>
                  <p className="text-xs text-slate-400 mt-1">ثبت درخواست پیش از سپری شدن یک‌سوم (در حبس زیر ۱۰ سال) یا نصف (در حبس بالای ۱۰ سال).</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">سابقه استفاده قبلی از آزادی مشروط</h4>
                  <p className="text-xs text-slate-400 mt-1">قانون صراحتاً اجازه استفاده مجدد از آزادی مشروط را به محکومانی که قبلاً بهره‌مند شده‌اند نمی‌دهد.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 7: Common Mistakes */}
        <div id="common-mistakes" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۷. اشتباهات مهلک در تنظیم و پیگیری درخواست آزادی مشروط
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="font-bold text-amber-400">۱. درخواست بدون بررسی دقیق نصاب زمانی</div>
              <p className="text-slate-400 leading-relaxed">
                ارسال درخواست پیش از موعد باعث رد سریع توسط دادیار ناظر و ایجاد ذهنیت منفی در پرونده ثبتی زندانی می‌شود.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="font-bold text-amber-400">۲. تنظیم متن احساسی بدون استدلال حقوقی</div>
              <p className="text-slate-400 leading-relaxed">
                قضات به مواد قانونی، سابقه حسن اخلاق، گواهی زندان و برنامه‌ریزی اشتغال توجه دارند، نه صرفاً درد دل‌های خانوادگی.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="font-bold text-amber-400">۳. بی‌توجهی به گزارش اصلاحی زندان</div>
              <p className="text-slate-400 leading-relaxed">
                بدون هماهنگی با مددکاری و شورای طبقه‌بندی زندان، شانس موافقت قاضی اجرای احکام به شدت کاهش می‌یابد.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="font-bold text-amber-400">۴. تصور آزادی قطعی بلافاصله پس از ثبت درخواست</div>
              <p className="text-slate-400 leading-relaxed">
                فرایند بررسی پرونده بین شورای زندان، اجرای احکام و دادگاه مدتی زمان می‌برد و نیازمند پیگیری مستمر است.
              </p>
            </div>
          </div>
        </div>

        {/* Section 8: Conversion Pathways (Three user paths) */}
        <div id="conversion-pathways" className="bg-[#0D1424] border border-[#E5C158]/30 rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5C158]/10 text-[#E5C158] text-xs font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>سه مسیر راهنمایی و اقدام برای آزادی مشروط</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-black text-white">
              چگونه می‌توانید همین امروز برای آزادی زندانی خود اقدام کنید؟
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto">
              بسته به مرحله پرونده و نیاز خود، یکی از سه مسیر شفاف زیر را انتخاب فرمایید:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Path 1: Free Educational Guide */}
            <div className="p-6 rounded-2xl bg-[#070B15] border border-slate-800 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white">مسیر ۱: آموزش رایگان حقوقی</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  اگر مایلید شرایط قانونی، نحوه محاسبه روزشمار حبس و تفاوت عفو و آزادی مشروط را شخصاً مطالعه و بررسی نمایید.
                </p>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                  <li>مقاله شرایط ماده ۵۸ قانون مجازات</li>
                  <li>راهنمای تفاوت عفو با آزادی مشروط</li>
                  <li>مشاهده نمونه درخواست‌های استاندارد</li>
                </ul>
              </div>
              <div className="pt-2">
                <Link
                  href="/knowledge/how-to-request-conditional-release"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all"
                >
                  <span>مطالعه مقالات آموزشی</span>
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Path 2: Document drafting by Negaresh Yar */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#0D1424] to-[#121B2F] border-2 border-[#E5C158] flex flex-col justify-between space-y-5 relative shadow-xl shadow-[#E5C158]/5">
              <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-[#E5C158] text-slate-950 text-[11px] font-black">
                پیشنهاد اصلی نگارش یار
              </div>
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
                  <FileText className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white">مسیر ۲: تنظیم درخواست توسط نگارش یار</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  بررسی دقیق دادنامه، محاسبه زمان حبس، نگارش تخصصی و مستدل لایحه آزادی مشروط در دو نسخه Word و PDF در کمتر از ۴ ساعت کاری.
                </p>
                <ul className="text-xs text-slate-300 space-y-1.5">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>بررسی شرایط و سوابق پرونده</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>استناد به ماده ۵۸ و آرای وحدت رویه</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>ارائه دو نسخه جهت ارائه به زندان و ثنا</span>
                  </li>
                </ul>
              </div>
              <div className="pt-2">
                <Link
                  href="/request?service=conditional-release"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#E5C158] hover:bg-[#d4b046] text-slate-950 text-xs font-black transition-all shadow-md shadow-[#E5C158]/20"
                >
                  <span>ثبت سفارش تنظیم درخواست آزادی مشروط</span>
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
                  برای پرونده‌های کیفری سنگین، مجازات‌های طویل‌المدت، وجود شاکیان متعدد یا نیاز به اعلام وکالت حضوری و پیگیری در شعبه اجرای احکام.
                </p>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                  <li>ارزیابی پرونده توسط وکلای پایه یک</li>
                  <li>مذاکره با شاکی جهت اخذ رضایت</li>
                  <li>حضور و پیگیری مستمر در اجرای احکام</li>
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
