import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SectionBackground } from './SectionBackground';

const meta: Meta<typeof SectionBackground> = {
  title: 'Components/SectionBackground',
  component: SectionBackground,
  argTypes: {
    background: {
      control: 'boolean',
    },
  },
  args: {
    children: (
      <div>
        <h1>Section Content</h1>
        <p>This is a sample section with background control</p>
      </div>
    ),
    background: false,
  },
};

export default meta;

type Story = StoryObj<typeof SectionBackground>;

export const LightBackground: Story = {
  args: {
    background: false,
  },
};

export const DarkBackground: Story = {
  args: {
    background: true,
  },
};