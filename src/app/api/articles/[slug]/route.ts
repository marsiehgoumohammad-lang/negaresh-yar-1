import { NextRequest, NextResponse } from 'next/server';
import { verifyApiToken } from '@/lib/api-auth';
import {
  getArticleBySlug,
  updateArticle,
  deleteArticle,
} from '@/lib/stores/articles-store';
import { ArticleStatus } from '@/lib/stores/types';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

type RouteContext = {
  params: Promise<{ slug: string }>;
};

export async function GET(
  req: NextRequest,
  { params }: RouteContext
) {
  if (!verifyApiToken(req)) {
    return NextResponse.json(
      { ok: false, error: 'Unauthorized: Invalid or missing API token' },
      { status: 401 }
    );
  }

  try {
    const { slug } = await params;

    if (!slug) {
      return NextResponse.json(
        { ok: false, error: 'Article slug is required' },
        { status: 400 }
      );
    }

    const article = await getArticleBySlug(slug);

    if (!article) {
      return NextResponse.json(
        { ok: false, error: 'مقاله مورد نظر یافت نشد' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      ok: true,
      article,
    });
  } catch (err) {
    console.error('Error GET /api/articles/[slug]:', err);

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

export async function PUT(
  req: NextRequest,
  { params }: RouteContext
) {
  if (!verifyApiToken(req)) {
    return NextResponse.json(
      { ok: false, error: 'Unauthorized: Invalid or missing API token' },
      { status: 401 }
    );
  }

  try {
    const { slug } = await params;

    if (!slug) {
      return NextResponse.json(
        { ok: false, error: 'Article slug is required' },
        { status: 400 }
      );
    }

    const existingArticle = await getArticleBySlug(slug);

    if (!existingArticle) {
      return NextResponse.json(
        { ok: false, error: 'مقاله مورد نظر یافت نشد' },
        { status: 404 }
      );
    }

    const body = await req.json().catch(() => null);

    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { ok: false, error: 'Invalid JSON request body' },
        { status: 400 }
      );
    }

    const input = body as Record<string, unknown>;

    const allowedStatuses: ArticleStatus[] = [
      'draft',
      'published',
      'paused',
    ];

    if (
      input.status !== undefined &&
      !allowedStatuses.includes(
        input.status as ArticleStatus
      )
    ) {
      return NextResponse.json(
        {
          ok: false,
          error:
            'Status must be one of: draft, published, paused',
        },
        { status: 400 }
      );
    }

    const changes = {
      ...(typeof input.title === 'string'
        ? { title: input.title }
        : {}),

      ...(typeof input.slug === 'string'
        ? { slug: input.slug }
        : {}),

      ...(typeof input.content === 'string'
        ? { content: input.content }
        : {}),

      ...(typeof input.excerpt === 'string'
        ? { excerpt: input.excerpt }
        : {}),

      ...(typeof input.category === 'string'
        ? { category: input.category }
        : {}),

      ...(typeof input.metaTitle === 'string'
        ? { metaTitle: input.metaTitle }
        : {}),

      ...(typeof input.metaDescription === 'string'
        ? { metaDescription: input.metaDescription }
        : {}),

      ...(typeof input.primaryKeyword === 'string'
        ? { primaryKeyword: input.primaryKeyword }
        : {}),

      ...(Array.isArray(input.keywords)
        ? {
            keywords: input.keywords.map(String),
          }
        : {}),

      ...(typeof input.schema === 'string'
        ? { schema: input.schema }
        : {}),

      ...(typeof input.wordCount === 'number'
        ? { wordCount: input.wordCount }
        : {}),

      ...(allowedStatuses.includes(
        input.status as ArticleStatus
      )
        ? {
            status: input.status as ArticleStatus,
          }
        : {}),

      ...(typeof input.examplesTitle === 'string'
        ? { examplesTitle: input.examplesTitle }
        : {}),

      ...(Array.isArray(input.examplesList)
        ? { examplesList: input.examplesList }
        : {}),

      ...(typeof input.commonMistakesTitle === 'string'
        ? {
            commonMistakesTitle:
              input.commonMistakesTitle,
          }
        : {}),

      ...(typeof input.commonMistakesSubtitle === 'string'
        ? {
            commonMistakesSubtitle:
              input.commonMistakesSubtitle,
          }
        : {}),

      ...(Array.isArray(input.commonMistakesList)
        ? {
            commonMistakesList:
              input.commonMistakesList,
          }
        : {}),

      ...(typeof input.legalNotesTitle === 'string'
        ? {
            legalNotesTitle:
              input.legalNotesTitle,
          }
        : {}),

      ...(Array.isArray(input.legalNotesList)
        ? {
            legalNotesList:
              input.legalNotesList,
          }
        : {}),

      ...(typeof input.faqTitle === 'string'
        ? { faqTitle: input.faqTitle }
        : {}),

      ...(Array.isArray(input.faqs)
        ? { faqs: input.faqs }
        : {}),

      ...(Array.isArray(input.relatedServices)
        ? {
            relatedServices:
              input.relatedServices,
          }
        : {}),

      ...(Array.isArray(input.relatedSamples)
        ? {
            relatedSamples:
              input.relatedSamples,
          }
        : {}),

      ...(Array.isArray(input.relatedArticles)
        ? {
            relatedArticles:
              input.relatedArticles,
          }
        : {}),

      ...(typeof input.ctaTitle === 'string'
        ? { ctaTitle: input.ctaTitle }
        : {}),

      ...(typeof input.ctaDescription === 'string'
        ? {
            ctaDescription:
              input.ctaDescription,
          }
        : {}),

      ...(typeof input.ctaPrimaryBtnText === 'string'
        ? {
            ctaPrimaryBtnText:
              input.ctaPrimaryBtnText,
          }
        : {}),

      ...(typeof input.ctaPrimaryHref === 'string'
        ? {
            ctaPrimaryHref:
              input.ctaPrimaryHref,
          }
        : {}),
    };

    const updatedArticle = await updateArticle(
      existingArticle.id,
      changes
    );

    return NextResponse.json({
      ok: true,
      article: updatedArticle,
    });
  } catch (err) {
    console.error('Error PUT /api/articles/[slug]:', err);

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

export async function PATCH(
  req: NextRequest,
  { params }: RouteContext
) {
  if (!verifyApiToken(req)) {
    return NextResponse.json(
      { ok: false, error: 'Unauthorized: Invalid or missing API token' },
      { status: 401 }
    );
  }

  try {
    const { slug } = await params;

    const existingArticle = await getArticleBySlug(slug);

    if (!existingArticle) {
      return NextResponse.json(
        { ok: false, error: 'مقاله مورد نظر یافت نشد' },
        { status: 404 }
      );
    }

    const body = await req.json().catch(() => null);

    const status = body?.status;

    const allowedStatuses: ArticleStatus[] = [
      'draft',
      'published',
      'paused',
    ];

    if (!allowedStatuses.includes(status)) {
      return NextResponse.json(
        {
          ok: false,
          error:
            'Status must be one of: draft, published, paused',
        },
        { status: 400 }
      );
    }

    const article = await updateArticle(
      existingArticle.id,
      { status }
    );

    return NextResponse.json({
      ok: true,
      article,
    });
  } catch (err) {
    console.error('Error PATCH /api/articles/[slug]:', err);

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

export async function DELETE(
  req: NextRequest,
  { params }: RouteContext
) {
  if (!verifyApiToken(req)) {
    return NextResponse.json(
      { ok: false, error: 'Unauthorized: Invalid or missing API token' },
      { status: 401 }
    );
  }

  try {
    const { slug } = await params;

    const existingArticle = await getArticleBySlug(slug);

    if (!existingArticle) {
      return NextResponse.json(
        { ok: false, error: 'مقاله مورد نظر یافت نشد' },
        { status: 404 }
      );
    }

    await deleteArticle(existingArticle.id);

    return NextResponse.json({
      ok: true,
    });
  } catch (err) {
    console.error('Error DELETE /api/articles/[slug]:', err);

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
