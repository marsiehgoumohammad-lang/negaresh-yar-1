import React from 'react';
import { LandingPageTemplate } from '@/components/services/LandingPageTemplate';
import { JudiciaryAuctionGuideSection } from '@/components/services/JudiciaryAuctionGuideSection';
import {
  judiciaryAuctionData,
  judiciaryAuctionMetadata,
} from '@/data/services/judiciary-auction';

export const metadata = judiciaryAuctionMetadata;

export default function JudiciaryAuctionPage() {
  const data = {
    ...judiciaryAuctionData,
    customGuideContent: <JudiciaryAuctionGuideSection />,
  };

  return (
    <main className="min-h-screen bg-[#070B15]">
      <LandingPageTemplate data={data} />
    </main>
  );
}

