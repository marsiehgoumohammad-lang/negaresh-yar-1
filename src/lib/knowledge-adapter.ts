import { Article } from '@/lib/stores/types';
import { ALL_KNOWLEDGE_ARTICLES } from '@/data/knowledge';
import { KnowledgeArticleData, KnowledgeSection } from '@/data/knowledge/types';

export function adaptArticleToKnowledgeData(article: Article): KnowledgeArticleData {
  const staticMatch = ALL_KNOWLEDGE_ARTICLES.find((s) => s.slug === article.slug);

  if (staticMatch) {
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

  // Parse sections from content string
  const rawContent = article.content || '';
  const parsedSections: KnowledgeSection[] = [];

  // Check if content has headings like ## or <h2>
  const headingRegex = /(?:^|\n)(#{2,3}|<h[23][^>]*>)\s*(.*?)(?:<\/h[23]>|\n|$)/gi;
  const matches = Array.from(rawContent.matchAll(headingRegex));

  if (matches.length > 0) {
    matches.forEach((match, index) => {
      const matchIndex = match.index || 0;
      const title = match[2].trim().replace(/<[^>]+>/g, '');
      const nextMatchIndex = matches[index + 1] ? (matches[index + 1].index || rawContent.length) : rawContent.length;

      const bodyText = rawContent.slice(matchIndex + match[0].length, nextMatchIndex).trim();
      const paragraphs = bodyText
        .split(/\n\s*\n/)
        .map((p) => p.replace(/<[^>]+>/g, '').trim())
        .filter(Boolean);

      if (title && paragraphs.length > 0) {
        parsedSections.push({
          id: `sec-${index + 1}`,
          title,
          paragraphs,
        });
      }
    });
  }

  // Fallback if no headings found
  if (parsedSections.length === 0) {
    const paragraphs = rawContent
      .split(/\n\s*\n/)
      .map((p) => p.replace(/<[^>]+>/g, '').trim())
      .filter(Boolean);

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
