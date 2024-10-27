import { Meta, StoryObj } from '@storybook/react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '.';
import { accordionData } from './data';
import { AUTHORS } from '.storybook/authors';

const meta: Meta<typeof Accordion> = {
  id: 'Molecules/Accordion',
  title: 'Verified/Molecules/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Playground: Story = {
  args: {},
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    embedDesigns: [
      'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412'
    ],
  },
  render: () => {
    return (
      <div className="w-[400px]">
        <Accordion
          type="single"
          collapsible
          className="w-full"
        >
          {accordionData.map((item) => (
            <AccordionItem
              value={item.value}
              key={item.id}
            >
              <AccordionTrigger>
                <div className="flex justify-between">
                  <h3>{item.name}</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
  },
};
