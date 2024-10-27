import { Controller, useForm } from 'react-hook-form';
import { Button, Textarea } from '@/components';
import { Error } from '@/components/molecules/Form/Error';
import { Input } from '@/components/molecules/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { action } from '@storybook/addon-actions';
import { Meta, type StoryObj } from '@storybook/react';
import { z } from 'zod';

import { Form, FormItem } from '.';
import { AUTHORS } from '.storybook/authors';

const meta: Meta<typeof Form> = {
  id: 'Molecules/Form',
  title: 'Verified/Molecules/Form',
  component: Form,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    embedDesign: [
      'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
  },
  render: () => {
    const dayRegex = /^(0[1-9]|[12][0-9]|3[01])$/;
    const FormSchema = z.object({
      address1: z.string().min(1, { message: 'Address 1 is required' }),
      address2: z.string().optional(),
      city: z.string().min(1, { message: 'Town/City is required' }),
      code: z
        .string()
        .min(1, { message: 'Zip/Postal Code is required' })
        .regex(/^\d+$/, { message: 'Zip/Postal Code must be numbers only' }),
      country: z.string().min(1, { message: 'Country is required' }),
      day: z.string().regex(dayRegex, {
        message: 'Invalid day format',
      }),
      comment: z.string().min(1, { message: 'Comment is required' }),
    });

    const {
      register,
      handleSubmit,
      control,
      formState: { errors },
    } = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
    });

    return (
      <form
        onSubmit={handleSubmit(action('[React Hooks Form] Submit'))}
        className="flex w-[400px] flex-col gap-3 pb-3"
      >
        <fieldset className="flex flex-col gap-4">
          <FormItem>
            <Input
              label="Address 1"
              {...register('address1')}
              placeholder="1249 NE Broadway"
              isErrors={!!errors.address1}
            />
            <Error
              errors={errors}
              name="address1"
              as="span"
            />
          </FormItem>
          <FormItem>
            <Input
              label="Address 2"
              {...register('address2')}
              placeholder="1249 NE Broadway"
            />
          </FormItem>
          <FormItem>
            <Input
              label="Town/City"
              {...register('city')}
              isErrors={!!errors.city}
              placeholder="Portland"
            />
            <Error
              errors={errors}
              name="city"
              as="span"
            />
          </FormItem>
          <FormItem>
            <Input
              label="Zip/Postal Code"
              {...register('code')}
              type="number"
              isErrors={!!errors.code}
              placeholder="USA"
            />
            <Error
              errors={errors}
              name="code"
              as="span"
            />
          </FormItem>
          <FormItem>
            <Input
              label="Select Country"
              {...register('country')}
              isErrors={!!errors.country}
              placeholder="Philips"
            />
            <Error
              errors={errors}
              name="country"
              as="span"
            />
          </FormItem>
        </fieldset>
        <fieldset className="mt-1">
          <FormItem>
            <Controller
              control={control}
              name="day"
              render={({ field: { onChange, value } }) => (
                <Input
                  label="DOB"
                  placeholder="Day"
                  isErrors={!!errors.day}
                  maxLength={2}
                  type="number"
                  onChange={onChange}
                  value={value || ''}
                />
              )}
            />
            <Error
              errors={errors}
              name="day"
              as="span"
            />
          </FormItem>
        </fieldset>
        <fieldset className="mt-1">
          <FormItem>
            <Textarea
              label="Comment"
              {...register('comment')}
              isErrors={!!errors.comment}
              placeholder="Add details"
            />
            <Error
              errors={errors}
              name="comment"
              as="span"
            />
          </FormItem>
        </fieldset>
        <div className="mt-3 flex flex-wrap gap-3">
          <Button className="w-full">Save</Button>
          <Button
            className="w-full"
            variant="tertiary"
            type="button"
          >
            Skip
          </Button>
        </div>
      </form>
    );
  },
};
