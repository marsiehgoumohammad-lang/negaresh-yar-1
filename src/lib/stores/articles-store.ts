import { createClient } from "@/lib/supabase/server";

export interface Article {
  id: string;
  title: string;
  slug: string;
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
  createdAt: string;
  updatedAt: string;
  publishedAt?: string | null;
}

type DbArticle = {
  id: string;
  title: string;
  slug: string;
  status: "draft" | "published" | "archived";
  excerpt: string | null;
  content: string;
  seo_title: string | null;
  seo_description: string | null;
  keywords: string[] | null;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  metadata: Record<string, unknown> | null;
};

function fromDb(row: DbArticle): Article {
  const metadata = row.metadata ?? {};

  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    status: row.status === "archived" ? "paused" : row.status,
    excerpt: row.excerpt ?? undefined,
    content: row.content,
    metaTitle: row.seo_title ?? undefined,
    metaDescription: row.seo_description ?? undefined,
    keywords: row.keywords ?? [],
    primaryKeyword:
      typeof metadata.primaryKeyword === "string"
        ? metadata.primaryKeyword
        : undefined,
    schema:
      typeof metadata.schema === "string"
        ? metadata.schema
        : undefined,
    wordCount:
      typeof metadata.wordCount === "number"
        ? metadata.wordCount
        : undefined,
    category:
      typeof metadata.category === "string"
        ? metadata.category
        : undefined,
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

  if (article.category !== undefined) {
    metadata.category = article.category;
  }

  return {
    title: article.title,
    slug: article.slug,
    status: article.status === "paused" ? "archived" : article.status,
    excerpt: article.excerpt ?? null,
    content: article.content ?? "",
    seo_title: article.metaTitle ?? null,
    seo_description: article.metaDescription ?? null,
    keywords: article.keywords ?? [],
    published_at: article.publishedAt ?? null,
    metadata,
  };
}

export async function getArticles(): Promise<Article[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(`Failed to load articles: ${error.message}`);
  }

  return ((data ?? []) as DbArticle[]).map(fromDb);
}

export async function getPublishedArticles(): Promise<Article[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error) {
    throw new Error(`Failed to load published articles: ${error.message}`);
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
    throw new Error(`Failed to load article: ${error.message}`);
  }

  return data ? fromDb(data as DbArticle) : null;
}

export async function createArticle(
  article: Omit<Article, "id" | "createdAt" | "updatedAt">
): Promise<Article> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("articles")
    .insert(toDb(article))
    .select("*")
    .single();

  if (error) {
    throw new Error(`Failed to create article: ${error.message}`);
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
    throw new Error(`Failed to update article: ${error.message}`);
  }

  return fromDb(data as DbArticle);
}

export async function deleteArticle(id: string): Promise<void> {
  const supabase = await createClient();

  const { error } = await supabase
    .from("articles")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error(`Failed to delete article: ${error.message}`);
  }
}
