import { ReactNode } from 'react';

export interface ExpandableImageProps {
  src: string;
  content: ReactNode;
  /** Image alt */
  alt?: string;
  /** List of classes */
  className?: string;
  /** On error loading handler */
  onErrorLoading?: (err: unknown) => void;
}
