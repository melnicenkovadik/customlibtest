import { CopyButton } from '@/components/atoms/CopyButton';
import { TextWithActions } from '@/components/molecules/TextWithActions/index';
import type { Meta, StoryObj } from '@storybook/react';
import { AUTHORS } from '.storybook/authors';
import { BADGE } from '.storybook/constants';

const meta: Meta<typeof TextWithActions> = {
  id: 'Molecules/TextWithActions',
  title: 'Verified/Molecules/TextWithActions',
  component: TextWithActions,
  tags: ['autodocs'],
  parameters: {
    badges: [BADGE.CUSTOM],
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
  },
  argTypes: {
    text: { control: false },
    textClasses: { control: false },
    variant: { control: false },
    actions: { control: false },
    startTruncate: { control: false },
  },
  args: {
    text: '0xc74988386A9D7b6847e1e75Ede123D8eB1191cCf',
    textClasses: 'text-secondary-text',
    isTruncate: true,
    className: 'mt-[2px] gap-1',
    actions: [
      <CopyButton
        key="copy"
        value="0xc74988386A9D7b6847e1e75Ede123D8eB1191cCf"
        className="text-secondary-text hover:text-primary-hover"
      />,
    ],
  },
};
