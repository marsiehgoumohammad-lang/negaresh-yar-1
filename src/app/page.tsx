import React from 'react';
import { Metadata } from 'next';
import { Hero } from '@/components/home/hero';
import { QuickValueStrip } from '@/components/home/quick-value-strip';
import { ServiceSelection } from '@/components/home/service-selection';
import { HowItWorks } from '@/components/home/how-it-works';
import { RealSamplePreview } from '@/components/home/real-sample-preview';
import { WhyNegareshYar } from '@/components/home/why-negaresh-yar';
import { BrandPersonality } from '@/components/home/brand-personality';
import { SampleLibraryHub } from '@/components/home/sample-library-hub';
import { SmartServices } from '@/components/home/smart-services';
import { KnowledgeArticles } from '@/components/home/knowledge-articles';
import { TrustSection } from '@/components/home/trust-section';
import { LawyerService } from '@/components/home/lawyer-service';
import { FaqSection } from '@/components/home/faq-section';
import { FinalCta } from '@/components/home/final-cta';
import { buildHomepageSchemaGraph } from '@/lib/seo/homepage-schema-builder';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: {
    absolute: 'نگارش یار | سایت رسمی نگارش نامه اداری، دادخواست، لایحه و کافی نت آنلاین',
  },
  description:
    'سایت نگارش یار؛ سامانه تخصصی نگارش نامه اداری، عریضه نویسی، تنظیم دادخواست، شکواییه، لایحه دفاعیه و کافی نت آنلاین همراه با دانلود رایگان نمونه متن های حقوقی و اداری.',
  keywords: [
    'نگارش یار',
    'سایت نگارش یار',
    'سامانه نگارش یار',
    'نگارش نامه اداری',
    'تنظیم دادخواست آنلاین',
    'تنظیم شکواییه کیفری',
    'تنظیم لایحه دفاعیه',
    'عریضه نویسی',
    'کافی نت آنلاین',
    'نامه به رئیس جمهور',
    'نامه به دفتر مقام معظم رهبری',
    'تفسیر رای دادگاه',
    'اعسار از هزینه دادرسی',
    'اعتراض به رای دادگاه',
    'معرفی وکیل منصف',
  ],
  alternates: {
    canonical: 'https://www.negaresh-yar.ir/',
  },
  openGraph: {
    title: 'نگارش یار | سایت رسمی نگارش نامه اداری، دادخواست، لایحه و کافی نت آنلاین',
    description:
      'سایت نگارش یار؛ سامانه تخصصی نگارش نامه اداری، عریضه نویسی، تنظیم دادخواست، شکواییه، لایحه دفاعیه و کافی نت آنلاین همراه با دانلود رایگان نمونه متن های حقوقی و اداری.',
    url: 'https://www.negaresh-yar.ir/',
    siteName: 'نگارش یار',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'نگارش یار | سایت رسمی نگارش نامه اداری، دادخواست، لایحه و کافی نت آنلاین',
    description:
      'سایت نگارش یار؛ سامانه تخصصی نگارش نامه اداری، عریضه نویسی، تنظیم دادخواست، شکواییه، لایحه دفاعیه و کافی نت آنلاین.',
  },
};

export default function Home() {
  const homepageGraph = buildHomepageSchemaGraph();

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Unified Standard Entity Graph JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageGraph) }}
      />

      <main className="flex-1">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Quick Value / Trust Strip */}
        <QuickValueStrip />

        {/* 4. Service Selection */}
        <ServiceSelection />

        {/* 5. How It Works */}
        <HowItWorks />

        {/* 6. Real Sample Document */}
        <RealSamplePreview />

        {/* 7. Why Negaresh-Yar */}
        <WhyNegareshYar />

        {/* 8. Brand / Yara Personality */}
        <BrandPersonality />

        {/* 9. Sample Library / SEO Hub */}
        <SampleLibraryHub />

        {/* 10. Smart Services */}
        <SmartServices />

        {/* 11. Knowledge / Articles */}
        <KnowledgeArticles />

        {/* 12. Trust Section */}
        <TrustSection />

        {/* 13. Lawyer Service (Placed respectfully lower) */}
        <LawyerService />

        {/* 14. FAQ */}
        <FaqSection />

        {/* 15. Final CTA */}
        <FinalCta />
      </main>
    </div>
  );
}
