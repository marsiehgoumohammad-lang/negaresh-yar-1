import React from 'react';
import Link from 'next/link';
import {
 Scale,
 ShieldCheck,
 FileText,
 AlertTriangle,
 HelpCircle,
 Clock,
 DollarSign,
 ChevronLeft,
 Sparkles,
 BookOpen,
} from 'lucide-react';

export function LawyerReferralGuideSection() {
 const guideSteps = [
 {
 step: '۱',
 title: 'ارزیابی صلاحیت و ماهیت پرونده',
 desc: 'آیا موضوع شما صرفاً نیازمند یک دفاعیه کتبی استاندارد، لایحه مستند یا دادخواست اولیه است یا حضور الزامی وکیل در دادسرا و دادگاه را می طلبد؟ تشخیص درست نیاز واقعی، مانع تحمیل مبالغ سنگین حق الوکاله به خانواده ها می شود.',
 },
 {
 step: '۲',
 title: 'تنظیم لایحه رسمی در برابر استخدام کامل وکیل',
 desc: 'در بسیاری از پرونده های حقوقی، خانواده، مالی و اعسار، موکل می تواند با یک لایحه دفاعیه قوی و مستدل به مواد قانونی شخصاً از حقوق خود دفاع کند. در دعاوی جنایی پیچیده یا املاک سنگین، داشتن وکیل دادگستری برای اعلام وکالت ضروری است.',
 },
 {
 step: '۳',
 title: 'شفاف سازی حق الوکاله و قرارداد الکترونیک',
 desc: 'حق الوکاله باید دقیقاً متناسب با ارزش خواسته، مرحله دادرسی (بدوی، تجدیدنظر یا فرجام خواهی) و شرایط مالی موکل به صورت اقساطی تعیین شود و تمامی مبالغ در سامانه خودکاربری ثبت و شفاف گردد.',
 },
 ];

 const relevantSamples = [
 {
 title: 'نمونه لایحه اعلام عزل وکیل دادگستری و سلب اختیارات',
 href: '/samples/lawyer-dismissal-notice-request',
 badge: 'ماده ۳۷ و ۳۸ ق.آ.د.م',
 desc: 'الگوی رسمی سلب اختیارات وکیل و هدایت سیستمی کلیه ابلاغیه ها به سامانه ثنای موکل.',
 },
 {
 title: 'نمونه دادخواست اعسار از محکوم به و هزینه دادرسی',
 href: '/samples/court-fee-insolvency',
 badge: 'ماده ۵۰۴ ق.آ.د.م',
 desc: 'تقاضای معافیت از هزینه دادرسی و تقسیط بدهی دادگاه در زمان عدم تمکن مالی.',
 },
 {
 title: 'نمونه لایحه اعتراض به نظریه کارشناسی',
 href: '/samples/expert-opinion-objection',
 badge: 'ماده ۲۶۰ ق.آ.د.م',
 desc: 'دفاعیه مستند در مهلت قانونی یک هفته ای جهت ارجاع امر به هیئت سه نفره کارشناسان.',
 },
 ];

 const relevantKnowledge = [
 {
 title: 'تفاوت دادخواست، لایحه دفاعیه و شکواییه در محاکم ایران',
 href: '/knowledge/petition-vs-complaint',
 badge: 'آیین دادرسی',
 desc: 'راهنمای تفکیک دعاوی مدنی و کیفری و انتخاب مسیر درست اقامه دعوا.',
 },
 {
 title: 'اعسار چیست و چگونه در دادگاه اثبات می شود؟',
 href: '/knowledge/what-is-insolvency',
 badge: 'قوانین مدنی',
 desc: 'مقررات عدم تمکن مالی، ارائه استشهادیه شهود و فهرست اموال در محاکم.',
 },
 {
 title: 'نحوه تجدیدنظرخواهی از آرای دادگاه و مهلت های قانونی',
 href: '/knowledge/how-to-appeal-court-decision',
 badge: 'اعتراض به آرا',
 desc: 'بررسی مواعد ۲۰ روزه تجدیدنظرخواهی، فرجام خواهی و جهات نقض دادنامه.',
 },
 ];

 return (
 <section className="space-y-12">
 {/* Header */}
 <div className="max-w-3xl space-y-3">
 <div className="inline-flex items-center gap-2 text-[#E5C158] text-xs font-bold uppercase tracking-wider">
 <Sparkles className="w-4 h-4" />
 <span>اصول راهنمای انتخاب وکیل منصف و مدیریت هزینه دادرسی</span>
 </div>
 <h2 className="text-2xl sm:text-4xl font-black text-white">
 راهنمای عملی انتخاب وکیل متعهد و مدیریت هوشمندانه هزینه ها
 </h2>
 <p className="text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
 بسیاری از شهروندان هنگام مواجهه با پرونده های قضایی به دلیل عدم آشنایی با مقررات، یا مبالغ گزافی به عنوان حق الوکاله متحمل می شوند یا به وعده های غیرقانونی «تضمین ۱۰۰٪ نتیجه» اعتماد می کنند. شناخت حقوق قانونی موکل، مسیر صحیح دادرسی را هموار می سازد:
 </p>
 </div>

 {/* 3 Step Pillar Guidelines */}
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {guideSteps.map((item, idx) => (
 <div
 key={idx}
 className="rounded-2xl border border-slate-800 bg-[#0D1424] p-6 space-y-4 hover:border-[#E5C158]/40 transition-colors"
 >
 <div className="w-10 h-10 rounded-xl bg-[#E5C158]/15 border border-[#E5C158]/30 flex items-center justify-center font-black text-[#E5C158] text-lg">
 {item.step}
 </div>
 <h3 className="text-lg font-bold text-white">{item.title}</h3>
 <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
 {item.desc}
 </p>
 </div>
 ))}
 </div>

 {/* Warning Box: Ethical & Legal Notice */}
      <div className="rounded-2xl border border-amber-500/30 bg-amber-950/20 p-6 sm:p-7 space-y-3">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-sm sm:text-base">
          <AlertTriangle className="w-5 h-5 shrink-0" />
          <span>نکات مهم حقوقی در قرارداد وکالت و حدود تعهدات وکیل</span>
        </div>
        <ul className="text-xs sm:text-sm text-slate-300 space-y-2 list-disc list-inside leading-relaxed text-justify">
          <li>
            <strong>عدم امکان تضمین نتیجه دادرسی:</strong> نتیجه نهایی رسیدگی به دعوا بر عهده مرجع قضایی است و تابع دلایل ابرازی، انطباق با قوانین و اوضاع و احوال پرونده می باشد؛ بنابراین هیچ وکیلی نمی تواند نتیجه رسیدگی قضایی را به صورت قطعی تضمین نماید.
          </li>
          <li>
            <strong>تنظیم قرارداد الکترونیک وکالت:</strong> روابط مالی، حدود اختیارات و شرایط پرداخت حق الوکاله تابع قانون و توافق معتبر طرفین بوده و باید در سامانه قرارداد الکترونیک وکالت ثبت و منعقد گردد.
          </li>
          <li>
            <strong>مقررات قانونی عزل وکیل:</strong> مطابق مواد ۳۷ و ۳۸ قانون آیین دادرسی مدنی، موکل در هر مرحله از دادرسی می تواند وکیل خود را عزل کند؛ عزل وکیل مانع جریان دادرسی نبوده و تا زمان اعلام کتبی عزل به دادگاه، اقدامات انجام شده توسط وکیل در حدود وکالت معتبر است.
          </li>
        </ul>
      </div>

      {/* Bi-directional links: Samples & Knowledge */}
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
 {/* Box 1: Related Samples */}
 <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
 <div className="flex items-center justify-between border-b border-slate-800 pb-3">
 <div className="flex items-center gap-2 text-white font-bold text-base">
 <BookOpen className="w-5 h-5 text-[#E5C158]" />
 <span>نمونه اسناد قضایی و لوایح مرتبط</span>
 </div>
 <Link
 href="/samples"
 className="text-xs text-[#E5C158] hover:underline flex items-center gap-1 font-bold"
 >
 <span>مشاهده همه</span>
 <ChevronLeft className="w-3.5 h-3.5" />
 </Link>
 </div>
 <div className="space-y-3">
 {relevantSamples.map((sample, idx) => (
 <Link
 key={idx}
 href={sample.href}
 className="block p-3 rounded-xl bg-slate-800/40 hover:bg-slate-800 border border-slate-800/80 hover:border-[#E5C158]/30 transition-all space-y-1"
 >
 <div className="flex items-center justify-between">
 <span className="text-xs sm:text-sm font-bold text-white hover:text-[#E5C158] transition-colors">
 {sample.title}
 </span>
 <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
 {sample.badge}
 </span>
 </div>
 <p className="text-xs text-slate-400 line-clamp-1">{sample.desc}</p>
 </Link>
 ))}
 </div>
 </div>

 {/* Box 2: Related Knowledge Guides */}
 <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
 <div className="flex items-center justify-between border-b border-slate-800 pb-3">
 <div className="flex items-center gap-2 text-white font-bold text-base">
 <FileText className="w-5 h-5 text-[#E5C158]" />
 <span>مقالات و راهنماهای حقوقی دادرسی</span>
 </div>
 <Link
 href="/knowledge"
 className="text-xs text-[#E5C158] hover:underline flex items-center gap-1 font-bold"
 >
 <span>پایگاه دانش</span>
 <ChevronLeft className="w-3.5 h-3.5" />
 </Link>
 </div>
 <div className="space-y-3">
 {relevantKnowledge.map((item, idx) => (
 <Link
 key={idx}
 href={item.href}
 className="block p-3 rounded-xl bg-slate-800/40 hover:bg-slate-800 border border-slate-800/80 hover:border-[#E5C158]/30 transition-all space-y-1"
 >
 <div className="flex items-center justify-between">
 <span className="text-xs sm:text-sm font-bold text-white hover:text-[#E5C158] transition-colors">
 {item.title}
 </span>
 <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
 {item.badge}
 </span>
 </div>
 <p className="text-xs text-slate-400 line-clamp-1">{item.desc}</p>
 </Link>
 ))}
 </div>
 </div>
 </div>
 </section>
 );
}
