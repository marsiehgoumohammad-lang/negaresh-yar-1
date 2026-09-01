import { Article, ArticleStatus, CreateArticleData } from './types';
import { ALL_KNOWLEDGE_ARTICLES, KNOWLEDGE_METADATA_MAP } from '@/data/knowledge';
import { getSupabaseAdmin, isSupabaseConfigured } from '@/lib/supabase';
import { SupabaseClient } from '@supabase/supabase-js';

export type { Article, ArticleStatus, CreateArticleData };

export function getInitialArticles(): Article[] {
  const now = new Date().toISOString();

  return ALL_KNOWLEDGE_ARTICLES.map((art) => {
    const meta = KNOWLEDGE_METADATA_MAP[art.slug as keyof typeof KNOWLEDGE_METADATA_MAP];
    const contentText = art.sections
      ? art.sections.map((s) => `${s.title}\n${s.paragraphs.join('\n')}`).join('\n\n')
      : art.quickAnswerParagraph || '';

    const wordCount = contentText
      ? contentText.trim().split(/\s+/).filter(Boolean).length
      : 250;

    return {
      id: art.slug,
      title: art.h1Title || art.slug,
      slug: art.slug,
      status: 'published' as ArticleStatus,
      excerpt: art.heroSubtitle || art.quickAnswerParagraph || '',
      content: contentText,
      metaTitle: (meta?.title as string) || art.h1Title || '',
      metaDescription: (meta?.description as string) || art.heroSubtitle || '',
      keywords: [art.category, 'نگارش یار', 'پایگاه دانش'],
      primaryKeyword: art.category || 'حقوقی',
      wordCount,
      category: art.category,
      createdAt: now,
      updatedAt: now,
      publishedAt: now,
    };
  });
}

function mapRowToArticle(row: Record<string, unknown>): Article {
  const meta = (typeof row.metadata === 'object' && row.metadata !== null) ? (row.metadata as Record<string, unknown>) : {};
  const contentText = (row.content as string) || '';
  const wordCount = contentText ? contentText.trim().split(/\s+/).filter(Boolean).length : (Number(meta.wordCount) || 0);

  const metaCat = (typeof meta.category === 'string' && meta.category.trim()) ? meta.category.trim() : '';
  const rowCat = (typeof row.category === 'string' && row.category.trim()) ? row.category.trim() : '';
  let category = metaCat || rowCat || 'حقوقی';

  const slug = (row.slug as string) || '';
  if (slug === 'government-auction-guide' && category === 'حقوقی') {
    category = 'مالیات، بیمه و امور تجاری';
  }

  return {
    id: (row.id as string) || (meta.customId as string) || slug,
    title: (row.title as string) || '',
    slug,
    status: (row.status as ArticleStatus) || 'draft',
    excerpt: (row.excerpt as string) || (row.seo_description as string) || '',
    content: contentText,
    metaTitle: (row.seo_title as string) || (row.title as string) || '',
    metaDescription: (row.seo_description as string) || (row.excerpt as string) || '',
    keywords: Array.isArray(row.keywords) ? (row.keywords as string[]) : [],
    primaryKeyword: (meta.primaryKeyword as string) || (Array.isArray(row.keywords) && (row.keywords[0] as string)) || '',
    schema: typeof meta.schema === 'string' ? meta.schema : (meta.schema ? JSON.stringify(meta.schema) : ''),
    wordCount,
    category,
    createdAt: (row.created_at as string) || new Date().toISOString(),
    updatedAt: (row.updated_at as string) || new Date().toISOString(),
    publishedAt: (row.published_at as string) || null,
  };
}

function mapArticleToRow(article: Article) {
  return {
    title: article.title,
    slug: article.slug,
    excerpt: article.excerpt || null,
    content: article.content || '',
    status: article.status || 'draft',
    seo_title: article.metaTitle || article.title,
    seo_description: article.metaDescription || article.excerpt || null,
    keywords: Array.isArray(article.keywords) ? article.keywords : [],
    published_at: article.publishedAt ? new Date(article.publishedAt).toISOString() : null,
    metadata: {
      primaryKeyword: article.primaryKeyword || '',
      schema: article.schema || '',
      wordCount: article.wordCount || 0,
      category: article.category || 'حقوقی',
      customId: article.id,
    },
    updated_at: new Date().toISOString(),
  };
}

