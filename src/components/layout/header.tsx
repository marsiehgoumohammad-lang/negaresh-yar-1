'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Container } from '../ui/container';

const menuLinks = [
  {
    number: '۰۱',
    title: 'صفحه اصلی',
    href: '/',
    icon: (
      <svg className="w-5 h-5 text-[#E5C158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 00-1 1m-6 0h6" />
      </svg>
    ),
    badge: null,
  },
  {
    number: '۰۲',
    title: 'تفسیر هوشمند اوراق قضایی',
    href: '/ai-interpreter',
    icon: (
      <svg className="w-5 h-5 text-[#E5C158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    badge: 'هوش مصنوعی AI',
  },
  {
    number: '۰۳',
    title: 'خدمات نگارش و عریضه‌نویسی',
    href: '/services',
    icon: (
      <svg className="w-5 h-5 text-[#E5C158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    badge: null,
  },
  {
    number: '۰۴',
    title: 'معرفی وکیل منصف',
    href: '/lawyer-referral',
    icon: (
      <svg className="w-5 h-5 text-[#E5C158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    badge: 'سراسر ایران',
  },
  {
    number: '۰۵',
    title: 'بانک نمونه اسناد',
    href: '/samples',
    icon: (
      <svg className="w-5 h-5 text-[#E5C158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    badge: null,
  },
  {
    number: '۰۶',
    title: 'مزایای نگارش یار',
    href: '/#why-us',
    icon: (
      <svg className="w-5 h-5 text-[#E5C158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    badge: null,
  },
  {
    number: '۰۷',
    title: 'مقالات و راهنمای حقوقی',
    href: '/#articles',
    icon: (
      <svg className="w-5 h-5 text-[#E5C158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    badge: null,
  },
  {
    number: '۰۸',
    title: 'تماس با ما',
    href: '/contact',
    icon: (
      <svg className="w-5 h-5 text-[#E5C158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    badge: null,
  },
  {
    number: '۰۹',
    title: 'ثبت درخواست خدمات',
    href: '/request',
    icon: (
      <svg className="w-5 h-5 text-[#E5C158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    badge: 'ارتباط ۲۴/۷',
  },
];

const messengers = [
  { name: 'ایتا', code: 'eitaa', label: 'ارسال پیام در ایتا', icon: '/icons/messengers/eitaa.svg' },
  { name: 'روبیکا', code: 'rubika', label: 'ارسال در روبیکا', icon: '/icons/messengers/rubika.svg' },
  { name: 'تلگرام', code: 'telegram', label: 'کانال تلگرام', icon: '/icons/messengers/telegram.svg' },
  { name: 'واتساپ', code: 'whatsapp', label: 'پشتیبانی آنلاین', icon: '/icons/messengers/whatsapp.svg' },
  { name: 'بله', code: 'bale', label: 'پیام‌رسان بله', icon: '/icons/messengers/bale.svg' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Body scroll locking and Esc key handling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleCloseMenu = () => {
    setMobileMenuOpen(false);
  };

  const touchStartX = React.useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current !== null) {
      const deltaX = e.changedTouches[0].clientX - touchStartX.current;
      // Swiping from right to left (deltaX < -30) closes left drawer
      if (deltaX < -30) {
        setMobileMenuOpen(false);
      }
    }
    touchStartX.current = null;
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#070B15]/90 backdrop-blur-md border-b border-slate-800/80 text-white transition-all">
      <Container>
        <div className="flex h-16 sm:h-20 items-center justify-between">
          
          {/* Logo Brand on Right (RTL context) */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.jpg"
              alt="لوگوی رسمی نگارش یار"
              width={40}
              height={40}
              referrerPolicy="no-referrer"
              className="w-10 h-10 rounded-xl object-contain bg-white p-0.5 border border-[#E5C158]/50 shadow-[0_0_15px_rgba(229,193,88,0.25)] shrink-0 group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="font-black text-lg sm:text-xl text-white group-hover:text-[#E5C158] transition-colors leading-tight tracking-tight">
                نگارش یار
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium">
                سامانه هوشمند عریضه‌نویسی و تفسیر قضایی
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
            <Link href="/services" className="text-sm font-bold text-slate-300 hover:text-[#E5C158] transition-colors">
              خدمات نگارش
            </Link>
            <Link href="/lawyer-referral" className="text-sm font-bold text-slate-300 hover:text-[#E5C158] transition-colors">
              وکیل منصف
            </Link>
            <Link href="/samples" className="text-sm font-bold text-slate-300 hover:text-[#E5C158] transition-colors">
              نمونه اسناد
            </Link>
            <Link href="/knowledge" className="text-sm font-bold text-slate-300 hover:text-[#E5C158] transition-colors">
              پایگاه دانش
            </Link>
            <Link href="/contact" className="text-sm font-bold text-slate-300 hover:text-[#E5C158] transition-colors">
              تماس با ما
            </Link>
            <Link href="/ai-interpreter" className="text-sm font-bold text-slate-300 hover:text-[#E5C158] transition-colors flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#E5C158] animate-pulse" />
              <span>تفسیر قضایی با AI</span>
            </Link>
            <Link href="/request" className="text-sm font-bold text-slate-300 hover:text-[#E5C158] transition-colors">
              ثبت درخواست
            </Link>
          </nav>

          {/* Desktop CTA + Mobile Animated Hamburger Button */}
          <div className="flex items-center gap-3">
            <Link
              href="/request"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#070B15] font-black text-xs shadow-[0_0_15px_rgba(229,193,88,0.25)] hover:brightness-110 transition-all active:scale-95"
            >
              <span>ثبت درخواست</span>
              <span>←</span>
            </Link>

            {/* Premium Animated Hamburger Icon Button for Mobile / Tablet */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative z-50 w-11 h-11 rounded-xl bg-[#0D1424] border border-slate-700/80 hover:border-[#E5C158]/60 text-white flex items-center justify-center focus:outline-none transition-all shadow-md group"
              aria-label="منوی اصلی"
              aria-expanded={mobileMenuOpen}
            >
              <div className="w-5 h-4 flex flex-col justify-between items-center relative">
                <motion.span
                  animate={mobileMenuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="w-5 h-[2px] bg-[#E5C158] rounded-full block origin-center"
                />
                <motion.span
                  animate={mobileMenuOpen ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="w-3.5 h-[2px] bg-slate-200 rounded-full block self-end group-hover:w-5 transition-all"
                />
                <motion.span
                  animate={mobileMenuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="w-5 h-[2px] bg-[#E5C158] rounded-full block origin-center"
                />
              </div>
            </button>
          </div>

        </div>
      </Container>

      {/* LUXURY INTERNATIONAL MOTION GRAPHICS MOBILE MENU OVERLAY - FIXED TO LEFT EDGE */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            
            {/* Backdrop Blur Fade In - Touch/Click Backdrop Closes Menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={handleCloseMenu}
              className="fixed inset-0 bg-[#070B15]/80 backdrop-blur-xl cursor-pointer"
            />

            {/* Sliding Curved Drawer Panel - Fixed Physically to Left Edge */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 240 }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              dir="rtl"
              className="fixed top-0 left-0 bottom-0 z-10 w-[88%] max-w-[380px] h-[100dvh] bg-[#070B15] border-r border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.9)] flex flex-col justify-between overflow-y-auto"
            >
              {/* Radial Lighting Accent inside Menu */}
              <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-[radial-gradient(circle_at_center,rgba(229,193,88,0.12)_0%,transparent_70%)] pointer-events-none" />
              <div className="absolute bottom-10 right-0 w-[200px] h-[200px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08)_0%,transparent_70%)] pointer-events-none" />

              <div className="p-6 relative z-10 flex flex-col min-h-full justify-between">
                
                <div>
                  {/* Top Header inside Menu */}
                  <div className="flex items-center justify-between pb-5 border-b border-slate-800/80 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#E5C158] text-[#070B15] font-black text-xl flex items-center justify-center shadow-md">
                        ن
                      </div>
                      <div className="flex flex-col">
                        <span className="font-black text-base text-white">نگارش یار</span>
                        <span className="text-[10px] text-[#E5C158] font-bold">سامانه عریضه‌نویسی & AI</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleCloseMenu}
                      className="w-9 h-9 rounded-xl bg-[#0D1424] border border-slate-700/80 hover:border-[#E5C158]/50 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                      aria-label="بستن منو"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Highlighted AI Interpreter Action Box inside Menu */}
                  <div className="mb-6">
                    <Link
                      href="/ai-interpreter"
                      onClick={handleCloseMenu}
                      className="block p-4 rounded-2xl bg-gradient-to-r from-[#0D1424] via-[#121A2D] to-[#0D1424] border border-[#E5C158]/40 shadow-[0_0_20px_rgba(229,193,88,0.12)] group hover:border-[#E5C158] transition-all"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#E5C158]/15 text-[#E5C158] font-bold border border-[#E5C158]/30 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158] animate-pulse" />
                          <span>تفسیر قضایی با AI</span>
                        </span>
                        <span className="text-xs text-[#E5C158] group-hover:translate-x-[-3px] transition-transform">←</span>
                      </div>
                      <h4 className="text-xs font-black text-white group-hover:text-[#E5C158] transition-colors mb-1">
                        تفسیر فوری اوراق و رای دادگاه با هوش مصنوعی
                      </h4>
                      <p className="text-[11px] text-slate-400">
                        آپلود عکس یا PDF دادنامه جهت استخراج خلاصه و ریسک
                      </p>
                    </Link>
                  </div>

                  {/* Motion Staggered Navigation Items */}
                  <nav className="space-y-1.5">
                    {menuLinks.map((item, idx) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 + 0.1 }}
                      >
                        <Link
                          href={item.href}
                          onClick={handleCloseMenu}
                          className="flex items-center justify-between p-3 rounded-xl bg-[#0D1424]/60 hover:bg-[#121A2D] border border-slate-800/80 hover:border-[#E5C158]/40 text-slate-200 hover:text-white transition-all group"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-[11px] font-mono text-[#E5C158]/70 font-bold w-5">
                              {item.number}
                            </span>
                            <div className="w-8 h-8 rounded-lg bg-[#121A2D] flex items-center justify-center shrink-0 border border-slate-700/50 group-hover:border-[#E5C158]/40 group-hover:bg-[#E5C158]/10 transition-colors">
                              {item.icon}
                            </div>
                            <span className="text-xs sm:text-sm font-bold group-hover:text-[#E5C158] transition-colors">
                              {item.title}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            {item.badge && (
                              <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#E5C158]/10 text-[#E5C158] font-bold border border-[#E5C158]/20">
                                {item.badge}
                              </span>
                            )}
                            <span className="text-xs text-slate-500 group-hover:text-[#E5C158] group-hover:translate-x-[-2px] transition-all">
                              ←
                            </span>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  {/* Divider */}
                  <div className="my-5 border-t border-slate-800/80" />

                  {/* Messengers Minimal Grid */}
                  <div>
                    <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3 px-1">
                      ارتباط سریع در پیام‌رسان‌ها:
                    </span>
                    <div className="grid grid-cols-5 gap-2">
                      {messengers.map((m) => (
                        <Link
                          key={m.code}
                          href="/request"
                          onClick={handleCloseMenu}
                          className="flex flex-col items-center justify-center p-2 rounded-xl bg-[#0D1424] hover:bg-[#121A2D] border border-slate-800 hover:border-[#E5C158]/40 transition-all text-center group"
                          title={m.label}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={m.icon}
                            alt={m.name}
                            className="w-5 h-5 object-contain group-hover:scale-110 transition-transform mb-1"
                          />
                          <span className="text-[10px] font-bold text-slate-300 group-hover:text-[#E5C158]">
                            {m.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Bottom Action CTA & Version info */}
                <div className="pt-6 border-t border-slate-800/80 mt-6 space-y-3">
                  <Link
                    href="/request"
                    onClick={handleCloseMenu}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] hover:brightness-110 text-[#070B14] font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(229,193,88,0.3)] transition-all"
                  >
                    <span>ثبت آنلاین درخواست عریضه / لایحه</span>
                    <span>←</span>
                  </Link>

                  <div className="flex items-center justify-between text-[10px] text-slate-500 px-1 pt-1">
                    <span>پشتیبانی: ۰۹۹۱۵۱۴۷۷۸۹</span>
                    <span>نسخه V1.2 نهایی</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}

