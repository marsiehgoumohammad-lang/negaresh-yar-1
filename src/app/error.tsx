'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Home, MessageSquare } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error for diagnostics
    console.error('App routing error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex items-center justify-center p-4" dir="rtl">
      <div className="max-w-lg w-full bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-200/50 text-center">
        <div className="w-16 h-16 mx-auto mb-5 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center border border-amber-100">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <span className="inline-block px-3 py-1 bg-amber-100/70 text-amber-800 text-xs font-bold rounded-full mb-3">
          خطا در بارگذاری بخش مورد نظر
        </span>

        <h1 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
          متأسفانه در پردازش درخواست خطایی رخ داد
        </h1>

        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          می‌توانید با تلاش مجدد یا بازگشت به صفحه اصلی، فرایند ثبت یا پیگیری درخواست خود را ادامه دهید.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <button
            type="button"
            onClick={() => reset()}
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition-all active:scale-[0.98]"
          >
            <RefreshCw className="w-4 h-4" />
            تلاش مجدد
          </button>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-all active:scale-[0.98]"
          >
            <Home className="w-4 h-4" />
            صفحه اصلی
          </Link>
        </div>

        <div className="border-t border-slate-100 pt-4 text-xs text-slate-500 flex items-center justify-center gap-2">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>پشتیبانی نگارش یار: ۰۹۹۱۵۱۴۷۷۸۹</span>
        </div>
      </div>
    </div>
  );
}
