import { useParams, Link, Navigate } from 'react-router-dom';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/button';
import { GsapReveal, GsapParallax } from '@/components/animations';
import { teamMembers } from '@/data/team';
import { ArrowLeft, Mail, Phone, Linkedin, ArrowRight } from 'lucide-react';

const TeamMemberDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const member = teamMembers.find((m) => m.slug === slug);

  if (!member) {
    return <Navigate to="/team" replace />;
  }

  // TODO: Malik Ibrar Fayyaz - Profile document indicates administrative role,
  // but roster lists as "Advocate High Court". Confirm correct designation.
  const isMalikIbrarFayyaz = member.slug === 'malik-ibrar-fayyaz';
  const showProfileUpdateNote = isMalikIbrarFayyaz;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-background">
        <div className="container-wide">
          <GsapReveal>
            <Link
              to="/team"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              All Team Members
            </Link>
          </GsapReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Photo */}
            <GsapReveal direction="left">
              <GsapParallax speed={0.1}>
                <div className="relative">
                  <div className="aspect-[3/4] bg-muted overflow-hidden rounded-sm">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="eager"
                      decoding="sync"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-accent -z-10" />
                </div>
              </GsapParallax>
            </GsapReveal>

            {/* Info */}
            <div className="lg:col-span-2">
              <GsapReveal direction="right" delay={0.2}>
                {showProfileUpdateNote && (
                  <div className="mb-6 p-4 bg-muted/50 border border-border rounded-md">
                    <p className="text-sm text-muted-foreground italic">
                      Profile details will be updated soon.
                    </p>
                  </div>
                )}
                <p className="text-caption mb-2">{member.title}</p>
                <h1 className="mb-6">{member.name}</h1>
                <div className="w-16 h-0.5 bg-accent mb-8" />
                
                <div className="prose prose-lg text-muted-foreground mb-8">
                  {member.fullBio ? (
                    member.fullBio.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))
                  ) : (
                    <p className="text-muted-foreground/70 italic">
                      Profile details will be updated soon.
                    </p>
                  )}
                </div>

                {/* Contact */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-muted text-sm hover:bg-accent/10 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    {member.email}
                  </a>
                  {member.phone && (
                    <a
                      href={`tel:${member.phone}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-muted text-sm hover:bg-accent/10 transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      {member.phone}
                    </a>
                  )}
                  {member.linkedIn && (
                    <a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-muted text-sm hover:bg-accent/10 transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>
                  )}
                </div>
              </GsapReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Details - Hide conflicting sections for Malik Ibrar Fayyaz */}
      {!isMalikIbrarFayyaz && (
        <Section variant="muted">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Practice Areas */}
            {member.practiceAreas.length > 0 && (
              <GsapReveal>
                <h3 className="text-sm font-semibold uppercase tracking-widest mb-4">
                  Practice Areas
                </h3>
                <ul className="space-y-2">
                  {member.practiceAreas.map((area) => (
                    <li key={area} className="text-sm text-muted-foreground">
                      {area}
                    </li>
                  ))}
                </ul>
              </GsapReveal>
            )}

            {/* Education */}
            {member.education.length > 0 && (
              <GsapReveal delay={0.1}>
                <h3 className="text-sm font-semibold uppercase tracking-widest mb-4">
                  Education
                </h3>
                <ul className="space-y-3">
                  {member.education.map((edu, i) => (
                    <li key={i} className="text-sm">
                      <span className="text-foreground font-medium">{edu.degree}</span>
                      <br />
                      <span className="text-muted-foreground">
                        {edu.institution}, {edu.year}
                      </span>
                    </li>
                  ))}
                </ul>
              </GsapReveal>
            )}

            {/* Admissions */}
            {member.admissions.length > 0 && (
              <GsapReveal delay={0.2}>
                <h3 className="text-sm font-semibold uppercase tracking-widest mb-4">
                  Bar Admissions
                </h3>
                <ul className="space-y-2">
                  {member.admissions.map((admission) => (
                    <li key={admission} className="text-sm text-muted-foreground">
                      {admission}
                    </li>
                  ))}
                </ul>
              </GsapReveal>
            )}

            {/* Languages */}
            {member.languages.length > 0 && (
              <GsapReveal delay={0.3}>
                <h3 className="text-sm font-semibold uppercase tracking-widest mb-4">
                  Languages
                </h3>
                <ul className="space-y-2">
                  {member.languages.map((language) => (
                    <li key={language} className="text-sm text-muted-foreground">
                      {language}
                    </li>
                  ))}
                </ul>
              </GsapReveal>
            )}
          </div>
        </Section>
      )}

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-wide">
          <GsapReveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  Interested in working with {member.name.split(' ')[0]}?
                </h3>
                <p className="opacity-80">
                  Schedule a consultation to discuss your legal needs.
                </p>
              </div>
              <Button
                variant="secondary"
                size="xl"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                asChild
              >
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </GsapReveal>
        </div>
      </section>
    </>
  );
};

export default TeamMemberDetail;
