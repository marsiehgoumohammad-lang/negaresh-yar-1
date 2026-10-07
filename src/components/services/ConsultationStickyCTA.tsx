'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, ChevronLeft, Phone } from 'lucide-react';
import { generateMessengerLinks, OFFICIAL_PHONE } from '@/lib/messengers-links';

interface ConsultationStickyCTAProps {
  customMessage?: string;
}

export function ConsultationStickyCTA({ customMessage }: ConsultationStickyCTAProps) {
  const [isOpen, setIsOpen] = useState(false);

  const defaultMsg =
    'سلام. برای دریافت مشاوره حقوقی اولیه و بررسی پرونده پیام می دهم. موضوع پرونده من: ';
  const message = customMessage || defaultMsg;
  const messengers = generateMessengerLinks(message);

  return (
    <>
      {/* Sticky Bottom Bar on Mobile & Tablet (hidden on desktop) */}
      <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-3 shadow-2xl safe-area-inset-bottom">
        <div className="flex items-center gap-2 max-w-md mx-auto" dir="rtl">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            id="mobile-sticky-consultation-btn"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#E5C158] to-[#d4af37] text-slate-950 font-black text-sm shadow-lg shadow-[#E5C158]/20 active:scale-[0.98] transition-all"
          >
            <MessageCircle className="w-4 h-4 text-slate-950" />
            <span>شروع مشاوره رایگان در پیام رسان ها</span>
          </button>

          <a
            href={`tel:${OFFICIAL_PHONE}`}
            className="flex items-center justify-center w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 text-[#E5C158] active:scale-95 transition-transform"
            aria-label="تماس تلفنی با پشتیبانی"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Modal Sheet for Choosing Messenger */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.25 }}
              className="w-full sm:max-w-md bg-slate-900 border border-slate-800 rounded-t-3xl sm:rounded-3xl p-5 sm:p-6 shadow-2xl space-y-4"
              dir="rtl"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#E5C158]/15 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">انتخاب پیام رسان مشاوره</h3>
                    <p className="text-[11px] text-slate-400">بررسی اولیه سوال و اسناد به صورت رایگان</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400"
                  aria-label="بستن پنجره"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-2">
                {messengers.map((m) => (
                  <a
                    key={m.id}
                    href={m.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-white transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black"
                        style={{ backgroundColor: m.color }}
                      >
                        {m.name.slice(0, 1)}
                      </div>
                      <span>{m.name}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-slate-400">
                      <span>{m.badge}</span>
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </div>
                  </a>
                ))}
              </div>

              <div className="pt-2 text-center">
                <p className="text-[11px] text-slate-400">
                  یا تماس تلفنی در ساعات اداری:{' '}
                  <a href={`tel:${OFFICIAL_PHONE}`} className="text-[#E5C158] font-bold dir-ltr">
                    {OFFICIAL_PHONE}
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
