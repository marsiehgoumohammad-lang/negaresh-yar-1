import React from 'react';
import { FileSearch, Upload, ShieldCheck } from 'lucide-react';

export function InterpreterHowToReadSection() {
  const STEPS = [
    {
      num: '۱',
      title: 'مشخصات شعبه و شماره پرونده',
      desc: 'در بالای برگه، نام دادگاه (بدوی/تجدیدنظر/دادسرا)، شماره دادنامه، شماره بایگانی پرونده و تاریخ صدور درج شده که مشخص‌کننده مرجع رسیدگی‌کننده است.',
    },
    {
      num: '۲',
      title: 'طرفین دعوا (خواهان/خوانده یا شاکی/متهم)',
      desc: 'مشخصات کامل اشخاص حقیقی یا حقوقی درگیر در پرونده. کلمات خواهان (شروع‌کننده دعوای حقوقی)، خوانده (طرف مقابل)، شاکی (شروع‌کننده پرونده کیفری) و مشتکی‌عنه (متهم) اینجا تعریف می‌شوند.',
    },
    {
      num: '۳',
      title: 'خواسته حقوقی یا عنوان اتهام',
      desc: 'موضوع اصلی شکایت یا دادخواست اولیه؛ مانند مطالبه وجه چک، الزام به تنظیم سند رسمی، طلاق، کلاهبرداری یا خیانت در امانت.',
    },
    {
      num: '۴',
      title: 'دلایل، مدارک و مستندات ابرازی',
      desc: 'اسنادی که طرفین ارائه داده‌اند؛ مانند سند رسمی، شهادت شهود، اقرار، نظریه کارشناس رسمی، جلب نظر ضابطین قضایی یا فاکتورهای مالی.',
    },
    {
      num: '۵',
      title: 'گردش‌کار و استدلال قاضی',
      desc: 'خلاصه روند جلسه دادرسی و تحلیل قاضی پرونده بر روی ادله طرفین؛ قاضی در این بخش توضیح می‌دهد چرا ادعای یک طرف را موجه یا غیرموجه دانسته است.',
    },
    {
      num: '۶',
      title: 'منطوق و اصل رای دادگاه (تصمیم نهایی)',
      desc: 'مهم‌ترین بخش دادنامه! کلمات کلیدی «حکم به محکومیت»، «حکم به رد دعوا»، «قرار منع تعقیب» یا «برائت متهم» در این بخش آورده می‌شوند.',
    },
    {
      num: '۷',
      title: 'محکومیت، رد دعوا یا برائت',
      desc: 'تعیین وضعیت نهایی حقوقی؛ آیا متهم تبرئه شده یا به حبس/جزای نقدی محکوم گردیده؟ آیا خوانده ملزم به پرداخت وجه یا انجام تعهد شده است؟',
    },
    {
      num: '۸',
      title: 'هزینه دادرسی، خسارات و محکوم‌به',
      desc: 'محاسبه دقیق میزان بدهی مالی، خسارت تأخیر تادیه، هزینه‌های دادرسی، حق‌الوکاله طبق تعریف قانونی و حق‌الزحمه کارشناسی.',
    },
    {
      num: '۹',
      title: 'مهلت و مرجع اعتراض (تجدیدنظر/واخواهی)',
      desc: 'در انتهای رای صریحاً ذکر می‌شود که رای حضوری است یا غیابی، و آیا ظرف مهلت ۲۰ روز (مقیمان ایران) یا ۲ ماه (مقیمان خارج) قابل تجدیدنظر/واخواهی در دادگاه استان می‌باشد یا خیر.',
    },
    {
      num: '۱۰',
      title: 'آثار اجرایی و دستور صدور اجرائیه',
      desc: 'پس از قطعیت رای، صدور اجرائیه و ابلاغ ۱۰ روزه به محکوم‌علیه جهت اجرای حکم یا ارائه درخواست اعسار و تقسیط انجام می‌گیرد.',
    },
  ];

  return (
    <section className="py-12 border-b border-slate-800/80 bg-[#070B15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="text-right space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold">
            <FileSearch className="w-3.5 h-3.5" />
            <span>راهنمای گام‌به‌گام خواندن دادنامه</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
            چگونه رای دادگاه را در ۱۰ گام ساده بخوانیم و بفهمیم؟
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            ساختار تمام دادنامه‌ها و آراء قضایی در دادگاه‌های ایران بر اساس یک الگوی قانونمند تنظیم می‌شود. با شناخت این ۱۰ بخش می‌توانید هرگونه رای دادگاه را به‌راحتی تحلیل کنید:
          </p>
        </div>

        {/* 10 Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="p-5 rounded-2xl bg-[#0D1424] border border-slate-800 hover:border-[#E5C158]/40 transition-all flex items-start gap-4 text-right"
            >
              <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158] font-black text-sm shrink-0 mt-0.5">
                {step.num}
              </div>
              <div className="space-y-1.5">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span>{step.title}</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Strong CTA Block */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0D1424] via-[#111A2E] to-[#0D1424] border border-[#E5C158]/40 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-right">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>پاسخ آنی به زبان ساده فارسی</span>
            </div>
            <h3 className="text-base sm:text-lg font-black text-white">
              نمی‌خواهید درگیر اصطلاحات پیچیده دادنامه شوید؟
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              تصویر برگه قضایی، ابلاغیه یا متن دادنامه خود را بارگذاری کنید تا سیستم هوشمند نگارش یار مفاد آن را فوراً و رایگان برایتان خلاصه کند.
            </p>
          </div>

          <a
            href="#interpreter-upload"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#E5C158] to-[#D4AF37] text-[#070B15] font-black text-xs sm:text-sm hover:brightness-110 transition-all shrink-0 flex items-center gap-2 shadow-lg shadow-[#E5C158]/20"
          >
            <Upload className="w-4 h-4" />
            <span>رای خود را همین حالا برای تفسیر رایگان بارگذاری کنید</span>
          </a>
        </div>
      </div>
    </section>
  );
}
