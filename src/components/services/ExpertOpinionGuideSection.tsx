import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import {
  FileText,
  AlertTriangle,
  BookOpen,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Gavel,
} from 'lucide-react';

export function ExpertOpinionGuideSection() {
  const steps = [
    {
      num: '۱',
      title: 'محاسبه دقیق مهلت یک هفته ای (ماده ۲۶۰)',
      desc: 'تاریخ رویت ابلاغیه در ثنا مبنای موعد قانونی یک هفته ای است. روز ابلاغ و اقدام طبق قواعد آیین دادرسی محاسبه می گردد.',
    },
    {
      num: '۲',
      title: 'بررسی تطبیقی گزارش با قرار دادگاه',
      desc: 'بررسی دقیق این موضوع که آیا کارشناس به تمام سؤالات مندرج در قرار دادگاه پاسخ داده یا از حیطه صلاحیت فنی خود خارج شده است.',
    },
    {
      num: '۳',
      title: 'استخراج تناقضات و مغایرت با ماده ۲۶۵',
      desc: 'مستندسازی عدم انطباق نتیجه ارزیابی با واقعیات ملموس، فاکتورها، نقشه ها و اسناد مسجل موجود در پرونده.',
    },
    {
      num: '۴',
      title: 'تنظیم لایحه مستدل و درخواست هیئت ۳ نفره',
      desc: 'ثبت لایحه فنی از طریق دفاتر خدمات الکترونیک قضایی همراه با تقاضای صریح ارجاع به کارشناسان مرحله بعد.',
    },
  ];

  const comparison = [
    {
      title: 'کارشناس بدوی (یک نفره)',
      authority: 'تعیین توسط قاضی شعبه یا توافق طرفین',
      cost: 'مطابق تعرفه رسمی دستمزد کارشناسان',
      scope: 'معاینه اولیه محل و ارائه گزارش کارشناسی اولیه',
    },
    {
      title: 'هیئت سه نفره کارشناسان',
      authority: 'صدور قرار ارجاع پس از اعتراض موجه به نظر اول',
      cost: 'تودیع توسط معترض ظرف یک هفته از اخطاریه',
      scope: 'بازبینی مجدد کلیه محاسبات، مدارک و بازدید میدانی مجدد',
    },
    {
      title: 'هیئت های ۵ یا ۷ نفره (استثنایی)',
      authority: 'صلاحدید دادگاه در دعاوی با پیچیدگی های فنی و مالی سنگین',
      cost: 'تودیع توسط متقاضی یا به دستور ویژه دادگاه',
      scope: 'حل تعارضات بنیادین میان گزارش های متناقض قبلی',
    },
  ];

  const clusterSamples = [
    {
      title: 'نمونه لایحه اعتراض به نظریه کارشناسی رسمی',
      href: '/samples/expert-opinion-objection',
      desc: 'متن استاندارد ایراد فنی به گزارش کارشناس بدوی مستند به ماده ۲۶۰ ق.آ.د.م.',
      badge: 'نمونه لایحه اصلی',
    },
    {
      title: 'نمونه لایحه اعتراض به کارشناسی ظرف یک هفته',
      href: '/samples/expert-opinion-objection-brief',
      desc: 'لایحه سریع رعایت مواعد قانونی و تقاضای ارجاع به هیئت سه نفره.',
      badge: 'مهلت یک هفته',
    },
    {
      title: 'نمونه لایحه رد کارشناس رسمی (ماده ۲۶۱)',
      href: '/samples/expert-recusal-objection-brief',
      desc: 'اعلام موارد رد دادرس نظیر قرابت نسبی، سببی، نفع شخصی یا رابطه خادم و مخدومی.',
      badge: 'رد کارشناس',
    },
    {
      title: 'نمونه لایحه تودیع دستمزد کارشناس (ماده ۲۵۹)',
      href: '/samples/expert-deposit-payment-brief',
      desc: 'اعلام پرداخت سپرده دستمزد کارشناسی و پیوست فیش بانکی در مهلت قانونی.',
      badge: 'تودیع دستمزد',
    },
    {
      title: 'نمونه دادخواست تأمین دلیل با جلب نظر کارشناس',
      href: '/samples/evidence-preservation',
      desc: 'صورت برداری و ثبت رسمی خسارات خودرو، ملک یا تخلفات ساختمانی قبل از طرح دعوا.',
      badge: 'تأمین دلیل',
    },
  ];

  return (
    <section className="relative space-y-12">
      <Container>
        {/* Header Badge & Title */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold">
            <Sparkles className="w-4 h-4" />
            <span>راهنمای کاربردی دادرسی، امور کارشناسی و حفظ ادله</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            اصول حقوقی اعتراض به نظریه کارشناسی و ارجاع پرونده به هیئت کارشناسان
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            بررسی مهلت های قانونی، نحوه اثبات مغایرت گزارش طبق ماده ۲۶۵ مدنی، مراحل انتخاب هیئت سه نفره و شیوه استناد به تامین دلیل در محاکم دادگستری.
          </p>
        </div>

        {/* 4 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-800 bg-[#0D1424] p-6 space-y-4 hover:border-[#E5C158]/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#E5C158]/15 border border-[#E5C158]/30 flex items-center justify-center font-black text-[#E5C158] text-lg">
                {step.num}
              </div>
              <h3 className="text-base font-bold text-white">{step.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="rounded-2xl border border-slate-800 bg-[#0D1424] p-6 sm:p-8 space-y-6 mb-12">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <Gavel className="w-6 h-6 text-[#E5C158]" />
            <div>
              <h3 className="text-lg font-bold text-white">
                تفاوت و سلسله مراتب مراحل کارشناسی در دادگاه
              </h3>
              <p className="text-xs text-slate-400">
                بررسی اختیارات قانونی، نحوه تعیین و قواعد تودیع دستمزد در مراحل گوناگون
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {comparison.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-5 space-y-3"
              >
                <div className="text-[#E5C158] font-bold text-base flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E5C158]" />
                  <span>{item.title}</span>
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                  <p>
                    <strong className="text-slate-200">نحوه انتخاب:</strong>{' '}
                    {item.authority}
                  </p>
                  <p>
                    <strong className="text-slate-200">هزینه و دستمزد:</strong>{' '}
                    {item.cost}
                  </p>
                  <p>
                    <strong className="text-slate-200">محدوده عمل:</strong>{' '}
                    {item.scope}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Warning & Legal Truth Box */}
        <div className="rounded-2xl border border-amber-500/30 bg-amber-950/20 p-6 sm:p-7 space-y-4 mb-12">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-sm sm:text-base">
            <AlertTriangle className="w-5 h-5 shrink-0" />
            <span>نکات حیاتی حقوقی پیرامون کارشناسی و تأمین دلیل</span>
          </div>
          <ul className="text-xs sm:text-sm text-slate-300 space-y-2.5 list-disc list-inside leading-relaxed text-justify">
            <li>
              <strong>عدم ارجاع خودکار به هیئت سه نفره:</strong> دادگاه ملزم نیست با هر اعتراضی قرار کارشناسی مجدد صادر کند؛ تنها در صورتی که اعتراض دارای استدلال فنی قوی و دلایل موجه باشد با ارجاع به هیئت موافقت خواهد شد.
            </li>
            <li>
              <strong>تأمین دلیل به منزله اثبات تقصیر یا محکومیت نیست:</strong> طبق ماده ۱۴۹ و ۱۵۰ قانون آیین دادرسی مدنی، قرار تأمین دلیل صرفاً جهت صورت برداری و حفظ ادله است و تشخیص درجه ارزش آن در زمان دادرسی دعوای ماهوی با دادگاه رسیدگی کننده خواهد بود.
            </li>
            <li>
              <strong>پیامدهای سنگین عدم پرداخت دستمزد (ماده ۲۵۹):</strong> چنانچه معترض ظرف یک هفته از اخطاریه شعبه دستمزد تعیین شده را تودیع نکند، کارشناسی از عداد دلایل وی خارج می شود و حق تجدید کارشناسی در آن مرحله ساقط می گردد.
            </li>
          </ul>
        </div>

        {/* Pillar Hub Reference Card */}
        <div className="rounded-2xl border border-[#E5C158]/30 bg-gradient-to-l from-[#0D1424] to-[#151F35] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#E5C158] text-xs font-bold">
              <BookOpen className="w-4 h-4" />
              <span>پایگاه دانش حقوقی تخصصی نگارش یار</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white">
              مطالعه مقاله جامع کارشناسی سه نفره و پنج نفره دادگاه
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              جهت آشنایی تفصیلی با قواعد انتخاب کارشناسان، فرمول مواعد ثنا و رویه قضایی شعب حقوقی و کیفری، مقاله پایگاه دانش را مطالعه فرمایید.
            </p>
          </div>
          <Link
            href="/knowledge/expert-panel-court"
            className="shrink-0 px-5 py-3 rounded-xl bg-[#E5C158] hover:bg-[#d4b045] text-slate-950 text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shadow-lg"
          >
            <span>مشاهده راهنمای تفصیلی</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

        {/* Cluster Internal Links */}
        <div className="rounded-2xl border border-slate-800 bg-[#0D1424] p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-[#E5C158]" />
              <h3 className="text-base sm:text-lg font-bold text-white">
                نمونه دادخواست ها، لوایح و فرم های مرتبط با امور کارشناسی
              </h3>
            </div>
            <Link
              href="/samples"
              className="text-xs text-[#E5C158] hover:underline flex items-center gap-1 font-bold"
            >
              <span>مشاهده همه نمونه ها</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {clusterSamples.map((sample, idx) => (
              <Link
                key={idx}
                href={sample.href}
                className="block p-4 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800/80 hover:border-[#E5C158]/40 transition-all space-y-2 group"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#E5C158] transition-colors line-clamp-1">
                    {sample.title}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-[#E5C158] border border-slate-700 shrink-0">
                    {sample.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {sample.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Lawyer Referral Banner */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-right">
            <h4 className="text-sm sm:text-base font-bold text-white">
              نیاز به وکیل متخصص برای اعلام وکالت در پرونده های با مبالغ سنگین کارشناسی؟
            </h4>
            <p className="text-xs text-slate-400">
              چنانچه پرونده ملکی، سرقفلی، پیمانکاری یا تصادفات سنگین دارید، می توانید از خدمات راهنمای انتخاب وکیل منصف نگارش یار بهره مند شوید.
            </p>
          </div>
          <Link
            href="/lawyer-referral"
            className="px-4 py-2.5 rounded-xl border border-[#E5C158]/40 text-[#E5C158] hover:bg-[#E5C158]/10 text-xs font-bold flex items-center gap-1.5 shrink-0 transition-colors"
          >
            <span>معرفی وکیل منصف</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
