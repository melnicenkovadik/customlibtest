import { cva, VariantProps } from 'class-variance-authority';

export type Size = 'x-sm' | 'sm' | 'md' | 'lg';

export type Shape = 'circle' | 'square';

export type Variant =
  | 'default'
  | 'outline'
  | 'outline-primary'
  | 'ghost-neutral'
  | 'ghost-brand'
  | 'tertiary'
  | 'ghost-neutral'
  | 'inherit';

export const iconButtonVariants = cva(
  'group flex flex-col items-center justify-center',
  {
    variants: {
      variant: {
        default:
          'rounded-full bg-ui-accent-500 text-neutral-1000 hover:bg-ui-accent-400 active:bg-ui-accent-600',
        'outline-primary':
          'rounded-full border border-ui-accent-500 bg-transparent text-foreground hover:bg-gd-dark-xs active:bg-ui-accent-500',
        'ghost-neutral':
          'h-auto w-auto bg-transparent text-foreground hover:bg-primary-text active:bg-secondary',
        outline:
          'border border-border bg-transparent text-foreground hover:bg-primary-text active:bg-secondary',
        tertiary:
          'bg-secondary hover:bg-secondary-hover active:bg-secondary-focus',
        'ghost-brand':
          'bg-transparent text-ui-accent-500 hover:bg-gd-dark-xs active:bg-ui-accent-500 active:text-theme-primary-text',
        inherit: '[&>svg]:h-full [&>svg]:w-full',
      },
      paint: {
        neutral: 'bg-background hover:bg-ghost active:bg-secondary',
        brand:
          'bg-background text-ui-accent-500 hover:bg-gd-dark-xs active:bg-ui-accent-500 active:text-neutral-1000',
        'brand-filled':
          'bg-ui-accent-500 text-neutral-1000 hover:bg-ui-accent-400 active:bg-ui-accent-600',
        'neutral-filled':
          'bg-secondary hover:bg-secondary-hover active:bg-secondary-focus',
      },
      size: {
        'x-sm': 'h-4 w-4 [&>svg]:h-[9px] [&>svg]:w-[9px]',
        sm: 'h-9 w-9',
        md: 'h-10 w-10',
        lg: 'h-11 w-11',
      },
      shape: {
        circle: 'rounded-full',
        square: 'rounded-lg',
      },
    },
  },
);

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  version?: 'outlined' | 'ghost';
  icon?: React.ReactNode;
  disabled?: boolean;
  text?: string;
  /**
   * @deprecated
   * Use combination of color and style instead.
   */
  variant?:
    | 'default'
    | 'outline-primary'
    | 'ghost-neutral'
    | 'outline'
    | 'tertiary'
    | 'ghost-brand'
    | 'inherit';
}
