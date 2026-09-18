import React from 'react';
import { LandingPageTemplate } from '@/components/services/LandingPageTemplate';
import { checkClaimData, checkClaimMetadata } from '@/data/services/check-claim';

export const metadata = checkClaimMetadata;

export default function CheckClaimPage() {
  const data = checkClaimData;
  return <LandingPageTemplate data={data} />;
}

