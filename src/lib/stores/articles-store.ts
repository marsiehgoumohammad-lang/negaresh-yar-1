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

export type ArticleStatus = "draft" | "published" | "paused";

export interface Article {
  id: string;
  title: string;
  slug: string;
  status: ArticleStatus;

  excerpt?: string;
  content?: string;

  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  primaryKeyword?: string;
  schema?: string;
  wordCount?: number;

  category?: string;

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

  version?: number;
  isFeatured?: boolean;
  readingTimeMinutes?: number;
  seoKeywords?: string[];

  createdAt: string;
  updatedAt: string;
  publishedAt?: string | null;
}

type DbArticle = {
  id: string;
  title: string;
  slug: string;
  summary: string | null;
  content: string;
meta_title: string | null;
meta_description: string | null;
  keywords: string[] | null;
  schema: string | null;

  status: "draft" | "published" | "archived";

  published_at: string | null;
  created_at: string;
  updated_at: string;

  category: string | null;
  badge: string | null;
  h1_title: string | null;
  hero_subtitle: string | null;
  read_time: string | null;
  last_updated: string | null;

  hero_trust_chips: unknown;
  quick_answer_title: string | null;
  quick_answer_paragraph: string | null;
  quick_answer_highlights: unknown;

  table_of_contents: unknown;
  sections: unknown;

  examples_title: string | null;
  examples_list: unknown;

  common_mistakes_title: string | null;
  common_mistakes_subtitle: string | null;
  common_mistakes_list: unknown;

  legal_notes_title: string | null;
  legal_notes_list: unknown;

  faq_title: string | null;
  faqs: unknown;

  related_services: unknown;
  related_samples: unknown;
  related_articles: unknown;

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

function stringArrayValue(value: unknown): string[] | undefined {
  if (!Array.isArray(value)) return undefined;

  return value.filter(
    (item): item is string => typeof item === "string"
  );
}

function arrayValue<T>(value: unknown): T[] | undefined {
  return Array.isArray(value) ? (value as T[]) : undefined;
}

function fromDb(row: DbArticle): Article {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,

    status: row.status === "archived" ? "paused" : row.status,

    excerpt: row.summary ?? undefined,
    content: row.content ?? undefined,

    metaTitle: row.meta_title ?? undefined,
metaDescription: row.meta_description ?? undefined,

    keywords: row.keywords ?? [],

    primaryKeyword:
      row.keywords && row.keywords.length > 0
        ? row.keywords[0]
        : undefined,

    schema: row.schema ?? undefined,

    wordCount: row.content
      ? row.content.trim().split(/\s+/).filter(Boolean).length
      : undefined,

    category: row.category ?? undefined,

    badge: row.badge ?? undefined,
    h1Title: row.h1_title ?? undefined,
    heroSubtitle: row.hero_subtitle ?? undefined,
    readTime: row.read_time ?? undefined,
    lastUpdated: row.last_updated ?? undefined,

    heroTrustChips:
      stringArrayValue(row.hero_trust_chips),

    quickAnswerTitle:
      row.quick_answer_title ?? undefined,

    quickAnswerParagraph:
      row.quick_answer_paragraph ?? undefined,

    quickAnswerHighlights:
      stringArrayValue(row.quick_answer_highlights),

    tableOfContents:
      arrayValue<KnowledgeTableOfContentsItem>(
        row.table_of_contents
      ),

    sections:
      arrayValue<KnowledgeSection>(row.sections),

    examplesTitle:
      row.examples_title ?? undefined,

    examplesList:
      arrayValue<KnowledgeExample>(row.examples_list),

    commonMistakesTitle:
      row.common_mistakes_title ?? undefined,

    commonMistakesSubtitle:
      row.common_mistakes_subtitle ?? undefined,

    commonMistakesList:
      arrayValue<KnowledgeMistake>(
        row.common_mistakes_list
      ),

    legalNotesTitle:
      row.legal_notes_title ?? undefined,

    legalNotesList:
      stringArrayValue(row.legal_notes_list),

    faqTitle:
      row.faq_title ?? undefined,

    faqs:
      arrayValue<KnowledgeFaq>(row.faqs),

    relatedServices:
      arrayValue<KnowledgeRelatedService>(
        row.related_services
      ),

    relatedSamples:
      arrayValue<KnowledgeRelatedSample>(
        row.related_samples
      ),

    relatedArticles:
      arrayValue<KnowledgeRelatedArticle>(
        row.related_articles
      ),

    ctaTitle:
      row.cta_title ?? undefined,

    ctaDescription:
      row.cta_description ?? undefined,

    ctaPrimaryBtnText:
      row.cta_primary_btn_text ?? undefined,

    ctaPrimaryHref:
      row.cta_primary_href ?? undefined,

    version: row.version ?? 1,

    isFeatured:
      row.is_featured ?? false,

    readingTimeMinutes:
      row.reading_time_minutes ??
      (row.content
        ? Math.max(
            1,
            Math.ceil(
              row.content.trim().split(/\s+/).filter(Boolean).length /
                200
            )
          )
        : undefined),

    seoKeywords:
      row.seo_keywords ?? [],

    createdAt: row.created_at,
    updatedAt: row.updated_at,
    publishedAt: row.published_at,
  };
}

