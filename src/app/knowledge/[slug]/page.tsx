import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getArticleBySlug } from '@/lib/stores/articles-store';
import { adaptArticleToKnowledgeData } from '@/lib/knowledge-adapter';
import { KnowledgeArticleTemplate } from '@/components/knowledge/KnowledgeArticleTemplate';
import { ALL_KNOWLEDGE_ARTICLES, KNOWLEDGE_METADATA_MAP } from '@/data/knowledge';

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

  const staticArticle = ALL_KNOWLEDGE_ARTICLES.find((a) => a.slug === slug);
  const isStaticNewer = Boolean(
    staticArticle?.dateModified &&
      article.updatedAt &&
      Date.parse(staticArticle.dateModified) > Date.parse(article.updatedAt)
  );

  const staticMeta = KNOWLEDGE_METADATA_MAP[slug as keyof typeof KNOWLEDGE_METADATA_MAP];
  const staticTitle =
    typeof staticMeta?.title === 'string'
      ? staticMeta.title
      : staticMeta?.title && typeof staticMeta.title === 'object' && 'absolute' in staticMeta.title
      ? String(staticMeta.title.absolute || '')
      : '';

  const rawTitle = (
    (isStaticNewer ? staticTitle : '') ||
    article.metaTitle ||
    article.title ||
    staticTitle ||
    ''
  ).trim();
  const cleanTitle = rawTitle.replace(/\s*[-|]\s*نگارش یار\s*$/g, '').trim();
  const baseTitle = cleanTitle;
  const fullSeoTitle = `${cleanTitle} | نگارش یار`;

  const staticDesc = typeof staticMeta?.description === 'string' ? staticMeta.description.trim() : '';
  const preferredMetaDesc = isStaticNewer && staticDesc ? staticDesc : (article.metaDescription || '').trim();
  const rawDesc = (preferredMetaDesc || article.excerpt || staticDesc || '').trim();
  let description = '';
  if (preferredMetaDesc && preferredMetaDesc.length >= 30) {
    description = preferredMetaDesc;
  } else if (rawDesc && rawDesc.length >= 30 && rawDesc.length <= 100) {
    description = `راهنمای کامل ${baseTitle}؛ ${rawDesc.replace(/\.$/, '')} + دانلود نمونه متن و مشاوره تخصصی در نگارش یار.`;
  } else {
    description = `راهنمای گام به گام و حقوقی ${baseTitle} همراه با تشریح مواد قانونی، مواعد رسمی، دانلود رایگان نمونه متن و مشاوره تنظیم در نگارش یار.`;
  }

  const staticKeywords = Array.isArray(staticMeta?.keywords)
    ? staticMeta.keywords
    : typeof staticMeta?.keywords === 'string'
    ? [staticMeta.keywords]
    : undefined;

  const keywords =
    isStaticNewer && staticKeywords && staticKeywords.length > 0
      ? staticKeywords
      : article.keywords && article.keywords.length > 0
      ? article.keywords
      : staticKeywords && staticKeywords.length > 0
      ? staticKeywords
      : [article.category || 'حقوقی', baseTitle, `راهنمای ${baseTitle}`, 'نگارش یار', 'پایگاه دانش'];
  const customOgImages = staticMeta?.openGraph && 'images' in staticMeta.openGraph ? staticMeta.openGraph.images : undefined;
  const ogImages = Array.isArray(customOgImages) && customOgImages.length > 0
    ? customOgImages
    : [
        {
          url: 'https://www.negaresh-yar.ir/og-image.png',
          width: 1200,
          height: 630,
          alt: 'نگارش یار',
        },
      ];

  const customTwitterImages = staticMeta?.twitter && 'images' in staticMeta.twitter ? staticMeta.twitter.images : undefined;
  const twitterImages = Array.isArray(customTwitterImages) && customTwitterImages.length > 0
    ? customTwitterImages
    : ['https://www.negaresh-yar.ir/og-image.png'];

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
      locale: 'fa_IR',
      type: 'article',
      images: ogImages,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullSeoTitle,
      description,
      images: twitterImages,
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
