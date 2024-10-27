import { ComponentPropsWithoutRef } from 'react';
import { Fallback, Image, Root } from '@radix-ui/react-avatar';
import { cn } from '@/utils';
import { cva } from 'class-variance-authority';

import { AvatarProps } from './types';

const avatarVariants = cva(
  'relative flex shrink-0 cursor-pointer items-center justify-center rounded-full border border-transparent transition hover:border-secondary-hover focus:border-secondary-focus',
  {
    variants: {
      variant: {
        default: 'text-primary-foreground bg-white',
        dark: 'bg-secondary-text text-invert',
      },
      size: {
        default: 'h-9 w-9',
        md: 'h-10 w-10',
        lg: 'h-11 w-11',
        xs: 'h-5 w-5',
        xxs: 'h-4 w-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

const statusVariants = cva(
  'absolute bottom-0 right-0 rounded-full border border-white',
  {
    variants: {
      size: {
        default: 'h-2.5 w-2.5',
        md: 'h-3 w-3',
        lg: 'h-3.5 w-3.5',
        xs: 'h-1.5 w-1.5',
        xxs: 'h-1.5 w-1.5',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

const AvatarComponent = ({
  ...props
}: ComponentPropsWithoutRef<typeof Root>) => <Root {...props} />;

const AvatarImage = ({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof Image>) => (
  <Image
    className={cn('aspect-square h-full w-full rounded-full', className)}
    {...props}
  />
);

const AvatarFallback = ({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof Fallback>) => (
  <Fallback
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-muted',
      className,
    )}
    {...props}
  />
);

const AvatarStatus = ({
  status,
  size,
}: {
  status: AvatarProps['status'];
  size: AvatarProps['size'];
}) => {
  return (
    <div
      className={cn(statusVariants({ size }), {
        'bg-success-400': status === 'online',
        'bg-neutral-400': status === 'offline',
      })}
    />
  );
};

export const Avatar = ({
  src,
  avatarFallback,
  className,
  variant,
  avatarComponent,
  status,
  size,
  alt,
  ...props
}: AvatarProps) => {
  return (
    <AvatarComponent
      className={cn(avatarVariants({ variant, size }), className)}
      {...props}
    >
      {src && (
        <AvatarImage
          src={src}
          alt={alt || 'Avatar image'}
        />
      )}
      {avatarFallback && <AvatarFallback>{avatarFallback}</AvatarFallback>}
      {avatarComponent}
      {status && (
        <AvatarStatus
          status={status}
          size={size}
        />
      )}
    </AvatarComponent>
  );
};
