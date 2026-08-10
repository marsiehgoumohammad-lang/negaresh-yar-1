import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getArticleBySlug } from '@/lib/stores/articles-store';
import { adaptArticleToKnowledgeData } from '@/lib/knowledge-adapter';
import { KnowledgeArticleTemplate } from '@/components/knowledge/KnowledgeArticleTemplate';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article || article.status !== 'published') {
    return {
      title: 'صفحه یافت نشد | نگارش یار',
    };
  }

  const title = article.metaTitle || article.title;
  const description = article.metaDescription || article.excerpt || '';
  const keywords = article.keywords && article.keywords.length > 0
    ? article.keywords
    : [article.category || 'حقوقی', 'نگارش یار', 'پایگاه دانش'];

  return {
    title: `${title} | نگارش یار`,
    description,
    keywords,
    alternates: {
      canonical: `https://www.negaresh-yar.ir/knowledge/${article.slug}`,
    },
    openGraph: {
      title: `${title} | نگارش یار`,
      description,
      url: `https://www.negaresh-yar.ir/knowledge/${article.slug}`,
      siteName: 'نگارش یار',
      type: 'article',
    },
  };
}

export default async function KnowledgeArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article || article.status !== 'published') {
    notFound();
  }

  const articleData = adaptArticleToKnowledgeData(article);

  return <KnowledgeArticleTemplate data={articleData} />;
}
