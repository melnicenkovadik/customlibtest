import { HTMLAttributes, ReactNode } from 'react';
import { TypographyVariantType } from '@/components/atoms/Typography/types';

export interface TextWithActionsProps extends HTMLAttributes<HTMLDivElement> {
  text?: string;
  textClasses?: string;
  title?: string;
  variant?: TypographyVariantType;
  actions: ReactNode[];
  isTruncate?: boolean;
  startTruncate?: number;
}
