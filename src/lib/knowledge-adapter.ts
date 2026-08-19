import { Article } from '@/lib/stores/types';
import { ALL_KNOWLEDGE_ARTICLES } from '@/data/knowledge';
import { KnowledgeArticleData, KnowledgeSection } from '@/data/knowledge/types';

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

  // If staticMatch exists and no custom parsed sections were found, or if static match is exact
  if (staticMatch && parsedSections.length === 0) {
    return {
      ...staticMatch,
      h1Title: article.title || staticMatch.h1Title,
      heroSubtitle: article.excerpt || staticMatch.heroSubtitle,
      category: article.category || staticMatch.category,
      lastUpdated: article.updatedAt
        ? new Date(article.updatedAt).toLocaleDateString('fa-IR')
        : staticMatch.lastUpdated,
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
    category: article.category || article.primaryKeyword || 'پایگاه دانش حقوقی',
    badge: 'راهنمای تخصصی نگارش یار',
    h1Title: article.title,
    heroSubtitle: article.excerpt || article.metaDescription || '',
    readTime: `${readTimeMinutes} دقیقه`,
    lastUpdated: article.updatedAt
      ? new Date(article.updatedAt).toLocaleDateString('fa-IR')
      : '۱۴۰۳/۱۱/۰۱',
    heroTrustChips: [
      'مطابق با قوانین موضوعه کشور',
      'تایید شده توسط کارشناسان حقوقی',
      'بروزرسانی ۱۴۰۳',
      'پاسخگویی و پشتیبانی آنلاین',
    ],
    quickAnswerTitle: `پاسخ خلاصه به ${article.title}`,
    quickAnswerParagraph: article.excerpt || (parsedSections[0]?.paragraphs[0] ?? article.title),
    quickAnswerHighlights: [
      'بررسی دقیق آخرین قوانین و آیین‌نامه‌ها',
      'راهنمای عملی جهت جلوگیری از اطاله دادرسی',
      'تنظیم توسط کارشناسان ارشد حقوقی',
    ],
    tableOfContents,
    sections: parsedSections,
    examplesTitle: 'نمونه سناریوها و کاربردهای عملی',
    examplesList: [
      {
        scenarioTitle: `کاربرد در پرونده‌های ${article.primaryKeyword || 'حقوقی'}`,
        description: article.excerpt || 'بررسی نحوه استناد به اصول نگارشی و قوانین مربوطه جهت تسریع در رسیدگی.',
        legalOutcome: 'جلوگیری از رد درخواست و صدور دستور مقتضی توسط مرجع ذی‌صلاح.',
      },
    ],
    commonMistakesTitle: 'اشتباهات رایج و نکات کلیدی',
    commonMistakesSubtitle: 'مواردی که عدم رعایت آن‌ها موجب بطلان یا رد درخواست می‌شود',
    commonMistakesList: [
      {
        mistake: 'عدم رعایت فرمت و متن استاندارد قانون',
        risk: 'صدور قرار رد دادخواست یا عدم استماع در مرجع اداری/قضایی',
        correctAction: 'استفاده از نمونه اسناد تاییدشده یا سفارش تنظیم به کارشناس حقوقی',
      },
    ],
    legalNotesTitle: 'ملاحظات قانونی و آیین‌نامه‌ای',
    legalNotesList: [
      'رعایت مهلت‌های قانونی مقرر در قانون آئین دادرسی مدنی و کیفری الزامی است.',
      'تنظیم صحیح اوراق قضایی تاثیر مستقیم در موفقیت پرونده دارد.',
    ],
    faqTitle: 'سوالات متداول',
    faqs,
    relatedServices: [
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
    relatedSamples: [
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
    relatedArticles: ALL_KNOWLEDGE_ARTICLES.slice(0, 3).map((art) => ({
      title: art.h1Title,
      desc: art.heroSubtitle,
      href: `/knowledge/${art.slug}`,
      category: art.category,
    })),
    ctaTitle: 'نیاز به تنظیم اختصاصی و حرفه‌ای این سند دارید؟',
    ctaDescription: 'تیم کارشناسان ارشد نگارش یار آماده تنظیم دقیق انواع دادخواست، شکواییه، لایحه و نامه اداری شما هستند.',
    ctaPrimaryBtnText: 'ثبت سفارش آنلاین',
    ctaPrimaryHref: '/request',
  };
}
