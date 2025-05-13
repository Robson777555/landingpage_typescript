import React from 'react';
import { MenuLink } from './MenuLink';

export default {
  title: 'MenuLink',
  component: MenuLink,
  argTypes: {
    children: {
      control: 'text',
      defaultValue: 'Menu Item',
    },
    link: {
      control: 'text',
      defaultValue: '#section',
    },
    newTab: {
      control: 'boolean',
      defaultValue: false,
    },
  },
};

const Template = (args) => (
  <div style={{ display: 'flex', padding: '1rem' }}>
    <MenuLink {...args} />
  </div>
);

export const InternalLink = Template.bind({});
InternalLink.args = {
  link: '#section',
};

export const ExternalLink = Template.bind({});
ExternalLink.args = {
  link: 'https://example.com',
  newTab: true,
};

export const ActiveLink = Template.bind({});
ActiveLink.args = {
  link: '#active',
};
ActiveLink.parameters = {
  nextjs: {
    navigation: {
      pathname: '#active',
    },
  },
};