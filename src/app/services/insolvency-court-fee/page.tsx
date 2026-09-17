import React from 'react';
import { LandingPageTemplate } from '@/components/services/LandingPageTemplate';
import {
  insolvencyCourtFeeData,
  insolvencyCourtFeeMetadata,
} from '@/data/services/insolvency-court-fee';

export const metadata = insolvencyCourtFeeMetadata;

export default function InsolvencyCourtFeePage() {
  const data = insolvencyCourtFeeData;

  return <LandingPageTemplate data={data} />;
}
