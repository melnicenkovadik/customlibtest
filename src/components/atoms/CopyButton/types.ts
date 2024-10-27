import { HTMLAttributes } from 'react';

export interface CopyButtonProps extends HTMLAttributes<HTMLButtonElement> {
  value: string;
  iconClassName?: string;
  text?: string;
}
