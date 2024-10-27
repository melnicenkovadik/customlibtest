import { ReactNode } from 'react';

export type AccordionItemTypes = {
  id: number;
  name: string;
  description: string;
  value: string;
  content: ReactNode;
};
