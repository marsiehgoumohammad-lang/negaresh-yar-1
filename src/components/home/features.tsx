import React from 'react';
import { Container } from '../ui/container';

const features = [
  {
    title: 'سرعت فوق‌العاده در تحویل',
    badge: 'تحویل فوری (کمتر از ۲ ساعت)',
    description: 'درخواست‌ها و نگارش متون شما با اولویت ویژه و در سریع‌ترین زمان ممکن توسط کارشناسان مسلط بررسی و آماده می‌شوند.',
    metric: '⚡ ۲ ساعته',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'تخصص و دقت حقوقی',
    badge: 'تنظیم تخصصی و استاندارد',
    description: 'تنظیم متون اداری، لایحه‌ها و دادخواست‌ها با رعایت کامل اصول نگارش رسمی، آیین دادرسی و ضوابط اداری کشور.',
    metric: '⚖️ انطباق با ضوابط قانونی',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'پشتیبانی آنلاین و مستقیم',
    badge: 'ارتباط مستقیم با کارشناس',
    description: 'امکان مشاوره، ویرایش فوری و پیگیری لحظه‌ای سفارش‌ها از طریق ایتا، روبیکا و تلگرام بدون اتلاف وقت.',
    metric: '💬 ۲۴/۷ فعال',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: 'محرمانگی و امنیت کامل',
    badge: 'حفظ مطلق حریم خصوصی',
    description: 'کلیه اسناد، مدارک اداری، اوراق قضایی و اطلاعات شخصی شما تحت استانداردهای سخت‌گیرانه محرمانگی نگهداری می‌شوند.',
    metric: '🔒 محرمانگی کامل',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section id="why-us" className="py-14 sm:py-20 bg-[#070B15] text-white border-b border-slate-800/80 relative overflow-hidden">
      
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[350px] bg-[radial-gradient(circle_at_center,rgba(229,193,88,0.06)_0%,transparent_70%)] pointer-events-none -z-10 -translate-y-1/2" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[250px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.04)_0%,transparent_70%)] pointer-events-none -z-10" />

      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121A2D] border border-[#E5C158]/40 text-[#E5C158] text-xs font-bold mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#E5C158] animate-pulse" />
            <span>مزایای رقابتی نگارش یار</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
            چرا نگارش یار را انتخاب کنیم؟
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            ما با تمرکز بر کیفیت نگارش، تخصص حقوقی و تحویل فوری، بهترین تجربه را از خدمات اداری و عریضه‌نویسی آنلاین فراهم می‌سازیم.
          </p>
        </div>
        
        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#0D1424] rounded-2xl border border-slate-800 p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-[#E5C158]/40 hover:shadow-[0_15px_40px_rgba(229,193,88,0.1)] transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle hover gradient line */}
              <div className="absolute top-0 right-0 w-24 h-[2px] bg-gradient-to-l from-[#E5C158] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#121A2D] border border-[#E5C158]/30 text-[#E5C158] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#E5C158] group-hover:text-[#070B14] transition-all duration-300 shadow-inner">
                    {feature.icon}
                  </div>
                  <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#121A2D] text-[#E5C158] font-bold border border-[#E5C158]/25 shadow-sm">
                    {feature.metric}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-[11px] font-bold text-[#E5C158]/80 block mb-1">
                    {feature.badge}
                  </span>
                  <h3 className="text-lg font-black text-white group-hover:text-[#E5C158] transition-colors leading-snug">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center gap-1 text-[11px] font-bold text-slate-400 group-hover:text-[#E5C158] transition-colors">
                <span>تضمین رضایت و پیگیری</span>
                <span className="transform group-hover:translate-x-[-3px] transition-transform">←</span>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal High-End Trust Banner at Bottom */}
        <div className="mt-12 sm:mt-16 bg-[#0D1424] rounded-2xl border border-[#E5C158]/25 p-5 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#121A2D] border border-[#E5C158]/40 text-[#E5C158] flex items-center justify-center font-bold text-lg shrink-0">
              ⭐
            </div>
            <div>
              <span className="font-extrabold text-white block">رضایت بالای ۹۸٪ کاربران</span>
              <span className="text-slate-400 text-xs">ثبت بیش از ۵,۰۰۰ درخواست رسمی موفق در سراسر کشور</span>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-[#121A2D] px-4 py-2.5 rounded-xl border border-slate-800 text-[#E5C158] font-bold text-xs">
            <span className="w-2 h-2 rounded-full bg-[#E5C158] animate-pulse" />
            <span>آماده پذیرش و نگارش فوری سفارش شما</span>
          </div>
        </div>
      </Container>
    </section>
  );
}

