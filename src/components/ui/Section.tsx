import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  variant?: 'default' | 'muted' | 'primary' | 'pattern';
  size?: 'default' | 'narrow' | 'wide' | 'full';
  id?: string;
}

export function Section({
  children,
  className,
  containerClassName,
  variant = 'default',
  size = 'wide',
  id,
}: SectionProps) {
  const variantStyles = {
    default: 'bg-background',
    muted: 'bg-muted',
    primary: 'bg-primary text-primary-foreground',
    pattern: 'bg-background pattern-bg',
  };

  const containerStyles = {
    default: 'container-wide',
    narrow: 'container-narrow',
    wide: 'container-wide',
    full: 'w-full px-4 md:px-6 lg:px-8',
  };

  return (
    <section
      id={id}
      className={cn('section-padding', variantStyles[variant], className)}
    >
      <div className={cn(containerStyles[size], containerClassName)}>
        {children}
      </div>
    </section>
  );
}
