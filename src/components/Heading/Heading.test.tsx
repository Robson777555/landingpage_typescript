import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { Heading } from './Heading';
import { describe, it, expect } from 'vitest';

describe('Heading Component', () => {
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
    expect(heading).toHaveStyle(`color: ${theme.colors.primaryColor}`); // Cor base do tema
    expect(heading).toHaveStyle('text-transform: none');
  });

  it('should render as different HTML tags', () => {
    const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
    headings.forEach((as) => {
      // Limpa o DOM antes de cada render
      const { unmount } = renderHeading({ as });
      const heading = screen.getByTestId('heading');
      expect(heading.tagName.toLowerCase()).toBe(as);
      unmount();
    });
  });

  it('should render children content correctly', () => {
    const customText = 'Custom Heading Text';
    renderHeading({ children: customText });
    expect(screen.getByTestId('heading')).toHaveTextContent(customText);
  });

  it('should apply uppercase style when uppercase prop is true', () => {
    renderHeading({ uppercase: true });
    const heading = screen.getByTestId('heading');
    expect(heading).toHaveStyle('text-transform: uppercase');
  });

  it('should apply dark color when colorDark is false', () => {
    renderHeading({ colorDark: false });
    const heading = screen.getByTestId('heading');
    expect(heading).toHaveStyle(`color: ${theme.colors.white}`); // Cor do texto claro
  });

  it('should apply different sizes correctly', () => {
    const sizes = ['small', 'medium', 'big', 'huge'] as const;
    sizes.forEach((size) => {
      // Limpa o DOM antes de cada render
      const { unmount } = renderHeading({ size });
      const heading = screen.getByTestId('heading');
      let expectedFontSize = '';
      switch (size) {
        case 'small': expectedFontSize = theme.fonts.sizes.small; break;
        case 'medium': expectedFontSize = theme.fonts.sizes.medium; break;
        case 'big': expectedFontSize = theme.fonts.sizes.large; break;
        case 'huge': expectedFontSize = theme.fonts.sizes.xlarge; break;
        default: expectedFontSize = theme.fonts.sizes.xlarge;
      }
      expect(heading).toHaveStyle(`font-size: ${expectedFontSize}`);
      unmount();
    });
  });
  it ('Snapshot of page', () => {
    renderHeading();
    const heading = screen.getByTestId('heading');
    expect(heading).toMatchSnapshot();
  })
});