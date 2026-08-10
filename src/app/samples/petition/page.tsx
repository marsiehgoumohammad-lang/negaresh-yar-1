import React from 'react';
import { SampleLandingPageTemplate } from '@/components/samples/SampleLandingPageTemplate';
import {
  samplePetitionData,
  samplePetitionMetadata,
} from '@/data/samples/petition';

export const metadata = samplePetitionMetadata;

export default function PetitionSamplePage() {
  return <SampleLandingPageTemplate data={samplePetitionData} />;
}
