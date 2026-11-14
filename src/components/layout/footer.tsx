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

            {/* Social Media & Official Messengers (Instagram Primary Priority) */}
            <div className="pt-3 border-t border-slate-800/80 space-y-2.5">
              <span className="block text-[11px] font-bold text-slate-400">
                شبکه های اجتماعی و پیام رسان های رسمی:
              </span>
              <div className="flex items-center flex-wrap gap-2">
                <a
                  href="https://www.instagram.com/negaresh_yar.ir/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="اینستاگرام نگارش یار"
                  title="اینستاگرام نگارش یار"
                  className="inline-flex items-center gap-2 h-10 px-3 rounded-xl bg-gradient-to-r from-[#833ab4]/25 via-[#fd1d1d]/20 to-[#fcb045]/20 hover:from-[#833ab4]/40 hover:via-[#fd1d1d]/35 hover:to-[#fcb045]/35 border border-[#E1306C]/60 hover:border-[#E5C158] text-white shadow-[0_0_15px_rgba(225,48,108,0.22)] transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/icons/messengers/instagram.svg"
                    alt="اینستاگرام نگارش یار"
                    className="w-5 h-5 object-contain group-hover:scale-110 transition-transform shrink-0"
                  />
                  <span className="text-xs font-extrabold text-white group-hover:text-[#E5C158] transition-colors">
                    اینستاگرام
                  </span>
                </a>

                <a
                  href="https://wa.me/989915147789"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="واتساپ نگارش یار"
                  title="واتساپ نگارش یار"
                  className="w-9 h-9 rounded-xl bg-[#0D1424] hover:bg-[#121A2D] border border-slate-800 hover:border-[#E5C158]/50 flex items-center justify-center transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/icons/messengers/whatsapp.svg"
                    alt="واتساپ نگارش یار"
                    className="w-4 h-4 object-contain group-hover:scale-110 transition-transform"
                  />
                </a>

                <a
                  href="https://t.me/negareshyar_support"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="تلگرام نگارش یار"
                  title="تلگرام نگارش یار"
                  className="w-9 h-9 rounded-xl bg-[#0D1424] hover:bg-[#121A2D] border border-slate-800 hover:border-[#E5C158]/50 flex items-center justify-center transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/icons/messengers/telegram.svg"
                    alt="تلگرام نگارش یار"
                    className="w-4 h-4 object-contain group-hover:scale-110 transition-transform"
                  />
                </a>

                <a
                  href="https://eitaa.com/negareshyar_admin"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ایتا نگارش یار"
                  title="ایتا نگارش یار"
                  className="w-9 h-9 rounded-xl bg-[#0D1424] hover:bg-[#121A2D] border border-slate-800 hover:border-[#E5C158]/50 flex items-center justify-center transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/icons/messengers/eitaa.svg"
                    alt="ایتا نگارش یار"
                    className="w-4 h-4 object-contain group-hover:scale-110 transition-transform"
                  />
                </a>

                <a
                  href="https://rubika.ir/negareshyar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="روبیکا نگارش یار"
                  title="روبیکا نگارش یار"
                  className="w-9 h-9 rounded-xl bg-[#0D1424] hover:bg-[#121A2D] border border-slate-800 hover:border-[#E5C158]/50 flex items-center justify-center transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/icons/messengers/rubika.svg"
                    alt="روبیکا نگارش یار"
                    className="w-4 h-4 object-contain group-hover:scale-110 transition-transform"
                  />
                </a>

                <a
                  href="https://ble.ir/negareshyar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="بله نگارش یار"
                  title="بله نگارش یار"
                  className="w-9 h-9 rounded-xl bg-[#0D1424] hover:bg-[#121A2D] border border-slate-800 hover:border-[#E5C158]/50 flex items-center justify-center transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/icons/messengers/bale.svg"
                    alt="بله نگارش یار"
                    className="w-4 h-4 object-contain group-hover:scale-110 transition-transform"
                  />
                </a>
              </div>
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
                <Link href="/samples" prefetch={false} className="hover:text-[#E5C158] transition-colors">
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
            <Link href="/samples" prefetch={false} className="hover:text-[#E5C158] transition-colors">بانک نمونه</Link>
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


