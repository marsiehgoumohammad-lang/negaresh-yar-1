import { notFound } from 'next/navigation';
import { petitionVsComplaintMetadata } from '@/data/knowledge/petition-vs-complaint';
import { KnowledgeArticleTemplate } from '@/components/knowledge/KnowledgeArticleTemplate';
import { getArticleBySlug } from '@/lib/stores/articles-store';
import { adaptArticleToKnowledgeData } from '@/lib/knowledge-adapter';

export const metadata = petitionVsComplaintMetadata;

export default async function Page() {
  const article = await getArticleBySlug('petition-vs-complaint');
  if (!article || article.status !== 'published') {
    notFound();
  }

  const data = adaptArticleToKnowledgeData(article);
  return <KnowledgeArticleTemplate data={data} />;
}
