import { cva, VariantProps } from 'class-variance-authority';

export const badgeVariants = cva(
  'inline-flex cursor-pointer items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-text hover:bg-primary-badge',
        primary:
          'border-transparent bg-primary text-invert hover:bg-primary-badge',
        secondary:
          'border-transparent bg-secondary-hover hover:bg-secondary-focus',
        tertiary: 'bg-primary-active text-primary-text hover:bg-secondary-text',
        destructive:
          'border-transparent bg-destructive text-destructive-text hover:bg-destructive-hover',
        outline: 'border-border text-foreground hover:border-secondary-focus',
        number:
          'h-4 min-w-4 justify-center truncate rounded-full bg-foreground p-1 text-[11px] font-medium text-primary-text',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}
