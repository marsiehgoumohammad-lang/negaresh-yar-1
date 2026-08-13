import { createClient } from "@/lib/supabase/server";

export interface KnowledgeSection {
  id: string;
  title: string;
  paragraphs: string[];
  bulletPoints?: string[];
  calloutBox?: {
    type: "info" | "warning" | "tip" | "law";
    title: string;
    text: string;
  };
}

export interface KnowledgeExample {
  scenarioTitle: string;
  description: string;
  legalOutcome: string;
}

export interface KnowledgeMistake {
  mistake: string;
  risk: string;
  correctAction: string;
}

export interface KnowledgeRelatedService {
  title: string;
  href: string;
  desc: string;
  badge: string;
}

export interface KnowledgeRelatedSample {
  title: string;
  href: string;
  desc: string;
  badge: string;
}

export interface KnowledgeRelatedArticle {
  title: string;
  href: string;
  desc: string;
  category: string;
}

export interface KnowledgeFaq {
  q: string;
  a: string;
}

export interface KnowledgeTableOfContentsItem {
  id: string;
  title: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;

  /**
   * Application-level status.
   * "paused" is mapped to the database "archived" status.
   */
  status: "draft" | "published" | "paused";

  excerpt?: string;
  content?: string;

  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  primaryKeyword?: string;
  schema?: string;
  wordCount?: number;

  category?: string;

  // Knowledge Base fields
  badge?: string;
  h1Title?: string;
  heroSubtitle?: string;
  readTime?: string;
  lastUpdated?: string;
  heroTrustChips?: string[];

  quickAnswerTitle?: string;
  quickAnswerParagraph?: string;
  quickAnswerHighlights?: string[];

  tableOfContents?: KnowledgeTableOfContentsItem[];
  sections?: KnowledgeSection[];

  examplesTitle?: string;
  examplesList?: KnowledgeExample[];

  commonMistakesTitle?: string;
  commonMistakesSubtitle?: string;
  commonMistakesList?: KnowledgeMistake[];

  legalNotesTitle?: string;
  legalNotesList?: string[];

  faqTitle?: string;
  faqs?: KnowledgeFaq[];

  relatedServices?: KnowledgeRelatedService[];
  relatedSamples?: KnowledgeRelatedSample[];
  relatedArticles?: KnowledgeRelatedArticle[];

  ctaTitle?: string;
  ctaDescription?: string;
  ctaPrimaryBtnText?: string;
  ctaPrimaryHref?: string;

  // CMS / SEO controls
  version?: number;
  isFeatured?: boolean;
  readingTimeMinutes?: number;
  seoKeywords?: string[];

  createdAt: string;
  updatedAt: string;
  publishedAt?: string | null;
}

type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

type DbArticle = {
  id: string;
  title: string;
  slug: string;
  status: "draft" | "published" | "archived";

  excerpt: string | null;
  content: string | null;

  seo_title: string | null;
  seo_description: string | null;
  keywords: string[] | null;

  published_at: string | null;
  created_at: string;
  updated_at: string;

  metadata: Record<string, unknown> | null;

  category: string | null;
  badge: string | null;
  h1_title: string | null;
  hero_subtitle: string | null;
  read_time: string | null;
  last_updated: string | null;

  hero_trust_chips: JsonValue[] | null;

  quick_answer_title: string | null;
  quick_answer_paragraph: string | null;
  quick_answer_highlights: JsonValue[] | null;

  table_of_contents: JsonValue[] | null;
  sections: JsonValue[] | null;

  examples_title: string | null;
  examples_list: JsonValue[] | null;

  common_mistakes_title: string | null;
  common_mistakes_subtitle: string | null;
  common_mistakes_list: JsonValue[] | null;

  legal_notes_title: string | null;
  legal_notes_list: JsonValue[] | null;

  faq_title: string | null;
  faqs: JsonValue[] | null;

  related_services: JsonValue[] | null;
  related_samples: JsonValue[] | null;
  related_articles: JsonValue[] | null;

  cta_title: string | null;
  cta_description: string | null;
  cta_primary_btn_text: string | null;
  cta_primary_href: string | null;

  version: number | null;
  is_featured: boolean | null;
  reading_time_minutes: number | null;
  seo_keywords: string[] | null;
};

function stringValue(value: unknown): string | undefined {
  return typeof value === "string" ? value : undefined;
}

function numberValue(value: unknown): number | undefined {
  return typeof value === "number" ? value : undefined;
}

