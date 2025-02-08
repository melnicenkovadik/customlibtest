import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '.';
import { AUTHORS } from '.storybook/authors';

const meta: Meta<typeof Checkbox> = {
  id: 'Atoms/Checkbox',
  title: 'Verified/Atoms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    label: 'Accept terms and conditions',
    checked: false,
  },
  parameters: {
    embedDesigns: [
      'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
    designs: [
      'https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
    author: AUTHORS['vadym.melnicenko'],
  },
  render: () => {
    const [checked, setChecked] = useState(false);

    const handleCheck = () => setChecked((prev) => !prev);

    return (
      <Checkbox
        label="Accept terms and conditions"
        checked={checked}
        className="mb-8"
        onCheckedChange={handleCheck}
      />
    );
  },
};

export const WithDetails: Story = {
  args: {
    label: 'Accept terms and conditions',
    checked: false,
    details: 'You agree to our Terms of Service and Privacy Policy.',
  },
  parameters: {
    designs: [
      'https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
    author: AUTHORS['vadym.melnicenko'],
  },
  render: () => {
    const [checked, setChecked] = useState(false);

    const handleCheck = () => setChecked((prev) => !prev);

    return (
      <Checkbox
        label="Accept terms and conditions"
        details="You agree to our Terms of Service and Privacy Policy."
        checked={checked}
        onCheckedChange={handleCheck}
      />
    );
  },
};
