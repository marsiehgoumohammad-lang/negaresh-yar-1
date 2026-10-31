import { Article } from '@/lib/stores/types';
import { ALL_KNOWLEDGE_ARTICLES } from '@/data/knowledge';
import { KnowledgeArticleData, KnowledgeSection } from '@/data/knowledge/types';

const JALAALI_BREAKS = [
  -61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178,
];

function isLeapJalaaliYearInternal(jy: number): boolean {
  const bl = JALAALI_BREAKS.length;
  let jp = JALAALI_BREAKS[0];
  let jump = 0;
  let n = 0;

  if (jy < jp || jy >= JALAALI_BREAKS[bl - 1]) return false;

  for (let i = 1; i < bl; i += 1) {
    const jmVal = JALAALI_BREAKS[i];
    jump = jmVal - jp;
    if (jy < jmVal) break;
    jp = jmVal;
  }
  n = jy - jp;

  if (jump - n < 6) n = n - jump + Math.floor((jump + 4) / 33) * 33;
  let leap = (((n + 1) % 33) - 1) % 4;
  if (leap === -1) leap = 4;

  return leap === 0;
}

function isValidJalaaliDateInternal(jy: number, jm: number, jd: number): boolean {
  if (jy < 1200 || jy > 1500) return false;
  if (jm < 1 || jm > 12) return false;
  if (jd < 1) return false;
  if (jm <= 6 && jd > 31) return false;
  if (jm >= 7 && jm <= 11 && jd > 30) return false;
  if (jm === 12) {
    const isLeap = isLeapJalaaliYearInternal(jy);
    if (isLeap && jd > 30) return false;
    if (!isLeap && jd > 29) return false;
  }
  return true;
}

function isLeapGregorianYearInternal(gy: number): boolean {
  return (gy % 4 === 0 && gy % 100 !== 0) || gy % 400 === 0;
}

