'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Container } from '@/components/ui/container';
import {
  Search,
  BookOpen,
  Sparkles,
  Clock,
  ArrowLeft,
  FileText,
  ShieldAlert,
  Scale,
  Gavel,
  KeyRound,
  Building2,
  Laptop,
  Receipt,
  HelpCircle,
  ChevronDown,
  SlidersHorizontal,
} from 'lucide-react';
import { KNOWLEDGE_CATEGORIES, ALL_KNOWLEDGE_ARTICLES } from '@/data/knowledge';
import { Article } from '@/lib/stores/types';

interface KnowledgeHubClientProps {
  initialArticles?: Article[];
}

export function KnowledgeHubClient({ initialArticles }: KnowledgeHubClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Combine store articles with fallback static articles metadata if available
  const displayArticles = (initialArticles && initialArticles.length > 0)
    ? initialArticles.map((art) => {
        const staticMatch = ALL_KNOWLEDGE_ARTICLES.find((s) => s.slug === art.slug);
        const readTimeMinutes = art.wordCount ? Math.max(1, Math.ceil(art.wordCount / 200)) : 5;

        return {
          slug: art.slug,
          title: art.title || staticMatch?.h1Title || art.slug,
          excerpt: art.excerpt || art.metaDescription || staticMatch?.heroSubtitle || '',
          category: art.category || art.primaryKeyword || staticMatch?.category || 'حقوقی',
          readTime: staticMatch?.readTime || `${readTimeMinutes} دقیقه`,
          lastUpdated: art.updatedAt ? new Date(art.updatedAt).toLocaleDateString('fa-IR') : (staticMatch?.lastUpdated || '۱۴۰۳/۱۱/۰۱'),
          raw: art,
        };
      })
    : ALL_KNOWLEDGE_ARTICLES.map((art) => ({
        slug: art.slug,
        title: art.h1Title,
        excerpt: art.heroSubtitle,
        category: art.category,
        readTime: art.readTime,
        lastUpdated: art.lastUpdated,
        raw: null,
      }));

  // Filter articles based on search term and category
  const filteredArticles = displayArticles.filter((art) => {
    const matchesSearch =
      art.title.includes(searchTerm) ||
      art.excerpt.includes(searchTerm) ||
      art.category.includes(searchTerm);

    const matchesCategory =
      selectedCategory === 'all' || art.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const categoryIconMap: Record<string, React.ReactNode> = {
    FileText: <FileText className="w-5 h-5" />,
    ShieldAlert: <ShieldAlert className="w-5 h-5" />,
    Scale: <Scale className="w-5 h-5" />,
    Gavel: <Gavel className="w-5 h-5" />,
    KeyRound: <KeyRound className="w-5 h-5" />,
    Building2: <Building2 className="w-5 h-5" />,
    Laptop: <Laptop className="w-5 h-5" />,
    Receipt: <Receipt className="w-5 h-5" />,
  };

  const hubFaqs = [
    {
      q: 'پایگاه دانش حقوقی نگارش یار چیست؟',
      a: 'پایگاه دانش نگارش یار یک مرجع کامل آموزش‌های حقوقی، قضایی و اداری به زبان ساده است که توسط کارشناسان ارشد حقوقی تدوین شده است.',
    },
    {
      q: 'آیا مطالب پایگاه دانش مطابق با جدیدترین قوانین است؟',
      a: 'بله، تمامی مقالات منطبق بر آخرین قوانین موضوعه کشور، آیین‌نامه‌ها و آرای وحدت رویه دیوان عالی کشور بروزرسانی می‌شوند.',
    },
    {
      q: 'چگونه می‌توانیم پس از مطالعه مقاله، سفارش تنظیم سند ثبت کنیم؟',
      a: 'در انتهای هر مقاله و در منوی اصلی سایت، دکمه ثبت سفارش وجود دارد که می‌توانید موضوع پرونده خود را ارسال کنید.',
    },
    {
      q: 'آیا استفاده از مطالب پایگاه دانش رایگان است؟',
      a: 'بله، مطالعه تمامی مقالات، راهنماها و پرسش و پاسخ‌های پایگاه دانش نگارش یار کاملاً رایگان است.',
    },
  ];

  return (
    <div className="space-y-12 sm:space-y-16 py-6 sm:py-10 selection:bg-[#E5C158] selection:text-[#070B15]">
      {/* ---------------------------------------------------- */}
      {/* 1. HERO HEADER WITH SEARCH BAR */}
      {/* ---------------------------------------------------- */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-20 border-b border-slate-800/80 bg-gradient-to-b from-[#0C1222] via-[#070B15] to-[#070B15] rounded-3xl">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(229,193,88,0.18)_0%,transparent_70%)] pointer-events-none blur-3xl" />

        <Container className="relative z-10 text-center max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs md:text-sm font-semibold mb-6 shadow-lg shadow-[#E5C158]/5"
          >
            <Sparkles className="w-4 h-4 text-[#E5C158]" />
            <span>مرجع جامع آموزش‌های حقوقی و اداری</span>
          </motion.div>

          {/* H1 Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight md:leading-tight tracking-tight mb-6"
          >
            پایگاه دانش حقوقی و اداری نگارش یار
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose font-normal mb-8 max-w-2xl mx-auto"
          >
            راهنماهای تخصصی، تحلیل دادنامه‌ها، فرق اوراق قضایی و اصول نامه‌نگاری اداری به زبان ساده همراه با مستندات قانونی و مواد اجرایی.
          </motion.p>

          {/* Search Bar Input */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative max-w-2xl mx-auto"
          >
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-slate-400 absolute right-4 pointer-events-none" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="جستجو در مقالات حقوقی (مثلا: دادخواست، ثنا، اعسار، لایحه)..."
                className="w-full pl-4 pr-12 py-4 rounded-2xl bg-slate-900/90 border-2 border-slate-700 focus:border-[#E5C158] text-white text-sm md:text-base outline-none transition-all placeholder:text-slate-500 shadow-2xl"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute left-4 text-xs bg-slate-800 text-slate-400 px-2 py-1 rounded-md hover:text-white"
                >
                  پاکسازی
                </button>
              )}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. CATEGORY FILTER PILLS */}
      {/* ---------------------------------------------------- */}
      <Container className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            <SlidersHorizontal className="w-5 h-5 text-[#E5C158]" />
            <span>دسته‌بندی‌های موضوعی</span>
          </div>
          <span className="text-xs text-slate-400">
            نمایش {filteredArticles.length} مقاله تخصصی
          </span>
        </div>

        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold whitespace-nowrap transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#E5C158] text-[#070B15] shadow-lg shadow-[#E5C158]/20'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            همه موضوعات ({ALL_KNOWLEDGE_ARTICLES.length})
          </button>

          {KNOWLEDGE_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.name;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#E5C158] text-[#070B15] shadow-lg shadow-[#E5C158]/20'
                    : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </Container>

      {/* ---------------------------------------------------- */}
      {/* 3. ARTICLES GRID */}
      {/* ---------------------------------------------------- */}
      <Container className="space-y-8">
        {filteredArticles.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4">
            <BookOpen className="w-12 h-12 text-slate-600 mx-auto" />
            <h3 className="text-lg font-bold text-white">مقاله‌ای با این عنوان یافت نشد</h3>
            <p className="text-xs text-slate-400">
              عبارت جستجو را تغییر دهید یا از دسته‌بندی‌های بالا گزینه دیگری را انتخاب کنید.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 rounded-xl bg-[#E5C158] text-[#070B15] font-bold text-xs inline-block"
            >
              نمایش همه مقالات
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="group flex flex-col justify-between p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-[#E5C158]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#E5C158]/5"
              >
                <div className="space-y-4">
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="px-3 py-1 rounded-full bg-[#E5C158]/10 text-[#E5C158] font-semibold">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-bold text-white group-hover:text-[#E5C158] transition-colors leading-snug">
                    <Link href={`/knowledge/${article.slug}`}>{article.title}</Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                {/* Footer Link */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400">بروزرسانی: {article.lastUpdated}</span>
                  <Link
                    href={`/knowledge/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E5C158] group-hover:translate-x-1 transition-transform"
                  >
                    <span>مطالعه مقاله</span>
                    <ArrowLeft className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </Container>

      {/* ---------------------------------------------------- */}
      {/* 4. CATEGORY BROWSING GRID */}
      {/* ---------------------------------------------------- */}
      <Container className="space-y-6 pt-6">
        <div className="border-b border-slate-800 pb-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#E5C158]" />
            مرور بر اساس دسته‌بندی‌های ۸ گانه حقوقی
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {KNOWLEDGE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.name)}
              className="text-right p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-[#E5C158]/40 hover:bg-slate-900/80 transition-all group space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-[#E5C158]/10 text-[#E5C158]">
                  {categoryIconMap[cat.iconName] || <FileText className="w-5 h-5" />}
                </div>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 font-medium">
                  {cat.articleCount} مقاله
                </span>
              </div>
              <h3 className="font-bold text-sm text-white group-hover:text-[#E5C158] transition-colors">
                {cat.name}
              </h3>
              <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                {cat.description}
              </p>
            </button>
          ))}
        </div>
      </Container>

      {/* ---------------------------------------------------- */}
      {/* 5. KNOWLEDGE HUB FAQ */}
      {/* ---------------------------------------------------- */}
      <Container className="space-y-6 pt-6">
        <div className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="p-2 rounded-lg bg-[#E5C158]/10 text-[#E5C158]">
              <HelpCircle className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-white">سوالات متداول کاربران درباره پایگاه دانش</h2>
          </div>

          <div className="space-y-3">
            {hubFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-800 rounded-xl overflow-hidden bg-[#070B15]/60 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-right p-4 font-bold text-sm md:text-base text-white flex items-center justify-between gap-4 hover:text-[#E5C158] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#E5C158] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-4 pb-4 pt-1 text-xs md:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </Container>

      {/* ---------------------------------------------------- */}
      {/* 6. GOLDEN CTA BANNER */}
      {/* ---------------------------------------------------- */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#121A2E] via-[#0C1222] to-[#121A2E] border-2 border-[#E5C158]/50 p-8 md:p-12 text-center shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#E5C158]/10 rounded-full blur-3xl pointer-events-none" />
        <Container className="relative z-10 max-w-3xl space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold">
            <Sparkles className="w-4 h-4" />
            <span>سامانه حقوقی نگارش یار</span>
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
            نیاز به تنظیم اختصاصی دادخواست، لایحه یا نامه اداری دارید؟
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            بدون نیاز به صرف هزینه‌های سنگین وکالت، سفارش نگارش تخصصی سند قضایی یا اداری خود را ثبت نمایید.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/request"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#E5C158] to-[#C59B27] text-[#070B15] font-black text-sm md:text-base shadow-xl shadow-[#E5C158]/20 hover:brightness-110 transition-all"
            >
              <span>ثبت سفارش آنلاین</span>
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <Link
              href="/samples"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 font-bold text-sm md:text-base transition-colors"
            >
              <span>مشاهده بانک نمونه اسناد</span>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
