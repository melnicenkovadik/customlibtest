import { ClassNamesConfig } from 'react-select';
import { cn } from '@/utils';
import { cva } from 'class-variance-authority';

export const selectVariants = cva('flex border !border-border !bg-background', {
  variants: {
    variant: {
      default:
        'h-10 !cursor-pointer !rounded-md px-3 focus:border-muted-text focus:ring-2 focus:ring-ring focus:ring-offset-2',
      small: 'h-[37px] !min-h-7 cursor-pointer !rounded-[100px]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const getSelectClassNames = (
  variantClasses?: string,
  isErrors?: boolean,
): ClassNamesConfig => {
  const focusedStyles = '!shadow-none';
  const openMenuStyles = 'shadow-none border hover:shadow-none';
  const defaultControlStyles =
    'hover:cursor-pointer flex border-0 px-3 hover:border-border';

  return {
    control: ({ selectProps: { menuIsOpen }, isFocused }) =>
      cn(
        variantClasses,
        { [focusedStyles]: isFocused },
        { [openMenuStyles]: menuIsOpen },
        defaultControlStyles,
      ),

    indicatorSeparator: () => cn('hidden'),

    dropdownIndicator: ({ selectProps: { menuIsOpen } }) =>
      cn('!p-0 cursor-pointer', menuIsOpen && 'transform rotate-180 !py-0'),

    indicatorsContainer: () => cn('!p-0'),

    clearIndicator: () => cn('!p-0 cursor-pointer'),

    container: ({ selectProps: { menuIsOpen } }) =>
      cn(
        'bg-background rounded-md outline outline-2 outline-offset-1 text-transparent',
        menuIsOpen && 'outline outline-2 outline-offset-1 text-secondary-text',
        isErrors && 'text-destructive',
      ),

    menu: ({ selectProps: { menuIsOpen } }) =>
      cn('rounded-md !bg-background', menuIsOpen && 'border border-border'),

    option: ({ isSelected }: { isSelected: boolean }) =>
      cn(
        'rounded-md !bg-transparent hover:!bg-ghost !py-0 hover:cursor-pointer',
        isSelected && '!bg-ghost',
      ),

    placeholder: () => 'truncate',

    singleValue: () => cn('!text-foreground'),

    input: () => cn('!text-foreground'),
  };
};
