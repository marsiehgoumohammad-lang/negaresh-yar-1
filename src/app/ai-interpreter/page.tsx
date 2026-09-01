import React from 'react';
import { Metadata } from 'next';
import { LegalInterpreterClient } from '@/components/legal-ai/LegalInterpreterClient';
import { InterpreterDocTypes } from '@/components/legal-ai/InterpreterDocTypes';
import { InterpreterEducationalHub } from '@/components/legal-ai/InterpreterEducationalHub';
import { InterpreterHowToReadSection } from '@/components/legal-ai/InterpreterHowToReadSection';
import { InterpreterConversionFunnel } from '@/components/legal-ai/InterpreterConversionFunnel';
import { InterpreterKnowledgeAndSamples } from '@/components/legal-ai/InterpreterKnowledgeAndSamples';
import { InterpreterTrustDisclaimer } from '@/components/legal-ai/InterpreterTrustDisclaimer';
import { InterpreterFaqSection } from '@/components/legal-ai/InterpreterFaqSection';
import { InterpreterJsonLd } from '@/components/legal-ai/InterpreterJsonLd';

export const metadata: Metadata = {
  title: 'تفسیر رای دادگاه و اوراق قضایی رایگان | تحلیل دادنامه و ابلاغیه | نگارش یار',
  description:
    'سامانه آنلاین تفسیر رای دادگاه، دادنامه، ابلاغیه ثنا، قرار منع تعقیب و اوراق قضایی به زبان ساده با هوش مصنوعی نگارش یار. فهم متن حکم دادگاه، مهلت اعتراض و راهنمای اقدام بعدی.',
  keywords: [
    'تفسیر رای دادگاه',
    'تفسیر رای دادگاه به زبان ساده',
    'تفسیر دادنامه',
    'معنی دادنامه چیست',
    'تفسیر ابلاغیه ثنا',
    'تفسیر حکم دادگاه',
    'تحلیل رای دادگاه',
    'رای دادگاه یعنی چه',
    'چگونه رای دادگاه را بخوانیم',
    'تشخیص برنده در رای دادگاه',
    'مهلت اعتراض به رای دادگاه',
    'تفسیر قرار دادسرا',
    'تفسیر قرار منع تعقیب',
    'تفسیر حکم غیابی',
    'تفسیر رای تجدیدنظر',
    'تفسیر اجرائیه دادگاه',
    'هوش مصنوعی حقوقی نگارش یار',
  ],
  alternates: {
    canonical: 'https://www.negaresh-yar.ir/ai-interpreter',
  },
  openGraph: {
    title: 'تفسیر رای دادگاه و اوراق قضایی رایگان | نگارش یار',
    description:
      'سامانه آنلاین و هوشمند تفسیر دادنامه، ابلاغیه ثنا، قرار منع تعقیب و اوراق قضایی به زبان ساده فارسی.',
    url: 'https://www.negaresh-yar.ir/ai-interpreter',
    siteName: 'نگارش یار',
    images: [
      {
        url: 'https://www.negaresh-yar.ir/logo.jpg',
        width: 800,
        height: 600,
        alt: 'نگارش یار - تفسیر رای دادگاه و اوراق قضایی',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تفسیر رای دادگاه و اوراق قضایی رایگان | نگارش یار',
    description:
      'تحلیل هوشمند دادنامه، ابلاغیه ثنا و احکام قضایی به زبان ساده همراه با تشخیص برنده پرونده و مهلت اعتراض.',
    images: ['https://www.negaresh-yar.ir/logo.jpg'],
  },
};

export default function AiInterpreterPage() {
  return (
    <div className="min-h-screen bg-[#070B15] text-white flex flex-col selection:bg-[#E5C158] selection:text-[#070B15]">
      {/* Structured Data JSON-LD for Search Engines */}
      <InterpreterJsonLd />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {/* Interactive Tool Section (Hero, Uploader, Gemini Analysis) */}
        <LegalInterpreterClient />

        {/* Server-Rendered Crawlable Document Types Section (Phase 4) */}
        <InterpreterDocTypes />

        {/* Educational Content Hub & High Intent Clusters (Phase 5 & 6) */}
        <InterpreterEducationalHub />

        {/* Step-by-Step "How to read a court verdict" guide */}
        <InterpreterHowToReadSection />

        {/* Contextual Conversion Funnel Section (Phase 8) */}
        <InterpreterConversionFunnel />

        {/* Knowledge Base & Sample Documents Connection (Phase 9 & 10) */}
        <InterpreterKnowledgeAndSamples />

        {/* YMYL Legal Safeguards & Trust Disclaimer (Phase 13) */}
        <InterpreterTrustDisclaimer />

        {/* Comprehensive FAQ Section with Schema (Phase 7) */}
        <InterpreterFaqSection />
      </main>
    </div>
  );
}
