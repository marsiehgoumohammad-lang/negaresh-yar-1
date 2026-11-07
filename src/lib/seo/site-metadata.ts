import type { Metadata } from 'next';

export const siteMetadataConfig: Metadata = {
  metadataBase: new URL('https://www.negaresh-yar.ir'),
  title: {
    default: 'نگارش یار | سایت رسمی نگارش نامه اداری، دادخواست، لایحه و کافی نت آنلاین',
    template: '%s | نگارش یار',
  },
  description:
    'سایت نگارش یار؛ سامانه تخصصی نگارش نامه اداری، عریضه نویسی، تنظیم دادخواست، شکواییه، لایحه دفاعیه و کافی نت آنلاین همراه با دانلود رایگان نمونه متن های حقوقی و اداری.',
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
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'نگارش یار',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'نگارش یار | سایت رسمی نگارش نامه اداری، دادخواست، لایحه و کافی نت آنلاین',
    description:
      'سایت نگارش یار؛ سامانه تخصصی نگارش نامه اداری، عریضه نویسی، تنظیم دادخواست، شکواییه، لایحه دفاعیه و کافی نت آنلاین.',
    images: ['/og-image.png'],
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
  },
  manifest: '/site.webmanifest',
};
