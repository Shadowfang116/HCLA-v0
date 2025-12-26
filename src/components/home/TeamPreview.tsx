import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { GsapReveal, GsapStagger } from '@/components/animations';
import { teamMembers } from '@/data/team';

export function TeamPreview() {
  const displayMembers = teamMembers.filter(m => m.category === 'lawyers').slice(0, 4);

  return (
    <Section variant="default">
      <GsapReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-caption mb-4">Our People</p>
            <h2>Meet the Team</h2>
          </div>
          <Link
            to="/team"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2 group"
          >
            View Full Team
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </GsapReveal>

      <GsapStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayMembers.map((member) => (
          <Link
            key={member.slug}
            to={`/team/${member.slug}`}
            className="group block"
          >
            <div className="aspect-[3/4] bg-muted mb-4 overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h4 className="text-lg font-semibold mb-1 group-hover:text-accent transition-colors">
              {member.name}
            </h4>
            <p className="text-sm text-muted-foreground">{member.title}</p>
          </Link>
        ))}
      </GsapStagger>
    </Section>
  );
}
