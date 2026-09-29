import { checkGuideData, checkGuideMetadata } from '@/data/knowledge/check-guide';
import { KnowledgeArticleTemplate } from '@/components/knowledge/KnowledgeArticleTemplate';

export const metadata = checkGuideMetadata;

export default function Page() {
  return <KnowledgeArticleTemplate data={checkGuideData} />;
}
