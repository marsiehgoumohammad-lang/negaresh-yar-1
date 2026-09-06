'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Container } from '@/components/ui/container';
import {
  Scale,
  AlertTriangle,
  MapPin,
  Phone,
  MessageCircle,
  Gavel,
  EyeOff,
  UserX,
  FileWarning,
  Sparkles,
  Lock,
  Search,
  ExternalLink,
  ChevronDown,
  ArrowLeft,
  FileSearch,
  CheckCircle2,
} from 'lucide-react';
import {
  OFFICIAL_PHONE,
  generateMessengerLinks,
} from '@/lib/messengers-links';

const DEFAULT_INQUIRY_MESSAGE =
  'سلام، در پرونده من طرف مقابل شاهد دروغین معرفی کرده و اطمینان دارم شاهد در تاریخ و ساعت واقعه در محل نبوده است. لطفاً جهت تنظیم لایحه تخصصی درخواست استعلام رسمی حضور شاهد از دادیار/بازپرس/قاضی راهنمایی‌ام کنید.';

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
              <span>شاهدی علیه شما شهادت دروغ داده و مطمئنید در صحنه حضور نداشته است؟</span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight md:leading-tight">
              اثبات قطعی <span className="text-[#E5C158]">شهادت دروغین</span> با استعلام رسمی قضایی حضور شاهد در صحنه واقعه
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              اگر طرف مقابل با معرفی شاهد ساختگی یا اجیرشده قصد دارد جرمی را به شما نسبت دهد یا حقتان را ضایع کند، نگران نباشید! ما راهکاری کاملاً قانونی در اختیارتان می‌گذاریم تا با یک درخواست حقوقی دقیق، بازپرس، دادیار یا قاضی شعبه دستور استعلام رسمی صادر کند و مشخص شود آیا واقعاً شاهد در آن تاریخ و ساعت در محل واقعه حضور داشته یا خیر؛ تا در همان مرحله مقدماتی شهادت کذب از درجه اعتبار ساقط گردد.
            </p>

            {/* Trust Points */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-300">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800">
                <FileSearch className="w-4 h-4 text-[#E5C158]" />
                استعلام رسمی و تخصصی با دستور مقام قضایی
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800">
                <Gavel className="w-4 h-4 text-[#E5C158]" />
                احراز قطعی عدم حضور فیزیکی شاهد در ساعت واقعه
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
                    بزرگ‌ترین خطایی که افراد در دادسرا و دادگاه مرتکب می‌شوند این است که صرفاً رو به قاضی، بازپرس یا دادیار می‌کنند و می‌گویند: <span className="text-red-400 font-bold">«جناب قاضی، به خدا قسم این شخص اصلاً اونجا نبود! داره دروغ می‌گه!»</span>
                  </p>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                    متأسفانه طبق قانون، مقام قضایی مکلف به رسیدگی بر اساس ادله رسمی و مستندات پرونده است؛ ادعای شفاهی یا سوگند متقابل شما بدون استعلام قانونی، نمی‌تواند صورت‌جلسه شهادت را باطل کند. اگر به موقع و با زبان حقوقی از مرجع قضایی تقاضای استعلام نکنید، ممکن است بر اساس همان شهادت کذب، رأی محکومیت علیه شما صادر شود!
                  </p>
                </div>
              </div>
            </div>

            {/* The Solution Callout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
                  <FileSearch className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base">استعلام رسمی با دستور قضایی</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  ما درخواستی مستند و نفوذناپذیر برای دادیار، بازپرس یا قاضی تنظیم می‌کنیم تا دستور استعلام رسمی جهت کشف حقیقت و بررسی حضور شاهد صادر شود.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base">اثبات قطعی عدم حضور در صحنه</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  با پاسخ رسمی استعلام به شعبه، عدم حضور شاهد در تاریخ و ساعت حادثه آشکار شده و شهادت ادعایی او بلافاصله از اعتبار قانونی ساقط می‌شود.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Gavel className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base">وارونه شدن بازی به نفع شما</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  پرونده شما از موضع اتهام خارج شده و با اثبات شهادت کذب، شاهد دروغین و طرف مقابل تحت تعقیب کیفری با مجازات سنگین حبس قرار می‌گیرند.
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
                      محرمانه و استراتژیک
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-white">
                      چرا متن این لایحه را به عنوان «نمونه رایگان» در اینترنت منتشر نکرده‌ایم؟
                    </h2>
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-200 leading-relaxed">
                  <p>
                    شاید بپرسید: <span className="text-[#E5C158] font-semibold">«چرا نمونه متن آماده این درخواست را مثل سایر فرم‌ها روی سایت قرار نداده‌اید تا خودمان کپی کنیم؟»</span>
                  </p>
                  <p className="text-slate-300">
                    پاسخ ما کاملاً جدی و بر اساس تجربه ده‌ها پرونده حساس دادگاهی است:
                  </p>
                  
                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                      <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                        ۱
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300">
                        <strong className="text-white">حساسیت بسیار بالای مقام قضایی:</strong> صدور دستور این استعلام نیازمند اقناع وجدانی دادیار، بازپرس یا قاضی و استناد دقیق به اصول کشف حقیقت در آیین دادرسی است. یک لایحه ضعیف یا کپی‌پیست اینترنتی باعث می‌شود قاضی درخواست را به راحتی رد کند.
                      </p>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                      <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                        ۲
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300">
                        <strong className="text-white">سوختن فرصت طلایی غافلگیری:</strong> اگر با یک متن غیرحرفه‌ای اقدام کنید و قاضی درخواست را رد کند، دست شما برای طرف مقابل رو می‌شود و فرصت اصلاح نخواهید داشت.
                      </p>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                      <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                        ۳
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300">
                        <strong className="text-white">تفاوت شرایط هر پرونده:</strong> بسته به اینکه پرونده شما در دادیاری، بازپرسی، دادگاه کیفری دو یا دادگاه حقوقی است، نحوه تقاضا و شروط پذیرش دستور استعلام کاملاً اختصاصی است.
                      </p>
                    </div>
                  </div>

                  <p className="pt-2 font-medium text-slate-200">
                    به همین دلیل ما این راهکار تخصصی را به صورت عمومی و باز در اینترنت رها نکرده‌ایم. متخصصین نگارش یار جزئیات پرونده شما را به دقت مطالعه کرده و متنی مستدل تنظیم می‌کنند که مقام قضایی نتواند آن را نادیده بگیرد.
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
                در چه پرونده‌هایی این استعلام نتیجه را به نفع شما دگرگون می‌کند؟
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
                اگر در هر یک از شرایط زیر قرار گرفته‌اید، با این راهکار قانونی می‌توانید حقانیت و بی‌گناهی خود را به اثبات برسانید:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all space-y-2.5">
                <div className="flex items-center gap-2.5 text-[#E5C158]">
                  <Scale className="w-5 h-5 shrink-0" />
                  <h3 className="font-bold text-white text-base">پرونده‌های درگیری، نزاع و ضرب و جرح</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  طرف مقابل شاهدی آورده که ادعا می‌کند شما مرتکب ضرب و جرح یا تهدید شده‌اید، در حالی که شاهد اصلاً آنجا نبوده است. با استعلام رسمی، غیبت او در زمان واقعه احراز و شهادتش ساقط می‌شود.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all space-y-2.5">
                <div className="flex items-center gap-2.5 text-[#E5C158]">
                  <FileWarning className="w-5 h-5 shrink-0" />
                  <h3 className="font-bold text-white text-base">تصادفات ساختگی و ادعای خسارت صوری</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  شاکی با تبانی و شاهدان ساختگی، ادعای تصادف، خسارت یا فرار از صحنه را مطرح کرده است. اثبات عدم حضور شاهد در صحنه واقعه، کل پرونده را مختومه می‌کند.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all space-y-2.5">
                <div className="flex items-center gap-2.5 text-[#E5C158]">
                  <EyeOff className="w-5 h-5 shrink-0" />
                  <h3 className="font-bold text-white text-base">ادعای توهین، فحاشی، افترا و تهدید</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  شاکی مدعی است شما در ساعتی مشخص در مکانی به او توهین کرده‌اید و برای اثبات آن شاهد معرفی کرده است. با استعلام قضایی کذب بودن کل ماجرا برملا می‌گردد.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all space-y-2.5">
                <div className="flex items-center gap-2.5 text-[#E5C158]">
                  <Gavel className="w-5 h-5 shrink-0" />
                  <h3 className="font-bold text-white text-base">دعاوی ملکی، مالی و مطالبات صوری</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  طرف مقابل مدعی است در مکانی خاص معامله‌ای انجام شده یا پولی رد و بدل گردیده و شاهدی ادعا کرده در آن زمان حاضر بوده است؛ استعلام رسمی صحت حضور را می‌سنجد.
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
                    مجازات شهادت کذب در قانون مجازات اسلامی (ماده ۶۵۰)
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400">
                    وقتی استعلام پاسخ داده شود و دروغ شاهد فاش گردد، ورق پرونده کاملاً برمی‌گردد:
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2">
                <p className="text-[#E5C158] font-bold">
                  متن صریح ماده ۶۵۰ قانون مجازات اسلامی:
                </p>
                <p className="leading-relaxed italic text-slate-200">
                  «هر کس در دادگاه نزد مقامات رسمی شهادت دروغ بدهد، به سه ماه و یک روز تا دو سال حبس و یا به جزای نقدی محکوم خواهد شد.»
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                علاوه بر مجازات حبس شاهد دروغین، کلیه خسارت‌های مادی، معنوی و هزینه‌های دادرسی ناشی از این شهادت کذب، از شاهد و تبانی‌کننده قابل مطالبه قانونی خواهد بود.
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
                فرآیند ساده و محرمانه
              </span>
              <h2 className="text-xl sm:text-3xl font-black text-white">
                ۳ گام تا دریافت لایحه استعلام و ابطال شهادت دروغ
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 relative space-y-3">
                <div className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center">
                  ۱
                </div>
                <h3 className="font-bold text-white text-base">پیام در یکی از پیام‌رسان‌ها</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  از طریق دکمه‌های زیر، در روبیکا، ایتا، بله، تلگرام یا واتساپ پیام دهید و خلاصه پرونده و زمان ادعایی شاهد را مطرح کنید.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 relative space-y-3">
                <div className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center">
                  ۲
                </div>
                <h3 className="font-bold text-white text-base">تنظیم لایحه اختصاصی توسط متخصص</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  تیم حقوقی نگارش یار لایحه استعلام رسمی را با بالاترین دقت و استناد به مواد قانونی مرتبط تنظیم می‌نماید.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 relative space-y-3">
                <div className="w-8 h-8 rounded-full bg-[#E5C158] text-[#070B15] font-black text-sm flex items-center justify-center">
                  ۳
                </div>
                <h3 className="font-bold text-white text-base">تحویل فوری و تقدیم به دادسرا یا دادگاه</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  فایل آماده لایحه به همراه راهنمای نحوه تقدیم به شعبه تحویل شما می‌شود تا بلافاصله دستور استعلام را اخذ نمایید.
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
                روی پیام‌رسان دلخواه خود کلیک کنید تا مستقیماً با کارشناس تنظیم اوراق قضایی نگارش یار ارتباط برقرار فرمایید:
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
              🔒 محرمانگی کامل اطلاعات پرونده و هویت شما تضمین‌شده است. متن لایحه در سریع‌ترین زمان کاری آماده و تحویل می‌گردد.
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
              تنها یک درخواست قانونی دقیق می‌تواند سرنوشت کل پرونده شما را عوض کند
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
              اجازه ندهید شهادت کسی که در صحنه حادثه نبوده، حق شما را تضییع کند. ما تا اثبات حقانیت کامل شما در کنارتان هستیم.
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
    q: 'آیا بازپرس، دادیار یا قاضی واقعاً دستور استعلام جهت بررسی حضور شاهد صادر می‌کند؟',
    a: 'بله؛ بر اساس اصول حاکم بر کشف حقیقت در قوانین دادرسی کشور، مقام قضایی در صورت مواجهه با یک لایحه مستدل و حقوقی، دستور استعلام رسمی را جهت احراز واقعیت صادر می‌نماید. شرط موافقت قاضی این است که لایحه با بیان دقیق حقوقی تنظیم شده باشد.',
  },
  {
    q: 'اگر مطمئن باشیم شاهد دروغ می‌گوید اما ادعا کند آنجا بوده چه باید کرد؟',
    a: 'دقیقاً در همین وضعیت است که این راهکار قانونی به کار می‌آید. با صدور دستور استعلام از مرجع قضایی، حقیقت ماجرا به صورت رسمی و انکارناپذیر روشن شده و کذب بودن ادعای شاهد به اثبات می‌رسد.',
  },
  {
    q: 'تنظیم لایحه استعلام حضور شاهد چقدر زمان می‌برد؟',
    a: 'با توجه به اهمیت مواعد و جلوگیری از تصمیم‌گیری زودهنگام شعبه، این لایحه ظرف چند ساعت کاری به صورت کاملاً آماده و استاندارد تحویل شما می‌شود.',
  },
  {
    q: 'آیا می‌توان پس از اثبات دروغین بودن شاهد، از او شکایت کرد؟',
    a: 'قطعاً. بر اساس ماده ۶۵۰ قانون مجازات اسلامی، شهادت دروغین جرم بوده و مجازات حبس دارد. همچنین می‌توانید برای جبران خسارت‌های وارده اقدام نمایید.',
  },
  {
    q: 'چگونه باید سفارش خود را ثبت کنم؟',
    a: 'کافی است روی یکی از پیام‌رسان‌های ایرانی (ایتا، روبیکا، بله) یا تلگرام و واتساپ کلیک کنید یا با شماره تلفن ۰۹۹۱۵۱۴۷۷۸۹ تماس بگیرید. کارشناسان ما بلافاصله راهنمایی‌تان خواهند کرد.',
  },
];
