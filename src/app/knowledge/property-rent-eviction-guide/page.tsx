import { propertyRentEvictionGuideMetadata, propertyRentEvictionGuideData } from '@/data/knowledge/property-rent-eviction-guide';
import { KnowledgeArticleTemplate } from '@/components/knowledge/KnowledgeArticleTemplate';
import { getArticleBySlug } from '@/lib/stores/articles-store';
import { adaptArticleToKnowledgeData } from '@/lib/knowledge-adapter';

export const metadata = propertyRentEvictionGuideMetadata;

export default async function PropertyRentEvictionGuidePage() {
  const article = await getArticleBySlug('property-rent-eviction-guide');
  const data = article && article.status === 'published'
    ? adaptArticleToKnowledgeData(article)
    : propertyRentEvictionGuideData;
  return <KnowledgeArticleTemplate data={data} />;
}
