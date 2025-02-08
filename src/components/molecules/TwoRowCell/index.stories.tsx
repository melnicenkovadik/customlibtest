import { AscOrderIcon } from '@/assets/ascOrderIcon';
import { UsdcCoin } from '@/assets/usdcCoin';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { cn } from '@/utils';
import type { Meta, StoryObj } from '@storybook/react';
import { ChevronsUpDown, EllipsisVertical, Plus, User } from 'lucide-react';
import { TwoRowCell } from '.';
import { AUTHORS } from '.storybook/authors';

const meta: Meta<typeof TwoRowCell> = {
  id: 'Molecules/TwoRowCell',
  title: 'Verified/Molecules/TwoRowCell',
  component: TwoRowCell,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const RoundedIcon = ({
  icon,
  className,
}: {
  icon: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        `flex h-7 w-7 flex-col items-center justify-center rounded-full`,
        className,
      )}
    >
      {icon}
    </div>
  );
};

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
    primaryText: 'Table Item',
    secondaryText: 'Table Item',
    className: 'border-b border-border hover:bg-ghost',
  },
  argTypes: {
    beforeText: {
      control: false,
    },
    afterText: {
      control: false,
    },
  },
  render: (args) => {
    return (
      <div className="flex flex-row flex-wrap gap-4">
        <TwoRowCell {...args} />
        <TwoRowCell
          {...args}
          afterText={<AscOrderIcon />}
        />
        <TwoRowCell
          {...args}
          afterText={
            <>
              <AscOrderIcon />
              <AscOrderIcon />
            </>
          }
        />
        <TwoRowCell
          {...args}
          afterText={
            <Badge
              children="Badge"
              variant="secondary"
            />
          }
        />
        <TwoRowCell
          {...args}
          beforeText={<UsdcCoin className="h-7 w-7" />}
        />
        <TwoRowCell
          {...args}
          beforeText={
            <>
              <UsdcCoin className="absolute left-8 h-7 w-7" />
              <UsdcCoin className="mr-4 h-7 w-7" />
            </>
          }
        />
        <TwoRowCell
          {...args}
          beforeText={
            <img
              className="h-12 w-12 rounded-lg"
              src="./assets/test_img_card.jpg"
              alt="NFT"
            />
          }
        />
        <TwoRowCell
          className={args.className + ' justify-end'}
          afterText={
            <>
              <ChevronsUpDown />
              <ChevronsUpDown />
              <ChevronsUpDown />
            </>
          }
        />
        <TwoRowCell
          className={args.className + ' justify-end'}
          afterText={
            <>
              <RoundedIcon
                icon={<Plus className="h-3 w-3" />}
                className="bg-secondary"
              />
              <RoundedIcon icon={<EllipsisVertical className="h-3 w-3" />} />
            </>
          }
        />
        <TwoRowCell
          {...args}
          beforeText={
            <RoundedIcon
              icon={<User className="h-3 w-3 rounded-full text-primary-text" />}
              className="bg-secondary-text"
            />
          }
        />
        <TwoRowCell
          className={args.className}
          beforeText={<Button variant="ghost">Button</Button>}
        />
        <TwoRowCell
          className={args.className}
          beforeText={
            <Button
              className="w-[100px]"
              variant="outline"
            >
              Reject
            </Button>
          }
          afterText={<Button className="w-[100px]">Accept</Button>}
        />
      </div>
    );
  },
};
