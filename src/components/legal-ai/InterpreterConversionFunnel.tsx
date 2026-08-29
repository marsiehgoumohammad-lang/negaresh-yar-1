import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Sparkles, Scale, FileText, ShieldAlert, EyeOff, Receipt, KeyRound, HelpCircle } from 'lucide-react';

export interface ServiceFunnelCard {
  id: string;
  title: string;
  description: string;
  triggerContext: string;
  href: string;
  icon: React.ElementType;
  badge: string;
}

const FUNNEL_SERVICES: ServiceFunnelCard[] = [
  {
    id: 'appeal',
    title: 'تجدیدنظرخواهی و اعتراض به رای دادگاه',
    description: 'اگر رای بدوی دادگاه به ضرر شما صادر شده، با استناد به قوانین آیین دادرسی و آراء وحدت رویه، لایحه اعتراض تجدیدنظر تنظیم کنید.',
    triggerContext: 'مناسب پس از صدور دادنامه بدوی، رای شورای حل اختلاف یا حکم غیرقطعی',
    href: '/services/appeal',
    icon: Scale,
    badge: 'مهلت ۲۰ روزه',
  },
  {
    id: 'legal-brief',
    title: 'تنظیم لایحه دفاعیه تخصصی',
    description: 'نگارش لوایح دفاعیه مستدل حقوقی و کیفری برای ارائه به شعبه دادسرا، دادگاه بدوی یا تجدیدنظر در جلسات رسیدگی.',
    triggerContext: 'مناسب برای پاسخ به ادعای طرف مقابل، ارائه مدرک جدید یا دفاع حقوقی',
    href: '/services/legal-brief',
    icon: FileText,
    badge: 'دفاعیات محکم',
  },
  {
    id: 'objection-non-prosecution',
    title: 'اعتراض به قرار منع تعقیب دادسرا',
    description: 'در صورتی که دادسرا شکایت شما را رد کرده یا قرار منع تعقیب صادر کرده، ظرف ۱۰ روز اعتراض مستدل خود را به دادگاه کیفری بفرستید.',
    triggerContext: 'مناسب شاکیان پرونده کیفری که به قرار منع تعقیب بازپرس یا دادیار معترض هستند',
    href: '/services/objection-non-prosecution-order',
    icon: ShieldAlert,
    badge: 'مهلت ۱۰ روزه',
  },
  {
    id: 'objection-absent-judgment',
    title: 'واخواهی و اعتراض به حکم غیابی',
    description: 'اگر دادگاه بدون ابلاغ واقعی یا حضور شما رای صادر کرده، با ثبت دادخواست واخواهی پرونده را به جریان انداخته و اجرای حکم را متوقف کنید.',
    triggerContext: 'مناسب افرادی که از صدور رای علیه خود پس از اجرائیه مطلع شده‌اند',
    href: '/services/objection-absent-judgment',
    icon: EyeOff,
    badge: 'توقف اجرای حکم',
  },
  {
    id: 'insolvency-petition',
    title: 'دادخواست اعسار از محکوم‌به و تقسیط بدهی',
    description: 'در صورت عدم تمکن مالی برای پرداخت یکجای بدهی، رد مال یا مهریه، دادخواست اعسار بفرستید تا بدهی شما تقسیط شود.',
    triggerContext: 'مناسب محکوم‌علیه که قصد تقسیط بدهی، توقف حکم جلب و معرفی ضامن دارد',
    href: '/services/insolvency-petition',
    icon: Receipt,
    badge: 'توقف جلب',
  },
  {
    id: 'bail-reduction',
    title: 'کاهش وثیقه و تبدیل قرار تأمین',
    description: 'درخواست رسمی به دادسرا یا دادگاه برای تخفیف مبلغ وثیقه سنگین یا تبدیل قرار وثیقه به قرار کفالت یا مع More.',
    triggerContext: 'مناسب خانواده زندانیان یا متهمانی که توان تامین وثیقه تعیین‌شده را ندارند',
    href: '/services/bail-reduction',
    icon: KeyRound,
    badge: 'تأمین آزادی',
  },
  {
    id: 'explainer-service',
    title: 'تحلیل اختصاصی و مشاوره اوراق قضایی',
    description: 'بررسی خط به خط سند شما توسط کارشناسان ارشد حقوقی نگارش یار و ارائه گزارش کتبی همراه با نقشه راه اقدام.',
    triggerContext: 'مناسب پرونده‌های پیچیده مالی، ملکی یا کیفری با حجم بالای اوراق',
    href: '/services/court-document-explainer',
    icon: HelpCircle,
    badge: 'بررسی تخصصی',
  },
];

export function InterpreterConversionFunnel() {
  return (
    <section className="py-12 border-b border-slate-800/80 bg-[#070B15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Title */}
        <div className="text-right space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>گام بعدی پس از تفسیر رای</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
            خدمات نگارش یار متناسب با نتیجه تفسیر برگه قضایی
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            پس از اینکه متوجه شدید رای دادگاه یا ابلاغیه چه معنایی دارد، زمان اقدام هوشمندانه فراررسیده است. بر اساس شرایط پرونده خود، یکی از خدمات زیر را انتخاب کنید:
          </p>
        </div>

        {/* Funnel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FUNNEL_SERVICES.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className="p-6 rounded-2xl bg-[#0D1424] border border-slate-800 hover:border-[#E5C158]/60 transition-all duration-300 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3 text-right">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/20 flex items-center justify-center text-[#E5C158] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-[#E5C158]/10 text-[#E5C158] border border-[#E5C158]/30">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-extrabold text-white group-hover:text-[#E5C158] transition-colors leading-tight">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {srv.description}
                  </p>

                  <div className="p-2.5 rounded-lg bg-[#070B15] border border-slate-800 text-[11px] text-[#F3E0A2] font-medium leading-normal">
                    💡 {srv.triggerContext}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800">
                  <Link
                    href={srv.href}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-[#E5C158] hover:text-[#070B15] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all duration-200"
                  >
                    <span>ثبت درخواست آنلاین</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
