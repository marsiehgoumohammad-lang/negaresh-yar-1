import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../ui/container';

export function Footer() {
  return (
    <footer className="bg-[#070B15] text-white border-t border-slate-800 relative overflow-hidden pt-12 pb-20 md:pb-6">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(229,193,88,0.04)_0%,transparent_70%)] pointer-events-none -z-10" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo.jpg"
                alt="لوگوی رسمی نگارش یار"
                width={38}
                height={38}
                referrerPolicy="no-referrer"
                className="h-9 w-9 rounded-xl object-contain bg-white p-0.5 border border-[#E5C158]/50 shadow-[0_0_15px_rgba(229,193,88,0.25)] shrink-0"
              />
              <div className="flex flex-col">
                <span className="font-black text-xl text-white group-hover:text-[#E5C158] transition-colors leading-tight">
                  نگارشیار
                </span>
                <span className="text-[10px] text-[#E5C158] font-bold">
                  همراه تو برای نوشتن نامه‌ها و متن‌های رسمی
                </span>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              نگارشیار؛ همراه مطمئن شما برای تنظیم تخصصی انواع نامه‌های اداری، استشهادیه‌ها، دادخواست‌ها، شکواییه‌ها، لوایح و متن‌های رسمی در سراسر کشور.
            </p>
            <div className="text-xs text-slate-400 space-y-1.5 pt-2 border-t border-slate-800/80">
              <p className="flex items-center gap-2">
                <span className="text-[#E5C158]">📍 نشانی:</span>
                <span>خراسان رضوی، مشهد</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#E5C158]">📞 تلفن تماس و پیام‌رسان:</span>
                <a href="tel:09915147789" className="text-slate-200 hover:text-[#E5C158] font-mono dir-ltr">
                  ۰۹۹۱۵۱۴۷۷۸۹
                </a>
              </p>
            </div>
          </div>
          
          {/* Column 2: خدمات */}
          <div>
            <h3 className="font-bold text-sm text-[#E5C158] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158]" />
              <span>خدمات</span>
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href="/services/administrative-letter" className="hover:text-[#E5C158] transition-colors">
                  نامه اداری
                </Link>
              </li>
              <li>
                <Link href="/services/petition-writing" className="hover:text-[#E5C158] transition-colors">
                  نوشته‌های قضایی
                </Link>
              </li>
              <li>
                <Link href="/services/online-cafe" className="hover:text-[#E5C158] transition-colors">
                  خدمات آنلاین
                </Link>
              </li>
              <li>
                <Link href="/ai-interpreter" className="hover:text-[#E5C158] transition-colors flex items-center gap-1.5">
                  <span>تفسیر متن و رأی</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#E5C158]/20 text-[#E5C158] font-bold">هوشمند</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#E5C158] hover:underline font-semibold text-xs pt-1 inline-block">
                  مشاهده همه خدمات ←
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: دسترسی سریع */}
          <div>
            <h3 className="font-bold text-sm text-[#E5C158] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158]" />
              <span>دسترسی سریع</span>
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href="/samples" className="hover:text-[#E5C158] transition-colors">
                  بانک نمونه
                </Link>
              </li>
              <li>
                <Link href="/knowledge" className="hover:text-[#E5C158] transition-colors">
                  راهنما و مقالات
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-[#E5C158] transition-colors">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E5C158] transition-colors">
                  تماس با ما
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-[#E5C158] transition-colors">
                  پرسش‌های متداول
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4: قانونی */}
          <div>
            <h3 className="font-bold text-sm text-[#E5C158] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158]" />
              <span>قانونی و تعهدات</span>
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href="/contact#terms" className="hover:text-[#E5C158] transition-colors">
                  قوانین و شرایط استفاده
                </Link>
              </li>
              <li>
                <Link href="/contact#privacy" className="hover:text-[#E5C158] transition-colors">
                  حریم خصوصی کاربران
                </Link>
              </li>
              <li>
                <Link href="/contact#confidentiality" className="hover:text-[#E5C158] transition-colors">
                  سیاست محرمانگی اطلاعات
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/request"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#070B15] font-black text-xs shadow-md hover:brightness-110 transition-all w-full justify-center"
                >
                  <span>شروع درخواست نگارش</span>
                  <span>←</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>
        
        {/* Bottom Divider & Copyright Line */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>
            © ۱۴۰۵ نگارشیار — همه حقوق محفوظ است.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-end text-slate-400">
            <Link href="/services" className="hover:text-[#E5C158] transition-colors">خدمات</Link>
            <Link href="/samples" className="hover:text-[#E5C158] transition-colors">بانک نمونه</Link>
            <Link href="/knowledge" className="hover:text-[#E5C158] transition-colors">راهنما</Link>
            <Link href="/lawyer-referral" className="hover:text-[#E5C158] transition-colors">معرفی وکیل</Link>
            <Link href="/contact" className="hover:text-[#E5C158] transition-colors">تماس</Link>
            <Link href="/admin" className="hover:text-[#E5C158] transition-colors">ورود مدیریت</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}


