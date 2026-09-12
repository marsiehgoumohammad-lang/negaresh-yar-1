'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Clock, ChevronLeft } from 'lucide-react';
import { Container } from '../ui/container';

const realArticles = [
  {
    title: 'چگونه یک نامه اداری حرفه‌ای بنویسیم؟',
    description: 'اصول قالب‌بندی استاندارد، عبارات شروع و پایان‌بندی محترمانه در مکاتبات اداری و سازمانی.',
    slug: 'how-to-write-administrative-letter',
    category: 'آموزش نگارش اداری',
    readTime: '۵ دقیقه مطالعه',
  },
  {
    title: 'تفاوت دادخواست و شکواییه چیست؟',
    description: 'بررسی تفاوت‌های بنیادین دعاوی حقوقی در دادگاه مدنی با دعاوی کیفری و شکایت در دادسرا.',
    slug: 'petition-vs-complaint',
    category: 'آیین دادرسی',
    readTime: '۶ دقیقه مطالعه',
  },
  {
    title: 'لایحه دفاعیه چیست و چگونه تنظیم می‌شود؟',
    description: 'راهنمای مستندسازی دفاعیات کتبی، استناد به مواد قانونی و ارائه به قاضی پرونده.',
    slug: 'what-is-legal-brief',
    category: 'دفاعیه و لوایح',
    readTime: '۴ دقیقه مطالعه',
  },
  {
    title: 'نحوه اعتراض به رأی دادگاه و تجدیدنظرخواهی',
    description: 'مهلت‌های قانونی ۲۰ روزه تجدیدنظر، جهات نقض دادنامه و نحوه تدوین لایحه اعتراضی.',
    slug: 'how-to-appeal-court-decision',
    category: 'تجدیدنظرخواهی',
    readTime: '۷ دقیقه مطالعه',
  },
];

export function KnowledgeArticles() {
  return (
    <section id="articles" className="bg-[#0B1020] py-16 sm:py-20 text-white border-y border-slate-800/80 relative">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-3">
            قبل از نوشتن، راهنمایش را بخوان.
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            مقاله‌ها و راهنماهای گام‌به‌گام برای آشنایی با ساختار نامه‌ها و اصطلاحات
          </p>
        </div>

        {/* 4 Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {realArticles.map((art, idx) => (
            <Link
              key={idx}
              href={`/knowledge/${art.slug}`}
              className="flex flex-col justify-between p-6 rounded-2xl bg-[#0D1424] border border-slate-800 hover:border-[#E5C158]/50 transition-all text-right shadow-sm group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 text-xs">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#162036] text-[#E5C158] font-bold border border-slate-700/50">
                    {art.category}
                  </span>
                  <span className="text-slate-500 flex items-center gap-1 text-[11px]">
                    <Clock className="w-3 h-3" />
                    <span>{art.readTime}</span>
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#E5C158] transition-colors line-clamp-2">
                  {art.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3 mb-4">
                  {art.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-[#E5C158] font-semibold">
                <span>مطالعه راهنما</span>
                <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Knowledge Hub CTA */}
        <div className="text-center">
          <Link
            href="/knowledge"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-[#162036] hover:bg-[#1E2C4A] text-slate-200 hover:text-white font-bold text-xs sm:text-sm border border-slate-700 hover:border-[#E5C158]/50 shadow-md transition-all"
          >
            <BookOpen className="w-4 h-4 text-[#E5C158]" />
            <span>مشاهده همه راهنماها در پایگاه دانش</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
