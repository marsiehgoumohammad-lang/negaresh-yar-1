import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../ui/container';

const services = [
  {
    title: 'نگارش نامه‌های اداری',
    badge: 'تنظیم تخصصی',
    description: 'تنظیم تخصصی و دقیق انواع نامه‌ها، درخواست‌ها و مکاتبات اداری و ارگانی مطابق با آخرین ضوابط رسمی کشور.',
    image: '/images/service_letter.jpg',
    actionText: 'ثبت نامه اداری',
    icon: (
      <svg className="w-5 h-5 text-[#E5C158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: 'عریضه‌نویسی و دادخواست',
    badge: 'مشاوره حقوقی',
    description: 'تنظیم شکواییه، دادخواست، اظهارنامه و لوایح دفاعیه معتبر جهت ارائه به دادگاه‌ها و مراجع قضایی.',
    image: '/images/service_legal.jpg',
    actionText: 'ثبت دادخواست و عریضه',
    icon: (
      <svg className="w-5 h-5 text-[#E5C158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'کافی‌نت آنلاین و ثبت‌نام',
    badge: 'پیگیری آنلاین',
    description: 'انجام کلیه خدمات اینترنتی، ثبت‌نام‌های سامانه ثنا، سجام، وام‌ها و استعلام‌های اداری بدون نیاز به مراجعه حضوری.',
    image: '/images/service_cybernet.jpg',
    actionText: 'درخواست خدمات آنلاین',
    icon: (
      <svg className="w-5 h-5 text-[#E5C158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="py-14 sm:py-20 bg-[#070B15] text-white border-b border-secondary-800/40 relative overflow-hidden">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(229,193,88,0.06)_0%,transparent_70%)] pointer-events-none -z-10" />

      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121A2D] border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#E5C158] animate-pulse" />
            <span>خدمات تخصصی و الکترونیک</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            خدمات حرفه‌ای نگارش یار
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            با استفاده از سیستم هوشمند و کارشناسان مجرب، کلیه امور اداری و قضایی خود را با بالاترین دقت و سرعت انجام دهید.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-[#0D1424] rounded-2xl border border-slate-800 hover:border-[#E5C158]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_rgba(229,193,88,0.15)] hover:-translate-y-1.5"
            >
              {/* Card Top 3D Illustration Container */}
              <div>
                <div className="relative w-full aspect-[4/3] bg-slate-900 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    referrerPolicy="no-referrer"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Gradient Overlay for Text Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1424] via-transparent to-transparent opacity-90" />

                  {/* Top Badge */}
                  <div className="absolute top-3 right-3 bg-[#070B15]/80 backdrop-blur-md border border-[#E5C158]/40 px-3 py-1 rounded-lg text-[11px] font-bold text-[#E5C158] shadow-md">
                    {service.badge}
                  </div>
                </div>

                {/* Card Content Header */}
                <div className="p-5 sm:p-6 pb-2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#121A2D] border border-[#E5C158]/30 flex items-center justify-center shrink-0 shadow-inner group-hover:border-[#E5C158] transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#E5C158] transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed min-h-[50px]">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Action Link */}
              <div className="p-5 sm:p-6 pt-3 border-t border-slate-800/80 mt-2">
                <Link
                  href="/request"
                  className="flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-[#121A2D] hover:bg-[#E5C158] text-[#E5C158] hover:text-[#070B15] border border-[#E5C158]/30 hover:border-[#E5C158] font-bold text-xs sm:text-sm transition-all duration-200 group/btn shadow-sm"
                >
                  <span>{service.actionText}</span>
                  <svg className="w-4 h-4 transform group-hover/btn:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

