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

