import { judgmentEnforcementGuideData, judgmentEnforcementGuideMetadata } from '@/data/knowledge/judgment-enforcement-guide';
import { KnowledgeArticleTemplate } from '@/components/knowledge/KnowledgeArticleTemplate';

export const metadata = judgmentEnforcementGuideMetadata;

export default function Page() {
  return <KnowledgeArticleTemplate data={judgmentEnforcementGuideData} />;
}
