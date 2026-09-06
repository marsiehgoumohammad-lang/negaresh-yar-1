'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Container } from '@/components/ui/container';
import {
  Scale,
  AlertTriangle,
  Radio,
  MapPin,
  CheckCircle2,
  Phone,
  MessageCircle,
  Clock,
  ShieldCheck,
  ChevronDown,
  ArrowLeft,
  Gavel,
  EyeOff,
  UserX,
  FileWarning,
  Sparkles,
  Lock,
  Search,
  ExternalLink,
} from 'lucide-react';
import {
  OFFICIAL_PHONE,
  generateMessengerLinks,
} from '@/lib/messengers-links';

const DEFAULT_INQUIRY_MESSAGE =
  'سلام، در پرونده من طرف مقابل شاهد دروغین معرفی کرده و اطمینان دارم شاهد در تاریخ و ساعت واقعه در محل نبوده است. لطفاً جهت تنظیم لایحه تخصصی درخواست استعلام حضور شاهد از دادیار/بازپرس/قاضی راهنمایی‌ام کنید.';

export function FalseWitnessInquiryClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const messengerLinks = generateMessengerLinks(DEFAULT_INQUIRY_MESSAGE);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#070B15] text-white selection:bg-[#E5C158] selection:text-[#070B15]">
      {/* ----------------- HERO SECTION ----------------- */}
      <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-slate-800/80">
        {/* Subtle Ambient Radial Glows */}
        <div className="absolute -top-24 right-1/4 w-[500px] h-[450px] bg-[radial-gradient(circle_at_center,rgba(229,193,88,0.12)_0%,transparent_70%)] pointer-events-none -z-10" />
        <div className="absolute top-1/2 left-10 w-[400px] h-[350px] bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.08)_0%,transparent_70%)] pointer-events-none -z-10" />

        <Container>
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="مسیر راهنما"
            className="flex items-center gap-2 text-xs text-slate-400 mb-8 overflow-x-auto whitespace-nowrap pb-1"
          >
            <Link href="/" className="hover:text-[#E5C158] transition-colors">
              صفحه اصلی
            </Link>
            <span>/</span>
            <Link
              href="/services"
              className="hover:text-[#E5C158] transition-colors"
            >
              خدمات حقوقی
            </Link>
            <span>/</span>
            <span className="text-[#E5C158] font-medium">
              اثبات شهادت دروغ و استعلام حضور شاهد
            </span>
          </nav>

          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm font-bold animate-pulse">
              <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
              <span>شاهدی علیه شما شهادت دروغ داده و مطمئنید در صحنه نبوده است؟</span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight md:leading-tight">
              اثبات قطعی <span className="text-[#E5C158]">شهادت دروغین</span> با استعلام قضایی حضور شاهد در صحنه واقعه
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              اگر طرف مقابل با اجیر کردن شاهد دروغین قصد دارد جرمی را به شما نسبت دهد یا حقتان را تضییع کند، لازم نیست با شاهد یا قاضی وارد بحث و جدل بی‌ثمر شوید! ما راهکاری حقوقی و فنی در اختیارتان می‌گذاریم تا از طریق بازپرس، دادیار یا قاضی شعبه، دستور رسمی استعلام موقعیت مکانی شاهد در ساعت و تاریخ حادثه صادر شده و شهادت کذب در همان مرحله مقدماتی از درجه اعتبار ساقط گردد.
            </p>

            {/* Trust Points */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-300">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800">
                <Radio className="w-4 h-4 text-[#E5C158]" />
                استعلام دکل‌های مخابراتی (BTS) و آنتن همراه
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800">
                <Gavel className="w-4 h-4 text-[#E5C158]" />
                دستور رسمی بازپرس، دادیار و قاضی دادگاه
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800">
                <FileWarning className="w-4 h-4 text-red-400" />
                تعقیب کیفری شاهد به جرم شهادت کذب (ماده ۶۵۰)
              </span>
            </div>

            {/* Main Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#messengers"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#070B15] font-black text-sm sm:text-base shadow-lg shadow-[#E5C158]/20 hover:brightness-110 active:scale-[0.98] transition-all"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                <span>ارتباط مستقیم در پیام‌رسان‌ها جهت تنظیم لایحه</span>
              </a>
              <a
                href={`tel:${OFFICIAL_PHONE}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-bold text-sm sm:text-base hover:bg-slate-800 hover:border-[#E5C158]/50 transition-all"
              >
                <Phone className="w-4 h-4 text-[#E5C158] shrink-0" />
                <span>تماس اضطراری: {OFFICIAL_PHONE}</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ----------------- THE CRISIS & WARNING SECTION ----------------- */}
      <section className="py-12 md:py-16 bg-[#090E1D] border-b border-slate-800/80">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-red-950/30 via-slate-900/80 to-slate-900/80 border border-red-500/30 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/20 border border-red-500/40 flex items-center justify-center shrink-0 text-red-400">
                  <UserX className="w-6 h-6" />
                </div>
                <div className="space-y-3">
                  <h2 className="text-xl md:text-2xl font-black text-white">
                    چرا بحث شفاهی با قاضی درباره دروغ بودن شاهد بی‌فایده است؟
                  </h2>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                    بزرگ‌ترین خطایی که افراد در دادسرا و دادگاه مرتکب می‌شوند این است که صرفاً رو به قاضی یا بازپرس می‌کنند و فریاد می‌زنند: <span className="text-red-400 font-bold">«جناب قاضی، به خدا قسم این آقا اصلاً اونجا نبود! داره دروغ می‌گه!»</span>
                  </p>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                    متأسفانه طبق قانون، قاضی مکلف به رسیدگی بر اساس ادله ابرازی است و قسم و ادعای شفاهی شما بدون مستندات قانونی، نمی‌تواند شهادت کتبی و رسمی ثبت‌شده در پرونده را باطل کند. اگر به موقع و با زبان حقوقی وارد عمل نشوید، قاضی بر اساس همان شهادت دروغین علیه شما رأی به محکومیت، حبس، پرداخت دیه یا رد ادعا صادر خواهد کرد!
                  </p>
                </div>
              </div>
            </div>

            {/* The Solution Callout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
                  <Radio className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base">استعلام فنی دکل‌های مخابراتی</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  تلفن همراه هر فرد به طور دائم با نزدیک‌ترین دکل مخابراتی (BTS) ارتباط دارد. با استعلام رسمی بازپرس، سابقه پوشش آنتن خط شاهد در ساعت حادثه استخراج می‌شود.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base">اثبات فاصله کیلومتری از صحنه</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  وقتی پاسخ رسمی اپراتور مخابرات به دادسرا واصل شود و نشان دهد شاهد در زمان وقوع در منطقه یا شهر دیگری بوده، شاهکار دفاعی کامل شده و شهادت کاملاً باطل می‌شود.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Gavel className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base">وارونه شدن بازی علیه شاهد کذاب</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  با وصول این استعلام، پرونده بلافاصله از موضع اتهام علیه شما خارج شده و شاهد دروغین و طرف مقابل تحت تعقیب کیفری با مجازات سنگین حبس قرار می‌گیرند.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ----------------- WHY NO FREE SAMPLE SECTION ----------------- */}
      <section className="py-12 md:py-16 border-b border-slate-800/80 relative">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-900 border border-[#E5C158]/40 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-[#E5C158]/5 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#E5C158]/20 border border-[#E5C158]/40 flex items-center justify-center text-[#E5C158] shrink-0">
                    <Lock className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#E5C158] uppercase tracking-wider">
                      هشدار امنیتی و استراتژیک
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-white">
                      چرا متن این لایحه را به عنوان «نمونه رایگان» در سایت منتشر نکرده‌ایم؟
                    </h2>
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-200 leading-relaxed">
                  <p>
                    بسیاری از مراجعین از ما می‌پرسند: <span className="text-[#E5C158] font-semibold">«چرا نمونه متن آماده این درخواست را مثل سایر نمونه نامه‌ها روی سایت قرار نداده‌اید تا خودمان کپی کنیم؟»</span>
                  </p>
                  <p className="text-slate-300">
                    پاسخ ما کاملاً جدی، دلسوزانه و مبتنی بر تجربه صدها پرونده دادگاهی است:
                  </p>
                  
                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                      <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                        ۱
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300">
                        <strong className="text-white">حساسیت فوق‌العاده بازپرس و قاضی:</strong> صدور دستور استعلام دکل مخابراتی مستلزم اقناع وجدانی مقام قضایی و استناد بسیار دقیق به مواد قانونی آیین دادرسی کیفری و مدنی است. یک جمله ناشیانه یا کپی‌پیست اینترنتی باعث می‌شود بازپرس درخواست را <strong className="text-red-400">«غیرمرتبط یا فاقد وجاهت قانونی»</strong> تشخیص دهد و دستور استعلام را رد کند!
                      </p>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                      <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                        ۲
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300">
                        <strong className="text-white">سوختن فرصت طلایی دفاع:</strong> اگر با یک متن ناقص اقدام کنید و قاضی استعلام را رد کند، دست شما برای طرف مقابل رو می‌شود و شاهد فرصت پیدا می‌کند تا ادعاهایش را با تبانی جدید بازسازی کند.
                      </p>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                      <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                        ۳
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300">
                        <strong className="text-white">اختصاصی بودن شرایط هر پرونده:</strong> بسته به اینکه پرونده شما در مرحله دادیاری، شعبه بازپرسی، دادگاه کیفری دو، دادگاه تجدیدنظر یا دادگاه حقوقی است، شیوه استدلال، نوع تقاضا و نگارش دستور کاملاً متفاوت است.
                      </p>
                    </div>
                  </div>

                  <p className="pt-2 font-medium text-slate-200">
                    به همین دلیل، ما این سلاح دفاعی را رایگان و عمومی نکرده‌ایم. متخصصین ارشد نگارش یار پرونده شما را کلمه به کلمه بررسی کرده و لایحه‌ای نفوذناپذیر، مستند و کوبنده تنظیم می‌کنند که قاضی شعبه نتواند از صدور دستور استعلام امتناع ورزد.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ----------------- REAL LIFE SCENARIOS SECTION ----------------- */}
      <section className="py-12 md:py-16 bg-[#090E1D] border-b border-slate-800/80">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold text-[#E5C158] uppercase tracking-wider">
                کاربردهای نجات‌بخش
              </span>
              <h2 className="text-xl sm:text-3xl font-black text-white">
                در چه پرونده‌هایی این استعلام بازی را ۱۸۰ درجه تغییر می‌دهد؟
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
                اگر در هر یک از شرایط زیر قرار دارید، با این راهکار قانونی می‌توانید بی‌گناهی خود را به اثبات برسانید:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all space-y-2.5">
                <div className="flex items-center gap-2.5 text-[#E5C158]">
                  <Scale className="w-5 h-5 shrink-0" />
                  <h3 className="font-bold text-white text-base">پرونده‌های درگیری، نزاع و ضرب و جرح</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  طرف مقابل شاهدی آورده که شهادت داده شما او را کتک زده‌اید یا چاقوکشی کرده‌اید، در حالی که شاهد اصلاً آنجا نبوده است. با استعلام دکل مشخص می‌شود شاهد در آن ساعت در منزل یا محله دیگری بوده است.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all space-y-2.5">
                <div className="flex items-center gap-2.5 text-[#E5C158]">
                  <FileWarning className="w-5 h-5 shrink-0" />
                  <h3 className="font-bold text-white text-base">تصادفات ساختگی و ادعای خسارت صوری</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  شاکی با تبانی و شاهدان ساختگی، ادعای تصادف و فرار از صحنه یا برخورد با عابر را مطرح کرده است. اثبات عدم حضور شاهد در صحنه واقعه پرونده تصادف را کاملاً مختومه می‌کند.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all space-y-2.5">
                <div className="flex items-center gap-2.5 text-[#E5C158]">
                  <EyeOff className="w-5 h-5 shrink-0" />
                  <h3 className="font-bold text-white text-base">ادعای توهین، فحاشی، افترا و تهدید</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  شاکی مدعی است شما در تاریخ مشخص در خیابان یا محل کار به او توهین و فحاشی کرده‌اید و برای اثبات ادعایش دو شاهد معرفی کرده است. با استعلام فنی، کذب بودن کل ماجرا برملا می‌گردد.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all space-y-2.5">
                <div className="flex items-center gap-2.5 text-[#E5C158]">
                  <Gavel className="w-5 h-5 shrink-0" />
                  <h3 className="font-bold text-white text-base">دعاوی ملکی، معامله و مطالبات صوری</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  طرف مقابل مدعی است در بنگاه یا مکانی خاص معامله‌ای شفاهی انجام شده یا پولی رد و بدل شده و شاهدی پای سند امضا کرده که اصلاً در جلسه حضور نداشته است. استعلام حضور، سند و ادعا را ساقط می‌کند.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ----------------- CONSEQUENCES OF FALSE WITNESS (PENAL CODE) ----------------- */}
      <section className="py-12 md:py-16 border-b border-slate-800/80">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="p-6 md:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                  <Gavel className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-black text-white">
                    مجازات هولناک شهادت کذب در قانون مجازات اسلامی (ماده ۶۵۰)
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400">
                    وقتی استعلام ما پاسخ داده شود، شما دیگر صرفاً مدافع نیستید، بلکه شاکی خواهید بود!
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2">
                <p className="text-[#E5C158] font-bold">
                  متن صریح ماده ۶۵۰ قانون مجازات اسلامی (تعزیرات):
                </p>
                <p className="leading-relaxed italic text-slate-200">
                  «هر کس در دادگاه نزد مقامات رسمی شهادت دروغ بدهد، به سه ماه و یک روز تا دو سال حبس و یا به یک میلیون و پانصد هزار تا دوازده میلیون ریال جزای نقدی محکوم خواهد شد.»
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                علاوه بر مجازات حبس شاهد دروغین، طبق قانون مدنی و مسئولیت مدنی، کلیه خسارت‌های مادی، معنوی و هزینه‌های دادرسی و حق‌الوکاله که به دلیل این شهادت دروغ به شما وارد شده است، از شاهد و شخصی که او را اجیر کرده قابل مطالبه و وصول خواهد بود.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ----------------- HOW WE WORK (3 STEPS) ----------------- */}
      <section className="py-12 md:py-16 bg-[#090E1D] border-b border-slate-800/80">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold text-[#E5C158] uppercase tracking-wider">
                فرآیند ساده و سریع
              </span>
              <h2 className="text-xl sm:text-3xl font-black text-white">
                ۳ گام تا دریافت لایحه استعلام اختصاصی و نجات از شهادت دروغ
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 relative space-y-3">
                <div className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center">
                  ۱
                </div>
                <h3 className="font-bold text-white text-base">پیام در یکی از پیام‌رسان‌ها</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  از طریق دکمه‌های زیر، در روبیکا، ایتا، بله، تلگرام یا واتساپ پیام دهید و ماجرای پرونده، نام شاهد و تاریخ و ساعت ادعایی را برای ما ارسال کنید.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 relative space-y-3">
                <div className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center">
                  ۲
                </div>
                <h3 className="font-bold text-white text-base">تنظیم لایحه موشکافانه توسط متخصص</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  تیم حقوقی نگارش یار لایحه تخصصی تقاضای استعلام را با استناد دقیق به اختیارات کشف حقیقت بازپرس/قاضی و آیین دادرسی تدوین می‌کند.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 relative space-y-3">
                <div className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center">
                  ۳
                </div>
                <h3 className="font-bold text-white text-base">تحویل فوری و تقدیم به شعبه</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  فایل آماده لایحه به همراه راهنمای نحوه تقدیم و توضیحات شفاهی به شما تقدیم می‌شود تا بلافاصله به شعبه رسیدگی‌کننده تسلیم نمایید.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ----------------- MESSENGERS CTA SECTION (PRIMARY CONVERSION) ----------------- */}
      <section id="messengers" className="py-14 md:py-20 border-b border-slate-800/80 relative">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[radial-gradient(circle_at_center,rgba(229,193,88,0.1)_0%,transparent_70%)] pointer-events-none -z-10" />

        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>پشتیبانی آنلاین و پاسخگویی فوری</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                همین حالا پیام دهید؛ اجازه ندهید شهادت کذب حق شما را ضایع کند!
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
                روی پیام‌رسان دلخواه خود کلیک کنید تا مستقیماً به مشاور و کارشناس تنظیم اوراق قضایی نگارش یار متصل شوید:
              </p>
            </div>

            {/* Messenger Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {messengerLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.ariaLabel}
                  className="group p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-600 hover:bg-slate-800/90 transition-all flex items-center justify-between shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-white text-base shadow"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm group-hover:text-[#E5C158] transition-colors">
                          ارتباط در {item.name}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                        {item.badge}
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#E5C158] transition-colors" />
                </a>
              ))}

              {/* Direct Phone Call Card */}
              <a
                href={`tel:${OFFICIAL_PHONE}`}
                className="group p-4 rounded-xl bg-gradient-to-r from-slate-900 to-slate-900 border border-[#E5C158]/50 hover:border-[#E5C158] transition-all flex items-center justify-between shadow-md sm:col-span-2 lg:col-span-1"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#E5C158] text-[#070B15] flex items-center justify-center font-black text-base shadow">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-white text-sm group-hover:text-[#E5C158] transition-colors">
                      تماس تلفنی مستقیم
                    </span>
                    <span className="text-[11px] text-slate-300 dir-ltr font-mono block mt-0.5">
                      {OFFICIAL_PHONE}
                    </span>
                  </div>
                </div>
                <ArrowLeft className="w-4 h-4 text-[#E5C158] group-hover:-translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Note */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-center text-xs text-slate-400">
              🔒 محرمانگی کامل اطلاعات پرونده و هویت شما تضمین‌شده است. متن لایحه حداکثر ظرف چند ساعت کاری آماده و تحویل می‌گردد.
            </div>
          </div>
        </Container>
      </section>

      {/* ----------------- FAQS SECTION ----------------- */}
      <section className="py-12 md:py-16 bg-[#090E1D] border-b border-slate-800/80">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold text-[#E5C158] uppercase tracking-wider">
                سوالات متداول
              </span>
              <h2 className="text-xl sm:text-3xl font-black text-white">
                پاسخ به سوالات کلیدی شما درباره استعلام حضور شاهد
              </h2>
            </div>

            <div className="space-y-3">
              {faqItems.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="rounded-xl bg-slate-900/80 border border-slate-800/80 overflow-hidden transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-right hover:bg-slate-800/40 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-sm sm:text-base text-white">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#E5C158] shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ----------------- FINAL PROMISE / CTA ----------------- */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white">
              تنها چند کلمه قانونی دقیق می‌تواند سرنوشت کل پرونده شما را عوض کند
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
              نگذارید شهادت کسی که حتی یک ثانیه هم در صحنه حادثه نبوده، زندگی و آبروی شما را تباه کند. ما تا اثبات حقانیت و بی‌گناهی کامل شما در کنارتان هستیم.
            </p>
            <div className="pt-2">
              <a
                href="#messengers"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#070B15] font-black text-sm sm:text-base shadow-lg hover:brightness-110 active:scale-[0.98] transition-all"
              >
                <span>شروع بررسی پرونده در پیام‌رسان‌ها</span>
                <ArrowLeft className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export const faqItems = [
  {
    q: 'آیا بازپرس یا قاضی واقعاً دستور استعلام دکل مخابراتی برای شاهد صادر می‌کند؟',
    a: 'بله، طبق ماده ۹۶ و سایر اصول حاکم بر کشف حقیقت در قانون آیین دادرسی کیفری و مدنی، مقام قضایی مکلف به انجام هرگونه تحقیق و تفحص ضروری جهت کشف واقع است. با این حال، شرط موافقت قاضی این است که لایحه با استدلال‌های فنی، ذکر تعارضات زمانی و شیوه صحیح تقاضا تدوین شده باشد، نه به شکل کلی‌گویی عامیانه.',
  },
  {
    q: 'اگر شاهد بگوید تلفن همراهم همراهم نبوده یا خاموش بوده تکلیف چیست؟',
    a: 'این یکی از ترفندهای معمول شهود دروغین است؛ اما کارشناسان ما در لایحه تدابیری اتخاذ می‌کنند که استعلام‌های تکمیلی (همچون تراکنش‌های بانکی در همان ساعت، دوربین‌های مداربسته محل ادعایی یا استعلام سیم‌کارت‌های ثانویه) قاضی را به کذب بودن ادعای شاهد هدایت کند.',
  },
  {
    q: 'تنظیم لایحه استعلام حضور شاهد چقدر زمان می‌برد؟',
    a: 'به دلیل اضطرار زمانی پرونده‌های دادگاهی و لزوم تقدیم فوری پیش از صدور قرار جلب به دادرسی یا رأی، این لایحه ظرف ۳ الی ۵ ساعت کاری به صورت کاملاً آماده تحویل شما می‌شود.',
  },
  {
    q: 'آیا می‌توان بعد از اثبات دروغین بودن شاهد، از او شکایت کرد؟',
    a: 'قطعاً. بر اساس ماده ۶۵۰ قانون مجازات اسلامی، شهادت دروغین جرم کیفری بوده و ۳ ماه تا ۲ سال حبس دارد. علاوه بر آن می‌توانید برای جبران تمامی خسارات وارده و اعاده حیثیت دعوای حقوقی و کیفری مطرح کنید.',
  },
  {
    q: 'چگونه باید سفارش خود را ثبت کنم؟',
    a: 'کافی است روی یکی از دکمه‌های پیام‌رسان‌های ایرانی (ایتا، روبیکا، بله) یا تلگرام و واتساپ کلیک کنید و یا با شماره تلفن رسمی ۰۹۹۱۵۱۴۷۷۸۹ تماس حاصل فرمایید. کارشناس مربوطه بلافاصله مدارک و توضیحات شما را تحویل می‌گیرد.',
  },
];
