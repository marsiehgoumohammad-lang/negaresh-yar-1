'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';

interface AnalysisResult {
  executiveSummary: string;
  verdictStatus: string;
  keyLegalPoints: string[];
  riskAssessment: {
    level: string;
    explanation: string;
  };
  recommendedSteps: string[];
  glossary: Array<{ term: string; definition: string }>;
  compellingActionCall: string;
}

export default function AiInterpreterPage() {
  const [file, setFile] = useState<File | null>(null);
  const [fileBase64, setFileBase64] = useState<string | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processFile = (selectedFile: File) => {
    // Validate file type
    const validTypes = [
      'application/pdf',
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/webp',
      'image/heic'
    ];

    if (!validTypes.includes(selectedFile.type) && !selectedFile.name.toLowerCase().endsWith('.pdf')) {
      setError('لطفاً فقط فایل با فرمت PDF یا تصویر (JPG, PNG, WEBP) آپلود کنید.');
      return;
    }

    if (selectedFile.size > 15 * 1024 * 1024) {
      setError('حجم فایل نباید بیشتر از ۱۵ مگابایت باشد.');
      return;
    }

    setError(null);
    setFile(selectedFile);

    // Create image preview if image
    if (selectedFile.type.startsWith('image/')) {
      const url = URL.createObjectURL(selectedFile);
      setFilePreview(url);
    } else {
      setFilePreview(null);
    }

    // Convert to base64
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      setFileBase64(base64);
    };
    reader.onerror = () => {
      setError('خطا در خواندن فایل.');
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setFileBase64(null);
    setFilePreview(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleAnalyze = async () => {
    if (!file || !fileBase64) {
      setError('لطفاً ابتدا فایل اسکن، تصویر یا PDF دادنامه خود را آپلود کنید.');
      return;
    }

    setError(null);
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch('/api/gemini/analyze-legal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fileBase64,
          mimeType: file.type || 'application/pdf',
          fileName: file.name
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'خطا در برقراری ارتباط با سیستم هوش مصنوعی');
      }

      setResult(data);
    } catch (err: unknown) {
      console.error(err);
      const errorMessage = err instanceof Error ? err.message : 'خطا در تحلیل سند. لطفاً مجدداً امتحان کنید.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#070B15] text-white flex flex-col selection:bg-[#E5C158] selection:text-[#070B15] pb-24">
      
      {/* Top Glass Navbar */}
      <header className="sticky top-0 z-40 bg-[#070B15]/90 backdrop-blur-md border-b border-slate-800/80 py-4">
        <Container>
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#E5C158] text-[#070B15] font-black text-lg flex items-center justify-center shadow-[0_0_15px_rgba(229,193,88,0.3)] shrink-0">
                ن
              </div>
              <div>
                <span className="font-extrabold text-lg text-white group-hover:text-[#E5C158] transition-colors block leading-tight">
                  نگارش یار
                </span>
                <span className="text-[10px] text-[#E5C158] font-semibold">
                  سامانه هوشمند تفسیر اوراق و اسناد قضایی
                </span>
              </div>
            </Link>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#121A2D] hover:bg-[#E5C158] text-[#E5C158] hover:text-[#070B15] border border-[#E5C158]/30 font-bold text-xs transition-all duration-200 shadow-sm"
            >
              <span>بازگشت به صفحه اصلی</span>
              <svg className="w-4 h-4 dir-rtl transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </Link>
          </div>
        </Container>
      </header>

      {/* Main Container */}
      <main className="flex-1 py-8 sm:py-12 relative overflow-hidden">
        
        {/* Ambient Radial Background Glow */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(229,193,88,0.06)_0%,transparent_70%)] pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05)_0%,transparent_70%)] pointer-events-none -z-10" />

        <Container>
          {/* Header Intro Title */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121A2D] border border-[#E5C158]/40 text-[#E5C158] text-xs font-bold mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#E5C158] animate-pulse" />
              <span>تحلیل تصویری و اسنادی با هوش مصنوعی Gemini AI</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
              تفسیر هوشمند اسناد و اوراق قضایی
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
              عکس یا فایل PDF دادنامه، شکواییه یا سند حقوقی خود را آپلود کنید تا سیستم در چند ثانیه خلاصه‌ای ساده، تحلیل رای، نکات قانونی و سنجش ریسک را استخراج کند.
            </p>
          </div>

          {/* Core App Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Upload Box Container (5 cols on LG) */}
            <div className="lg:col-span-5 bg-[#0D1424] rounded-2xl border border-slate-800 p-5 sm:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-extrabold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E5C158]" />
                  <span>آپلود فایل یا تصویر سند قضایی</span>
                </span>
                <span className="text-[11px] text-[#E5C158] font-bold">PDF / JPG / PNG</span>
              </div>

              {/* Drag and Drop Box */}
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => !file && fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-2xl p-6 sm:p-8 text-center transition-all cursor-pointer relative ${
                  isDragging
                    ? 'border-[#E5C158] bg-[#E5C158]/10'
                    : file
                    ? 'border-emerald-500/50 bg-[#070B15]'
                    : 'border-slate-700/80 hover:border-[#E5C158]/60 bg-[#070B15]/80 hover:bg-[#070B15]'
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="application/pdf,image/jpeg,image/jpg,image/png,image/webp,image/heic"
                  onChange={handleFileChange}
                  className="hidden"
                />

                {!file ? (
                  <div className="flex flex-col items-center justify-center space-y-3">
                    <div className="w-14 h-14 rounded-2xl bg-[#121A2D] border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158] shadow-inner group-hover:scale-105 transition-transform">
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>

                    <div>
                      <p className="text-xs sm:text-sm font-bold text-white mb-1">
                        جهت آپلود فایل یا عکس سند اینجا کلیک کنید
                      </p>
                      <p className="text-[11px] text-slate-400">
                        یا فایل را کشیده و در این کادر رها کنید (حداکثر ۱۵ مگابایت)
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#121A2D] text-[#E5C158] text-[11px] font-semibold border border-[#E5C158]/20">
                      <span>پشتیبانی از اسکن، عکس گوشی و PDF</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center space-y-3">
                    {filePreview ? (
                      <div className="relative w-24 h-24 rounded-xl overflow-hidden border border-[#E5C158]/50 shadow-md">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={filePreview} alt="پیش‌نمایش سند" className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <div className="w-14 h-14 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-bold text-lg">
                        PDF
                      </div>
                    )}

                    <div className="text-center">
                      <p className="text-xs font-bold text-emerald-400 truncate max-w-[220px]">
                        {file.name}
                      </p>
                      <p className="text-[10px] text-slate-400 mt-0.5">
                        حجم: {(file.size / (1024 * 1024)).toFixed(2)} مگابایت
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveFile();
                      }}
                      className="px-3 py-1 rounded-lg bg-rose-950/60 hover:bg-rose-900 border border-rose-500/30 text-rose-300 text-[11px] font-bold transition-colors"
                    >
                      حذف و انتخاب فایل دیگر
                    </button>
                  </div>
                )}
              </div>

              {error && (
                <div className="mt-4 p-3 rounded-xl bg-red-950/40 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{error}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                onClick={handleAnalyze}
                disabled={loading || !file}
                className="w-full mt-4 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] hover:brightness-110 text-[#070B14] font-black text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(229,193,88,0.25)] transition-all disabled:opacity-50 cursor-pointer"
              >
                {loading ? (
                  <>
                    <svg className="w-5 h-5 animate-spin text-[#070B14]" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>در حال خواندن متون سند و تفسیر هوشمند...</span>
                  </>
                ) : (
                  <>
                    <span>تحلیل و تفسیر هوشمند سند آپلود شده</span>
                    <svg className="w-4 h-4 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                  </>
                )}
              </button>

              {/* Legal Warning Notice */}
              <div className="mt-4 p-3 rounded-xl bg-[#121A2D]/70 border border-[#E5C158]/20 text-[11px] text-slate-300 leading-relaxed">
                <span className="font-bold text-[#E5C158]">تذکر قانونی: </span>
                تفسیر هوش مصنوعی برای تسهیل درک سریع اسناد است و جایگزین مشاوره یا لایحه رسمی وکلا محسوب نمی‌شود.
              </div>
            </div>

            {/* Results Display Panel (7 cols on LG) */}
            <div className="lg:col-span-7 bg-[#0D1424] rounded-2xl border border-slate-800 p-5 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.6)] min-h-[420px] flex flex-col justify-between">
              
              {!result && !loading && (
                <div className="flex flex-col items-center justify-center text-center py-20 text-slate-400 my-auto">
                  <div className="w-16 h-16 rounded-2xl bg-[#121A2D] border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158] mb-4 shadow-inner">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">هنوز فایلی تحلیل نشده است</h3>
                  <p className="text-xs text-slate-400 max-w-sm">
                    فایل یا عکس دادنامه خود را در کادر سمت راست آپلود کنید و دکمه شروع تحلیل را فشار دهید تا گزارش کارشناسی هوشمند صادر شود.
                  </p>
                </div>
              )}

              {loading && (
                <div className="flex flex-col items-center justify-center text-center py-24 text-slate-300 my-auto space-y-4">
                  <div className="w-12 h-12 rounded-full border-2 border-[#E5C158] border-t-transparent animate-spin" />
                  <p className="text-sm font-semibold text-[#E5C158]">در حال پردازش متون اسکن‌شده و استخراج مفاد رای...</p>
                  <p className="text-xs text-slate-400">تحلیل مواد قانونی، مهلت‌های تجدیدنظر و سطح ریسک...</p>
                </div>
              )}

              {result && !loading && (
                <div className="space-y-6">
                  
                  {/* Result Header & Status */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
                    <div>
                      <span className="text-xs text-slate-400 block mb-0.5">گزارش کارشناسی تحلیل سند:</span>
                      <h3 className="text-base sm:text-lg font-black text-white">{file?.name || 'سند آپلود شده'}</h3>
                    </div>

                    <div className="bg-[#121A2D] border border-[#E5C158]/40 px-3.5 py-1.5 rounded-xl text-xs font-bold text-[#E5C158] shadow-sm">
                      وضعیت: {result.verdictStatus}
                    </div>
                  </div>

                  {/* Plain Executive Summary */}
                  <div className="bg-[#121A2D] border-r-4 border-[#E5C158] p-4 rounded-l-xl">
                    <h4 className="text-xs font-bold text-[#E5C158] mb-1.5 flex items-center gap-1.5">
                      <span>📌</span>
                      <span>خلاصه روان پرونده به زبان ساده:</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                      {result.executiveSummary}
                    </p>
                  </div>

                  {/* Key Legal Points */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-300 mb-2 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158]" />
                      <span>نکات کلیدی و الزامات قانونی استخراج شده:</span>
                    </h4>
                    <ul className="space-y-2">
                      {result.keyLegalPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 bg-[#070B15]/60 p-2.5 rounded-lg border border-slate-800">
                          <span className="text-[#E5C158] font-bold">✓</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Risk Assessment & Recommended Steps */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Risk Box */}
                    <div className="bg-[#070B15]/80 p-4 rounded-xl border border-slate-800">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-slate-300">سنجش ریسک حقوقی:</span>
                        <span className={`text-[11px] font-extrabold px-2.5 py-0.5 rounded-full ${
                          result.riskAssessment.level === 'کم' ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/30' :
                          result.riskAssessment.level === 'متوسط' ? 'bg-amber-950 text-amber-400 border border-amber-500/30' :
                          'bg-rose-950 text-rose-400 border border-rose-500/30'
                        }`}>
                          ریسک {result.riskAssessment.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {result.riskAssessment.explanation}
                      </p>
                    </div>

                    {/* Next Action Box */}
                    <div className="bg-[#070B15]/80 p-4 rounded-xl border border-slate-800">
                      <span className="text-xs font-bold text-slate-300 block mb-2">اقدامات پیشنهادی بعدی:</span>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {result.recommendedSteps.map((step, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-[#E5C158]">•</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Glossary Section */}
                  {result.glossary && result.glossary.length > 0 && (
                    <div className="pt-1">
                      <h4 className="text-xs font-bold text-slate-300 mb-2">واژه‌نامه اصطلاحات تخصصی موجود در سند:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {result.glossary.map((g, idx) => (
                          <div key={idx} className="bg-[#121A2D] p-2.5 rounded-lg border border-slate-800/80 text-xs">
                            <span className="font-bold text-[#E5C158] block mb-0.5">{g.term}:</span>
                            <span className="text-slate-300 text-[11px]">{g.definition}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* HIGHLY PERSUASIVE ACTION CALL BOX */}
                  {result.compellingActionCall && (
                    <div className="mt-6 p-4 rounded-2xl bg-gradient-to-br from-[#121A2D] via-[#0D1424] to-[#121A2D] border-2 border-[#E5C158]/50 shadow-[0_0_25px_rgba(229,193,88,0.15)] relative overflow-hidden">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#E5C158] text-[#070B15] flex items-center justify-center font-black text-xl shrink-0 shadow-md">
                          ⚡
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xs font-extrabold text-[#E5C158] mb-1">
                            توصیه مهم کارشناسی نگارش یار:
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-100 font-semibold leading-relaxed">
                            {result.compellingActionCall}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(`خلاصه سند:\n${result.executiveSummary}\n\nتوصیه:\n${result.compellingActionCall}`);
                        alert('گزارش با موفقیت کپی شد.');
                      }}
                      className="px-4 py-2 rounded-xl bg-[#121A2D] hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-bold transition-colors"
                    >
                      📋 کپی خلاصه گزارش
                    </button>

                    <Link
                      href="/#contact"
                      className="px-5 py-2.5 rounded-xl bg-[#E5C158] hover:bg-[#D4AF37] text-[#070B15] font-black text-xs shadow-lg transition-all flex items-center gap-1.5"
                    >
                      <span>ثبت آنلاین درخواست با متخصصان نگارش یار</span>
                      <span>←</span>
                    </Link>
                  </div>

                </div>
              )}

            </div>

          </div>

        </Container>
      </main>

      {/* ALWAYS VISIBLE PERSISTENT FLOATING BUTTON (ثبت درخواست) AT THE BOTTOM */}
      <div className="fixed bottom-4 right-4 sm:right-8 z-50">
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] hover:brightness-110 text-[#070B14] font-black text-xs sm:text-sm shadow-[0_10px_30px_rgba(229,193,88,0.4)] border border-[#070B15]/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#070B14] animate-ping" />
          <span>ثبت درخواست اختصاصی حقوقی / اداری</span>
          <svg className="w-4 h-4 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </Link>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-6 text-center text-xs text-slate-500 bg-[#070B15]">
        <Container>
          <span>© {new Date().getFullYear()} نگارش یار — سامانه هوشمند نگارش و تفسیر اسناد رسمی</span>
        </Container>
      </footer>
    </div>
  );
}
