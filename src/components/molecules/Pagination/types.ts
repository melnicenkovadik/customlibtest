import { ComponentProps } from 'react';

export interface PaginationProps extends ComponentProps<'nav'> {
  total: number;
  className?: string;
  pageParamName?: string;
  handleMin: () => void;
  handleMax: () => void;
  handlePrev: () => void;
  handleNext: () => void;
  handleInputChange?: (value: number) => void;
  setCurrentPage: (value: number) => void;
  currentPage: number;
}
