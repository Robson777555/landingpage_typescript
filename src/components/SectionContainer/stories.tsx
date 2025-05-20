import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SectionContainer } from './SectionContainer';

const meta: Meta<typeof SectionContainer> = {
  title: 'Components/SectionContainer',
  component: SectionContainer,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: {
      control: 'object',
    },
    className: {
      control: 'text',
    },
  },
  args: {
    children: (
      <div style={{ background: '#f5f5f5', padding: '2rem', borderRadius: '8px' }}>
        <h2>Section Content</h2>
        <p>This content is wrapped in a SectionContainer</p>
      </div>
    ),
    className: '',
  },
};

export default meta;

type Story = StoryObj<typeof SectionContainer>;

export const Default: Story = {};

export const WithCustomClass: Story = {
  args: {
    className: 'custom-container-class',
  },
};

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};