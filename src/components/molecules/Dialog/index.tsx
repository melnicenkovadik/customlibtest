import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  HTMLAttributes,
} from 'react';
import {
  Close,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Trigger,
} from '@radix-ui/react-dialog';
import { Typography } from '@/components/atoms/Typography';
import { cn } from '@/utils';
import { X } from 'lucide-react';

export const Dialog = Root;

export const DialogTrigger = Trigger;

export const DialogPortal = Portal;

export const DialogClose = Close;

export const DialogOverlay = forwardRef<
  ElementRef<typeof Overlay>,
  ComponentPropsWithoutRef<typeof Overlay>
>(({ className, ...props }, ref) => (
  <Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-dialog-overlay data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className,
    )}
    {...props}
  />
));

export const DialogContent = forwardRef<
  ElementRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content> & {
    container?: HTMLElement | null;
  }
>(({ className, children, container, ...props }, ref) => (
  <DialogPortal {...(container && { container })}>
    <DialogOverlay />
    <Content
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 flex h-screen w-full max-w-lg translate-x-[-50%] translate-y-[-50%] flex-col gap-4 border border-border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:h-auto sm:max-w-md sm:rounded-lg',
        className,
      )}
      {...props}
    >
      {children}
      <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-text">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogClose>
    </Content>
  </DialogPortal>
));

export const DialogHeader = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex flex-col text-left', className)}
    {...props}
  />
);

export const DialogFooter = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex grow flex-col justify-end gap-3 sm:grow-0', className)}
    {...props}
  />
);

export const DialogTitle = forwardRef<
  ElementRef<typeof Typography>,
  ComponentPropsWithoutRef<typeof Typography>
>(({ className, size = 'heading4', tag = 'h4', ...props }) => (
  <Typography
    size={size}
    tag={tag}
    className={cn('leading-7', className)}
    {...props}
  />
));

export const DialogDescription = forwardRef<
  ElementRef<typeof Description>,
  ComponentPropsWithoutRef<typeof Description>
>(({ className, ...props }, ref) => (
  <Description
    ref={ref}
    className={cn('text-sm text-muted-text', className)}
    {...props}
  />
));
