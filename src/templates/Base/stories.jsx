// src/templates/Base/stories.jsx
import React from 'react';
import { Base } from './Base';
import mockBase from './mockWithChildren.jsx';

export default {
  title: 'Templates/Base',
  component: Base,
  args: mockBase,
};

export const Template = (args) => <Base {...args} />;