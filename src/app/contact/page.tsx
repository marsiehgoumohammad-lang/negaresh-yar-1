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
