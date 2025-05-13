import React from 'react';
import { GoTop } from './GoTop';

export default {
  title: 'GoTop',
  component: GoTop,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = () => (
  <div style={{ height: '200vh' }}>
    <h1>Scroll down to see the GoTop button</h1>
    <div style={{ marginTop: '150vh' }}>
      <GoTop />
    </div>
  </div>
);

export const Default = Template.bind({});
