import { sayadCheckRulesData, sayadCheckRulesMetadata } from '@/data/knowledge/sayad-check-rules';
import { KnowledgeArticleTemplate } from '@/components/knowledge/KnowledgeArticleTemplate';

export const metadata = sayadCheckRulesMetadata;

export default function Page() {
  return <KnowledgeArticleTemplate data={sayadCheckRulesData} />;
}
