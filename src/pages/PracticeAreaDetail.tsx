import { useParams, Link, Navigate } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/button';
import { GsapReveal, GsapStagger } from '@/components/animations';
import { practiceAreas } from '@/data/practiceAreas';
import { Building2, Scale, Lightbulb, Landmark, Home, Shield, ArrowLeft, ArrowRight, Check } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Scale,
  Lightbulb,
  Landmark,
  Home,
  Shield,
};

const PracticeAreaDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const area = practiceAreas.find((a) => a.slug === slug);

  if (!area) {
    return <Navigate to="/practice-areas" replace />;
  }

  const Icon = iconMap[area.icon] || Building2;

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-background">
        <div className="container-wide">
          <GsapReveal>
            <Link
              to="/practice-areas"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              All Practice Areas
            </Link>
            <div className="flex items-start gap-6 mb-6">
              <div className="p-4 bg-muted">
                <Icon className="h-8 w-8 text-foreground" />
              </div>
              <div>
                <p className="text-caption mb-2">{area.category}</p>
                <h1>{area.title}</h1>
              </div>
            </div>
            <div className="w-24 h-0.5 bg-accent mb-8" />
            <p className="text-subhead max-w-3xl">
              {area.description}
            </p>
          </GsapReveal>
        </div>
      </section>

      {/* Services */}
      <Section variant="muted">
        <GsapReveal>
          <h2 className="mb-8">Our Services</h2>
        </GsapReveal>
        <GsapStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {area.services.map((service) => (
            <div
              key={service}
              className="flex items-start gap-3 p-4 bg-card border border-border"
            >
              <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-sm">{service}</span>
            </div>
          ))}
        </GsapStagger>
      </Section>

      {/* Typical Matters */}
      <Section variant="default">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <GsapReveal>
            <h2 className="mb-8">Representative Matters</h2>
            <ul className="space-y-4">
              {area.typicalMatters.map((matter, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="text-accent font-bold">{String(index + 1).padStart(2, '0')}</span>
                  <span>{matter}</span>
                </li>
              ))}
            </ul>
          </GsapReveal>

          <GsapReveal delay={0.2}>
            <h2 className="mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {area.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="border border-border px-6"
                >
                  <AccordionTrigger className="text-left text-base hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </GsapReveal>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-wide">
          <GsapReveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  Need assistance with {area.title.toLowerCase()}?
                </h3>
                <p className="opacity-80">
                  Contact our team for a confidential consultation.
                </p>
              </div>
              <Button
                variant="secondary"
                size="xl"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                asChild
              >
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </GsapReveal>
        </div>
      </section>
    </Layout>
  );
};

export default PracticeAreaDetail;
