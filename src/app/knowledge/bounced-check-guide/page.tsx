import { bouncedCheckGuideData, bouncedCheckGuideMetadata } from '@/data/knowledge/bounced-check-guide';
import { KnowledgeArticleTemplate } from '@/components/knowledge/KnowledgeArticleTemplate';

export const metadata = bouncedCheckGuideMetadata;

export default function Page() {
  return <KnowledgeArticleTemplate data={bouncedCheckGuideData} />;
}
