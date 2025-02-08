import { Meta, type StoryObj } from '@storybook/react';
import { Chart } from '.';
import { AUTHORS } from '.storybook/authors';

const meta: Meta<typeof Chart> = {
  id: 'Atoms/Chart',
  title: 'Verified/Atoms/Chart',
  component: Chart,
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
    designs: [
      'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
  },
  args: {
    data: [
      { xAxis: '2024-01-21', yAxis: 5000 },
      { xAxis: '2024-01-22', yAxis: 12500 },
      { xAxis: '2024-01-23', yAxis: 10000 },
      { xAxis: '2024-01-24', yAxis: 12000 },
      { xAxis: '2024-01-25', yAxis: 7500 },
      { xAxis: '2024-01-26', yAxis: 17500 },
      { xAxis: '2024-01-27', yAxis: 12500 },
    ],
    showGradient: true,
    yAxis: {
      showMeasurement: true,
      legendRenderer: (value) => '$' + value.toLocaleString(),
    },
    xAxis: {
      legendRenderer: (value) => {
        return new Date(value)
          .toLocaleString('default', { month: 'short', day: 'numeric' })
          .toString();
      },
    },
    chartColor: '0, 255, 0',
  },
  argTypes: {},
};

export const Bars: Story = {
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    embedDesigns: [
      'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
    designs: [
      'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
  },
  args: {
    type: 'bar',
    data: [
      { xAxis: '2024-01-21', yAxis: 5000 },
      { xAxis: '2024-01-22', yAxis: 12500 },
      { xAxis: '2024-01-23', yAxis: 10000 },
      { xAxis: '2024-01-24', yAxis: 12000 },
      { xAxis: '2024-01-25', yAxis: 7500 },
      { xAxis: '2024-01-26', yAxis: 17500 },
      { xAxis: '2024-01-27', yAxis: 12500 },
    ],
    showGradient: false,
    yAxis: {
      showMeasurement: true,
      legendRenderer: (value) => '$' + value.toLocaleString(),
    },
    xAxis: {
      legendRenderer: (value) => {
        return new Date(value)
          .toLocaleString('default', { month: 'short', day: 'numeric' })
          .toString();
      },
    },
  },
  argTypes: {},
};
