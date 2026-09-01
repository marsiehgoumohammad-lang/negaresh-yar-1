'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Search, CheckCircle2, ShieldCheck, LineChart } from 'lucide-react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { AuditCheckItem } from '@/app/api/admin/seo/audit/route';

export default function SeoAuditOverviewPage() {
  const [overallScore, setOverallScore] = useState<number>(0);
  const [technicalChecks, setTechnicalChecks] = useState<AuditCheckItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch('/api/admin/seo/audit');
        if (res.ok) {
          const data = await res.json();
          setOverallScore(data.overallScore || 0);
          setTechnicalChecks(data.technicalChecks || []);
        }
      } catch (err) {
        console.error('Error fetching SEO audit:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#0D1424] border border-slate-800 p-5 rounded-2xl">
          <div>
            <h1 className="text-xl font-black text-white flex items-center gap-2">
              <Search className="w-6 h-6 text-[#E5C158]" />
              <span>پایش فنی و آنالیز سئوی وب‌سایت نگارش یار</span>
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              بررسی سلامت متاتگ‌ها، فایل‌های نقشه سایت، دستورات ربات‌ها و اسکیمای ارگانیک
            </p>
          </div>

          <Link
            href="/admin/seo/search-console"
            className="px-4 py-2.5 rounded-xl bg-[#E5C158] hover:bg-[#D4AF37] text-[#070B15] font-black text-xs transition-colors shadow-[0_0_15px_rgba(229,193,88,0.25)] flex items-center gap-2 self-start sm:self-auto shrink-0"
          >
            <LineChart className="w-4 h-4 text-[#070B15]" />
            <span>تحلیل Search Console</span>
          </Link>
        </div>

        {/* Sub-Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
          <Link
            href="/admin/seo"
            className="px-4 py-2 rounded-xl text-xs font-bold bg-[#E5C158] text-[#070B15] flex items-center gap-1.5"
          >
            <Search className="w-3.5 h-3.5 text-[#070B15]" />
            <span>وضعیت سئوی فنی</span>
          </Link>
          <Link
            href="/admin/seo/articles"
            className="px-4 py-2 rounded-xl text-xs font-bold bg-[#070B15] text-slate-400 hover:text-white border border-slate-800"
          >
            بررسی سئوی مقالات
          </Link>
          <Link
            href="/admin/seo/search-console"
            className="px-4 py-2 rounded-xl text-xs font-bold bg-[#070B15] text-slate-400 hover:text-white border border-slate-800"
          >
            تحلیل Search Console
          </Link>
        </div>

        {/* Technical Score Card */}
        <div className="bg-[#0D1424] border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158] shrink-0 font-black text-xl">
              ٪{overallScore}
            </div>
            <div>
              <div className="text-base font-black text-white">امتیاز سلامت فنی و سئوی ارگانیک</div>
              <div className="text-xs text-slate-400 mt-1">
                تمامی اصول سئوی On-Page، تگ‌های کانونیکال و اسکیماهای استاندارد رعایت گردیده‌اند.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-xl">
            <ShieldCheck className="w-4 h-4" />
            <span>وضعیت فنی استاندارد</span>
          </div>
        </div>

        {/* Technical Checks List */}
        <div className="bg-[#0D1424] border border-slate-800 rounded-2xl p-5 space-y-4">
          <h2 className="font-bold text-white text-base border-b border-slate-800 pb-3">
            فهرست بررسی‌های فنی و ساختار On-Page
          </h2>

          {loading ? (
            <div className="py-8 text-center text-slate-400 text-xs">در حال بارگیری چک‌لیست سئو...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {technicalChecks.map((check) => (
                <div
                  key={check.id}
                  className="bg-[#070B15] border border-slate-800 rounded-xl p-4 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-xs">{check.title}</span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> {check.statusText}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{check.explanation}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
