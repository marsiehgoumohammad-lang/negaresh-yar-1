import { notFound } from 'next/navigation';
import { whatIsLegalBriefMetadata } from '@/data/knowledge/what-is-legal-brief';
import { KnowledgeArticleTemplate } from '@/components/knowledge/KnowledgeArticleTemplate';
import { getArticleBySlug } from '@/lib/stores/articles-store';
import { adaptArticleToKnowledgeData } from '@/lib/knowledge-adapter';

export const metadata = whatIsLegalBriefMetadata;

export default async function Page() {
  const article = await getArticleBySlug('what-is-legal-brief');
  if (!article || article.status !== 'published') {
    notFound();
  }

  const data = adaptArticleToKnowledgeData(article);
  return <KnowledgeArticleTemplate data={data} />;
}
