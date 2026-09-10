'use client';

import React, { useCallback, useEffect } from 'react';
import { Star, ExternalLink, BookmarkCheck } from 'lucide-react';

interface PreferredSourceCTAProps {
  /**
   * Layout variant:
   * - 'article': A standalone card placed at the end of the article before final CTAs.
   * - 'sample': A compact inline button placed in the sample page header alongside download options.
   */
  variant?: 'article' | 'sample';
  className?: string;
}

const GOOGLE_SWG_SCRIPT_URL = 'https://news.google.com/swg/js/v1/publisher.js';
const GOOGLE_SCRIPT_ID = 'google-preferred-source-script';
const TARGET_CANONICAL_DOMAIN = 'negaresh-yar.ir';
const GOOGLE_PREFERENCES_FALLBACK_URL = `https://www.google.com/preferences/source?q=${TARGET_CANONICAL_DOMAIN}`;

/**
 * Loads the official Google publisher script once on demand.
 * Sets `preferred-sources-control="manual"` to enable Advanced JavaScript / Custom UI control.
 */
function ensureGooglePublisherScriptLoaded() {
  if (typeof window === 'undefined') return;
  if (document.getElementById(GOOGLE_SCRIPT_ID)) return;

  const script = document.createElement('script');
  script.id = GOOGLE_SCRIPT_ID;
  script.src = GOOGLE_SWG_SCRIPT_URL;
  script.async = true;
  script.setAttribute('preferred-sources-control', 'manual');
  document.head.appendChild(script);
}

export function PreferredSourceCTA({
  variant = 'article',
  className = '',
}: PreferredSourceCTAProps) {
  // Load official Google script only on pages rendering this component
  useEffect(() => {
    ensureGooglePublisherScriptLoaded();
  }, []);

  const handleAddPreferredSource = useCallback(() => {
    if (typeof window === 'undefined') return;

    const w = window as unknown as {
      PREFERRED_SOURCE?: {
        ready?: () => Promise<{ addPreferredSource: (options?: { language?: string; theme?: string }) => void }>;
        push?: (...args: unknown[]) => void;
        api?: { addPreferredSource: (options?: { language?: string; theme?: string }) => void };
      };
      preferredSource?: {
        addPreferredSource: (options?: { language?: string; theme?: string }) => void;
      };
    };

    const fallbackToPreferencesTool = () => {
      window.open(GOOGLE_PREFERENCES_FALLBACK_URL, '_blank', 'noopener,noreferrer');
    };

    try {
      // 1. Official Google Preferred Source API - Promise-based ready()
      if (w.PREFERRED_SOURCE && typeof w.PREFERRED_SOURCE.ready === 'function') {
        w.PREFERRED_SOURCE.ready()
          .then((api) => {
            if (api && typeof api.addPreferredSource === 'function') {
              api.addPreferredSource({ language: 'fa', theme: 'light' });
            } else {
              fallbackToPreferencesTool();
            }
          })
          .catch(() => {
            fallbackToPreferencesTool();
          });
        return;
      }

      // 2. Official Google Preferred Source API - Queue push pattern
      if (w.PREFERRED_SOURCE && typeof w.PREFERRED_SOURCE.push === 'function') {
        w.PREFERRED_SOURCE.push((api: { addPreferredSource?: (options?: { language?: string; theme?: string }) => void }) => {
          if (api && typeof api.addPreferredSource === 'function') {
            api.addPreferredSource({ language: 'fa', theme: 'light' });
          } else {
            fallbackToPreferencesTool();
          }
        });
        return;
      }

      // 3. Direct API on global object
      if (w.PREFERRED_SOURCE?.api && typeof w.PREFERRED_SOURCE.api.addPreferredSource === 'function') {
        w.PREFERRED_SOURCE.api.addPreferredSource({ language: 'fa', theme: 'light' });
        return;
      }

      // 4. Global preferredSource fallback
      if (w.preferredSource && typeof w.preferredSource.addPreferredSource === 'function') {
        w.preferredSource.addPreferredSource({ language: 'fa', theme: 'light' });
        return;
      }

      // 5. Official fallback deeplink for adblockers, offline, or environments where script is blocked
      fallbackToPreferencesTool();
    } catch {
      fallbackToPreferencesTool();
    }
  }, []);

  // ----------------------------------------------------
  // VARIANT: SAMPLE (Top of sample page alongside download buttons)
  // ----------------------------------------------------
  if (variant === 'sample') {
    return (
      <button
        id="preferred-source-sample-btn"
        type="button"
        onClick={handleAddPreferredSource}
        className={`inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-950 border border-amber-500/35 hover:border-amber-500/60 text-xs sm:text-sm font-bold transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-1 shrink-0 w-full sm:w-auto min-h-[42px] ${className}`}
        aria-label="افزودن نگارش یار به منابع ترجیحی گوگل"
        title="افزودن نگارش یار به منابع ترجیحی Google"
      >
        <span>اگر مطالب نگارش یار براتون مفیده، اینجا کلیک کنید ⭐</span>
      </button>
    );
  }

  // ----------------------------------------------------
  // VARIANT: ARTICLE (End of article content before main service CTA)
  // ----------------------------------------------------
  return (
    <div
      id="preferred-source-cta-card"
      className={`p-6 md:p-7 rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#070B15] border border-[#E5C158]/35 shadow-lg space-y-4 text-right my-8 ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#E5C158]/15 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158] shrink-0">
            <BookmarkCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-white leading-tight">
              دسترسی سریع‌تر در جستجوهای گوگل
            </div>
            <div className="text-xs text-[#E5C158] font-medium mt-0.5">
              افزودن نگارش یار به منابع ترجیحی Google
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-[11px] text-slate-300 w-fit">
          <Star className="w-3.5 h-3.5 text-[#E5C158] fill-[#E5C158]" />
          <span>منبع معتبر حقوقی و اداری</span>
        </div>
      </div>

      <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
        اگر این راهنما برای شما مفید بوده است، با یک کلیک نگارش یار را به عنوان منبع ترجیحی (Preferred Source) در گوگل ثبت کنید تا در جستجوهای آینده، مشاوره‌ها و نمونه اوراق حقوقی ما با اولویت بالاتری برای شما نمایش داده شود.
      </p>

      <div className="pt-1 flex flex-col sm:flex-row sm:items-center gap-3">
        <button
          id="preferred-source-article-btn"
          type="button"
          onClick={handleAddPreferredSource}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#E5C158] to-[#C59B27] hover:brightness-110 text-[#070B15] font-black text-xs sm:text-sm shadow-md shadow-[#E5C158]/15 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158] min-h-[44px] w-full sm:w-auto"
        >
          <span>اگر مطالب نگارش یار براتون مفیده، اینجا کلیک کنید ⭐</span>
          <ExternalLink className="w-4 h-4 shrink-0 text-[#070B15]/80" />
        </button>

        <span className="text-[11px] text-slate-400">
          افزودن نگارش یار به منابع ترجیحی Google
        </span>
      </div>
    </div>
  );
}
