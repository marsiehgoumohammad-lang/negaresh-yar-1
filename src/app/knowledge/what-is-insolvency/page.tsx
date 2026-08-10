import { notFound } from 'next/navigation';
import { whatIsInsolvencyMetadata } from '@/data/knowledge/what-is-insolvency';
import { KnowledgeArticleTemplate } from '@/components/knowledge/KnowledgeArticleTemplate';
import { getArticleBySlug } from '@/lib/stores/articles-store';
import { adaptArticleToKnowledgeData } from '@/lib/knowledge-adapter';

export const metadata = whatIsInsolvencyMetadata;

export default function Page() {
  const article = getArticleBySlug('what-is-insolvency');
  if (!article || article.status !== 'published') {
    notFound();
  }

  const data = adaptArticleToKnowledgeData(article);
  return <KnowledgeArticleTemplate data={data} />;
}
