import { ReactNode } from 'react';

export type TogglePanelItemProps = {
  id: number;
  icon?: ReactNode;
  type: string;
  message: string;
};