let isSeeding = false;
async function seedInitialArticlesIfEmpty(supabase: SupabaseClient) {
  if (isSeeding) return;
  isSeeding = true;
  try {
    const { count, error } = await supabase.from('articles').select('*', { count: 'exact', head: true });
    if (!error && (count === 0 || count === null)) {
      const initial = getInitialArticles();
      const rows = initial.map((art) => mapArticleToRow(art));
      await supabase.from('articles').upsert(rows, { onConflict: 'slug' });
    }
  } catch (err) {
    console.error('Error seeding initial articles to Supabase:', err);
  } finally {
    isSeeding = false;
  }
}

let hasMigratedAuction = false;
async function migrateAuctionArticleCategory(supabase: SupabaseClient, articles: Article[]) {
  if (hasMigratedAuction) return;
  hasMigratedAuction = true;
  try {
    const slug = 'government-auction-guide';
    const target = articles.find((a) => a.slug === slug);
    if (target && target.category !== 'مالیات، بیمه و امور تجاری') {
      target.category = 'مالیات، بیمه و امور تجاری';
      const row = mapArticleToRow(target);
      await supabase.from('articles').update(row).eq('slug', slug);
    }
  } catch (err) {
    console.error('Error migrating auction article category:', err);
  }
}

let inMemoryArticles: Article[] | null = null;

export async function getArticles(): Promise<Article[]> {
  try {
    if (!isSupabaseConfigured()) {
      return inMemoryArticles || getInitialArticles();
    }
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.warn('Supabase reading articles fallback:', error.message);
      return inMemoryArticles || getInitialArticles();
    }

    if (!data || data.length === 0) {
      seedInitialArticlesIfEmpty(supabase);
      const initial = getInitialArticles();
      inMemoryArticles = initial;
      return initial;
    }

    const articles = (data as Record<string, unknown>[]).map(mapRowToArticle);
    migrateAuctionArticleCategory(supabase, articles);
    inMemoryArticles = articles;
    return articles;
  } catch (err) {
    console.warn('Exception in getArticles() (falling back to initial):', err);
    return inMemoryArticles || getInitialArticles();
  }
}

export async function getPublishedArticles(): Promise<Article[]> {
  try {
    if (!isSupabaseConfigured()) {
      const all = inMemoryArticles || getInitialArticles();
      return all.filter((a) => a.status === 'published');
    }
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('status', 'published')
      .order('created_at', { ascending: false });

    if (error) {
      console.warn('Supabase reading published articles fallback:', error.message);
      const all = inMemoryArticles || getInitialArticles();
      return all.filter((a) => a.status === 'published');
    }

    if (!data || data.length === 0) {
      const all = await getArticles();
      return all.filter((a) => a.status === 'published');
    }

    return (data as Record<string, unknown>[]).map(mapRowToArticle);
  } catch (err) {
    console.warn('Exception in getPublishedArticles() (falling back to initial):', err);
    const all = inMemoryArticles || getInitialArticles();
    return all.filter((a) => a.status === 'published');
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const cleanSlug = slug.trim();
    if (!isSupabaseConfigured()) {
      const fallbackList = inMemoryArticles || getInitialArticles();
      return fallbackList.find((a) => a.slug === cleanSlug) || null;
    }
    const supabase = getSupabaseAdmin();

    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('slug', cleanSlug)
      .maybeSingle();

    if (!error && data) {
      return mapRowToArticle(data as Record<string, unknown>);
    }

    // Fallback to in-memory/initial
    const fallbackList = inMemoryArticles || getInitialArticles();
    return fallbackList.find((a) => a.slug === cleanSlug) || null;
  } catch (err) {
    console.warn('Exception in getArticleBySlug() (falling back to initial):', err);
    const fallbackList = inMemoryArticles || getInitialArticles();
    return fallbackList.find((a) => a.slug === slug.trim()) || null;
  }
}

