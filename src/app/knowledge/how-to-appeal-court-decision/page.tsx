import { notFound } from 'next/navigation';
import { howToAppealCourtDecisionMetadata } from '@/data/knowledge/how-to-appeal-court-decision';
import { KnowledgeArticleTemplate } from '@/components/knowledge/KnowledgeArticleTemplate';
import { getArticleBySlug } from '@/lib/stores/articles-store';
import { adaptArticleToKnowledgeData } from '@/lib/knowledge-adapter';

export const metadata = howToAppealCourtDecisionMetadata;

export default function Page() {
  const article = getArticleBySlug('how-to-appeal-court-decision');
  if (!article || article.status !== 'published') {
    notFound();
  }

  const data = adaptArticleToKnowledgeData(article);
  return <KnowledgeArticleTemplate data={data} />;
}
