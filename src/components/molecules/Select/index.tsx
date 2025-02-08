import { FC } from 'react';
import SelectComponent, {
  ClearIndicatorProps,
  components,
  ControlProps,
  DropdownIndicatorProps,
} from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { Label } from '@/components/atoms/Label';
import { SelectItem } from '@/components/molecules/SelectItem';
import { cn } from '@/utils';
import { ChevronDown, Search, X } from 'lucide-react';
import { getSelectClassNames, selectVariants } from './styles';
import { CustomOptionType, SelectProps } from './types';

export const Select = ({
  className = '',
  wrapperClassName = '',
  setSelectedOption,
  selectedOption,
  options,
  placeholder = 'Search...',
  //@ts-expect-error  Need to be re-searched and fixed
  CustomOption = CustomOptionComponent,
  CustomControl = Control,
  variant = 'default',
  menuPosition = 'absolute',
  defaultMenuIsOpen = false,
  id,
  label,
  isErrors = false,
  isCreatable = false, // New prop to control creatable behavior
  handleCreate,
  isLoading = false,
  ...props
}: SelectProps & {
  isCreatable?: boolean;
  handleCreate?: (newValue: string) => void;
  isLoading?: boolean;
}) => {
  const variantClasses = selectVariants({ variant });

  const SelectComponentToRender = isCreatable
    ? CreatableSelect
    : SelectComponent;

  return (
    <div className={cn('flex flex-col gap-1', wrapperClassName)}>
      {label && (
        <Label
          htmlFor={id}
          className="block truncate"
          id="aria-label"
        >
          {label}
        </Label>
      )}
      <SelectComponentToRender
        className={cn('w-full', className)}
        defaultValue={selectedOption}
        placeholder={placeholder}
        menuPosition={menuPosition}
        defaultMenuIsOpen={defaultMenuIsOpen}
        onChange={setSelectedOption}
        options={options}
        inputId={id}
        aria-labelledby="aria-label"
        classNames={getSelectClassNames(variantClasses, isErrors)}
        components={{
          DropdownIndicator,
          Control: CustomControl,
          Option: CustomOption,
          ClearIndicator,
        }}
        onCreateOption={isCreatable ? handleCreate : undefined}
        isClearable={isCreatable ? true : props.isClearable}
        isLoading={isLoading}
        isDisabled={isLoading || props.isDisabled}
        {...props}
      />
    </div>
  );
};

export const DropdownIndicator: FC<DropdownIndicatorProps> = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <ChevronDown
        className={cn(
          'h-5 w-5 text-secondary-text transition-transform',
          props.hasValue && props.selectProps.isClearable && 'hidden',
        )}
      />
    </components.DropdownIndicator>
  );
};

export const ClearIndicator: FC<ClearIndicatorProps> = (props) => {
  return (
    <components.ClearIndicator {...props}>
      <div
        onMouseDown={(e) => {
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
          props.clearValue();
        }}
        className="cursor-pointer"
      >
        <X className="h-4 w-4 text-secondary-text" />
      </div>
    </components.ClearIndicator>
  );
};

export const Control = ({ children, ...props }: ControlProps) => {
  return (
    <components.Control {...props}>
      <Search className="h-4 w-4 text-secondary-text" />
      {children}
    </components.Control>
  );
};

export const CustomOptionComponent = (props: CustomOptionType) => {
  const { data } = props;
  return (
    <components.Option {...props}>
      <SelectItem option={data} />
    </components.Option>
  );
};
