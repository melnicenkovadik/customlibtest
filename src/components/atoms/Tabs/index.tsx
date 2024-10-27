import {
  ComponentPropsWithoutRef,
  createContext,
  ElementRef,
  forwardRef,
  useContext,
} from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '@/utils';

import {
  TabsProps,
  tabsRootVariants,
  TabsTriggerProps,
  tabsTriggerVariants,
  tabsVariants,
  VariantContextProps,
} from './types';

const VariantContext = createContext<VariantContextProps>({
  variant: 'default',
});

const useVariant = () => {
  return useContext(VariantContext);
};

export const Tabs = forwardRef<
  ElementRef<typeof TabsPrimitive.Root>,
  TabsProps
>(({ variant = 'default', className, children, ...props }, ref) => {
  return (
    <VariantContext.Provider value={{ variant }}>
      <TabsPrimitive.Root
        ref={ref}
        className={cn(tabsRootVariants({ variant }), className)}
        {...props}
      >
        {children}
      </TabsPrimitive.Root>
    </VariantContext.Provider>
  );
});

export const TabsList = forwardRef<
  ElementRef<typeof TabsPrimitive.List>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => {
  const { variant } = useVariant();

  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn(tabsVariants({ variant }), className)}
      {...props}
    />
  );
});

const Details = ({
  details,
  variant,
}: {
  details: string;
  variant: string;
}) => {
  return (
    <span className="relative mt-1 text-xl text-secondary-text">
      {details}
      {variant === 'vertical' && (
        <div className="bottom-0 left-0 right-0 mt-1 h-[2px] w-[50px] bg-border group-data-[state=active]:bg-secondary-text" />
      )}
    </span>
  );
};

export const TabsTrigger = forwardRef<
  ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, details, children, ...props }, ref) => {
  const { variant } = useVariant();

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(tabsTriggerVariants({ variant }), className)}
      {...props}
    >
      <div className="flex flex-col">
        {children}
        {details && (
          <Details
            details={details}
            variant={variant}
          />
        )}
      </div>
    </TabsPrimitive.Trigger>
  );
});

export const TabsContent = forwardRef<
  ElementRef<typeof TabsPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className,
    )}
    {...props}
  />
));
