import { createContext, forwardRef, useContext, useId } from 'react';
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from 'react-hook-form';
import { Slot } from '@radix-ui/react-slot';
import { Label } from '@/components/atoms/Label';
import { cn } from '@/utils';
import { FormFieldContextValue, FormItemContextValue } from './types';

/** @deprecated
 * This component is not verified yet.
 * His usage can be changed in the future.
 */
export const Form = FormProvider;

const FormFieldContext = createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

/** @deprecated
 * This component is not verified yet.
 * His usage can be changed in the future.
 */
export const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

/** @deprecated
 * This component is not verified yet.
 * His usage can be changed in the future.
 */
export const useFormField = () => {
  const fieldContext = useContext(FormFieldContext);
  const itemContext = useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

/** @deprecated
 * This component is not verified yet.
 * His usage can be changed in the future.
 */
export const FormItem = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      {/* next dev relative by default because has absolute error block */}
      <div
        ref={ref}
        className={cn('relative flex flex-col gap-1', className)}
        {...props}
      />
    </FormItemContext.Provider>
  );
});

/** @deprecated
 * This component is not verified yet.
 * His usage can be changed in the future.
 */
export const FormLabel = forwardRef<
  React.ElementRef<typeof Label>,
  React.ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => {
  const { formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={className}
      htmlFor={formItemId}
      {...props}
    />
  );
});

/** @deprecated
 * This component is not verified yet.
 * His usage can be changed in the future.
 */
export const FormControl = forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
});

/** @deprecated
 * This component is not verified yet.
 * His usage can be changed in the future.
 */
export const FormDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn('text-xs text-muted-text', className)}
      {...props}
    />
  );
});

/** @deprecated
 * This component is not verified yet.
 * His usage can be changed in the future.
 */
export const FormMessage = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn('min-h-4 text-xs font-medium text-destructive', className)}
      {...props}
    >
      {body}
    </p>
  );
});
