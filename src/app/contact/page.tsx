import React from 'react';
import { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { ContactForm } from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'تماس با ما | پشتیبانی و ارتباط با نگارش یار',
  description: 'راه‌های ارتباطی با پشتیبانی سامانه نگارش یار. شماره تماس، آدرس و فرم ارتباط مستقیم.',
  alternates: {
    canonical: 'https://www.negaresh-yar.ir/contact',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#070B15] text-white pt-24 pb-20">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-6">
              تماس با نگارش یار
            </h1>
            <p className="text-lg sm:text-xl text-[#E5C158] max-w-3xl mx-auto leading-relaxed font-bold">
              کلیه خدمات ما بصورت آنلاین و قابل ارائه در سراسر کشور می باشد
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Contact Info Side */}
            <div className="space-y-6">
              <div className="bg-[#0D1424] border border-slate-800 rounded-3xl p-8 shadow-xl hover:border-slate-700 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center shrink-0">
                    <svg className="w-7 h-7 text-[#E5C158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-400 mb-1">تلفن پشتیبانی</h3>
                    <p className="text-2xl font-mono text-white font-bold" dir="ltr">0991 514 7789</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#0D1424] border border-slate-800 rounded-3xl p-8 shadow-xl hover:border-slate-700 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center shrink-0">
                    <svg className="w-7 h-7 text-[#E5C158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-400 mb-1">ایمیل ارتباطی</h3>
                    <a href="mailto:marsiehgou.mohammad@gmail.com" className="text-xl font-mono text-white hover:text-[#E5C158] transition-colors break-all" dir="ltr">
                      marsiehgou.mohammad@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#0D1424] border border-slate-800 rounded-3xl p-8 shadow-xl hover:border-slate-700 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center shrink-0">
                    <svg className="w-7 h-7 text-[#E5C158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-400 mb-1">آدرس دفتر مرکزی</h3>
                    <p className="text-2xl font-bold text-white mb-2">مشهد</p>
                    <p className="text-sm text-[#E5C158]">
                      (ارائه خدمات کاملاً آنلاین به تمام نقاط کشور)
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media & Messengers Section (Instagram Primary Priority) */}
              <div className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl hover:border-slate-700 transition-colors space-y-5">
                <div>
                  <h2 className="text-lg font-bold text-white mb-1">
                    شبکه های اجتماعی و پیام رسان ها
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400">
                    صفحه رسمی اینستاگرام و درگاه های ارتباط مستقیم با کارشناسان نگارش یار
                  </p>
                </div>

                {/* Featured Instagram Profile Link */}
                <a
                  href="https://www.instagram.com/negaresh_yar.ir/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="اینستاگرام نگارش یار"
                  className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-gradient-to-r from-[#833ab4]/20 via-[#fd1d1d]/15 to-[#fcb045]/20 hover:from-[#833ab4]/30 hover:via-[#fd1d1d]/25 hover:to-[#fcb045]/30 border border-[#E1306C]/50 hover:border-[#E5C158] shadow-[0_0_20px_rgba(225,48,108,0.18)] transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158]"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-12 h-12 rounded-2xl bg-[#070B15]/80 border border-white/15 flex items-center justify-center shrink-0 shadow-md">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/icons/messengers/instagram.svg"
                        alt="اینستاگرام نگارش یار"
                        className="w-7 h-7 object-contain group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-sm sm:text-base font-extrabold text-white group-hover:text-[#E5C158] transition-colors">
                        اینستاگرام نگارش یار
                      </span>
                      <span className="block text-xs font-mono text-slate-300 truncate" dir="ltr">
                        @negaresh_yar.ir
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#E5C158] bg-[#070B15]/70 px-3 py-1.5 rounded-xl border border-[#E5C158]/30 group-hover:border-[#E5C158] shrink-0 transition-colors">
                    مشاهده صفحه ←
                  </span>
                </a>

                {/* Official Messengers Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  <a
                    href="https://wa.me/989915147789"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="واتساپ نگارش یار"
                    className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#070B15] hover:bg-[#121A2D] border border-slate-800 hover:border-[#E5C158]/50 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158]"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/icons/messengers/whatsapp.svg"
                      alt="واتساپ نگارش یار"
                      className="w-5 h-5 object-contain group-hover:scale-110 transition-transform shrink-0"
                    />
                    <span className="text-xs font-bold text-slate-200 group-hover:text-[#E5C158] transition-colors">
                      واتساپ
                    </span>
                  </a>

                  <a
                    href="https://t.me/negareshyar_support"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="تلگرام نگارش یار"
                    className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#070B15] hover:bg-[#121A2D] border border-slate-800 hover:border-[#E5C158]/50 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158]"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/icons/messengers/telegram.svg"
                      alt="تلگرام نگارش یار"
                      className="w-5 h-5 object-contain group-hover:scale-110 transition-transform shrink-0"
                    />
                    <span className="text-xs font-bold text-slate-200 group-hover:text-[#E5C158] transition-colors">
                      تلگرام
                    </span>
                  </a>

                  <a
                    href="https://eitaa.com/negareshyar_admin"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="ایتا نگارش یار"
                    className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#070B15] hover:bg-[#121A2D] border border-slate-800 hover:border-[#E5C158]/50 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158]"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/icons/messengers/eitaa.svg"
                      alt="ایتا نگارش یار"
                      className="w-5 h-5 object-contain group-hover:scale-110 transition-transform shrink-0"
                    />
                    <span className="text-xs font-bold text-slate-200 group-hover:text-[#E5C158] transition-colors">
                      ایتا
                    </span>
                  </a>

                  <a
                    href="https://rubika.ir/negareshyar"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="روبیکا نگارش یار"
                    className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#070B15] hover:bg-[#121A2D] border border-slate-800 hover:border-[#E5C158]/50 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158]"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/icons/messengers/rubika.svg"
                      alt="روبیکا نگارش یار"
                      className="w-5 h-5 object-contain group-hover:scale-110 transition-transform shrink-0"
                    />
                    <span className="text-xs font-bold text-slate-200 group-hover:text-[#E5C158] transition-colors">
                      روبیکا
                    </span>
                  </a>

                  <a
                    href="https://ble.ir/negareshyar"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="بله نگارش یار"
                    className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#070B15] hover:bg-[#121A2D] border border-slate-800 hover:border-[#E5C158]/50 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158]"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/icons/messengers/bale.svg"
                      alt="بله نگارش یار"
                      className="w-5 h-5 object-contain group-hover:scale-110 transition-transform shrink-0"
                    />
                    <span className="text-xs font-bold text-slate-200 group-hover:text-[#E5C158] transition-colors">
                      بله
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form Side */}
            <div>
              <ContactForm />
            </div>

          </div>
        </div>
      </Container>
    </main>
  );
}
