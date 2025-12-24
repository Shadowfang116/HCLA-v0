import { Layout } from '@/components/layout';
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
    <Layout>
      <HeroSection />
      <ProofStrip />
      <PracticeAreasPreview />
      <FounderSection />
      <TeamPreview />
      <UpdatesPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
