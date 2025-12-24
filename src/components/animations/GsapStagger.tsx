import { ReactNode, useEffect, useRef, Children } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface GsapStaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  duration?: number;
  delay?: number;
  distance?: number;
  start?: string;
}

export function GsapStagger({
  children,
  className,
  stagger = 0.1,
  duration = 0.6,
  delay = 0,
  distance = 40,
  start = 'top 80%',
}: GsapStaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !ref.current) return;

    const elements = ref.current.children;
    if (elements.length === 0) return;

    gsap.set(elements, { y: distance, opacity: 0 });

    const ctx = gsap.context(() => {
      gsap.to(elements, {
        y: 0,
        opacity: 1,
        duration,
        stagger,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start,
          toggleActions: 'play none none none',
        },
      });
    });

    return () => ctx.revert();
  }, [prefersReducedMotion, stagger, duration, delay, distance, start]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
