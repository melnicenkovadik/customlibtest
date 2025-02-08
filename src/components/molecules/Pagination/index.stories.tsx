import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from '.';
import { AUTHORS } from '.storybook/authors';
import { BADGE } from '.storybook/constants';

const meta: Meta<typeof Pagination> = {
  id: 'Molecule/Pagination',
  title: 'Verified/Atoms/Pagination',
  component: Pagination,
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
    embedDesigns: [
      'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
    designs: [
      'https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
  },
  args: {
    total: 20,
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePrev = () => {
      setCurrentPage((currentPage) =>
        currentPage === 1 ? currentPage : currentPage - 1,
      );
    };

    const handleNext = () => {
      setCurrentPage((currentPage) =>
        currentPage === args.total ? currentPage : currentPage + 1,
      );
    };

    return (
      <div className="flex items-center space-x-2">
        <Pagination
          handleMin={() => setCurrentPage(1)}
          handleMax={() => setCurrentPage(args.total)}
          handlePrev={handlePrev}
          handleNext={handleNext}
          total={args.total}
          handleInputChange={(value) => console.log('handleInputChange', value)}
          setCurrentPage={(value) => setCurrentPage(value)}
          currentPage={currentPage}
        />
      </div>
    );
  },
};
