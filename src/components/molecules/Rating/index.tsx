import { Fragment, useEffect, useState } from 'react';
import { cn } from '@/utils';
import { Star } from 'lucide-react';
import { RatingComponentProps, ratingVariants } from './types';

const RatingStar = ({
  label,
  fill,
  onChange,
  value,
  size = 16,
}: {
  label: string;
  fill: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
  size?: number;
}) => (
  <>
    <input
      className="absolute left-0 m-0 h-full cursor-pointer appearance-none"
      type="radio"
      name="rating"
      aria-label={label}
      onChange={onChange}
      value={value}
    />
    <Star
      fill={fill}
      size={size}
    />
  </>
);

export const Rating = ({
  className,
  score = 0,
  state = 'read-only',
  onChange,
  size = 16,
}: RatingComponentProps) => {
  const [rating, setRating] = useState(0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRating(Number(e.target.value));
    onChange?.(Number(e.target.value));
  };

  const stars = ['*', '*', '*', '*', '*'];

  useEffect(() => {
    if (Math.floor(score) !== rating) setRating(Math.floor(score));
  }, [score, rating]);

  function roundDecimal(num: number) {
    if (num >= 70) return 60;
    if (num >= 50) return 50;
    return 40;
  }

  const lastStarFill = roundDecimal(
    Number((score % 1).toFixed(2).split('.')[1]),
  );

  const Filler = ({ size, index }: { size: number; index: number }) => (
    <Star
      size={size}
      className="absolute"
      fill="var(--foreground)"
      style={{
        clipPath: `inset(0 calc(100% - ${lastStarFill}%) 0 0)`,
        left: `${(size + 4) * index}px`,
      }}
    />
  );

  return (
    <div className="mx-auto inline-flex">
      <fieldset
        className={cn(
          ratingVariants({ state }),
          'flex justify-center',
          className,
        )}
      >
        {stars.map((_, i) => {
          const index = i + 1;
          return (
            <Fragment key={index}>
              {index === Math.ceil(score) && state === 'read-only' && (
                <Filler
                  size={size}
                  index={index}
                />
              )}
              <RatingStar
                size={size}
                label={`${index} star`}
                fill={index <= rating ? 'var(--foreground)' : 'none'}
                onChange={state === 'controlled' ? handleChange : () => {}}
                value={index}
              />
            </Fragment>
          );
        })}
      </fieldset>
    </div>
  );
};
