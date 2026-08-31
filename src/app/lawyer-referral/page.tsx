import { Metadata } from 'next';
import { LawyerPillarTemplate } from '@/components/lawyers/LawyerPillarTemplate';

export const metadata: Metadata = {
  title: 'معرفی وکیل منصف در سراسر ایران | وکیل متناسب با پرونده و شرایط مالی - نگارش یار',
  description:
    'راهنمای معرفی وکیل منصف و باانصاف در سراسر کشور؛ انتخاب وکیل متناسب با موضوع پرونده (ملکی، کیفری، خانواده، چک) و شرایط مالی با حق‌الوکاله عادلانه و شفاف.',
  alternates: {
    canonical: 'https://www.negaresh-yar.ir/lawyer-referral',
  },
  openGraph: {
    title: 'معرفی وکیل منصف در سراسر ایران | وکیل متناسب با شرایط مالی - نگارش یار',
    description:
      'دسترسی به وکیل منصف و متعهد با حق‌الوکاله عادلانه و متناسب با موضوع دعوا و توان مالی در ۳۱ استان کشور.',
    url: 'https://www.negaresh-yar.ir/lawyer-referral',
    siteName: 'نگارش یار',
    locale: 'fa_IR',
    type: 'website',
  },
};

export default function LawyerReferralPillarPage() {
  return <LawyerPillarTemplate />;
}
