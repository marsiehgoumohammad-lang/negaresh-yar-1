import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import {
  Scale,
  Layers,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  AlertCircle,
  FileCheck2,
  KeyRound,
  ShieldAlert,
  Building,
  Clock,
} from 'lucide-react';

export function ContractDraftingGuideSection() {
  return (
    <section className="relative space-y-12">
      <Container>
        {/* Header Badge & Title */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold">
            <Sparkles className="w-4 h-4" />
            <span>راهنمای جامع حقوقی تنظیم و بازبینی قراردادها</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            اصول، ضوابط قانونی و شروط سرنوشت ساز در تنظیم انواع قراردادها
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            بررسی تخصصی شرایط اساسی صحت معاملات، شروط ضمن عقد، وجه التزام روزانه، تضامین چک صیادی، الزامات قانون الزام به ثبت رسمی معاملات املاک و پیشگیری از نزاع در محاکم دادگستری.
          </p>
        </div>

        {/* Module 1: Legal Nature & Foundation */}
        <div id="contract-nature" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۱. ماهیت حقوقی قرارداد و اصل لزوم (ماده ۱۰ و ۲۱۹ قانون مدنی)
            </h3>
          </div>
          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              در نظام حقوقی ایران، قراردادها بر پایه اصل حاکمیت اراده و اصل لزوم استوار هستند. مطابق ماده ۱۰ قانون مدنی، قراردادهای خصوصی نسبت به کسانی که آن را منعقد نموده اند در صورتی که مخالف صریح قانون آمره نباشد نافذ است. این ماده بنیادین، به طرفین اجازه می دهد هرگونه توافق مالی، تجاری، مشارکتی یا استخدامی را حتی در قالب های نامعین و فراتر از عقود معین سنتی تنظیم کنند.
            </p>
            <p>
              همچنین بر اساس ماده ۲۱۹ قانون مدنی، اصل بر لزوم قراردادها است؛ بدین معنا که عقودی که بر طبق قانون واقع شده باشد بین متعاملین و قائم مقام قانونی آنها لازم الاتباع است مگر اینکه به رضایت طرفین (اقاله) یا به علت قانونی (فسخ) برهم خورد. علاوه بر آن، طبق ماده ۲۲۰ قانون مدنی، عقد نه تنها طرفین را به اجرای مندرجات صریح ملزم می دارد، بلکه به تمام نتایجی که به موجب عرف، عادت یا قانون از عقد حاصل می شود نیز متعهد می کند.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <span className="text-[#E5C158] font-bold text-sm block">اصل آزادی قراردادها (ماده ۱۰)</span>
              <p className="text-xs text-slate-400 leading-relaxed">
                اعتبار قانونی کلیه توافقات مشروع خصوصی مشروط بر عدم مغایرت با قوانین آمره و نظم عمومی جامعه.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <span className="text-[#E5C158] font-bold text-sm block">اصل لزوم و وفای به عهد (ماده ۲۱۹)</span>
              <p className="text-xs text-slate-400 leading-relaxed">
                غیرقابل برهم زدن یک طرفه قرارداد به جز در موارد پیش بینی خیار فسخ، انفساخ قانونی یا تراضی بر اقاله.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <span className="text-[#E5C158] font-bold text-sm block">الزام به نتایج عرفی و قانونی (ماده ۲۲۰)</span>
              <p className="text-xs text-slate-400 leading-relaxed">
                شمول کلیه تعهدات تبعی، هزینه های انتقال، تحویل مدارک و لواحق معامله حتی در صورت سکوت متن قرارداد.
              </p>
            </div>
          </div>
        </div>

        {/* Module 2: Essential Validity Requirements (Article 190) */}
        <div id="validity-requirements" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۲. ارکان چهارگانه صحت معامله بر اساس ماده ۱۹۰ قانون مدنی
            </h3>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            برای آنکه هر قراردادی از منظر مراجع قضایی دارای اعتبار باشد و با ادعای بطلان مواجه نشود، وجود همزمان ۴ شرط اساسی تصریح شده در ماده ۱۹۰ قانون مدنی الزامی است:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>۱. قصد طرفین و رضای آنها</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                طرفین باید با اراده آزاد، آگاهی کامل و بدون اکراه، اجبار مادی یا اشتباه موثر در خود موضوع معامله توافق کنند. معاملات ناشی از اکراه یا مستی غیرنافذ یا باطل خواهند بود.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>۲. اهلیت طرفین معامله</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                طرفین باید بالغ، عاقل و رشید باشند. معامله با محجورین، افراد ورشکسته (در امور مالی بدون اجازه مدیر تصفیه) یا اشخاص فاقد اختیار نمایندگی رسمی فاقد نفوذ حقوقی است.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>۳. موضوع معین که مورد معامله باشد</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                مال یا تعهدی که مورد قرارداد است باید معلوم و معین باشد و ابهام اساسی نداشته باشد. مقدار، جنس و وصف مبیع باید به گونه ای باشد که موجب غرور و جهل فاحش نگردد.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>۴. مشروعیت جهت معامله</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                لازم نیست جهت معامله تصریح شود، اما اگر در متن قرارداد قید گردد، باید کاملا مشروع و منطبق بر قوانین باشد؛ قرارداد برای اهداف نامشروع باطل و فاقد هرگونه اثر است.
              </p>
            </div>
          </div>
        </div>

        {/* Module 3: Critical Clauses & Liquidated Damages */}
        <div id="critical-clauses" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <KeyRound className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۳. بندهای حیاتی قرارداد: وجه التزام روزانه، خیارات و مواعد
            </h3>
          </div>
          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              یک قرارداد استاندارد نباید صرفا به ذکر موضوع و مبلغ اکتفا کند. ساختار حمایتی قرارداد در بندهای فرعی و شروط ضمن عقد نهفته است:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                <span className="text-[#E5C158] font-bold text-sm sm:text-base flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  وجه التزام تاخیر در تعهد (ماده ۲۳۰ قانون مدنی)
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  طبق ماده ۲۳۰ قانون مدنی، اگر در معامله شرط شود که در صورت تخلف، متخلف مبلغی به عنوان خسارت پرداخت کند، دادگاه نمی تواند او را به بیشتر یا کمتر از آن محکوم سازد. برای اعمال صحیح این ضمانت، باید صراحتا درج شود که پرداخت وجه التزام روزانه بدل از اصل تعهد نیست، بلکه متعهد علاوه بر پرداخت خسارت تاخیر روزانه، ملزم به ایفای عین تعهد (تحویل ملک، تنظیم سند یا تکمیل کار) خواهد بود.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                <span className="text-[#E5C158] font-bold text-sm sm:text-base flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4" />
                  مدیریت آگاهانه اسقاط خیارات
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  اسقاط کافه خیارات به معنای سلب اختیارات برهم زدن معامله (غبن، عیب، رویت و...) است. اما نباید خیار تدلیس (فریبکاری عمدی) و خیار تخلف از شرط را ساقط کرد؛ زیرا در صورت عدم ایفای شروط اساسی یا کشف تقلب، راه احقاق حق در مراجع قضایی با دشواری های پیچیده اثباتی روبرو خواهد شد.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Module 4: Real Estate Law 1403 & Registration Requirements */}
        <div id="registration-law" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۴. الزامات قانون الزام به ثبت رسمی معاملات اموال غیرمنقول مصوب ۱۴۰۳
            </h3>
          </div>
          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              با تصویب و اجرای قانون الزام به ثبت رسمی معاملات اموال غیرمنقول مصوب ۱۴۰۳/۰۲/۲۶ مجمع تشخیص مصلحت نظام، رژیم حقوقی اسناد عادی در حوزه املاک دستخوش تغییر بنیادین شده است. بر اساس این قانون، دعاوی راجع به معاملات املاک دارای سند حدنگار (سبز رنگ) که پس از موعد مقرر قانونی به صورت عادی و خارج از سامانه های رسمی تنظیم شوند، در مراجع قضایی و ادارات دولتی با محدودیت های شدید اثباتی و عدم پذیرش مواجه می گردند.
            </p>
            <p>
              بنابراین در معاملات ملکی جدید، پیش نویس های اولیه باید با هدف ثبت رسمی در سامانه های الکترونیک سازمان ثبت اسناد (نظیر سامانه کاتب) یا دفاتر اسناد رسمی تدوین شوند و تعهدات طرفین نسبت به زمان بندی حضور در دفترخانه و انتقال سند رسمی با ضمانت اجراهای دقیق مجهز گردند.
            </p>
          </div>
        </div>

        {/* Module 5: Dispute Resolution: Arbitration vs Courts */}
        <div id="dispute-resolution" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۵. حل اختلاف: ارزیابی واقع بینانه شرط داوری در برابر دادگاه
            </h3>
          </div>
          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              گنجاندن شرط داوری در قراردادها اگرچه می تواند روند رسیدگی را تخصصی تر سازد، اما مزیت قطعی در همه احوال نیست. انتخاب میان دادگاه یا داور باید با شناخت دقیق شرایط معامله صورت پذیرد:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <span className="text-emerald-400 font-bold text-sm block">مزایا و مخاطرات شرط داوری</span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li>• رسیدگی غیرعلنی، تخصصی و منعطف تر نسبت به تشریفات دادرسی.</li>
                  <li>• اما در صورت فوت داور، امتناع از صدور رای، یا نقص در ابلاغ، پرونده با چالش های ابطال رای داور در دادگاه مواجه می شود.</li>
                  <li>• داور مرضی الطرفین باید شخصا بی طرف، دارای صلاحیت و با قبولی کتبی داوری تعیین شود.</li>
                </ul>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <span className="text-blue-400 font-bold text-sm block">صلاحیت دادگاه های عمومی حقوقی</span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li>• برخورداری از ضمانت اجرای مستقیم مراجع اجرای احکام مدنی.</li>
                  <li>• وجود مراحل تجدیدنظرخواهی و فرجام خواهی جهت تصحیح اشتباهات حکمی.</li>
                  <li>• اما ممکن است با اطاله دادرسی و نوبت های طولانی مواجه باشد.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Module 6: Comparative Decision Matrix */}
        <div id="comparison-matrix" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۶. جدول مقایسه روش های تنظیم قرارداد و سطح ریسک حقوقی
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs sm:text-sm text-slate-300 border-collapse">
              <thead>
                <tr className="border-b border-slate-700 bg-slate-900/90 text-white">
                  <th className="p-3 sm:p-4 font-bold">روش تنظیم</th>
                  <th className="p-3 sm:p-4 font-bold">میزان انطباق با معامله</th>
                  <th className="p-3 sm:p-4 font-bold">سطح ریسک حقوقی</th>
                  <th className="p-3 sm:p-4 font-bold">هزینه و زمان</th>
                  <th className="p-3 sm:p-4 font-bold">کاربرد پیشنهادی</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                <tr className="hover:bg-slate-900/50">
                  <td className="p-3 sm:p-4 font-semibold text-white">الگوی خام اینترنتی / بنگاهی</td>
                  <td className="p-3 sm:p-4 text-slate-400">عمومی و بدون شروط اختصاصی</td>
                  <td className="p-3 sm:p-4 text-rose-400 font-semibold">بسیار بالا (ابهام و ناهماهنگی)</td>
                  <td className="p-3 sm:p-4 text-emerald-400">رایگان و فوری</td>
                  <td className="p-3 sm:p-4">آشنایی اولیه با ساختار کلی توافق</td>
                </tr>
                <tr className="hover:bg-slate-900/50 bg-[#E5C158]/5">
                  <td className="p-3 sm:p-4 font-bold text-[#E5C158]">تنظیم تخصصی نگارش یار</td>
                  <td className="p-3 sm:p-4 text-slate-200">سفارشی سازی کامل با تحلیل مدارک</td>
                  <td className="p-3 sm:p-4 text-emerald-400 font-bold">حداقل ریسک و محافظت شده</td>
                  <td className="p-3 sm:p-4 text-slate-200">هزینه منصفانه، تحویل ۱ تا ۲ روزه</td>
                  <td className="p-3 sm:p-4 font-medium text-white">انواع معاملات ملکی، شراکت، تجاری و کاری</td>
                </tr>
                <tr className="hover:bg-slate-900/50">
                  <td className="p-3 sm:p-4 font-semibold text-white">وکیل پایه یک دادگستری</td>
                  <td className="p-3 sm:p-4 text-slate-200">سفارشی به همراه حضور در مذاکرات</td>
                  <td className="p-3 sm:p-4 text-emerald-400 font-semibold">بسیار پایین</td>
                  <td className="p-3 sm:p-4 text-amber-400">حق الوکاله بالا و نیاز به هماهنگی حضوری</td>
                  <td className="p-3 sm:p-4">قراردادهای کلان شرکتی میلیاردی و سرمایه گذاری خارجی</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Module 7: Fatal Mistakes to Avoid */}
        <div id="fatal-mistakes" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۷. خطاهای مهلک در تنظیم و امضای قراردادها
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-2">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>خطای قرمز: ابهام در مشخصات مبیع یا ثمن</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                عدم قید دقیق پلاک ثبتی فرعی و اصلی، کد پستی ده رقمی، شماره شاسی، یا عدم تفکیک مبالغ نقدی و مواعد چک های پرداختی که می تواند به ادعای بطلان معامله بینجامد.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>هشدار زرد: تضامین نامعتبر یا بدون شناسه</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                دریافت چک های ضمانت فاقد ثبت در سامانه صیاد، یا چک هایی که عنوان تضمین در آنها قید نشده و می تواند منجر به ادعاهای کیفری خیانت در امانت یا عدم امکان وصول گردد.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-blue-950/20 border border-blue-500/30 space-y-2">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>نکته آبی: عدم امضای کلیه صفحات و پیوست ها</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                اکتفا به امضای صفحه آخر قرارداد. تمام صفحات، جداول مالی، مشخصات فنی و الحاقیه ها باید به امضا و اثر انگشت طرفین و شهود معتمد برسد.
              </p>
            </div>
          </div>
        </div>

        {/* Module 8: 3-Tier Clarity Box */}
        <div id="options-clarity" className="bg-gradient-to-b from-[#0D1424] to-[#080D1A] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 mb-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              شفاف سازی گزینه های شما: از الگوی رایگان تا وکیل متخصص
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              متناسب با اهمیت مالی و پیچیدگی رابطه قراردادی، بهترین مسیر را انتخاب کنید:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tier 1 */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-400 px-3 py-1 rounded-full bg-slate-800 inline-block">
                  لایه ۱: توانمندسازی رایگان
                </span>
                <h4 className="text-base font-bold text-white">بانک ۲۸ نمونه قرارداد رایگان</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  مشاهده و کپی رایگان متون استاندارد انواع قراردادهای ملکی، تجاری، خودرو و کار برای معاملات ساده و کسب آگاهی اولیه.
                </p>
              </div>
              <Link
                href="/samples/contracts"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold text-center transition-colors block"
              >
                مشاهده بانک نمونه قراردادها
              </Link>
            </div>

            {/* Tier 2 */}
            <div className="p-6 rounded-2xl bg-slate-900 border-2 border-[#E5C158] flex flex-col justify-between space-y-4 relative shadow-xl shadow-[#E5C158]/5">
              <div className="space-y-3">
                <span className="text-xs font-bold text-[#070B15] px-3 py-1 rounded-full bg-[#E5C158] inline-block">
                  لایه ۲: تنظیم تخصصی نگارش یار
                </span>
                <h4 className="text-base font-bold text-white">تنظیم و بازبینی سفارشی</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  تنظیم دقیق بندهای اختصاصی، موازنه تعهدات، وجه التزام روزانه و تضامین معتبر توسط کارشناس حقوقی در فرمت Word و PDF.
                </p>
              </div>
              <Link
                href="/request?service=contract-drafting"
                className="w-full py-2.5 px-4 rounded-xl bg-[#E5C158] hover:bg-[#d4b046] text-[#070B15] text-xs font-bold text-center transition-colors block"
              >
                سفارش تنظیم قرارداد اختصاصی
              </Link>
            </div>

            {/* Tier 3 */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-400 px-3 py-1 rounded-full bg-slate-800 inline-block">
                  لایه ۳: معرفی وکیل دادگستری
                </span>
                <h4 className="text-base font-bold text-white">معرفی وکیل پایه یک منصف</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  مناسب برای معاملات فوق سنگین تجاری، مشارکت های بزرگ چند میلیاردی یا حضور وکیل در جلسات مذاکره طرفین.
                </p>
              </div>
              <Link
                href="/lawyer-referral"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold text-center transition-colors block"
              >
                معرفی وکیل دادگستری
              </Link>
            </div>
          </div>
        </div>

        {/* Module 9: Bidirectional Links to Sample Inventory */}
        <div className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <FileCheck2 className="w-5 h-5 text-[#E5C158]" />
              <h3 className="text-lg sm:text-xl font-bold text-white">
                دسترسی سریع به الگوهای شاخص قراردادهای رسمی
              </h3>
            </div>
            <Link
              href="/samples/contracts"
              className="text-xs text-[#E5C158] hover:underline flex items-center gap-1"
            >
              <span>مشاهده تمام ۲۸ نمونه قرارداد</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              {
                title: 'قرارداد اجاره آپارتمان مسکونی',
                slug: 'residential-lease-contract',
                tag: 'تخلیه فوری ۱۳۷۶',
              },
              {
                title: 'مبایعه نامه خرید و فروش ملک',
                slug: 'property-sales-contract',
                tag: 'تعیین وجه التزام',
              },
              {
                title: 'قرارداد مشارکت در ساخت',
                slug: 'partnership-in-construction-contract',
                tag: 'تضامین مهندسی',
              },
              {
                title: 'قرارداد اجاره مغازه و تجاری',
                slug: 'commercial-lease-contract',
                tag: 'اسقاط سرقفلی',
              },
              {
                title: 'مبایعه نامه خرید و فروش خودرو',
                slug: 'car-sales-contract',
                tag: 'فک پلاک و سلامت فنی',
              },
              {
                title: 'قرارداد کار با مدت معین',
                slug: 'employment-fixed-term-contract',
                tag: 'قانون کار و تامین اجتماعی',
              },
              {
                title: 'قرارداد مشارکت مدنی و تجاری',
                slug: 'business-partnership-contract',
                tag: 'تقسیم سود و خروج شریک',
              },
              {
                title: 'قرارداد صلح عمری با حق سکنی',
                slug: 'life-peace-deed-contract',
                tag: 'معاف از ارث و مالیات',
              },
            ].map((sample, idx) => (
              <Link
                key={idx}
                href={`/samples/${sample.slug}`}
                className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-[#E5C158]/40 transition-colors flex flex-col justify-between group"
              >
                <span className="text-xs font-bold text-white group-hover:text-[#E5C158] transition-colors leading-snug">
                  {sample.title}
                </span>
                <span className="text-[10px] text-slate-400 mt-2 block">
                  {sample.tag}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
