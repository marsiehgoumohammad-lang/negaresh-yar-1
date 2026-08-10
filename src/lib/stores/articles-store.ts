import fs from 'fs';
import path from 'path';
import { Article, ArticleStatus } from './types';
import { ALL_KNOWLEDGE_ARTICLES, KNOWLEDGE_METADATA_MAP } from '@/data/knowledge';

const DATA_DIR = path.join(process.cwd(), 'data');
const FILE_PATH = path.join(DATA_DIR, 'articles.json');

function getInitialArticles(): Article[] {
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

function ensureDataDirectory() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

export function getArticles(): Article[] {
  ensureDataDirectory();
  if (!fs.existsSync(FILE_PATH)) {
    const initial = getInitialArticles();
    fs.writeFileSync(FILE_PATH, JSON.stringify(initial, null, 2), 'utf-8');
    return initial;
  }

  try {
    const raw = fs.readFileSync(FILE_PATH, 'utf-8');
    const articles = JSON.parse(raw);
    if (!Array.isArray(articles)) {
      const initial = getInitialArticles();
      fs.writeFileSync(FILE_PATH, JSON.stringify(initial, null, 2), 'utf-8');
      return initial;
    }
    return articles;
  } catch (err) {
    console.error('Error reading articles.json:', err);
    return getInitialArticles();
  }
}

export function saveArticles(articles: Article[]): boolean {
  try {
    ensureDataDirectory();
    fs.writeFileSync(FILE_PATH, JSON.stringify(articles, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error saving articles.json:', err);
    return false;
  }
}

export function getArticleBySlug(slug: string): Article | undefined {
  const articles = getArticles();
  return articles.find((a) => a.slug === slug);
}

export function getPublishedArticles(): Article[] {
  const articles = getArticles();
  return articles.filter((a) => a.status === 'published');
}

export interface CreateArticleData {
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  primaryKeyword?: string;
  schema?: string;
  status: ArticleStatus;
}

export function createArticle(data: CreateArticleData): { success: boolean; article?: Article; error?: string; code?: number; isUpdate?: boolean } {
  const articles = getArticles();
  const existingIndex = articles.findIndex((a) => a.slug === data.slug.trim());
  const now = new Date().toISOString();
  const wordCount = data.content ? data.content.trim().split(/\s+/).filter(Boolean).length : 0;

  if (existingIndex !== -1) {
    // Update existing article
    const existing = articles[existingIndex];

    let publishedAt = existing.publishedAt;
    if (data.status === 'published' && !publishedAt) {
      publishedAt = now;
    }

    const updatedArticle: Article = {
      ...existing,
      title: data.title.trim(),
      slug: data.slug.trim(),
      status: data.status,
      excerpt: data.excerpt !== undefined ? data.excerpt : existing.excerpt,
      content: data.content,
      metaTitle: data.metaTitle || data.title.trim(),
      metaDescription: data.metaDescription || data.excerpt || existing.metaDescription || '',
      keywords: Array.isArray(data.keywords) ? data.keywords : (existing.keywords || []),
      primaryKeyword: data.primaryKeyword || existing.primaryKeyword || '',
      schema: data.schema !== undefined ? data.schema : existing.schema,
      wordCount,
      updatedAt: now,
      publishedAt,
    };

    articles[existingIndex] = updatedArticle;
    saveArticles(articles);

    return { success: true, article: updatedArticle, isUpdate: true };
  }

  // Create new article
  const newArticle: Article = {
    id: `art-${Date.now()}`,
    title: data.title.trim(),
    slug: data.slug.trim(),
    status: data.status,
    excerpt: data.excerpt || '',
    content: data.content,
    metaTitle: data.metaTitle || data.title.trim(),
    metaDescription: data.metaDescription || data.excerpt || '',
    keywords: Array.isArray(data.keywords) ? data.keywords : [],
    primaryKeyword: data.primaryKeyword || '',
    schema: data.schema || '',
    wordCount,
    createdAt: now,
    updatedAt: now,
    publishedAt: data.status === 'published' ? now : null,
  };

  articles.unshift(newArticle);
  saveArticles(articles);

  return { success: true, article: newArticle, isUpdate: false };
}

export function updateArticle(
  targetSlug: string,
  data: Partial<CreateArticleData>
): { success: boolean; article?: Article; error?: string; code?: number } {
  const articles = getArticles();
  const index = articles.findIndex((a) => a.slug === targetSlug);

  if (index === -1) {
    return { success: false, error: 'مقاله مورد نظر یافت نشد', code: 404 };
  }

  const existing = articles[index];
  const now = new Date().toISOString();

  // If slug is changing, verify new slug isn't already taken by another article
  const newSlug = data.slug ? data.slug.trim() : existing.slug;
  if (newSlug !== existing.slug) {
    const slugConflict = articles.some((a, i) => i !== index && a.slug === newSlug);
    if (slugConflict) {
      return { success: false, error: 'اسلاگ وارد شده قبلاً برای مقاله دیگری استفاده شده است', code: 400 };
    }
  }

  const newContent = data.content !== undefined ? data.content : (existing.content || '');
  const wordCount = newContent ? newContent.trim().split(/\s+/).filter(Boolean).length : (existing.wordCount || 0);

  const newStatus = data.status || existing.status;
  let publishedAt = existing.publishedAt;
  if (newStatus === 'published' && !publishedAt) {
    publishedAt = now;
  }

  const updatedArticle: Article = {
    ...existing,
    title: data.title !== undefined ? data.title.trim() : existing.title,
    slug: newSlug,
    status: newStatus,
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

  articles[index] = updatedArticle;
  saveArticles(articles);

  return { success: true, article: updatedArticle };
}

export function updateArticleStatus(slug: string, status: ArticleStatus): { success: boolean; article?: Article; error?: string; code?: number } {
  const articles = getArticles();
  const index = articles.findIndex((a) => a.slug === slug);

  if (index === -1) {
    return { success: false, error: 'مقاله مورد نظر یافت نشد', code: 404 };
  }

  const article = articles[index];
  const now = new Date().toISOString();

  let publishedAt = article.publishedAt;
  if (status === 'published' && !publishedAt) {
    publishedAt = now;
  }

  const updatedArticle: Article = {
    ...article,
    status,
    publishedAt,
    updatedAt: now,
  };

  articles[index] = updatedArticle;
  saveArticles(articles);

  return { success: true, article: updatedArticle };
}

export function deleteArticle(slug: string): { success: boolean; error?: string; code?: number } {
  const articles = getArticles();
  const index = articles.findIndex((a) => a.slug === slug);

  if (index === -1) {
    return { success: false, error: 'مقاله مورد نظر یافت نشد', code: 404 };
  }

  articles.splice(index, 1);
  saveArticles(articles);

  return { success: true };
}
