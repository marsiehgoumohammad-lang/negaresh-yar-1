import { guaranteeCheckRulesData, guaranteeCheckRulesMetadata } from '@/data/knowledge/guarantee-check-rules';
import { KnowledgeArticleTemplate } from '@/components/knowledge/KnowledgeArticleTemplate';

export const metadata = guaranteeCheckRulesMetadata;

export default function Page() {
  return <KnowledgeArticleTemplate data={guaranteeCheckRulesData} />;
}
