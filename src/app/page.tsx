import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/home/hero';
import { Services } from '@/components/home/services';
import { AiIntro } from '@/components/home/ai-intro';
import { Features } from '@/components/home/features';
import { ArticlesPreview } from '@/components/home/articles-preview';

export const metadata: Metadata = {
  title: 'Negaresh Yar | Administrative Writing, Legal Documents and Online Services',
  description: 'Professional online services for administrative writing, legal document drafting, and AI-powered judicial document interpretation.',
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <AiIntro />
        <Features />
        <ArticlesPreview />
      </main>
      <Footer />
    </div>
  );
}
