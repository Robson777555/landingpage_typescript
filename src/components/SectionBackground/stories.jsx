import React from 'react';
import { SectionBackground } from './SectionBackground';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  argTypes: {
    background: {
      control: 'boolean',
      defaultValue: false,
    },
    children: {
      control: 'object',
    },
  },
  args: {
    children: (
      <div>
        <h1>Section Content</h1>
        <p>This is a sample section with background control</p>
      </div>
    ),
  },
};

const Template = (args) => <SectionBackground {...args} />;

export const LightBackground = Template.bind({});
LightBackground.args = {
  background: false,
};

export const DarkBackground = Template.bind({});
DarkBackground.args = {
  background: true,
};