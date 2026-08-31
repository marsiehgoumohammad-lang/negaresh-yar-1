import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { ShieldCheck, Scale, FileSignature, CheckCircle2, ChevronLeft } from 'lucide-react';

const features = [
  'انتخاب وکیل متناسب با موضوع و پیچیدگی پرونده',
  'در نظر گرفتن شرایط مالی موکل در معرفی وکیل',
  'ارائه مشاوره‌های شفاف قبل از انعقاد قرارداد وکالت',
  'جلوگیری از پرداخت هزینه‌های نامتعارف و غیرمنطقی',
];

export function FairLawyer() {
  return (
    <section className="py-20 relative bg-[#070B15]">
      <Container>
        <div className="bg-[#0A101A] border border-[#D4AF37]/20 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#D4AF37]/5 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            {/* Content Side */}
            <div className="flex-1 space-y-6 text-center lg:text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#E5C158] text-sm font-bold">
                <Scale className="w-4 h-4" />
                <span>طرح معرفی وکیل منصف</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                وکیل منصف، متناسب با <br className="hidden sm:block" /> پرونده و شرایط مالی شما
              </h2>
              
              <p className="text-slate-300 text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
                اگر علاوه بر نگارش اوراق قضایی، نیازمند حضور وکیل در دادگاه و پیگیری مستمر پرونده خود هستید، نگارش یار شما را در انتخاب یک <strong>وکیل با انصاف و متخصص</strong> راهنمایی می‌کند. هدف ما ایجاد بستری برای دسترسی به خدمات حقوقی با دستمزد منصفانه و شفافیت مالی کامل است.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-300 pt-2 text-right">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#E5C158] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/lawyer-referral"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#070B15] font-black text-sm shadow-lg shadow-[#E5C158]/20 hover:shadow-[#E5C158]/40 hover:scale-105 transition-all"
                >
                  <span>بررسی شرایط و معرفی وکیل منصف</span>
                  <ChevronLeft className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            {/* Visual Side */}
            <div className="w-full lg:w-5/12 relative flex justify-center">
              <div className="relative w-full max-w-[320px] aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-[#111827] to-[#0D1424] border border-[#D4AF37]/30 rounded-2xl rotate-3 shadow-2xl" />
                <div className="absolute inset-0 bg-[#0A101A] border border-slate-700 rounded-2xl -rotate-3 flex flex-col items-center justify-center p-8 space-y-6 shadow-xl">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-full flex items-center justify-center border border-[#D4AF37]/30">
                    <ShieldCheck className="w-10 h-10 text-[#E5C158]" />
                  </div>
                  <div className="space-y-3 text-center w-full">
                    <div className="h-2.5 w-3/4 bg-slate-800 rounded-full mx-auto" />
                    <div className="h-2.5 w-full bg-slate-800 rounded-full" />
                    <div className="h-2.5 w-5/6 bg-slate-800 rounded-full mx-auto" />
                  </div>
                  <div className="w-full pt-4 border-t border-slate-800">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-slate-400">شفافیت مالی</span>
                      <span className="text-emerald-400">۱۰۰٪ تایید شده</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
