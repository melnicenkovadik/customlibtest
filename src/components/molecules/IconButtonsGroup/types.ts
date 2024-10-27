import { ReactNode } from 'react';
import { IconButtonProps } from '@/components/atoms/IconButton/types';

export type ButtonType = {
  id: string | number;
  icon: ReactNode;
  text?: string;
  onClick: () => void;
  disabled?: boolean;
};

export interface IconButtonsGroupProps extends IconButtonProps {
  buttons: {
    id: string | number;
    icon: ReactNode;
    text?: string;
    onClick: () => void;
    disabled?: boolean;
  }[];
  className?: string;
  iconClassName?: string;
}
