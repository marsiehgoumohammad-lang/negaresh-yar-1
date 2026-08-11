'use client';

import React, { useEffect, useState, useCallback } from 'react';
import {
  Receipt,
  Plus,
  Search,
  CheckCircle2,
  Clock,
  Printer,
  Trash2,
  Pencil,
  X,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Invoice, InvoiceStatus, ServiceItem } from '@/lib/stores/types';

// Converts Persian (۰-۹) and Arabic (٠-٩) digits to English (0-9)
function toEnglishDigits(str: string | number): string {
  if (str === null || str === undefined) return '';
  return str
    .toString()
    .replace(/[۰-۹]/g, (d) => (d.charCodeAt(0) - 1776).toString())
    .replace(/[٠-٩]/g, (d) => (d.charCodeAt(0) - 1632).toString());
}

// Safely converts string containing Persian/English digits to integer number
function parseNumber(str: string | number): number {
  if (typeof str === 'number') return isNaN(str) ? 0 : str;
  if (!str) return 0;
  const cleaned = toEnglishDigits(str).replace(/[^0-9]/g, '');
  const parsed = parseInt(cleaned, 10);
  return isNaN(parsed) ? 0 : parsed;
}

interface FormItem {
  description: string;
  quantity: string;
  unitPrice: string;
}

