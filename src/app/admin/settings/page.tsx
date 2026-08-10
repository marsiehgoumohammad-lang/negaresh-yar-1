'use client';

import React, { useEffect, useState } from 'react';
import { Settings, Save, CheckCircle2, AlertCircle, Key } from 'lucide-react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { BusinessSettings } from '@/lib/stores/types';

export default function SettingsPage() {
  const [settings, setSettings] = useState<BusinessSettings>({
    companyName: 'دفتر نگارش یار - خدمات حقوقی و اداری اینترنتی',
    phone: '09915147789',
    city: 'مشهد',
    province: 'خراسان رضوی',
    address: 'مشهد، خراسان رضوی',
    logoUrl: '/logo.jpg',
    invoicePrefix: 'NY-1403-',
    nextInvoiceNumber: 1004,
    currency: 'تومان',
    invoiceTitle: 'صورت‌حساب خدمات نگارش یار',
    headerSubtitle: 'دفتر تخصصی تنظیم دادخواست، شکواییه، لایحه دفاعیه و نامه‌های اداری',
    invoiceFooterText: 'با تشکر از اعتماد شما به نگارش یار. مشهد، تلفن تماس: 09915147789',
    paymentGatewayUrl: '',
  });

  const [saving, setSaving] = useState<boolean>(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Password Change State
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [passwordMsg, setPasswordMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const fetchSettings = async () => {
    try {
      // Check local cache first as fast fallback
      const cached = localStorage.getItem('negaresh_admin_settings_cache');
      if (cached) {
        try {
          setSettings(JSON.parse(cached));
        } catch {
          // ignore invalid cache
        }
      }

      const res = await fetch(`/api/admin/settings?t=${Date.now()}`, {
        cache: 'no-store',
        headers: { 'Cache-Control': 'no-cache' },
      });
      if (res.ok) {
        const data = await res.json();
        if (data.settings) {
          setSettings(data.settings);
          localStorage.setItem('negaresh_admin_settings_cache', JSON.stringify(data.settings));
        }
      }
    } catch (err) {
      console.error('Error fetching settings:', err);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    // Immediately persist locally
    localStorage.setItem('negaresh_admin_settings_cache', JSON.stringify(settings));

    try {
      const res = await fetch('/api/admin/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.settings) {
          setSettings(data.settings);
          localStorage.setItem('negaresh_admin_settings_cache', JSON.stringify(data.settings));
        }
        setMessage({ type: 'success', text: 'تنظیمات با موفقیت ذخیره گردید.' });
      } else {
        setMessage({ type: 'error', text: 'خطا در ذخیره‌سازی تنظیمات در سرور (ذخیره محلی انجام شد)' });
      }
    } catch (err) {
      console.error('Error saving settings:', err);
      setMessage({ type: 'error', text: 'ذخیره‌سازی در حافظه انجام شد، اما ارتباط با سرور برقرار نشد.' });
    } finally {
      setSaving(false);
    }
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordMsg(null);

    if (!newPassword || newPassword.length < 6) {
      setPasswordMsg({ type: 'error', text: 'رمز عبور باید حداقل ۶ کاراکتر باشد.' });
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordMsg({ type: 'error', text: 'رمز عبور جدید و تکرار آن یکسان نیستند.' });
      return;
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(newPassword);
    crypto.subtle.digest('SHA-256', data).then((buffer) => {
      const hashArray = Array.from(new Uint8Array(buffer));
      const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
      localStorage.setItem('negaresh_admin_password_hash', hashHex);
      setPasswordMsg({ type: 'success', text: 'رمز عبور مدیریت با موفقیت به‌روزرسانی شد.' });
      setNewPassword('');
      setConfirmPassword('');
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6 max-w-4xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#0D1424] border border-slate-800 p-5 rounded-2xl">
          <div>
            <h1 className="text-xl font-black text-white flex items-center gap-2">
              <Settings className="w-6 h-6 text-[#E5C158]" />
              <span>تنظیمات سیستم و فاکتورها</span>
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              مدیریت اطلاعات کسب‌وکار، فرمت شماره فاکتورها و تغییر رمز عبور مدیریت
            </p>
          </div>
        </div>

        {/* Global Toast Message */}
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

        {/* Settings Form */}
        <form onSubmit={handleSaveSettings} className="space-y-6">
          {/* Business Information */}
          <div className="bg-[#0D1424] border border-slate-800 rounded-2xl p-6 space-y-4">
            <h2 className="font-bold text-white text-sm border-b border-slate-800 pb-3">
              اطلاعات رسمی کسب‌وکار و سربرگ فاکتور
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-bold text-slate-300 mb-1.5">عنوان اصلی / نام مجموعه</label>
                <input
                  type="text"
                  value={settings.companyName || ''}
                  onChange={(e) => setSettings({ ...settings, companyName: e.target.value })}
                  placeholder="مثال: دفتر نگارش یار"
                  className="w-full bg-[#070B15] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#E5C158]"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-1.5">عنوان یا زیرعنوان فاکتور</label>
                <input
                  type="text"
                  value={settings.invoiceTitle || ''}
                  onChange={(e) => setSettings({ ...settings, invoiceTitle: e.target.value })}
                  placeholder="مثال: صورت‌حساب رسمی خدمات نگارش یار"
                  className="w-full bg-[#070B15] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#E5C158]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block font-bold text-slate-300 mb-1.5">متن کوتاه معرفی مجموعه در سربرگ فاکتور</label>
                <input
                  type="text"
                  value={settings.headerSubtitle || ''}
                  onChange={(e) => setSettings({ ...settings, headerSubtitle: e.target.value })}
                  placeholder="مثال: دفتر تخصصی تنظیم دادخواست، شکواییه، لایحه دفاعیه و نامه‌های اداری"
                  className="w-full bg-[#070B15] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#E5C158]"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-1.5">شماره تماس پشتیبانی</label>
                <input
                  type="text"
                  value={settings.phone || ''}
                  onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                  className="w-full bg-[#070B15] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none dir-ltr text-right focus:border-[#E5C158]"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-1.5">شهر / استان</label>
                <input
                  type="text"
                  value={settings.city || ''}
                  onChange={(e) => setSettings({ ...settings, city: e.target.value })}
                  className="w-full bg-[#070B15] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#E5C158]"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-1.5">مسیر یا لینک لوگوی مجموعه</label>
                <input
                  type="text"
                  value={settings.logoUrl || ''}
                  onChange={(e) => setSettings({ ...settings, logoUrl: e.target.value })}
                  placeholder="/logo.jpg"
                  className="w-full bg-[#070B15] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none dir-ltr text-right focus:border-[#E5C158]"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-1.5">لینک درگاه پرداخت آنلاین (جهت فاکتورهای بدهکار)</label>
                <input
                  type="url"
                  value={settings.paymentGatewayUrl || ''}
                  onChange={(e) => setSettings({ ...settings, paymentGatewayUrl: e.target.value })}
                  placeholder="https://zarinp.al/your-gateway"
                  className="w-full bg-[#070B15] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none dir-ltr text-left focus:border-[#E5C158]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block font-bold text-slate-300 mb-1.5">آدرس کامل مجموعه</label>
                <input
                  type="text"
                  value={settings.address || ''}
                  onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                  className="w-full bg-[#070B15] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#E5C158]"
                />
              </div>
            </div>
          </div>

          {/* Invoice Generator Settings */}
          <div className="bg-[#0D1424] border border-slate-800 rounded-2xl p-6 space-y-4">
            <h2 className="font-bold text-white text-sm border-b border-slate-800 pb-3">
              تنظیمات شماره‌گذاری و متون فاکتور
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <label className="block font-bold text-slate-300 mb-1.5">پیشوند شماره فاکتور</label>
                <input
                  type="text"
                  value={settings.invoicePrefix}
                  onChange={(e) => setSettings({ ...settings, invoicePrefix: e.target.value })}
                  className="w-full bg-[#070B15] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none font-mono"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-1.5">شماره فاکتور بعدی</label>
                <input
                  type="number"
                  value={settings.nextInvoiceNumber}
                  onChange={(e) => setSettings({ ...settings, nextInvoiceNumber: parseInt(e.target.value) || 1001 })}
                  className="w-full bg-[#070B15] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none font-mono"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-1.5">واحد پول</label>
                <input
                  type="text"
                  value={settings.currency}
                  onChange={(e) => setSettings({ ...settings, currency: e.target.value })}
                  className="w-full bg-[#070B15] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none"
                  required
                />
              </div>

              <div className="sm:col-span-3">
                <label className="block font-bold text-slate-300 mb-1.5 flex items-center justify-between">
                  <span>توضیحات عمومی فاکتور (توضیحات اختصاصی، شرایط تحویل، شماره حساب یا لینک پرداخت)</span>
                  <span className="text-[10px] text-[#E5C158] font-normal">نمایش در تمامی فاکتورهای چاپی و آنلاین</span>
                </label>
                <textarea
                  rows={4}
                  value={settings.invoiceDescription || ''}
                  onChange={(e) => setSettings({ ...settings, invoiceDescription: e.target.value })}
                  placeholder="مثال: ۱. فایل‌های نهایی پس از تسویه حساب تحویل می‌گردند.&#10;۲. شماره کارت جهت واریز: ۶۰۳۷۹۹... بنام دفتر نگارش یار.&#10;۳. مهلت مراجعه جهت ویرایش رایگان تا ۴۸ ساعت کاری می‌باشد."
                  className="w-full bg-[#070B15] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#E5C158] text-xs leading-relaxed"
                />
                <p className="text-[11px] text-slate-400 mt-1">
                  این متن به‌صورت خودکار در قسمت پایین تمام فاکتورهای مشتریان (قبل از پاورقی) نمایش داده می‌شود.
                </p>
              </div>

              <div className="sm:col-span-3">
                <label className="block font-bold text-slate-300 mb-1.5">متن پاورقی فاکتور چاپی</label>
                <input
                  type="text"
                  value={settings.invoiceFooterText}
                  onChange={(e) => setSettings({ ...settings, invoiceFooterText: e.target.value })}
                  className="w-full bg-[#070B15] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={saving}
            className="px-6 py-3 rounded-xl bg-[#E5C158] hover:bg-[#D4AF37] text-[#070B15] font-black text-xs shadow-[0_0_15px_rgba(229,193,88,0.25)] flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            <span>{saving ? 'در حال ذخیره‌سازی...' : 'ذخیره تنظیمات سیستم'}</span>
          </button>
        </form>

        {/* Change Password Card */}
        <div className="bg-[#0D1424] border border-slate-800 rounded-2xl p-6 space-y-4">
          <h2 className="font-bold text-white text-sm border-b border-slate-800 pb-3 flex items-center gap-2">
            <Key className="w-4 h-4 text-[#E5C158]" />
            <span>تغییر رمز عبور پنل مدیریت</span>
          </h2>

          {passwordMsg && (
            <div
              className={`p-3.5 rounded-xl border text-xs font-bold ${
                passwordMsg.type === 'success'
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                  : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
              }`}
            >
              {passwordMsg.text}
            </div>
          )}

          <form onSubmit={handleChangePassword} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-bold text-slate-300 mb-1.5">رمز عبور جدید</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="حداقل ۶ کاراکتر"
                className="w-full bg-[#070B15] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block font-bold text-slate-300 mb-1.5">تکرار رمز عبور جدید</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="تکرار رمز عبور جدید"
                className="w-full bg-[#070B15] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none"
                required
              />
            </div>

            <div className="sm:col-span-2 pt-2">
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 transition-colors"
              >
                تغییر رمز عبور
              </button>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}
