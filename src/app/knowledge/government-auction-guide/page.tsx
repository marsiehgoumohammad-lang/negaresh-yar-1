import React from 'react';
import { governmentAuctionGuideData, governmentAuctionGuideMetadata } from '@/data/knowledge/government-auction-guide';
import { KnowledgeArticleTemplate } from '@/components/knowledge/KnowledgeArticleTemplate';
import { GovernmentAuctionGuideSection } from '@/components/knowledge/GovernmentAuctionGuideSection';

export const metadata = governmentAuctionGuideMetadata;

export default function Page() {
  const data = {
    ...governmentAuctionGuideData,
    customGuideContent: <GovernmentAuctionGuideSection />,
  };
  
  return <KnowledgeArticleTemplate data={data} />;
}
