import { notFound } from 'next/navigation';
import { whatIsPetitionMetadata } from '@/data/knowledge/what-is-petition';
import { KnowledgeArticleTemplate } from '@/components/knowledge/KnowledgeArticleTemplate';
import { getArticleBySlug } from '@/lib/stores/articles-store';
import { adaptArticleToKnowledgeData } from '@/lib/knowledge-adapter';

export const metadata = whatIsPetitionMetadata;

export default function Page() {
  const article = getArticleBySlug('what-is-petition');
  if (!article || article.status !== 'published') {
    notFound();
  }

  const data = adaptArticleToKnowledgeData(article);
  return <KnowledgeArticleTemplate data={data} />;
}
