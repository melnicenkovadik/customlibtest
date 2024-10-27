import { useLayoutEffect, useMemo, useRef } from 'react';
import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...classes: ClassValue[]) => twMerge(clsx(classes));

export const pluralize = (count: number, noun: string, suffix = 's') =>
  `${noun}${count > 1 ? suffix : ''}`;

export const truncateText = (
  value: string,
  start: number = 2,
  end: number = 4,
  dots: number = 3,
) => {
  if (!value || value.length <= start + end) {
    return value;
  }

  const startPart = value.substring(0, start);
  const endPart = value.substring(value.length - end);
  const dotsPart = '.'.repeat(dots);

  return `${startPart}${dotsPart}${endPart}`;
};

export const formatCurrency = (price: number, locale = 'en-US') => {
  return new Intl.NumberFormat(locale).format(price);
};

export const useDebounce = (
  callback: (...args: any[]) => void,
  delay: number,
) => {
  const callbackRef = useRef(callback);

  useLayoutEffect(() => {
    callbackRef.current = callback;
  });

  let timer: any;

  const naiveDebounce = (
    func: (...args: any[]) => void,
    delayMs: number,
    ...args: any[]
  ) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delayMs);
  };

  return useMemo(
    () =>
      (...args: any) =>
        naiveDebounce(callbackRef.current, delay, ...args),
    // eslint-disable-next-line
    [delay],
  );
};

export const formatValue = (value: any) => {
  if (typeof value === 'string') {
    return parseFloat(value).toFixed(2);
  }
  return value.toFixed(2);
};
