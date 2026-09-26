import React from 'react';
import { LandingPageTemplate } from '@/components/services/LandingPageTemplate';
import { ContractDraftingGuideSection } from '@/components/services/ContractDraftingGuideSection';
import {
  contractDraftingData,
  contractDraftingMetadata,
} from '@/data/services/contract-drafting';

export const metadata = contractDraftingMetadata;

export default function ContractDraftingPage() {
  const data = {
    ...contractDraftingData,
    customGuideContent: <ContractDraftingGuideSection />,
  };

  return <LandingPageTemplate data={data} />;
}
