import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/button';
import { GsapReveal, GsapParallax } from '@/components/animations';

export function FounderSection() {
  return (
    <Section variant="muted">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <GsapReveal direction="left">
          <GsapParallax speed={0.2}>
            <div className="relative">
              <div className="aspect-[4/5] bg-primary/5 overflow-hidden">
                {/* Placeholder for founder image */}
                <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/10 flex items-end p-8">
                  <div className="text-muted-foreground/40 text-sm uppercase tracking-widest">
                    Founder Portrait
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-accent -z-10" />
            </div>
          </GsapParallax>
        </GsapReveal>

        {/* Content */}
        <GsapReveal direction="right" delay={0.2}>
          <div>
            <p className="text-caption mb-4">Founder</p>
            <h2 className="mb-6">Hameed Chohan</h2>
            <div className="w-16 h-0.5 bg-accent mb-8" />
            <p className="text-body text-muted-foreground mb-6">
              With over three decades of legal practice, Hameed Chohan founded HCLA 
              in 1995 with a singular vision: to provide world-class legal services 
              in Pakistan that rival the best global firms.
            </p>
            <p className="text-body text-muted-foreground mb-8">
              His practice spans complex commercial transactions, high-stakes litigation 
              before the Supreme Court, and strategic advisory work for multinational 
              corporations. He has been recognized by leading legal directories and 
              continues to mentor the next generation of legal professionals.
            </p>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/team/hameed-chohan" className="inline-flex items-center gap-2">
                Full Biography
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </GsapReveal>
      </div>
    </Section>
  );
}
