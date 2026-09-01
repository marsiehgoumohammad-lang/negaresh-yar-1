import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import {
  FileText,
  Users,
  ClipboardList,
  FolderCheck,
  UserCheck,
  ShieldAlert,
  Scale,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export function InsolvencyGuideSection() {
  return (
    <section className="relative space-y-12">
      <Container>
        {/* Header Badge & Title */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold">
            <Sparkles className="w-4 h-4" />
            <span>راهنمای جامع، کاربردی و قانونی اعسار</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            راهنمای تخصصی دادخواست اعسار از پرداخت محکوم‌به و تقسیط بدهی
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            بررسی دقیق ماده‌های ۳، ۸ و ۱۱ قانون نحوه اجرای محکومیت‌های مالی، تشریفات تنظیم استشهادیه شهود، فرم دارایی‌ها و راهکارهای قانونی توقف حکم جلب.
          </p>
        </div>

        {/* Section 1: What is Insolvency */}
        <div id="what-is-insolvency" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۱. اعسار از پرداخت محکوم‌به چیست و چگونه کار می‌کند؟
            </h3>
          </div>
          
          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              در نظام حقوقی ایران و بر اساس <strong>ماده ۶ قانون نحوه اجرای محکومیت‌های مالی</strong>، «مُعسِر» به فردی اطلاق می‌شود که به دلیل در اختیار نداشتن اموال کافی یا دسترسی نداشتن به دارایی‌های خود (نظیر توقیف یا مسدودی)، قادر به پرداخت یک‌جای بدهی، رد مال، وجه چک، سفته یا سکه‌های مهریه موضوع دادنامه قطعی و اجرائیه دادگاه نباشد.
            </p>
            <p>
              هنگامی که دادگاه رأی قطعی مبنی بر محکومیت مالی صادر می‌کند، <strong>اجرائیه</strong> صادر شده و به محکوم‌علیه ابلاغ می‌شود. طبق تبصره ۱ ماده ۳ قانون، محکوم‌علیه <strong>۳۰ روز مهلت</strong> دارد تا دادخواست اعسار و تقسیط ثبت کند. چنانچه دادخواست در این فرجه ۳۰ روزه با رعایت ضوابط ماده ۸ ثبت گردد، <strong>حبس و جلب بدهکار تا پایان رسیدگی قطعی به دعوای اعسار متوقف می‌شود</strong>.
            </p>
            <div className="p-4 rounded-xl bg-[#070B15] border border-amber-500/20 text-amber-200 text-xs sm:text-sm leading-relaxed">
              <strong>نکته کلیدی:</strong> اعسار به معنای بخشیده شدن یا ساقط شدن بدهی نیست؛ بلکه دادگاه بدهی را متناسب با درآمد و وسع مالی واقعی شما به‌صورت <strong>پیش‌پرداخت اولیه سبک</strong> و <strong>اقساط ماهانه منظم</strong> تقسیط می‌نماید.
            </div>
          </div>
        </div>

        {/* Section 2: Who can file */}
        <div id="who-can-file" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۲. چه کسانی می‌توانند درخواست اعسار از محکوم‌به بدهند؟
            </h3>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            تمامی اشخاص حقیقی غیرتاجر که دارای محکومیت مالی قطعی هستند، در موارد زیر واجد شرایط طرح دادخواست اعسار و تقسیط هستند:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <h4>محکومان پرداخت مهریه و سکه</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                زوج‌هایی که به دلیل عدم توانایی خرید یک‌جای سکه با قیمت روز بازار، تقاضای تقسیط چند ماه یک سکه یا اقساط ریالی متناسب با فیش حقوقی دارند.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <h4>بدهکاران چک صیادی، سفته و فاکتور</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                افرادی که به دلیل نوسانات اقتصادی و رکود کسب‌وکار، چک برگشتی یا بدهی قراردادی دارند و حکم قطعی علیه‌شان صادر شده است.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <h4>محکومان به پرداخت دیه و رد مال غیرکلاهبرداری</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                رانندگان یا کارگرانی که به علت تصادف یا حوادث کاری محکوم به دیه شده و بیمه تمام مبلغ را پوشش نداده است.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <h4>متقاضیان تعدیل اقساط پیشین</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                اشخاصی که قبلاً حکم اعسار گرفته‌اند اما به دلیل تورم سنگین، بیماری، اخراج یا کاهش درآمد، قادر به پرداخت اقساط قبلی نیستند (ماده ۱۱).
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-red-950/30 border border-red-800/40 text-red-300 text-xs sm:text-sm leading-relaxed">
            <strong>محدودیت قانونی تاجران:</strong> طبق ماده ۱۵ قانون، تجار و شرکت‌های تجاری حق ارائه دادخواست اعسار ندارند؛ بلکه باید <strong>دادخواست ورشکستگی</strong> طبق قانون تجارت ثبت کنند.
          </div>
        </div>

        {/* Section 3: Process of Filing */}
        <div id="filing-process" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <ClipboardList className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۳. مراحل گام‌به‌گام ثبت دادخواست اعسار
            </h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۱
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">دریافت ابلاغیه اجرائیه و محاسبه مهلت ۳۰ روزه</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  به محض ابلاغ برگ اجرائیه در سامانه ثنا، مهلت ۳۰ روزه آغاز می‌شود. ثبت دادخواست در این مهلت جلوی صدور دستور جلب شعبه اجرای احکام را می‌گیرد.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۲
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">تنظیم دقیق صورت کلیه دارایی‌ها (ماده ۸ قانون)</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  تکمیل فهرست تمام حساب‌های بانکی، موجودی، اموال منقول و غیرمنقول، خودرو و انتقال اموال طی یک سال گذشته جهت الصاق به دادخواست.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۳
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">تنظیم استشهادیه کتبی شهود و اخذ امضا</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  تهیه استشهادیه رسمی با درج منشأ اطلاع شهود از وضعیت مالی و شغل متقاضی با امضای حداقل ۲ شاهد واجد شرایط.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۴
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">ثبت در دفتر خدمات الکترونیک قضایی و ارجاع به دادگاه صادرکننده رأی</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  ثبت رسمی دادخواست در ثنا و ارائه گواهی ثبت به شعبه اجرای احکام برای توقف یا رفع دستور جلب و صدور احضاریه جلسه رسیدگی.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Required Documents */}
        <div id="required-documents" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <FolderCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۴. مدارک لازم برای دادخواست اعسار و تقسیط
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-[#E5C158]">۱. مدارک قضایی و هویتی</h4>
              <ul className="text-xs sm:text-sm text-slate-400 space-y-1.5 list-disc list-inside">
                <li>تصویر دادنامه قطعی دادگاه بدوی و تجدیدنظر</li>
                <li>برگ ابلاغیه اجرائیه دادگاه و شماره پرونده اجرایی</li>
                <li>کارت ملی و مشخصات حساب کاربری ثنا</li>
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-[#E5C158]">۲. اسناد مالی ماده ۸</h4>
              <ul className="text-xs sm:text-sm text-slate-400 space-y-1.5 list-disc list-inside">
                <li>فهرست کامل حساب‌های بانکی و گردش مالی اخیر</li>
                <li>فیش حقوقی، حکم کارگزینی یا قرارداد کارگری</li>
                <li>لیست نقل‌وانتقالات اموال در ۱ سال گذشته</li>
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-[#E5C158]">۳. استشهادیه شهود</h4>
              <ul className="text-xs sm:text-sm text-slate-400 space-y-1.5 list-disc list-inside">
                <li>فرم تکمیل‌شده استشهادیه با امضای ۲ شاهد</li>
                <li>کپی کارت ملی و نشانی دقیق شهود</li>
                <li>درج صریح شغل و درآمد تخمینی متقاضی</li>
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-[#E5C158]">۴. اسناد هزینه‌های ضروری معیشت</h4>
              <ul className="text-xs sm:text-sm text-slate-400 space-y-1.5 list-disc list-inside">
                <li>اجاره‌نامه مسکن و رسید پرداخت اجاره‌بها</li>
                <li>مدارک بیماری خاص یا هزینه‌های درمانی تحت تکفل</li>
                <li>تعداد افراد تحت تکفل مندرج در شناسنامه</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 5: Witness Role */}
        <div id="witness-role" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۵. نقش و شرایط شاهد در پرونده اعسار
            </h3>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              طبق <strong>ماده ۹ قانون نحوه اجرای محکومیت‌های مالی</strong>، استشهادنامه کتبی حداقل دو شاهد باید ضمیمه دادخواست شود. شهود باید مشخصات هویتی، شغل، میزان درآمد بدهکار و مدت زمان آشنایی و منشأ آگاهی خود از عدم تمکن او را صریحاً در استشهادیه قید نمایند.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#070B15] border border-slate-800 text-center space-y-1">
                <span className="text-[#E5C158] font-bold text-xs">تعداد شهود</span>
                <p className="text-white font-bold text-sm">حداقل ۲ شاهد عادل</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#070B15] border border-slate-800 text-center space-y-1">
                <span className="text-[#E5C158] font-bold text-xs">منشأ آگاهی</span>
                <p className="text-white font-bold text-sm">شناخت از معیشت و شغل</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#070B15] border border-slate-800 text-center space-y-1">
                <span className="text-[#E5C158] font-bold text-xs">حضور در دادگاه</span>
                <p className="text-white font-bold text-sm">در صورت احضار قاضی</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 pt-2">
              <strong>هشدار قانونی:</strong> شهادت دروغین در دادگاه جرم بوده و در صورت اثبات، علاوه بر رد دادخواست اعسار، مجازات حبس برای شاهد و مدعی به همراه دارد. استشهادیه تنظیمی نگارش یار دقیقاً بر اساس مستندات واقعی شما تنظیم می‌شود تا ریسک تعارض برطرف گردد.
            </p>
          </div>
        </div>

        {/* Section 6: Insolvency after Arrest Warrant */}
        <div id="insolvency-after-arrest" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۶. آیا بعد از صدور حکم جلب یا بازداشت، امکان اعسار وجود دارد؟
            </h3>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              <strong>پاسخ: بله.</strong> حتی اگر مهلت ۳۰ روزه سپری شده باشد، دستور جلب صادر شده یا بدهکار روانه زندان شده باشد، قانوناً حق ارائه دادخواست اعسار ساقط نمی‌شود. تفاوت در این است که:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300 list-disc list-inside">
              <li>
                <strong>ثبت داخل مهلت ۳۰ روزه:</strong> جلب خودبه‌خود و بدون نیاز به وثیقه تا صدور رأی قطعی متوقف می‌گردد.
              </li>
              <li>
                <strong>ثبت پس از مهلت ۳۰ روزه یا بعد از بازداشت:</strong> برای جلوگیری از بازداشت یا آزادی موقت تا زمان صدور رأی دادگاه، محکوم‌علیه باید <strong>کفیل یا وثیقه‌گذار معتبر</strong> (معادل مبلغ محکوم‌به) به اجرای احکام معرفی کند تا آزاد شود.
              </li>
              <li>
                <strong>اقدام از داخل زندان:</strong> زندانی می‌تواند از طریق مددکاری زندان یا وکیل، دادخواست اعسار فوق‌العاده ثبت کند تا سریعاً رسیدگی و حکم آزادی صادر شود.
              </li>
            </ul>
          </div>
        </div>

        {/* Section 7: Difference between Insolvency and Installment */}
        <div id="insolvency-vs-installment" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۷. تفاوت اعسار مطلق و تقسیط محکوم‌به چیست؟
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-[#E5C158] font-bold">
                  <th className="p-3">شاخص مقایسه</th>
                  <th className="p-3">اعسار مطلق</th>
                  <th className="p-3">تقسیط بدهی (اعسار نسبی)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr>
                  <td className="p-3 font-bold text-white">وضعیت مالی</td>
                  <td className="p-3">فرد هیچ‌گونه درآمد، مال یا امکان پرداختی ندارد.</td>
                  <td className="p-3">فرد درآمد اندک ماهانه یا فیش حقوقی دارد اما توان پرداخت یکجا ندارد.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-white">تصمیم دادگاه</td>
                  <td className="p-3">مهلت کامل تا زمان توانمند شدن مالی (استطاعت).</td>
                  <td className="p-3">تعیین پیش‌پرداخت اولیه منصفانه + اقساط ماهانه منظم.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-white">کاربرد رایج</td>
                  <td className="p-3">هزینه دادرسی یا بدهکاران با بیماری حاد و بیکار.</td>
                  <td className="p-3">مهریه، چک، دیه، مطالبات بانکی و اسناد تجاری.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-white">تأثیر بر جلب</td>
                  <td className="p-3">توقف دائمی جلب تا اثبات ملائت طلبکار.</td>
                  <td className="p-3">توقف جلب مشروط به پرداخت منظم اقساط تعیین‌شده.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Clear Boundary Notice: Information vs Service vs Lawyer */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#0C1222] via-[#0F172A] to-[#0C1222] border border-[#E5C158]/30 space-y-4">
          <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
            <CheckCircle2 className="w-5 h-5" />
            <span>تفکیک شفاف مسئولیت‌ها در سامانه نگارش یار</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-1">
              <h4 className="font-bold text-white">۱. محتوای حقوقی و آگاهی‌بخش</h4>
              <p className="text-slate-400">
                اطلاعات فوق صرفاً جهت افزایش دانش قانونی و تشریح رویه دادگاه‌ها بر اساس قوانین جاری کشور است.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-1">
              <h4 className="font-bold text-[#E5C158]">۲. خدمت تنظیم تخصصی اسناد</h4>
              <p className="text-slate-400">
                نگارش یار دادخواست اعسار، فرم اموال ماده ۸ و استشهادیه شما را بر اساس شرایط پرونده با بالاترین استاندارد حقوقی آماده می‌کند.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-1">
              <h4 className="font-bold text-sky-400">۳. معرفی وکیل منصف</h4>
              <p className="text-slate-400">
                اگر نیاز به وکیل دادگستری برای حضور در جلسات رسیدگی و دفاع حضوری دارید، صفحه <Link href="/lawyer-referral" className="text-[#E5C158] underline font-bold">معرفی وکیل منصف</Link> را ببینید.
              </p>
            </div>
          </div>
        </div>

        {/* Action Conversion Box */}
        <div className="bg-gradient-to-r from-[#111827] via-[#0D1424] to-[#111827] border-2 border-[#E5C158]/50 rounded-3xl p-6 sm:p-8 text-center space-y-4 shadow-xl shadow-[#E5C158]/10">
          <h3 className="text-xl sm:text-2xl font-black text-white">
            نیاز به تنظیم فوری دادخواست اعسار دارید؟
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            از خطر صدور دستور جلب جلوگیری کنید. کارشناسان ما بسته کامل شامل <strong>دادخواست مستدل</strong>، <strong>فرم اموال ماده ۸</strong> و <strong>استشهادیه رسمی شهود</strong> را منطبق بر شرایط پرونده شما آماده می‌کنند.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/request?service=insolvency-from-judgment"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#070B15] font-black text-sm shadow-lg shadow-[#E5C158]/20 hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <span>تنظیم دادخواست اعسار متناسب با شرایط پرونده</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <Link
              href="/samples/insolvency"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-bold text-xs sm:text-sm hover:text-white transition-colors"
            >
              مشاهده نمونه دادخواست اعسار
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
