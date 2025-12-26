import { Section } from '@/components/ui/Section';
import { GsapReveal } from '@/components/animations';

const Privacy = () => {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-background">
        <div className="container-narrow">
          <GsapReveal>
            <p className="text-caption mb-4">Legal</p>
            <h1 className="mb-6">Privacy Policy</h1>
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
            <h2 className="text-foreground">Introduction</h2>
            <p>
              Hameed Chohan Law Associates ("HCLA," "we," "our," or "us") respects your privacy 
              and is committed to protecting your personal information. This Privacy Policy 
              explains how we collect, use, disclose, and safeguard your information when you 
              visit our website or engage our legal services.
            </p>

            <h2 className="text-foreground">Information We Collect</h2>
            <p>We may collect information about you in various ways, including:</p>
            <ul>
              <li>Personal information you provide directly (name, email, phone number)</li>
              <li>Information collected automatically through cookies and similar technologies</li>
              <li>Information related to legal matters when you engage our services</li>
            </ul>

            <h2 className="text-foreground">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and maintain our legal services</li>
              <li>Respond to your inquiries and communications</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-foreground">Confidentiality</h2>
            <p>
              All information shared in the context of an attorney-client relationship is 
              protected by attorney-client privilege and will be treated with the highest 
              level of confidentiality in accordance with applicable professional rules 
              and legal requirements.
            </p>

            <h2 className="text-foreground">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect 
              your personal information against unauthorized access, alteration, disclosure, 
              or destruction.
            </p>

            <h2 className="text-foreground">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@hcla.pk" className="text-accent hover:underline">
                privacy@hcla.pk
              </a>
              .
            </p>
          </div>
        </GsapReveal>
      </Section>
    </>
  );
};

export default Privacy;
