import { NextRequest, NextResponse } from 'next/server';
import { verifyApiToken } from '@/lib/api-auth';
import { getArticles, createArticle } from '@/lib/stores/articles-store';
import { ArticleStatus } from '@/lib/stores/types';

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
      { ok: false, error: 'Internal server error' },
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

    const {
      title,
      slug,
      content,
      excerpt,
      metaTitle,
      metaDescription,
      keywords,
      primaryKeyword,
      schema,
      status,
      category,
    } = body;

    // Validation
    if (!title || typeof title !== 'string' || !title.trim()) {
      return NextResponse.json(
        { ok: false, error: 'Title is required and cannot be empty' },
        { status: 400 }
      );
    }

    if (!slug || typeof slug !== 'string' || !slug.trim()) {
      return NextResponse.json(
        { ok: false, error: 'Slug is required and cannot be empty' },
        { status: 400 }
      );
    }

    if (!content || typeof content !== 'string' || !content.trim()) {
      return NextResponse.json(
        { ok: false, error: 'Content is required and cannot be empty' },
        { status: 400 }
      );
    }

    const allowedStatuses: ArticleStatus[] = ['draft', 'published', 'paused'];
    if (!status || !allowedStatuses.includes(status as ArticleStatus)) {
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

    let schemaStr = '';
    if (schema) {
      if (typeof schema === 'object') {
        schemaStr = JSON.stringify(schema);
      } else if (typeof schema === 'string' && schema.trim()) {
        try {
          JSON.parse(schema);
          schemaStr = schema.trim();
        } catch {
          return NextResponse.json(
            { ok: false, error: 'Schema must be a valid JSON string or object' },
            { status: 400 }
          );
        }
      }
    }

    const result = await createArticle({
      title: title.trim(),
      slug: slug.trim(),
      content,
      excerpt: typeof excerpt === 'string' ? excerpt.trim() : '',
      metaTitle: typeof metaTitle === 'string' ? metaTitle.trim() : '',
      metaDescription: typeof metaDescription === 'string' ? metaDescription.trim() : '',
      keywords: Array.isArray(keywords) ? keywords.map(String) : [],
      primaryKeyword: typeof primaryKeyword === 'string' ? primaryKeyword.trim() : '',
      schema: schemaStr,
      category: typeof category === 'string' && category.trim() ? category.trim() : undefined,
      status: status as ArticleStatus,
    });

    if (!result.success) {
      return NextResponse.json(
        { ok: false, error: result.error },
        { status: result.code || 400 }
      );
    }

    return NextResponse.json(
      {
        ok: true,
        article: result.article,
      },
      { status: result.isUpdate ? 200 : 201 }
    );
  } catch (err) {
    console.error('Error POST /api/articles:', err);
    return NextResponse.json(
      { ok: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
