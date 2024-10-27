import { ReactElement } from 'react';

export type SibedarProps = {
  contentOpen: React.ReactNode;
  contentCollapsed: React.ReactNode;
  className?: string;
  isCollapsed: boolean;
  toggleSidebar: () => void;
  trigger: ReactElement;
};

export type SidebarContentProps = {
  isCollapsed: boolean;
  contentOpen: React.ReactNode;
  contentCollapsed: React.ReactNode;
  contentClassName?: string;
};

export type CustomTriggerProps = {
  onClick: () => void;
  isCollapsed: boolean;
};
