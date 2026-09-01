import React from 'react';
import Link from 'next/link';
import {
  FileText,
  Mail,
  ShieldAlert,
  ShieldCheck,
  Ban,
  KeyRound,
  Gavel,
  EyeOff,
  Scale,
  Bell,
  Receipt,
  FileSearch,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';

export interface DocTypeItem {
  id: string;
  title: string;
  shortDesc: string;
  searchKeywords: string;
  serviceHref: string;
  icon: React.ElementType;
  badge: string;
}

const DOCUMENT_TYPES: DocTypeItem[] = [
  {
    id: 'dadnameh',
    title: 'دادنامه و رای دادگاه',
    shortDesc: 'تحلیل صریح احکام بدوی و تجدیدنظر، مشخص‌کردن برنده پرونده، خواهان، خوانده و محکوم‌به به زبان ساده.',
    searchKeywords: 'تفسیر رای دادگاه، معنی دادنامه، تحلیل حکم دادگاه',
    serviceHref: '/services/appeal',
    icon: FileText,
    badge: 'پرمراجعه‌ترین',
  },
  {
    id: 'eblaghiyeh',
    title: 'ابلاغیه الکترونیک ثنا',
    shortDesc: 'بررسی احضاریه‌ها، زمان حضور در دادسرا، مفاد ابلاغیه‌های قضایی و محاسبه مهلت قانونی اقدام.',
    searchKeywords: 'تفسیر ابلاغیه ثنا، معنی ابلاغیه دادگاه، مهلت ابلاغیه',
    serviceHref: '/services/court-document-explainer',
    icon: Mail,
    badge: 'رایگان',
  },
  {
    id: 'gharar-dadsara',
    title: 'قرار نهایی دادسرا',
    shortDesc: 'تشخیص تصمیم بازپرس یا دادیار در مرحله تحقیقات مقدماتی و تعیین مسیر پرونده کیفری.',
    searchKeywords: 'تفسیر قرار دادسرا، قرار مجرمیت، جلب به دادرسی',
    serviceHref: '/services/legal-brief',
    icon: ShieldAlert,
    badge: 'کیفری',
  },
  {
    id: 'gharar-mane-taghib',
    title: 'قرار منع تعقیب',
    shortDesc: 'تحلیل دلایل رد اتهام در دادسرا و آموزش نحوه اعتراض شاکی ظرف مهلت ۱۰ روزه قانونی.',
    searchKeywords: 'تفسیر قرار منع تعقیب، اعتراض به قرار دادسرا',
    serviceHref: '/services/objection-non-prosecution-order',
    icon: ShieldCheck,
    badge: 'قابل اعتراض',
  },
  {
    id: 'gharar-moughofi',
    title: 'قرار موقوفی تعقیب',
    shortDesc: 'بررسی علل موقوف شدن پرونده مانند گذشت شاکی، فوت متهم، شمول مرور زمان یا توبه.',
    searchKeywords: 'قرار موقوفی تعقیب، مرور زمان کیفری',
    serviceHref: '/services/legal-brief',
    icon: Ban,
    badge: 'خاتمه تعقیب',
  },
  {
    id: 'gharar-vasiqeh',
    title: 'قرار وثیقه و کفالت',
    shortDesc: 'تشخیص میزان مالی یا ضمانت درخواستی دادسرا و راهنمای درخواست تخفیف یا تبدیل قرار تأمین.',
    searchKeywords: 'تفسیر قرار وثیقه، تخفیف قرار کفالت، فک وثیقه',
    serviceHref: '/services/bail-reduction',
    icon: KeyRound,
    badge: 'تأمین کیفری',
  },
  {
    id: 'ejraiyeh',
    title: 'اجرائیه دادگاه',
    shortDesc: 'بررسی دستور اجرای حکم قطعی، مهلت ۱۰ روزه پرداخت/معرفی اموال و توقف دستور جلب.',
    searchKeywords: 'تفسیر اجرائیه دادگاه، مهلت اجرائیه، جلب محکوم علیه',
    serviceHref: '/services/insolvency-from-judgment',
    icon: Gavel,
    badge: 'اجرای احکام',
  },
  {
    id: 'hokm-ghiabi',
    title: 'حکم غیابی دادگاه',
    shortDesc: 'تشخیص عدم حضور در جلسات دادرسی و تحویل ابلاغیه قانونی/واقعی جهت ثبت درخواست واخواهی.',
    searchKeywords: 'تفسیر حکم غیابی، مهلت واخواهی از حکم غیابی',
    serviceHref: '/services/objection-absent-judgment',
    icon: EyeOff,
    badge: 'فرصت واخواهی',
  },
  {
    id: 'ray-tajdid-nazar',
    title: 'رای دادگاه تجدیدنظر',
    shortDesc: 'تحلیل آراء تایید یا نقض‌شده در دادگاه تجدیدنظر استان و بررسی قابلیت فرجام‌خواهی یا اعاده دادرسی.',
    searchKeywords: 'تفسیر رای تجدیدنظر، قطعیت رای دادگاه',
    serviceHref: '/services/appeal',
    icon: Scale,
    badge: 'مرجع عالی',
  },
  {
    id: 'ekhtariyeh',
    title: 'اخطاریه و احضاریه قضایی',
    shortDesc: 'شناسایی علت احضار به شعب دادسرا یا دادگاه، مدارک لازم برای همراه بردن و عواقب عدم حضور.',
    searchKeywords: 'تفسیر احضاریه دادگاه، عواقب عدم حضور در دادسرا',
    serviceHref: '/services/court-document-explainer',
    icon: Bell,
    badge: 'فوری',
  },
  {
    id: 'asar-documents',
    title: 'اوراق و آراء اعسار',
    shortDesc: 'تحلیل استشهادیه اعسار، آراء تقسیط محکوم‌به یا هزینه دادرسی و توقف عملیات اجرایی.',
    searchKeywords: 'تفسیر رای اعسار، تقسیط مهریه و بدهی',
    serviceHref: '/services/insolvency-petition',
    icon: Receipt,
    badge: 'تقسیط مالی',
  },
  {
    id: 'other-docs',
    title: 'سایر اوراق و صورت‌جلسات',
    shortDesc: 'تفسیر صورت‌جلسات دادگاه، گزارش ضابطین، اظهارنامه‌های رسمی و ابلاغ‌های اجرای احکام مدنی و کیفری.',
    searchKeywords: 'تفسیر صورت جلسه دادگاه، ابلاغیه اجرای احکام',
    serviceHref: '/request',
    icon: FileSearch,
    badge: 'تخصصی',
  },
];

export function InterpreterDocTypes() {
  return (
    <section className="py-12 border-b border-slate-800/80 bg-[#070B15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="text-right space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>پوشش کامل اسناد قضایی ایران</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
            انواع اسناد و اوراق قضایی قابل تفسیر در نگارش یار
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            سامانه هوشمند نگارش یار قادر است انواع متون پیچیده اداری، قضایی و انتظامی کشور را تحلیل کرده و مفاد آن را به زبان روان فارسی توضیح دهد:
          </p>
        </div>

        {/* Grid of 12 Document Types */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {DOCUMENT_TYPES.map((doc) => {
            const Icon = doc.icon;
            return (
              <article
                key={doc.id}
                className="p-5 rounded-2xl bg-[#0D1424] border border-slate-800 hover:border-[#E5C158]/50 transition-all duration-300 flex flex-col justify-between group space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/20 flex items-center justify-center text-[#E5C158] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-800 text-[#F3E0A2] border border-slate-700">
                      {doc.badge}
                    </span>
                  </div>

                  <h3 className="text-sm font-extrabold text-white group-hover:text-[#E5C158] transition-colors leading-snug">
                    {doc.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {doc.shortDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 font-medium truncate max-w-[170px]" title={doc.searchKeywords}>
                    {doc.searchKeywords}
                  </span>
                  <Link
                    href={doc.serviceHref}
                    className="inline-flex items-center gap-1 text-[#E5C158] font-bold hover:underline shrink-0"
                  >
                    <span>اقدام</span>
                    <ArrowLeft className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
