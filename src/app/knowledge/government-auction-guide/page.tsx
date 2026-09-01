import React from 'react';
import { governmentAuctionGuideData, governmentAuctionGuideMetadata } from '@/data/knowledge/government-auction-guide';
import { KnowledgeArticleTemplate } from '@/components/knowledge/KnowledgeArticleTemplate';

export const metadata = governmentAuctionGuideMetadata;

export default function Page() {
  const data = {
    ...governmentAuctionGuideData,
  };
  
  return <KnowledgeArticleTemplate data={data} />;
}
