import { HTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

export const truncateVariants = cva('text-foreground transition', {
  variants: {
    variant: {
      default: 'truncate hover:text-foreground',
      'no-truncate': 'flex hover:text-primary-hover',
      full: 'flex hover:text-foreground',
    },
    size: {
      default: 'text-sm',
      md: 'text-base',
      xs: 'text-xs',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export interface TruncateTextProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof truncateVariants> {
  text: string;
  start?: number;
  end?: number;
  dots?: number;
  isTruncate?: boolean;
}
