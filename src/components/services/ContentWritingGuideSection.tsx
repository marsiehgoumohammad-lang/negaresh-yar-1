import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import {
  FileText,
  Sparkles,
  Layers,
  ArrowLeft,
  CheckCircle2,
  FileCheck2,
  AlertCircle,
  PenTool,
  Layout,
} from 'lucide-react';

export function ContentWritingGuideSection() {
  return (
    <section className="relative space-y-12">
      <Container>
        {/* Header Badge & Title */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold">
            <Sparkles className="w-4 h-4" />
            <span>راهنمای کاربردی انتخاب و سفارش تولید محتوای متنی</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            راهنمای تصمیم گیری و سفارش تولید محتوا، نگارش مقاله و بازنویسی متون
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            بررسی تفاوت قالب های محتوایی، ساختار مقاله سئو، سناریوی شبکه های اجتماعی، بازنویسی متون، بریف اولیه و فرآیند گام به گام آماده سازی سفارش در نگارش یار.
          </p>
        </div>

        {/* Module 1: What is Professional Content Production */}
        <div id="what-is-content-production" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <PenTool className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۱. ماهیت تولید محتوای متنی و هدف از سفارش آن
            </h3>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              تولید محتوای متنی فرآیند پژوهش، ساختاربندی و نگارش هدفمند کلمات برای برقراری ارتباط موثر با مخاطبان در بستر وب سایت ها، وبلاگ ها، لندینگ پیج ها و رسانه های اجتماعی است. برخلاف متون عمومی یا ترجمه های تحت الفظی، محتوای استاندارد بر پایه درک دقیق دغدغه خواننده، پاسخگویی به سوالات اصلی و ایجاد یکپارچگی میان هویت کسب و کار و انتظار کاربر تدوین می شود.
            </p>
            <p>
              در سامانه نگارش یار، تولید محتوا صرفا نوشتن مقاله نیست؛ بلکه شامل تدوین مقالات سئومحور، بازنویسی متون تخصصی یا اداری، روان سازی ادبیات حقوقی و تجاری، و نگارش سناریو و کپشن برای شبکه های اجتماعی است تا پیام شما با نهایت شیوایی به مخاطب هدف منتقل شود.
            </p>
            <div className="p-4 rounded-xl bg-[#070B15] border border-amber-500/20 text-amber-200 text-xs sm:text-sm leading-relaxed">
              <strong>اصل ارزش آفرینی برای خواننده:</strong> هر نوشته ای که در وب منتشر می شود باید به یک نیاز مشخص، ابهام حقوقی یا اداری، یا سوال تخصصی کاربر پاسخ دهد. محتوایی که صرفا با هدف پر کردن کلمات نگارش شود، کارایی لازم را در ایجاد ارتباط با مخاطب نخواهد داشت.
            </div>
          </div>
        </div>

        {/* Module 2: Comparison Matrix of Content Types */}
        <div id="content-comparison-table" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۲. جدول مقایسه انواع خدمات محتوایی بر اساس هدف، بستر و ویژگی ها
            </h3>
          </div>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            جدول زیر ویژگی ها، هدف اصلی و مخاطبان هر یک از قالب های متنی را برای کمک به انتخاب دقیق تر خدمت مقایسه می کند:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-[#E5C158] font-bold">
                  <th className="p-3">نوع خدمت محتوایی</th>
                  <th className="p-3">بستر انتشار</th>
                  <th className="p-3">هدف اصلی</th>
                  <th className="p-3">شاخصه های کلیدی</th>
                  <th className="p-3">ورودی مورد نیاز کارفرما</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr>
                  <td className="p-3 font-bold text-amber-400">مقاله وب سایت و وبلاگ</td>
                  <td className="p-3">وبلاگ، مجله آنلاین، پایگاه دانش</td>
                  <td className="p-3">آموزش کاربر و ایجاد مرجعیت</td>
                  <td className="p-3">روایت منسجم، هدینگ بندی H2/H3، خلاصه سریع</td>
                  <td className="p-3">موضوع و زاویه دید کلی</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-sky-400">محتوای سئومحور</td>
                  <td className="p-3">صفحات آموزشی و پیلار وب سایت</td>
                  <td className="p-3">پاسخ به قصد جستجوی کاربران</td>
                  <td className="p-3">تحقیق عبارات کلیدی، پرسش های متداول، لینک سازی داخلی</td>
                  <td className="p-3">کلمات کلیدی اصلی یا حوزه کاری</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-emerald-400">محتوای صفحه فرود (Landing)</td>
                  <td className="p-3">لندینگ پیج خدمات یا محصولات</td>
                  <td className="p-3">معرفی خدمت و ترغیب به اقدام (CTA)</td>
                  <td className="p-3">تیترهای گیرا، چیپ های اعتماد، شفافیت مراحل و رفع ابهام</td>
                  <td className="p-3">مشخصات خدمت و مزیت های تمایز</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-purple-400">سناریو و کپشن اینستاگرام</td>
                  <td className="p-3">اینستاگرام (ریلز، کاروسل، استوری)</td>
                  <td className="p-3">جلب توجه سریع و تعامل مخاطب</td>
                  <td className="p-3">قلاب اولیه ۳ ثانیه ای، ریتم سریع، دعوت به کامنت یا سیو</td>
                  <td className="p-3">محور ویدیو و پرسش اصلی کاربران</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-blue-400">بازنویسی و روان سازی</td>
                  <td className="p-3">مقالات قدیمی، متون رسمی یا گزارش ها</td>
                  <td className="p-3">به روزرسانی و رفع ابهام متن</td>
                  <td className="p-3">نگارش اصیل با واژگان تازه، حفظ اصالت مفهوم، روانی جمله ها</td>
                  <td className="p-3">فایل یا لینک متن اولیه</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-rose-400">ویراستاری تخصصی</td>
                  <td className="p-3">کتابچه، گزارش کاری، متون اداری</td>
                  <td className="p-3">اصلاح ساختار ادبی و علائم نگارشی</td>
                  <td className="p-3">کنترل املایی، رفع خطای دستوری، هماهنگی لحن و پاراگراف ها</td>
                  <td className="p-3">فایل پیش نویس نهایی</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Module 3: Production Workflow */}
        <div id="content-workflow-steps" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۳. فرآیند گام به گام تدوین محتوا در سامانه نگارش یار
            </h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۱
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">ثبت بریف اولیه و نیازسنجی موضوع</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  کارفرما موضوع مد نظر، مخاطب هدف، بستر انتشار (سایت یا اینستاگرام) و در صورت وجود کلمات کلیدی یا نکات خاص را در فرم سفارش یا پیام رسان اعلام می کند.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۲
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">طراحی ساختار هدینگ ها و تایید سرفصل ها</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  زاویه دید متن، عنوان های اصلی، پرسش های کاربران و ساختار پاراگراف ها مشخص شده و چارچوب کار برنامه ریزی می شود.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۳
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">نگارش اختصاصی متن با رعایت استانداردهای زبانی</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  متن با ادبیات شیوا، جملات رسا و تقسیم بندی منظم تدوین شده و از تکرار بی هدف کلمات یا اصطلاحات نامانوس پرهیز می گردد.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#070B15] border border-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                ۴
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">کنترل کیفی، تحویل فایل و هماهنگی ویرایش تکمیلی</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  متن نهایی پس از بررسی نگارشی ارسال می شود و در صورت نیاز به هماهنگی بیشتر در چارچوب بریف اولیه، اصلاحات تکمیلی اعمال خواهد شد.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Module 4: What Customer Provides and What They Receive */}
        <div id="brief-and-deliverables" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Layout className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۴. اطلاعات لازم برای شروع کار و خروجی های تحویلی
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-2xl bg-[#070B15] border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-base">
                <CheckCircle2 className="w-5 h-5" />
                <span>اطلاعاتی که کارفرما ارائه می دهد (بریف)</span>
              </div>
              <ul className="space-y-2.5 text-slate-300 leading-relaxed list-disc list-inside">
                <li>موضوع اصلی، حوزه فعالیت و مخاطب هدف مقاله یا محتوا.</li>
                <li>بستر انتشار مورد نظر (سایت، مجله اینترنتی، اینستاگرام، خبرنامه).</li>
                <li>کلمات کلیدی اصلی یا رقبای مد نظر در صورت وجود استراتژی مشخص.</li>
                <li>لحن مد نظر (کاملا رسمی و اداری، تخصصی و جدی، یا صمیمی و روان).</li>
                <li>متن اولیه یا لینک صفحه در صورت نیاز به بازنویسی و ویراستاری.</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#070B15] border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-base">
                <FileText className="w-5 h-5" />
                <span>خروجی تحویلی به کارفرما</span>
              </div>
              <ul className="space-y-2.5 text-slate-300 leading-relaxed list-disc list-inside">
                <li>فایل مرتب و تایپ شده در قالب Word و متن ساده با ساختاربندی تگ ها.</li>
                <li>پیشنهاد عنوان اصلی (H1) و عنوان سئو جذاب همراه با متا دیسکریپشن.</li>
                <li>پاراگراف پاسخ سریع (Quick Answer) برای ابتدای مقاله وبلاگی.</li>
                <li>بخش پرسش های متداول پیشنهادی مرتبط با موضوع جهت درج در صفحه.</li>
                <li>قلاب های ویدیویی و کپشن تفکیک شده در سفارش های شبکه های اجتماعی.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Module 5: Common Mistakes and Quality Warnings */}
        <div id="content-pitfalls" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۵. اشتباهات رایج در تولید محتوا که باید از آن ها پرهیز کرد
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-red-500/20 space-y-2">
              <h4 className="font-bold text-red-400">۱. استفاده از متون خام و بازتولید ماشینی</h4>
              <p className="text-slate-400 leading-relaxed">
                انتشار مستقیم خروجی های بدون ویرایش هوش مصنوعی به دلیل لحن بی روح، گزافه گویی و عدم تطابق با فرهنگ بومی زبان فارسی، موجب خستگی کاربر و ترک سریع صفحه می شود.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-amber-500/20 space-y-2">
              <h4 className="font-bold text-amber-400">۲. تکرار افراطی کلمات کلیدی</h4>
              <p className="text-slate-400 leading-relaxed">
                گنجاندن مداوم یک عبارت در تمام جملات باعث ناخوانا شدن متن شده و اعتماد کاربر را مخدوش می کند. توزیع واژگان باید به صورت طبیعی در خلال پاسخ به سوالات صورت گیرد.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-sky-500/20 space-y-2">
              <h4 className="font-bold text-sky-400">۳. بی توجهی به هدف واقعی جستجو</h4>
              <p className="text-slate-400 leading-relaxed">
                اگر کاربر به دنبال مراحل اجرایی یک کار است، نوشتن مقالات فلسفی و مقدمه های طولانی مانع رسیدن او به پاسخ می شود. محتوا باید مستقیما به راهکار بپردازد.
              </p>
            </div>
          </div>
        </div>

        {/* Module 6: Action CTA Box */}
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0D1424] to-[#070B15] border border-[#E5C158]/30 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              آماده شروع نگارش مقالات، سناریوها یا بازنویسی متون خود هستید؟
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              مشخصات پروژه یا متن مورد نظر خود را ارسال نمایید تا برآورد حجم، هزینه و زمان تحویل توسط کارشناسان نگارش یار اعلام گردد.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/request"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#070B15] font-black text-sm shadow-lg shadow-[#E5C158]/20 hover:shadow-[#E5C158]/40 hover:scale-105 transition-all text-center"
            >
              ثبت سفارش آنلاین تولید محتوا
            </Link>
            <Link
              href="/knowledge/content-writing-and-production-guide"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#0D1424] border border-slate-700 text-slate-200 hover:text-white hover:border-[#E5C158]/50 text-xs sm:text-sm font-bold transition-all text-center flex items-center justify-center gap-2"
            >
              <span>مطالعه راهنمای جامع تولید محتوا</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
