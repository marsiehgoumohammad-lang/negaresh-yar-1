import type { Metadata } from "next";
import "./globals.css";
import { TouchFeedbackProvider } from "@/components/ui/TouchFeedbackProvider";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { siteMetadataConfig } from "@/lib/seo/site-metadata";

export const metadata: Metadata = siteMetadataConfig;


export const viewport = {
  themeColor: '#070B15',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <TouchFeedbackProvider>
          <PublicLayout>
            {children}
            <StickyMobileCTA />
          </PublicLayout>
        </TouchFeedbackProvider>
      </body>
    </html>
  );
}

