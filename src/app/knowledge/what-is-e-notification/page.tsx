import { notFound } from 'next/navigation';
import { whatIsENotificationMetadata } from '@/data/knowledge/what-is-e-notification';
import { KnowledgeArticleTemplate } from '@/components/knowledge/KnowledgeArticleTemplate';
import { getArticleBySlug } from '@/lib/stores/articles-store';
import { adaptArticleToKnowledgeData } from '@/lib/knowledge-adapter';

export const metadata = whatIsENotificationMetadata;

export default async function Page() {
  const article = await getArticleBySlug('what-is-e-notification');
  if (!article || article.status !== 'published') {
    notFound();
  }

  const data = adaptArticleToKnowledgeData(article);
  return <KnowledgeArticleTemplate data={data} />;
}
