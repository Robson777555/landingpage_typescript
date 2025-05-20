import React from 'react';
import { GoTop } from './GoTop';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof GoTop> = {
  title: 'GoTop',
  component: GoTop,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof GoTop>;

export const Default: Story = {
  render: () => (
    <div style={{ height: '200vh' }}>
      <h1>Scroll down to see the GoTop button</h1>
      <div style={{ marginTop: '150vh' }}>
        <GoTop />
      </div>
    </div>
  ),
};