import { forwardRef } from 'react';
import { Button, Typography } from '@/components';
import { cn } from '@/utils';

import { ThemeSelectorProps } from './types';

export const ThemeSelector = forwardRef<HTMLDivElement, ThemeSelectorProps>(
  (
    {
      onModeChanged,
      onAccentChanged,
      accents,
      modes,
      title,
      text,
      iconClose,
      selectedMode,
      selectedAccent,
    },
    ref,
  ) => {
    return (
      <>
        <div
          ref={ref}
          className="relative mb-6"
        >
          <Typography
            size="heading4"
            tag="h4"
          >
            {title}
          </Typography>
          <p className="text-sm text-muted-text">{text}</p>
          {iconClose}
        </div>
        <fieldset className="mb-6">
          <Typography
            size="heading4"
            tag="legend"
          >
            Mode
          </Typography>
          <div className="grid grid-cols-3 gap-2">
            {modes &&
              modes.map((item) => {
                return (
                  <label
                    key={item.code}
                    className="relative"
                  >
                    <input
                      type="radio"
                      name="theme-mode"
                      value={item.code}
                      onChange={() => onModeChanged(item.code)}
                      className="peer absolute h-full w-full cursor-pointer opacity-0"
                    />
                    <Button
                      variant="outline"
                      className={cn(
                        'flex w-full border border-border transition-colors duration-300',
                        selectedMode === item.code && 'border-ui-accent-500',
                      )}
                    >
                      <span className="flex h-5 w-5 items-center justify-center text-foreground">
                        {item.icon}
                      </span>
                      {item.displayValue}
                    </Button>
                  </label>
                );
              })}
          </div>
        </fieldset>
        <fieldset className="mb-6">
          <Typography
            size="heading4"
            tag="legend"
          >
            Color
          </Typography>
          <div className="grid grid-cols-3 gap-2">
            {accents &&
              accents.map((item) => {
                return (
                  <label
                    key={item.code}
                    className="relative"
                  >
                    <input
                      type="radio"
                      name="theme-accent"
                      value={item.code}
                      onChange={() => onAccentChanged(item.code)}
                      className="peer absolute h-full w-full cursor-pointer opacity-0"
                    />
                    <Button
                      variant="outline"
                      className={cn(
                        'flex w-full items-center justify-start border border-border px-3.5 py-2 transition-colors duration-300',
                        selectedAccent === item.code && 'border-ui-accent-500',
                      )}
                    >
                      <div
                        className="h-5 w-5 rounded-full border border-transparent"
                        style={{
                          backgroundColor: item.color,
                        }}
                      />
                      {item.displayValue}
                    </Button>
                  </label>
                );
              })}
          </div>
        </fieldset>
      </>
    );
  },
);
