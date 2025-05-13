import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { TextComponent } from './TextComponent';
import { theme } from '../../styles/theme';
import { describe, it, expect } from 'vitest';

describe('<TextComponent />', () => {
  const renderTextComponent = (props = {}) => {
    const defaultProps = {
      children: 'Test Content',
    };

    return render(
      <ThemeProvider theme={theme}>
        <TextComponent {...defaultProps} {...props} />
      </ThemeProvider>
    );
  };

  it('should render text content correctly', () => {
    renderTextComponent();
    expect(screen.getByTestId('text-component')).toBeInTheDocument();
    expect(screen.getByTestId('text-component').textContent).toBe('Test Content');
  });

  it('should render with HTML content', () => {
    renderTextComponent({ children: '<p>HTML <strong>content</strong></p>' });
    expect(screen.getByText('HTML')).toBeInTheDocument();
    expect(screen.getByText('content').tagName).toBe('STRONG');
  });

  it('should apply correct size styles', () => {
    renderTextComponent({ size: 'large' });
    const component = screen.getByTestId('text-component');
    expect(component).toHaveStyle({
      fontSize: theme.fonts.sizes.large,
    });
  });

  it('should render as different HTML element', () => {
    const { container } = renderTextComponent({ as: 'p' });
    expect(container.querySelector('p')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTextComponent();
    expect(container.firstChild).toMatchSnapshot();
  });
});