function toDb(article: Partial<Article>) {
  const payload: Record<string, unknown> = {};

  if (article.title !== undefined) {
    payload.title = article.title;
  }
   if (article.metaTitle !== undefined) {
  payload.meta_title = article.metaTitle ?? null;
}

if (article.metaDescription !== undefined) {
  payload.meta_description = article.metaDescription ?? null;
}
  if (article.slug !== undefined) {
    payload.slug = article.slug;
  }

  if (article.status !== undefined) {
    payload.status =
      article.status === "paused"
        ? "archived"
        : article.status;
  }

  if (article.excerpt !== undefined) {
    payload.summary = article.excerpt ?? null;
  }

  if (article.content !== undefined) {
    payload.content = article.content ?? "";
  }

  if (article.keywords !== undefined) {
    payload.keywords = article.keywords ?? [];
  }

  if (article.schema !== undefined) {
    payload.schema = article.schema ?? null;
  }

  if (article.publishedAt !== undefined) {
    payload.published_at = article.publishedAt ?? null;
  }

  if (article.category !== undefined) {
    payload.category = article.category ?? null;
  }

  if (article.badge !== undefined) {
    payload.badge = article.badge ?? null;
  }

  if (article.h1Title !== undefined) {
    payload.h1_title = article.h1Title ?? null;
  }

  if (article.heroSubtitle !== undefined) {
    payload.hero_subtitle = article.heroSubtitle ?? null;
  }

  if (article.readTime !== undefined) {
    payload.read_time = article.readTime ?? null;
  }

  if (article.lastUpdated !== undefined) {
    payload.last_updated = article.lastUpdated ?? null;
  }

  if (article.heroTrustChips !== undefined) {
    payload.hero_trust_chips = article.heroTrustChips ?? [];
  }

  if (article.quickAnswerTitle !== undefined) {
    payload.quick_answer_title =
      article.quickAnswerTitle ?? null;
  }

  if (article.quickAnswerParagraph !== undefined) {
    payload.quick_answer_paragraph =
      article.quickAnswerParagraph ?? null;
  }

  if (article.quickAnswerHighlights !== undefined) {
    payload.quick_answer_highlights =
      article.quickAnswerHighlights ?? [];
  }

  if (article.tableOfContents !== undefined) {
    payload.table_of_contents =
      article.tableOfContents ?? [];
  }

  if (article.sections !== undefined) {
    payload.sections = article.sections ?? [];
  }

  if (article.examplesTitle !== undefined) {
    payload.examples_title =
      article.examplesTitle ?? null;
  }

  if (article.examplesList !== undefined) {
    payload.examples_list =
      article.examplesList ?? [];
  }

  if (article.commonMistakesTitle !== undefined) {
    payload.common_mistakes_title =
      article.commonMistakesTitle ?? null;
  }

  if (article.commonMistakesSubtitle !== undefined) {
    payload.common_mistakes_subtitle =
      article.commonMistakesSubtitle ?? null;
  }

  if (article.commonMistakesList !== undefined) {
    payload.common_mistakes_list =
      article.commonMistakesList ?? [];
  }

  if (article.legalNotesTitle !== undefined) {
    payload.legal_notes_title =
      article.legalNotesTitle ?? null;
  }

  if (article.legalNotesList !== undefined) {
    payload.legal_notes_list =
      article.legalNotesList ?? [];
  }

  if (article.faqTitle !== undefined) {
    payload.faq_title =
      article.faqTitle ?? null;
  }

  if (article.faqs !== undefined) {
    payload.faqs = article.faqs ?? [];
  }

  if (article.relatedServices !== undefined) {
    payload.related_services =
      article.relatedServices ?? [];
  }

  if (article.relatedSamples !== undefined) {
    payload.related_samples =
      article.relatedSamples ?? [];
  }

  if (article.relatedArticles !== undefined) {
    payload.related_articles =
      article.relatedArticles ?? [];
  }

  if (article.ctaTitle !== undefined) {
    payload.cta_title =
      article.ctaTitle ?? null;
  }

  if (article.ctaDescription !== undefined) {
    payload.cta_description =
      article.ctaDescription ?? null;
  }

  if (article.ctaPrimaryBtnText !== undefined) {
    payload.cta_primary_btn_text =
      article.ctaPrimaryBtnText ?? null;
  }

  if (article.ctaPrimaryHref !== undefined) {
    payload.cta_primary_href =
      article.ctaPrimaryHref ?? null;
  }

  if (article.version !== undefined) {
    payload.version = article.version;
  }

  if (article.isFeatured !== undefined) {
    payload.is_featured = article.isFeatured;
  }

  if (article.readingTimeMinutes !== undefined) {
    payload.reading_time_minutes =
      article.readingTimeMinutes;
  }

  if (article.seoKeywords !== undefined) {
    payload.seo_keywords =
      article.seoKeywords ?? [];
  }

  return payload;
}

