import { notFound } from 'next/navigation';
import { howToWriteComplaintMetadata } from '@/data/knowledge/how-to-write-complaint';
import { KnowledgeArticleTemplate } from '@/components/knowledge/KnowledgeArticleTemplate';
import { getArticleBySlug } from '@/lib/stores/articles-store';
import { adaptArticleToKnowledgeData } from '@/lib/knowledge-adapter';

export const metadata = howToWriteComplaintMetadata;

export default function Page() {
  const article = getArticleBySlug('how-to-write-complaint');
  if (!article || article.status !== 'published') {
    notFound();
  }

  const data = adaptArticleToKnowledgeData(article);
  return <KnowledgeArticleTemplate data={data} />;
}
