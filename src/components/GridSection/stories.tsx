import React from 'react';
import { GridSection } from './GridSection';
import mock from './mock';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof GridSection> = {
  title: 'GridSection',
  component: GridSection,
  args: mock,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof GridSection>;

export const Default: Story = {
  render: (args) => <GridSection {...args} />,
};

export const WithBackground: Story = {
  args: {
    ...mock,
    background: true,
  },
};