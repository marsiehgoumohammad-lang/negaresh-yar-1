'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Scale,
  Car,
  UserCheck,
  Receipt,
  Shield,
  GraduationCap,
  Coins,
  Plane,
  Building2,
  Laptop,
  Search,
  ArrowLeft,
  Sparkles,
  Check,
  ShieldAlert,
  Layers,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import {
  onlineCafeCategories,
  popularServicesList,
} from '@/data/services/online-cafe';

const iconMap: Record<string, React.ReactNode> = {
  Scale: <Scale className="w-6 h-6 text-[#E5C158]" />,
  Car: <Car className="w-6 h-6 text-[#E5C158]" />,
  UserCheck: <UserCheck className="w-6 h-6 text-[#E5C158]" />,
  Receipt: <Receipt className="w-6 h-6 text-[#E5C158]" />,
  Shield: <Shield className="w-6 h-6 text-[#E5C158]" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-[#E5C158]" />,
  Coins: <Coins className="w-6 h-6 text-[#E5C158]" />,
  Plane: <Plane className="w-6 h-6 text-[#E5C158]" />,
  Building2: <Building2 className="w-6 h-6 text-[#E5C158]" />,
  Laptop: <Laptop className="w-6 h-6 text-[#E5C158]" />,
};

export function OnlineCafeGrid() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all');

  const filteredCategories = onlineCafeCategories.filter((cat) => {
    const matchesCategory =
      selectedCategoryId === 'all' || cat.id === selectedCategoryId;
    if (!searchTerm.trim()) return matchesCategory;

    const term = searchTerm.toLowerCase();
    const catMatches =
      cat.categoryTitle.toLowerCase().includes(term) ||
      cat.description.toLowerCase().includes(term);
    const serviceMatches = cat.services.some(
      (s) =>
        s.name.toLowerCase().includes(term) ||
        s.description.toLowerCase().includes(term) ||
        s.keywords.some((k) => k.toLowerCase().includes(term))
    );

    return matchesCategory && (catMatches || serviceMatches);
  });

  return (
    <div id="services-grid" className="space-y-16 py-8">
      {/* Disclaimer Banner */}
      <Container>
        <div className="bg-[#0D1424] border border-[#E5C158]/30 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center shrink-0 text-[#E5C158]">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-white mb-0.5">
                اطلاعیه و سلب مسئولیت حقوقی
              </p>
              <p className="text-slate-400">
                نگارش یار ارائه دهنده خدمات آنلاین و انجام امور اینترنتی است و نماینده رسمی سامانه‌های دولتی محسوب نمی‌شود.
              </p>
            </div>
          </div>
          <Link
            href="/request"
            className="shrink-0 px-4 py-2 rounded-xl bg-[#E5C158]/10 hover:bg-[#E5C158]/20 text-[#E5C158] border border-[#E5C158]/30 font-bold transition-colors flex items-center gap-2"
          >
            <span>ثبت سفارش مستقیم</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </Container>

      {/* Popular Services Section */}
      <Container>
        <div className="bg-gradient-to-b from-[#0D1424] to-[#070B15] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-[#E5C158] text-xs font-bold">
                <Sparkles className="w-4 h-4" />
                <span>دسترسی سریع به خدمات پرتقاضا</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                خدمات پرتقاضای کافی نت آنلاین
              </h2>
            </div>
            <Link
              href="/request"
              className="px-5 py-2.5 rounded-xl bg-[#E5C158] text-[#070B15] font-black text-xs hover:bg-[#D4AF37] transition-all flex items-center gap-2 shadow-md shadow-[#E5C158]/10"
            >
              <span>ثبت درخواست آنلاین</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {popularServicesList.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                className="bg-[#070B15] border border-slate-800 hover:border-[#E5C158]/50 rounded-xl p-3 flex flex-col justify-between space-y-2 group transition-all"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-[#E5C158] bg-[#E5C158]/10 px-1.5 py-0.5 rounded inline-block">
                    {idx + 1}
                  </span>
                  <h3 className="text-xs font-bold text-white group-hover:text-[#E5C158] transition-colors leading-snug">
                    {item.name}
                  </h3>
                </div>
                <p className="text-[10px] text-slate-400 line-clamp-1">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </Container>

      {/* Main Categories & Services Section */}
      <Container className="space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5C158]/10 text-[#E5C158] text-xs font-bold">
            <Layers className="w-4 h-4" />
            <span>دسته‌بندی جامع ۱۰ گانه خدمات</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            دسته‌بندی کامل خدمات کافی نت آنلاین
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            امکان جستجو و انتخاب انواع خدمات اینترنتی، سامانه‌های دولتی، انتظامی، آموزشی و اداری
          </p>
        </div>

        {/* Search and Category Filter Bar */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Box */}
            <div className="relative w-full md:w-96">
              <Search className="w-5 h-5 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="جستجوی خدمت یا سامانه (مثلاً ثنا، گذرنامه، مالیات...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pr-11 pl-4 py-3 rounded-xl bg-[#0D1424] border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#E5C158] transition-colors"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full pb-2 md:pb-0 scrollbar-none text-xs">
              <button
                onClick={() => setSelectedCategoryId('all')}
                className={`px-3 py-2 rounded-xl whitespace-nowrap font-bold transition-all ${
                  selectedCategoryId === 'all'
                    ? 'bg-[#E5C158] text-[#070B15]'
                    : 'bg-[#0D1424] text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                همه ۱۰ دسته‌بندی
              </button>
              {onlineCafeCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategoryId(cat.id)}
                  className={`px-3 py-2 rounded-xl whitespace-nowrap font-bold transition-all ${
                    selectedCategoryId === cat.id
                      ? 'bg-[#E5C158] text-[#070B15]'
                      : 'bg-[#0D1424] text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {cat.categoryTitle.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid Render of Categories */}
        <div className="space-y-12">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              id={cat.id}
              className="bg-[#0D1424] border border-slate-800 hover:border-slate-700 rounded-3xl p-6 sm:p-8 space-y-6 transition-colors scroll-mt-24"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#E5C158]/10 border border-[#E5C158]/20 flex items-center justify-center shrink-0">
                    {iconMap[cat.iconName] || <Sparkles className="w-6 h-6 text-[#E5C158]" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-black text-white">
                        {cat.categoryTitle}
                      </h3>
                      <span className="text-[10px] font-bold text-[#E5C158] bg-[#E5C158]/10 px-2 py-0.5 rounded border border-[#E5C158]/30">
                        {cat.badge}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <Link
                  href="/request"
                  className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-[#E5C158]/40 text-slate-300 hover:text-white font-bold text-xs flex items-center gap-2 transition-colors self-start sm:self-center"
                >
                  <span>ثبت سفارش در این بخش</span>
                  <ArrowLeft className="w-3.5 h-3.5 text-[#E5C158]" />
                </Link>
              </div>

              {/* Subservices Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.services.map((service, sIdx) => (
                  <div
                    key={sIdx}
                    className="bg-[#070B15] border border-slate-800/90 hover:border-[#E5C158]/40 rounded-2xl p-5 flex flex-col justify-between space-y-4 group transition-all"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-base font-bold text-white group-hover:text-[#E5C158] transition-colors flex items-center gap-2">
                          <Check className="w-4 h-4 text-[#E5C158] shrink-0" />
                          <span>{service.name}</span>
                        </h4>
                        {service.tag && (
                          <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 shrink-0">
                            {service.tag}
                          </span>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Keywords Chips */}
                    <div className="pt-3 border-t border-slate-800/60 flex flex-wrap gap-1.5">
                      {service.keywords.map((kw, kIdx) => (
                        <span
                          key={kIdx}
                          className="text-[10px] text-slate-400 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-800"
                        >
                          #{kw}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {filteredCategories.length === 0 && (
            <div className="bg-[#0D1424] border border-slate-800 rounded-2xl p-12 text-center space-y-4">
              <p className="text-slate-400 text-sm">
                هیچ خدمتی مطابق با عبارت جستجوی شما یافت نشد.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategoryId('all');
                }}
                className="px-4 py-2 rounded-xl bg-[#E5C158] text-[#070B15] font-bold text-xs"
              >
                پاک کردن فیلترها
              </button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