function booleanValue(value: unknown): boolean | undefined {
  return typeof value === "boolean" ? value : undefined;
}

function stringArrayValue(value: unknown): string[] | undefined {
  if (!Array.isArray(value)) return undefined;

  const result = value.filter(
    (item): item is string => typeof item === "string"
  );

  return result;
}

function arrayValue<T>(value: unknown): T[] | undefined {
  return Array.isArray(value) ? (value as T[]) : undefined;
}

function fromDb(row: DbArticle): Article {
  const metadata = row.metadata ?? {};

  return {
    id: row.id,
    title: row.title,
    slug: row.slug,

    status: row.status === "archived" ? "paused" : row.status,

    excerpt: row.excerpt ?? undefined,
    content: row.content ?? undefined,

    metaTitle: row.seo_title ?? undefined,
    metaDescription: row.seo_description ?? undefined,

    keywords: row.keywords ?? [],

    primaryKeyword:
      stringValue(metadata.primaryKeyword) ??
      stringValue(metadata.primary_keyword),

    schema: stringValue(metadata.schema),

    wordCount:
      numberValue(metadata.wordCount) ??
      numberValue(metadata.word_count),

    category: row.category ?? stringValue(metadata.category),

    badge: row.badge ?? undefined,
    h1Title: row.h1_title ?? undefined,
    heroSubtitle: row.hero_subtitle ?? undefined,
    readTime: row.read_time ?? undefined,
    lastUpdated: row.last_updated ?? undefined,

    heroTrustChips:
      stringArrayValue(row.hero_trust_chips) ??
      stringArrayValue(metadata.heroTrustChips),

    quickAnswerTitle: row.quick_answer_title ?? undefined,
    quickAnswerParagraph: row.quick_answer_paragraph ?? undefined,

    quickAnswerHighlights:
      stringArrayValue(row.quick_answer_highlights) ??
      stringArrayValue(metadata.quickAnswerHighlights),

    tableOfContents: arrayValue<KnowledgeTableOfContentsItem>(
      row.table_of_contents
    ),

    sections: arrayValue<KnowledgeSection>(row.sections),

    examplesTitle: row.examples_title ?? undefined,
    examplesList: arrayValue<KnowledgeExample>(row.examples_list),

    commonMistakesTitle: row.common_mistakes_title ?? undefined,
    commonMistakesSubtitle:
      row.common_mistakes_subtitle ?? undefined,

    commonMistakesList:
      arrayValue<KnowledgeMistake>(row.common_mistakes_list),

    legalNotesTitle: row.legal_notes_title ?? undefined,
    legalNotesList: stringArrayValue(row.legal_notes_list),

    faqTitle: row.faq_title ?? undefined,
    faqs: arrayValue<KnowledgeFaq>(row.faqs),

    relatedServices:
      arrayValue<KnowledgeRelatedService>(row.related_services),

    relatedSamples:
      arrayValue<KnowledgeRelatedSample>(row.related_samples),

    relatedArticles:
      arrayValue<KnowledgeRelatedArticle>(row.related_articles),

    ctaTitle: row.cta_title ?? undefined,
    ctaDescription: row.cta_description ?? undefined,
    ctaPrimaryBtnText:
      row.cta_primary_btn_text ?? undefined,
    ctaPrimaryHref:
      row.cta_primary_href ?? undefined,

    version: row.version ?? 1,
    isFeatured: row.is_featured ?? false,

    readingTimeMinutes:
      row.reading_time_minutes ??
      numberValue(metadata.readingTimeMinutes),

    seoKeywords:
      row.seo_keywords ??
      stringArrayValue(metadata.seoKeywords) ??
      [],

    createdAt: row.created_at,
    updatedAt: row.updated_at,
    publishedAt: row.published_at,
  };
}

