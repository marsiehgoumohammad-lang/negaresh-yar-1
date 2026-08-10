import { notFound } from 'next/navigation';
import { howToWriteAdministrativeLetterMetadata } from '@/data/knowledge/how-to-write-administrative-letter';
import { KnowledgeArticleTemplate } from '@/components/knowledge/KnowledgeArticleTemplate';
import { getArticleBySlug } from '@/lib/stores/articles-store';
import { adaptArticleToKnowledgeData } from '@/lib/knowledge-adapter';

export const metadata = howToWriteAdministrativeLetterMetadata;

export default function Page() {
  const article = getArticleBySlug('how-to-write-administrative-letter');
  if (!article || article.status !== 'published') {
    notFound();
  }

  const data = adaptArticleToKnowledgeData(article);
  return <KnowledgeArticleTemplate data={data} />;
}
