import { Layout } from '@/components/layout';
import { Section } from '@/components/ui/Section';
import { GsapReveal } from '@/components/animations';

const Disclaimer = () => {
  return (
    <Layout>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-background">
        <div className="container-narrow">
          <GsapReveal>
            <p className="text-caption mb-4">Legal</p>
            <h1 className="mb-6">Legal Disclaimer</h1>
            <div className="w-24 h-0.5 bg-accent mb-8" />
            <p className="text-muted-foreground">
              Last updated: December 2024
            </p>
          </GsapReveal>
        </div>
      </section>

      <Section variant="default" size="narrow">
        <GsapReveal>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <h2 className="text-foreground">General Disclaimer</h2>
            <p>
              The information provided on this website is for general informational 
              purposes only and does not constitute legal advice. While we strive to 
              keep the information accurate and up-to-date, we make no representations 
              or warranties of any kind about the completeness, accuracy, reliability, 
              or suitability of the information.
            </p>

            <h2 className="text-foreground">No Legal Advice</h2>
            <p>
              Nothing on this website should be construed as legal advice. The 
              transmission of information through this website does not establish 
              an attorney-client relationship, and you should not act upon any 
              information without seeking professional legal counsel.
            </p>

            <h2 className="text-foreground">Confidentiality Notice</h2>
            <p>
              Please be aware that any information you send to us through this website 
              before we have agreed to represent you is not protected by attorney-client 
              privilege. Do not send confidential or sensitive information until an 
              attorney-client relationship has been established.
            </p>

            <h2 className="text-foreground">Past Results</h2>
            <p>
              Any case results or representative matters described on this website do 
              not guarantee or predict similar outcomes in future cases. Each legal 
              matter is unique and depends on its specific facts and circumstances.
            </p>

            <h2 className="text-foreground">External Links</h2>
            <p>
              This website may contain links to external websites. We are not 
              responsible for the content, accuracy, or privacy practices of these 
              third-party sites.
            </p>

            <h2 className="text-foreground">Pakistan Updates</h2>
            <p>
              The "Pakistan Updates" section aggregates news and information from 
              third-party sources. We do not endorse or guarantee the accuracy of 
              this content. Users should verify information with original sources.
            </p>

            <h2 className="text-foreground">Regulatory Compliance</h2>
            <p>
              This website complies with the rules and regulations of the Pakistan 
              Bar Council and applicable professional conduct standards. HCLA is 
              licensed to practice law in Pakistan.
            </p>
          </div>
        </GsapReveal>
      </Section>
    </Layout>
  );
};

export default Disclaimer;
