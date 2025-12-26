import { Section } from '@/components/ui/Section';
import PageHero from '@/components/ui/PageHero';
import { Button } from '@/components/ui/button';
import { GsapReveal, GsapStagger, GsapParallax } from '@/components/animations';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { firm } from '@/content/hcla';

const values = [
  {
    title: 'Excellence',
    description: 'We pursue the highest standards in every matter we undertake, never settling for less than exceptional outcomes.',
  },
  {
    title: 'Integrity',
    description: 'Our reputation is built on unwavering ethical conduct and transparency in all client relationships.',
  },
  {
    title: 'Innovation',
    description: 'We embrace modern approaches to legal practice while respecting the foundations of law.',
  },
  {
    title: 'Client Focus',
    description: 'Every strategy is tailored to our clients\' unique circumstances and business objectives.',
  },
];

const timeline = [
  { year: String(firm.established), title: 'Foundation', description: 'HCLA established in Lahore with a focus on corporate law.' },
  { year: '2000', title: 'Expansion', description: 'Opened litigation practice and expanded team to 10 lawyers.' },
  { year: '2008', title: 'Recognition', description: 'First major international directory ranking received.' },
  { year: '2015', title: 'Specialization', description: 'Launched dedicated IP and technology practice.' },
  { year: '2020', title: 'Digital Transformation', description: 'Embraced technology for enhanced client service delivery.' },
  { year: 'Present', title: 'Leadership', description: 'Recognized as one of Pakistan\'s leading law firms.' },
];

const About = () => {
  return (
    <>
      <PageHero
        overline="About the Firm"
        title={firm.name}
      />

      {/* Story Section */}
      <Section variant="muted">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <GsapReveal>
            <h2 className="mb-6">Our Story</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p className="mb-6">
                HCLA was founded by Hameed Chohan with a clear vision: to establish 
                a law firm in Pakistan that could deliver services matching the 
                standards of the best international firms.
              </p>
              <p className="mb-6">
                From our beginnings as a boutique corporate practice, we have grown 
                into a full-service firm with expertise across corporate transactions, 
                dispute resolution, intellectual property, banking and finance, real 
                estate, and regulatory compliance.
              </p>
              <p>
                Today, we serve a diverse clientele including multinational corporations, 
                financial institutions, government entities, and high-net-worth individuals. 
                Our commitment to excellence and client service remains unchanged.
              </p>
            </div>
          </GsapReveal>

          <GsapReveal direction="right" delay={0.2}>
            <GsapParallax speed={0.15}>
              <div className="relative">
                <div className="aspect-[4/3] bg-primary/5 overflow-hidden">
                  <img 
                    src="/images/about-modern-office-lobby.jpg" 
                    alt="Modern office lobby"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-accent -z-10" />
              </div>
            </GsapParallax>
          </GsapReveal>
        </div>
      </Section>

      {/* Values */}
      <Section variant="default">
        <GsapReveal>
          <div className="text-center mb-16">
            <p className="text-caption mb-4">Guiding Principles</p>
            <h2>Our Values</h2>
          </div>
        </GsapReveal>

        <GsapStagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="p-8 bg-card border border-border"
            >
              <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </GsapStagger>
      </Section>

      {/* Timeline */}
      <Section variant="muted">
        <GsapReveal>
          <div className="text-center mb-16">
            <p className="text-caption mb-4">Our Journey</p>
            <h2>Milestones</h2>
          </div>
        </GsapReveal>

        <div className="max-w-3xl mx-auto">
          <GsapStagger className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

            {timeline.map((item, index) => (
              <div key={item.year} className="relative pl-20 pb-12 last:pb-0">
                {/* Year marker */}
                <div className="absolute left-0 top-0 w-16 h-16 bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {item.year}
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </GsapStagger>
        </div>
      </Section>

      {/* Founder Detail */}
      <Section variant="default">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <GsapReveal direction="left">
            <div className="relative">
              <div className="aspect-[3/4] bg-muted overflow-hidden rounded-sm">
                <img 
                  src="/team/abdul-hameed-chohan.jpg" 
                  alt="Abdul Hameed Chohan"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-accent -z-10" />
            </div>
          </GsapReveal>

          <GsapReveal direction="right" delay={0.2}>
            <p className="text-caption mb-4">Founder & Managing Partner</p>
            <h2 className="mb-6">Hameed Chohan</h2>
            <div className="w-16 h-0.5 bg-accent mb-8" />
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                Hameed Chohan is a distinguished legal practitioner with over three 
                decades of experience in Pakistani law. He holds an LL.M. from Harvard 
                Law School and began his career with leading international firms before 
                founding HCLA in {firm.established}.
              </p>
              <p>
                His practice focuses on complex corporate transactions, high-stakes 
                commercial litigation, and strategic advisory work. He has appeared 
                before the Supreme Court of Pakistan in numerous landmark cases and 
                is widely recognized as one of Pakistan's leading corporate lawyers.
              </p>
              <p>
                Mr. Chohan serves on the boards of several prominent organizations 
                and is a frequent speaker at legal conferences. He is committed to 
                mentoring young lawyers and advancing the legal profession in Pakistan.
              </p>
            </div>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/team/hameed-chohan" className="inline-flex items-center gap-2">
                View Full Profile
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </GsapReveal>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <GsapReveal>
            <h2 className="mb-6">Work With Us</h2>
            <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
              Ready to discuss how HCLA can assist with your legal needs? 
              Contact us for a confidential consultation.
            </p>
            <Button
              variant="secondary"
              size="xl"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              asChild
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </GsapReveal>
        </div>
      </section>
    </>
  );
};

export default About;
