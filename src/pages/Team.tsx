import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { Section } from '@/components/ui/Section';
import { GsapReveal, GsapStagger } from '@/components/animations';
import { teamMembers, teamCategories } from '@/data/team';
import { cn } from '@/lib/utils';

const Team = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredMembers = activeCategory === 'all'
    ? teamMembers
    : teamMembers.filter((member) => member.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-background">
        <div className="container-wide">
          <GsapReveal>
            <p className="text-caption mb-4">Our People</p>
            <h1 className="max-w-3xl mb-6">Meet the Team</h1>
            <div className="w-24 h-0.5 bg-accent mb-8" />
            <p className="text-subhead max-w-2xl">
              Our team combines deep legal expertise with practical business 
              understanding to deliver exceptional results for our clients.
            </p>
          </GsapReveal>
        </div>
      </section>

      {/* Filters */}
      <Section variant="muted" className="py-8">
        <div className="flex flex-wrap gap-4">
          {teamCategories.map((category) => (
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

      {/* Team Grid */}
      <Section variant="default">
        <GsapStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" key={activeCategory}>
          {filteredMembers.map((member) => (
            <Link
              key={member.slug}
              to={`/team/${member.slug}`}
              className="group block"
            >
              <div className="aspect-[3/4] bg-muted mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-muted to-primary/10 flex items-end p-4 group-hover:scale-105 transition-transform duration-500">
                  <span className="text-xs text-muted-foreground/50 uppercase tracking-widest">
                    Photo
                  </span>
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-1 group-hover:text-accent transition-colors">
                {member.name}
              </h4>
              <p className="text-sm text-muted-foreground mb-2">{member.title}</p>
              {member.practiceAreas.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {member.practiceAreas.slice(0, 2).map((area) => (
                    <span
                      key={area}
                      className="text-xs px-2 py-1 bg-muted text-muted-foreground"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </GsapStagger>
      </Section>
    </Layout>
  );
};

export default Team;
