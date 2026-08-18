'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertOctagon, RefreshCw, Home } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global layout error:', error);
  }, [error]);

  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-screen bg-slate-50 text-slate-900 flex items-center justify-center p-4 font-sans">
        <div className="max-w-md w-full bg-white border border-slate-200 rounded-3xl p-8 shadow-xl text-center">
          <div className="w-16 h-16 mx-auto mb-5 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center border border-rose-100">
            <AlertOctagon className="w-8 h-8" />
          </div>

          <h1 className="text-xl font-black text-slate-900 mb-2">
            خطای سیستمی در اجرای سامانه
          </h1>

          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            اشکالی موقت رخ داده است. لطفا صفحه را مجددا بارگذاری فرمایید.
          </p>

          <div className="flex gap-3 justify-center">
            <button
              type="button"
              onClick={() => reset()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all"
            >
              <RefreshCw className="w-4 h-4" />
              تلاش مجدد
            </button>
            <Link
              href="/"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm"
            >
              <Home className="w-4 h-4" />
              صفحه اصلی
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
