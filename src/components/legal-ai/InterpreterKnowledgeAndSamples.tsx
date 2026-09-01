import React from 'react';
import Link from 'next/link';
import { BookOpen, FileCheck2, ArrowLeft } from 'lucide-react';

export function InterpreterKnowledgeAndSamples() {
  const KNOWLEDGE_LINKS = [
    {
      title: 'چگونه رای دادگاه را بخوانیم و بفهمیم؟',
      desc: 'راهنمای گام‌به‌گام تحلیل دادنامه بدوی و تجدیدنظر و نحوه محاسبه مهلت اعتراض.',
      href: '/knowledge/how-to-read-court-verdict',
      badge: 'مقاله‌ی جامع',
    },
    {
      title: 'معنی محکوم‌له، محکوم‌علیه و محکوم‌به چیست؟',
      desc: 'راهنمای ساده تشخیص برنده و باخته دادنامه و اصطلاحات حقوقی رای.',
      href: '/knowledge/meaning-of-court-terms',
      badge: 'اصطلاحات رای',
    },
    {
      title: 'رای قطعی دادگاه چیست و اجرائیه چیست؟',
      desc: 'تفاوت حکم قطعی و قابل اعتراض، مهلت‌های قانون و توقیف اموال در اجرائیه.',
      href: '/knowledge/what-is-final-court-judgment',
      badge: 'قطعیت آرا',
    },
    {
      title: 'ابلاغیه ثنا چیست و چگونه خوانده می‌شود؟',
      desc: 'آموزش کامل استعلام ابلاغیه‌های الکترونیکی سامانه عدل ایران و اثر آن در مهلت قانونی.',
      href: '/knowledge/what-is-e-notification',
      badge: 'سامانه ثنا',
    },
    {
      title: 'چگونه به رای دادگاه تجدیدنظرخواهی کنیم؟',
      desc: 'قوانین و مراحل ثبت دادخواست اعتراض به آراء غیرقطعی دادگاه‌های عمومی و کیفری.',
      href: '/knowledge/how-to-appeal-court-decision',
      badge: 'تجدیدنظر',
    },
    {
      title: 'لایحه دفاعیه چیست و چه تفاوتی با دادخواست دارد؟',
      desc: 'اصول نگارش لوایح دفاعیه مستدل و استناد به مواد قانونی در جلسات دادگاه.',
      href: '/knowledge/what-is-legal-brief',
      badge: 'دفاعیه',
    },
    {
      title: 'نحوه اعتراض به قرار منع تعقیب دادسرا',
      desc: 'مراحل ثبت اعتراض شاکی به تصمیم دادیار یا بازپرس ظرف مهلت ۱۰ روزه.',
      href: '/knowledge/how-to-object-prosecution-orders',
      badge: 'دادسرا',
    },
    {
      title: 'تفاوت دادخواست و شکواییه چیست؟',
      desc: 'تفکیک دعاوی حقوقی (مالی، چک، ملک) از پرونده‌های کیفری و نحوه شروع کار.',
      href: '/knowledge/petition-vs-complaint',
      badge: 'پایه حقوقی',
    },
  ];

  const SAMPLE_LINKS = [
    {
      title: 'نمونه متن تجدیدنظرخواهی از رای دادگاه',
      desc: 'نمونه واقعی لایحه اعتراض به رای بدوی همراه با استناد قانونی.',
      href: '/samples/appeal',
    },
    {
      title: 'نمونه دادخواست واخواهی از حکم غیابی',
      desc: 'نمونه فرم اعتراض به آراء غیابی و توقف دستور اجرای احکام.',
      href: '/samples/objection-absent-judgment',
    },
    {
      title: 'نمونه اعتراض به قرار منع تعقیب',
      desc: 'نمونه لایحه شاکی جهت نقض قرار منع تعقیب در دادگاه کیفری.',
      href: '/samples/objection-non-prosecution-order',
    },
    {
      title: 'نمونه لایحه دفاعیه حقوقی و کیفری',
      desc: 'نمونه متون استاندارد دفاع در جلسات رسیدگی دادگاه.',
      href: '/samples/legal-brief',
    },
    {
      title: 'نمونه دادخواست اعسار از پرداخت محکوم‌به',
      desc: 'نمونه درخواست تقسیط بدهی و مهریه به همراه استشهادیه.',
      href: '/samples/insolvency',
    },
    {
      title: 'نمونه درخواست کاهش و تبدیل وثیقه',
      desc: 'نمونه درخواست تخفیف میزان قرار تأمین صادره از سوی دادسرا.',
      href: '/samples/bail-reduction',
    },
  ];

  return (
    <section className="py-12 border-b border-slate-800/80 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Knowledge Articles Section */}
        <div className="space-y-6 text-right">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>پایگاه دانش حقوقی</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                مقالات مرتبط با تفسیر رای و دادنامه
              </h2>
            </div>
            <Link
              href="/knowledge"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E5C158] hover:underline"
            >
              <span>مشاهده تمام مقالات آموزشی</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {KNOWLEDGE_LINKS.map((art, idx) => (
              <Link
                key={idx}
                href={art.href}
                className="p-4 rounded-xl bg-[#0D1424] border border-slate-800 hover:border-[#E5C158]/50 transition-all flex flex-col justify-between group space-y-3"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-[#F3E0A2]">
                    {art.badge}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#E5C158] transition-colors leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    {art.desc}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#E5C158] pt-2 border-t border-slate-800/80">
                  <span>مطالعه مقاله</span>
                  <ArrowLeft className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Sample Documents Section */}
        <div className="space-y-6 text-right">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-2">
                <FileCheck2 className="w-3.5 h-3.5" />
                <span>نمونه اسناد رسمی نگارش یار</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                نمونه دادنامه‌ها و لوایح اعتراض آماده
              </h2>
            </div>
            <Link
              href="/samples"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E5C158] hover:underline"
            >
              <span>مشاهده آرشیو نمونه اسناد</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SAMPLE_LINKS.map((sample, idx) => (
              <Link
                key={idx}
                href={sample.href}
                className="p-4 rounded-xl bg-[#0D1424] border border-slate-800 hover:border-blue-500/50 transition-all flex flex-col justify-between group space-y-3"
              >
                <div className="space-y-1.5">
                  <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                    {sample.title}
                  </h3>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    {sample.desc}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-400 pt-2 border-t border-slate-800/80">
                  <span>مشاهده نمونه متن</span>
                  <ArrowLeft className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
