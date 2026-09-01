import { Metadata } from 'next';
import { LawyerPartnershipTemplate } from '@/components/lawyers/LawyerPartnershipTemplate';

export const metadata: Metadata = {
  title: 'همکاری با وکلای دادگستری در سراسر کشور | نگارش یار',
  description:
    'دعوت به همکاری از وکلای پایه یک دادگستری در ۳۱ استان ایران جهت ارجاع پرونده‌های تخصصی با حفظ محرمانگی کامل و پایبندی به انصاف مالی.',
  alternates: {
    canonical: 'https://www.negaresh-yar.ir/lawyer-partnership',
  },
  openGraph: {
    title: 'همکاری با وکلای دادگستری در سراسر کشور | نگارش یار',
    description:
      'دعوت به همکاری از وکلای محترم دادگستری در سراسر ایران جهت هماهنگی و ارجاع پرونده‌های تخصصی.',
    url: 'https://www.negaresh-yar.ir/lawyer-partnership',
    siteName: 'نگارش یار',
    locale: 'fa_IR',
    type: 'website',
  },
};

export default function LawyerPartnershipPage() {
  return <LawyerPartnershipTemplate />;
}
