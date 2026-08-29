import { notFound } from 'next/navigation';
import { governmentAuctionGuideMetadata } from '@/data/knowledge/government-auction-guide';
import { KnowledgeArticleTemplate } from '@/components/knowledge/KnowledgeArticleTemplate';
import { getArticleBySlug } from '@/lib/stores/articles-store';
import { adaptArticleToKnowledgeData } from '@/lib/knowledge-adapter';

export const metadata = governmentAuctionGuideMetadata;

export default async function Page() {
  const article = await getArticleBySlug('government-auction-guide');
  if (!article || article.status !== 'published') {
    notFound();
  }

  const data = adaptArticleToKnowledgeData(article);
  return <KnowledgeArticleTemplate data={data} />;
}
