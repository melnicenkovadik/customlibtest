import { ComponentType, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/atoms';
import { IconButton } from '@/components/atoms/IconButton';
import { FormItem } from '@/components/molecules/Form';
import { cn } from '@/utils';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { Eye, Plus } from 'lucide-react';
import { z } from 'zod';

import { Input } from '.';
import { InputArgs } from './types';
import { AUTHORS } from '.storybook/authors';

// This is a helper component to add styles to the ErrorMessage component
const withStyles = <TProps extends object>(
  Component: ComponentType<TProps>,
) => {
  return (props: TProps) => {
    return (
      <Component
        {...props}
        className="text-error absolute bottom-[-22px] text-sm text-destructive"
      />
    );
  };
};

const meta: Meta<typeof Input> = {
  id: 'Molecules/Input',
  title: 'Verified/Molecules/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    start: {
      control: false,
    },
    end: {
      control: false,
    },
  },
};

Input.displayName = 'InputComponent';
export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    embedDesigns: [
      'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412'
    ],
    designs: [
      'https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
  },
  args: {
    disabled: false,
    onChange: action('on-change'),
    label: 'Email',
    type: 'email',
    onClear: action('on-change-search-input'),
  },
  render: (args) => {
    const FormSchema = z.object({
      email: z
        .string()
        .email('Invalid email address')
        .nonempty('Email is required'),
    });

    const { handleSubmit, register, formState } = useForm<
      z.infer<typeof FormSchema>
    >({
      resolver: zodResolver(FormSchema),
    });

    const { errors } = formState;
    const error = errors.email?.message;

    const isErrors = Object.keys(errors).length > 0;

    const onSubmit = () => {};
    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn(
          'flex w-full items-center justify-center gap-3 pb-3',
          args.disabled && 'pointer-events-none opacity-[0.5]',
        )}
      >
        <FormItem className="flex-1">
          <Input
            label="Email"
            {...register('email')}
            isErrors={isErrors}
            id="email"
            start={
              <IconButton
                paint="neutral"
                version="ghost"
                icon={<Plus className="h-[18px] w-[18px] text-muted-text" />}
                className="h-[18px] w-[18px]"
              />
            }
            end={
              !error && (
                <IconButton
                  paint="neutral"
                  version="ghost"
                  className="h-[18px] w-[18px]"
                  icon={<Eye className="h-[18px] w-[18px] text-muted-text" />}
                />
              )
            }
            helperText={error ? undefined : 'Enter your email address'}
            error={error}
            disabled={args.disabled}
          />
        </FormItem>
        <Button
          className="mt-0"
          variant="secondary"
        >
          Submit
        </Button>
      </form>
    );
  },
};

export const InputBottomBorder = {
  args: {},
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
  },
  render: () => {
    return (
      <Input
        onChange={() => {}}
        placeholder="Enter your name"
        className="w-[250px]"
        inputWrapperClassName="border-0 rounded-none border-b shadow-none outline-0 outline-offset-0"
      />
    );
  },
};

export const InputInsideForm = {
  args: {},
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
  },
  render: () => {
    const FormSchema = z.object({
      firstName: z.string().min(2, {
        message: 'Required',
      }),
    });

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { handleSubmit, register, formState } = useForm<
      z.infer<typeof FormSchema>
    >({
      resolver: zodResolver(FormSchema),
    });

    const { errors } = formState;

    const isErrors = Object.keys(errors).length > 0;

    const onSubmit = () => {};

    const Error = withStyles(ErrorMessage);
    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-[250px] flex-col gap-3 pb-3"
      >
        <FormItem>
          <Input
            label="First Name"
            {...register('firstName')}
            isErrors={isErrors}
            placeholder="John"
            id="firstName"
          />
          <Error
            errors={errors}
            name="firstName"
            as="span"
          />
        </FormItem>
        <Button className="mt-3">Submit</Button>
      </form>
    );
  },
};

export const InputPassword = {
  args: {},
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    designs: [
      'https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
  },
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [password, setPassword] = useState('');
    return (
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        label="Password"
        type="password"
      />
    );
  },
};

export const InputSearch = {
  args: {},
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    designs: [
      'https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
  },
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('');
    return (
      <Input
        className="w-[250px]"
        placeholder="Search..."
        onChange={(e) => setValue(e.target.value)}
        value={value}
        onClear={() => setValue('')}
        type="search"
      />
    );
  },
};

export const InputPictureUploaded = {
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    designs: [
      'https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
  },
  args: {
    disabled: false,
    maxSize: 1048576, // 1 MB
    maxNumberImg: 4,
  },
  render: (args: InputArgs) => {
    const [value, setValue] = useState('');
    return (
      <div className={cn(args.disabled && 'pointer-events-none opacity-[0.5]')}>
        <Input
          className="w-[320px]"
          disabled={args.disabled}
          placeholder="Choose File"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          onClear={() => setValue('')}
          type="upload-file"
          label="Picture"
          fileName="Choose File"
          acceptFile={{
            'image/jpeg': ['.jpeg', '.png'],
            'application/pdf': ['.pdf'],
            'application/msword': ['.doc'],
            'text/plain': ['.txt'],
          }}
          maxSize={args.maxSize}
          maxNumberImg={args.maxNumberImg}
        />
      </div>
    );
  },
};
