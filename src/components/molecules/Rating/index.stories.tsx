import { Button, Progress, Typography } from '@/components';
import type { Meta, StoryObj } from '@storybook/react';
import { MessageSquare } from 'lucide-react';

import { Rating } from '.';
import { RatingComponentProps } from './types';
import { AUTHORS } from '.storybook/authors';

const meta: Meta<typeof Rating> = {
  id: 'Molecules/Rating',
  title: 'Verified/Molecules/Rating',
  component: Rating,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    designs: [
      'https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
    embedDesigns: [
      'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412'
    ],
  },
  args: {
    score: 3.5,
    state: 'read-only',
  },
  render: (args: RatingComponentProps) => {
    return <Rating {...args} />;
  },
};

export const RatingSection: Story = {
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    designs: [
      'https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
  },
  args: {
    score: 4.1,
    state: 'read-only',
  },
  render: (args: RatingComponentProps) => {
    const { score } = args;
    const formattedScore = score.toString().replace('.', ',');

    const progressArr = [
      {
        title: '5 stars',
        score: 75,
      },
      {
        title: '4 stars',
        score: 50,
      },
      {
        title: '3 stars',
        score: 25,
      },
      {
        title: '2 stars',
        score: 0,
      },
      {
        title: '1 stars',
        score: 0,
      },
    ];

    return (
      <div className="flex min-w-[320px] flex-col justify-center">
        <div className="relative mx-auto mb-[14px] inline-flex items-center justify-center">
          <span className="absolute -left-[26px] text-xs text-secondary-text">
            Avg.
          </span>
          <Typography
            tag="h2"
            size="heading2"
            className="font-bold leading-[25px]"
          >
            {formattedScore}
          </Typography>
        </div>
        <Rating {...args} />
        <div className="mb-6 mt-2 text-center text-xs text-secondary-text">
          (2905 reviews)
        </div>
        <div>
          {progressArr.map((item) => {
            return (
              <div
                className="mb-[14px] flex items-center"
                key={item.title}
              >
                <span className="mr-2 text-nowrap text-xs text-secondary-text">
                  {item.title}
                </span>
                <Progress value={item.score} />
              </div>
            );
          })}
        </div>
        <Button
          variant="secondary"
          className="mt-6 flex w-full items-center"
        >
          <MessageSquare className="mr-2 h-[14px] w-[14px]" /> Rate and Review
        </Button>
      </div>
    );
  },
};
