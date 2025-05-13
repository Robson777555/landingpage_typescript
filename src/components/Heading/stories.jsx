import React from 'react';
import { Heading } from './Heading';
import { theme } from '../../styles/theme';

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      control: 'text',
      defaultValue: 'Edite este texto',
    },
    colorDark: {
      control: 'boolean',
      defaultValue: true,
    },
    as: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      },
      defaultValue: 'h1',
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'big', 'huge'],
      },
      defaultValue: 'huge',
    },
    uppercase: {
      control: 'boolean',
      defaultValue: false,
    },
  },
};

const Template = (args) => <Heading {...args} />;

export const Default = Template.bind({});

export const Light = Template.bind({});
Light.args = {
  colorDark: true,
  children: 'Texto escuro',
};
Light.parameters = {
  backgrounds: {
    default: 'light',
    values: [{ name: 'light', value: theme.colors.white }],
  },
};

export const Dark = Template.bind({});
Dark.args = {
  colorDark: false,
  children: 'Texto claro',
};
Dark.parameters = {
  backgrounds: {
    default: 'dark',
    values: [{ name: 'dark', value: theme.colors.primaryColor }],
  },
};