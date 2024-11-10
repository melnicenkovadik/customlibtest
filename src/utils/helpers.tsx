import { ReactElement } from 'react';

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
