import React from 'react';
import Link from 'next/link';
import { Container } from '../ui/container';

export function Footer() {
  return (
    <footer className="bg-[#070B15] text-white border-t border-slate-800 relative overflow-hidden pt-12 pb-6">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(229,193,88,0.04)_0%,transparent_70%)] pointer-events-none -z-10" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Info */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#E5C158] text-[#070B15] font-black text-xl flex items-center justify-center shadow-[0_0_15px_rgba(229,193,88,0.3)] shrink-0">
                ن
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-white group-hover:text-[#E5C158] transition-colors leading-tight">
                  نگارش یار
                </span>
                <span className="text-[10px] text-[#E5C158] font-semibold">
                  سامانه خدمات حقوقی و اداری آنلاین
                </span>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              سامانه هوشمند و خدمات آنلاین برای نگارش نامه‌های اداری، عریضه‌نویسی، خدمات کافی‌نت و تفسیر آرای قضایی با هوش مصنوعی.
            </p>
          </div>
          
          {/* Quick Access Links */}
          <div>
            <h3 className="font-bold text-sm text-[#E5C158] mb-3.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158]" />
              <span>دسترسی سریع</span>
            </h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-xs sm:text-sm text-slate-300 hover:text-[#E5C158] transition-colors flex items-center gap-1.5"><span>←</span> صفحه اصلی</a></li>
              <li><a href="#services" className="text-xs sm:text-sm text-slate-300 hover:text-[#E5C158] transition-colors flex items-center gap-1.5"><span>←</span> خدمات ما</a></li>
              <li><a href="#ai-intro" className="text-xs sm:text-sm text-slate-300 hover:text-[#E5C158] transition-colors flex items-center gap-1.5"><span>←</span> تفسیر قضایی</a></li>
              <li><a href="#articles" className="text-xs sm:text-sm text-slate-300 hover:text-[#E5C158] transition-colors flex items-center gap-1.5"><span>←</span> آخرین مقالات</a></li>
            </ul>
          </div>
          
          {/* Main Services */}
          <div>
            <h3 className="font-bold text-sm text-[#E5C158] mb-3.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158]" />
              <span>خدمات اصلی</span>
            </h3>
            <ul className="space-y-2.5">
              <li><a href="#services" className="text-xs sm:text-sm text-slate-300 hover:text-[#E5C158] transition-colors flex items-center gap-1.5"><span>←</span> نگارش نامه‌های اداری</a></li>
              <li><a href="#services" className="text-xs sm:text-sm text-slate-300 hover:text-[#E5C158] transition-colors flex items-center gap-1.5"><span>←</span> عریضه‌نویسی و دادخواست</a></li>
              <li><a href="#services" className="text-xs sm:text-sm text-slate-300 hover:text-[#E5C158] transition-colors flex items-center gap-1.5"><span>←</span> کافی‌نت آنلاین</a></li>
              <li><a href="#ai-intro" className="text-xs sm:text-sm text-slate-300 hover:text-[#E5C158] transition-colors flex items-center gap-1.5"><span>←</span> تفسیر قضایی با AI</a></li>
            </ul>
          </div>
          
          {/* Contact & Messengers */}
          <div>
            <h3 className="font-bold text-sm text-[#E5C158] mb-3.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158]" />
              <span>ارتباط با نگارش یار</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300 mb-4">
              <li>پشتیبانی پیام‌رسان: ایتا، تلگرام و واتساپ</li>
              <li>ساعات کاری: ۹ صبح الی ۲۰ عصر</li>
              <li>پاسخ‌دهی سریع و ثبت‌نام آنلاین</li>
            </ul>

            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#121A2D] hover:bg-[#E5C158] text-[#E5C158] hover:text-[#070B15] border border-[#E5C158]/30 font-bold text-xs transition-all duration-200"
              >
                <span>پشتیبانی پیام‌رسان‌ها</span>
                <span>💬</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Tight Bottom Divider & Copyright Line */}
        <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} نگارش یار. تمامی حقوق محفوظ است.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-slate-500">طراحی و اجرا: نگارش یار V1</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158]" />
            <span className="text-[#E5C158] font-semibold">پشتیبانی آنلاین</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

