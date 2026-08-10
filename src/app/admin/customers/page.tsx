'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Users, Search, Eye, RefreshCw, FileSpreadsheet, Printer } from 'lucide-react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Customer, Invoice } from '@/lib/stores/types';

export default function CustomersManagementPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  const fetchCustomersAndInvoices = useCallback(async () => {
    setLoading(true);
    try {
      const [custRes, invRes] = await Promise.all([
        fetch(`/api/admin/customers?q=${encodeURIComponent(searchQuery)}&t=${Date.now()}`, { cache: 'no-store' }),
        fetch(`/api/admin/invoices?t=${Date.now()}`, { cache: 'no-store' }),
      ]);

      if (custRes.ok) {
        const cData = await custRes.json();
        setCustomers(cData.customers || []);
      }
      if (invRes.ok) {
        const iData = await invRes.json();
        setInvoices(iData.invoices || []);
      }
    } catch (err) {
      console.error('Error fetching customers:', err);
    } finally {
      setLoading(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    fetchCustomersAndInvoices();
  }, [fetchCustomersAndInvoices]);

  const totalCustomersCount = customers.length;
  const totalCustomerBilled = customers.reduce((acc, c) => acc + c.totalBilledAmount, 0);
  const totalCustomerPaid = customers.reduce((acc, c) => acc + c.totalPaidAmount, 0);
  const totalCustomerUnpaid = customers.reduce((acc, c) => acc + c.totalUnpaidAmount, 0);

  // 1. EXPORT TO EXCEL / CSV
  const handleExportExcel = () => {
    if (customers.length === 0) return;

    const headers = [
      'ردیف',
      'نام مشتری',
      'شماره همراه',
      'تعداد فاکتورها',
      'مجموع خریدهای مشتری (تومان)',
      'مجموع دریافتی تسویه‌شده (تومان)',
      'بدهی معوق (تومان)',
      'وضعیت تسویه',
      'تاریخ آخرین فاکتور',
      'شماره آخرین فاکتور'
    ];

    const rows = customers.map((c, idx) => [
      idx + 1,
      `"${(c.name || '').replace(/"/g, '""')}"`,
      `"${c.phone || ''}"`,
      c.totalInvoicesCount || 0,
      c.totalBilledAmount || 0,
      c.totalPaidAmount || 0,
      c.totalUnpaidAmount || 0,
      c.totalUnpaidAmount > 0 ? 'دارای بدهی معوق' : 'تسویه کامل',
      `"${c.lastInvoiceDate || ''}"`,
      `"${c.lastInvoiceNumber || ''}"`
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `دفترچه_مشتریان_نگارش_یار_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // 2. EXPORT TO PDF / PRINTABLE REPORT
  const handleExportPdf = () => {
    if (customers.length === 0) return;

    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('لطفاً اجازه باز شدن پاپ‌آپ (Pop-up) را در مرورگر خود بدهید.');
      return;
    }

    const currentDate = new Date().toLocaleDateString('fa-IR');

    const htmlContent = `
      <!DOCTYPE html>
      <html dir="rtl" lang="fa">
      <head>
        <meta charset="utf-8" />
        <title-[#1a0dab]>گزارش دفترچه مشتریان - نگارش یار</title>
        <style>
          @import url('https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css');
          body {
            font-family: 'Vazirmatn', sans-serif;
            direction: rtl;
            padding: 24px;
            color: #0f172a;
            background: #ffffff;
          }
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 14px;
            margin-bottom: 20px;
          }
          .title {
            font-size: 18px;
            font-weight: 900;
            color: #0f172a;
          }
          .subtitle {
            font-size: 11px;
            color: #64748b;
            margin-top: 4px;
          }
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 12px;
            margin-bottom: 20px;
          }
          .stat-card {
            border: 1px solid #cbd5e1;
            border-radius: 12px;
            padding: 12px;
            text-align: right;
            background: #f8fafc;
          }
          .stat-label {
            font-size: 11px;
            color: #64748b;
          }
          .stat-value {
            font-size: 15px;
            font-weight: 800;
            color: #0f172a;
            margin-top: 4px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 11px;
          }
          th, td {
            border: 1px solid #cbd5e1;
            padding: 9px 12px;
            text-align: right;
          }
          th {
            background-color: #0f172a;
            color: #E5C158;
            font-weight: bold;
          }
          tr:nth-child(even) {
            background-color: #f8fafc;
          }
          .badge-unpaid {
            color: #b45309;
            font-weight: bold;
          }
          .badge-paid {
            color: #15803d;
            font-weight: bold;
          }
          .footer {
            margin-top: 30px;
            padding-top: 12px;
            border-top: 1px dashed #cbd5e1;
            font-size: 10px;
            color: #64748b;
            display: flex;
            justify-content: space-between;
          }
          @media print {
            body { padding: 0; }
            @page { size: A4 landscape; margin: 10mm; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="title">گزارش جامع دفترچه مشتریان - مجموعه نگارش یار</div>
            <div class="subtitle">خدمات تخصصی تنظیم دادخواست، شکواییه، لایحه و اسناد اداری | تلفن: ۰۹۹۱۵۱۴۷۷۸۹ | مشهد، خراسان رضوی</div>
          </div>
          <div style="text-align: left; font-size: 11px; color: #475569;">
            <div>تاریخ استخراج: ${currentDate}</div>
            <div>تعداد کل مشتریان: ${customers.length} نفر</div>
          </div>
        </div>

        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-label">تعداد کل مشتریان:</div>
            <div class="stat-value">${totalCustomersCount.toLocaleString('fa-IR')} نفر</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">ارزش کل فاکتورها:</div>
            <div class="stat-value">${totalCustomerBilled.toLocaleString('fa-IR')} تومان</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">دریافتی تسویه‌شده:</div>
            <div class="stat-value" style="color: #15803d;">${totalCustomerPaid.toLocaleString('fa-IR')} تومان</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">بدهی در انتظار تسویه:</div>
            <div class="stat-value" style="color: #b45309;">${totalCustomerUnpaid.toLocaleString('fa-IR')} تومان</div>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th style="width: 35px;">#</th>
              <th>نام مشتری</th>
              <th>شماره همراه</th>
              <th>تعداد فاکتور</th>
              <th>مجموع خرید (تومان)</th>
              <th>دریافتی تسویه‌شده (تومان)</th>
              <th>بدهی معوق (تومان)</th>
              <th>وضعیت تسویه</th>
              <th>آخرین فاکتور</th>
            </tr>
          </thead>
          <tbody>
            ${customers
              .map(
                (c, idx) => `
              <tr>
                <td>${idx + 1}</td>
                <td style="font-weight: bold;">${c.name}</td>
                <td style="font-family: monospace; direction: ltr; text-align: right;">${c.phone}</td>
                <td>${c.totalInvoicesCount} عدد</td>
                <td>${c.totalBilledAmount.toLocaleString('fa-IR')}</td>
                <td style="color: #15803d; font-weight: bold;">${c.totalPaidAmount.toLocaleString('fa-IR')}</td>
                <td>${
                  c.totalUnpaidAmount > 0
                    ? `<span class="badge-unpaid">${c.totalUnpaidAmount.toLocaleString('fa-IR')}</span>`
                    : '۰'
                }</td>
                <td>${
                  c.totalUnpaidAmount > 0
                    ? '<span class="badge-unpaid">دارای بدهی</span>'
                    : '<span class="badge-paid">تسویه کامل</span>'
                }</td>
                <td>${c.lastInvoiceDate || '-'}</td>
              </tr>
            `
              )
              .join('')}
          </tbody>
        </table>

        <div class="footer">
          <div>سامانه خدمات اداری و حقوقی نگارش یار (تلفن پشتیبانی: ۰۹۹۱۵۱۴۷۷۸۹)</div>
          <div>گزارش رسمی خروجی سیستم</div>
        </div>

        <script>
          window.onload = function() {
            setTimeout(function() {
              window.print();
            }, 300);
          };
        </script>
      </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  const customerInvoices = selectedCustomer
    ? invoices.filter(
        (inv) =>
          inv.customerPhone.includes(selectedCustomer.phone) ||
          inv.customerPhone === selectedCustomer.originalPhone
      )
    : [];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#0D1424] border border-slate-800 p-5 rounded-2xl">
          <div>
            <h1 className="text-xl font-black text-white flex items-center gap-2">
              <Users className="w-6 h-6 text-[#E5C158]" />
              <span>دفترچه مشتریان (استخراج‌شده از فاکتورها)</span>
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              لیست خودکار مشتریان همراه با سابقه خرید، بدهی معوق و امکان دریافت خروجی اکسل و PDF
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
            {/* EXCEL EXPORT BUTTON */}
            <button
              onClick={handleExportExcel}
              disabled={customers.length === 0}
              className="px-3.5 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold transition-all flex items-center gap-1.5 disabled:opacity-50"
              title="دانلود فایل اکسل / CSV لیست مشتریان"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>خروجی اکسل</span>
            </button>

            {/* PDF EXPORT BUTTON */}
            <button
              onClick={handleExportPdf}
              disabled={customers.length === 0}
              className="px-3.5 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs font-bold transition-all flex items-center gap-1.5 disabled:opacity-50"
              title="پرینت و دانلود خروجی PDF لیست مشتریان"
            >
              <Printer className="w-4 h-4" />
              <span>خروجی پی‌دی‌اف (PDF)</span>
            </button>

            <button
              onClick={fetchCustomersAndInvoices}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors border border-slate-700 text-xs flex items-center gap-1.5"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span>به‌روزرسانی</span>
            </button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#0D1424] border border-slate-800 rounded-2xl p-5 space-y-1">
            <span className="text-xs font-bold text-slate-400">تعداد کل مشتریان</span>
            <div className="text-2xl font-black text-white">{totalCustomersCount.toLocaleString('fa-IR')} <span className="text-xs font-normal text-slate-400">نفر</span></div>
            <div className="text-[11px] text-slate-500">مشتریان ثبت‌شده در فاکتورها</div>
          </div>

          <div className="bg-[#0D1424] border border-slate-800 rounded-2xl p-5 space-y-1">
            <span className="text-xs font-bold text-slate-400">مجموع ارزش خریدهای مشتریان</span>
            <div className="text-2xl font-black text-white">{totalCustomerBilled.toLocaleString('fa-IR')} <span className="text-xs font-normal text-slate-400">تومان</span></div>
            <div className="text-[11px] text-slate-500">صورت‌حساب‌های صادره</div>
          </div>

          <div className="bg-[#0D1424] border border-slate-800 rounded-2xl p-5 space-y-1">
            <span className="text-xs font-bold text-slate-400">مجموع دریافتی‌های تسویه‌شده</span>
            <div className="text-2xl font-black text-emerald-400">{totalCustomerPaid.toLocaleString('fa-IR')} <span className="text-xs font-normal text-slate-400">تومان</span></div>
            <div className="text-[11px] text-emerald-400/80 font-medium">تسویه شده</div>
          </div>

          <div className="bg-[#0D1424] border border-amber-500/30 bg-amber-500/5 rounded-2xl p-5 space-y-1">
            <span className="text-xs font-bold text-amber-300">مجموع مطالبات در انتظار تسویه</span>
            <div className="text-2xl font-black text-amber-400">{totalCustomerUnpaid.toLocaleString('fa-IR')} <span className="text-xs font-normal text-slate-400">تومان</span></div>
            <div className="text-[11px] text-amber-300/80 font-medium">بدهی معوق مشتریان</div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-[#0D1424] border border-slate-800 p-4 rounded-2xl flex items-center justify-between">
          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="جستجو نام یا شماره موبایل مشتری..."
              className="w-full bg-[#070B15] border border-slate-700 focus:border-[#E5C158] rounded-xl pr-9 pl-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
            />
            <Search className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Customers Table */}
        <div className="bg-[#0D1424] border border-slate-800 rounded-2xl p-5">
          {loading ? (
            <div className="py-16 text-center text-slate-400 text-xs space-y-2">
              <div className="w-6 h-6 border-2 border-[#E5C158] border-t-transparent rounded-full animate-spin mx-auto" />
              <span>در حال بارگذاری اطلاعات مشتریان...</span>
            </div>
          ) : customers.length === 0 ? (
            <div className="py-16 text-center text-slate-500 text-xs space-y-2">
              <Users className="w-10 h-10 mx-auto opacity-30" />
              <div>هیچ مشتری یافت نشد. با ثبت فاکتور جدید، مشتریان به‌صورت خودکار اضافه می‌شوند.</div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-right text-xs">
                <thead>
                  <tr className="text-slate-400 border-b border-slate-800 pb-3">
                    <th className="pb-3 font-bold">نام مشتری</th>
                    <th className="pb-3 font-bold">شماره همراه</th>
                    <th className="pb-3 font-bold">تعداد فاکتورها</th>
                    <th className="pb-3 font-bold">مجموع خریدهای مشتری</th>
                    <th className="pb-3 font-bold">مجموع پرداخت‌شده</th>
                    <th className="pb-3 font-bold">بدهی معوق</th>
                    <th className="pb-3 font-bold">آخرین فاکتور</th>
                    <th className="pb-3 font-bold text-center">سوابق</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {customers.map((cust) => (
                    <tr key={cust.id} className="hover:bg-slate-800/30 transition-colors">
                      <td className="py-3.5 font-bold text-white">{cust.name}</td>
                      <td className="py-3.5 font-mono text-slate-300 dir-ltr text-right">{cust.phone}</td>
                      <td className="py-3.5 font-bold text-[#E5C158]">
                        {cust.totalInvoicesCount.toLocaleString('fa-IR')} عدد
                      </td>
                      <td className="py-3.5 font-bold text-slate-200">
                        {cust.totalBilledAmount.toLocaleString('fa-IR')} تومان
                      </td>
                      <td className="py-3.5 text-emerald-400 font-bold">
                        {cust.totalPaidAmount.toLocaleString('fa-IR')} تومان
                      </td>
                      <td className="py-3.5">
                        {cust.totalUnpaidAmount > 0 ? (
                          <span className="font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-lg">
                            {cust.totalUnpaidAmount.toLocaleString('fa-IR')} تومان
                          </span>
                        ) : (
                          <span className="text-slate-500">تسویه کامل</span>
                        )}
                      </td>
                      <td className="py-3.5 text-slate-400 text-[11px]">{cust.lastInvoiceDate}</td>
                      <td className="py-3.5 text-center">
                        <button
                          type="button"
                          onClick={() => setSelectedCustomer(cust)}
                          className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-[#E5C158] hover:text-[#070B15] text-[#E5C158] font-bold text-[11px] transition-colors inline-flex items-center gap-1"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>سوابق فاکتورها</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Customer Detail / Invoice History Modal */}
        {selectedCustomer && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm dir-rtl">
            <div className="w-full max-w-2xl bg-[#0D1424] border border-slate-700 rounded-3xl p-6 shadow-2xl space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="font-black text-white text-base">سوابق فاکتورهای {selectedCustomer.name}</h3>
                  <p className="text-xs text-slate-400 dir-ltr text-right mt-0.5">{selectedCustomer.phone}</p>
                </div>
                <button
                  onClick={() => setSelectedCustomer(null)}
                  className="text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              {/* Customer Stats Cards */}
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-[#070B15] border border-slate-800 space-y-1">
                  <div className="text-slate-400">تعداد فاکتورها:</div>
                  <div className="font-bold text-white text-sm">{selectedCustomer.totalInvoicesCount.toLocaleString('fa-IR')} فاکتور</div>
                </div>

                <div className="p-3 rounded-xl bg-[#070B15] border border-slate-800 space-y-1">
                  <div className="text-slate-400">مجموع دریافتی:</div>
                  <div className="font-bold text-emerald-400 text-sm">{selectedCustomer.totalPaidAmount.toLocaleString('fa-IR')} تومان</div>
                </div>

                <div className="p-3 rounded-xl bg-[#070B15] border border-slate-800 space-y-1">
                  <div className="text-slate-400">بدهی تسویه‌نشده:</div>
                  <div className="font-bold text-amber-400 text-sm">{selectedCustomer.totalUnpaidAmount.toLocaleString('fa-IR')} تومان</div>
                </div>
              </div>

              {/* Invoices List */}
              <div className="space-y-2">
                <div className="font-bold text-white text-xs">فاکتورهای صادرشده برای این مشتری:</div>
                {customerInvoices.length === 0 ? (
                  <div className="py-6 text-center text-slate-500 text-xs">فاکتوری یافت نشد.</div>
                ) : (
                  <div className="space-y-2 max-h-60 overflow-y-auto custom-scrollbar pr-1">
                    {customerInvoices.map((inv) => (
                      <div
                        key={inv.id}
                        className="p-3 bg-[#070B15] border border-slate-800 rounded-xl flex items-center justify-between text-xs"
                      >
                        <div>
                          <div className="font-mono text-[#E5C158] font-bold">{inv.invoiceNumber}</div>
                          <div className="text-slate-400 text-[11px]">{inv.issueDate} - {inv.items.length} آیتم</div>
                        </div>

                        <div className="text-left font-bold text-white">
                          <div>{inv.total.toLocaleString('fa-IR')} تومان</div>
                          {inv.status === 'paid' ? (
                            <span className="text-[10px] text-emerald-400 font-bold">پرداخت شده</span>
                          ) : (
                            <span className="text-[10px] text-amber-400 font-bold">پرداخت نشده</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
