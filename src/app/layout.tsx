import type { Metadata } from "next";
import "./globals.css";
import { TouchFeedbackProvider } from "@/components/ui/TouchFeedbackProvider";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.negaresh-yar.ir'),
  title: {
    default: "نگارش یار | سامانه آنلاین خدمات حقوقی، اداری و عریضه‌نویسی کشور",
    template: "%s | نگارش یار",
  },
  description: "سامانه هوشمند غیرحضوری تنظیم تخصصی دادخواست، شکواییه، لایحه دفاعیه، نامه‌های اداری، کافی نت آنلاین و تفسیر ابلاغیه ثنا و رای دادگاه با هوش مصنوعی.",
  alternates: {
    canonical: 'https://www.negaresh-yar.ir',
  },
  openGraph: {
    title: "نگارش یار | سامانه آنلاین خدمات حقوقی، اداری و عریضه‌نویسی کشور",
    description: "تنظیم تخصصی اوراق قضایی، دادخواست، لایحه، شکواییه، نامه‌های اداری و تفسیر هوشمند رای دادگاه به صورت ۱۰۰٪ غیرحضوری.",
    url: 'https://www.negaresh-yar.ir',
    siteName: 'نگارش یار',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "نگارش یار | سامانه آنلاین خدمات حقوقی، اداری و عریضه‌نویسی کشور",
    description: "تنظیم تخصصی اوراق قضایی، دادخواست، لایحه، شکواییه، نامه‌های اداری و کافی نت آنلاین.",
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
    icon: '/logo.jpg',
    shortcut: '/logo.jpg',
    apple: '/logo.jpg',
  },
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
          {children}
        </TouchFeedbackProvider>
      </body>
    </html>
  );
}

