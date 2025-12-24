import { ReactNode, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface GsapRevealProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  delay?: number;
  duration?: number;
  distance?: number;
  start?: string;
}

export function GsapReveal({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  distance = 30,
  start = 'top 85%',
}: GsapRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !ref.current) return;

    const element = ref.current;

    const getInitialState = () => {
      switch (direction) {
        case 'up':
          return { y: distance, opacity: 0 };
        case 'down':
          return { y: -distance, opacity: 0 };
        case 'left':
          return { x: distance, opacity: 0 };
        case 'right':
          return { x: -distance, opacity: 0 };
        case 'scale':
          return { scale: 0.95, opacity: 0 };
        default:
          return { y: distance, opacity: 0 };
      }
    };

    const getFinalState = () => {
      switch (direction) {
        case 'up':
        case 'down':
          return { y: 0, opacity: 1 };
        case 'left':
        case 'right':
          return { x: 0, opacity: 1 };
        case 'scale':
          return { scale: 1, opacity: 1 };
        default:
          return { y: 0, opacity: 1 };
      }
    };

    gsap.set(element, getInitialState());

    const ctx = gsap.context(() => {
      gsap.to(element, {
        ...getFinalState(),
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start,
          toggleActions: 'play none none none',
        },
      });
    });

    return () => ctx.revert();
  }, [prefersReducedMotion, direction, delay, duration, distance, start]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
