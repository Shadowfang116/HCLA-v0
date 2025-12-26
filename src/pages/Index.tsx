import { NewsTicker } from '@/components/news/NewsTicker';
import {
  HeroSection,
  ProofStrip,
  PracticeAreasPreview,
  FounderSection,
  TeamPreview,
  UpdatesPreview,
  CTASection,
} from '@/components/home';

const Index = () => {
  return (
    <>
      <NewsTicker />
      <HeroSection />
      <ProofStrip />
      <PracticeAreasPreview />
      <FounderSection />
      <TeamPreview />
      <UpdatesPreview />
      <CTASection />
    </>
  );
};

export default Index;
