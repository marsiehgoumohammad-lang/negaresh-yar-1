import { NextRequest, NextResponse } from 'next/server';
import { verifyApiToken } from '@/lib/api-auth';
import {
  getArticleBySlug,
  updateArticle,
  updateArticleStatus,
  deleteArticle,
} from '@/lib/stores/articles-store';
import { ArticleStatus } from '@/lib/stores/types';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// GET /api/articles/[slug]
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
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
      { ok: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT /api/articles/[slug]
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
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

    const body = await req.json().catch(() => null);

    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { ok: false, error: 'Invalid JSON request body' },
        { status: 400 }
      );
    }

    const {
      title,
      slug: newSlug,
      content,
      excerpt,
      metaTitle,
      metaDescription,
      keywords,
      primaryKeyword,
      schema,
      status,
    } = body;

    const allowedStatuses: ArticleStatus[] = ['draft', 'published', 'paused'];
    if (status !== undefined && !allowedStatuses.includes(status as ArticleStatus)) {
      return NextResponse.json(
        { ok: false, error: 'Status must be one of: draft, published, paused' },
        { status: 400 }
      );
    }

    if (keywords !== undefined && !Array.isArray(keywords)) {
      return NextResponse.json(
        { ok: false, error: 'Keywords must be an array of strings' },
        { status: 400 }
      );
    }

    let schemaStr: string | undefined = undefined;
    if (schema !== undefined) {
      if (typeof schema === 'object') {
        schemaStr = JSON.stringify(schema);
      } else if (typeof schema === 'string') {
        schemaStr = schema;
      }
    }

    const result = await updateArticle(slug, {
      title: typeof title === 'string' ? title : undefined,
      slug: typeof newSlug === 'string' ? newSlug : undefined,
      content: typeof content === 'string' ? content : undefined,
      excerpt: typeof excerpt === 'string' ? excerpt : undefined,
      metaTitle: typeof metaTitle === 'string' ? metaTitle : undefined,
      metaDescription: typeof metaDescription === 'string' ? metaDescription : undefined,
      keywords: Array.isArray(keywords) ? keywords.map(String) : undefined,
      primaryKeyword: typeof primaryKeyword === 'string' ? primaryKeyword : undefined,
      schema: schemaStr,
      status: status as ArticleStatus | undefined,
    });

    if (!result.success) {
      return NextResponse.json(
        { ok: false, error: result.error },
        { status: result.code || 400 }
      );
    }

    return NextResponse.json({
      ok: true,
      article: result.article,
    });
  } catch (err) {
    console.error('Error PUT /api/articles/[slug]:', err);
    return NextResponse.json(
      { ok: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PATCH /api/articles/[slug]
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
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

    const body = await req.json().catch(() => null);

    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { ok: false, error: 'Invalid JSON request body' },
        { status: 400 }
      );
    }

    const { status } = body;

    const allowedStatuses: ArticleStatus[] = ['draft', 'published', 'paused'];
    if (!status || !allowedStatuses.includes(status as ArticleStatus)) {
      return NextResponse.json(
        { ok: false, error: 'Status must be one of: draft, published, paused' },
        { status: 400 }
      );
    }

    const result = await updateArticleStatus(slug, status as ArticleStatus);

    if (!result.success) {
      return NextResponse.json(
        { ok: false, error: result.error },
        { status: result.code || 400 }
      );
    }

    return NextResponse.json({
      ok: true,
      article: result.article,
    });
  } catch (err) {
    console.error('Error PATCH /api/articles/[slug]:', err);
    return NextResponse.json(
      { ok: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE /api/articles/[slug]
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
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

    const result = await deleteArticle(slug);

    if (!result.success) {
      return NextResponse.json(
        { ok: false, error: result.error },
        { status: result.code || 404 }
      );
    }

    return NextResponse.json({
      ok: true,
    });
  } catch (err) {
    console.error('Error DELETE /api/articles/[slug]:', err);
    return NextResponse.json(
      { ok: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
