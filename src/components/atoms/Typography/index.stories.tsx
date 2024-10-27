import { Meta, StoryObj } from '@storybook/react';

import { Typography } from '.';
import { TypographyProps } from './types';
import { AUTHORS } from '.storybook/authors';

const meta: Meta<typeof Typography> = {
  id: 'Atoms/Typography',
  title: 'Verified/Atoms/Typography',
  component: Typography,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const variantOptions: TypographyProps['size'][] = [
  'heading1',
  'heading2',
  'heading3',
  'heading4',
  'heading5',
  'body1',
  'body2',
  'body3',
  'body4',
];

const colorOptions: TypographyProps['color'][] = [
  'default',
  'secondary',
  'tertiary',
  'gradient',
  'accent',
];
const componentOptions: TypographyProps['tag'][] = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'span',
  'div',
];

export const Playground: Story = {
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    embedDesigns: [
      'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
    designs: [
      'https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
  },
  args: {
    size: 'body1',
    children: 'Text',
    color: 'default',
    tag: 'h6',
  },
  argTypes: {
    size: {
      options: variantOptions,
      control: { type: 'select' },
    },
    color: {
      options: colorOptions,
      control: { type: 'select' },
    },
    tag: {
      options: componentOptions,
      control: false,
    },
  },
};

export const Variants: Story = {
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    designs: [
      'https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
  },
  args: {
    color: 'default',
    tag: undefined,
  },
  argTypes: {
    disableHashtagsHighlighting: {
      options: [true, false],
      control: { type: 'select' },
    },
    size: {
      options: variantOptions,
      control: false,
    },
    color: {
      options: colorOptions,
      control: { type: 'select' },
    },
    tag: {
      options: componentOptions,
      control: false,
    },
  },
  render: (args) => {
    const variantsMap = new Map<TypographyProps['size'], string>([
      ['heading1', '48px'],
      ['heading2', '30px'],
      ['heading3', '24px'],
      ['heading4', '20px'],
      ['heading5', '18px'],
      ['body1', '16px'],
      ['body2', '14px'],
      ['body3', '12px'],
      ['body4', '10px'],
    ]);
    return (
      <div className="flex flex-col items-center gap-4">
        {Array.from(variantsMap.entries()).map(
          ([size, pxEquivalent], index) => (
            <Typography
              key={index}
              {...args}
              size={size}
            >{`${pxEquivalent} Typography`}</Typography>
          ),
        )}
      </div>
    );
  },
};

export const Colors: Story = {
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    designs: [
      'https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
  },
  args: {
    size: 'body1',
    tag: undefined,
  },
  argTypes: {
    size: {
      options: variantOptions,
      control: { type: 'select' },
    },
    color: {
      options: colorOptions,
      control: false,
    },
    tag: {
      options: componentOptions,
      control: false,
    },
  },
  render: (args) => {
    const sizesMap = new Map<TypographyProps['color'], string>([
      ['secondary', 'text-secondary'],
      ['tertiary', 'text-tertiary'],
      ['gradient', 'bg-unicorn-gradient'],
      ['accent', 'text-ui-accent-500'],
    ]);
    return (
      <div className="flex flex-col items-center gap-4">
        {Array.from(sizesMap.entries())
          .reverse()
          .map(([color], index) => (
            <Typography
              {...args}
              key={index}
              color={color}
            >{`${color} Typography`}</Typography>
          ))}
      </div>
    );
  },
};
