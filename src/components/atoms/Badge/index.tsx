import { cn } from '@/utils';
import { BadgeProps, badgeVariants } from './types';

export const Badge = ({ className, variant, ...props }: BadgeProps) => {
  return (
    <div
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
};