export default function InvoicesManagementPage() {
  const router = useRouter();
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  // Modal & Edit State
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  const [editingInvoiceId, setEditingInvoiceId] = useState<string | null>(null);
  const [deletingInvoice, setDeletingInvoice] = useState<Invoice | null>(null);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  // Form State
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [items, setItems] = useState<FormItem[]>([
    { description: '', quantity: '1', unitPrice: '0' },
  ]);
  const [discountStr, setDiscountStr] = useState<string>('0');
  const [status, setStatus] = useState<InvoiceStatus>('paid');
  const [notes, setNotes] = useState<string>('');
  const [creating, setCreating] = useState<boolean>(false);

  const fetchInvoices = useCallback(async () => {
    setLoading(true);
    try {
      const [invRes, srvRes] = await Promise.all([
        fetch(`/api/admin/invoices?q=${encodeURIComponent(searchQuery)}&status=${statusFilter}&t=${Date.now()}`, { cache: 'no-store' }),
        fetch(`/api/admin/services?t=${Date.now()}`, { cache: 'no-store' }),
      ]);

      if (invRes.ok) {
        const data = await invRes.json();
        setInvoices(data.invoices || []);
      }
      if (srvRes.ok) {
        const data = await srvRes.json();
        setServices(data.services || []);
      }
    } catch (err) {
      console.error('Error fetching invoices:', err);
    } finally {
      setLoading(false);
    }
  }, [searchQuery, statusFilter]);

  useEffect(() => {
    fetchInvoices();
  }, [fetchInvoices]);

  const handleOpenCreateModal = () => {
    setEditingInvoiceId(null);
    setCustomerName('');
    setCustomerPhone('');
    setItems([{ description: '', quantity: '1', unitPrice: '0' }]);
    setDiscountStr('0');
    setStatus('paid');
    setNotes('');
    setIsCreateModalOpen(true);
  };

  const handleEditInvoice = (inv: Invoice) => {
    setEditingInvoiceId(inv.id);
    setCustomerName(inv.customerName);
    setCustomerPhone(inv.customerPhone);
    setItems(
      inv.items.map((it) => ({
        description: it.description,
        quantity: String(it.quantity),
        unitPrice: String(it.unitPrice),
      }))
    );
    setDiscountStr(String(inv.discount || 0));
    setStatus(inv.status);
    setNotes(inv.notes || '');
    setIsCreateModalOpen(true);
  };

  const handleAddItem = () => {
    setItems([...items, { description: '', quantity: '1', unitPrice: '0' }]);
  };

  const handleRemoveItem = (index: number) => {
    if (items.length === 1) return;
    setItems(items.filter((_, idx) => idx !== index));
  };

  const handleItemChange = (
    index: number,
    field: 'description' | 'quantity' | 'unitPrice',
    val: string
  ) => {
    const updated = [...items];
    const current = { ...updated[index] };

    if (field === 'description') {
      current.description = val;
      const matchedSrv = services.find((s) => s.name === val);
      if (matchedSrv) {
        current.unitPrice = String(matchedSrv.defaultPrice || 0);
      }
    } else if (field === 'quantity') {
      current.quantity = val;
    } else if (field === 'unitPrice') {
      current.unitPrice = val;
    }

    updated[index] = current;
    setItems(updated);
  };

  const subtotal = items.reduce(
    (acc, item) => acc + parseNumber(item.quantity) * parseNumber(item.unitPrice),
    0
  );
  const discount = parseNumber(discountStr);
  const grandTotal = Math.max(0, subtotal - discount);

  const handleSaveInvoice = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim()) {
      alert('لطفاً نام و شماره همراه مشتری را وارد کنید.');
      return;
    }

    const parsedItems = items.map((it, idx) => {
      const q = Math.max(1, parseNumber(it.quantity));
      const p = Math.max(0, parseNumber(it.unitPrice));
      return {
        id: `item-${idx + 1}`,
        description: it.description.trim() || 'خدمت حقوقی و اداری',
        quantity: q,
        unitPrice: p,
        total: q * p,
      };
    });

    const parsedSubtotal = parsedItems.reduce((acc, i) => acc + i.total, 0);
    const parsedDiscount = parseNumber(discountStr);
    const parsedTotal = Math.max(0, parsedSubtotal - parsedDiscount);

    setCreating(true);
    try {
      const isEdit = Boolean(editingInvoiceId);
      const url = isEdit
        ? `/api/admin/invoices/${editingInvoiceId}`
        : '/api/admin/invoices';
      const method = isEdit ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName: customerName.trim(),
          customerPhone: customerPhone.trim(),
          items: parsedItems,
          subtotal: parsedSubtotal,
          discount: parsedDiscount,
          total: parsedTotal,
          status,
          notes: notes.trim(),
        }),
      });

      if (res.ok) {
        setIsCreateModalOpen(false);
        setEditingInvoiceId(null);
        await fetchInvoices();
      } else {
        const errData = await res.json().catch(() => ({}));
        alert(errData.error || 'خطا در ثبت / ویرایش فاکتور');
      }
    } catch (err) {
      console.error('Error saving invoice:', err);
      alert('خطا در برقراری ارتباط با سرور');
    } finally {
      setCreating(false);
    }
  };

  const confirmDeleteInvoice = async () => {
    if (!deletingInvoice) return;
    setIsDeleting(true);
    try {
      const res = await fetch(`/api/admin/invoices/${deletingInvoice.id}`, { method: 'DELETE' });
      if (res.ok) {
        setDeletingInvoice(null);
        await fetchInvoices();
      } else {
        const data = await res.json().catch(() => ({}));
        alert(data.error || 'خطا در حذف فاکتور');
      }
    } catch (err) {
      console.error('Error deleting invoice:', err);
      alert('خطا در ارتباط با سرور');
    } finally {
      setIsDeleting(false);
    }
  };

  const handleToggleStatus = async (invoice: Invoice) => {
    const nextStatus: InvoiceStatus = invoice.status === 'paid' ? 'unpaid' : 'paid';
    try {
      const res = await fetch(`/api/admin/invoices/${invoice.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'change_status', status: nextStatus }),
      });
      if (res.ok) {
        await fetchInvoices();
      } else {
        const data = await res.json().catch(() => ({}));
        alert(data.error || 'خطا در تغییر وضعیت فاکتور');
      }
    } catch (err) {
      console.error('Error updating status:', err);
      alert('خطا در ارتباط با سرور هنگام تغییر وضعیت فاکتور');
    }
  };

  const handleTriggerPrint = (invoice: Invoice) => {
    router.push(`/admin/invoices/${invoice.id}/print`);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#0D1424] border border-slate-800 p-5 rounded-2xl">
          <div>
            <h1 className="text-xl font-black text-white flex items-center gap-2">
              <Receipt className="w-6 h-6 text-[#E5C158]" />
              <span>مدیریت و صدور فاکتور رسمی نگارش یار</span>
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              ثبت صورت‌حساب خدمات حقوقی، چاپ پیش‌فاکتور و پیگیری مطالبات مشتریان
            </p>
          </div>

          <button
            onClick={handleOpenCreateModal}
            className="px-4 py-2.5 rounded-xl bg-[#E5C158] hover:bg-[#D4AF37] text-[#070B15] font-black text-xs transition-colors shadow-[0_0_15px_rgba(229,193,88,0.25)] flex items-center gap-2 self-start sm:self-auto cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>صدور فاکتور جدید</span>
          </button>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-[#0D1424] border border-slate-800 p-4 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="جستجوی شماره فاکتور، نام یا تلفن..."
              className="w-full bg-[#070B15] border border-slate-700 focus:border-[#E5C158] rounded-xl pr-9 pl-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
            />
            <Search className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2" />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                statusFilter === 'all'
                  ? 'bg-[#E5C158] text-[#070B15]'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              همه فاکتورها
            </button>
            <button
              onClick={() => setStatusFilter('paid')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                statusFilter === 'paid'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              پرداخت شده
            </button>
            <button
              onClick={() => setStatusFilter('unpaid')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                statusFilter === 'unpaid'
                  ? 'bg-amber-500 text-white'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              تسویه‌نشده (بدهکار)
            </button>
          </div>
        </div>

        {/* Invoices List Table */}
        <div className="bg-[#0D1424] border border-slate-800 rounded-2xl p-5">
          {loading ? (
            <div className="py-16 text-center text-slate-400 text-xs space-y-2">
              <div className="w-6 h-6 border-2 border-[#E5C158] border-t-transparent rounded-full animate-spin mx-auto" />
              <span>در حال دریافت لیست فاکتورها...</span>
            </div>
          ) : invoices.length === 0 ? (
            <div className="py-16 text-center text-slate-500 text-xs space-y-2">
              <Receipt className="w-10 h-10 mx-auto opacity-30" />
              <div>هیچ فاکتوری یافت نشد. جهت صدور اولین فاکتور دکمه بالای صفحه را بزنید.</div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-right text-xs">
                <thead>
                  <tr className="text-slate-400 border-b border-slate-800 pb-3">
                    <th className="pb-3 font-bold">شماره فاکتور</th>
                    <th className="pb-3 font-bold">نام و تلفن مشتری</th>
                    <th className="pb-3 font-bold">تاریخ صدور</th>
                    <th className="pb-3 font-bold">مبلغ کل</th>
                    <th className="pb-3 font-bold">وضعیت تسویه</th>
                    <th className="pb-3 font-bold text-center">عملیات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {invoices.map((inv) => (
                    <tr key={inv.id} className="hover:bg-slate-800/30 transition-colors">
                      <td className="py-3.5 font-mono text-[#E5C158] font-black">{inv.invoiceNumber}</td>
                      <td className="py-3.5">
                        <div className="font-bold text-white">{inv.customerName}</div>
                        <div className="text-slate-400 font-mono text-[11px] dir-ltr text-right">
                          {inv.customerPhone}
                        </div>
                      </td>
                      <td className="py-3.5 text-slate-300 font-mono text-[11px]">{inv.issueDate}</td>
                      <td className="py-3.5 font-bold text-white">
                        {inv.total.toLocaleString('fa-IR')} تومان
                      </td>
                      <td className="py-3.5">
                        <button
                          type="button"
                          onClick={() => handleToggleStatus(inv)}
                          className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all flex items-center gap-1 w-fit cursor-pointer ${
                            inv.status === 'paid'
                              ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                              : 'bg-amber-500/10 border border-amber-500/30 text-amber-400'
                          }`}
                        >
                          {inv.status === 'paid' ? (
                            <>
                              <CheckCircle2 className="w-3 h-3" /> تسویه شده
                            </>
                          ) : (
                            <>
                              <Clock className="w-3 h-3" /> پرداخت نشده
                            </>
                          )}
                        </button>
                      </td>
                      <td className="py-3.5 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            type="button"
                            onClick={() => handleTriggerPrint(inv)}
                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
                            title="چاپ فاکتور رسمی"
                          >
                            <Printer className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleEditInvoice(inv)}
                            className="p-1.5 rounded-lg bg-[#E5C158]/10 hover:bg-[#E5C158]/20 text-[#E5C158] transition-colors cursor-pointer"
                            title="ویرایش فاکتور"
                          >
                            <Pencil className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setDeletingInvoice(inv)}
                            className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition-colors cursor-pointer"
                            title="حذف فاکتور"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Modal: Create or Edit Invoice */}
        {isCreateModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm dir-rtl">
            <div className="w-full max-w-3xl bg-[#0D1424] border border-slate-700 rounded-3xl p-6 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto custom-scrollbar">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <h3 className="font-black text-white text-base flex items-center gap-2">
                  <Receipt className="w-5 h-5 text-[#E5C158]" />
                  <span>
                    {editingInvoiceId ? 'ویرایش فاکتور خدمات حقوقی' : 'صدور فاکتور جدید خدمات حقوقی و اداری'}
                  </span>
                </h3>
                <button
                  type="button"
                  onClick={() => setIsCreateModalOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveInvoice} className="space-y-5">
                {/* Customer Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-bold text-slate-300 mb-1">نام و نام خانوادگی متقاضی / مشتری:</label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="مثلاً: علی محمدی"
                      className="w-full bg-[#070B15] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#E5C158]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-300 mb-1">شماره همراه متقاضی:</label>
                    <input
                      type="text"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="09915147789"
                      className="w-full bg-[#070B15] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#E5C158] dir-ltr text-right font-mono"
                      required
                    />
                  </div>
                </div>

                {/* Items Section */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="font-bold text-xs text-white">آیتم‌های فاکتور (اقلام خدمات)</span>
                    <button
                      type="button"
                      onClick={handleAddItem}
                      className="text-xs font-bold text-[#E5C158] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" /> افزودن ردیف
                    </button>
                  </div>

                  {items.map((item, idx) => (
                    <div key={idx} className="grid grid-cols-12 gap-2 items-center bg-[#070B15] p-3 rounded-xl border border-slate-800">
                      <div className="col-span-5">
                        <label className="text-[10px] text-slate-400 block mb-0.5">شرح خدمت / موضوع:</label>
                        <input
                          type="text"
                          value={item.description}
                          onChange={(e) => handleItemChange(idx, 'description', e.target.value)}
                          placeholder="مثال: تنظیم دادخواست کلاهبرداری اینترنتی"
                          className="w-full bg-[#0D1424] border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-[#E5C158]"
                          required
                        />
                      </div>

                      <div className="col-span-2">
                        <label className="text-[10px] text-slate-400 block mb-0.5">تعداد:</label>
                        <input
                          type="text"
                          inputMode="numeric"
                          value={item.quantity}
                          onChange={(e) => {
                            const clean = toEnglishDigits(e.target.value).replace(/[^0-9]/g, '');
                            handleItemChange(idx, 'quantity', clean);
                          }}
                          placeholder="1"
                          className="w-full bg-[#0D1424] border border-slate-700 rounded-lg px-2 py-1.5 text-xs text-white text-center font-mono focus:outline-none focus:border-[#E5C158]"
                        />
                      </div>

                      <div className="col-span-4">
                        <label className="text-[10px] text-slate-400 block mb-0.5">مبلغ واحد (تومان):</label>
                        <input
                          type="text"
                          inputMode="numeric"
                          value={item.unitPrice}
                          onChange={(e) => {
                            const clean = toEnglishDigits(e.target.value).replace(/[^0-9]/g, '');
                            handleItemChange(idx, 'unitPrice', clean);
                          }}
                          placeholder="0"
                          className="w-full bg-[#0D1424] border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white font-mono focus:outline-none focus:border-[#E5C158]"
                        />
                      </div>

                      <div className="col-span-1 text-center pt-3">
                        {items.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveItem(idx)}
                            className="text-rose-400 hover:text-rose-300 cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Totals & Status */}
                <div className="bg-[#070B15] p-4 rounded-xl border border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-bold text-slate-300 mb-1">مبلغ تخفیف (تومان):</label>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={discountStr}
                      onChange={(e) => {
                        const clean = toEnglishDigits(e.target.value).replace(/[^0-9]/g, '');
                        setDiscountStr(clean);
                      }}
                      placeholder="0"
                      className="w-full bg-[#0D1424] border border-slate-700 rounded-lg px-3 py-2 text-white font-mono focus:outline-none focus:border-[#E5C158]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-300 mb-1">وضعیت پرداخت:</label>
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value as InvoiceStatus)}
                      className="w-full bg-[#0D1424] border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#E5C158]"
                    >
                      <option value="paid">تسویه شده (پرداخت کامل)</option>
                      <option value="unpaid">تسویه‌نشده (بدهکار / در انتظار)</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2 pt-2 border-t border-slate-800 flex items-center justify-between">
                    <span className="font-bold text-slate-300">مبلغ قابل پرداخت فاکتور:</span>
                    <span className="font-black text-base text-[#E5C158] font-mono">
                      {grandTotal.toLocaleString('fa-IR')} تومان
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-300 text-xs mb-1">
                    توضیحات فاکتور (توضیحات اختصاصی، شرایط تحویل یا لینک پرداخت):
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="توضیحات اختصاصی این فاکتور را وارد کنید (قابلیت درج چند خط متنی و لینک)..."
                    className="w-full bg-[#070B15] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#E5C158] leading-relaxed"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsCreateModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs cursor-pointer hover:bg-slate-700 transition-colors"
                  >
                    انصراف
                  </button>
                  <button
                    type="submit"
                    disabled={creating}
                    className="px-6 py-2.5 rounded-xl bg-[#E5C158] text-[#070B15] font-black text-xs hover:bg-[#D4AF37] transition-colors cursor-pointer"
                  >
                    {creating ? 'در حال ثبت...' : editingInvoiceId ? 'ذخیره تغییرات فاکتور' : 'ثبت و صدور فاکتور'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {deletingInvoice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm dir-rtl">
            <div className="w-full max-w-md bg-[#0D1424] border border-rose-500/30 rounded-3xl p-6 shadow-2xl space-y-5">
              <div className="flex items-center gap-3 text-rose-400">
                <div className="p-2.5 rounded-2xl bg-rose-500/10 border border-rose-500/20">
                  <Trash2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-black text-white text-base">حذف فاکتور</h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">{deletingInvoice.invoiceNumber}</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                آیا از حذف فاکتور مربوط به <strong className="text-white">{deletingInvoice.customerName}</strong> با مبلغ <strong className="text-[#E5C158]">{deletingInvoice.total.toLocaleString('fa-IR')} تومان</strong> اطمینان دارید؟ این عملیات غیرقابل بازگشت است.
              </p>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setDeletingInvoice(null)}
                  disabled={isDeleting}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-colors cursor-pointer"
                >
                  انصراف
                </button>
                <button
                  type="button"
                  onClick={confirmDeleteInvoice}
                  disabled={isDeleting}
                  className="px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isDeleting ? 'در حال حذف...' : 'تایید و حذف فاکتور'}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </AdminLayout>
  );
}
