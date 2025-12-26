import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { firm } from '@/content/hcla';

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-scales-minimal.jpg"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
          decoding="sync"
          aria-hidden="true"
        />
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1f3a]/95 via-[#0f1f3a]/90 to-[#0a1629]/95" />
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Caption */}
          <p className="hero-caption text-caption mb-6 text-white/70">
            Established {firm.established}
          </p>

          {/* Title */}
          <h1 className="mb-8 overflow-hidden text-white">
            <span className="hero-title-line block">Hameed Chohan</span>
            <span className="hero-title-line block text-white/90">Law Associates</span>
          </h1>

          {/* Decorative line */}
          <div className="hero-line w-24 h-0.5 bg-white/40 mb-8 origin-left" />

          {/* Subtitle */}
          <p className="hero-subtitle text-subhead max-w-2xl mb-12 text-white/85">
            {firm.tagline} Decades of experience. Uncompromising standards.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="hero" 
              size="xl" 
              className="hero-cta bg-white/10 border border-white/40 text-white hover:bg-white/15 hover:border-white/60" 
              asChild
            >
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl" 
              className="hero-cta border-white/40 text-white hover:bg-white/10 hover:border-white/60" 
              asChild
            >
              <Link to="/practice-areas">Practice Areas</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-white/40 animate-pulse" />
      </div>
    </section>
  );
}
