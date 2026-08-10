import React from 'react';
import { SampleLandingPageTemplate } from '@/components/samples/SampleLandingPageTemplate';
import {
  sampleAppealData,
  sampleAppealMetadata,
} from '@/data/samples/appeal';

export const metadata = sampleAppealMetadata;

export default function AppealSamplePage() {
  return <SampleLandingPageTemplate data={sampleAppealData} />;
}
