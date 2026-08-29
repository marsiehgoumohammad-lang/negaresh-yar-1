'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { UploadCloud, FileUp, Image as ImageIcon, FileText } from 'lucide-react';

interface UploaderProps {
  onFileSelected: (file: File) => void;
  error: string | null;
}

export function Uploader({ onFileSelected, error }: UploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
      onFileSelected(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileSelected(e.target.files[0]);
    }
  };

  return (
    <div id="interpreter-upload" className="space-y-3">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".pdf,image/jpeg,image/png,image/webp,image/heic"
        className="hidden"
      />

      <motion.div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        whileHover={{ scale: 1.005 }}
        whileTap={{ scale: 0.995 }}
        className={`relative cursor-pointer rounded-2xl p-8 sm:p-10 border-2 border-dashed transition-all duration-300 text-center flex flex-col items-center justify-center min-h-[220px] ${
          isDragging
            ? 'border-[#E5C158] bg-[#E5C158]/10 shadow-[0_0_30px_rgba(229,193,88,0.2)]'
            : 'border-slate-700/80 bg-[#0D1424]/90 hover:border-[#E5C158]/60 hover:bg-[#0D1424]'
        }`}
      >
        {/* Animated Icon Container */}
        <motion.div
          animate={{ y: isDragging ? [0, -8, 0] : [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E5C158]/20 to-[#D4AF37]/5 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158] mb-4 shadow-[0_0_20px_rgba(229,193,88,0.15)]"
        >
          <UploadCloud className="w-8 h-8" />
        </motion.div>

        {/* Action Title */}
        <h3 className="text-sm sm:text-base font-extrabold text-white mb-1">
          تصویر، اسکن یا فایل PDF سند خود را رها کنید یا{' '}
          <span className="text-[#E5C158] underline decoration-[#E5C158]/40 underline-offset-4">
            انتخاب کنید
          </span>
        </h3>

        <p className="text-xs text-slate-400 mb-4 max-w-md">
          پشتیبانی از تصویر گوشی موبایل، اسکن و فایل PDF ابلاغیه ثنا یا رای دادگاه (حداکثر ۱۵ مگابایت)
        </p>

        {/* Supported Format Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] text-slate-400">
          <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 flex items-center gap-1">
            <FileText className="w-3 h-3 text-[#E5C158]" /> PDF
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 flex items-center gap-1">
            <ImageIcon className="w-3 h-3 text-blue-400" /> JPG / PNG / WEBP
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 flex items-center gap-1">
            <FileUp className="w-3 h-3 text-emerald-400" /> اسکن کیفیت بالا
          </span>
        </div>
      </motion.div>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs text-right font-medium"
        >
          {error}
        </motion.div>
      )}
    </div>
  );
}
