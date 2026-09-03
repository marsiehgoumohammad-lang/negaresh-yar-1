import React from 'react';
import { howToAppealCourtDecisionData, howToAppealCourtDecisionMetadata } from '@/data/knowledge/how-to-appeal-court-decision';
import { KnowledgeArticleTemplate } from '@/components/knowledge/KnowledgeArticleTemplate';

export const metadata = howToAppealCourtDecisionMetadata;

export default function Page() {
  return <KnowledgeArticleTemplate data={howToAppealCourtDecisionData} />;
}

