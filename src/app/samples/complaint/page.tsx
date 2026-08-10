import React from 'react';
import { SampleLandingPageTemplate } from '@/components/samples/SampleLandingPageTemplate';
import {
  sampleComplaintData,
  sampleComplaintMetadata,
} from '@/data/samples/complaint';

export const metadata = sampleComplaintMetadata;

export default function ComplaintSamplePage() {
  return <SampleLandingPageTemplate data={sampleComplaintData} />;
}
