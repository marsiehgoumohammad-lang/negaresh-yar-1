import type { Metadata } from "next";
import Script from "next/script";
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
      <head>
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "ytdxwnkkif");`,
          }}
        />
      </head>
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

