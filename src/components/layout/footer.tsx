import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../ui/container';

export function Footer() {
  return (
    <footer className="bg-[#070B15] text-white border-t border-slate-800 relative overflow-hidden pt-12 pb-6">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(229,193,88,0.04)_0%,transparent_70%)] pointer-events-none -z-10" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo.jpg"
                alt="لوگوی رسمی نگارش یار"
                width={36}
                height={36}
                referrerPolicy="no-referrer"
                className="h-9 w-9 rounded-xl object-contain bg-white p-0.5 border border-[#E5C158]/50 shadow-[0_0_15px_rgba(229,193,88,0.25)] shrink-0"
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-white group-hover:text-[#E5C158] transition-colors leading-tight">
                  نگارش یار
                </span>
                <span className="text-[10px] text-[#E5C158] font-semibold">
                  سامانه خدمات حقوقی، اداری و عریضه‌نویسی آنلاین
                </span>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
              سامانه هوشمند و خدمات غیرحضوری تنظیم تخصصی دادخواست، شکواییه، لایحه دفاعیه، نامه‌های اداری، عریضه‌نویسی، خدمات کافی‌نت آنلاین و تفسیر ابلاغیه ثنا و رای دادگاه با هوش مصنوعی.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <Link
                href="/request"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#070B15] font-black text-xs shadow-md hover:brightness-110 transition-all"
              >
                <span>ثبت آنلاین درخواست نگارش</span>
                <span>←</span>
              </Link>
              <Link
                href="/ai-interpreter"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0D1424] border border-[#E5C158]/40 text-[#E5C158] font-bold text-xs hover:bg-[#E5C158]/10 transition-all"
              >
                <span>تفسیر رای دادگاه با AI</span>
                <span className="w-2 h-2 rounded-full bg-[#E5C158] animate-pulse" />
              </Link>
            </div>
          </div>
          
          {/* Main Commercial Services Links */}
          <div>
            <h3 className="font-bold text-sm text-[#E5C158] mb-3.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158]" />
              <Link href="/services" className="hover:underline">خدمات تخصصی حقوقی</Link>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li><Link href="/services/petition-writing" className="hover:text-[#E5C158] transition-colors">تنظیم دادخواست و شکواییه</Link></li>
              <li><Link href="/services/legal-brief" className="hover:text-[#E5C158] transition-colors">تنظیم لایحه دفاعیه دادگاه</Link></li>
              <li><Link href="/services/administrative-letter" className="hover:text-[#E5C158] transition-colors">نگارش نامه اداری و عریضه</Link></li>
              <li><Link href="/services/appeal" className="hover:text-[#E5C158] transition-colors">تجدیدنظر و اعتراض به رای</Link></li>
              <li><Link href="/services/insolvency-petition" className="hover:text-[#E5C158] transition-colors">دادخواست اعسار و تقسیط</Link></li>
              <li><Link href="/services/court-document-explainer" className="hover:text-[#E5C158] transition-colors">تفسیر هوشمند رای و ابلاغیه</Link></li>
              <li><Link href="/services/government-auctions" className="hover:text-[#E5C158] transition-colors">ثبت نام مزایدات دولتی</Link></li>
              <li><Link href="/services/online-cafe" className="hover:text-[#E5C158] transition-colors">کافی نت آنلاین و خدمات غیرحضوری</Link></li>
            </ul>
          </div>

          {/* Document Samples Links */}
          <div>
            <h3 className="font-bold text-sm text-[#E5C158] mb-3.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158]" />
              <Link href="/samples" className="hover:underline">بانک نمونه اسناد</Link>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li><Link href="/samples/petition" className="hover:text-[#E5C158] transition-colors">نمونه دادخواست حقوقی</Link></li>
              <li><Link href="/samples/complaint" className="hover:text-[#E5C158] transition-colors">نمونه شکواییه کیفری</Link></li>
              <li><Link href="/samples/legal-brief" className="hover:text-[#E5C158] transition-colors">نمونه لایحه دفاعیه</Link></li>
              <li><Link href="/samples/administrative-letter" className="hover:text-[#E5C158] transition-colors">نمونه نامه اداری و رسمی</Link></li>
              <li><Link href="/samples/appeal" className="hover:text-[#E5C158] transition-colors">نمونه دادخواست تجدیدنظر</Link></li>
              <li><Link href="/samples/insolvency" className="hover:text-[#E5C158] transition-colors">نمونه دادخواست اعسار</Link></li>
              <li><Link href="/samples" className="hover:text-[#E5C158] transition-colors font-bold text-[#E5C158]">مشاهده تمامی نمونه‌ها ←</Link></li>
            </ul>
          </div>
          
          {/* Knowledge Center Links */}
          <div>
            <h3 className="font-bold text-sm text-[#E5C158] mb-3.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158]" />
              <Link href="/knowledge" className="hover:underline">پایگاه دانش حقوقی</Link>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li><Link href="/knowledge/what-is-petition" className="hover:text-[#E5C158] transition-colors">دادخواست چیست؟</Link></li>
              <li><Link href="/knowledge/petition-vs-complaint" className="hover:text-[#E5C158] transition-colors">تفاوت دادخواست و شکواییه</Link></li>
              <li><Link href="/knowledge/what-is-legal-brief" className="hover:text-[#E5C158] transition-colors">لایحه دفاعیه چیست؟</Link></li>
              <li><Link href="/knowledge/how-to-appeal-court-decision" className="hover:text-[#E5C158] transition-colors">نحوه اعتراض به رای دادگاه</Link></li>
              <li><Link href="/knowledge/what-is-e-notification" className="hover:text-[#E5C158] transition-colors">ابلاغیه ثنا چیست؟</Link></li>
              <li><Link href="/knowledge/what-is-insolvency" className="hover:text-[#E5C158] transition-colors">اعسار چیست و چگونه ثابتم می‌شود؟</Link></li>
              <li><Link href="/knowledge" className="hover:text-[#E5C158] transition-colors font-bold text-[#E5C158]">مشاهده کلیه مقالات ←</Link></li>
            </ul>
          </div>

        </div>
        
        {/* Tight Bottom Divider & Copyright Line */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} نگارش یار. تمامی حقوق مادی و معنوی محفوظ است.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-end">
            <Link href="/services" className="hover:text-[#E5C158] transition-colors">خدمات</Link>
            <Link href="/samples" className="hover:text-[#E5C158] transition-colors">نمونه اسناد</Link>
            <Link href="/knowledge" className="hover:text-[#E5C158] transition-colors">پایگاه دانش</Link>
            <Link href="/request" className="hover:text-[#E5C158] transition-colors">ثبت درخواست</Link>
            <Link href="/admin" className="hover:text-[#E5C158] transition-colors text-slate-500 hover:text-slate-300">پنل مدیریت</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}


