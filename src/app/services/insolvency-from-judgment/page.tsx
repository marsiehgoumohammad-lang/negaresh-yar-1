import React from 'react';
import { LandingPageTemplate } from '@/components/services/LandingPageTemplate';
import { InsolvencyGuideSection } from '@/components/services/InsolvencyGuideSection';
import {
  insolvencyFromJudgmentData,
  insolvencyFromJudgmentMetadata,
} from '@/data/services/insolvency-from-judgment';

export const metadata = insolvencyFromJudgmentMetadata;

export default function InsolvencyFromJudgmentPage() {
  const data = {
    ...insolvencyFromJudgmentData,
    customGuideContent: <InsolvencyGuideSection />,
  };

  return <LandingPageTemplate data={data} />;
}
