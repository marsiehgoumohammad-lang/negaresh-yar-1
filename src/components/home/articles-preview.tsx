'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Container } from '../ui/container';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  fullContent: string[];
  date: string;
  readTime: string;
  category: string;
  categorySlug: 'legal' | 'admin' | 'cybernet';
  image: string;
  isFeatured?: boolean;
}

const articlesData: Article[] = [
  {
    id: 'art-1',
    title: 'راهنمای جامع تنظیم نامه‌های اداری اثرگذار و رسمی',
    excerpt: 'چگونه درخواست اداری خود را متقاعدکننده، محترمانه و دقیق بنویسیم تا بدون اتلاف وقت به نتیجه برسد.',
    fullContent: [
      'تنظیم نامه‌های اداری استاندارد، نیازمند رعایت اصول خاصی در به کارگیری کلمات، لحن محترمانه و به کارهای بردن عناوین صحیح سازمانی است.',
      'در مرحله نخست، مشخص بودن هدف نامه و صراحت در بیان خواسته اهمیت بالایی دارد. حاشیه‌پردازی در نامه‌های رسمی باعث کندی فرایند اداری می‌شود.',
      'همچنین درج مشخصات کامل فرستنده، گیرنده و تاریخ دقیق، ضمانت پیگیری حقوقی نامه را افزایش می‌دهد. کارشناسان نگارش یار تمامی این استانداردها را به طور کامل رعایت می‌کنند.'
    ],
    date: '۱۴ مرداد ۱۴۰۲',
    readTime: '۵ دقیقه مطالعه',
    category: 'نامه‌نگاری اداری',
    categorySlug: 'admin',
    image: '/images/article_admin.jpg',
    isFeatured: true,
  },
  {
    id: 'art-2',
    title: 'تفاوت‌های بنیادین دادخواست، شکواییه و اظهارنامه حقوقی',
    excerpt: 'بررسی آیین دادرسی و نحوه تمایز دعاوی حقوقی از شکایت‌های کیفری جهت جلوگیری از رد دادخواست.',
    fullContent: [
      'یکی از رایج‌ترین اشتباهات اشخاص در مراجع قضایی، اشتباه گرفتن شکواییه با دادخواست حقوقی است که منجر به رد دعوا یا هدر رفت وقت می‌شود.',
      'شکواییه مربوط به جرایم و امور کیفری (مانند کلاهبرداری، سرقت، خیانت در امانت) است که توسط دادسرا پیگیری می‌شود.',
      'دادخواست برای مطالبه حقوق مدنی (مانند خسارت، الزام به تنظیم سند، طلاق) ارائه شده و به دادگاه حقوقی ارجاع می‌گردد.'
    ],
    date: '۰۹ مرداد ۱۴۰۲',
    readTime: '۴ دقیقه مطالعه',
    category: 'حقوقی و قضایی',
    categorySlug: 'legal',
    image: '/images/article_legal.jpg',
  },
  {
    id: 'art-3',
    title: 'مراحل ثبت‌نام غیرحضوری در سامانه ثنا و سجام',
    excerpt: 'راهنمای گام‌به‌گام احراز هویت الکترونیک قضایی و دریافت ابلاغیه‌ها بدون مراجعه به دفاتر خدمات قضایی.',
    fullContent: [
      'سامانه ثنا (ثبت‌نام الکترونیک قضایی) دروازه ورود به کلیه خدمات قوه قضاییه است و تمام ابلاغیه‌ها و احضاریه‌ها از این طریق ارسال می‌شوند.',
      'با احراز هویت هوشمند تصویری در کافی‌نت آنلاین نگارش یار، ثبت‌نام ثنا و سجام در کوتاه‌ترین زمان ممکن و با تایید فوری انجام می‌شود.'
    ],
    date: '۰۲ مرداد ۱۴۰۲',
    readTime: '۳ دقیقه مطالعه',
    category: 'ثبت‌نام‌های اینترنتی',
    categorySlug: 'cybernet',
    image: '/images/service_cybernet.jpg',
  },
  {
    id: 'art-4',
    title: 'نکات کلیدی در نگارش لایحه دفاعیه برای دادگاه تجدیدنظر',
    excerpt: 'اصول استدلال حقوقی و استناد به مواد قانونی جهت موفقیت در لوایح اعتراضی و پرونده‌های حساس.',
    fullContent: [
      'تنظیم لایحه دفاعیه نیازمند تسلط بر آیین دادرسی و استناد دقیق به بندهای قانونی مربوطه است.',
      'تیم حقوقی نگارش یار با استناد به آرای وحدت رویه و قوانین موضوعه، قوی‌ترین متن دفاعیه را برای شما تنظیم می‌کند.'
    ],
    date: '۲۵ تیر ۱۴۰۲',
    readTime: '۶ دقیقه مطالعه',
    category: 'حقوقی و قضایی',
    categorySlug: 'legal',
    image: '/images/service_legal.jpg',
  },
];

const categories = [
  { label: 'همه مطالب', slug: 'all' },
  { label: 'حقوقی و قضایی', slug: 'legal' },
  { label: 'نامه‌نگاری اداری', slug: 'admin' },
  { label: 'ثبت‌نام‌های اینترنتی', slug: 'cybernet' },
];

