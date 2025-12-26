import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Section } from '@/components/ui/Section';
import PageHero from '@/components/ui/PageHero';
import { GsapReveal, GsapStagger } from '@/components/animations';
import { teamMembers, teamCategories } from '@/data/team';
import { cn } from '@/lib/utils';

const Team = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredMembers = activeCategory === 'all'
    ? teamMembers
    : teamMembers.filter((member) => member.category === activeCategory);

  return (
    <>
      <PageHero
        overline="Our People"
        title="The Team"
      />

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
              <div className="aspect-[3/4] bg-muted mb-4 overflow-hidden rounded-sm">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h4 className="text-lg font-semibold mb-1 group-hover:text-accent transition-colors duration-300">
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
    </>
  );
};

export default Team;
