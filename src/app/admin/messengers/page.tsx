'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MessengerConfig, DEFAULT_MESSENGERS } from '@/lib/messengers-types';
import { AdminLayout } from '@/components/admin/AdminLayout';
import {
  Save,
  RotateCcw,
  ArrowUp,
  ArrowDown,
  Eye,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

export default function AdminMessengersPage() {
  const [messengers, setMessengers] = useState<MessengerConfig[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    fetchMessengers();
  }, []);

  const fetchMessengers = async () => {
    setLoading(true);
    let cachedList: MessengerConfig[] | null = null;
    try {
      const cached = localStorage.getItem('negaresh_admin_messengers_cache');
      if (cached) {
        try {
          const parsed = JSON.parse(cached);
          if (Array.isArray(parsed) && parsed.length > 0) {
            cachedList = parsed.sort((a: MessengerConfig, b: MessengerConfig) => a.order - b.order);
            setMessengers(cachedList);
          }
        } catch {
          // ignore
        }
      }

      const res = await fetch(`/api/messengers?all=true&t=${Date.now()}`, {
        cache: 'no-store',
        headers: { 'Cache-Control': 'no-cache' },
      });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          const sorted = data.sort((a: MessengerConfig, b: MessengerConfig) => a.order - b.order);
          
          // Check if server returned default config while client has customized cached config
          const isServerDefault = JSON.stringify(sorted) === JSON.stringify(DEFAULT_MESSENGERS);
          const isCachedCustomized = cachedList && JSON.stringify(cachedList) !== JSON.stringify(DEFAULT_MESSENGERS);

          if (isServerDefault && isCachedCustomized && cachedList) {
            // Re-sync client's saved custom config back to the server automatically
            setMessengers(cachedList);
            await fetch('/api/messengers', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(cachedList),
            });
          } else {
            setMessengers(sorted);
            localStorage.setItem('negaresh_admin_messengers_cache', JSON.stringify(sorted));
          }
        } else if (cachedList) {
          setMessengers(cachedList);
        } else {
          setMessengers(DEFAULT_MESSENGERS);
        }
      } else if (cachedList) {
        setMessengers(cachedList);
      } else {
        setMessengers(DEFAULT_MESSENGERS);
      }
    } catch (err) {
      console.error(err);
      if (cachedList) {
        setMessengers(cachedList);
      } else {
        setMessengers(DEFAULT_MESSENGERS);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleToggleEnable = (id: string) => {
    setMessengers((prev) => {
      const updated = prev.map((m) => (m.id === id ? { ...m, enabled: !m.enabled } : m));
      localStorage.setItem('negaresh_admin_messengers_cache', JSON.stringify(updated));
      return updated;
    });
  };

  const handleChange = (id: string, field: keyof MessengerConfig, value: string) => {
    setMessengers((prev) => {
      const updated = prev.map((m) => (m.id === id ? { ...m, [field]: value } : m));
      localStorage.setItem('negaresh_admin_messengers_cache', JSON.stringify(updated));
      return updated;
    });
  };

  const handleMoveOrder = (index: number, direction: 'up' | 'down') => {
    if (
      (direction === 'up' && index === 0) ||
      (direction === 'down' && index === messengers.length - 1)
    ) {
      return;
    }

    const newArr = [...messengers];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;

    const temp = newArr[index];
    newArr[index] = newArr[targetIndex];
    newArr[targetIndex] = temp;

    const updated = newArr.map((item, idx) => ({ ...item, order: idx + 1 }));
    setMessengers(updated);
    localStorage.setItem('negaresh_admin_messengers_cache', JSON.stringify(updated));
  };

  const handleResetDefaults = () => {
    if (confirm('آیا از بازنشانی کلیه پیام‌رسان‌ها به تنظیمات پیش‌فرض اطمینان دارید؟')) {
      setMessengers(DEFAULT_MESSENGERS);
      localStorage.setItem('negaresh_admin_messengers_cache', JSON.stringify(DEFAULT_MESSENGERS));
      setMessage({ type: 'success', text: 'لیست با تنظیمات اولیه پیش‌فرض جایگزین شد. جهت ثبت دکمه ذخیره را بزنید.' });
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage(null);

    localStorage.setItem('negaresh_admin_messengers_cache', JSON.stringify(messengers));

    try {
      const res = await fetch('/api/messengers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(messengers),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'خطا در ذخیره‌سازی تنظیمات در سرور');
      }

      setMessage({ type: 'success', text: 'تنظیمات پیام‌رسان‌ها با موفقیت ذخیره گردید.' });
      if (Array.isArray(data.messengers)) {
        setMessengers(data.messengers);
        localStorage.setItem('negaresh_admin_messengers_cache', JSON.stringify(data.messengers));
      }
    } catch (err: unknown) {
      console.error(err);
      const text = err instanceof Error ? err.message : 'خطا در برقراری ارتباط با سرور';
      setMessage({ type: 'success', text: `${text} (اطلاعات در مرورگر شما ذخیره شد)` });
    } finally {
      setSaving(false);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-[#0D1424] border border-slate-800">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158] font-black text-xl shrink-0">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-black text-white flex items-center gap-2">
                <span>مدیریت پیام‌رسان‌های نگارش یار</span>
                <Sparkles className="w-4 h-4 text-[#E5C158]" />
              </h1>
              <p className="text-xs text-slate-400 mt-1">
                پیکربندی آدرس‌ها، اولویت و فعال‌سازی پیام‌رسان‌های ارتباط با مشتریان
              </p>
            </div>
          </div>

          <Link
            href="/request"
            target="_blank"
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-bold text-xs flex items-center gap-2 transition-colors self-start sm:self-auto"
          >
            <Eye className="w-4 h-4 text-[#E5C158]" />
            <span>پیش‌نمایش صفحه درخواست</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </Link>
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

        {/* Main List */}
        {loading ? (
          <div className="p-12 text-center text-slate-400 space-y-3">
            <div className="w-8 h-8 rounded-full border-2 border-[#E5C158] border-t-transparent animate-spin mx-auto" />
            <p className="text-xs font-semibold">در حال بارگیری اطلاعات پیام‌رسان‌ها...</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between px-2 text-xs font-bold text-slate-400">
              <span>فهرست پیام‌رسان‌های فعال ({messengers.length} مورد)</span>
              <span>تغییر اولویت با کلیدهای جابه‌جایی</span>
            </div>

            {messengers.map((m, index) => (
              <div
                key={m.id}
                className={`p-5 rounded-2xl border transition-all ${
                  m.enabled
                    ? 'bg-[#0D1424] border-slate-800 hover:border-slate-700'
                    : 'bg-[#0A0E1A]/60 border-slate-900 opacity-60'
                }`}
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                  <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-start">
                    <div className="flex flex-col gap-1">
                      <button
                        type="button"
                        onClick={() => handleMoveOrder(index, 'up')}
                        disabled={index === 0}
                        className="p-1 rounded bg-slate-800 hover:bg-[#E5C158] hover:text-[#070B15] text-slate-300 disabled:opacity-30 transition-colors"
                      >
                        <ArrowUp className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleMoveOrder(index, 'down')}
                        disabled={index === messengers.length - 1}
                        className="p-1 rounded bg-slate-800 hover:bg-[#E5C158] hover:text-[#070B15] text-slate-300 disabled:opacity-30 transition-colors"
                      >
                        <ArrowDown className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl p-2 flex items-center justify-center shrink-0 border border-white/10"
                        style={{ backgroundColor: `${m.color}15`, borderColor: `${m.color}40` }}
                      >
                        <Image
                          src={m.icon}
                          alt={m.name}
                          width={28}
                          height={28}
                          className="w-full h-full object-contain"
                          unoptimized
                        />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-[#E5C158]">#{m.order}</span>
                          <span className="text-sm font-extrabold text-white">{m.name}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono">{m.code}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleToggleEnable(m.id)}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 border ${
                        m.enabled
                          ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400'
                          : 'bg-slate-800 border-slate-700 text-slate-400'
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full ${m.enabled ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'}`} />
                      <span>{m.enabled ? 'فعال' : 'غیرفعال'}</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full lg:w-2/3 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-800">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 block">لینک مستقیم:</label>
                      <input
                        type="text"
                        value={m.url}
                        onChange={(e) => handleChange(m.id, 'url', e.target.value)}
                        dir="ltr"
                        className="w-full px-3 py-1.5 rounded-lg bg-[#070B15] border border-slate-800 text-xs text-slate-200 focus:border-[#E5C158] focus:outline-none font-mono"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 block">عنوان پیام‌رسان:</label>
                      <input
                        type="text"
                        value={m.name}
                        onChange={(e) => handleChange(m.id, 'name', e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-[#070B15] border border-slate-800 text-xs text-slate-200 focus:border-[#E5C158] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 block">توضیح کوتاه:</label>
                      <input
                        type="text"
                        value={m.description}
                        onChange={(e) => handleChange(m.id, 'description', e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-[#070B15] border border-slate-800 text-xs text-slate-200 focus:border-[#E5C158] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Save Bar */}
        <div className="p-5 rounded-2xl bg-[#0D1424] border border-[#E5C158]/40 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="button"
            onClick={handleResetDefaults}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs flex items-center gap-2 transition-colors w-full sm:w-auto justify-center"
          >
            <RotateCcw className="w-4 h-4 text-slate-400" />
            <span>بازنشانی به پیش‌فرض</span>
          </button>

          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="px-6 py-2.5 rounded-xl bg-[#E5C158] hover:bg-[#D4AF37] text-[#070B15] font-black text-xs shadow-[0_0_15px_rgba(229,193,88,0.25)] transition-all flex items-center gap-2 w-full sm:w-auto justify-center disabled:opacity-50"
          >
            <Save className="w-4 h-4 text-[#070B15]" />
            <span>{saving ? 'در حال ذخیره‌سازی...' : 'ذخیره تنظیمات'}</span>
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}
