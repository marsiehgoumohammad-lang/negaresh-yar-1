import { Metadata } from 'next';
import { LawyerPillarTemplate } from '@/components/lawyers/LawyerPillarTemplate';

export const metadata: Metadata = {
  title: 'معرفی وکیل منصف در سراسر ایران | انتخاب وکیل متناسب با پرونده - نگارش یار',
  description:
    'راهنمای معرفی و انتخاب وکیل منصف در سراسر کشور با دستمزد عادلانه و پیگیری دلسوزانه برای پرونده‌های ملکی، کیفری، خانواده، چک و دیوان عدالت اداری در ۳۱ مرکز استان.',
  alternates: {
    canonical: 'https://negaresh-yar.ir/lawyer-referral',
  },
  openGraph: {
    title: 'معرفی وکیل منصف در سراسر ایران | نگارش یار',
    description:
      'راهنمای جامع دسترسی به وکیل منصف و متناسب با موضوع پرونده و شرایط مالی در ۳۱ استان کشور.',
    url: 'https://negaresh-yar.ir/lawyer-referral',
    siteName: 'نگارش یار',
    locale: 'fa_IR',
    type: 'website',
  },
};

export default function LawyerReferralPillarPage() {
  return <LawyerPillarTemplate />;
}
