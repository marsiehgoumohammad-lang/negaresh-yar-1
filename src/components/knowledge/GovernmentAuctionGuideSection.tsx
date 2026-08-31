import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import {
  Gavel,
  ShieldCheck,
  Building,
  Car,
  FileText,
  AlertTriangle,
  Scale,
  CreditCard,
  Search,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  BookOpen,
  MapPin,
  Clock,
  XCircle,
  FileSearch,
} from 'lucide-react';

export function GovernmentAuctionGuideSection() {
  return (
    <section className="relative space-y-12">
      <Container>
        {/* Header Badge & Title */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold">
            <Sparkles className="w-4 h-4" />
            <span>راهنمای جامع خرید قانونی اموال توقیفی</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            راهنمای کامل شرکت در مزایده دادگاه و ستاد ایران
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            شرایط شرکت در مزایده اجرای احکام، خرید خودرو و ملک توقیفی، قوانین واریز ۱۰ درصد مبلغ و نحوه ثبت اعتراض قانونی به روند برگزاری مزایده.
          </p>
        </div>

        {/* Section 1: What is Court Auction */}
        <div id="what-is-auction" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Gavel className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۱. مزایده دادگاه و اجرای احکام چیست؟
            </h3>
          </div>
          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              <strong>مزایده دادگاه</strong> یا اجرای احکام، فرآیندی است که در آن اموال توقیف شده یک فرد (مانند ملک، خودرو، یا موجودی انبار) جهت پرداخت بدهی‌های وی (مثل مهریه، چک برگشتی، یا دیه) به صورت رقابتی و علنی به فروش می‌رسد. این فرآیند بر اساس مواد ۱۱۴ تا ۱۴۵ قانون اجرای احکام مدنی صورت می‌گیرد.
            </p>
            <p>
              در حال حاضر، تمامی مزایده‌های اجرای احکام دادگستری از حالت سنتی (حراج حضوری) خارج شده و به صورت کاملاً الکترونیکی در <strong>سامانه ستاد ایران (setadiran.ir)</strong> برگزار می‌شوند. شرکت در این مزایده‌ها برای عموم آزاد است و فرصت مناسبی برای سرمایه‌گذاری و خرید اموال با قیمت‌های رقابتی به شمار می‌رود.
            </p>
          </div>
        </div>

        {/* Section 2: Steps to Participate */}
        <div id="auction-steps" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <FileSearch className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۲. مراحل عملی شرکت در مزایده اجرای احکام
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-3 relative">
              <div className="w-8 h-8 rounded-full bg-slate-800 text-white font-black flex items-center justify-center text-sm absolute -top-4 -right-2 border-2 border-[#0D1424]">۱</div>
              <div className="text-[#E5C158]"><ShieldCheck className="w-6 h-6" /></div>
              <h4 className="font-bold text-white text-sm">ثبت‌نام در ثنا و ستاد</h4>
              <p className="text-xs text-slate-400 leading-relaxed">داشتن حساب کاربری فعال در سامانه ثنا قوه قضاییه و ثبت‌نام به عنوان «مزایده‌گر» در سامانه ستاد ایران.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-3 relative">
              <div className="w-8 h-8 rounded-full bg-slate-800 text-white font-black flex items-center justify-center text-sm absolute -top-4 -right-2 border-2 border-[#0D1424]">۲</div>
              <div className="text-sky-400"><FileText className="w-6 h-6" /></div>
              <h4 className="font-bold text-white text-sm">دریافت توکن امضای دیجیتال</h4>
              <p className="text-xs text-slate-400 leading-relaxed">تهیه گواهی امضای الکترونیک (توکن) از دفاتر پیشخوان یا مراکز مجاز برای تایید اسناد و ثبت قیمت.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-3 relative">
              <div className="w-8 h-8 rounded-full bg-slate-800 text-white font-black flex items-center justify-center text-sm absolute -top-4 -right-2 border-2 border-[#0D1424]">۳</div>
              <div className="text-emerald-400"><CreditCard className="w-6 h-6" /></div>
              <h4 className="font-bold text-white text-sm">واریز سپرده و ثبت پیشنهاد</h4>
              <p className="text-xs text-slate-400 leading-relaxed">واریز دقیق ۱۰ درصد قیمت پایه کارشناسی به حساب سپرده معرفی شده در سایت و ثبت رقم پیشنهادی.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 space-y-3 relative">
              <div className="w-8 h-8 rounded-full bg-[#E5C158] text-slate-900 font-black flex items-center justify-center text-sm absolute -top-4 -right-2 border-2 border-[#0D1424]">۴</div>
              <div className="text-amber-400"><Gavel className="w-6 h-6" /></div>
              <h4 className="font-bold text-white text-sm">شرکت در بازگشایی</h4>
              <p className="text-xs text-slate-400 leading-relaxed">حضور آنلاین در سامانه در زمان مقرر بازگشایی پاکت‌ها؛ برنده کسی است که بالاترین مبلغ را ثبت کرده باشد.</p>
            </div>
          </div>
        </div>

        {/* Section 3: Payment & Deposit */}
        <div id="deposit-payment" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <CreditCard className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۳. قوانین پرداخت: واریز ۱۰ درصد مبلغ مزایده و تسویه
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3 p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
              <h4 className="font-bold text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                سپرده اولیه (۱۰ درصد)
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                برای شرکت در مزایده، واریز دقیقاً معادل ۱۰ درصد قیمت پایه کارشناسی که در آگهی قید شده الزامی است. این واریز صرفاً از طریق درگاه‌های متصل به سامانه ستاد و به حساب سپرده دادگستری انجام می‌شود. اگر برنده نشوید، این مبلغ در روزهای بعد قابل استرداد است.
              </p>
            </div>
            <div className="space-y-3 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20">
              <h4 className="font-bold text-amber-400 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                تسویه نهایی (۹۰ درصد)
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                شخصی که به عنوان برنده مزایده (بالاترین پیشنهاد) اعلام می‌گردد، موظف است مابقی مبلغ (۹۰ درصد) را ظرف مهلتی که مدیر اجرا تعیین می‌کند (حداکثر یک ماه) پرداخت نماید. در صورت عدم پرداخت در مهلت قانونی، ۱۰ درصد سپرده وی به نفع دولت <strong>ضبط</strong> و مزایده تجدید خواهد شد.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Property & Cars */}
        <div id="property-and-car" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۴. نکات خرید خودرو و ملک توقیفی از مزایده
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 flex flex-col space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-sky-400 text-base">خرید خودرو از مزایده دادگاه</h4>
                <Car className="w-6 h-6 text-sky-400/50" />
              </div>
              <ul className="text-xs sm:text-sm text-slate-300 space-y-2 list-disc list-inside">
                <li>الزام بازدید حضوری از پارکینگ در مهلت ۵ روزه قبل از برگزاری مزایده.</li>
                <li>بررسی دقیق گزارش کارشناس در خصوص وضعیت شاسی، رنگ، موتور و خلافی.</li>
                <li>تحویل خودرو معمولاً بلافاصله پس از تسویه کامل و تایید مزایده انجام می‌شود.</li>
                <li>فک پلاک خودروی توقیفی با نامه مستقیم اجرای احکام به راهور صورت می‌پذیرد.</li>
              </ul>
            </div>
            <div className="p-5 rounded-2xl bg-[#070B15] border border-slate-800 flex flex-col space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-emerald-400 text-base">خرید ملک از مزایده اجرای احکام</h4>
                <MapPin className="w-6 h-6 text-emerald-400/50" />
              </div>
              <ul className="text-xs sm:text-sm text-slate-300 space-y-2 list-disc list-inside">
                <li>الزام بررسی وضعیت «تخلیه» یا «در تصرف بودن» ملک در آگهی مزایده.</li>
                <li>اگر ملک در تصرف شخص ثالث یا مستاجر باشد، خریدار باید مراحل خلع ید را پیگیری کند.</li>
                <li>هزینه‌های انتقال سند، مالیات و عوارض طبق شرایط آگهی تقسیم می‌شود (معمولاً بر عهده خریدار).</li>
                <li>انتقال سند مستند به ماده ۱۴۳ قانون اجرای احکام با دستور مستقیم قاضی انجام می‌گردد.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 5: Common Mistakes */}
        <div id="common-mistakes" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۵. اشتباهات مهلک و رایج در شرکت در مزایده
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="font-bold text-rose-400 flex items-center gap-1.5"><XCircle className="w-4 h-4"/> عدم بازدید حضوری مال</div>
              <p className="text-slate-400 leading-relaxed">
                اعتماد صرف به نظریه کارشناسی و عدم بازدید از خودرو یا ملک ممکن است منجر به خرید مالی با مشکلات مخفی شود که در گزارش ذکر نشده است.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="font-bold text-rose-400 flex items-center gap-1.5"><XCircle className="w-4 h-4"/> ثبت قیمت‌های نجومی و غیرواقعی</div>
              <p className="text-slate-400 leading-relaxed">
                برای برنده شدن قطعی، برخی افراد مبالغ غیرمعقول ثبت می‌کنند. اگر قادر به تامین مابقی وجه در مدت یک ماه نباشید، ۱۰ درصد سپرده شما به نفع دولت ضبط می‌شود.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#070B15] border border-slate-800 space-y-2">
              <div className="font-bold text-rose-400 flex items-center gap-1.5"><XCircle className="w-4 h-4"/> بی‌توجهی به متصرف ملک</div>
              <p className="text-slate-400 leading-relaxed">
                خرید ملکی که در تصرف خانواده محکوم یا مستاجر است، می‌تواند شما را ماه‌ها درگیر دعاوی تخلیه و خلع ید در دادگاه کند.
              </p>
            </div>
          </div>
        </div>

        {/* Section 6: Objections & Cancellations */}
        <div id="auction-objection" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۶. شرایط و مهلت اعتراض به مزایده (ابطال مزایده)
            </h3>
          </div>
          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              اگر در تشریفات قانونی برگزاری مزایده تخلفی صورت گیرد، هر یک از طرفین (بدهکار، طلبکار یا حتی سایر شرکت‌کنندگان) می‌توانند به آن اعتراض کنند. <strong>مهلت طلایی اعتراض، دقیقاً یک هفته از تاریخ برگزاری مزایده است</strong> (ماده ۱۴۲ قانون اجرای احکام مدنی).
            </p>
            <div className="bg-[#070B15] p-4 rounded-xl border border-slate-800 mt-4">
              <h4 className="font-bold text-white mb-2 text-sm">مهم‌ترین دلایل قانونی برای ابطال مزایده (مستند به ماده ۱۳۶ ق.ا.ا.م):</h4>
              <ul className="list-disc list-inside space-y-1.5 text-slate-400 text-xs sm:text-sm">
                <li>اگر فروش در روز، ساعت یا محلی غیر از آنچه در آگهی اعلام شده انجام شود.</li>
                <li>اگر کسی بدون جهت قانونی مانع خرید دیگران شده باشد.</li>
                <li>اگر مال توقیفی پایین‌تر از قیمت پایه کارشناسی به فروش رفته باشد.</li>
                <li>اگر آگهی مزایده مطابق قانون در روزنامه‌ها کثیرالانتشار یا سامانه درج نشده باشد.</li>
                <li>اگر خریدار، جزو افراد ممنوعه قانونی (مانند ارزیابان، دادورزان یا اقوام درجه یک آن‌ها) باشد.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 7: Comparison Table */}
        <div id="comparison-table" className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 mb-8 overflow-hidden">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ۷. تفاوت انواع مزایده‌ها در ایران
            </h3>
          </div>
          <div className="overflow-x-auto pb-4">
            <table className="w-full text-right border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-800 bg-[#070B15] text-slate-300 text-xs sm:text-sm">
                  <th className="p-3 sm:p-4 font-bold">نوع مزایده</th>
                  <th className="p-3 sm:p-4 font-bold">مرجع برگزارکننده</th>
                  <th className="p-3 sm:p-4 font-bold">ماهیت اموال</th>
                  <th className="p-3 sm:p-4 font-bold">پلتفرم برگزاری</th>
                  <th className="p-3 sm:p-4 font-bold">ضمانت شرکت</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-xs sm:text-sm text-slate-300">
                <tr className="hover:bg-slate-800/20 transition-colors">
                  <td className="p-3 sm:p-4 font-bold text-[#E5C158]">مزایده اجرای احکام (دادگستری)</td>
                  <td className="p-3 sm:p-4">شعب اجرای احکام دادگاه‌ها</td>
                  <td className="p-3 sm:p-4">اموال توقیف شده بدهکاران و محکومان</td>
                  <td className="p-3 sm:p-4">سامانه ستاد ایران</td>
                  <td className="p-3 sm:p-4">۱۰ درصد مبلغ پایه</td>
                </tr>
                <tr className="hover:bg-slate-800/20 transition-colors">
                  <td className="p-3 sm:p-4 font-bold text-sky-400">مزایده دولتی (مناقصات و مزایدات)</td>
                  <td className="p-3 sm:p-4">ارگان‌ها، شهرداری‌ها و وزارتخانه‌ها</td>
                  <td className="p-3 sm:p-4">اموال مازاد یا اسقاطی سازمان‌های دولتی</td>
                  <td className="p-3 sm:p-4">سامانه ستاد ایران</td>
                  <td className="p-3 sm:p-4">متغیر (معمولاً ۵ تا ۱۰ درصد)</td>
                </tr>
                <tr className="hover:bg-slate-800/20 transition-colors">
                  <td className="p-3 sm:p-4 font-bold text-emerald-400">مزایده سازمان اموال تملیکی</td>
                  <td className="p-3 sm:p-4">سازمان جمع‌آوری و فروش اموال تملیکی</td>
                  <td className="p-3 sm:p-4">کالاهای قاچاق، متروکه گمرک و ضبط شده</td>
                  <td className="p-3 sm:p-4">سامانه ستاد ایران</td>
                  <td className="p-3 sm:p-4">۱۵ درصد مبلغ پایه</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 8: Conversion Pathways */}
        <div id="conversion-pathways" className="bg-[#0D1424] border border-[#E5C158]/30 rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5C158]/10 text-[#E5C158] text-xs font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>سه مسیر راهنمایی و خدمات حقوقی برای مزایده‌ها</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-black text-white">
              نیاز به پیگیری حقوقی پس از مزایده دارید؟
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto">
              بسته به نیاز خود، یکی از مسیرهای زیر را برای پیشبرد کارهای خود انتخاب کنید:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Path 1: Knowledge */}
            <div className="p-6 rounded-2xl bg-[#070B15] border border-slate-800 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white">مسیر ۱: آموزش و مطالعه قوانین</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  مطالعه مقالات مرتبط با اجرای احکام، نحوه ارزیابی و کارشناسی املاک و درک بهتر فرآیندهای دادگستری پیش از شرکت در مزایده.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  href="/knowledge/how-to-read-court-verdict"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all"
                >
                  <span>راهنمای خواندن اوراق قضایی</span>
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Path 2: Document Prep */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#0D1424] to-[#121B2F] border-2 border-[#E5C158] flex flex-col justify-between space-y-5 relative shadow-xl shadow-[#E5C158]/5">
              <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-[#E5C158] text-slate-950 text-[11px] font-black">
                سریع و کاربردی
              </div>
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
                  <FileText className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white">مسیر ۲: تنظیم اوراق حقوقی مزایده</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  اگر به دنبال ابطال مزایده هستید، یا می‌خواهید درخواست استرداد ۱۰ درصد سپرده و یا انتقال سند ملک مزایده‌ای را به دادگاه بدهید.
                </p>
              </div>
              <div className="pt-2 space-y-2">
                <Link
                  href="/services/legal-brief"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#E5C158] hover:bg-[#d4b046] text-slate-950 text-xs font-bold transition-all"
                >
                  <span>سفارش لایحه اعتراض/ابطال</span>
                  <ArrowLeft className="w-4 h-4" />
                </Link>
                <Link
                  href="/samples/auction-deposit-refund-request"
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-all"
                >
                  مشاهده نمونه درخواست‌ها
                </Link>
              </div>
            </div>

            {/* Path 3: Lawyer */}
            <div className="p-6 rounded-2xl bg-[#070B15] border border-slate-800 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Scale className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white">مسیر ۳: وکیل متخصص اجرای احکام</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  چنانچه ملک مزایده‌ای در تصرف شخص دیگری است یا نیازمند وکیل پایه یک برای پیگیری مراحل خلع ید، تخلیه و انتقال سند در دفترخانه هستید.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  href="/lawyer-referral"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/40 text-purple-200 text-xs font-bold transition-all"
                >
                  <span>معرفی وکیل متخصص</span>
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
