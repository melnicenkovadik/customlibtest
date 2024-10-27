import { cloneElement, ReactElement } from 'react';
import {
  CustomTriggerProps,
  SibedarProps,
  SidebarContentProps,
} from '@/components/molecules/Sidebar/types';
import { cn } from '@/utils';

export const SidebarContent = ({
  isCollapsed,
  contentOpen,
  contentCollapsed,
}: SidebarContentProps) => <>{isCollapsed ? contentCollapsed : contentOpen}</>;

const CustomTrigger = ({
  originalTrigger,
  isCollapsed,
  onClick,
}: CustomTriggerProps & {
  originalTrigger: ReactElement;
}) => {
  const triggerElement = cloneElement(originalTrigger, {
    onClick,
    isCollapsed,
  });

  return <>{triggerElement}</>;
};

export const Sidebar = ({
  isCollapsed,
  toggleSidebar,
  contentOpen,
  contentCollapsed,
  className,
  trigger,
  ...props
}: SibedarProps & {
  trigger: ReactElement<CustomTriggerProps>;
}) => {
  return (
    <aside
      className={cn('relative flex', className)}
      {...props}
    >
      <CustomTrigger
        originalTrigger={trigger}
        isCollapsed={isCollapsed}
        onClick={toggleSidebar}
      />
      <SidebarContent
        isCollapsed={isCollapsed}
        contentOpen={contentOpen}
        contentCollapsed={contentCollapsed}
      />
    </aside>
  );
};
