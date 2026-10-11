import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getArticleBySlug } from '@/lib/stores/articles-store';
import { adaptArticleToKnowledgeData } from '@/lib/knowledge-adapter';
import { KnowledgeArticleTemplate } from '@/components/knowledge/KnowledgeArticleTemplate';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article || article.status !== 'published') {
    return {
      title: 'صفحه یافت نشد | نگارش یار',
    };
  }

  const rawTitle = (article.metaTitle || article.title || '').trim();
  const cleanTitle = rawTitle.replace(/\s*[-|]\s*نگارش یار\s*$/g, '').trim();
  const baseTitle = cleanTitle;
  const fullSeoTitle = `${cleanTitle} | نگارش یار`;
  
  const rawDesc = (article.metaDescription || article.excerpt || '').trim();
  let description = '';
  if (article.metaDescription && article.metaDescription.trim().length >= 30) {
    description = article.metaDescription.trim();
  } else if (rawDesc && rawDesc.length >= 30 && rawDesc.length <= 100) {
    description = `راهنمای کامل ${baseTitle}؛ ${rawDesc.replace(/\.$/, '')} + دانلود نمونه متن و مشاوره تخصصی در نگارش یار.`;
  } else {
    description = `راهنمای گام به گام و حقوقی ${baseTitle} همراه با تشریح مواد قانونی، مواعد رسمی، دانلود رایگان نمونه متن و مشاوره تنظیم در نگارش یار.`;
  }

  const keywords = article.keywords && article.keywords.length > 0
    ? article.keywords
    : [article.category || 'حقوقی', baseTitle, `راهنمای ${baseTitle}`, 'نگارش یار', 'پایگاه دانش'];

  return {
    title: {
      absolute: fullSeoTitle,
    },
    description,
    keywords,
    alternates: {
      canonical: `https://www.negaresh-yar.ir/knowledge/${article.slug}`,
    },
    openGraph: {
      title: fullSeoTitle,
      description,
      url: `https://www.negaresh-yar.ir/knowledge/${article.slug}`,
      siteName: 'نگارش یار',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullSeoTitle,
      description,
    },
  };
}

export default async function KnowledgeArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article || article.status !== 'published') {
    notFound();
  }

  const articleData = adaptArticleToKnowledgeData(article);

  return <KnowledgeArticleTemplate data={articleData} />;
}
