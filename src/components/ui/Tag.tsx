import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const tagVariants = cva(
  'inline-flex items-center justify-center text-xs font-medium uppercase tracking-widest transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-muted text-muted-foreground',
        primary: 'bg-primary text-primary-foreground',
        accent: 'bg-accent text-accent-foreground',
        outline: 'border border-border text-muted-foreground',
        legal: 'bg-blue-100 text-blue-800',
        business: 'bg-green-100 text-green-800',
        regulatory: 'bg-amber-100 text-amber-800',
        general: 'bg-gray-100 text-gray-800',
      },
      size: {
        default: 'px-3 py-1',
        sm: 'px-2 py-0.5 text-[10px]',
        lg: 'px-4 py-1.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface TagProps extends VariantProps<typeof tagVariants> {
  children: ReactNode;
  className?: string;
}

export function Tag({ children, variant, size, className }: TagProps) {
  return (
    <span className={cn(tagVariants({ variant, size }), className)}>
      {children}
    </span>
  );
}
