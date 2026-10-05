import React from 'react';
import Link from 'next/link';
import {
  Scale,
  Building,
  Users,
  Briefcase,
  Gavel,
  AlertTriangle,
  FileText,
  CheckCircle2,
  ChevronLeft,
  ArrowLeft,
  MapPin,
  ExternalLink,
  BookOpen,
} from 'lucide-react';

export function TehranLawyerGuideSection() {
  const branches = [
    {
      id: 'tehran-real-estate-lawyer',
      title: 'بهترین وکیل ملکی در تهران',
      badge: 'دعاوی املاک، سرقفلی و مشارکت',
      icon: Building,
      description:
        'بازار مسکن و املاک در تهران به دلیل ارزش ریالی بالا، پیچیدگی قراردادهای مشارکت در ساخت و قوانین سرقفلی و حق کسب و پیشه در بازار بزرگ و مراکز تجاری پایتخت، نیازمند تسلط تخصصی بر رویه قضایی دادگاه های حقوقی تهران است.',
      highlights: [
        {
          title: 'الزام به تنظیم سند رسمی آپارتمان',
          desc: 'اخذ پایان کار، صورتمجلس تفکیکی و انتقال رسمی سند در مجتمع های قضایی شهید صدر، عدالت و قدس.',
        },
        {
          title: 'اختلافات مشارکت در ساخت و پیش فروش',
          desc: 'داوری و طرح دعوا در تاخیر تحویل پروژه، خسارت های قراردادی، اضافه بنا و عدم رعایت مشخصات فنی در مناطق ۲۲ گانه تهران.',
        },
        {
          title: 'سرقفلی و حق کسب و پیشه در بازار تهران',
          desc: 'تخلیه به دلیل تغییر شغل، انتقال به غیر، تعدیل اجاره بها و مطالبه حق کسب و پیشه طبق قوانین ۱۳۵۶ و ۱۳۷۶.',
        },
        {
          title: 'خلع ید، تخلیه فوری و رفع تصرف عدوانی',
          desc: 'پیگیری پرونده های تصرف غیرقانونی و صدور دستور تخلیه فوری املاک مسکونی و اداری پایتخت.',
        },
      ],
      samplesLink: {
        title: 'مشاهده نمونه دادخواست الزام به تنظیم سند رسمی',
        href: '/samples/official-deed-compulsion-petition',
      },
      briefLink: {
        title: 'سفارش تنظیم لایحه تخصصی ملکی',
        href: '/services/legal-brief',
      },
    },
    {
      id: 'tehran-family-lawyer',
      title: 'بهترین وکیل خانواده و طلاق در تهران',
      badge: 'طلاق، مهریه و حضانت فرزند',
      icon: Users,
      description:
        'دعاوی خانواده در پایتخت در سه مجتمع بزرگ تخصصی شهید باهنر (شرق و شمال شرق)، شهید محلاتی (جنوب و جنوب شرق) و شهید صدر (شمال و غرب) رسیدگی می شوند. انتخاب وکیلی آگاه به رویه این شعب، استرس و مدت زمان رسیدگی را به حداقل می رساند.',
      highlights: [
        {
          title: 'طلاق توافقی با مدیریت سریع مراحل',
          desc: 'اخذ گواهی عدم امکان سازش و هماهنگی جلسات مشاوره غربالگری بهزیستی در کوتاه ترین بازه قانونی.',
        },
        {
          title: 'مطالبه مهریه از اداره اجرای ثبت تهران',
          desc: 'توقیف فوری اموال، پلاک ثبتی ملک و حساب های بانکی زوج از طریق اداره اجرای اسناد رسمی ثبت تهران واقع در خیابان سپه.',
        },
        {
          title: 'تعدیل و تقسیط اقساط مهریه',
          desc: 'طرح دادخواست تعدیل اقساط ناشی از جهش قیمت سکه و تورم بر اساس ماده ۱۱ قانون نحوه اجرای محکومیت های مالی.',
        },
        {
          title: 'حضانت فرزندان و استرداد جهیزیه',
          desc: 'اثبات صلاحیت یا سلب حضانت، تعیین ساعات ملاقات فرزند مشترک و تامین دلیل استرداد اثاثیه و جهیزیه.',
        },
      ],
      samplesLink: {
        title: 'مشاهده نمونه دادخواست مطالبه مهریه در دادگاه',
        href: '/samples/mahrieh-court-petition',
      },
      briefLink: {
        title: 'سفارش لایحه دفاعیه خانواده و تعدیل مهریه',
        href: '/services/legal-brief',
      },
    },
    {
      id: 'tehran-corporate-lawyer',
      title: 'بهترین وکیل قرارداد و شرکت ها در تهران',
      badge: 'اسناد تجاری، چک صیادی و دعاوی شرکتی',
      icon: Briefcase,
      description:
        'تهران به عنوان قطب اقتصادی و تجاری کشور، تمرکز اصلی شرکت های سهامی، هلدینگ ها، استارتاپ ها و بنگاه های تولیدی است. مجتمع قضایی شهید بهشتی مرجع تخصصی رسیدگی به دعاوی کلان تجاری و اسناد بازرگانی در کشور محسوب می شود.',
      highlights: [
        {
          title: 'وصول مستقیم چک صیادی (ماده ۲۳ قانون جدید)',
          desc: 'صدور فوری اجراییه دادگاه بدون نیاز به ورود به دادرسی ماهوی طولانی، توقیف اموال صادرکننده و ظهرنویسان.',
        },
        {
          title: 'اختلافات سهامداران و انحلال شرکت',
          desc: 'دعاوی بطلان تصمیمات مجمع عمومی، عزل مدیران، ورود و خروج شرکا و پیگیری تصفیه و ورشکستگی شرکت ها.',
        },
        {
          title: 'تنظیم و بازبینی قراردادهای تجاری و استارتاپی',
          desc: 'نگارش قراردادهای سرمایه گذاری، سهامداری، محرمانگی (NDA)، عدم رقابت و قراردادهای پیمانکاری مهندسی.',
        },
        {
          title: 'تامین خواسته فوری و توقیف دارایی های تجاری',
          desc: 'جلوگیری از حیف و میل اموال بدهکار و مسدودسازی مطالبات شرکتی قبل از صدور دادنامه نهایی.',
        },
      ],
      samplesLink: {
        title: 'مشاهده نمونه لایحه مطالبه وجه چک صیادی',
        href: '/samples/sayad-check-claim-petition',
      },
      briefLink: {
        title: 'تنظیم تخصصی قراردادهای تجاری و بازرگانی',
        href: '/services/contract-drafting',
      },
    },
    {
      id: 'tehran-specialized-lawyer',
      title: 'معرفی و انتخاب وکیل متخصص در مجتمع های قضایی تهران',
      badge: 'دیوان عدالت، تجدیدنظر و دادسراهای ویژه',
      icon: Gavel,
      description:
        'ساختار قضایی تهران با دایر بودن شعب تجدیدنظر استان در مجتمع غدیر، دیوان عالی کشور، دیوان عدالت اداری (بزرگراه ستاری) و دادسرای جرایم اقتصادی (ناحیه ۳۲)، ظرافت های آیینی بسیار حساسی دارد که وکلای متخصص در حوزه های مرتبط بر آن مسلط هستند.',
      highlights: [
        {
          title: 'دادگاه تجدیدنظر استان تهران (مجتمع قضایی غدیر)',
          desc: 'تنظیم لوایح تجدیدنظرخواهی در مهلت های ۲۰ روزه با تمرکز بر نقض مستدل آرای دادگاه های بدوی تهران.',
        },
        {
          title: 'دیوان عدالت اداری (شهرداری ها و استخدامی)',
          desc: 'شکایت از آرای کمیسیون های ماده ۱۰۰ و ماده ۷۷ شهرداری تهران، دعاوی بازنشستگی و تامین اجتماعی.',
        },
        {
          title: 'دادسرای ویژه جرایم اقتصادی (ناحیه ۳۲)',
          desc: 'دفاع در پرونده های خیانت در امانت، کلاهبرداری کلان، اخلال در نظام اقتصادی و پولشویی.',
        },
        {
          title: 'اعتبار سنجی پروانه وکالت و شفافیت مالی',
          desc: 'استعلام اصالت پروانه از کانون وکلای مرکز یا مرکز وکلای قوه قضائیه و درج رسمی قرارداد در سامانه ثنا.',
        },
      ],
      samplesLink: {
        title: 'مشاهده نمونه لایحه اعلام عزل وکیل در سامانه ثنا',
        href: '/samples/lawyer-dismissal-notice-request',
      },
      briefLink: {
        title: 'سفارش لایحه تجدیدنظرخواهی و دیوان عدالت اداری',
        href: '/services/appeal',
      },
    },
  ];

  const comparisonRows = [
    {
      area: 'دعاوی ملکی تهران',
      court: 'مجتمع صدر، بهشتی، عدالت، قدس',
      evidence: 'سند رسمی، مبایعه نامه، صورتمجلس، تامین دلیل',
      needLawyer: 'در پرونده های میلیاردی الزامی / در دعاوی تخلیه ساده لایحه کافی است',
      costStructure: 'تعرفه توافقی اقساطی یا تنظیم لایحه با هزینه اقتصادی',
    },
    {
      area: 'خانواده و مهریه',
      court: 'مجتمع باهنر، محلاتی، صدر، اجرای ثبت',
      evidence: 'سند ازدواج، استعلام پلاک ثبتی، حساب بانکی',
      needLawyer: 'در طلاق توافقی لایحه و مشاوره / در پرونده های مهریه سنگین وکیل',
      costStructure: 'حق الوکاله مرحله ای بر مبنای وصول یا لایحه مستدل تعدیل',
    },
    {
      area: 'قراردادها و چک شرکت ها',
      court: 'مجتمع شهید بهشتی، دادگاه های بازرگانی',
      evidence: 'گواهی عدم پرداخت، کد رهگیری چک، اساسنامه',
      needLawyer: 'اجراییه ماده ۲۳ با لایحه قابل انجام است / ابطال تصمیمات وکیل الزامی',
      costStructure: 'درصد وصولی پس از صدور اجراییه یا هزینه نگارش لایحه',
    },
    {
      area: 'تجدیدنظر و دیوان عدالت',
      court: 'مجتمع غدیر، دیوان عدالت (ستاری)',
      evidence: 'دادنامه بدوی، رای کمیسیون ماده ۱۰۰، آرای وحدت رویه',
      needLawyer: 'لایحه تجدیدنظر فوق تخصصی کفایت می کند مگر در ابطال مصوبات کلان',
      costStructure: 'یک دهم هزینه استخدام وکیل کامل با تهیه لایحه تخصصی',
    },
  ];

  const warnings = [
    {
      title: 'فریب وعده های غیرقانونی وکیل تضمینی یا ۱۰۰٪ پیروزی',
      desc: 'طبق ماده ۳۲ قانون وکالت و اصول حرفه ای، تعهد وکیل دادگستری تعهد به وسیله است نه نتیجه. تضمین رای قطعی دادگاه نه تنها از نظر قانونی ممنوع است، بلکه نشانه ای آشکار از تبلیغات غیرواقعی و غیرحرفه ای است.',
    },
    {
      title: 'عدم ثبت شفاف قرارداد حق الوکاله در سامانه ثنا',
      desc: 'کلیه تعهدات مالی و حق الوکاله باید رسما در سامانه خودکاربری وکالت الکترونیک (عدل ایران) ثبت گردد. از هرگونه پرداخت وجه نقدی، کارت به کارت های شخصی بدون رسید یا توافقات مبهم شفاهی خودداری نمایید.',
    },
    {
      title: 'از دست رفتن مهلت های اعتراضی در تراکم محاکم تهران',
      desc: 'مهلت اعتراض به آرای غیابی (واخواهی ۲۰ روز)، تجدیدنظرخواهی (۲۰ روز) و دیوان عدالت اداری را جدی بگیرید. تاخیر حتی یک روز در شعب شلوغ پایتخت موجب اسقاط حق تجدیدنظرخواهی موکل خواهد شد.',
    },
    {
      title: 'ارجاع پرونده پیچیده به افراد بدون سابقه در آن شاخه',
      desc: 'یک وکیل کاربلد در حوزه خانواده الزاما تسلطی بر رویه شعب مجتمع شهید بهشتی در پرونده های ورشکستگی شرکت ها یا دعاوی سرقفلی بازار ندارد. همواره تخصص وکیل را با موضوع دقیق دعوا تطبیق دهید.',
    },
  ];

  return (
    <section className="space-y-12 border-t border-slate-800/80 pt-10">
      {/* Anchor Jump Navigation */}
      <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-5 space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-[#E5C158]">
          <MapPin className="w-4 h-4" />
          <span>دسترسی سریع به ۴ شاخه تخصصی وکیل در تهران:</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          <a
            href="#tehran-real-estate-lawyer"
            className="p-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-200 hover:text-[#E5C158] transition-colors text-center border border-slate-700/60 font-medium"
          >
            وکیل ملکی تهران
          </a>
          <a
            href="#tehran-family-lawyer"
            className="p-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-200 hover:text-[#E5C158] transition-colors text-center border border-slate-700/60 font-medium"
          >
            وکیل خانواده و طلاق
          </a>
          <a
            href="#tehran-corporate-lawyer"
            className="p-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-200 hover:text-[#E5C158] transition-colors text-center border border-slate-700/60 font-medium"
          >
            وکیل قرارداد و شرکت ها
          </a>
          <a
            href="#tehran-specialized-lawyer"
            className="p-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-200 hover:text-[#E5C158] transition-colors text-center border border-slate-700/60 font-medium"
          >
            مجتمع های قضایی تهران
          </a>
        </div>
      </div>

      {/* Guide Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold">
          <Scale className="w-3.5 h-3.5" />
          <span>راهنمای جامع پیلار وکالت در پایتخت</span>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-snug">
          معیارهای انتخاب بهترین وکیل در تهران؛ فراتر از القاب تبلیغاتی
        </h2>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed text-justify">
          پایتخت به دلیل حجم تبادلات مالی گسترده، قیمت های بالای املاک و تراکم پرونده ها در ده ها مجتمع تخصصی، بازار اصلی وکالت کشور است. با این حال، جستجوی عبارت «بهترین وکیل در تهران» اغلب مراجعان را با سیل تبلیغات پر زرق و برق و هزینه های نجومی مواجه می سازد. معیار واقعی برتری یک وکیل در تهران، نه تبلیغات رسانه ای، بلکه تسلط ماهوی بر موضوع تخصصی پرونده، اشراف بر رویه قضایی شعب مجتمع های دادگاهی پایتخت و انصاف در برآورد دستمزد و امکان تقسیط است.
        </p>
      </div>

      {/* 4 Commercial Branches Deep Dives */}
      <div className="space-y-8">
        {branches.map((branch, index) => {
          const BranchIcon = branch.icon;
          return (
            <article
              key={branch.id}
              id={branch.id}
              className="scroll-mt-24 rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-7 space-y-6 hover:border-[#E5C158]/40 transition-colors"
            >
              {/* Branch Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E5C158]/15 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158] shrink-0">
                    <BranchIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#E5C158] font-bold block mb-0.5">
                      شاخه تجاری شماره ۰{index + 1}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {branch.title}
                    </h3>
                  </div>
                </div>
                <span className="inline-flex items-center text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 self-start sm:self-auto">
                  {branch.badge}
                </span>
              </div>

              {/* Branch Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                {branch.description}
              </p>

              {/* Branch 4 Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {branch.highlights.map((item, hIdx) => (
                  <div
                    key={hIdx}
                    className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60 space-y-1.5"
                  >
                    <div className="flex items-center gap-2 text-white font-bold text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#E5C158] shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed pr-6">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Branch 2-Tier Link Box */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-800/80 text-xs">
                <Link
                  href={branch.samplesLink.href}
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#E5C158] transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#E5C158]" />
                  <span>{branch.samplesLink.title}</span>
                  <ChevronLeft className="w-3.5 h-3.5" />
                </Link>

                {branch.id === 'tehran-specialized-lawyer' && (
                  <Link
                    href="/knowledge/lawyer-in-gisha-tehran-courts-guide"
                    className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>راهنمای وکیل در گیشا و غرب تهران</span>
                  </Link>
                )}

                <Link
                  href={branch.briefLink.href}
                  className="inline-flex items-center gap-1.5 text-[#E5C158] font-bold hover:underline"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{branch.briefLink.title}</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {/* Decision Matrix Table */}
      <div id="tehran-decision-matrix" className="scroll-mt-24 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <Scale className="w-4 h-4" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white">
            جدول ماتریس تصمیم گیری پرونده های قضایی در تهران
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          برای انتخاب میان استخدام وکیل تمام عیار یا استفاده از خدمات تنظیم لایحه تخصصی نگارش یار، جدول مقایسه ای زیر را بررسی فرمایید:
        </p>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60">
          <table className="w-full text-right text-xs text-slate-200 min-w-[640px]">
            <thead className="bg-slate-800/80 text-[#E5C158] font-bold border-b border-slate-700">
              <tr>
                <th className="p-3.5">حوزه پرونده</th>
                <th className="p-3.5">مراجع صالح در تهران</th>
                <th className="p-3.5">مدارک و ادله کلیدی</th>
                <th className="p-3.5">نیاز به وکیل در برابر لایحه</th>
                <th className="p-3.5">ساختار مالی بهینه</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white whitespace-nowrap">
                    {row.area}
                  </td>
                  <td className="p-3.5 text-slate-300">{row.court}</td>
                  <td className="p-3.5 text-slate-300">{row.evidence}</td>
                  <td className="p-3.5 text-slate-300">{row.needLawyer}</td>
                  <td className="p-3.5 text-[#E5C158] font-medium">{row.costStructure}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Warnings & Pitfalls */}
      <div id="tehran-warnings" className="scroll-mt-24 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <AlertTriangle className="w-4 h-4" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white">
            هشدارهای تجربی و اشتباهات مهلک در استخدام وکیل در تهران
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {warnings.map((warn, wIdx) => (
            <div
              key={wIdx}
              className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 space-y-2"
            >
              <h4 className="text-xs sm:text-sm font-bold text-amber-300 flex items-center gap-2">
                <span className="w-5 h-5 rounded-md bg-amber-500/20 text-amber-400 font-bold text-xs flex items-center justify-center shrink-0">
                  !
                </span>
                <span>{warn.title}</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {warn.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 3-Tier Conversion Action Box */}
      <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-[#E5C158]/10 border border-[#E5C158]/30 p-6 sm:p-8 space-y-6 text-center sm:text-right">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-bold text-[#E5C158] uppercase tracking-wider block">
            معماری ۳ لایه راهکارهای قضایی در تهران
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            تصمیم گیری هوشمندانه برای پرونده شما در دادگاه های تهران
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
            چه نیازمند وکیل پایه یک دادگستری برای حضور در تمامی جلسات رسیدگی باشید و چه بخواهید با هزینه ای اقتصادی شخصا با یک لایحه دفاعیه تخصصی در دادگاه حاضر شوید، نگارش یار شما را تا حصول نتیجه همراهی می کند.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <Link
            href="/request?service=legal-brief"
            className="flex flex-col items-center justify-center p-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#070B15] font-black text-xs sm:text-sm shadow-md hover:scale-[1.02] transition-transform gap-1.5"
          >
            <span>ثبت لایحه دفاعیه تخصصی تهران</span>
            <span className="text-[11px] font-medium text-slate-900">بدون نیاز به پرداخت حق الوکاله کامل</span>
          </Link>

          <Link
            href="/services/petition-writing"
            className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-800 text-white font-bold text-xs sm:text-sm border border-slate-700 hover:border-[#E5C158]/60 transition-colors gap-1.5"
          >
            <span>تنظیم دادخواست رسمی دادگاه</span>
            <span className="text-[11px] font-normal text-slate-400">منطبق بر ماده ۵۱ قانون آیین دادرسی مدنی</span>
          </Link>

          <Link
            href="/samples"
            className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-800 text-slate-200 font-bold text-xs sm:text-sm border border-slate-700 hover:border-slate-600 transition-colors gap-1.5"
          >
            <span>مشاهده بانک نمونه اسناد تهران</span>
            <span className="text-[11px] font-normal text-slate-400">دانلود نمونه لوایح و دادخواست ها</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
