import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import {
  Anchor,
  Close,
  Content,
  Portal,
  Root,
  Trigger,
} from '@radix-ui/react-popover';
import { cn } from '@/utils';

export const Popover = Root;

export const PopoverTrigger = Trigger;

export const PopoverAnchor = Anchor;

export const PopoverClose = Close;

export interface PopoverContentProps
  extends ComponentPropsWithoutRef<typeof Content> {}

export const PopoverContent = forwardRef<
  ElementRef<typeof Content>,
  PopoverContentProps & {
    container?: HTMLElement | null;
  }
>(
  (
    { className, align = 'center', sideOffset = 4, container, ...props },
    ref,
  ) => (
    <Portal {...(container && { container })}>
      <Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'z-50 w-72 rounded-md border border-border bg-background p-4 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className,
        )}
        {...props}
      />
    </Portal>
  ),
);
