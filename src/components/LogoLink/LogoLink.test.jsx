import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { LogoLink } from './LogoLink';
import { theme } from '../../styles/theme';
import { describe, it, expect } from 'vitest';

describe('<LogoLink />', () => {
  const renderLogoLink = (props = {}) => {
    const defaultProps = {
      text: 'Logo',
      link: '#target',
    };

    return render(
      <ThemeProvider theme={theme}>
        <LogoLink {...defaultProps} {...props} />
      </ThemeProvider>
    );
  };

  it('should render text logo with correct attributes', () => {
    renderLogoLink({ text: 'My Logo' });

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '#target');
    expect(link).toHaveAttribute('target', '_self');
    expect(link).not.toHaveAttribute('rel');
    expect(screen.getByText('My Logo')).toBeInTheDocument();
  });

  it('should render image logo with alt text', () => {
    renderLogoLink({ srcImg: '/logo.png', text: 'My Logo' });

    const image = screen.getByRole('img', { name: 'My Logo' });
    expect(image).toBeInTheDocument();
    // Não deve haver texto visível
    // expect(screen.getByText('My Logo')).toBeInTheDocument(); // Removido
  });

  it('should match snapshot with text only', () => {
    const { container } = renderLogoLink();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should match snapshot with image', () => {
    const { container } = renderLogoLink({ srcImg: '/logo.png' });
    expect(container.firstChild).toMatchSnapshot();
  });
});
