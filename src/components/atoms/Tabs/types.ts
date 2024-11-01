import { ComponentPropsWithoutRef } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cva } from 'class-variance-authority';

export type Variant =
  | 'default'
  | 'secondary'
  | 'underline'
  | 'vertical'
  | 'navLabel';

export const tabsRootVariants = cva('', {
  variants: {
    variant: {
      default: '',
      secondary: '',
      underline: '',
      navLabel: '',
      vertical: 'flex justify-start',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const baseTabsTrigger = 'inline-flex items-center justify-center';
export const tabsVariants = cva(
  `${baseTabsTrigger} rounded-md bg-transparent text-muted-text`,
  {
    variants: {
      variant: {
        default: 'h-[42px] border border-border p-[5px] [&>button]:grow',
        secondary: 'p-1',
        underline: 'p-1 [&>button]:grow',
        vertical: 'min-w-[120px] flex-col items-stretch [&>button]:mb-[22px]',
        navLabel: 'p-1',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export const tabsTriggerVariants = cva(
  `${baseTabsTrigger} whitespace-nowrap py-1.5 text-sm text-secondary-text ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`,
  {
    variants: {
      variant: {
        default:
          'rounded-sm px-3 text-secondary-text data-[state=active]:bg-ui-accent-500 data-[state=active]:text-neutral-1000 data-[state=active]:shadow-sm',
        secondary:
          'rounded-sm bg-transparent px-3 shadow-none hover:text-foreground data-[state=active]:rounded-full data-[state=active]:bg-secondary data-[state=active]:text-primary',
        underline:
          'border-b-2 border-border bg-background px-8 text-xl shadow-none data-[state=active]:border-muted-text data-[state=active]:text-secondary-text [&>div>span]:text-foreground [&>div]:text-base',
        vertical:
          'group text-xl shadow-none data-[state=active]:border-muted-text data-[state=active]:text-secondary-text [&>div>span]:text-foreground [&>div]:text-base',
        navLabel:
          'rounded-sm bg-background px-3 text-lg font-normal shadow-none hover:font-medium hover:text-muted-text data-[state=active]:rounded-full data-[state=active]:text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export type VariantContextProps = {
  variant: Variant;
};

export interface TabsProps
  extends ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {
  variant?: Variant;
}

export type TabsTriggerProps = ComponentPropsWithoutRef<
  typeof TabsPrimitive.Trigger
> & {
  details?: string;
};
