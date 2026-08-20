import type { Metadata } from "next";
import "./globals.css";
import { TouchFeedbackProvider } from "@/components/ui/TouchFeedbackProvider";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icon-48x48.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#070B15" />
      </head>
      <body>
        <TouchFeedbackProvider>
          {children}
        </TouchFeedbackProvider>
      </body>
    </html>
  );
}

