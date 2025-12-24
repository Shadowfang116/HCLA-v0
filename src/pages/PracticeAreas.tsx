import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { Section } from '@/components/ui/Section';
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
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-background">
        <div className="container-wide">
          <GsapReveal>
            <p className="text-caption mb-4">Expertise</p>
            <h1 className="max-w-3xl mb-6">Practice Areas</h1>
            <div className="w-24 h-0.5 bg-accent mb-8" />
            <p className="text-subhead max-w-2xl">
              Comprehensive legal services across key practice areas, 
              delivered by specialists with deep sector expertise.
            </p>
          </GsapReveal>
        </div>
      </section>

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
    </Layout>
  );
};

export default PracticeAreas;
