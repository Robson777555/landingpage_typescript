import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { SectionBackground } from './SectionBackground';
import { theme } from '../../styles/theme';
import { describe, it, expect } from 'vitest';

describe('<SectionBackground />', () => {
  const renderSection = (background = false) => {
    return render(
      <ThemeProvider theme={theme}>
        <SectionBackground background={background}>
          <h1>Test Content</h1>
        </SectionBackground>
      </ThemeProvider>
    );
  };

  it('should render with dark background when background prop is true', () => {
    const { container } = renderSection(true);

    const section = screen.getByTestId('section-background');
    expect(section).toHaveStyle({
      backgroundColor: theme.colors.primaryColor,
      color: theme.colors.white,
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with light background by default', () => {
    const { container } = renderSection();

    const section = screen.getByTestId('section-background');
    expect(section).toHaveStyle({
      backgroundColor: theme.colors.white,
      color: theme.colors.primaryColor,
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render children content', () => {
    renderSection();
    expect(screen.getByRole('heading', { name: 'Test Content' })).toBeInTheDocument();
  });
});