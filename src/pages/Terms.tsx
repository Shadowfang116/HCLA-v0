import { Section } from '@/components/ui/Section';
import { GsapReveal } from '@/components/animations';

const Terms = () => {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-background">
        <div className="container-narrow">
          <GsapReveal>
            <p className="text-caption mb-4">Legal</p>
            <h1 className="mb-6">Terms of Service</h1>
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
            <h2 className="text-foreground">Acceptance of Terms</h2>
            <p>
              By accessing and using the Hameed Chohan Law Associates website, you accept 
              and agree to be bound by these Terms of Service and our Privacy Policy.
            </p>

            <h2 className="text-foreground">Use of Website</h2>
            <p>
              This website is provided for informational purposes only. The content on 
              this website does not constitute legal advice and should not be relied upon 
              as such. For specific legal advice, please contact us directly.
            </p>

            <h2 className="text-foreground">No Attorney-Client Relationship</h2>
            <p>
              Use of this website or communication through the contact form does not 
              create an attorney-client relationship. An attorney-client relationship 
              is only formed through a signed engagement letter.
            </p>

            <h2 className="text-foreground">Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and images, 
              is the property of HCLA and is protected by intellectual property laws. 
              Unauthorized use is prohibited.
            </p>

            <h2 className="text-foreground">Limitation of Liability</h2>
            <p>
              HCLA shall not be liable for any damages arising from the use of this 
              website or reliance on any information provided herein.
            </p>

            <h2 className="text-foreground">Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with 
              the laws of Pakistan. Any disputes shall be subject to the exclusive 
              jurisdiction of the courts of Lahore.
            </p>

            <h2 className="text-foreground">Contact</h2>
            <p>
              For questions about these Terms, please contact us at{' '}
              <a href="mailto:info@hcla.pk" className="text-accent hover:underline">
                info@hcla.pk
              </a>
              .
            </p>
          </div>
        </GsapReveal>
      </Section>
    </>
  );
};

export default Terms;
