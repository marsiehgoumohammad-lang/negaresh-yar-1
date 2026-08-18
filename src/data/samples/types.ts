import { Metadata } from 'next';

export type SearchIntent = 'informational' | 'transactional' | 'navigational' | 'legal-document';

export type SampleStatus = 'published' | 'draft';

export const SAMPLE_CATEGORIES = [
  'وثیقه و قرارهای تأمین',
  'اعتراض و تجدیدنظر',
  'اعسار و محکومیت مالی',
  'اظهارنامه',
  'اجرای احکام و مزایده',
  'شکواییه و امور کیفری',
  'درخواست‌های قضایی',
  'نامه‌ها و درخواست‌های اداری',
] as const;

export type SampleCategoryType = (typeof SAMPLE_CATEGORIES)[number] | string;

export interface SampleDocument {
  id?: string;
  slug: string;
  title?: string;
  shortDescription?: string;
  category?: SampleCategoryType;
  subcategory?: string;
  intent?: SearchIntent;
  excerpt?: string; // پاسخ مستقیم به Intent کاربر
  content?: string; // نمونه متن کامل
  audience?: string; // این متن برای چه کسانی است
  
  // تحلیل و محتوای تفصیلی
  analysis?: {
    title: string;
    paragraphs: string[];
    highlights: { title: string; desc: string }[];
  };

  // چه زمانی از این متن استفاده کنیم
  whenToUse?: { title: string; desc: string }[];

  // مدارک و اطلاعات موردنیاز
  documents?: { title: string; desc: string; isMandatory?: boolean }[];

  // نکات مهم
  importantNotes?: string[];

  // اشتباهات رایج
  commonMistakes?: { mistake: string; impact: string; solution: string }[];

  // مبانی و مستندات قانونی
  legalBasis?: { article: string; title: string; description: string }[];

  // FAQ
  faq?: { question: string; answer: string }[];

  // نمونه‌های مرتبط (slugs or objects)
  relatedSamples?: string[] | { title: string; href: string; desc: string; badge?: string }[];

  // پیام اختصاصی پیام‌رسان
  messengerMessage?: string;

  // اطلاعات انتشار و به‌روزرسانی
  publishedAt?: string;
  updatedAt?: string;
  author?: { name: string; role: string };
  reviewer?: { name: string; role: string; date?: string };
  status?: SampleStatus;

  // لینک خدمت اختصاصی مرتبط در سایت
  serviceLink?: { title: string; href: string; badge: string; desc: string };

  // SEO & Metadata
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];

  // فیلدهای سازگاری با تمپلیت‌های پیشین (Legacy Compatibility)
  categoryName?: string;
  badge?: string;
  h1Title?: string;
  heroSubtitle?: string;
  heroTrustChips?: string[];
  whatIsTitle?: string;
  whatIsParagraphs?: string[];
  whatIsHighlights?: { title: string; desc: string }[];
  whenToUseTitle?: string;
  whenToUseSubtitle?: string;
  whenToUseList?: { title: string; desc: string }[];
  requiredInfoTitle?: string;
  requiredInfoSubtitle?: string;
  requiredInfoList?: { title: string; desc: string }[];
  writingTipsTitle?: string;
  writingTipsSubtitle?: string;
  writingTipsList?: { title: string; desc: string }[];
  commonMistakesTitle?: string;
  commonMistakesSubtitle?: string;
  commonMistakesList?: { mistake: string; impact: string; solution: string }[];
  legalNotesTitle?: string;
  legalNotesList?: string[];
  sampleStructureTitle?: string;
  sampleStructureIntro?: string;
  sampleStructureContent?: string;
  sampleStructureFeatures?: string[];
  faqTitle?: string;
  faqs?: { q: string; a: string }[];
  relatedServices?: { title: string; href: string; desc: string; badge: string }[];
  relatedArticles?: { title: string; href: string; desc: string; badge: string }[];
  ctaTitle?: string;
  ctaDescription?: string;
  ctaPrimaryBtnText?: string;
  ctaPrimaryHref?: string;
}

export type SampleLandingData = SampleDocument;
export type SampleMetadata = Metadata;

