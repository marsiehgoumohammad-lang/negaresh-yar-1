import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'پنل مدیریت | نگارش یار',
  description: 'سیستم مدیریت اداری و حقوقی نگارش یار',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
