import { Metadata } from 'next';
import { LawyerPillarTemplate } from '@/components/lawyers/LawyerPillarTemplate';

export const metadata: Metadata = {
  title: 'معرفی وکیل منصف و انتخاب وکیل مناسب پرونده | هزینه و دستمزد منصفانه - نگارش یار',
  description:
    'راهنمای جامع انتخاب وکیل مناسب پرونده و معرفی وکیل منصف در تهران، مشهد، کرج، اصفهان و سراسر کشور. شفافیت هزینه وکیل، دستمزد و حق‌الوکاله عادلانه متناسب با توان مالی موکل.',
  keywords: [
    'وکیل منصف',
    'وکیل با انصاف',
    'انتخاب وکیل مناسب پرونده',
    'هزینه وکیل',
    'دستمزد وکیل',
    'حق الوکاله وکیل',
    'وکیل متناسب با توان مالی',
    'وکیل منصف تهران',
    'وکیل منصف مشهد',
    'وکیل منصف کرج',
    'وکیل منصف اصفهان',
    'تفاوت تنظیم لایحه با وکیل',
  ],
  alternates: {
    canonical: 'https://www.negaresh-yar.ir/lawyer-referral',
  },
  openGraph: {
    title: 'معرفی وکیل منصف و انتخاب وکیل متناسب با پرونده و شرایط مالی - نگارش یار',
    description:
      'دسترسی به وکلای منصف، با‌تجربه و متعهد در سراسر کشور با حق‌الوکاله عادلانه و شفاف، متناسب با نوع پرونده و توان مالی موکل.',
    url: 'https://www.negaresh-yar.ir/lawyer-referral',
    siteName: 'نگارش یار',
    locale: 'fa_IR',
    type: 'website',
  },
};

export default function LawyerReferralPillarPage() {
  return <LawyerPillarTemplate />;
}

