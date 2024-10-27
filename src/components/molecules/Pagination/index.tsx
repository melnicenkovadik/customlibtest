import {
  ComponentProps,
  forwardRef,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { IconButton, Input } from '@/components';
import { ButtonProps, buttonVariants } from '@/components/atoms/Button/types';
import { cn } from '@/utils';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
} from 'lucide-react';

import { PaginationProps } from './types';

export const PaginationWrapper = ({
  className,
  ...props
}: ComponentProps<'nav'>) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn('mx-auto flex w-full items-center justify-end', className)}
    {...props}
  />
);

export const PaginationContent = forwardRef<
  HTMLUListElement,
  ComponentProps<'ul'>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn('flex flex-row items-center gap-1', className)}
    {...props}
  />
));

export const PaginationItem = forwardRef<HTMLLIElement, ComponentProps<'li'>>(
  ({ className, ...props }, ref) => (
    <li
      ref={ref}
      className={cn('', className)}
      {...props}
    />
  ),
);

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, 'size'> &
  ComponentProps<'a'>;

export const PaginationLink = ({
  className,
  isActive,
  size = 'default',
  ...props
}: PaginationLinkProps) => (
  <span
    aria-current={isActive ? 'page' : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? 'outline' : 'ghost',
        size,
      }),
      className,
    )}
    {...props}
  />
);

export const PaginationPrevious = ({
  className,
  ...props
}: ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn('gap-1 pl-2.5', className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
);

export const PaginationNext = ({
  className,
  ...props
}: ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn('gap-1 pr-2.5', className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
);

export const PaginationEllipsis = ({
  className,

  ...props
}: ComponentProps<'span'>) => (
  <span
    aria-hidden
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);

export const Pagination = ({
  className,
  total,
  handleMin,
  handleMax,
  handleNext,
  handlePrev,
  handleInputChange,
  setCurrentPage,
  currentPage,
}: PaginationProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [wasInputFocused, setWasInputFocused] = useState(false);

  useLayoutEffect(() => {
    if (inputRef.current) {
      const curPage = '' + currentPage;
      const length = curPage.length > 0 ? curPage.length : 1;
      inputRef.current.style.width = isNaN(+curPage) ? '1ch' : `${length}ch`;
      // Only restore focus if the input was previously focused
      if (wasInputFocused) {
        inputRef.current.focus();
      }
    }
  }, [currentPage, wasInputFocused]);

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let page = e.target.valueAsNumber;
    if (page < 1) page = 1;
    if (page > total) page = total;

    setWasInputFocused(true); // Indicate that the input was focused when the change happened
    setCurrentPage(page);
    handleInputChange?.(page);
  };

  const handleButtonClick = (action: () => void) => {
    setWasInputFocused(false); // Prevent refocusing on the input after button click
    action();
  };

  const checkIfDisabled = (icon: string): boolean => {
    switch (icon) {
      case 'min':
      case 'prev':
        return currentPage === 1;
      case 'next':
      case 'max':
        return currentPage === total;
      default:
        return false;
    }
  };

  const shouldHideButtons = total === 1;

  return (
    <PaginationWrapper className={className}>
      <div className="mr-10 flex items-center gap-2 text-sm">
        <label htmlFor="current-page">Page</label>
        <Input
          type="number"
          ref={inputRef}
          value={currentPage}
          onChange={inputChange}
          aria-label="Current page"
          id="current-page-input"
        />
        <span className="text-nowrap"> of {total}</span>
      </div>
      {!shouldHideButtons && (
        <PaginationContent>
          <IconButton
            icon={<ChevronsLeft className="h-[12px] w-[12px]" />}
            paint="neutral"
            size="sm"
            shape="square"
            onClick={() => handleButtonClick(handleMin)}
            disabled={checkIfDisabled('min')}
          />
          <IconButton
            icon={<ChevronLeft className="h-[12px] w-[12px]" />}
            paint="neutral"
            size="sm"
            shape="square"
            onClick={() => handleButtonClick(handlePrev)}
            disabled={checkIfDisabled('prev')}
          />
          <IconButton
            icon={<ChevronRight className="h-[12px] w-[12px]" />}
            paint="neutral"
            size="sm"
            shape="square"
            onClick={() => handleButtonClick(handleNext)}
            disabled={checkIfDisabled('next')}
          />
          <IconButton
            icon={<ChevronsRight className="h-[12px] w-[12px]" />}
            paint="neutral"
            size="sm"
            shape="square"
            onClick={() => handleButtonClick(handleMax)}
            disabled={checkIfDisabled('max')}
          />
        </PaginationContent>
      )}
    </PaginationWrapper>
  );
};
