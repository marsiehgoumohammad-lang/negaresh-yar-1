import { notFound } from 'next/navigation';
import { howToReadCourtVerdictMetadata } from '@/data/knowledge/how-to-read-court-verdict';
import { KnowledgeArticleTemplate } from '@/components/knowledge/KnowledgeArticleTemplate';
import { getArticleBySlug } from '@/lib/stores/articles-store';
import { adaptArticleToKnowledgeData } from '@/lib/knowledge-adapter';

export const metadata = howToReadCourtVerdictMetadata;

export default function Page() {
  const article = getArticleBySlug('how-to-read-court-verdict');
  if (!article || article.status !== 'published') {
    notFound();
  }

  const data = adaptArticleToKnowledgeData(article);
  return <KnowledgeArticleTemplate data={data} />;
}