export async function getArticles(): Promise<Article[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(
      `Failed to load articles: ${error.message}`
    );
  }

  return ((data ?? []) as DbArticle[]).map(fromDb);
}

export async function getPublishedArticles(): Promise<Article[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("status", "published")
    .order("published_at", {
      ascending: false,
      nullsFirst: false,
    });

  if (error) {
    throw new Error(
      `Failed to load published articles: ${error.message}`
    );
  }

  return ((data ?? []) as DbArticle[]).map(fromDb);
}

export async function getArticleBySlug(
  slug: string
): Promise<Article | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    throw new Error(
      `Failed to load article: ${error.message}`
    );
  }

  return data
    ? fromDb(data as DbArticle)
    : null;
}

export async function createArticle(
  article: Omit<
    Article,
    "id" | "createdAt" | "updatedAt"
  >
): Promise<Article> {
  const supabase = await createClient();

  const payload = {
    ...toDb(article),
    content: article.content ?? "",
    status:
      article.status === "paused"
        ? "archived"
        : article.status ?? "draft",
  };

  const { data, error } = await supabase
    .from("articles")
    .insert(payload)
    .select("*")
    .single();

  if (error) {
    throw new Error(
      `Failed to create article: ${error.message}`
    );
  }

  return fromDb(data as DbArticle);
}

export async function updateArticle(
  id: string,
  changes: Partial<Article>
): Promise<Article> {
  const supabase = await createClient();

  const payload = {
    ...toDb(changes),
    updated_at: new Date().toISOString(),
  };

  const { data, error } = await supabase
    .from("articles")
    .update(payload)
    .eq("id", id)
    .select("*")
    .single();

  if (error) {
    throw new Error(
      `Failed to update article: ${error.message}`
    );
  }

  return fromDb(data as DbArticle);
}

export async function deleteArticle(
  id: string
): Promise<void> {
  const supabase = await createClient();

  const { error } = await supabase
    .from("articles")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error(
      `Failed to delete article: ${error.message}`
    );
  }
}