export async function createArticle(
  data: CreateArticleData
): Promise<{ success: boolean; article?: Article; error?: string; code?: number; isUpdate?: boolean }> {
  try {
    const supabase = getSupabaseAdmin();

    if (!data.title || !data.slug || !data.content) {
      return {
        success: false,
        error: 'فیلدهای عنوان (title)، اسلاگ (slug) و متن مقاله (content) الزامی هستند.',
        code: 400,
      };
    }

    const cleanSlug = data.slug.trim();

    // Check if article with this slug exists
    const { data: existingRow } = await supabase
      .from('articles')
      .select('*')
      .eq('slug', cleanSlug)
      .maybeSingle();

    const now = new Date().toISOString();
    const wordCount = data.content ? data.content.trim().split(/\s+/).filter(Boolean).length : 0;
    const status = data.status || 'draft';
    const isUpdate = Boolean(existingRow);

    const publishedAt =
      status === 'published'
        ? existingRow?.published_at || now
        : null;

    const existingCategory = existingRow ? mapRowToArticle(existingRow as Record<string, unknown>).category : undefined;
    const category = (data.category && data.category.trim())
      ? data.category.trim()
      : (existingCategory || 'حقوقی');

    const articleToSave: Article = {
      id: existingRow?.id || cleanSlug,
      title: data.title.trim(),
      slug: cleanSlug,
      status,
      excerpt: data.excerpt ? data.excerpt.trim() : '',
      content: data.content,
      metaTitle: data.metaTitle ? data.metaTitle.trim() : data.title.trim(),
      metaDescription: data.metaDescription ? data.metaDescription.trim() : (data.excerpt ? data.excerpt.trim() : ''),
      keywords: Array.isArray(data.keywords) ? data.keywords : [],
      primaryKeyword: data.primaryKeyword ? data.primaryKeyword.trim() : (data.keywords?.[0] || ''),
      schema: data.schema ? (typeof data.schema === 'string' ? data.schema : JSON.stringify(data.schema)) : '',
      wordCount,
      category,
      createdAt: existingRow?.created_at || now,
      updatedAt: now,
      publishedAt,
    };

    const row = mapArticleToRow(articleToSave);

    let savedData: Record<string, unknown> | null = null;
    let error: { message: string } | null = null;

    if (existingRow) {
      const res = await supabase
        .from('articles')
        .update(row)
        .eq('id', existingRow.id)
        .select()
        .single();
      savedData = res.data as Record<string, unknown> | null;
      error = res.error;
    } else {
      const res = await supabase
        .from('articles')
        .insert(row)
        .select()
        .single();
      savedData = res.data as Record<string, unknown> | null;
      error = res.error;
    }

    if (error || !savedData) {
      console.error('Supabase error saving article:', error);
      return { success: false, error: error?.message || 'خطا در ذخیره مقاله در دیتابیس', code: 500 };
    }

    return {
      success: true,
      article: mapRowToArticle(savedData),
      isUpdate,
    };
  } catch (err: unknown) {
    console.error('Exception in createArticle():', err);
    const msg = err instanceof Error ? err.message : 'Internal server error';
    return { success: false, error: msg, code: 500 };
  }
}

