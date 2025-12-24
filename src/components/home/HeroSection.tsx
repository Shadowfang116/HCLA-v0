import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.fromTo(
        '.hero-caption',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
      )
        .fromTo(
          '.hero-title-line',
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
          '-=0.3'
        )
        .fromTo(
          '.hero-subtitle',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          '.hero-cta',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out' },
          '-=0.3'
        )
        .fromTo(
          '.hero-line',
          { scaleX: 0 },
          { scaleX: 1, duration: 1, ease: 'power2.out' },
          '-=0.4'
        );
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pattern-bg"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-muted/50 to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="container-wide relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Caption */}
          <p className="hero-caption text-caption mb-6">
            Established 1995
          </p>

          {/* Title */}
          <h1 className="mb-8 overflow-hidden">
            <span className="hero-title-line block">Hameed Chohan</span>
            <span className="hero-title-line block text-muted-foreground">Law Associates</span>
          </h1>

          {/* Decorative line */}
          <div className="hero-line w-24 h-0.5 bg-accent mb-8 origin-left" />

          {/* Subtitle */}
          <p className="hero-subtitle text-subhead max-w-2xl mb-12">
            Premier legal counsel for complex corporate matters, high-stakes litigation, 
            and strategic advisory. Decades of experience. Uncompromising standards.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" className="hero-cta" asChild>
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button variant="heroOutline" size="xl" className="hero-cta" asChild>
              <Link to="/practice-areas">Practice Areas</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-border animate-pulse" />
      </div>
    </section>
  );
}
