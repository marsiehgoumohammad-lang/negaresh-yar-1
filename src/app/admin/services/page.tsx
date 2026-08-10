'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Briefcase, Plus, CheckCircle2, AlertCircle, Edit, Trash2, X } from 'lucide-react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { ServiceItem } from '@/lib/stores/types';

export default function ServicesManagementPage() {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editingService, setEditingService] = useState<ServiceItem | null>(null);

  // Form State
  const [name, setName] = useState<string>('');
  const [category, setCategory] = useState<string>('دادخواست و دعاوی حقوقی');
  const [defaultPrice, setDefaultPrice] = useState<number>(0);
  const [description, setDescription] = useState<string>('');
  const [enabled, setEnabled] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const fetchServices = useCallback(async () => {
    setLoading(true);
    try {
      const cached = localStorage.getItem('negaresh_admin_services_cache');
      if (cached) {
        try {
          setServices(JSON.parse(cached));
        } catch {
          // ignore
        }
      }

      const res = await fetch(`/api/admin/services?t=${Date.now()}`, {
        cache: 'no-store',
        headers: { 'Cache-Control': 'no-cache' },
      });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data.services) && data.services.length > 0) {
          setServices(data.services);
          localStorage.setItem('negaresh_admin_services_cache', JSON.stringify(data.services));
        }
      }
    } catch (err) {
      console.error('Error fetching services:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  const handleOpenModal = (srv?: ServiceItem) => {
    setMessage(null);
    if (srv) {
      setEditingService(srv);
      setName(srv.name);
      setCategory(srv.category);
      setDefaultPrice(srv.defaultPrice);
      setDescription(srv.description);
      setEnabled(srv.enabled);
    } else {
      setEditingService(null);
      setName('');
      setCategory('دادخواست و دعاوی حقوقی');
      setDefaultPrice(0);
      setDescription('');
      setEnabled(true);
    }
    setIsModalOpen(true);
  };

  const handleSaveService = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setSaving(true);
    setMessage(null);

    try {
      const method = editingService ? 'PUT' : 'POST';
      const url = editingService ? `/api/admin/services/${editingService.id}` : '/api/admin/services';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          category,
          defaultPrice,
          description,
          enabled,
        }),
      });

      if (res.ok) {
        setIsModalOpen(false);
        localStorage.removeItem('negaresh_admin_services_cache');
        await fetchServices();
      } else {
        setMessage({ type: 'error', text: 'خطا در ذخیره‌سازی خدمت' });
      }
    } catch (err) {
      console.error('Error saving service:', err);
      setMessage({ type: 'error', text: 'خطا در برقراری ارتباط با سرور' });
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteService = async (id: string) => {
    if (!confirm('آیا از حذف این خدمت اطمینان دارید؟')) return;
    try {
      const res = await fetch(`/api/admin/services/${id}`, { method: 'DELETE' });
      if (res.ok) {
        localStorage.removeItem('negaresh_admin_services_cache');
        await fetchServices();
      }
    } catch (err) {
      console.error('Error deleting service:', err);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#0D1424] border border-slate-800 p-5 rounded-2xl">
          <div>
            <h1 className="text-xl font-black text-white flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-[#E5C158]" />
              <span>تعرفه و کاتالوگ خدمات نگارش یار</span>
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              مدیریت لیست تعرفه‌ها، قیمت پیش‌فرض و خدمات قابل انتخاب در صدور فاکتور
            </p>
          </div>

          <button
            onClick={() => handleOpenModal()}
            className="px-4 py-2.5 rounded-xl bg-[#E5C158] hover:bg-[#D4AF37] text-[#070B15] font-black text-xs transition-colors shadow-[0_0_15px_rgba(229,193,88,0.25)] flex items-center gap-2 self-start sm:self-auto"
          >
            <Plus className="w-4 h-4" />
            <span>افزودن خدمت جدید</span>
          </button>
        </div>

        {/* Toast Message */}
        {message && (
          <div
            className={`p-4 rounded-xl border flex items-center justify-between text-xs font-bold ${
              message.type === 'success'
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
            }`}
          >
            <div className="flex items-center gap-2">
              {message.type === 'success' ? (
                <CheckCircle2 className="w-5 h-5 shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 shrink-0" />
              )}
              <span>{message.text}</span>
            </div>
            <button onClick={() => setMessage(null)} className="text-slate-400 hover:text-white text-xs px-2">
              ✕
            </button>
          </div>
        )}

        {/* Services Table */}
        <div className="bg-[#0D1424] border border-slate-800 rounded-2xl p-5">
          {loading ? (
            <div className="py-16 text-center text-slate-400 text-xs space-y-2">
              <div className="w-6 h-6 border-2 border-[#E5C158] border-t-transparent rounded-full animate-spin mx-auto" />
              <span>در حال بارگذاری کاتالوگ خدمات...</span>
            </div>
          ) : services.length === 0 ? (
            <div className="py-16 text-center text-slate-500 text-xs space-y-2">
              <Briefcase className="w-10 h-10 mx-auto opacity-30" />
              <div>هیچ خدمتی ثبت نشده است.</div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-right text-xs">
                <thead>
                  <tr className="text-slate-400 border-b border-slate-800 pb-3">
                    <th className="pb-3 font-bold">نام خدمت</th>
                    <th className="pb-3 font-bold">دسته‌بندی</th>
                    <th className="pb-3 font-bold">تعرفه پایه (تومان)</th>
                    <th className="pb-3 font-bold">وضعیت</th>
                    <th className="pb-3 font-bold text-center">عملیات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {services.map((srv) => (
                    <tr key={srv.id} className="hover:bg-slate-800/30 transition-colors">
                      <td className="py-3.5 font-bold text-white">
                        <div>{srv.name}</div>
                        <div className="text-[11px] text-slate-400 font-normal">{srv.description}</div>
                      </td>
                      <td className="py-3.5 text-slate-300 font-medium">{srv.category}</td>
                      <td className="py-3.5 font-bold text-[#E5C158] font-mono">
                        {srv.defaultPrice.toLocaleString('fa-IR')} تومان
                      </td>
                      <td className="py-3.5">
                        {srv.enabled ? (
                          <span className="text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full text-[10px]">
                            فعال در فاکتور
                          </span>
                        ) : (
                          <span className="text-slate-500 font-bold bg-slate-800 px-2.5 py-0.5 rounded-full text-[10px]">
                            غیرفعال
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            type="button"
                            onClick={() => handleOpenModal(srv)}
                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                            title="ویرایش خدمت"
                          >
                            <Edit className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteService(srv.id)}
                            className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition-colors"
                            title="حذف خدمت"
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

        {/* Modal Add/Edit Service */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm dir-rtl">
            <div className="w-full max-w-lg bg-[#0D1424] border border-slate-700 rounded-3xl p-6 shadow-2xl space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="font-black text-white text-base">
                  {editingService ? 'ویرایش خدمت حقوقی/اداری' : 'افزودن خدمت جدید به کاتالوگ'}
                </h3>
                <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveService} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-300 mb-1">عنوان خدمت:</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="مثال: تنظیم دادخواست مطالب مطالبات ملکی"
                    className="w-full bg-[#070B15] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-300 mb-1">دسته‌بندی خدمت:</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-[#070B15] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none"
                  >
                    <option value="دادخواست و دعاوی حقوقی">دادخواست و دعاوی حقوقی</option>
                    <option value="شکواییه و امور کیفری">شکواییه و امور کیفری</option>
                    <option value="لایحه و دفاعیات قضایی">لایحه و دفاعیات قضایی</option>
                    <option value="اعتراض به آرا و تجدیدنظر">اعتراض به آرا و تجدیدنظر</option>
                    <option value="اعسار و تقسیط">اعسار و تقسیط</option>
                    <option value="نامه‌های اداری و عریضه">نامه‌های اداری و عریضه</option>
                    <option value="کافی نت و سامانه‌ها">کافی نت و سامانه‌های دولتی</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-300 mb-1">تعرفه پایه پیش‌فرض (تومان):</label>
                  <input
                    type="number"
                    min="0"
                    step="10000"
                    value={defaultPrice}
                    onChange={(e) => setDefaultPrice(Number(e.target.value) || 0)}
                    className="w-full bg-[#070B15] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white font-mono focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-300 mb-1">توضیح کوتاه خدمت:</label>
                  <textarea
                    rows={2}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="توضیحات تکمیلی..."
                    className="w-full bg-[#070B15] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none"
                  />
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="enableSrv"
                    checked={enabled}
                    onChange={(e) => setEnabled(e.target.checked)}
                    className="w-4 h-4 rounded text-[#E5C158] focus:ring-0 bg-[#070B15] border-slate-700"
                  />
                  <label htmlFor="enableSrv" className="font-bold text-slate-300 cursor-pointer">
                    فعال بودن در لیست انتخاب صدور فاکتور
                  </label>
                </div>

                <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 font-bold"
                  >
                    انصراف
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="px-6 py-2.5 rounded-xl bg-[#E5C158] text-[#070B15] font-black hover:bg-[#D4AF37] transition-colors"
                  >
                    {saving ? 'در حال ثبت...' : 'ذخیره خدمت'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
