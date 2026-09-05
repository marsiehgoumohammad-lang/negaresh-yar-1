'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PenTool, Scale, PhoneCall, Globe } from 'lucide-react';

export function StickyMobileCTA() {
  const pathname = usePathname() || '';

  // Hide on admin panel, checkout/request form, lawyer referral pages, and contact page
  if (
    pathname.startsWith('/admin') ||
    pathname.startsWith('/request') ||
    pathname.startsWith('/lawyer-referral') ||
    pathname.startsWith('/lawyer-partnership') ||
    pathname === '/contact'
  ) {
    return null;
  }

  // Determine context-aware text and destinations
  let primaryLabel = 'سفارش تنظیم نامه و لایحه';
  let primaryHref = '/request';
  let primaryIcon = <PenTool className="w-4 h-4 shrink-0 text-[#070B15]" />;

  let secondaryLabel = 'تماس: ۰۹۹۱۵۱۴۷۷۸۹';
  let secondaryHref = 'tel:09915147789';
  let secondaryIcon = <PhoneCall className="w-4 h-4 shrink-0 text-emerald-400" />;

  if (
    pathname.includes('bank') ||
    pathname.includes('loan') ||
    pathname.includes('tax') ||
    pathname.includes('governor')
  ) {
    primaryLabel = 'سفارش نامه اختصاصی';
    primaryHref = '/request';
    secondaryLabel = 'تماس: ۰۹۹۱۵۱۴۷۷۸۹';
    secondaryHref = 'tel:09915147789';
    secondaryIcon = <PhoneCall className="w-4 h-4 shrink-0 text-emerald-400" />;
  } else if (
    pathname.includes('auction') ||
    pathname.includes('sana') ||
    pathname.includes('cafe') ||
    pathname.includes('electronic-tag')
  ) {
    primaryLabel = 'خدمت آنلاین فوری';
    primaryHref = '/services/online-cafe';
    primaryIcon = <Globe className="w-4 h-4 shrink-0 text-[#070B15]" />;
    secondaryLabel = 'تماس: ۰۹۹۱۵۱۴۷۷۸۹';
    secondaryHref = 'tel:09915147789';
    secondaryIcon = <PhoneCall className="w-4 h-4 shrink-0 text-emerald-400" />;
  } else if (
    pathname.includes('appeal') ||
    pathname.includes('court') ||
    pathname.includes('objection') ||
    pathname.includes('complaint') ||
    pathname.includes('petition') ||
    pathname.includes('verdict')
  ) {
    primaryLabel = 'سفارش لایحه و دادخواست';
    primaryHref = '/request';
    secondaryLabel = 'معرفی وکیل منصف';
    secondaryHref = '/lawyer-referral?utm_source=mobile_sticky&utm_medium=cta&utm_campaign=fair_lawyers';
    secondaryIcon = <Scale className="w-4 h-4 shrink-0 text-blue-400" />;
  } else if (pathname.startsWith('/samples/')) {
    primaryLabel = 'سفارش تنظیم اختصاصی';
    primaryHref = '/request';
    secondaryLabel = 'تماس: ۰۹۹۱۵۱۴۷۷۸۹';
    secondaryHref = 'tel:09915147789';
    secondaryIcon = <PhoneCall className="w-4 h-4 shrink-0 text-emerald-400" />;
  } else if (pathname.startsWith('/services/')) {
    primaryLabel = 'ثبت سفارش غیرحضوری';
    primaryHref = '/request';
    secondaryLabel = 'تماس: ۰۹۹۱۵۱۴۷۷۸۹';
    secondaryHref = 'tel:09915147789';
    secondaryIcon = <PhoneCall className="w-4 h-4 shrink-0 text-[#E5C158]" />;
  }

  const isPhone = secondaryHref.startsWith('tel:');
  const isExternalHttp = secondaryHref.startsWith('http');

  return (
    <aside
      aria-label="دسترسی سریع تلفن همراه"
      className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[#070B15]/95 backdrop-blur-lg border-t border-slate-800/90 shadow-[0_-8px_24px_rgba(0,0,0,0.6)] px-3 py-2 pb-[max(0.65rem,env(safe-area-inset-bottom))] print:hidden transition-all duration-300"
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2 items-center">
        {/* Primary Context-Aware Action */}
        <Link
          href={primaryHref}
          id="mobile-sticky-primary-cta"
          className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-gradient-to-r from-[#E5C158] to-[#d4b043] text-[#070B15] font-extrabold text-xs tracking-tight shadow-md active:scale-[0.98] transition-transform select-none min-h-[44px]"
        >
          {primaryIcon}
          <span className="truncate">{primaryLabel}</span>
        </Link>

        {/* Secondary Context-Aware Action */}
        {isPhone ? (
          <a
            href={secondaryHref}
            id="mobile-sticky-secondary-cta"
            className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-100 font-bold text-xs tracking-tight shadow-sm active:scale-[0.98] transition-transform select-none min-h-[44px]"
          >
            {secondaryIcon}
            <span className="truncate">{secondaryLabel}</span>
          </a>
        ) : isExternalHttp ? (
          <a
            href={secondaryHref}
            id="mobile-sticky-secondary-cta"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-100 font-bold text-xs tracking-tight shadow-sm active:scale-[0.98] transition-transform select-none min-h-[44px]"
          >
            {secondaryIcon}
            <span className="truncate">{secondaryLabel}</span>
          </a>
        ) : (
          <Link
            href={secondaryHref}
            id="mobile-sticky-secondary-cta"
            className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-100 font-bold text-xs tracking-tight shadow-sm active:scale-[0.98] transition-transform select-none min-h-[44px]"
          >
            {secondaryIcon}
            <span className="truncate">{secondaryLabel}</span>
          </Link>
        )}
      </div>
    </aside>
  );
}
