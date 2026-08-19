'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Receipt,
  FileText,
  Users,
  Briefcase,
  Search,
  Activity,
  MessageCircle,
  Settings,
  LogOut,
  ChevronLeft,
  Menu,
  Shield,
  ExternalLink,
  KeyRound,
  X,
} from 'lucide-react';
import { AdminAuthGuard } from '@/components/admin/AdminAuthGuard';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const handleLogout = () => {
    localStorage.removeItem('negaresh_admin_authenticated');
    window.location.reload();
  };

  const navItems = [
    {
      title: 'داشبورد مدیریتی',
      href: '/admin',
      icon: LayoutDashboard,
    },
    {
      title: 'مدیریت فاکتورها',
      href: '/admin/invoices',
      icon: Receipt,
    },
    {
      title: 'مدیریت مقالات (CMS)',
      href: '/admin/seo/articles',
      icon: FileText,
    },
    {
      title: 'دفترچه مشتریان',
      href: '/admin/customers',
      icon: Users,
    },
    {
      title: 'مدیریت خدمات',
      href: '/admin/services',
      icon: Briefcase,
    },
    {
      title: 'پایش و آنالیز سئو',
      href: '/admin/seo',
      icon: Search,
    },
    {
      title: 'سلامت فنی سیستم',
      href: '/admin/site-health',
      icon: Activity,
    },
    {
      title: 'پیام‌رسان‌ها',
      href: '/admin/messengers',
      icon: MessageCircle,
    },
    {
      title: 'تنظیمات سیستم',
      href: '/admin/settings',
      icon: Settings,
    },
  ];

  return (
    <AdminAuthGuard>
      <div className="min-h-screen bg-[#070B15] text-slate-100 flex font-sans selection:bg-[#E5C158] selection:text-[#070B15] dir-rtl">
        {/* Mobile Backdrop */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 lg:hidden transition-opacity"
            onClick={() => setSidebarOpen(false)}
            onTouchEnd={(e) => {
              e.preventDefault();
              setSidebarOpen(false);
            }}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`fixed lg:static top-0 right-0 h-full w-72 max-w-[85vw] bg-[#0D1424] border-l border-slate-800 z-[55] transition-transform duration-300 ease-in-out flex flex-col justify-between print:hidden ${
            sidebarOpen
              ? 'translate-x-0'
              : 'translate-x-full lg:translate-x-0 pointer-events-none lg:pointer-events-auto'
          }`}
        >
          {/* Sidebar Top Header */}
          <div className="p-5 space-y-6">
            <div className="flex items-center justify-between">
              <Link href="/admin" onClick={() => setSidebarOpen(false)} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158] font-black shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-black text-white text-sm">پنل مدیریت نگارش یار</div>
                  <div className="text-[10px] text-slate-400 font-mono">مدیریت خدمات و فاکتورها</div>
                </div>
              </Link>
              <button
                type="button"
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Menu */}
            <nav className="space-y-1">
              {navItems.map((item) => {
                const isActive = pathname ? (pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href))) : false;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      isActive
                        ? 'bg-[#E5C158] text-[#070B15] shadow-[0_0_15px_rgba(229,193,88,0.25)]'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4 shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    {isActive && <ChevronLeft className="w-3.5 h-3.5" />}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Sidebar Bottom Footer */}
          <div className="p-4 border-t border-slate-800 space-y-2">
            <button
              type="button"
              onClick={() => {
                setSidebarOpen(false);
                window.dispatchEvent(new CustomEvent('open-admin-change-password'));
              }}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors font-medium"
            >
              <KeyRound className="w-4 h-4 text-[#E5C158]" />
              <span>تغییر رمز عبور مدیریت</span>
            </button>

            <Link
              href="/"
              target="_blank"
              className="flex items-center justify-between px-3 py-2 rounded-xl text-xs text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
            >
              <span className="flex items-center gap-2">
                <ExternalLink className="w-3.5 h-3.5 text-[#E5C158]" />
                <span>مشاهده وب‌سایت اصلی</span>
              </span>
            </Link>

            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-rose-400 hover:bg-rose-500/10 transition-colors font-bold"
            >
              <LogOut className="w-4 h-4" />
              <span>خروج از حساب مدیریت</span>
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Mobile Top Header */}
          <header className="lg:hidden bg-[#0D1424] border-b border-slate-800 px-4 py-3 flex items-center justify-between sticky top-0 z-40 print:hidden backdrop-blur-md bg-opacity-95">
            <button
              type="button"
              onClick={() => setSidebarOpen((prev) => !prev)}
              onTouchEnd={(e) => {
                e.preventDefault();
                setSidebarOpen((prev) => !prev);
              }}
              className="p-2.5 rounded-xl bg-slate-800/90 text-slate-200 border border-slate-700/80 active:bg-[#E5C158] active:text-[#070B15] transition-all flex items-center justify-center min-w-[44px] min-h-[44px] touch-target"
              aria-label="باز کردن منوی مدیریت"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 font-black text-xs text-white">
              <Shield className="w-4 h-4 text-[#E5C158]" />
              <span>پنل مدیریت نگارش یار</span>
            </div>
            <button
              type="button"
              onClick={handleLogout}
              className="px-2.5 py-1.5 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20 text-[11px] font-bold flex items-center gap-1 active:scale-95 transition-transform"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>خروج</span>
            </button>
          </header>

          <main className="p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto space-y-6">
            {children}
          </main>
        </div>
      </div>
    </AdminAuthGuard>
  );
}
