import { Typography } from '@/components/atoms/Typography';
import { cn } from '@/utils';

export const Palette = () => {
  const Preview = ({
    name,
    className,
    colorModeDependent = false,
  }: {
    name: string;
    className: string;
    colorModeDependent?: boolean;
  }) => {
    return (
      <div className="flex flex-col gap-1">
        <div className={cn('h-20 w-40', className)} />
        <Typography size="body2">{name}</Typography>
        {colorModeDependent && (
          <Typography
            size="body4"
            color="tertiary"
          >
            Depedent on color mode
          </Typography>
        )}
      </div>
    );
  };
  return (
    <div className="flex flex-col gap-3">
      <Typography size="heading2">Color</Typography>
      <div className="flex flex-row flex-wrap gap-3">
        <Preview
          className="bg-ui-accent-500"
          name="Accent / Blue 500"
        />
        <Preview
          className="bg-ui-accent-400"
          name="Hover button / Blue 400"
        />
        <Preview
          className="bg-ui-accent-600"
          name="Pressed button / Blue 600"
        />
        <Preview
          className="bg-ui-accent-500-40"
          name="Disabled / Blue 500"
        />
      </div>
      <Typography size="heading2">Background</Typography>
      <div className="flex flex-row flex-wrap gap-3">
        <Preview
          className="bg-gd-dark-xs"
          name="Gradient cards and post"
        />
        <Preview
          className="bg-gd-light-xs"
          name="Gradient banner"
        />
        <Preview
          className="bg-gd-s"
          name="Gradient bg (S)"
          colorModeDependent={true}
        />
        <Preview
          className="bg-gd-m"
          name="Gradient bg (M)"
          colorModeDependent={true}
        />
        <Preview
          className="bg-gd-l"
          name="Gradient bg (L)"
          colorModeDependent={true}
        />
      </div>
      <Typography size="heading2">Strokes</Typography>
      <div className="flex flex-row flex-wrap gap-3">
        <Preview
          className="bg-banner-stroke"
          name="Banner stroke"
        />
        <Preview
          className="bg-hover-stroke"
          name="Hover stroke"
        />
        <Preview
          className="bg-ui-accent-500-50"
          name="Opacity stroke"
        />
      </div>
    </div>
  );
};
