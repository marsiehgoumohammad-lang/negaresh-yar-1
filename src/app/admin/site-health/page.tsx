'use client';

import React, { useEffect, useState } from 'react';
import { Activity, RefreshCw, CheckCircle2, AlertTriangle, XCircle, ShieldCheck } from 'lucide-react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { HealthCheckResult } from '@/app/api/admin/site-health/route';

export default function SiteHealthPage() {
  const [results, setResults] = useState<HealthCheckResult[]>([]);
  const [overallStatus, setOverallStatus] = useState<string>('healthy');
  const [lastChecked, setLastChecked] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const runHealthCheck = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/site-health');
      if (res.ok) {
        const data = await res.json();
        setResults(data.results || []);
        setOverallStatus(data.overallStatus || 'healthy');
        setLastChecked(data.lastCheckedAt ? new Date(data.lastCheckedAt).toLocaleTimeString('fa-IR') : '');
      }
    } catch (err) {
      console.error('Error running health check:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    runHealthCheck();
  }, []);

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#0D1424] border border-slate-800 p-5 rounded-2xl">
          <div>
            <h1 className="text-xl font-black text-white flex items-center gap-2">
              <Activity className="w-6 h-6 text-[#E5C158]" />
              <span>ارزیابی و پایش سلامت سیستم (Site Health)</span>
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              پایش لایه‌های فنی، دیتابیس محلی، دسترسی مسیرها و کلید سرویس هوش مصنوعی
            </p>
          </div>

          <button
            onClick={runHealthCheck}
            disabled={loading}
            className="px-4 py-2.5 rounded-xl bg-[#E5C158] hover:bg-[#D4AF37] text-[#070B15] font-black text-xs transition-colors shadow-[0_0_15px_rgba(229,193,88,0.25)] flex items-center gap-2 self-start sm:self-auto"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            <span>اجرای بررسی مجدد</span>
          </button>
        </div>

        {/* Overall Health Status Card */}
        <div className="bg-[#0D1424] border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 rounded-2xl border flex items-center justify-center shrink-0 ${
              overallStatus === 'healthy'
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
            }`}>
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <div className="text-base font-black text-white">
                {overallStatus === 'healthy' ? 'سیستم در وضعیت پایدار و کاملاً سالم قرار دارد' : 'سیستم نیازمند توجه به برخی هشدارها است'}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                آخرین زمان ارزیابی: {lastChecked || 'هم‌اکنون'}
              </div>
            </div>
          </div>
        </div>

        {/* Health Results Grid */}
        <div className="bg-[#0D1424] border border-slate-800 rounded-2xl p-5 space-y-4">
          <h2 className="font-bold text-white text-base border-b border-slate-800 pb-3">
            نتایج بررسی لایه‌های مختلف سیستم
          </h2>

          {loading ? (
            <div className="py-12 text-center text-slate-400 text-xs">در حال تست سرویس‌ها...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {results.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#070B15] border border-slate-800 rounded-xl p-4 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-xs">{item.name}</span>
                    {item.status === 'healthy' ? (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> سالم
                      </span>
                    ) : item.status === 'warning' ? (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" /> هشدار
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-500/10 text-rose-400 border border-rose-500/20 flex items-center gap-1">
                        <XCircle className="w-3 h-3" /> خطا
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium">{item.category}</div>
                  <p className="text-xs text-slate-300 leading-relaxed pt-1 border-t border-slate-800/80">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
