import React from 'react';
import { LandingPageTemplate } from '@/components/services/LandingPageTemplate';
import {
  insolvencyPetitionData,
  insolvencyPetitionMetadata,
} from '@/data/services/insolvency-petition';

export const metadata = insolvencyPetitionMetadata;

export default function InsolvencyPetitionPage() {
  return (
    <main className="min-h-screen bg-[#070B15]">
      <LandingPageTemplate data={insolvencyPetitionData} />
    </main>
  );
}
