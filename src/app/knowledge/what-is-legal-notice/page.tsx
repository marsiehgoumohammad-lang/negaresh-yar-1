import { notFound } from 'next/navigation';
import { whatIsLegalNoticeMetadata } from '@/data/knowledge/what-is-legal-notice';
import { KnowledgeArticleTemplate } from '@/components/knowledge/KnowledgeArticleTemplate';
import { getArticleBySlug } from '@/lib/stores/articles-store';
import { adaptArticleToKnowledgeData } from '@/lib/knowledge-adapter';

export const metadata = whatIsLegalNoticeMetadata;

export default async function Page() {
  const article = await getArticleBySlug('what-is-legal-notice');
  if (!article || article.status !== 'published') {
    notFound();
  }
  const data = adaptArticleToKnowledgeData(article);
  return <KnowledgeArticleTemplate data={data} />;
}
