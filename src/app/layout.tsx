import type { Metadata } from "next";
import "./globals.css";
import { TouchFeedbackProvider } from "@/components/ui/TouchFeedbackProvider";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { PublicLayout } from "@/components/layout/PublicLayout";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.negaresh-yar.ir'),
  title: {
    default: "نگارش یار | تنظیم دادخواست، لایحه و نامه اداری [دانلود رایگان نمونه + مشاوره]",
    template: "%s | نگارش یار",
  },
  description: "دانلود رایگان نمونه متن دادخواست، لایحه، شکواییه و نامه اداری + تنظیم فوری اوراق قضایی ثنا، کافی‌نت آنلاین و مشاوره تخصصی در سامانه نگارش یار.",
  alternates: {
    canonical: 'https://www.negaresh-yar.ir',
  },
  openGraph: {
    title: "نگارش یار | سامانه تنظیم دادخواست، لایحه و نامه اداری [دانلود رایگان + مشاوره]",
    description: "دانلود رایگان ۵۸ نمونه سند قضایی و اداری، تنظیم تخصصی دادخواست، شکواییه، لایحه دفاعیه، نامه‌های اداری و مشاوره آنلاین در نگارش یار.",
    url: 'https://www.negaresh-yar.ir',
    siteName: 'نگارش یار',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "نگارش یار | سامانه تنظیم دادخواست، لایحه و نامه اداری [دانلود رایگان + مشاوره]",
    description: "دانلود رایگان نمونه متن دادخواست، لایحه، شکواییه و نامه اداری + تنظیم تخصصی و مشاوره آنلاین در نگارش یار.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/icon-512x512.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export const viewport = {
  themeColor: '#070B15',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
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

