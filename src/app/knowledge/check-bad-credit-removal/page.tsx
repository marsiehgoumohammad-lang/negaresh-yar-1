import { checkBadCreditRemovalData, checkBadCreditRemovalMetadata } from '@/data/knowledge/check-bad-credit-removal';
import { KnowledgeArticleTemplate } from '@/components/knowledge/KnowledgeArticleTemplate';

export const metadata = checkBadCreditRemovalMetadata;

export default function Page() {
  return <KnowledgeArticleTemplate data={checkBadCreditRemovalData} />;
}
