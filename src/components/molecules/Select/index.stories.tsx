import { components, ControlProps } from 'react-select';
import { Meta, StoryObj } from '@storybook/react';
import { Search } from 'lucide-react';

import { Select } from '.';
import { addresses } from './mock';
import { AUTHORS } from '.storybook/authors';

const meta: Meta<typeof Select> = {
  id: 'Molecules/Select',
  title: 'Verified/Molecules/Select',
  component: Select,
  tags: ['autodocs'],
};

export default meta;

const Control = ({ children, ...props }: ControlProps) => {
  return (
    <components.Control {...props}>
      <Search className="h-4 w-4 text-secondary-text" />
      {children}
    </components.Control>
  );
};

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    embedDesigns: [
      'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412'
    ],
    designs: [''],
  },
  argTypes: {
    CustomControl: {
      control: false,
    },
    CustomOption: {
      control: false,
    },
    variant: {
      control: false,
    },
    selectedOption: {
      control: false,
    },
    menuPosition: {
      control: false,
    },
  },
  args: {
    options: addresses,
    placeholder: 'Wallet Address',
    CustomControl: Control,
    isClearable: true,
    className: 'w-[352px]',
  },
  render: (args) => <Select {...args} />,
};

export const SelectWithError: Story = {
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
  },
  argTypes: {
    CustomControl: {
      control: false,
    },
    CustomOption: {
      control: false,
    },
    variant: {
      control: false,
    },
    selectedOption: {
      control: false,
    },
    menuPosition: {
      control: false,
    },
  },
  args: {
    options: addresses,
    placeholder: 'Wallet Address',
    CustomControl: Control,
    isClearable: true,
    className: 'w-[352px]',
    isErrors: true,
  },
  render: (args) => {
    return <Select {...args} />;
  },
};

export const CreatableSelect: Story = {
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
  },
  argTypes: {
    CustomControl: {
      control: false,
    },
    CustomOption: {
      control: false,
    },
    variant: {
      control: false,
    },
    selectedOption: {
      control: false,
    },
    menuPosition: {
      control: false,
    },
  },
  args: {
    isCreatable: true,
    options: addresses,
    placeholder: 'Wallet Address',
    CustomControl: Control,
    isClearable: true,
    className: 'w-[352px]',
    isErrors: false,
  },
  render: (args) => {
    return <Select {...args} />;
  },
};

export const SelectWithLabel: Story = {
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    designs: [
      'https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412' +
      'KRK/%F0%9F%8E%AF-Design-System---Atoms%2C-Molecu' +
      'les%2C-Org.-CustomHubUI?node-id=1723-500937&m=dev',
    ],
  },
  argTypes: {
    CustomControl: {
      control: false,
    },
    CustomOption: {
      control: false,
    },
    variant: {
      control: false,
    },
    selectedOption: {
      control: false,
    },
    menuPosition: {
      control: false,
    },
  },
  args: {
    options: addresses,
    placeholder: 'Wallet Address',
    CustomControl: Control,
    isClearable: true,
    className: 'w-[352px]',
    label: 'Wallet Address',
  },
  render: (args) => {
    return <Select {...args} />;
  },
};
