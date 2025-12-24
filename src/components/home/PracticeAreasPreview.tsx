import { Link } from 'react-router-dom';
import { ArrowUpRight, Building2, Scale, Lightbulb, Landmark, Home, Shield } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { GsapReveal, GsapStagger } from '@/components/animations';
import { practiceAreas } from '@/data/practiceAreas';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Scale,
  Lightbulb,
  Landmark,
  Home,
  Shield,
};

export function PracticeAreasPreview() {
  return (
    <Section variant="default" className="overflow-hidden">
      <GsapReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-caption mb-4">What We Do</p>
            <h2>Practice Areas</h2>
          </div>
          <Link
            to="/practice-areas"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2 group"
          >
            View All Areas
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </GsapReveal>

      <GsapStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {practiceAreas.slice(0, 6).map((area) => {
          const Icon = iconMap[area.icon] || Building2;
          return (
            <Link
              key={area.slug}
              to={`/practice-areas/${area.slug}`}
              className="group block p-8 bg-card border border-border hover:border-accent hover:shadow-hover transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-muted group-hover:bg-accent/10 transition-colors">
                  <Icon className="h-6 w-6 text-foreground" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                {area.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {area.shortDescription}
              </p>
            </Link>
          );
        })}
      </GsapStagger>
    </Section>
  );
}
