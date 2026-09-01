'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scale, MessageCircle, X, ExternalLink, Phone } from 'lucide-react';
import { generateMessengerLinks, OFFICIAL_PHONE } from '@/lib/messengers-links';
import { trackLawyerConversion, trackPhoneConversion } from '@/lib/analytics';

interface LawyerStickyMobileCTAProps {
  cityName?: string;
  customMessage?: string;
}

export function LawyerStickyMobileCTA({ cityName, customMessage }: LawyerStickyMobileCTAProps) {
  const [isOpen, setIsOpen] = useState(false);

  const defaultMsg = cityName
    ? `سلام، برای پرونده در شهر ${cityName} نیاز به راهنمایی و معرفی وکیل منصف دارم.`
    : 'سلام، برای پیگیری پرونده حقوقی/کیفری خود نیاز به راهنمایی و معرفی وکیل منصف دارم.';

  const message = customMessage || defaultMsg;
  const messengers = generateMessengerLinks(message);

  const handleOpenModal = () => {
    setIsOpen(true);
    trackLawyerConversion({
      messenger_name: 'sticky_bar_opened',
      city: cityName || 'national',
      source: 'lawyer_sticky_mobile_button',
    });
  };

  const handleMessengerClick = (messengerId: string) => {
    trackLawyerConversion({
      messenger_name: messengerId,
      city: cityName || 'national',
      source: 'lawyer_sticky_mobile_modal',
    });
    setIsOpen(false);
  };

  const handlePhoneClick = () => {
    trackPhoneConversion({
      city: cityName || 'national',
      source: 'lawyer_sticky_mobile_phone',
    });
  };

  return (
    <>
      {/* Sticky Bottom Bar (Visible on Mobile & Tablet, md:hidden) */}
      <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-3 shadow-2xl safe-area-inset-bottom">
        <div className="flex items-center gap-2 max-w-md mx-auto">
          <button
            type="button"
            onClick={handleOpenModal}
            id="mobile-sticky-lawyer-btn"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#E5C158] to-[#d4af37] text-slate-950 font-black text-sm shadow-lg shadow-[#E5C158]/20 active:scale-[0.98] transition-all"
          >
            <Scale className="w-4 h-4 text-slate-950" />
            <span>درخواست وکیل منصف {cityName ? `در ${cityName}` : ''}</span>
          </button>

          <a
            href={`tel:${OFFICIAL_PHONE}`}
            onClick={handlePhoneClick}
            id="mobile-sticky-lawyer-phone"
            className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 text-[#E5C158] active:scale-95 transition-transform"
            aria-label="تماس تلفنی با پشتیبانی"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Modal / Bottom Sheet */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl z-10 space-y-5 text-slate-100"
              dir="rtl"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E5C158]/15 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158] shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      ارتباط در پیام‌رسان {cityName ? `(${cityName})` : ''}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      انتخاب پیام‌رسان جهت ارسال پیام و استعلام شرایط پرونده
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="بستن پنجره"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Messengers List */}
              <div className="grid grid-cols-1 gap-2.5">
                {messengers.map((m) => (
                  <a
                    key={m.id}
                    id={`sticky-modal-btn-${m.id}`}
                    href={m.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleMessengerClick(m.id)}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 transition-colors active:scale-[0.99]"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="w-3.5 h-3.5 rounded-full shrink-0 shadow-sm"
                        style={{ backgroundColor: m.color }}
                      />
                      <span className="text-sm font-bold text-white">{m.name}</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span>{m.badge}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                    </div>
                  </a>
                ))}
              </div>

              {/* Phone contact */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>امکان تماس تلفنی مستقیم:</span>
                <a
                  href={`tel:${OFFICIAL_PHONE}`}
                  onClick={handlePhoneClick}
                  className="text-[#E5C158] font-bold tracking-wider hover:underline"
                >
                  {OFFICIAL_PHONE}
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
