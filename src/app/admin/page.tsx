'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  Receipt,
  Users,
  LineChart,
  Activity,
  Plus,
  ArrowUpRight,
  Clock,
  Sparkles,
  FileText,
} from 'lucide-react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Invoice } from '@/lib/stores/types';

export default function AdminDashboardPage() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch(`/api/admin/invoices?t=${Date.now()}`, { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          setInvoices(data.invoices || []);
        }
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const totalRevenue = invoices
    .filter((i) => i.status === 'paid')
    .reduce((acc, i) => acc + i.total, 0);

  const totalUnpaid = invoices
    .filter((i) => i.status === 'unpaid')
    .reduce((acc, i) => acc + i.total, 0);

  const totalInvoicesCount = invoices.length;
  const uniqueCustomersCount = new Set(invoices.map((i) => i.customerPhone)).size;

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Top Banner */}
        <div className="bg-[#0D1424] border border-[#E5C158]/30 bg-gradient-to-r from-[#E5C158]/10 via-transparent to-transparent rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#E5C158]/20 text-[#E5C158] border border-[#E5C158]/30">
                سیستم مدیریت اختصاصی
              </span>
              <Sparkles className="w-4 h-4 text-[#E5C158]" />
            </div>
            <h1 className="text-xl font-black text-white">خوش آمدید به پنل مدیریتی نگارش یار</h1>
            <p className="text-xs text-slate-400">
              مدیریت یکپارچه خدمات حقوقی، فاکتورها، سوابق مشتریان و تحلیل ارگانیک سرچ کنسول
            </p>
          </div>

          <Link
            href="/admin/invoices"
            className="px-4 py-2.5 rounded-xl bg-[#E5C158] hover:bg-[#D4AF37] text-[#070B15] font-black text-xs transition-colors shadow-[0_0_15px_rgba(229,193,88,0.25)] flex items-center gap-2 self-start sm:self-auto shrink-0"
          >
            <Plus className="w-4 h-4 text-[#070B15]" />
            <span>صدور فاکتور جدید</span>
          </Link>
        </div>

        {/* Core Financial Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#0D1424] border border-slate-800 rounded-2xl p-5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400">مجموع درآمد تسویه‌شده</span>
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl font-black text-white">
              {totalRevenue.toLocaleString('fa-IR')} <span className="text-xs font-normal text-slate-400">تومان</span>
            </div>
            <div className="text-[11px] text-emerald-400 font-medium">دریافتی قطعی از فاکتورهای تسویه‌شده</div>
          </div>

          <div className="bg-[#0D1424] border border-amber-500/30 bg-amber-500/5 rounded-2xl p-5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-300">مطالبات در انتظار پرداخت</span>
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
                <Clock className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl font-black text-amber-400">
              {totalUnpaid.toLocaleString('fa-IR')} <span className="text-xs font-normal text-slate-400">تومان</span>
            </div>
            <div className="text-[11px] text-amber-300/80 font-medium">فاکتورهای صادرشده تسویه‌نشده</div>
          </div>

          <div className="bg-[#0D1424] border border-slate-800 rounded-2xl p-5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400">تعداد کل فاکتورها</span>
              <div className="p-2 rounded-xl bg-[#E5C158]/10 text-[#E5C158]">
                <Receipt className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl font-black text-white">
              {totalInvoicesCount.toLocaleString('fa-IR')} <span className="text-xs font-normal text-slate-400">فقره</span>
            </div>
            <div className="text-[11px] text-slate-500">مجموع فاکتورهای صادرشده</div>
          </div>

          <div className="bg-[#0D1424] border border-slate-800 rounded-2xl p-5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400">تعداد مشتریان یکتا</span>
              <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl font-black text-white">
              {uniqueCustomersCount.toLocaleString('fa-IR')} <span className="text-xs font-normal text-slate-400">نفر</span>
            </div>
            <div className="text-[11px] text-slate-500">شماره موبایل‌های ثبت‌شده</div>
          </div>
        </div>

        {/* Action Quick Access Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/admin/invoices"
            className="group bg-[#0D1424] border border-slate-800 hover:border-[#E5C158]/50 p-5 rounded-2xl transition-all space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-xl bg-[#E5C158]/10 text-[#E5C158]">
                <Receipt className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#E5C158] transition-colors" />
            </div>
            <div>
              <div className="font-extrabold text-white text-sm">مدیریت فاکتورها</div>
              <p className="text-xs text-slate-400 mt-1">صدور فاکتور جدید، تغییر وضعیت تسویه و چاپ پیش‌فاکتور رسمی</p>
            </div>
          </Link>

          <Link
            href="/admin/seo/articles"
            className="group bg-[#0D1424] border border-[#E5C158]/30 hover:border-[#E5C158] p-5 rounded-2xl transition-all space-y-3 bg-gradient-to-br from-[#E5C158]/5 to-transparent"
          >
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-xl bg-[#E5C158]/20 text-[#E5C158]">
                <FileText className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#E5C158] group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-transform" />
            </div>
            <div>
              <div className="font-extrabold text-white text-sm flex items-center gap-1.5">
                <span>مدیریت مقالات (CMS)</span>
                <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-[#E5C158]/20 text-[#E5C158]">جدید</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">ایجاد، ویرایش، انتشار و بهینه‌سازی سئوی مقالات پایگاه دانش</p>
            </div>
          </Link>

          <Link
            href="/admin/seo"
            className="group bg-[#0D1424] border border-slate-800 hover:border-[#E5C158]/50 p-5 rounded-2xl transition-all space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                <LineChart className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#E5C158] transition-colors" />
            </div>
            <div>
              <div className="font-extrabold text-white text-sm">تحلیل سئو و Search Console</div>
              <p className="text-xs text-slate-400 mt-1">تحلیل کلمات کلیدی، خروجی‌های سرچ کنسول و فرصت‌های رشد گوگل</p>
            </div>
          </Link>

          <Link
            href="/admin/site-health"
            className="group bg-[#0D1424] border border-slate-800 hover:border-[#E5C158]/50 p-5 rounded-2xl transition-all space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                <Activity className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#E5C158] transition-colors" />
            </div>
            <div>
              <div className="font-extrabold text-white text-sm">پایش سلامت سیستم</div>
              <p className="text-xs text-slate-400 mt-1">بررسی لایه‌های دیتابیس محلی، دسترسی مسیرها و سرویس هوش مصنوعی</p>
            </div>
          </Link>
        </div>

        {/* Recent Invoices Table */}
        <div className="bg-[#0D1424] border border-slate-800 rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h2 className="font-black text-white text-sm">آخرین فاکتورهای صادرشده</h2>
            <Link href="/admin/invoices" className="text-xs text-[#E5C158] hover:underline font-bold">
              مشاهده همه فاکتورها →
            </Link>
          </div>

          {loading ? (
            <div className="py-8 text-center text-slate-400 text-xs">در حال بارگیری داده‌ها...</div>
          ) : invoices.length === 0 ? (
            <div className="py-8 text-center text-slate-500 text-xs">هنوز هیچ فاکتوری ثبت نشده است.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-right text-xs">
                <thead>
                  <tr className="text-slate-400 border-b border-slate-800 pb-2">
                    <th className="pb-2 font-bold">شماره</th>
                    <th className="pb-2 font-bold">مشتری</th>
                    <th className="pb-2 font-bold">مبلغ</th>
                    <th className="pb-2 font-bold">وضعیت</th>
                    <th className="pb-2 font-bold">تاریخ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {invoices.slice(0, 5).map((inv) => (
                    <tr key={inv.id} className="hover:bg-slate-800/30 transition-colors">
                      <td className="py-3 font-mono text-[#E5C158] font-bold">{inv.invoiceNumber}</td>
                      <td className="py-3 font-bold text-white">{inv.customerName}</td>
                      <td className="py-3 font-bold text-slate-200">{inv.total.toLocaleString('fa-IR')} تومان</td>
                      <td className="py-3">
                        {inv.status === 'paid' ? (
                          <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded text-[10px]">
                            تسویه شده
                          </span>
                        ) : (
                          <span className="text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded text-[10px]">
                            تسویه‌نشده
                          </span>
                        )}
                      </td>
                      <td className="py-3 text-slate-400 text-[11px]">{inv.issueDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
