import React from 'react';
import { LandingPageTemplate } from '@/components/services/LandingPageTemplate';
import {
  appealData,
  appealMetadata,
} from '@/data/services/appeal';

export const metadata = appealMetadata;

export default function AppealPage() {
  return (
    <main className="min-h-screen bg-[#070B15]">
      <LandingPageTemplate data={appealData} />
    </main>
  );
}
