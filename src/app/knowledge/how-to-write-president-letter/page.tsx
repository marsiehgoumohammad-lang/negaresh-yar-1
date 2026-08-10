import { notFound } from 'next/navigation';
import { howToWritePresidentLetterMetadata } from '@/data/knowledge/how-to-write-president-letter';
import { KnowledgeArticleTemplate } from '@/components/knowledge/KnowledgeArticleTemplate';
import { getArticleBySlug } from '@/lib/stores/articles-store';
import { adaptArticleToKnowledgeData } from '@/lib/knowledge-adapter';

export const metadata = howToWritePresidentLetterMetadata;

export default function Page() {
  const article = getArticleBySlug('how-to-write-president-letter');
  if (!article || article.status !== 'published') {
    notFound();
  }

  const data = adaptArticleToKnowledgeData(article);
  return <KnowledgeArticleTemplate data={data} />;
}
