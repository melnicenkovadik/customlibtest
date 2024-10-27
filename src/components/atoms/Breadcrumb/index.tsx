import React, { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/utils';
import { ChevronRight, MoreHorizontal } from 'lucide-react';

export const Breadcrumb = ({
  ...props
}: React.ComponentPropsWithoutRef<'nav'> & {
  separator?: ReactNode;
}) => (
  <nav
    aria-label="breadcrumb"
    {...props}
  />
);

export const BreadcrumbList = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'ol'>) => (
  <ol
    className={cn(
      'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-text',
      className,
    )}
    {...props}
  />
);

export const BreadcrumbItem = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'li'>) => (
  <li
    className={cn('inline-flex items-center gap-1.5', className)}
    {...props}
  />
);

export const BreadcrumbLink = ({
  asChild,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'a'> & {
  asChild?: boolean;
}) => {
  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      className={cn(
        'text-secondary-text transition-colors hover:text-foreground',
        className,
      )}
      {...props}
    />
  );
};

export const BreadcrumbPage = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'span'>) => (
  <span
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn('font-normal text-foreground', className)}
    {...props}
  />
);

export const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<'li'>) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn('[&>svg]:size-5', className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
);

export const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);
