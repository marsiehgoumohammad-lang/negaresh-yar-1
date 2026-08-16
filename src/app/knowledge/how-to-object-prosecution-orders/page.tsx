import { notFound } from 'next/navigation';
import { howToObjectProsecutionOrdersMetadata } from '@/data/knowledge/how-to-object-prosecution-orders';
import { KnowledgeArticleTemplate } from '@/components/knowledge/KnowledgeArticleTemplate';
import { getArticleBySlug } from '@/lib/stores/articles-store';
import { adaptArticleToKnowledgeData } from '@/lib/knowledge-adapter';

export const metadata = howToObjectProsecutionOrdersMetadata;

export default async function Page() {
  const article = await getArticleBySlug('how-to-object-prosecution-orders');
  if (!article || article.status !== 'published') {
    notFound();
  }

  const data = adaptArticleToKnowledgeData(article);
  return <KnowledgeArticleTemplate data={data} />;
}
