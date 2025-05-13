import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { MenuLink } from './MenuLink';
import { theme } from '../../styles/theme';
import { describe, it, expect, vi } from 'vitest';

describe('<MenuLink />', () => {
  const renderMenuLink = (props = {}) => {
    const defaultProps = {
      children: 'Link Text',
      link: '#section',
    };

    return render(
      <ThemeProvider theme={theme}>
        <MenuLink {...defaultProps} {...props} />
      </ThemeProvider>
    );
  };

  it('should render internal link correctly', () => {
    renderMenuLink();
    const link = screen.getByRole('link', { name: 'Link Text' });
    expect(link).toHaveAttribute('href', '#section');
  });

  it('should handle external links with newTab', () => {
    renderMenuLink({
      link: 'https://external.com',
      newTab: true,
    });

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('should call onClick and scroll when clicked', () => {
    const mockScroll = vi.fn();
    const mockClick = vi.fn();

    renderMenuLink({ onClick: mockClick });

    const link = screen.getByRole('link');
    fireEvent.click(link);

    expect(mockClick).toHaveBeenCalled();
    // Verifica se o scroll foi acionado após o timeout
    setTimeout(() => {
      expect(mockScroll).toHaveBeenCalled();
    }, 350);
  });

  it('should match snapshot', () => {
    const { container } = renderMenuLink();
    expect(container.firstChild).toMatchSnapshot();
  });
});