export function ArticlesPreview() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const filteredArticles = activeTab === 'all'
    ? articlesData
    : articlesData.filter((a) => a.categorySlug === activeTab);

  const featuredArticle = articlesData.find((a) => a.isFeatured) || articlesData[0];

  return (
    <section id="articles" className="py-16 sm:py-24 bg-[#070B15] text-white border-b border-secondary-800/40 relative overflow-hidden">
      
      {/* Background Subtle Gradient Spotlights */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(229,193,88,0.05)_0%,transparent_70%)] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.05)_0%,transparent_75%)] pointer-events-none -z-10" />

      <Container>
        {/* Section Minimal Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 border-b border-slate-800/80 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121A2D] border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold mb-3 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158]" />
              <span>دانشنامه و راهنماهای کاربردی</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
              مجله اداری و حقوقی نگارش یار
            </h2>
          </div>

          {/* Minimalist Tab Navigation */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 bg-[#0D1424] p-1.5 rounded-xl border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveTab(cat.slug)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                  activeTab === cat.slug
                    ? 'bg-[#E5C158] text-[#070B15] shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured & Minimal List Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Top: Featured Article Spotlight Card (7 cols) */}
          <div className="lg:col-span-7 group relative bg-[#0D1424] rounded-2xl border border-slate-800 hover:border-[#E5C158]/50 transition-all duration-300 overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
            
            {/* Featured Image Frame */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/9] bg-slate-900 overflow-hidden">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                referrerPolicy="no-referrer"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1424] via-[#0D1424]/40 to-transparent" />
              
              {/* Category & Read Time Tags */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <span className="bg-[#E5C158] text-[#070B15] px-3 py-1 rounded-lg text-xs font-extrabold shadow-md">
                  ویژه
                </span>
                <span className="bg-[#070B15]/80 backdrop-blur-md border border-white/20 text-slate-200 px-3 py-1 rounded-lg text-xs font-medium">
                  {featuredArticle.category}
                </span>
              </div>
            </div>

            {/* Featured Card Details */}
            <div className="p-6 sm:p-8 pt-2">
              <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                <span>{featuredArticle.date}</span>
                <span>•</span>
                <span className="text-[#E5C158]">{featuredArticle.readTime}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-[#E5C158] transition-colors leading-snug mb-3">
                {featuredArticle.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {featuredArticle.excerpt}
              </p>

              {/* Action Button */}
              <button
                onClick={() => setSelectedArticle(featuredArticle)}
                className="inline-flex items-center gap-2 py-2.5 px-5 rounded-xl bg-[#121A2D] hover:bg-[#E5C158] text-[#E5C158] hover:text-[#070B15] border border-[#E5C158]/40 font-bold text-xs sm:text-sm transition-all duration-200 shadow-sm"
              >
                <span>مطالعه کامل مقاله</span>
                <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right / Bottom: Minimal Editorial List Rows (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>سایر مقالات برتر</span>
              <span className="text-[#E5C158]">{filteredArticles.length} مقاله</span>
            </div>

            <div className="space-y-3">
              {filteredArticles.map((article, index) => (
                <div
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className="group relative bg-[#0D1424]/90 hover:bg-[#121A2D] p-4 sm:p-5 rounded-xl border border-slate-800 hover:border-[#E5C158]/40 transition-all duration-200 cursor-pointer flex gap-4 items-start shadow-sm"
                >
                  {/* Article Index / Numbering */}
                  <span className="text-lg font-black text-[#E5C158]/40 group-hover:text-[#E5C158] transition-colors shrink-0 dir-ltr font-mono">
                    0{index + 1}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-1.5">
                      <span className="text-[#E5C158] font-semibold">{article.category}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-[#E5C158] transition-colors leading-snug line-clamp-2 mb-1">
                      {article.title}
                    </h4>

                    <p className="text-xs text-slate-400 line-clamp-1 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Arrow Icon */}
                  <div className="shrink-0 self-center text-slate-600 group-hover:text-[#E5C158] transition-colors">
                    <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </Container>

      {/* Interactive Article Reading Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#0D1424] border border-[#E5C158]/50 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9)] text-white relative">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 left-4 w-9 h-9 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-colors"
            >
              ✕
            </button>

            {/* Modal Header Badge */}
            <div className="flex items-center gap-2 text-xs text-[#E5C158] font-bold mb-3">
              <span className="px-2.5 py-0.5 rounded-full bg-[#121A2D] border border-[#E5C158]/30">
                {selectedArticle.category}
              </span>
              <span>•</span>
              <span className="text-slate-400">{selectedArticle.date}</span>
              <span>•</span>
              <span className="text-slate-400">{selectedArticle.readTime}</span>
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-4 leading-tight">
              {selectedArticle.title}
            </h3>

            {/* Excerpt */}
            <div className="bg-[#121A2D] border-r-4 border-[#E5C158] p-4 rounded-l-xl text-slate-200 text-sm mb-6 leading-relaxed">
              {selectedArticle.excerpt}
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-4 text-sm text-slate-300 leading-relaxed mb-8">
              {selectedArticle.fullContent.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Bottom Modal CTA */}
            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-400 text-center sm:text-right">
                نیاز به نگارش اختصاصی برای پرونده یا نامه خود دارید؟
              </p>
              <a
                href="#contact"
                onClick={() => setSelectedArticle(null)}
                className="w-full sm:w-auto py-2.5 px-6 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#070B14] font-extrabold text-sm text-center shadow-md hover:brightness-110 transition-all"
              >
                ثبت سفارش آنلاین
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

