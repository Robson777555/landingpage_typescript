import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { GridContent } from './GridContent';
import { describe, it, expect } from 'vitest';
import mock from './mock';

describe('<GridContent />', () => {
  it('should render grid content with title and HTML', () => {
    render(
      <ThemeProvider theme={theme}>
        <GridContent {...mock} />
      </ThemeProvider>
    );

    expect(screen.getByRole('heading', { name: mock.title })).toBeInTheDocument();
    expect(screen.getByText(/Pellentesque habitant morbi tristique/i)).toBeInTheDocument();
  });

  it('should render without background when not provided', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <GridContent {...mock} background={false} />
      </ThemeProvider>
    );

    expect(container.firstChild).toHaveStyle({
      background: theme.colors.white
    });
  });

  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <GridContent {...mock} />
      </ThemeProvider>
    );
    
    expect(container.firstChild).toMatchSnapshot();
  });
});