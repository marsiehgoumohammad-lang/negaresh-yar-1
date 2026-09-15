import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import {
  FileText,
  Building,
  AlertCircle,
  Sparkles,
  ArrowLeft,
  PhoneCall,
} from 'lucide-react';

export function PresidentLetterGuideSection() {
  return (
    <section className="relative space-y-12">
      <Container>
        {/* Header Badge & Title */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold">
            <Sparkles className="w-4 h-4" />
            <span>راهنمای نگارش عریضه رسمی به نهاد ریاست جمهوری و ثبت در سامانه سامد ۱۱۱</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            راهنمای کامل نگارش نامه به رئیس جمهور، مرکز ارتباطات مردمی و پیگیری مصوبات
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            بررسی اختیارات قانونی قوه مجریه، سازوکار سامانه الکترونیکی سامد (۱۱۱)، تفکیک صلاحیت‌های اجرایی از قضایی و شرایط دریافت تسهیلات، درمان و اشتغال.
          </p>
        </div>

        {/* Section 1: Nature and Constitutional Scope of Executive Petitions */}
        <div id="what-is-president-letter" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۱. نامه به رئیس جمهور چیست و در چه مواردی کارآمد است؟
            </h3>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              بر اساس اصول ۱۱۳ و ۱۲۶ قانون اساسی جمهوری اسلامی ایران، رئیس جمهور پس از مقام رهبری عالی‌ترین مقام رسمی کشور و مسئول اجرای قانون اساسی و ریاست قوه مجریه (به جز مواردی که مستقیماً به رهبری مربوط می‌شود) است. شهروندان در سراسر کشور می‌توانند مطالبات عمومی، گزارش‌های کلان فساد و ناکارآمدی، درخواست‌های معیشتی خاص و مشکلات ناشی از تصمیمات وزارتخانه‌ها را از طریق <strong>«مرکز ارتباطات مردمی ریاست جمهوری»</strong> و درگاه الکترونیکی سامد پیگیری کنند.
            </p>
            <p>
              نامه‌های ارسالی به ریاست جمهوری توسط کارشناسان مرکز ارتباطات مردمی بررسی شده و حسب موضوع با دستور و هامش رسمی به وزارتخانه‌ها، استانداری‌ها، سازمان بهزیستی، کمیته امداد یا بانک مرکزی ارجاع داده می‌شوند تا دستگاه مکلف به اقدام یا پاسخ کارشناسی گردد.
            </p>
            <div className="p-4 rounded-xl bg-[#070B15] border border-amber-500/20 text-amber-200 text-xs sm:text-sm leading-relaxed">
              <strong>اصل استقلال قوا و عدم دخالت در احکام دادگاه‌ها:</strong> بر اساس اصل ۵۷ قانون اساسی، قوای حاکم مستقل از یکدیگرند. نهاد ریاست جمهوری صلاحیت نقض، تغییر، تعلیق یا بازنگری در احکام قطعی دادگاه‌ها و شعب دادگستری را ندارد. بنابراین عریضه به رئیس جمهور نباید شامل تقاضای ابطال رأی دادگاه باشد، بلکه صرفاً به امور اجرایی و حمایتی دستگاه‌های دولتی اختصاص دارد.
            </div>
          </div>
        </div>

        {/* Section 2: SAMED 111 vs Physical Letter */}
        <div id="samed-system" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <PhoneCall className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۲. روش‌های سه‌گانه ارسال نامه به نهاد ریاست جمهوری
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#E5C158]/20 flex items-center justify-center text-xs">۱</span>
                <span>سامانه اینترنتی سامد (111.ir)</span>
              </h4>
              <p className="text-slate-400 leading-relaxed">
                سریع‌ترین و رسمی‌ترین روش الکترونیکی ثبت درخواست همراه با بارگذاری تصویر مدارک و دریافت کد رهگیری ۱۲ رقمی جهت استعلام آنلاین.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#E5C158]/20 flex items-center justify-center text-xs">۲</span>
                <span>میزهای ارتباطات مردمی در سفرهای استانی</span>
              </h4>
              <p className="text-slate-400 leading-relaxed">
                تحویل مستقیم نامه کتبی به نمایندگان تام‌الاختیار وزرا و رئیس جمهور مستقر در مراکز ادارات کل استان همزمان با سفرهای استانی دولت.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#E5C158]/20 flex items-center justify-center text-xs">۳</span>
                <span>ارسال پستی به نهاد ریاست جمهوری</span>
              </h4>
              <p className="text-slate-400 leading-relaxed">
                ارسال پستی به نشانی تهران، میدان پاستور، نهاد ریاست جمهوری، مرکز ارتباطات مردمی؛ این نامه‌ها نیز پس از وصول در سامد اسکن و کدگذاری می‌شوند.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Essential Requirements & Supporting Documents */}
        <div id="required-details" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۳. اطلاعات و مدارک الزامی برای پذیرش عریضه در مرکز ارتباطات مردمی
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158]">مشخصات هویتی و کدملی سرپرست</h4>
              <p className="text-slate-400 leading-relaxed">
                نام، نام خانوادگی، شماره کدملی، شماره همراه روشن و ثبت‌شده به نام شخص متقاضی و آدرس پستی دقیق جهت ارسال پیامک رهگیری.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158]">مدارک اثبات ادعا و سوابق پیگیری قبلی</h4>
              <p className="text-slate-400 leading-relaxed">
                ذکر شماره نامه‌ها و مکاتباتی که قبلاً با اداره محلی یا استان صورت گرفته و پاسخی دریافت نشده یا با بن‌بست مواجه شده است.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158]">مدارک پزشکی، استعلام کمیته امداد یا بهزیستی (درخواست‌های حمایتی)</h4>
              <p className="text-slate-400 leading-relaxed">
                در تقاضای کمک‌هزینه درمان، پیوند اعضا یا بیماری‌های خاص، پیوست مدارک بیمارستانی و تاییدیه پزشک معتمد الزامی است.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <h4 className="font-bold text-[#E5C158]">تعیین دقیق خواسته و سازمان اجرایی مخاطب</h4>
              <p className="text-slate-400 leading-relaxed">
                پرهیز از درخواست‌های ناممکن؛ مشخص نمایید که خواسته شما مربوط به کدام وزارتخانه، بانک یا سازمان است.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Common Pitfalls in Letters to the President */}
        <div id="common-mistakes-president" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۴. اشتباهات رایج در نامه‌نگاری با ریاست جمهوری
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-red-500/20 space-y-2">
              <h4 className="font-bold text-red-400">۱. تقاضای دخالت در پرونده‌های دادگاه</h4>
              <p className="text-slate-400 leading-relaxed">
                درخواست لغو حکم طلاق، توقف اجرای احکام یا تغییر احکام کیفری که بلافاصله به دلیل عدم صلاحیت قوه مجریه بایگانی می‌شود.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-amber-500/20 space-y-2">
              <h4 className="font-bold text-amber-400">۲. نامه‌های طولانی و درهم</h4>
              <p className="text-slate-400 leading-relaxed">
                نگارش چندین صفحه داستان‌سرایی خانوادگی؛ کارشناسان مرکز روزانه هزاران نامه را بررسی می‌کنند و متن باید موجز، مستند و شفاف باشد.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#070B15] border border-blue-500/20 space-y-2">
              <h4 className="font-bold text-sky-400">۳. شماره تماس خاموش یا اشتباه</h4>
              <p className="text-slate-400 leading-relaxed">
                کلیه اطلاع‌رسانی‌ها و کدهای رهگیری از طریق پیامک ارسال می‌شود؛ ثبت شماره تماس اشتباه باعث بی‌اطلاعی از نتیجه خواهد شد.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5: Conversion Modules */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#0C1222] via-[#0F172A] to-[#0C1222] border border-[#E5C158]/30 space-y-4">
          <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
            <Sparkles className="w-5 h-5" />
            <span>خدمات و الگوهای عریضه‌نویسی به ریاست جمهوری در نگارش یار</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-xl bg-[#070B15] border border-slate-800 space-y-2 flex flex-col justify-between">
              <div className="space-y-1">
                <h4 className="font-bold text-white">مشاهده و کپی رایگان نمونه عریضه</h4>
                <p className="text-slate-400 leading-relaxed">
                  الگوی آماده و متن استاندارد درخواست وام ضروری، کمک‌هزینه درمان و گزارش‌های اداری به سامد.
                </p>
              </div>
              <Link
                href="/samples/president-letter"
                className="inline-flex items-center gap-1 text-[#E5C158] font-bold hover:underline pt-2 text-xs"
              >
                <span>مشاهده نمونه نامه به رئیس جمهور</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-4 rounded-xl bg-[#070B15] border border-[#E5C158]/40 space-y-2 flex flex-col justify-between">
              <div className="space-y-1">
                <h4 className="font-bold text-[#E5C158]">تنظیم تخصصی عریضه توسط کارشناسان</h4>
                <p className="text-slate-400 leading-relaxed">
                  تدوین دقیق عریضه شما متناسب با ضوابط سامد ۱۱۱ با ادبیات رسمی و تاثیرگذار در کمترین زمان.
                </p>
              </div>
              <Link
                href="/request?service=president-letter"
                className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-[#E5C158] text-[#070B15] font-black hover:bg-[#d4b045] transition-colors text-xs"
              >
                <span>سفارش تنظیم عریضه ریاست جمهوری</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
