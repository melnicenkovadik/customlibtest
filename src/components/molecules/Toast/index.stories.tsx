import { useState } from 'react';
import toast from 'react-hot-toast';
import { Button } from '@/components/atoms';
import { Meta, StoryObj } from '@storybook/react';

import { Notifications, Toast } from '.';
import { AUTHORS } from '.storybook/authors';

const meta: Meta = {
  id: 'Molecules/Toast',
  title: 'Verified/Molecules/Toast',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    embedDesigns: [
      'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
    embedOrientation: 'vertical',
    designs: [
      'https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
  },
  args: {
    variant: 'destructive',
    removePrevious: false,
    durationSec: 1,
    maxVisible: 1,
  },
  argTypes: {
    variant: {
      options: ['base', 'destructive', 'with-avatar'],
      control: { type: 'select' },
    },
  },
  render: ({ variant, removePrevious, durationSec, maxVisible }) => {
    const [prev, setPrev] = useState<string>('');

    const options = {
      base: (id: string) => (
        <Toast
          id={id}
          header="Scheduled: Catch up"
          description={new Date().toString()}
          suffix={
            <Button
              variant="outline"
              onClick={() => console.log('on-undo')}
            >
              Undo
            </Button>
          }
        />
      ),
      destructive: (id: string) => (
        <Toast
          id={id}
          className="border-0 bg-destructive text-secondary"
          header="Uh oh! Something went wrong."
          headerClassName="text-secondary"
          description="There was a problem with your request."
          descriptionClassName="text-secondary"
          suffix={
            <Button
              variant="outline"
              className="bg-destructive text-secondary hover:bg-destructive-hover active:bg-destructive-active"
              onClick={() => console.log('on-try-again')}
            >
              Try Again
            </Button>
          }
        />
      ),
      'with-avatar': (id: string) => (
        <Toast
          id={id}
          className="w-[375px]"
          avatarSrc="./assets/avatar.jpg"
          header="Hey! Have you seen the new pool?!"
          description="shyfrens.Custom"
          descriptionClassName="text-secondary-text"
        />
      ),
    } as any;

    const notify = () => {
      if (removePrevious) {
        toast.remove(prev);
      }

      setPrev(
        toast.custom(({ id }) => options[variant](id), {
          duration: durationSec * 1000,
        }),
      );
    };

    return (
      <>
        <Button onClick={notify}>{`Create a ${variant} toast`}</Button>
        <Notifications maxVisible={maxVisible} />
      </>
    );
  },
};

export const Destructive: Story = {
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    embedDesigns: [
      'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
    embedOrientation: 'vertical',
    designs: [
      'https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
  },
  args: {
    id: '1',
    className: 'bg-destructive text-secondary',
    header: 'Uh oh! Something went wrong.',
    headerClassName: 'text-secondary',
    description: 'There was a problem with your request.',
    descriptionClassName: 'text-secondary',
    suffix: (
      <Button
        variant="outline"
        className="bg-destructive text-secondary hover:bg-destructive-hover active:bg-destructive-active"
        onClick={() => console.log('on-try-again')}
      >
        Try Again
      </Button>
    ),
    onClose: console.log('on-close'),
  },
  render: (args: any) => <Toast {...args} />,
};

export const Base: Story = {
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    embedDesigns: [
      'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
    embedOrientation: 'vertical',
    designs: [
      'https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
  },
  args: {
    id: '1',
    header: 'Scheduled: Catch up',
    description: new Date().toString(),
    suffix: (
      <Button
        variant="outline"
        onClick={() => console.log('on-undo')}
      >
        Undo
      </Button>
    ),
    onClose: console.log('on-close'),
  },
  render: (args: any) => <Toast {...args} />,
};

export const WithAvatar: Story = {
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    embedDesigns: [
      'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
    embedOrientation: 'vertical',
    designs: [
      'https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
  },
  args: {
    id: '1',
    className: 'w-[375px]',
    avatarSrc: './assets/avatar.jpg',
    header: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    descriptionClassName: 'text-secondary-text',
    onClose: console.log('on-close'),
  },
  render: (args: any) => <Toast {...args} />,
};
