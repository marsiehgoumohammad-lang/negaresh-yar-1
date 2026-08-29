import React from 'react';
import { LandingPageTemplate } from '@/components/services/LandingPageTemplate';
import { OnlineCafeGrid } from '@/components/services/OnlineCafeGrid';
import {
  onlineCafeData,
  onlineCafeMetadata,
} from '@/data/services/online-cafe';

export const metadata = onlineCafeMetadata;

export default function OnlineCafePage() {
  return (
    <main className="min-h-screen bg-[#070B15]">
      {/* Primary Landing Page Template containing H1, trust badges, process, FAQs & schemas */}
      <LandingPageTemplate data={onlineCafeData} />

      {/* Embedded Crawlable Services Grid */}
      <section className="bg-[#070B15] pb-12">
        <OnlineCafeGrid />
      </section>
    </main>
  );
}
