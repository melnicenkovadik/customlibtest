import { Meta, StoryObj } from '@storybook/react';

import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '.';
import { AUTHORS } from '.storybook/authors';

const meta: Meta<typeof InputOTP> = {
  id: 'Molecules/Input OTP',
  title: 'Verified/Molecules/Input OTP',
  component: InputOTP,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

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
    maxLength: 6,
    className: 'w-full max-w-xs',
  } as never,
  render: ({ maxLength, className }) => {
    //i.e. [0, 1, 2]
    const firstGroupOtp = Array.from(Array(Math.ceil(maxLength / 2))).map(
      (_v, i) => i,
    );

    //i.e. [3, 4, 5]
    const secondGroupOtp = Array.from(
      Array(Math.ceil(maxLength - firstGroupOtp.length)),
    ).map((_v, i) => i + firstGroupOtp.length);

    return (
      <InputOTP
        maxLength={maxLength}
        className={className}
      >
        <InputOTPGroup>
          {firstGroupOtp.map((i) => (
            <InputOTPSlot
              key={i}
              index={i}
            />
          ))}
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          {secondGroupOtp.map((i) => (
            <InputOTPSlot
              key={i}
              index={i}
            />
          ))}
        </InputOTPGroup>
      </InputOTP>
    );
  },
};
