'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { FileText, Image as ImageIcon, Trash2, CheckCircle2, Sparkles, ArrowLeft } from 'lucide-react';

interface SelectedFileCardProps {
  file: File;
  filePreview: string | null;
  onRemove: () => void;
  onAnalyze: () => void;
  loading: boolean;
}

export function SelectedFileCard({
  file,
  filePreview,
  onRemove,
  onAnalyze,
  loading,
}: SelectedFileCardProps) {
  const fileSizeMb = (file.size / (1024 * 1024)).toFixed(2);
  const isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="p-5 sm:p-6 rounded-2xl bg-[#0D1424] border border-[#E5C158]/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)] space-y-5"
    >
      {/* Top Header & Status */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          {/* File Thumbnail or PDF Badge */}
          {filePreview ? (
            <div className="w-14 h-14 rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shrink-0 relative">
              <Image
                src={filePreview}
                alt="پیش‌نمایش سند"
                fill
                unoptimized
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          ) : (
            <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/20 flex flex-col items-center justify-center text-[#E5C158] shrink-0">
              {isPdf ? <FileText className="w-7 h-7" /> : <ImageIcon className="w-7 h-7" />}
              <span className="text-[9px] font-bold mt-0.5">{isPdf ? 'PDF' : 'فایل'}</span>
            </div>
          )}

          <div className="text-right">
            <h4 className="text-xs sm:text-sm font-extrabold text-white truncate max-w-[200px] sm:max-w-xs mb-1">
              {file.name}
            </h4>
            <p className="text-[11px] text-slate-400">
              حجم فایل: <span className="font-mono text-slate-300">{fileSizeMb} مگابایت</span>
            </p>
          </div>
        </div>

        {/* Ready Badge & Remove Button */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>آماده توضیح به زبان ساده</span>
          </div>

          <button
            onClick={onRemove}
            disabled={loading}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-red-500/20 hover:text-red-400 text-slate-400 border border-slate-700 transition-colors"
            title="حذف سند و انتخاب فایل جدید"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Action CTA Button */}
      <div className="pt-2">
        <motion.button
          onClick={onAnalyze}
          disabled={loading}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="w-full py-4 px-6 rounded-xl bg-gradient-to-l from-[#F3E0A2] via-[#E5C158] to-[#D4AF37] text-[#070B15] font-black text-sm sm:text-base shadow-[0_0_25px_rgba(229,193,88,0.35)] hover:shadow-[0_0_35px_rgba(229,193,88,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
        >
          <Sparkles className="w-5 h-5 text-[#070B15] fill-[#070B15]" />
          <span>توضیح ساده سند به زبان عامیانه</span>
          <ArrowLeft className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.div>
  );
}
