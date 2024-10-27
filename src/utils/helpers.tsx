import { ReactElement } from 'react';

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

export const formatValue = (value: any) => {
  if (typeof value === 'string') {
    return parseFloat(value).toFixed(2);
  }
  return value.toFixed(2);
};

export const highlightHashtags = (text: string): ReactElement => {
  if (!text || !text.includes('#')) {
    return <>{text}</>;
  }

  return (
    <>
      {text.split(' ').map((word) =>
        word.startsWith('#') ? (
          <span
            key={word}
            className="text-blue-500 dark:text-ui-accent-500"
          >
            {word}{' '}
          </span>
        ) : (
          <>{word} </>
        ),
      )}
    </>
  );
};
