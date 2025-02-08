import { forwardRef } from 'react';
import { DialogPortalProps } from '@radix-ui/react-dialog';
import { useDisableAnimations } from '@/hooks/useDisableAnimations';
import { useMedia } from '@/hooks/useMedia';
import { cn } from '@/utils';
import { Drawer as DrawerPrimitive } from 'vaul';
import { DrawerProvider, useDrawerContext } from './DrawerContext';

export const Drawer = ({
  shouldScaleBackground = true,
  direction: drawerDirection = 'left',
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root> & {
  direction?: 'left' | 'right' | 'top' | 'bottom';
  handleOnly?: boolean;
}) => {
  const isTablet = useMedia('(min-width: 768px)');

  useDisableAnimations(!isTablet);

  return (
    <DrawerProvider value={{ direction: isTablet ? drawerDirection : 'top' }}>
      <DrawerPrimitive.Root
        shouldScaleBackground={shouldScaleBackground}
        direction={isTablet ? drawerDirection : 'top'}
        modal={!isTablet}
        {...props}
      />
    </DrawerProvider>
  );
};

export const DrawerTrigger = DrawerPrimitive.Trigger;

export const DrawerPortal: React.FC<DialogPortalProps> = DrawerPrimitive.Portal;

export const DrawerClose = forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Close>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Close
    ref={ref}
    className={cn('top-6.5 absolute right-3 cursor-pointer', className)}
    {...props}
  />
));
DrawerClose.displayName = 'DrawerClose';

export const DrawerOverlay = forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn('fixed inset-0 z-50 bg-black/80', className)}
    {...props}
  />
));
DrawerOverlay.displayName = 'DrawerOverlay';

export const DrawerContent = forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> & {
    container?: HTMLElement | null;
    asChild?: boolean;
  }
>(({ className, children, container, asChild = false, ...props }, ref) => {
  const { direction } = useDrawerContext();

  return (
    <DrawerPortal {...(container && { container })}>
      <DrawerOverlay asChild={asChild} />
      <DrawerPrimitive.Content
        ref={ref}
        className={cn(
          'fixed z-50 flex flex-col border border-border bg-background',
          direction === 'left' &&
            'bottom-0 left-0 top-0 w-full md:w-auto md:min-w-[320px] md:rounded-tl-[10px]',
          direction === 'right' &&
            'bottom-0 right-0 top-0 w-full md:w-auto md:min-w-[320px] md:rounded-tr-[10px]',
          direction === 'top' &&
            'left-0 right-0 top-0 h-full md:h-auto md:rounded-t-[10px]',
          direction === 'bottom' &&
            'bottom-0 left-0 right-0 h-full md:h-auto md:rounded-b-[10px]',
          className,
        )}
        {...props}
      >
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
});
DrawerContent.displayName = 'DrawerContent';

export const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'pr-6.5 grid gap-1.5 p-6 text-center sm:text-left',
      className,
    )}
    {...props}
  />
);

export const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('mt-auto flex flex-col gap-2 p-6', className)}
    {...props}
  />
);

DrawerFooter.displayName = 'DrawerFooter';

export const DrawerTitle = forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
      'text-lg font-semibold leading-none tracking-tight',
      className,
    )}
    {...props}
  />
));

DrawerTitle.displayName = 'DrawerTitle';

export const DrawerDescription = forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-text', className)}
    {...props}
  />
));

DrawerDescription.displayName = 'DrawerDescription';
