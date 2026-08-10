import React from 'react';
import { LandingPageTemplate } from '@/components/services/LandingPageTemplate';
import {
  petitionWritingData,
  petitionWritingMetadata,
} from '@/data/services/petition-writing';

export const metadata = petitionWritingMetadata;

export default function PetitionWritingPage() {
  return (
    <main className="min-h-screen bg-[#070B15]">
      <LandingPageTemplate data={petitionWritingData} />
    </main>
  );
}
