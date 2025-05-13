import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { Heading } from './Heading';
import { describe, it, expect } from 'vitest';

describe('<Heading />', () => {
  const renderHeading = (props = {}) => {
    const defaultProps = {
      children: 'Test Heading',
    };

    return render(
      <ThemeProvider theme={theme}>
        <Heading {...defaultProps} {...props} />
      </ThemeProvider>
    );
  };

  it('should render with default values', () => {
    renderHeading();

    const heading = screen.getByTestId('heading');
    expect(heading).toBeInTheDocument();
    expect(heading.tagName.toLowerCase()).toBe('h1');
    expect(heading).toHaveTextContent('Test Heading');
  });

  it('should render as diferentes tags HTML', () => {
    const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    headings.forEach((as) => {
      const { container } = renderHeading({ as });
      expect(container.querySelector(as)).toBeInTheDocument();
    });
  });

  it('should render children content correctly', () => {
    const customText = 'Custom Heading Text';
    renderHeading({ children: customText });
    expect(screen.getByTestId('heading')).toHaveTextContent(customText);
  });
});
