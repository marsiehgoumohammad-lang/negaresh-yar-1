'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Trash2, Cpu, UserCheck } from 'lucide-react';

export function Trust() {
  const trustMetrics = [
    {
      icon: ShieldCheck,
      title: 'محرمانگی کامل اسناد',
      description: 'فایل‌ها صرفاً در حافظه رم پردازش موقت می‌شوند و به هیچ شخص ثالثی نمایش داده نمی‌شوند.',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20',
    },
    {
      icon: Trash2,
      title: 'حذف خودکار فایل',
      description: 'تصاویر و فایل‌های PDF به محض اتمام تحلیل به طور کامل از سرورهای موقت پاک می‌شوند.',
      color: 'text-[#E5C158]',
      bgColor: 'bg-[#E5C158]/10',
      borderColor: 'border-[#E5C158]/20',
    },
    {
      icon: Cpu,
      title: 'قدرت‌گرفته از Gemini AI',
      description: 'استفاده از آخرین مدل‌های تحلیل متون پیچیده و استخراج اصطلاحات تخصصی حقوقی.',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
    },
    {
      icon: UserCheck,
      title: 'بدون نیاز به ثبت نام',
      description: 'بدون معطلی و فرم‌های پیچیده، سند خود را آپلود کنید و تحلیل آن را دریافت نمایید.',
      color: 'text-[#F3E0A2]',
      bgColor: 'bg-[#F3E0A2]/10',
      borderColor: 'border-[#F3E0A2]/20',
    },
  ];

  return (
    <section className="py-8 border-b border-slate-800/60">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {trustMetrics.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-4 rounded-xl bg-[#0D1424]/80 border border-slate-800 hover:border-slate-700 transition-all text-right flex flex-col justify-between"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-9 h-9 rounded-lg ${item.bgColor} border ${item.borderColor} flex items-center justify-center ${item.color} shrink-0`}>
                  <IconComponent className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold text-white leading-tight">{item.title}</h3>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