function toDb(article: Partial<Article>) {
  const metadata: Record<string, unknown> = {};

  if (article.primaryKeyword !== undefined) {
    metadata.primaryKeyword = article.primaryKeyword;
  }

  if (article.schema !== undefined) {
    metadata.schema = article.schema;
  }

  if (article.wordCount !== undefined) {
    metadata.wordCount = article.wordCount;
  }

  return {
    ...(article.title !== undefined && {
      title: article.title,
    }),

    ...(article.slug !== undefined && {
      slug: article.slug,
    }),

    ...(article.status !== undefined && {
      status:
        article.status === "paused"
          ? "archived"
          : article.status,
    }),

    ...(article.excerpt !== undefined && {
      excerpt: article.excerpt ?? null,
    }),

    ...(article.content !== undefined && {
      content: article.content ?? "",
    }),

    ...(article.metaTitle !== undefined && {
      seo_title: article.metaTitle ?? null,
    }),

    ...(article.metaDescription !== undefined && {
      seo_description:
        article.metaDescription ?? null,
    }),

    ...(article.keywords !== undefined && {
      keywords: article.keywords ?? [],
    }),

    ...(article.publishedAt !== undefined && {
      published_at: article.publishedAt ?? null,
    }),

    ...(article.category !== undefined && {
      category: article.category ?? null,
    }),

    ...(article.badge !== undefined && {
      badge: article.badge ?? null,
    }),

    ...(article.h1Title !== undefined && {
      h1_title: article.h1Title ?? null,
    }),

    ...(article.heroSubtitle !== undefined && {
      hero_subtitle:
        article.heroSubtitle ?? null,
    }),

    ...(article.readTime !== undefined && {
      read_time: article.readTime ?? null,
    }),

    ...(article.lastUpdated !== undefined && {
      last_updated:
        article.lastUpdated ?? null,
    }),

    ...(article.heroTrustChips !== undefined && {
      hero_trust_chips:
        article.heroTrustChips ?? [],
    }),

    ...(article.quickAnswerTitle !== undefined && {
      quick_answer_title:
        article.quickAnswerTitle ?? null,
    }),

    ...(article.quickAnswerParagraph !== undefined && {
      quick_answer_paragraph:
        article.quickAnswerParagraph ?? null,
    }),

    ...(article.quickAnswerHighlights !== undefined && {
      quick_answer_highlights:
        article.quickAnswerHighlights ?? [],
    }),

    ...(article.tableOfContents !== undefined && {
      table_of_contents:
        article.tableOfContents ?? [],
    }),

    ...(article.sections !== undefined && {
      sections: article.sections ?? [],
    }),

    ...(article.examplesTitle !== undefined && {
      examples_title:
        article.examplesTitle ?? null,
    }),

    ...(article.examplesList !== undefined && {
      examples_list:
        article.examplesList ?? [],
    }),

    ...(article.commonMistakesTitle !== undefined && {
      common_mistakes_title:
        article.commonMistakesTitle ?? null,
    }),

    ...(article.commonMistakesSubtitle !== undefined && {
      common_mistakes_subtitle:
        article.commonMistakesSubtitle ?? null,
    }),

    ...(article.commonMistakesList !== undefined && {
      common_mistakes_list:
        article.commonMistakesList ?? [],
    }),

    ...(article.legalNotesTitle !== undefined && {
      legal_notes_title:
        article.legalNotesTitle ?? null,
    }),

    ...(article.legalNotesList !== undefined && {
      legal_notes_list:
        article.legalNotesList ?? [],
    }),

    ...(article.faqTitle !== undefined && {
      faq_title:
        article.faqTitle ?? null,
    }),

    ...(article.faqs !== undefined && {
      faqs: article.faqs ?? [],
    }),

    ...(article.relatedServices !== undefined && {
      related_services:
        article.relatedServices ?? [],
    }),

    ...(article.relatedSamples !== undefined && {
      related_samples:
        article.relatedSamples ?? [],
    }),

    ...(article.relatedArticles !== undefined && {
      related_articles:
        article.relatedArticles ?? [],
    }),

    ...(article.ctaTitle !== undefined && {
      cta_title:
        article.ctaTitle ?? null,
    }),

    ...(article.ctaDescription !== undefined && {
      cta_description:
        article.ctaDescription ?? null,
    }),

    ...(article.ctaPrimaryBtnText !== undefined && {
      cta_primary_btn_text:
        article.ctaPrimaryBtnText ?? null,
    }),

    ...(article.ctaPrimaryHref !== undefined && {
      cta_primary_href:
        article.ctaPrimaryHref ?? null,
    }),

    ...(article.version !== undefined && {
      version: article.version,
    }),

    ...(article.isFeatured !== undefined && {
      is_featured: article.isFeatured,
    }),

    ...(article.readingTimeMinutes !== undefined && {
      reading_time_minutes:
        article.readingTimeMinutes,
    }),

    ...(article.seoKeywords !== undefined && {
      seo_keywords:
        article.seoKeywords ?? [],
    }),

    ...(Object.keys(metadata).length > 0 && {
      metadata,
    }),
  };
}

export async function getArticles(): Promise<Article
