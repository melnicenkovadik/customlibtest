import { ComponentType, ReactNode } from 'react';
import { ActionMeta, ControlProps, OptionProps, Props } from 'react-select';
import { OptionType } from '@/components/molecules/SelectItem/types';

export type CustomOptionType = OptionProps & {
  data: OptionType;
  children: ReactNode;
};
export type CustomControlType = ControlProps & { children: ReactNode };

export interface SelectProps extends Props {
  isErrors?: boolean;
  setSelectedOption?: (
    newValue: unknown,
    actionMeta: ActionMeta<unknown>,
  ) => void;
  id?: string;
  selectedOption?: ReactNode | string;
  variant?: 'default' | 'small';
  label?: ReactNode | string;
  CustomOption?: ComponentType<OptionProps<unknown, boolean>>;
  CustomControl?: ComponentType<ControlProps>;
  placeholder?: string;
  wrapperClassName?: string;
}
