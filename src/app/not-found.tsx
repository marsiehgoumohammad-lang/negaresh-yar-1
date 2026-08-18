import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FileQuestion, Home, Search, MessageSquare, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between font-sans selection:bg-emerald-500 selection:text-white" dir="rtl">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl w-full text-center bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl shadow-slate-200/50 relative overflow-hidden">
          {/* Decorative background accent */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-emerald-100 rounded-full blur-2xl pointer-events-none opacity-60" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-amber-100 rounded-full blur-2xl pointer-events-none opacity-60" />
          
          <div className="relative z-10">
            <div className="w-20 h-20 mx-auto mb-6 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shadow-inner border border-emerald-100/80">
              <FileQuestion className="w-10 h-10" />
            </div>

            <span className="inline-block px-3.5 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-full mb-3 tracking-wider">
              خطای ۴۰۴ — صفحه مورد نظر یافت نشد
            </span>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3 tracking-tight">
              صفحه مورد نظر شما در سامانه موجود نیست
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              ممکن است آدرس صفحه تغییر کرده باشد، حذف شده باشد یا آدرس وارد شده دارای اشتباه تایپی باشد. برای دسترسی به خدمات و اوراق حقوقی و اداری، از پیوندهای زیر استفاده کنید.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <Link
                href="/"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition-all active:scale-[0.98]"
              >
                <Home className="w-4 h-4" />
                صفحه اصلی نگارش یار
              </Link>
              <Link
                href="/services"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-all active:scale-[0.98]"
              >
                <Search className="w-4 h-4" />
                مشاهده تمام خدمات
              </Link>
            </div>

            <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
              <Link
                href="/samples"
                className="flex items-center gap-1 hover:text-emerald-700 font-medium transition-colors"
              >
                <span>مشاهده نمونه دادخواست‌ها و لوایح</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-1 hover:text-emerald-700 font-medium transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>پشتیبانی و ارتباط با ما</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

