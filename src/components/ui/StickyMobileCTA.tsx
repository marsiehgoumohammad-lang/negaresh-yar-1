'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles, Scale } from 'lucide-react';

export function StickyMobileCTA() {
  const pathname = usePathname();

  // Hide on admin panel, checkout/request form, and lawyer referral pages to avoid overlapping form controls
  if (
    pathname?.startsWith('/admin') ||
    pathname?.startsWith('/request') ||
    pathname?.startsWith('/lawyer-referral') ||
    pathname?.startsWith('/lawyer-partnership')
  ) {
    return null;
  }

  return (
    <aside
      aria-label="دسترسی سریع تلفن همراه"
      className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[#070B15]/95 backdrop-blur-lg border-t border-slate-800/90 shadow-[0_-8px_24px_rgba(0,0,0,0.6)] px-3.5 py-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))] print:hidden transition-all duration-300"
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5 items-center">
        {/* Primary Action: AI Court Explainer */}
        <Link
          href="/ai-interpreter"
          id="mobile-sticky-ai-cta"
          className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-gradient-to-r from-[#E5C158] to-[#d4b043] text-[#070B15] font-extrabold text-xs sm:text-sm tracking-tight shadow-md active:scale-[0.98] transition-transform select-none min-h-[44px]"
        >
          <Sparkles className="w-4 h-4 shrink-0 text-[#070B15]" />
          <span className="truncate">تفسیر رای با هوش مصنوعی</span>
        </Link>

        {/* Secondary Action: Order Legal Brief */}
        <Link
          href="/request"
          id="mobile-sticky-brief-cta"
          className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-100 font-bold text-xs sm:text-sm tracking-tight shadow-sm active:scale-[0.98] transition-transform select-none min-h-[44px]"
        >
          <Scale className="w-4 h-4 shrink-0 text-[#E5C158]" />
          <span className="truncate">سفارش آنلاین لایحه</span>
        </Link>
      </div>
    </aside>
  );
}