export async function updateArticle(
  targetSlug: string,
  data: Partial<CreateArticleData>
): Promise<{ success: boolean; article?: Article; error?: string; code?: number }> {
  try {
    const supabase = getSupabaseAdmin();
    const cleanTargetSlug = targetSlug.trim();

    const { data: existingRow, error: findError } = await supabase
      .from('articles')
      .select('*')
      .eq('slug', cleanTargetSlug)
      .maybeSingle();

    if (findError || !existingRow) {
      return { success: false, error: 'مقاله مورد نظر یافت نشد', code: 404 };
    }

    const existing = mapRowToArticle(existingRow as Record<string, unknown>);
    const newSlug = data.slug ? data.slug.trim() : existing.slug;

    // Check slug conflict if slug is being changed
    if (newSlug !== existing.slug) {
      const { data: conflictRow } = await supabase
        .from('articles')
        .select('id')
        .eq('slug', newSlug)
        .maybeSingle();

      if (conflictRow) {
        return { success: false, error: 'اسلاگ وارد شده قبلاً برای مقاله دیگری استفاده شده است', code: 400 };
      }
    }

    const now = new Date().toISOString();
    const newContent = data.content !== undefined ? data.content : (existing.content || '');
    const wordCount = newContent ? newContent.trim().split(/\s+/).filter(Boolean).length : (existing.wordCount || 0);

    const newStatus = data.status || existing.status;
    let publishedAt = existing.publishedAt;
    if (newStatus === 'published' && !publishedAt) {
      publishedAt = now;
    } else if (newStatus !== 'published') {
      publishedAt = null;
    }

    const updatedArticle: Article = {
      ...existing,
      title: data.title !== undefined ? data.title.trim() : existing.title,
      slug: newSlug,
      status: newStatus,
      category: (data.category !== undefined && data.category.trim()) ? data.category.trim() : existing.category,
      excerpt: data.excerpt !== undefined ? data.excerpt : existing.excerpt,
      content: newContent,
      metaTitle: data.metaTitle !== undefined ? data.metaTitle : existing.metaTitle,
      metaDescription: data.metaDescription !== undefined ? data.metaDescription : existing.metaDescription,
      keywords: Array.isArray(data.keywords) ? data.keywords : existing.keywords,
      primaryKeyword: data.primaryKeyword !== undefined ? data.primaryKeyword : existing.primaryKeyword,
      schema: data.schema !== undefined ? data.schema : existing.schema,
      wordCount,
      updatedAt: now,
      publishedAt,
    };

    const row = mapArticleToRow(updatedArticle);

    const { data: savedData, error: updateError } = await supabase
      .from('articles')
      .update(row)
      .eq('id', existingRow.id)
      .select()
      .single();

    if (updateError || !savedData) {
      console.error('Supabase error updating article:', updateError);
      return { success: false, error: updateError?.message || 'خطا در به‌روزرسانی مقاله', code: 500 };
    }

    return { success: true, article: mapRowToArticle(savedData as Record<string, unknown>) };
  } catch (err: unknown) {
    console.error('Exception in updateArticle():', err);
    const msg = err instanceof Error ? err.message : 'Internal server error';
    return { success: false, error: msg, code: 500 };
  }
}

export async function updateArticleStatus(
  slug: string,
  status: ArticleStatus
): Promise<{ success: boolean; article?: Article; error?: string; code?: number }> {
  try {
    const supabase = getSupabaseAdmin();
    const cleanSlug = slug.trim();

    const { data: existingRow, error: findError } = await supabase
      .from('articles')
      .select('*')
      .eq('slug', cleanSlug)
      .maybeSingle();

    if (findError || !existingRow) {
      return { success: false, error: 'مقاله مورد نظر یافت نشد', code: 404 };
    }

    const now = new Date().toISOString();
    let publishedAt = existingRow.published_at;
    if (status === 'published' && !publishedAt) {
      publishedAt = now;
    } else if (status !== 'published') {
      publishedAt = null;
    }

    const { data: savedData, error: updateError } = await supabase
      .from('articles')
      .update({
        status,
        published_at: publishedAt,
        updated_at: now,
      })
      .eq('id', existingRow.id)
      .select()
      .single();

    if (updateError || !savedData) {
      console.error('Supabase error updating status:', updateError);
      return { success: false, error: updateError?.message || 'خطا در تغییر وضعیت مقاله', code: 500 };
    }

    return { success: true, article: mapRowToArticle(savedData as Record<string, unknown>) };
  } catch (err: unknown) {
    console.error('Exception in updateArticleStatus():', err);
    const msg = err instanceof Error ? err.message : 'Internal server error';
    return { success: false, error: msg, code: 500 };
  }
}

export async function deleteArticle(
  slug: string
): Promise<{ success: boolean; error?: string; code?: number }> {
  try {
    const supabase = getSupabaseAdmin();
    const cleanSlug = slug.trim();

    const { data: existingRow } = await supabase
      .from('articles')
      .select('id')
      .eq('slug', cleanSlug)
      .maybeSingle();

    if (!existingRow) {
      return { success: false, error: 'مقاله مورد نظر یافت نشد', code: 404 };
    }

    const { error: delError } = await supabase
      .from('articles')
      .delete()
      .eq('id', existingRow.id);

    if (delError) {
      console.error('Supabase error deleting article:', delError);
      return { success: false, error: delError.message, code: 500 };
    }

    return { success: true };
  } catch (err: unknown) {
    console.error('Exception in deleteArticle():', err);
    const msg = err instanceof Error ? err.message : 'Internal server error';
    return { success: false, error: msg, code: 500 };
  }
}
