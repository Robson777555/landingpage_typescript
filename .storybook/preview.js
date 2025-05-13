import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme';
import mockRouter from 'next-router-mock';

// Create a mock router context
const MockRouter = mockRouter;

export const decorators = [
  (Story) => (
    <MockRouter>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </MockRouter>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextjs: {
    appDirectory: true, // Keep this if using Next.js App Router
  },
};
