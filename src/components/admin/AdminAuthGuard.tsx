'use client';

import React, { useState, useEffect } from 'react';
import { Lock, KeyRound, LogOut, CheckCircle2, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { Container } from '@/components/ui/container';

const STORAGE_KEY_PASS = 'negaresh_admin_password_hash';
const STORAGE_KEY_SESSION = 'negaresh_admin_authenticated';
const DEFAULT_PASS = 'negaresh1403';

export function AdminAuthGuard({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isChecking, setIsChecking] = useState<boolean>(true);
  const [inputPassword, setInputPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  
  // Password change modal state inside panel
  const [showChangeModal, setShowChangeModal] = useState<boolean>(false);
  const [currentPass, setCurrentPass] = useState<string>('');
  const [newPass, setNewPass] = useState<string>('');
  const [confirmPass, setConfirmPass] = useState<string>('');
  const [changeStatus, setChangeStatus] = useState<{ type: 'success' | 'error'; msg: string } | null>(null);

  useEffect(() => {
    // Check session
    const authSession = localStorage.getItem(STORAGE_KEY_SESSION);
    if (authSession === 'true') {
      setIsAuthenticated(true);
    }
    setIsChecking(false);

    // Custom event to trigger password modal on mobile/desktop
    const handleOpenModal = () => setShowChangeModal(true);
    window.addEventListener('open-admin-change-password', handleOpenModal);
    return () => window.removeEventListener('open-admin-change-password', handleOpenModal);
  }, []);

  const getStoredPassword = () => {
    if (typeof window === 'undefined') return DEFAULT_PASS;
    return localStorage.getItem(STORAGE_KEY_PASS) || DEFAULT_PASS;
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const targetPass = getStoredPassword();
    if (inputPassword === targetPass) {
      localStorage.setItem(STORAGE_KEY_SESSION, 'true');
      setIsAuthenticated(true);
      setInputPassword('');
    } else {
      // Check if stored pass was an old sha256 hash
      const encoder = new TextEncoder();
      const data = encoder.encode(inputPassword);
      crypto.subtle.digest('SHA-256', data).then((buffer) => {
        const hashArray = Array.from(new Uint8Array(buffer));
        const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
        if (hashHex === targetPass) {
          localStorage.setItem(STORAGE_KEY_PASS, inputPassword);
          localStorage.setItem(STORAGE_KEY_SESSION, 'true');
          setIsAuthenticated(true);
          setInputPassword('');
        } else {
          setErrorMsg('رمز عبور وارد شده اشتباه است. لطفاً مجدداً تلاش کنید.');
        }
      }).catch(() => {
        setErrorMsg('رمز عبور وارد شده اشتباه است. لطفاً مجدداً تلاش کنید.');
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(STORAGE_KEY_SESSION);
    setIsAuthenticated(false);
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    setChangeStatus(null);

    const actualPass = getStoredPassword();
    if (currentPass !== actualPass) {
      setChangeStatus({ type: 'error', msg: 'رمز عبور فعلی نامعتبر است.' });
      return;
    }

    if (newPass.length < 6) {
      setChangeStatus({ type: 'error', msg: 'رمز عبور جدید باید حداقل ۶ کاراکتر باشد.' });
      return;
    }

    if (newPass !== confirmPass) {
      setChangeStatus({ type: 'error', msg: 'تکرار رمز عبور جدید با رمز عبور وارد شده مطابقت ندارد.' });
      return;
    }

    // Update password
    localStorage.setItem(STORAGE_KEY_PASS, newPass);
    setChangeStatus({ type: 'success', msg: 'رمز عبور مدیریت با موفقیت تغییر یافت.' });
    
    setTimeout(() => {
      setShowChangeModal(false);
      setCurrentPass('');
      setNewPass('');
      setConfirmPass('');
      setChangeStatus(null);
    }, 1500);
  };

  if (isChecking) {
    return (
      <div className="min-h-screen bg-[#070B15] text-white flex items-center justify-center dir-rtl">
        <div className="flex items-center gap-3 text-[#E5C158]">
          <div className="w-5 h-5 border-2 border-[#E5C158] border-t-transparent rounded-full animate-spin" />
          <span className="text-sm font-bold">در حال بررسی دسترسی مدیریت...</span>
        </div>
      </div>
    );
  }

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#070B15] text-white flex items-center justify-center p-4 dir-rtl selection:bg-[#E5C158] selection:text-[#070B15]">
        <div className="w-full max-w-md bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#E5C158]/10 rounded-full blur-2xl pointer-events-none" />

          {/* Header */}
          <div className="text-center space-y-3 relative z-10">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#070B15] font-black text-2xl flex items-center justify-center shadow-[0_0_20px_rgba(229,193,88,0.3)]">
              <Lock className="w-8 h-8 text-[#070B15]" />
            </div>
            <h1 className="text-2xl font-black text-white">ورود به پنل مدیریت</h1>
            <p className="text-xs text-slate-400">
              جهت دسترسی به تنظیمات سیستم نگارش یار، رمز عبور مدیریت را وارد نمایید.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4 relative z-10">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2">
                رمز عبور مدیریت
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={inputPassword}
                  onChange={(e) => setInputPassword(e.target.value)}
                  placeholder="رمز عبور را وارد کنید"
                  className="w-full bg-[#070B15] border border-slate-700 focus:border-[#E5C158] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors pl-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {errorMsg && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#070B15] font-black text-sm hover:opacity-95 transition-opacity shadow-[0_0_20px_rgba(229,193,88,0.25)] flex items-center justify-center gap-2"
            >
              <KeyRound className="w-4 h-4" />
              <span>ورود به سامانه</span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Authenticated State with Top Control Bar
  return (
    <div className="dir-rtl">
      {/* Top Admin Status Bar (Desktop only) */}
      <div className="hidden lg:block bg-[#0D1424] border-b border-slate-800 py-2.5 px-4 sticky top-0 z-40 backdrop-blur-md bg-opacity-90">
        <Container>
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold text-white">دسترسی مدیریت فعال است</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setShowChangeModal(true)}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium transition-colors flex items-center gap-1.5"
              >
                <KeyRound className="w-3.5 h-3.5 text-[#E5C158]" />
                <span>تغییر رمز عبور</span>
              </button>

              <button
                type="button"
                onClick={handleLogout}
                className="px-3 py-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 font-medium transition-colors flex items-center gap-1.5"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>خروج از حساب</span>
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Admin Page Content */}
      {children}

      {/* Modal for Changing Password */}
      {showChangeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm dir-rtl">
          <div className="w-full max-w-md bg-[#0D1424] border border-slate-700 rounded-3xl p-6 shadow-2xl space-y-5 relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2 text-white font-bold">
                <KeyRound className="w-5 h-5 text-[#E5C158]" />
                <span>تغییر رمز عبور مدیریت</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setShowChangeModal(false);
                  setChangeStatus(null);
                }}
                className="text-slate-400 hover:text-white transition-colors text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleChangePassword} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  رمز عبور فعلی
                </label>
                <input
                  type="password"
                  value={currentPass}
                  onChange={(e) => setCurrentPass(e.target.value)}
                  placeholder="رمز فعلی را وارد کنید"
                  className="w-full bg-[#070B15] border border-slate-700 focus:border-[#E5C158] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  رمز عبور جدید (حداقل ۶ کاراکتر)
                </label>
                <input
                  type="password"
                  value={newPass}
                  onChange={(e) => setNewPass(e.target.value)}
                  placeholder="رمز جدید را وارد کنید"
                  className="w-full bg-[#070B15] border border-slate-700 focus:border-[#E5C158] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  تکرار رمز عبور جدید
                </label>
                <input
                  type="password"
                  value={confirmPass}
                  onChange={(e) => setConfirmPass(e.target.value)}
                  placeholder="تکرار رمز جدید"
                  className="w-full bg-[#070B15] border border-slate-700 focus:border-[#E5C158] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              {changeStatus && (
                <div
                  className={`p-3 rounded-xl border text-xs flex items-center gap-2 ${
                    changeStatus.type === 'success'
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                      : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
                  }`}
                >
                  {changeStatus.type === 'success' ? (
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 shrink-0" />
                  )}
                  <span>{changeStatus.msg}</span>
                </div>
              )}

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowChangeModal(false);
                    setChangeStatus(null);
                  }}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-colors"
                >
                  انصراف
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#E5C158] hover:bg-[#D4AF37] text-[#070B15] font-black text-xs transition-colors shadow-[0_0_15px_rgba(229,193,88,0.2)]"
                >
                  ذخیره رمز جدید
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
