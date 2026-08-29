'use client';

import React from 'react';
import { MessageCircle, ExternalLink, PhoneCall, Shield } from 'lucide-react';
import { generateMessengerLinks, OFFICIAL_PHONE } from '@/lib/messengers-links';

interface LawyerMessengerCTAProps {
  cityName?: string;
  customMessage?: string;
  className?: string;
  variant?: 'top' | 'bottom' | 'card';
}

export function LawyerMessengerCTA({
  cityName,
  customMessage,
  className = '',
  variant = 'bottom',
}: LawyerMessengerCTAProps) {
  const defaultMsg = cityName
    ? `سلام. برای دریافت معرفی وکیل مناسب در ${cityName} نیاز به راهنمایی دارم. موضوع پرونده من: `
    : 'سلام. برای دریافت راهنمایی و معرفی وکیل منصف نیاز به مشاوره دارم. موضوع پرونده من: ';

  const message = customMessage || defaultMsg;
  const messengers = generateMessengerLinks(message);

  return (
    <div
      id={`lawyer-messenger-cta-${variant}`}
      className={`rounded-2xl border border-[#E5C158]/30 bg-gradient-to-b from-[#0D1424] to-[#070B15] p-6 sm:p-7 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.4)] relative overflow-hidden ${className}`}
      dir="rtl"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,rgba(229,193,88,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#E5C158]/15 border border-[#E5C158]/40 flex items-center justify-center flex-shrink-0 text-[#E5C158] shadow-sm">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-white leading-snug">
                {cityName
                  ? `بررسی شرایط پرونده و دریافت وکیل منصف در ${cityName}`
                  : 'بررسی شرایط پرونده و دریافت راهنمایی انتخاب وکیل'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                برای بررسی شرایط پرونده و دریافت راهنمایی مناسب با نگارش یار در ارتباط باشید.
              </p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300 shrink-0">
            <Shield className="w-4 h-4 text-[#E5C158]" />
            <span>اطلاعات محرمانه و بدون انتشار عمومی</span>
          </div>
        </div>

        {/* Messenger Buttons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
          {messengers.map((m) => (
            <a
              key={m.id}
              id={`lawyer-btn-${m.id}-${variant}`}
              href={m.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={m.ariaLabel}
              className="flex items-center justify-center gap-2 px-3.5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all border border-slate-700/70 hover:border-[#E5C158]/60 bg-slate-800/90 hover:bg-slate-800 text-slate-100 hover:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E5C158]/50 active:scale-[0.98]"
            >
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: m.color }}
                aria-hidden="true"
              />
              <span className="truncate">{m.name}</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            </a>
          ))}
        </div>

        {/* Phone Contact fallback */}
        <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>پاسخگویی و راهنمایی در تمام روزهای هفته</span>
          </span>
          <a
            href={`tel:${OFFICIAL_PHONE}`}
            className="flex items-center gap-1.5 text-slate-300 hover:text-[#E5C158] transition-colors font-semibold"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#E5C158]" />
            <span>تماس تلفنی مستقیم: {OFFICIAL_PHONE}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
