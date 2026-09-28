import {
  citizenshipAndCivilRegistrationGuideData,
  citizenshipAndCivilRegistrationGuideMetadata,
} from '@/data/knowledge/citizenship-and-civil-registration-guide';
import { KnowledgeArticleTemplate } from '@/components/knowledge/KnowledgeArticleTemplate';

export const metadata = citizenshipAndCivilRegistrationGuideMetadata;

export default function Page() {
  return <KnowledgeArticleTemplate data={citizenshipAndCivilRegistrationGuideData} />;
}
