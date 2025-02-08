import { forwardRef } from 'react';
import {
  Content,
  Portal,
  Provider,
  Root,
  Trigger,
} from '@radix-ui/react-tooltip';
import { cn } from '@/utils';
import { TooltipProviderProps } from './types';

export const TooltipProvider: React.FC<TooltipProviderProps> = Provider;

export const Tooltip = Root;

export const TooltipTrigger = Trigger;

export const TooltipPortal = Portal;

export const TooltipContent = forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ className, sideOffset = 4, children, ...props }, ref) => (
  <Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      'z-50 overflow-hidden rounded-md bg-ghost px-3 py-1.5 text-sm duration-75 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      className,
    )}
    {...props}
  >
    {children}
  </Content>
));
