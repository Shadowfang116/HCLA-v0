import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GsapReveal } from '@/components/animations';

export function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container-wide">
        <GsapReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Ready to Discuss Your Legal Needs?</h2>
            <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto">
              Schedule a confidential consultation with our team. We provide 
              clear, strategic advice tailored to your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="xl"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                asChild
              >
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Schedule Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="heroOutline"
                size="xl"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground"
                asChild
              >
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </GsapReveal>
      </div>
    </section>
  );
}
