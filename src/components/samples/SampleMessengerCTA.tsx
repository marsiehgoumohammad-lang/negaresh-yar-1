'use client';

import React from 'react';
import { MessageCircle, ExternalLink } from 'lucide-react';
import { generateMessengerLinks } from '@/lib/messengers-links';

interface SampleMessengerCTAProps {
  sampleTitle: string;
  customMessage?: string;
  className?: string;
  variant?: 'top' | 'bottom';
}

export function SampleMessengerCTA({
  sampleTitle,
  customMessage,
  className = '',
  variant = 'top',
}: SampleMessengerCTAProps) {
  const message =
    customMessage || `سلام، درباره ${sampleTitle} سؤال دارم. لطفاً راهنمایی می‌کنید؟`;
  const messengers = generateMessengerLinks(message);

  return (
    <div
      id={`messenger-cta-${variant}`}
      className={`rounded-2xl border border-amber-500/20 bg-slate-900/60 p-5 md:p-6 backdrop-blur-sm shadow-sm ${className}`}
      dir="rtl"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <div className="flex items-start sm:items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0 text-amber-400">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white leading-snug">
              درباره این درخواست سؤال دارید؟
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
              می‌توانید برای راهنمایی یا مطرح کردن درخواست خود از طریق پیام‌رسان موردنظر با ما در ارتباط باشید.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
        {messengers.map((m) => (
          <a
            key={m.id}
            id={`messenger-btn-${m.id}-${variant}`}
            href={m.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={m.ariaLabel}
            className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border border-slate-700/70 hover:border-amber-500/40 bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white shadow-xs focus:outline-none focus:ring-2 focus:ring-amber-500/40"
          >
            <span
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: m.color }}
              aria-hidden="true"
            />
            <span className="truncate">{m.name}</span>
            <ExternalLink className="w-3 h-3 text-slate-400 flex-shrink-0" />
          </a>
        ))}
      </div>
    </div>
  );
}
