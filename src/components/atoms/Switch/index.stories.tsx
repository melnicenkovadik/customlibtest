import { Controller, useForm } from 'react-hook-form';
import { Label } from '@/components/atoms/Label';
import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from '.';
import { AUTHORS } from '.storybook/authors';

const meta: Meta<typeof Switch> = {
  id: 'Atoms/Switch',
  title: 'Verified/Atoms/Switch',
  component: Switch,
  tags: ['autodocs'],
};

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
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: { type: 'select' },
    },
  },
  render: (args) => {
    const { control, handleSubmit } = useForm({
      defaultValues: {
        switchValue: false,
      },
    });

    const onSubmit = ({ switchValue }: { switchValue: boolean }) => {
      console.log('switchValue', switchValue);
    };

    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center space-x-2"
      >
        <Controller
          name="switchValue"
          control={control}
          render={({ field: { value, onChange } }) => {
            return (
              <Switch
                id="airplane-mode"
                checked={value}
                onCheckedChange={onChange}
                size={args.size}
              />
            );
          }}
        />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </form>
    );
  },
};
