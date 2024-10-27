import React from 'react';
import { Button } from '@/components/atoms/Button';
import { cn } from '@/utils';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { CarouselApi, CarouselContextProps, CarouselProps } from './types';

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
}

export const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = 'horizontal',
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === 'horizontal' ? 'x' : 'y',
      },
      plugins,
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext],
    );

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on('reInit', onSelect);
      api.on('select', onSelect);

      return () => {
        api?.off('select', onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api,
          opts,
          orientation:
            orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn('relative', className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);

export const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden"
    >
      <div
        ref={ref}
        className={cn(
          'flex',
          orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
          className,
        )}
        {...props}
      />
    </div>
  );
});

export const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        className,
      )}
      {...props}
    />
  );
});

interface CarouselPrevProps extends React.ComponentProps<typeof Button> {
  prevSlideText?: string;
}

export const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  CarouselPrevProps
>(
  (
    {
      className,
      variant = 'outline',
      size = 'icon-m',
      prevSlideText = 'Previous slide',
      ...props
    },
    ref,
  ) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();

    if (!canScrollPrev) return;

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          'absolute h-8 w-8 rounded-full',
          orientation === 'horizontal'
            ? '-left-12 top-1/2 -translate-y-1/2'
            : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
          className,
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">{prevSlideText}</span>
      </Button>
    );
  },
);

interface CarouselNextProps extends React.ComponentProps<typeof Button> {
  nextSlideText?: string;
}

export const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  CarouselNextProps
>(
  (
    {
      className,
      variant = 'outline',
      size = 'icon-m',
      nextSlideText = 'Next slide',
      ...props
    },
    ref,
  ) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();

    if (!canScrollNext) return;

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          'absolute h-8 w-8 rounded-full',
          orientation === 'horizontal'
            ? '-right-12 top-1/2 -translate-y-1/2'
            : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
          className,
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">{nextSlideText}</span>
      </Button>
    );
  },
);

export const CarouselDots = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { api } = useCarousel();
  // eslint-disable-next-line
  const [_, setUpdateState] = React.useState(false);
  const toggleUpdateState = React.useCallback(
    () => setUpdateState((prevState) => !prevState),
    [],
  );

  React.useEffect(() => {
    if (api) {
      api.on('select', toggleUpdateState);
      api.on('reInit', toggleUpdateState);

      return () => {
        api.off('select', toggleUpdateState);
        api.off('reInit', toggleUpdateState);
      };
    }
  }, [api, toggleUpdateState]);

  let numberOfSlides = 0;
  let currentSlide = 0;

  if (api) {
    numberOfSlides = api.scrollSnapList().length;
    currentSlide = api.selectedScrollSnap();
  }

  return numberOfSlides > 1 ? (
    <div
      ref={ref}
      className={`flex justify-center gap-2 ${props.className}`}
    >
      {Array.from({ length: numberOfSlides }, (_, i) => (
        <span
          key={i}
          className={`mt-4 h-2 w-2 cursor-pointer rounded-full border ${
            i === currentSlide
              ? 'border-none bg-foreground'
              : 'border-none bg-border'
          }`}
          aria-label={`Go to slide ${i + 1}`}
          onClick={() => api?.scrollTo(i)}
        />
      ))}
    </div>
  ) : null;
});
