'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  LineChart,
  Upload,
  FileSpreadsheet,
  Sparkles,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { SearchConsoleReport, SearchConsoleRow, AnalysisOpportunity } from '@/lib/stores/types';

export default function SearchConsoleAnalyticsPage() {
  const [reports, setReports] = useState<SearchConsoleReport[]>([]);
  const [selectedReport, setSelectedReport] = useState<SearchConsoleReport | null>(null);
  const [analysis, setAnalysis] = useState<{
    opportunities: AnalysisOpportunity[];
    topQueries: SearchConsoleRow[];
    topPages: SearchConsoleRow[];
    growingItems: { name: string; clickDiff: number; impDiff: number }[];
    decliningItems: { name: string; clickDiff: number; impDiff: number }[];
  } | null>(null);

  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadError, setUploadError] = useState<string>('');
  const [uploadSuccess, setUploadSuccess] = useState<string>('');

  const fetchReports = async (selectedId?: string) => {
    try {
      const url = selectedId
        ? `/api/admin/seo/search-console?id=${selectedId}`
        : '/api/admin/seo/search-console';
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        setReports(data.reports || []);
        setSelectedReport(data.selectedReport || null);
        setAnalysis(data.analysis || null);
      }
    } catch (err) {
      console.error('Error fetching GSC reports:', err);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setUploadError('');
    setUploadSuccess('');

    try {
      const text = await file.text();
      const res = await fetch('/api/admin/seo/search-console', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          filename: file.name,
          content: text,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setUploadSuccess('فایل Search Console با موفقیت پردازش و ذخیره گردید.');
        fetchReports(data.report.id);
      } else {
        const err = await res.json();
        setUploadError(err.error || 'خطا در آپلود فایل');
      }
    } catch (err) {
      console.error('Error uploading GSC file:', err);
      setUploadError('خطا در خواندن فایل CSV.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#0D1424] border border-slate-800 p-5 rounded-2xl">
          <div>
            <h1 className="text-xl font-black text-white flex items-center gap-2">
              <LineChart className="w-6 h-6 text-[#E5C158]" />
              <span>تحلیل پایش ورودی‌ها و فرصت‌های Search Console</span>
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              بارگذاری خروجی اکسل/CSV گوگل سرچ کنسول، شناسایی کلمات آستانه صفحه ۱ و تحلیل نرخ کلیک
            </p>
          </div>

          {/* Upload Button */}
          <label className="px-4 py-2.5 rounded-xl bg-[#E5C158] hover:bg-[#D4AF37] text-[#070B15] font-black text-xs transition-colors shadow-[0_0_15px_rgba(229,193,88,0.25)] flex items-center gap-2 cursor-pointer self-start sm:self-auto">
            <Upload className="w-4 h-4" />
            <span>{uploading ? 'در حال پردازش CSV...' : 'بارگذاری خروجی جدید GSC'}</span>
            <input
              type="file"
              accept=".csv,.txt"
              onChange={handleFileUpload}
              disabled={uploading}
              className="hidden"
            />
          </label>
        </div>

        {/* Messages */}
        {uploadError && (
          <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{uploadError}</span>
          </div>
        )}
        {uploadSuccess && (
          <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{uploadSuccess}</span>
          </div>
        )}

        {/* Sub-Navigation Tabs */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Link
              href="/admin/seo"
              className="px-4 py-2 rounded-xl text-xs font-bold bg-[#070B15] text-slate-400 hover:text-white border border-slate-800"
            >
              وضعیت سئوی فنی
            </Link>
            <Link
              href="/admin/seo/articles"
              className="px-4 py-2 rounded-xl text-xs font-bold bg-[#070B15] text-slate-400 hover:text-white border border-slate-800"
            >
              بررسی سئوی مقالات
            </Link>
            <Link
              href="/admin/seo/search-console"
              className="px-4 py-2 rounded-xl text-xs font-bold bg-[#E5C158] text-[#070B15] flex items-center gap-1.5"
            >
              <LineChart className="w-3.5 h-3.5 text-[#070B15]" />
              <span>تحلیل Search Console</span>
            </Link>
          </div>

          {/* Historical Report Selector */}
          {reports.length > 0 && (
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-bold">انتخاب گزارش:</span>
              <select
                value={selectedReport?.id || ''}
                onChange={(e) => fetchReports(e.target.value)}
                className="bg-[#070B15] border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none"
              >
                {reports.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.title} ({r.periodStart} تا {r.periodEnd})
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Report Summary Cards */}
        {selectedReport ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-[#0D1424] border border-slate-800 rounded-2xl p-5 space-y-1">
                <span className="text-xs font-bold text-slate-400">مجموع کلیک‌ها (Clicks)</span>
                <div className="text-2xl font-black text-white">
                  {selectedReport.totalClicks.toLocaleString('fa-IR')}
                </div>
                <div className="text-[11px] text-slate-500">ورودی ارگانیک از گوگل</div>
              </div>

              <div className="bg-[#0D1424] border border-slate-800 rounded-2xl p-5 space-y-1">
                <span className="text-xs font-bold text-slate-400">تعداد نمایش (Impressions)</span>
                <div className="text-2xl font-black text-white">
                  {selectedReport.totalImpressions.toLocaleString('fa-IR')}
                </div>
                <div className="text-[11px] text-slate-500">بار دیده شدن در نتایج Search</div>
              </div>

              <div className="bg-[#0D1424] border border-slate-800 rounded-2xl p-5 space-y-1">
                <span className="text-xs font-bold text-slate-400">میانگین نرخ کلیک (CTR)</span>
                <div className="text-2xl font-black text-[#E5C158]">
                  ٪{selectedReport.avgCtr.toLocaleString('fa-IR')}
                </div>
                <div className="text-[11px] text-slate-500">نسبت کلیک به نمایش</div>
              </div>

              <div className="bg-[#0D1424] border border-slate-800 rounded-2xl p-5 space-y-1">
                <span className="text-xs font-bold text-slate-400">میانگین جایگاه (Position)</span>
                <div className="text-2xl font-black text-emerald-400">
                  {selectedReport.avgPosition.toLocaleString('fa-IR')}
                </div>
                <div className="text-[11px] text-slate-500">موقعیت متداول در نتایج</div>
              </div>
            </div>

            {/* Opportunities Analysis Cards */}
            {analysis && analysis.opportunities.length > 0 && (
              <div className="bg-[#0D1424] border border-[#E5C158]/30 bg-gradient-to-br from-[#E5C158]/5 to-transparent rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                  <Sparkles className="w-5 h-5 text-[#E5C158]" />
                  <h2 className="font-bold text-white text-base">
                    فرصت‌های طلایی رشد و بهبود سئو (تحلیل الگوریتمی)
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {analysis.opportunities.map((opp, idx) => (
                    <div
                      key={idx}
                      className="bg-[#070B15] border border-slate-800 rounded-xl p-4 space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-black text-[#E5C158] text-xs">{opp.item}</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-300">
                          {opp.metricLabel}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">{opp.explanation}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Top Queries Table */}
            <div className="bg-[#0D1424] border border-slate-800 rounded-2xl p-5 space-y-4">
              <h2 className="font-bold text-white text-base border-b border-slate-800 pb-3">
                عبارات و کلمات کلیدی پرجستجو (Top Queries)
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-right text-xs">
                  <thead>
                    <tr className="text-slate-400 border-b border-slate-800 pb-2">
                      <th className="pb-3 font-bold">عبارت جستجو شده</th>
                      <th className="pb-3 font-bold">تعداد کلیک</th>
                      <th className="pb-3 font-bold">تعداد نمایش</th>
                      <th className="pb-3 font-bold">نرخ کلیک (CTR)</th>
                      <th className="pb-3 font-bold">جایگاه در گوگل</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {selectedReport.queries.slice(0, 15).map((q, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                        <td className="py-3 font-bold text-white">{q.query}</td>
                        <td className="py-3 font-mono text-[#E5C158] font-bold">
                          {q.clicks.toLocaleString('fa-IR')}
                        </td>
                        <td className="py-3 text-slate-300">
                          {q.impressions.toLocaleString('fa-IR')}
                        </td>
                        <td className="py-3 text-slate-300 font-mono">٪{q.ctr}</td>
                        <td className="py-3 text-emerald-400 font-bold font-mono">{q.position}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          /* Empty State / Upload Guide */
          <div className="bg-[#0D1424] border border-slate-800 rounded-3xl p-10 text-center space-y-5 max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] flex items-center justify-center mx-auto">
              <FileSpreadsheet className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-black text-white">هنوز هیچ گزارش Search Console بارگذاری نشده است</h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                جهت تحلیل ورودی‌های ارگانیک و دریافت پیشنهادهای رشد نرخ کلیک، فایل CSV خروجی گوگل سرچ کنسول (قسمت Performance) را بارگذاری کنید.
              </p>
            </div>

            <label className="inline-flex px-6 py-3 rounded-xl bg-[#E5C158] hover:bg-[#D4AF37] text-[#070B15] font-black text-xs transition-colors shadow-[0_0_20px_rgba(229,193,88,0.3)] cursor-pointer items-center gap-2">
              <Upload className="w-4 h-4" />
              <span>انتخاب و بارگذاری فایل CSV سرچ کنسول</span>
              <input
                type="file"
                accept=".csv,.txt"
                onChange={handleFileUpload}
                disabled={uploading}
                className="hidden"
              />
            </label>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
