import { notFound } from 'next/navigation';
import { howToRequestConditionalReleaseMetadata } from '@/data/knowledge/how-to-request-conditional-release';
import { KnowledgeArticleTemplate } from '@/components/knowledge/KnowledgeArticleTemplate';
import { getArticleBySlug } from '@/lib/stores/articles-store';
import { adaptArticleToKnowledgeData } from '@/lib/knowledge-adapter';

export const metadata = howToRequestConditionalReleaseMetadata;

export default function Page() {
  const article = getArticleBySlug('how-to-request-conditional-release');
  if (!article || article.status !== 'published') {
    notFound();
  }

  const data = adaptArticleToKnowledgeData(article);
  return <KnowledgeArticleTemplate data={data} />;
}
