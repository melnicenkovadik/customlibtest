import { ReactNode } from 'react';

export interface CustomControllerProps {
  /** onClick handler */
  onClick?: () => void;
  /** Flag if button closes dialog */
  isDialogClose?: boolean;
  /** id */
  id?: string | number;
  /** Icon */
  icon: ReactNode;
  /** Text */
  text?: string;
  /** Disabled flag */
  disabled?: boolean;
}

export interface ExpandedImageProps {
  /** Src */
  src: string;
  /** List of classes */
  className?: string;
  /** Name */
  name: string;
  /** Description */
  description: string;
  /** Image classes */
  imgClassName?: string;
  /** Custom buttons-controllers */
  customControllers?: CustomControllerProps[];
}
