'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, FileCheck, Users, Lock, ArrowLeft } from 'lucide-react';
import { Container } from '../ui/container';

const trustPillars = [
  {
    icon: ShieldCheck,
    title: 'تعهد به محرمانگی داده‌ها',
    description: 'تمامی جزییات، اطلاعات هویتی و متون مبادله‌شده تنها برای تدوین درخواست شما استفاده شده و کاملاً محرمانه باقی می‌مانند.',
  },
  {
    icon: FileCheck,
    title: 'قالب‌های استاندارد و آزموده‌شده',
    description: 'الگوها و فرمت‌های نگارش بر اساس آخرین رویه‌های متداول در دبیرخانه‌های دولتی، بانک‌ها و مراجع قضایی تدوین شده‌اند.',
  },
  {
    icon: Lock,
    title: 'شفافیت در مراحل و هزینه‌ها',
    description: 'قبل از ثبت نهایی، دسته‌بندی، جزییات درخواست و مسیر تحویل به وضوح به اطلاع شما می‌رسد و نیازی به رفت‌وآمدهای غیرضروری نیست.',
  },
  {
    icon: Users,
    title: 'پشتیبانی و ارتباط پیوسته',
    description: 'امکان ارتباط مستقیم از طریق پیام‌رسان‌های ایرانی و تلفن همراه رسمی برای پیگیری و اعمال تغییرات لازم فراهم است.',
  },
];

export function TrustSection() {
  return (
    <section className="bg-[#070B15] py-16 sm:py-20 text-white relative">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-3">
            نگارشیار برای همین کار ساخته شده است.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            تمرکز کامل ما روی ساده‌سازی تنظیم اوراق رسمی با اتکا به استانداردهای نگارشی و اعتماد متقابل است.
          </p>
        </div>

        {/* 4 Trust Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {trustPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0D1424] border border-slate-800 text-right flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#162036] text-[#E5C158] flex items-center justify-center mb-4 border border-slate-700/60">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact/Support Strip */}
        <div className="max-w-3xl mx-auto p-5 rounded-2xl bg-[#0D1424]/90 border border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-right">
            <h4 className="text-sm font-bold text-white">
              نیاز به راهنمایی در انتخاب خدمت دارید؟
            </h4>
            <p className="text-xs text-slate-400">
              کارشناسان پشتیبانی نگارشیار در ساعات کاری آماده پاسخگویی هستند.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#162036] hover:bg-[#1E2C4A] text-slate-200 hover:text-white font-bold text-xs border border-slate-700 hover:border-[#E5C158]/50 transition-all shrink-0"
          >
            <span>تماس با پشتیبانی</span>
            <ArrowLeft className="w-3.5 h-3.5 text-[#E5C158]" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
