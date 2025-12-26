import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Section } from '@/components/ui/Section';
import PageHero from '@/components/ui/PageHero';
import { GsapReveal, GsapStagger } from '@/components/animations';
import { practiceAreas, practiceAreaCategories } from '@/data/practiceAreas';
import { Building2, Scale, Lightbulb, Landmark, Home, Shield, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Scale,
  Lightbulb,
  Landmark,
  Home,
  Shield,
};

const PracticeAreas = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredAreas = activeCategory === 'all'
    ? practiceAreas
    : practiceAreas.filter((area) => area.category === activeCategory);

  return (
    <>
      <PageHero
        overline="What We Do"
        title="Practice Areas"
      />

      {/* Filters */}
      <Section variant="muted" className="py-8">
        <div className="flex flex-wrap gap-4">
          {practiceAreaCategories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={cn(
                'px-4 py-2 text-sm font-medium transition-colors',
                activeCategory === category.value
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background text-muted-foreground hover:text-foreground border border-border'
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
      </Section>

      {/* Practice Areas Grid */}
      <Section variant="default">
        <GsapStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" key={activeCategory}>
          {filteredAreas.map((area) => {
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
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {area.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {area.services.slice(0, 3).map((service) => (
                    <span
                      key={service}
                      className="text-xs px-2 py-1 bg-muted text-muted-foreground"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </Link>
            );
          })}
        </GsapStagger>
      </Section>
    </>
  );
};

export default PracticeAreas;
