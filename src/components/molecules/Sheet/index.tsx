import { ComponentPropsWithoutRef } from 'react';
import {
  Close,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
} from '@radix-ui/react-dialog';
import { cn } from '@/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';

export const Sheet = Root;

export const SheetTrigger = Trigger;

export const SheetClose = Close;

export const SheetPortal = Portal;

export const SheetOverlay = ({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof Overlay>) => (
  <Overlay
    className={cn(
      'fixed inset-0 z-50 bg-dialog-overlay data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className,
    )}
    {...props}
  />
);

const sheetVariants = cva(
  'fixed z-50 gap-4 border-border bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out',
  {
    variants: {
      side: {
        top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        bottom:
          'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
        right:
          'inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  },
);

interface SheetContentProps
  extends ComponentPropsWithoutRef<typeof Content>,
    VariantProps<typeof sheetVariants> {
  overlayClassName?: string;
  closeLabel?: string;
  withCloseButton?: boolean;
}

export const SheetContent = ({
  side = 'right',
  className,
  overlayClassName,
  children,
  closeLabel = 'Close',
  withCloseButton = true,
  ...props
}: SheetContentProps) => {
  const onOpenAutoFocus = (event: Event) => event.preventDefault();

  return (
    <SheetPortal>
      <SheetOverlay className={overlayClassName} />
      <Content
        className={cn(sheetVariants({ side }), className)}
        onOpenAutoFocus={onOpenAutoFocus}
        {...props}
      >
        {children}
        {withCloseButton && (
          <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-text">
            <X className="h-4 w-4" />
            <span className="sr-only">{closeLabel}</span>
          </SheetClose>
        )}
      </Content>
    </SheetPortal>
  );
};

export const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col space-y-2 text-center sm:text-left',
      className,
    )}
    {...props}
  />
);

export const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className,
    )}
    {...props}
  />
);

export const SheetTitle = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Title>) => (
  <Title
    className={cn('text-lg font-semibold text-foreground', className)}
    {...props}
  />
);

export const SheetDescription = ({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof Description>) => (
  <Description
    className={cn('text-sm text-muted-text', className)}
    {...props}
  />
);
