import { NextRequest, NextResponse } from 'next/server';
import { verifyApiToken } from '@/lib/api-auth';
import {
  getArticles,
  createArticle,
  Article,
} from '@/lib/stores/articles-store';
import { ArticleStatus } from '@/lib/stores/types';;

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(req: NextRequest) {
  if (!verifyApiToken(req)) {
    return NextResponse.json(
      { ok: false, error: 'Unauthorized: Invalid or missing API token' },
      { status: 401 }
    );
  }

  try {
    const articles = await getArticles();

    return NextResponse.json({
      ok: true,
      articles,
    });
  } catch (err) {
    console.error('Error GET /api/articles:', err);

    return NextResponse.json(
      {
        ok: false,
        error: err instanceof Error
          ? err.message
          : 'Internal server error',
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  if (!verifyApiToken(req)) {
    return NextResponse.json(
      { ok: false, error: 'Unauthorized: Invalid or missing API token' },
      { status: 401 }
    );
  }

  try {
    const body = await req.json().catch(() => null);

    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { ok: false, error: 'Invalid JSON request body' },
        { status: 400 }
      );
    }

    const input = body as Record<string, unknown>;

    const title =
      typeof input.title === 'string'
        ? input.title.trim()
        : '';

    const slug =
      typeof input.slug === 'string'
        ? input.slug.trim()
        : '';

    if (!title) {
      return NextResponse.json(
        { ok: false, error: 'Title is required' },
        { status: 400 }
      );
    }

    if (!slug) {
      return NextResponse.json(
        { ok: false, error: 'Slug is required' },
        { status: 400 }
      );
    }

    const allowedStatuses: ArticleStatus[] = [
      'draft',
      'published',
      'paused',
    ];

    const status: ArticleStatus =
      allowedStatuses.includes(input.status as ArticleStatus)
        ? (input.status as ArticleStatus)
        : 'draft';

    const keywords = Array.isArray(input.keywords)
      ? input.keywords.map(String)
      : [];

    let schema = '';

    if (typeof input.schema === 'string') {
      schema = input.schema;
    } else if (
      input.schema &&
      typeof input.schema === 'object'
    ) {
      schema = JSON.stringify(input.schema);
    }

    const articlePayload = {
      title,
      slug,
      content:
        typeof input.content === 'string'
          ? input.content
          : '',
      excerpt:
        typeof input.excerpt === 'string'
          ? input.excerpt
          : '',
      category:
        typeof input.category === 'string'
          ? input.category
          : '',
      metaTitle:
        typeof input.metaTitle === 'string'
          ? input.metaTitle
          : '',
      metaDescription:
        typeof input.metaDescription === 'string'
          ? input.metaDescription
          : '',
      primaryKeyword:
        typeof input.primaryKeyword === 'string'
          ? input.primaryKeyword
          : '',
      keywords,
      schema,
      wordCount:
        typeof input.wordCount === 'number'
          ? input.wordCount
          : 0,
      status,

      examplesTitle:
        typeof input.examplesTitle === 'string'
          ? input.examplesTitle
          : undefined,
      examplesList:
        Array.isArray(input.examplesList)
          ? input.examplesList
          : undefined,

      commonMistakesTitle:
        typeof input.commonMistakesTitle === 'string'
          ? input.commonMistakesTitle
          : undefined,
      commonMistakesSubtitle:
        typeof input.commonMistakesSubtitle === 'string'
          ? input.commonMistakesSubtitle
          : undefined,
      commonMistakesList:
        Array.isArray(input.commonMistakesList)
          ? input.commonMistakesList
          : undefined,

      legalNotesTitle:
        typeof input.legalNotesTitle === 'string'
          ? input.legalNotesTitle
          : undefined,
      legalNotesList:
        Array.isArray(input.legalNotesList)
          ? input.legalNotesList
          : undefined,

      faqTitle:
        typeof input.faqTitle === 'string'
          ? input.faqTitle
          : undefined,
      faqs:
        Array.isArray(input.faqs)
          ? input.faqs
          : undefined,

      relatedServices:
        Array.isArray(input.relatedServices)
          ? input.relatedServices
          : undefined,
      relatedSamples:
        Array.isArray(input.relatedSamples)
          ? input.relatedSamples
          : undefined,
      relatedArticles:
        Array.isArray(input.relatedArticles)
          ? input.relatedArticles
          : undefined,

      ctaTitle:
        typeof input.ctaTitle === 'string'
          ? input.ctaTitle
          : undefined,
      ctaDescription:
        typeof input.ctaDescription === 'string'
          ? input.ctaDescription
          : undefined,
      ctaPrimaryBtnText:
        typeof input.ctaPrimaryBtnText === 'string'
          ? input.ctaPrimaryBtnText
          : undefined,
      ctaPrimaryHref:
        typeof input.ctaPrimaryHref === 'string'
          ? input.ctaPrimaryHref
          : undefined,
    } satisfies Omit<
      Article,
      'id' | 'createdAt' | 'updatedAt'
    >;

    const article = await createArticle(articlePayload);

    return NextResponse.json(
      {
        ok: true,
        article,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error('Error POST /api/articles:', err);

    return NextResponse.json(
      {
        ok: false,
        error: err instanceof Error
          ? err.message
          : 'Internal server error',
      },
      { status: 500 }
    );
  }
}
