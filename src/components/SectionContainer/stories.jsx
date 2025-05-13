import React from 'react';
import { SectionContainer } from './SectionContainer';

export default {
  title: 'SectionContainer',
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

const Template = (args) => <SectionContainer {...args} />;

export const Default = Template.bind({});

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  className: 'custom-container-class',
};

export const MobileView = Template.bind({});
MobileView.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};
