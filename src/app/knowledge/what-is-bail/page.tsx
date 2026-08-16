import { notFound } from 'next/navigation';
import { whatIsBailMetadata } from '@/data/knowledge/what-is-bail';
import { KnowledgeArticleTemplate } from '@/components/knowledge/KnowledgeArticleTemplate';
import { getArticleBySlug } from '@/lib/stores/articles-store';
import { adaptArticleToKnowledgeData } from '@/lib/knowledge-adapter';

export const metadata = whatIsBailMetadata;

export default async function Page() {
  const article = await getArticleBySlug('what-is-bail');
  if (!article || article.status !== 'published') {
    notFound();
  }

  const data = adaptArticleToKnowledgeData(article);
  return <KnowledgeArticleTemplate data={data} />;
}
