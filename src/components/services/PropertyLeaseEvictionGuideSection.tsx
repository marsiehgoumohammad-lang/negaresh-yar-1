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
  ShieldCheck,
  CreditCard,
  AlertCircle,
  Clock,
  FileCheck2,
} from 'lucide-react';

export function PropertyLeaseEvictionGuideSection() {
  return (
    <section className="relative space-y-12">
      <Container>
        {/* Header Badge & Title */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold">
            <Sparkles className="w-4 h-4" />
            <span>راهنمای جامع حقوقی دعاوی املاک، روابط موجر و مستاجر و تخلیه</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            راهنمای کامل دعاوی تخلیه، خلع ید، ودیعه و اجرت المثل در مراجع قضایی
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            بررسی تخصصی قوانین روابط موجر و مستاجر مصوب ۱۳۷۶ و ۱۳۵۶، تفاوت دستور تخلیه فوری شورا با حکم دادگاه، نحوه مطالبه خسارت ایام تصرف، استرداد پول پیش و رویه قضایی اجرای احکام مدنی.
          </p>
        </div>

        {/* Module 1: Definition & Scope */}
        <div id="definition-scope" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۱. تعریف و قلمرو دعاوی ملکی و استیجاری
            </h3>
          </div>
          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              دعاوی ملکی ناشی از روابط استیجاری و تصرفات غیرقانونی، از جمله رایج ترین و در عین حال حساس ترین پرونده های حقوقی دادگستری به شمار می روند. در نظام حقوقی ایران، دعاوی مربوط به پس گرفتن یا استرداد ملک بسته به منشا تصرف خوانده به سه گروه اصلی تقسیم می شوند:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
                <div className="font-bold text-amber-400 text-sm">دعوای تخلیه ید (Eviction)</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  تصرف متصرف از ابتدا با مجوز، اذن و قرارداد رسمی یا عادی (مانند اجاره) آغاز شده، اما با انقضای مدت، فسخ یا بطلان، ادامه تصرف غیرقانونی شده است.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
                <div className="font-bold text-blue-400 text-sm">دعوای خلع ید (Ejectment)</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  تصرف خوانده از همان ابتدا غاصبانه و فاقد هرگونه قرارداد است و خواهان باید سند مالکیت رسمی ثبت شده داشته باشد (رای وحدت رویه ۶۷۲).
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
                <div className="font-bold text-emerald-400 text-sm">دعوای تصرف عدوانی (Trespass)</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  خواهان سابقه تصرف قبلی خود را بدون نیاز به ارائه سند مالکیت رسمی اثبات می کند و خوانده ملک را با قهر و غلبه تصرف کرده است.
                </p>
              </div>
            </div>
            <p>
              تشخیص دقیق اینکه موضوع اختلاف شما در کدام دسته قرار می گیرد، گام بنیادین است؛ زیرا طرح دعوای اشتباه (مثلا ثبت خلع ید به جای تخلیه) موجب صدور قرار رد دعوا پس از ماه ها انتظار در نوبت دادگاه خواهد شد.
            </p>
          </div>
        </div>

        {/* Module 2: Legal Basis & Statutory Blockquotes */}
        <div id="legal-basis" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۲. مبنای قانونی و نقل صریح مواد قانونی حاکم
            </h3>
          </div>
          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              دعاوی اجاره و تخلیه به صورت صریح و الزام آور در قوانین مدنی و قوانین روابط موجر و مستاجر پیش بینی شده اند:
            </p>
            <div className="p-5 rounded-2xl bg-[#070B15] border-r-4 border-amber-500 border-slate-800 space-y-2">
              <div className="text-xs font-bold text-amber-400">ماده ۳ قانون روابط موجر و مستاجر مصوب ۱۳۷۶</div>
              <blockquote className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                «پس از انقضای مدت اجاره بنا به تقاضای موجر یا قایم مقام قانونی وی تخلیه عین مستاجره در اجاره با سند رسمی توسط دوایر اجرای ثبت و در اجاره با سند عادی ظرف یک هفته پس از تقدیم تقاضای تخلیه به دستور مقام قضایی در مرجع قضایی توسط ضابطین قوه قضاییه انجام خواهد گرفت.»
              </blockquote>
            </div>
            <div className="p-5 rounded-2xl bg-[#070B15] border-r-4 border-blue-500 border-slate-800 space-y-2">
              <div className="text-xs font-bold text-blue-400">ماده ۴ قانون روابط موجر و مستاجر مصوب ۱۳۷۶ (تودیع ودیعه)</div>
              <blockquote className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                «اجرای دستور تخلیه منوط به تودیع و سپردن سند یا وجه یاد شده به دایره اجرا و تسلیم رسید آن به دفتر مرجع قضایی است.»
              </blockquote>
            </div>
            <div className="p-5 rounded-2xl bg-[#070B15] border-r-4 border-emerald-500 border-slate-800 space-y-2">
              <div className="text-xs font-bold text-emerald-400">مواد ۳۰۸ و ۳۲۰ قانون مدنی (غصب و اجرت المثل)</div>
              <blockquote className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                «غصب، استیلا بر حق غیر است به نحو عدوان. اثبات ید بر مال غیر بدون مجوز هم در حکم غصب است... نسبت به منافع مال مغصوب، هر یک از غاصبین به اندازه منافع زمان تصرف خود و مابعد خود ضامن است اگر چه استیفاء منفعت نکرده باشد.»
              </blockquote>
            </div>
          </div>
        </div>

        {/* Module 3: Judicial Acceptance Criteria */}
        <div id="acceptance-criteria" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۳. معیارهای قضایی پذیرش دستور تخلیه فوری در شورای حل اختلاف
            </h3>
          </div>
          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              برای آنکه شورای حل اختلاف بدون تشکیل جلسه دادگاه و ظرف یک هفته «دستور تخلیه فوری» صادر کند، احراز ۴ شرط شکلی به صورت همزمان اجباری است:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white text-sm">۱. انعقاد قرارداد بعد از مهرماه ۱۳۷۶</div>
                  <div className="text-xs text-slate-400 mt-1">قرارداد باید مشمول قانون سال ۷۶ باشد و ادعای حق کسب و پیشه سال ۵۶ در آن مطرح نباشد.</div>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white text-sm">۲. قید صریح مدت اجاره و انقضای آن</div>
                  <div className="text-xs text-slate-400 mt-1">قرارداد باید دارای تاریخ شروع و پایان مشخص باشد و مدت آن منقضی شده باشد.</div>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white text-sm">۳. تنظیم قرارداد در دو نسخه یکسان</div>
                  <div className="text-xs text-slate-400 mt-1">در متن قرارداد باید تصریح شده باشد که در دو نسخه متحدالشکل تنظیم گردیده است.</div>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white text-sm">۴. امضای دو شاهد معتبر و مطلع</div>
                  <div className="text-xs text-slate-400 mt-1">علاوه بر موجر و مستاجر، حداقل دو فرد معتمد باید ذیل قرارداد را به عنوان شاهد امضا کرده باشند.</div>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs sm:text-sm leading-relaxed">
              <strong>نکته کلیدی:</strong> چنانچه حتی یکی از این شروط (به عنوان مثال امضای دو شاهد) وجود نداشته باشد، تقاضای دستور تخلیه فوری رد می شود و موجر ناچار است دادخواست «حکم تخلیه» ثبت کند که فرآیندی ماهوی و زمان بر است.
            </div>
          </div>
        </div>

        {/* Module 4: Documents & Evidence Checklist */}
        <div id="documents-checklist" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۴. مدارک و ضمایم لازم برای ثبت دادخواست دعاوی ملکی
            </h3>
          </div>
          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>هنگام ثبت دادخواست در دفاتر خدمات الکترونیک قضایی (ثنا)، آماده سازی مدارک زیر ضروری است:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
                <div className="font-bold text-white text-sm flex items-center gap-2">
                  <Building className="w-4 h-4 text-[#E5C158]" />
                  مدارک لازم برای تخلیه ملک (موجر)
                </div>
                <ul className="text-xs text-slate-400 space-y-1.5 list-disc list-inside leading-relaxed">
                  <li>تصویر برابر با اصل قرارداد اجاره (با امضای دو شاهد).</li>
                  <li>سند مالکیت رسمی یا قولنامه معتبر خرید ملک.</li>
                  <li>کد ملی و مشخصات کامل هویتی موجر و مستاجر.</li>
                  <li>فیش واریز مبلغ ودیعه به صندوق دادگستری/شورا (جهت اجرا).</li>
                  <li>تصویر اظهارنامه ارسالی تخلیه در صورت وجود.</li>
                </ul>
              </div>
              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
                <div className="font-bold text-white text-sm flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-[#E5C158]" />
                  مدارک لازم برای استرداد ودیعه (مستاجر)
                </div>
                <ul className="text-xs text-slate-400 space-y-1.5 list-disc list-inside leading-relaxed">
                  <li>قرارداد اجاره و فیش های بانکی واریز ودیعه به حساب موجر.</li>
                  <li>اظهارنامه رسمی اعلام تخلیه و آمادگی تحویل کلید.</li>
                  <li>قبض یا صورت جلسه تحویل کلید به شورای حل اختلاف.</li>
                  <li>تسویه حساب قبوض آب، برق، گاز و شارژ ساختمان.</li>
                  <li>تقاضای صدور قرار تامین خواسته جهت توقیف حساب های موجر.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Module 5: Step-by-Step Judicial Process */}
        <div id="step-process" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۵. فرآیند گام به گام رسیدگی از ثبت تا تخلیه فیزیکی ملک
            </h3>
          </div>
          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
                <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">۱</div>
                <div className="font-bold text-white text-sm">ثبت در سامانه ثنا</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  ثبت دادخواست در دفتر خدمات الکترونیک قضایی و ارجاع پرونده به شورای حل اختلاف محل وقوع ملک.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
                <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">۲</div>
                <div className="font-bold text-white text-sm">صدور دستور تخلیه</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  بررسی شکلی اسناد توسط قاضی شورا و صدور دستور تخلیه فوری بدون تشکیل جلسه دادگاه ظرف یک هفته.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
                <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">۳</div>
                <div className="font-bold text-white text-sm">تودیع ودیعه و ابلاغ</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  واریز پول پیش به حساب دادگستری توسط موجر، ارسال پرونده به اجرای احکام و ابلاغ اخطار ۳ روزه به مستاجر.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
                <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">۴</div>
                <div className="font-bold text-white text-sm">اجرای فیزیکی تخلیه</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  در صورت امتناع مستاجر، حضور دادورز اجرای احکام و ضابط نیروی انتظامی در محل و تحویل ملک به موجر.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Module 6: Comparison Matrix Table */}
        <div id="comparison-matrix" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۶. جدول ماتریس مقایسه ای انواع دعاوی تخلیه و خلع ید
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs sm:text-sm text-slate-300 border-collapse">
              <thead>
                <tr className="border-b border-slate-700 bg-[#070B15] text-[#E5C158]">
                  <th className="p-3.5 font-bold">ویژگی دادرسی</th>
                  <th className="p-3.5 font-bold">دستور تخلیه فوری</th>
                  <th className="p-3.5 font-bold">حکم تخلیه</th>
                  <th className="p-3.5 font-bold">دعوای خلع ید</th>
                  <th className="p-3.5 font-bold">تصرف عدوانی</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="hover:bg-slate-800/30">
                  <td className="p-3.5 font-semibold text-white">مرجع صالح رسیدگی</td>
                  <td className="p-3.5">شورای حل اختلاف</td>
                  <td className="p-3.5">دادگاه صلح / عمومی حقوقی</td>
                  <td className="p-3.5">دادگاه عمومی حقوقی</td>
                  <td className="p-3.5">دادگاه حقوقی یا کیفری</td>
                </tr>
                <tr className="hover:bg-slate-800/30">
                  <td className="p-3.5 font-semibold text-white">مبنای قانونی</td>
                  <td className="p-3.5">ماده ۳ قانون ۷۶</td>
                  <td className="p-3.5">قانون مدنی و آیین دادرسی</td>
                  <td className="p-3.5">ماده ۳۰۸ مدنی و رای ۶۷۲</td>
                  <td className="p-3.5">ماده ۱۵۸ آیین دادرسی مدنی</td>
                </tr>
                <tr className="hover:bg-slate-800/30">
                  <td className="p-3.5 font-semibold text-white">نیاز به جلسه دادرسی؟</td>
                  <td className="p-3.5 text-emerald-400 font-bold">خیر (تصمیم فوری)</td>
                  <td className="p-3.5 text-amber-400 font-bold">بله (رسیدگی ترافعی)</td>
                  <td className="p-3.5 text-amber-400 font-bold">بله (رسیدگی ماهوی)</td>
                  <td className="p-3.5 text-amber-400 font-bold">بله (تحقیق محلی)</td>
                </tr>
                <tr className="hover:bg-slate-800/30">
                  <td className="p-3.5 font-semibold text-white">مدت زمان صدور</td>
                  <td className="p-3.5 text-emerald-400 font-bold">۳ تا ۷ روز کاری</td>
                  <td className="p-3.5">۲ تا ۴ ماه</td>
                  <td className="p-3.5">۴ تا ۹ ماه</td>
                  <td className="p-3.5">۱ تا ۳ ماه</td>
                </tr>
                <tr className="hover:bg-slate-800/30">
                  <td className="p-3.5 font-semibold text-white">شرط اصلی پذیرش</td>
                  <td className="p-3.5">امضای ۲ شاهد و پایان مدت</td>
                  <td className="p-3.5">اثبات تخلف یا پایان قرارداد</td>
                  <td className="p-3.5">سند رسمی مالکیت تک برگ</td>
                  <td className="p-3.5">اثبات سابقه تصرف قبلی</td>
                </tr>
                <tr className="hover:bg-slate-800/30">
                  <td className="p-3.5 font-semibold text-white">حق تجدیدنظرخواهی عادی</td>
                  <td className="p-3.5 text-emerald-400 font-bold">ندارد (اجرای فوری)</td>
                  <td className="p-3.5">دارد (مهلت ۲۰ روزه)</td>
                  <td className="p-3.5">دارد (مهلت ۲۰ روزه)</td>
                  <td className="p-3.5">دارد (اجرای قبل از قطعیت)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Module 7: Fatal Mistakes & Legal Warnings */}
        <div id="fatal-mistakes" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۷. خطاهای مهلک و اقدامات ممنوعه خودسرانه
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300 text-xs sm:text-sm leading-relaxed">
            <div className="p-5 rounded-2xl bg-[#070B15] border border-rose-500/20 space-y-2">
              <div className="font-bold text-rose-400 text-sm">قطع انشعابات و تعویض قفل درب توسط موجر</div>
              <p className="text-slate-400 leading-relaxed">
                بسیاری از موجران برای تحت فشار قرار دادن مستاجر اقدام به قطع آب، برق، گاز یا تعویض قفل می کنند. این اقدام جرم مستقل ممانعت از حق، مزاحمت یا ورود به عنف محسوب شده و مستاجر می تواند در دادسرا شکایت کیفری مطرح کند و موجر محکوم به حبس یا جزای نقدی گردد.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#070B15] border border-rose-500/20 space-y-2">
              <div className="font-bold text-rose-400 text-sm">عدم واریز ودیعه به صندوق دادگستری پیش از اجرا</div>
              <p className="text-slate-400 leading-relaxed">
                بر اساس ماده ۴ قانون سال ۷۶، اجرای دستور تخلیه منوط به واریز کامل پول پیش است. تا زمانی که موجر کل ودیعه را به حساب دادگستری تودیع نکند و رسید آن را ارایه ندهد، اجرای احکام به هیچ عنوان وارد مرحله تخلیه فیزیکی نخواهد شد.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#070B15] border border-rose-500/20 space-y-2">
              <div className="font-bold text-rose-400 text-sm">تمدید دستی پشت مبایعه نامه بدون امضای دو شاهد</div>
              <p className="text-slate-400 leading-relaxed">
                اگر در زمان تمدید قرارداد، صرفا موجر و مستاجر پشت سند را امضا کنند و دو شاهد جدید ذیل آن را امضا ننمایند، قرارداد از شمول دستور تخلیه فوری خارج می شود و موجر برای تخلیه ناچار به طرح دادخواست حکم تخلیه و طی مراحل طولانی دادگاه خواهد بود.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#070B15] border border-rose-500/20 space-y-2">
              <div className="font-bold text-rose-400 text-sm">تخلیه ملک توسط مستاجر بدون تحویل رسمی کلید</div>
              <p className="text-slate-400 leading-relaxed">
                اگر مستاجر وسایل خود را جمع کرده و بدون صورت جلسه رسمی یا بدون سپردن کلید به شورا ملک را ترک کند، موجر می تواند ادعا کند ملک همچنان در تصرف مستاجر است و بابت تمام ماه های گذشته تقاضای اجاره بها و خسارت نماید.
              </p>
            </div>
          </div>
        </div>

        {/* Module 8: Practical Actionable Options */}
        <div id="practical-options" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۸. راهکارهای عملی برای تسریع پرونده و حفظ حقوق مالی
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-slate-300 text-xs sm:text-sm leading-relaxed">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="font-bold text-amber-400">ارسال اظهارنامه رسمی به موقع</div>
              <p className="text-slate-400 text-xs leading-relaxed">
                حداقل یک ماه پیش از انقضای اجاره، اظهارنامه رسمی ارسال کنید تا تاریخ مطالبه رسمی ثبت شده و از تاریخ انقضا، خسارت تاخیر تادیه و اجرت المثل تعلق گیرد.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="font-bold text-blue-400">تامین دلیل وضعیت ملک</div>
              <p className="text-slate-400 text-xs leading-relaxed">
                اگر مستاجر به ملک خسارت وارد کرده، بلافاصله دادخواست «تامین دلیل با جلب نظر کارشناس رسمی» ثبت کنید تا پیش از تغییر وضعیت، میزان خسارت صورت جلسه قضایی شود.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="font-bold text-emerald-400">توقیف ودیعه بابت اجور معوقه</div>
              <p className="text-slate-400 text-xs leading-relaxed">
                اگر مستاجر اجاره پرداخت نکرده است، موجر می تواند همزمان با واریز ودیعه، دادخواست مطالبه طلب و قرار تامین خواسته ثبت نموده و تقاضای توقیف طلب خود از مبلغ ودیعه را بخواهد.
              </p>
            </div>
          </div>
        </div>

        {/* Module 9: Next Action & Cluster Internal Links */}
        <div id="next-steps" className="bg-[#0D1424] border border-[#E5C158]/30 rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="text-center space-y-3">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              اقدام بعدی: دانلود الگوهای آماده یا سفارش تنظیم اختصاصی دادخواست ملکی
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              شما می توانید نمونه دادخواست های متناسب با پرونده خود را دانلود کنید یا پرونده خود را جهت تنظیم دادخواست مستند و استاندارد به متخصصان نگارش یار بسپارید.
            </p>
          </div>

          {/* Core Cluster Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/samples/eviction-expired-lease"
              className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 hover:border-[#E5C158]/50 transition-colors group space-y-2 block"
            >
              <div className="font-bold text-white text-xs sm:text-sm group-hover:text-[#E5C158] transition-colors flex items-center justify-between">
                <span>دستور تخلیه فوری</span>
                <ArrowLeft className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#E5C158] transition-transform group-hover:-translate-x-1" />
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                الگوی شورای حل اختلاف به علت پایان مدت قرارداد اجاره.
              </p>
            </Link>

            <Link
              href="/samples/eviction-nonpayment-rent"
              className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 hover:border-[#E5C158]/50 transition-colors group space-y-2 block"
            >
              <div className="font-bold text-white text-xs sm:text-sm group-hover:text-[#E5C158] transition-colors flex items-center justify-between">
                <span>تخلیه عدم پرداخت اجاره</span>
                <ArrowLeft className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#E5C158] transition-transform group-hover:-translate-x-1" />
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                دادخواست فسخ و تخلیه به علت معوق ماندن اجاره بها.
              </p>
            </Link>

            <Link
              href="/samples/rent-deposit-claim"
              className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 hover:border-[#E5C158]/50 transition-colors group space-y-2 block"
            >
              <div className="font-bold text-white text-xs sm:text-sm group-hover:text-[#E5C158] transition-colors flex items-center justify-between">
                <span>استرداد ودیعه مسکن</span>
                <ArrowLeft className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#E5C158] transition-transform group-hover:-translate-x-1" />
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                مطالبه پول پیش از موجر پس از تحویل کلید به شورا.
              </p>
            </Link>

            <Link
              href="/samples/rent-equivalent-claim"
              className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 hover:border-[#E5C158]/50 transition-colors group space-y-2 block"
            >
              <div className="font-bold text-white text-xs sm:text-sm group-hover:text-[#E5C158] transition-colors flex items-center justify-between">
                <span>مطالبه اجرت المثل</span>
                <ArrowLeft className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#E5C158] transition-transform group-hover:-translate-x-1" />
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                محاسبه و دریافت خسارت تصرف غیرمجاز پس از پایان اجاره.
              </p>
            </Link>

            <Link
              href="/samples/property-eviction-removal-claim"
              className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 hover:border-[#E5C158]/50 transition-colors group space-y-2 block"
            >
              <div className="font-bold text-white text-xs sm:text-sm group-hover:text-[#E5C158] transition-colors flex items-center justify-between">
                <span>دادخواست خلع ید رسمی</span>
                <ArrowLeft className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#E5C158] transition-transform group-hover:-translate-x-1" />
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                اخراج متصرف غاصب از املاک دارای سند ثبتی رسمی.
              </p>
            </Link>

            <Link
              href="/samples/property-possession-claim"
              className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 hover:border-[#E5C158]/50 transition-colors group space-y-2 block"
            >
              <div className="font-bold text-white text-xs sm:text-sm group-hover:text-[#E5C158] transition-colors flex items-center justify-between">
                <span>دعوای تصرف عدوانی</span>
                <ArrowLeft className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#E5C158] transition-transform group-hover:-translate-x-1" />
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                اعاده فوری تصرفات بدون نیاز به ارایه سند مالکیت رسمی.
              </p>
            </Link>

            <Link
              href="/samples/rent-adjustment-petition"
              className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 hover:border-[#E5C158]/50 transition-colors group space-y-2 block"
            >
              <div className="font-bold text-white text-xs sm:text-sm group-hover:text-[#E5C158] transition-colors flex items-center justify-between">
                <span>تعدیل اجاره بها تجاری</span>
                <ArrowLeft className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#E5C158] transition-transform group-hover:-translate-x-1" />
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                تعدیل اجاره اماکن تجاری دارای کسب و پیشه قانون ۵۶.
              </p>
            </Link>

            <Link
              href="/samples/official-deed-compulsion-petition"
              className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 hover:border-[#E5C158]/50 transition-colors group space-y-2 block"
            >
              <div className="font-bold text-white text-xs sm:text-sm group-hover:text-[#E5C158] transition-colors flex items-center justify-between">
                <span>الزام به تنظیم سند رسمی</span>
                <ArrowLeft className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#E5C158] transition-transform group-hover:-translate-x-1" />
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                الزام فروشنده به حضور در دفترخانه و انتقال قطعی سند.
              </p>
            </Link>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/request?service=property-lease-eviction"
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-[#E5C158] text-[#070B15] font-black text-sm text-center hover:bg-[#d4b047] transition-colors"
            >
              ثبت سفارش تنظیم دادخواست دعاوی ملکی
            </Link>
            <Link
              href="/lawyer-referral"
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-[#070B15] border border-slate-700 text-slate-200 font-bold text-sm text-center hover:bg-slate-800 transition-colors"
            >
              مشاوره و ارجاع به وکیل متخصص ملکی
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
