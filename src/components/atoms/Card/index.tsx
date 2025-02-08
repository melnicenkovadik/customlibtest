import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/utils';
import {
  CardHeaderProps,
  CardProps,
  cardVariants,
  CardWrapperProps,
} from './types';

/**
 * @deprecated use just Card (card from atoms will be removed soon)
 */
export const CardWrapper = forwardRef<HTMLDivElement, CardWrapperProps>(
  ({ className, isHovered = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-lg bg-border text-foreground shadow-sm transition delay-150 ease-in-out',
        isHovered && 'cursor-pointer p-[1px] hover:bg-hover-stroke',
        className,
      )}
      {...props}
    />
  ),
);
/**
 * @deprecated use just Card (card from atoms will be removed soon)
 */
export const CardInner = forwardRef<HTMLDivElement, CardProps>(
  ({ className, size, isBackground, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'h-full rounded-lg',
        cardVariants({ size, className }),
        isBackground && 'cursor-pointer hover:bg-banner-stroke',
      )}
      {...props}
    />
  ),
);
/**
 * @deprecated use CardHeader from Card (card from atoms will be removed soon)
 */
export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'mb-4 flex flex-row items-center justify-between',
        className,
      )}
      {...props}
    />
  ),
);
/**
 * @deprecated use CardContent from Card (card from atoms will be removed soon)
 */
export const CardContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('pt-0', className)}
    {...props}
  />
));
/**
 * @deprecated use CardFooter from Card (card from atoms will be removed soon)
 */
export const CardFooter = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center', className)}
    {...props}
  />
));
