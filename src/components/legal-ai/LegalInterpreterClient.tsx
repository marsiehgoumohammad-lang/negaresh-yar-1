'use client';

import React, { useState, useRef } from 'react';
import { Container } from '@/components/ui/container';
import { Hero } from './Hero';
import { Trust } from './Trust';
import { Uploader } from './Uploader';
import { SelectedFileCard } from './SelectedFileCard';
import { AnalysisLoading } from './AnalysisLoading';
import { ExplanationCard } from './ExplanationCard';
import { CTA } from './CTA';

export interface AnalysisResult {
  simpleExplanation: string;
  ctaMessage: string;
}

export function LegalInterpreterClient() {
  const [file, setFile] = useState<File | null>(null);
  const [fileBase64, setFileBase64] = useState<string | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const resultsRef = useRef<HTMLDivElement>(null);

  const processFile = (selectedFile: File) => {
    const validTypes = [
      'application/pdf',
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/webp',
      'image/heic',
    ];

    if (!validTypes.includes(selectedFile.type) && !selectedFile.name.toLowerCase().endsWith('.pdf')) {
      setError('لطفاً فقط فایل با فرمت PDF یا تصویر (JPG, PNG, WEBP) آپلود کنید.');
      return;
    }

    if (selectedFile.size > 15 * 1024 * 1024) {
      setError('حجم فایل نباید بیشتر از ۱۵ مگابایت باشد.');
      return;
    }

    setError(null);
    setFile(selectedFile);

    if (selectedFile.type.startsWith('image/')) {
      const url = URL.createObjectURL(selectedFile);
      setFilePreview(url);
    } else {
      setFilePreview(null);
    }

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      setFileBase64(base64);
    };
    reader.onerror = () => {
      setError('خطا در خواندن فایل.');
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleRemoveFile = () => {
    setFile(null);
    setFileBase64(null);
    setFilePreview(null);
    setError(null);
    setResult(null);
  };

  const handleAnalyze = async () => {
    if (!file || !fileBase64) {
      setError('لطفاً ابتدا فایل اسکن، تصویر یا PDF سند خود را آپلود کنید.');
      return;
    }

    setError(null);
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch('/api/gemini/analyze-legal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fileBase64,
          mimeType: file.type || 'application/pdf',
          fileName: file.name,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'خطا در برقراری ارتباط با سیستم هوش مصنوعی');
      }

      setResult(data);

      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 200);
    } catch (err: unknown) {
      console.error(err);
      const errorMessage =
        err instanceof Error ? err.message : 'خطا در تحلیل سند. لطفاً مجدداً امتحان کنید.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-12">
      {/* 1. Hero */}
      <Hero />

      <Container>
        <div className="space-y-10">
          {/* 2. Trust Section */}
          <Trust />

          {/* 3. Uploader & Selected File Card */}
          <section className="space-y-4">
            {!file ? (
              <Uploader onFileSelected={processFile} error={error} />
            ) : (
              <SelectedFileCard
                file={file}
                filePreview={filePreview}
                onRemove={handleRemoveFile}
                onAnalyze={handleAnalyze}
                loading={loading}
              />
            )}
          </section>

          {/* 4. Loading Animation */}
          {loading && (
            <section className="pt-4">
              <AnalysisLoading />
            </section>
          )}

          {/* 5. One Result Card & Golden CTA */}
          <div ref={resultsRef} className="space-y-8 pt-4">
            {result && !loading && (
              <>
                <ExplanationCard simpleExplanation={result.simpleExplanation} />
                <CTA ctaMessage={result.ctaMessage} />
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