function isValidGregorianDateInternal(gy: number, gm: number, gd: number): boolean {
  if (gy < 1000 || gy > 9999) return false;
  if (gm < 1 || gm > 12) return false;
  if (gd < 1) return false;
  const daysInMonths = [0, 31, isLeapGregorianYearInternal(gy) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return gd <= daysInMonths[gm];
}

function jalaliToGregorianInternal(jy: number, jm: number, jd: number): string {
  const y = jy + 1595;
  let days = -355668 + 365 * y + Math.floor(y / 33) * 8 + Math.floor(((y % 33) + 3) / 4) + jd;
  if (jm < 7) {
    days += (jm - 1) * 31;
  } else {
    days += (jm - 7) * 30 + 186;
  }
  let gy = 400 * Math.floor(days / 146097);
  days %= 146097;
  if (days > 36524) {
    days -= 1;
    gy += 100 * Math.floor(days / 36524);
    days %= 36524;
    if (days >= 365) days += 1;
  }
  gy += 4 * Math.floor(days / 1461);
  days %= 1461;
  if (days > 365) {
    days -= 1;
    gy += Math.floor(days / 365);
    days %= 365;
  }
  let gd = days + 1;
  const isLeap = isLeapGregorianYearInternal(gy);
  const salA = isLeap
    ? [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    : [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let gm = 0;
  while (gm < 12 && gd > salA[gm + 1]) {
    gm += 1;
    gd -= salA[gm];
  }
  gm += 1;
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${gy}-${pad(gm)}-${pad(gd)}`;
}

function resolveIsoDate(val?: string | null): string | undefined {
  if (!val || typeof val !== 'string') return undefined;
  const trimmed = val.trim();
  if (!trimmed) return undefined;

  const normalized = trimmed
    .replace(/[۰-۹]/g, (w) => String.fromCharCode(w.charCodeAt(0) - 1728))
    .replace(/[٠-٩]/g, (w) => String.fromCharCode(w.charCodeAt(0) - 1584));

  const gregMatch = normalized.match(
    /^(\d{4})([-/])(\d{1,2})\2(\d{1,2})(?:[T\s](\d{2}):(\d{2})(?::(\d{2})(?:\.\d+)?)?(?:Z|([+-])(\d{2}):?(\d{2}))?)?$/
  );
  if (gregMatch) {
    const y = parseInt(gregMatch[1], 10);
    const m = parseInt(gregMatch[3], 10);
    const d = parseInt(gregMatch[4], 10);
    const hourStr = gregMatch[5];
    const minStr = gregMatch[6];
    const secStr = gregMatch[7];
    const tzHStr = gregMatch[9];
    const tzMStr = gregMatch[10];

    if (hourStr !== undefined && minStr !== undefined) {
      const hh = parseInt(hourStr, 10);
      const mm = parseInt(minStr, 10);
      if (hh < 0 || hh > 23 || mm < 0 || mm > 59) return undefined;
      if (secStr !== undefined) {
        const ss = parseInt(secStr, 10);
        if (ss < 0 || ss > 59) return undefined;
      }
    }

    if (tzHStr !== undefined && tzMStr !== undefined) {
      const th = parseInt(tzHStr, 10);
      const tm = parseInt(tzMStr, 10);
      if (th < 0 || th > 14 || tm < 0 || tm > 59) return undefined;
      if (th === 14 && tm > 0) return undefined;
    }

    if (y >= 1800 && y <= 2200) {
      if (isValidGregorianDateInternal(y, m, d)) {
        const pad = (n: number) => String(n).padStart(2, '0');
        return `${y}-${pad(m)}-${pad(d)}`;
      }
      return undefined;
    }
  }

  const shamsiMatch = normalized.match(/^(\d{4})([-/])(\d{1,2})\2(\d{1,2})$/);
  if (shamsiMatch) {
    const jy = parseInt(shamsiMatch[1], 10);
    const jm = parseInt(shamsiMatch[3], 10);
    const jd = parseInt(shamsiMatch[4], 10);

    if (jy >= 1300 && jy <= 1500 && isValidJalaaliDateInternal(jy, jm, jd)) {
      return jalaliToGregorianInternal(jy, jm, jd);
    }
  }

  return undefined;
}

export function parseValidModificationTimestamp(val?: string | null): number | null {
  if (!val || typeof val !== 'string') return null;
  const trimmed = val.trim();
  if (!trimmed) return null;

  const normalized = trimmed
    .replace(/[۰-۹]/g, (w) => String.fromCharCode(w.charCodeAt(0) - 1728))
    .replace(/[٠-٩]/g, (w) => String.fromCharCode(w.charCodeAt(0) - 1584));

  // Strictly validate calendar date, leap year, days-in-month, time, and timezone offset
  const isoDate = resolveIsoDate(normalized);
  if (!isoDate) return null;

  const timeMatch = normalized.match(
    /^(\d{4})([-/])(\d{1,2})\2(\d{1,2})[T\s](\d{2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?(Z|([+-])(\d{2}):?(\d{2}))?$/
  );
  if (timeMatch) {
    const hh = timeMatch[5];
    const mm = timeMatch[6];
    const ss = timeMatch[7] || '00';
    const ms = (timeMatch[8] || '000').slice(0, 3).padEnd(3, '0');
    const tz = timeMatch[9]
      ? timeMatch[9] === 'Z'
        ? 'Z'
        : `${timeMatch[10]}${timeMatch[11]}:${timeMatch[12]}`
      : 'Z';
    const ts = Date.parse(`${isoDate}T${hh}:${mm}:${ss}.${ms}${tz}`);
    return Number.isFinite(ts) ? ts : null;
  }

  const ts = Date.parse(`${isoDate}T00:00:00.000Z`);
  return Number.isFinite(ts) ? ts : null;
}

export function isStaticArticleNewer(
  staticDateModified?: string | null,
  dbUpdatedAt?: string | null
): boolean {
  const staticTs = parseValidModificationTimestamp(staticDateModified);
  if (staticTs === null) return false;
  const dbTs = parseValidModificationTimestamp(dbUpdatedAt);
  if (dbTs === null) return false;
  return staticTs > dbTs;
}

function splitBodyIntoParagraphs(bodyText: string): string[] {
  if (!bodyText || !bodyText.trim()) return [];

  // Convert markdown links [text](url) to <a> tags if any
  const processedText = bodyText.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // Check if text has <p> tags
  const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/gi;
  const pMatches = Array.from(processedText.matchAll(pRegex));

  if (pMatches.length > 0) {
    const list: string[] = [];
    pMatches.forEach((m) => {
      const inner = m[1].trim();
      if (inner) {
        list.push(inner);
      }
    });

    // Also capture any standalone <ul>, <ol>, <blockquote>, <table>, <div> blocks
    const blockRegex = /<(?:ul|ol|blockquote|table|div)[^>]*>[\s\S]*?<\/(?:ul|ol|blockquote|table|div)>/gi;
    const blockMatches = Array.from(processedText.matchAll(blockRegex));
    blockMatches.forEach((bm) => {
      const blockHtml = bm[0].trim();
      if (blockHtml && !list.some((item) => item.includes(blockHtml))) {
        list.push(blockHtml);
      }
    });

    if (list.length > 0) return list;
  }

  // Fallback: split by double newlines or single newlines without stripping any HTML tags
  return processedText
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

export function adaptArticleToKnowledgeData(article: Article): KnowledgeArticleData {
  const staticMatch = ALL_KNOWLEDGE_ARTICLES.find((s) => s.slug === article.slug);
  const isStaticNewer = isStaticArticleNewer(staticMatch?.dateModified, article.updatedAt);

  // Parse sections from content string
  const rawContent = article.content || '';
  const parsedSections: KnowledgeSection[] = [];

  // Match headings: <h2>...</h2>, <h3>...</h3>, ## ..., ### ...
  const headingRegex = /(?:^|\n)(?:<h([2-4])[^>]*>([\s\S]*?)<\/h\1>|#{2,4}\s+(.*?)(?:\n|$))/gi;
  const matches: { index: number; length: number; title: string }[] = [];
  let match: RegExpExecArray | null;

  while ((match = headingRegex.exec(rawContent)) !== null) {
    const rawTitle = match[2] || match[3] || '';
    const cleanTitle = rawTitle.replace(/<[^>]+>/g, '').trim();
    if (cleanTitle) {
      matches.push({
        index: match.index,
        length: match[0].length,
        title: cleanTitle,
      });
    }
  }

  if (matches.length > 0) {
    if (matches[0].index > 0) {
      const introBody = rawContent.slice(0, matches[0].index).trim();
      const introParagraphs = splitBodyIntoParagraphs(introBody);
      if (introParagraphs.length > 0) {
        parsedSections.push({
          id: 'sec-intro',
          title: 'مقدمه و کلیات',
          paragraphs: introParagraphs,
        });
      }
    }

    matches.forEach((m, index) => {
      const nextMatchIndex = matches[index + 1] ? matches[index + 1].index : rawContent.length;
      const bodyText = rawContent.slice(m.index + m.length, nextMatchIndex).trim();
      const paragraphs = splitBodyIntoParagraphs(bodyText);

      parsedSections.push({
        id: `sec-${index + 1}`,
        title: m.title,
        paragraphs: paragraphs.length > 0 ? paragraphs : [bodyText || 'توضیحات این بخش به زودی تکمیل خواهد شد.'],
      });
    });
  }

  const validStaticDatePublished = staticMatch ? resolveIsoDate(staticMatch.datePublished) : undefined;
  const validStaticDateModified = staticMatch ? resolveIsoDate(staticMatch.dateModified) : undefined;
  const validDbUpdatedAt = resolveIsoDate(article.updatedAt);
  const validDbPublishedAt = resolveIsoDate(article.publishedAt);

  // If staticMatch exists and either no custom parsed sections were found or static is demonstrably newer
  if (staticMatch && (parsedSections.length === 0 || isStaticNewer)) {
    const effectiveDateModified = isStaticNewer
      ? validStaticDateModified
      : validStaticDateModified && validDbUpdatedAt
      ? validDbUpdatedAt
      : validStaticDateModified;

    return {
      ...staticMatch,
      h1Title:
        (isStaticNewer ? staticMatch.h1Title : (article.title || '').trim()) ||
        staticMatch.h1Title ||
        article.title,
      heroSubtitle:
        (isStaticNewer ? staticMatch.heroSubtitle : (article.excerpt || '').trim()) ||
        staticMatch.heroSubtitle ||
        article.excerpt ||
        '',
      category:
        (isStaticNewer ? staticMatch.category : (article.category || '').trim()) ||
        staticMatch.category ||
        article.category ||
        '',
      lastUpdated: staticMatch.lastUpdated,
      datePublished: validStaticDatePublished,
      dateModified: effectiveDateModified,
    };
  }

  // Fallback if no headings found
  if (parsedSections.length === 0) {
    const paragraphs = splitBodyIntoParagraphs(rawContent);

    if (paragraphs.length > 0) {
      parsedSections.push({
        id: 'sec-1',
        title: 'شرح و راهنمای تفصیلی مقاله',
        paragraphs,
      });
    } else {
      parsedSections.push({
        id: 'sec-1',
        title: 'شرح مقاله',
        paragraphs: [rawContent || article.excerpt || 'محتوای مقاله به زودی تکمیل خواهد شد.'],
      });
    }
  }

  const tableOfContents = parsedSections.map((sec) => ({
    id: sec.id,
    title: sec.title,
  }));

  const updateYear = validDbUpdatedAt
    ? new Date(validDbUpdatedAt).toLocaleDateString('fa-IR', { year: 'numeric' })
    : '';

  const readTimeMinutes = article.wordCount
    ? Math.max(1, Math.ceil(article.wordCount / 200))
    : Math.max(1, Math.ceil(rawContent.split(/\s+/).length / 200));

  // Extract FAQs from schema if available
  let faqs: { q: string; a: string }[] = [];
  if (article.schema) {
    try {
      const parsedSchema = typeof article.schema === 'string' ? JSON.parse(article.schema) : article.schema;
      if (parsedSchema && parsedSchema['@type'] === 'FAQPage' && Array.isArray(parsedSchema.mainEntity)) {
        faqs = parsedSchema.mainEntity.map((item: { name?: string; question?: string; acceptedAnswer?: { text?: string }; answer?: string }) => ({
          q: item.name || item.question || '',
          a: item.acceptedAnswer?.text || item.answer || '',
        })).filter((f: { q: string; a: string }) => f.q && f.a);
      }
    } catch {
      // Ignore parse error
    }
  }

  if (faqs.length === 0) {
    faqs = [
      {
        q: `موضوع اصلی مقاله ${article.title} چیست؟`,
        a: article.excerpt || article.metaDescription || 'این مقاله راهنمای جامع و گام‌به‌گام درباره موضوع مربوطه می‌باشد.',
      },
      {
        q: 'چگونه می‌توانم سفارش تنظیم سند تخصصی ثبت کنم؟',
        a: 'می‌توانید با مراجعه به بخش ثبت سفارش سامانه نگارش یار، درخواست تنظیم سند اداری یا قضایی خود را به صورت آنلاین ثبت نمایید.',
      },
    ];
  }

  return {
    slug: article.slug,
    category:
      (article.category || '').trim() ||
      staticMatch?.category ||
      article.primaryKeyword ||
      'پایگاه دانش حقوقی',
    badge: staticMatch?.badge || 'راهنمای تخصصی نگارش یار',
    h1Title: (article.title || '').trim() || staticMatch?.h1Title || article.title,
    heroSubtitle:
      (article.excerpt || article.metaDescription || '').trim() ||
      staticMatch?.heroSubtitle ||
      '',
    readTime: staticMatch?.readTime || `${readTimeMinutes} دقیقه`,
    lastUpdated: staticMatch
      ? staticMatch.lastUpdated ?? ''
      : validDbUpdatedAt
      ? new Date(validDbUpdatedAt).toLocaleDateString('fa-IR')
      : '۱۴۰۳/۱۱/۰۱',
    datePublished: (staticMatch ? validStaticDatePublished : validDbPublishedAt) || undefined,
    dateModified:
      (staticMatch
        ? validStaticDateModified && validDbUpdatedAt
          ? validDbUpdatedAt
          : validStaticDateModified
        : validDbUpdatedAt) || undefined,
    heroTrustChips: (staticMatch?.heroTrustChips && staticMatch.heroTrustChips.length > 0)
      ? staticMatch.heroTrustChips
      : [
          'بر پایه قوانین و منابع رسمی',
          'مقاله آموزشی، نه مشاوره حقوقی',
          ...(updateYear ? [`بروزرسانی ${updateYear}`] : []),
          'پاسخگویی و پشتیبانی آنلاین',
        ],
    featuredImage: staticMatch?.featuredImage,
    quickAnswerTitle: staticMatch?.quickAnswerTitle || `پاسخ خلاصه به ${article.title}`,
    quickAnswerParagraph:
      (article.excerpt || '').trim() ||
      staticMatch?.quickAnswerParagraph ||
      (parsedSections[0]?.paragraphs?.[0] ?? article.title),
    quickAnswerHighlights: (staticMatch?.quickAnswerHighlights && staticMatch.quickAnswerHighlights.length > 0)
      ? staticMatch.quickAnswerHighlights
      : [
          'بررسی دقیق آخرین قوانین و آیین‌نامه‌ها',
          'راهنمای عملی جهت جلوگیری از اطاله دادرسی',
          'راهنمای عملی برای تنظیم و پیگیری پرونده',
        ],
    tableOfContents,
    sections: parsedSections,
    examplesTitle: staticMatch?.examplesTitle || 'نمونه سناریوها و کاربردهای عملی',
    examplesList: staticMatch?.examplesList || [
      {
        scenarioTitle: `کاربرد در پرونده‌های ${article.primaryKeyword || 'حقوقی'}`,
        description: article.excerpt || 'بررسی نحوه استناد به اصول نگارشی و قوانین مربوطه جهت تسریع در رسیدگی.',
        legalOutcome: 'جلوگیری از رد درخواست و صدور دستور مقتضی توسط مرجع ذی‌صلاح.',
      },
    ],
    commonMistakesTitle: staticMatch?.commonMistakesTitle || 'اشتباهات رایج و نکات کلیدی',
    commonMistakesSubtitle: staticMatch?.commonMistakesSubtitle || 'مواردی که عدم رعایت آن‌ها موجب بطلان یا رد درخواست می‌شود',
    commonMistakesList: staticMatch?.commonMistakesList || [
      {
        mistake: 'عدم رعایت فرمت و متن استاندارد قانون',
        risk: 'صدور قرار رد دادخواست یا عدم استماع در مرجع اداری/قضایی',
        correctAction: 'استفاده از نمونه اسناد تاییدشده یا سفارش تنظیم به کارشناس حقوقی',
      },
    ],
    legalNotesTitle: staticMatch?.legalNotesTitle || 'ملاحظات قانونی و آیین‌نامه‌ای',
    legalNotesList: staticMatch?.legalNotesList || [
      'رعایت مهلت‌های قانونی مقرر در قانون آئین دادرسی مدنی و کیفری الزامی است.',
      'تنظیم صحیح اوراق قضایی تاثیر مستقیم در موفقیت پرونده دارد.',
    ],
    officialPortalSection: staticMatch?.officialPortalSection,
    faqTitle: staticMatch?.faqTitle || 'سوالات متداول',
    faqs: staticMatch?.faqs ? staticMatch.faqs.map(f => ({ q: f.q || f.question || '', a: f.a || f.answer || '' })) : faqs,
    relatedServices: staticMatch?.relatedServices || [
      {
        title: 'تنظیم دادخواست تخصصی',
        desc: 'نگارش آنلاین دادخواست‌های حقوقی و خانواده با رعایت تشریفات دادرسی',
        href: '/services/petition-writing',
        badge: 'خدمت ویژه',
      },
      {
        title: 'تنظیم لایحه دفاعیه',
        desc: 'نگارش لایحه دفاعیه دادگاه با استناد به مواد قانونی و آرای وحدت رویه',
        href: '/services/legal-brief',
        badge: 'تخصصی',
      },
    ],
    relatedSamples: staticMatch?.relatedSamples || [
      {
        title: 'نمونه دادخواست',
        desc: 'مشاهده فرمت و ساختار استاندارد نمونه دادخواست‌های حقوقی',
        href: '/samples/petition',
        badge: 'نمونه رایگان',
      },
      {
        title: 'نمونه لایحه دفاعیه',
        desc: 'الگوی استاندارد لایحه دفاعیه جهت ارائه به دادگاه',
        href: '/samples/legal-brief',
        badge: 'نمونه رایگان',
      },
    ],
    relatedArticles: staticMatch?.relatedArticles || ALL_KNOWLEDGE_ARTICLES.filter((art) => (art.status || 'published') === 'published').slice(0, 3).map((art) => ({
      title: art.h1Title,
      desc: art.heroSubtitle,
      href: `/knowledge/${encodeURIComponent(art.slug.replace(/\//g, ''))}`,
      category: art.category,
    })),
    ctaTitle: staticMatch?.ctaTitle || 'نیاز به تنظیم اختصاصی و حرفه‌ای این سند دارید؟',
    ctaDescription: staticMatch?.ctaDescription || 'تیم کارشناسان ارشد نگارش یار آماده تنظیم دقیق انواع دادخواست، شکواییه، لایحه و نامه اداری شما هستند.',
    ctaPrimaryBtnText: staticMatch?.ctaPrimaryBtnText || 'ثبت سفارش آنلاین',
    ctaPrimaryHref: staticMatch?.ctaPrimaryHref || '/request',
  };
}
