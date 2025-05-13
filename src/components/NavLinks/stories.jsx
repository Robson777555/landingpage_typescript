import React from 'react';
import { NavLinks } from './NavLinks';
import mock from './mock';

export default {
  title: 'NavLinks',
  component: NavLinks,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    links: {
      control: {
        type: 'object',
      },
    },
    onLinkClick: {
      action: 'clicked',
    },
  },
  args: {
    links: mock,
  },
};

const Template = (args) => <NavLinks {...args} />;

export const Default = Template.bind({});

export const MobileView = Template.bind({});
MobileView.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};

export const Empty = Template.bind({});
Empty.args = {
  links: [],
};