import { sayadCheckExecutionArticle23Data, sayadCheckExecutionArticle23Metadata } from '@/data/knowledge/sayad-check-execution-article-23';
import { KnowledgeArticleTemplate } from '@/components/knowledge/KnowledgeArticleTemplate';

export const metadata = sayadCheckExecutionArticle23Metadata;

export default function Page() {
  return <KnowledgeArticleTemplate data={sayadCheckExecutionArticle23Data} />;
}
