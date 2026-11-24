import React from 'react';
import { LandingPageTemplate } from '@/components/services/LandingPageTemplate';
import {
  impoundedAssetsAuctionDeliveryData,
  impoundedAssetsAuctionDeliveryMetadata,
} from '@/data/services/impounded-assets-auction-delivery';

export const metadata = impoundedAssetsAuctionDeliveryMetadata;

export default function ImpoundedAssetsAuctionDeliveryPage() {
  return <LandingPageTemplate data={impoundedAssetsAuctionDeliveryData} />;
}
