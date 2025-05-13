import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { NavLinks } from './NavLinks';
import { theme } from '../../styles/theme';
import { describe, it, expect, vi } from 'vitest';
import mock from './mock';

describe('<NavLinks />', () => {
  const renderNavLinks = (props = {}) => {
    const defaultProps = {
      links: mock,
    };

    return render(
      <ThemeProvider theme={theme}>
        <NavLinks {...defaultProps} {...props} />
      </ThemeProvider>
    );
  };

  it('should render correct number of links with proper attributes', () => {
    renderNavLinks();

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(mock.length);

    mock.forEach((link, index) => {
      expect(links[index]).toHaveAttribute('href', link.link);
      expect(links[index]).toHaveTextContent(link.children);
    });
  });

  it('should call onLinkClick when a link is clicked', () => {
    const mockClick = vi.fn();
    renderNavLinks({ onLinkClick: mockClick });

    fireEvent.click(screen.getByText(mock[0].children));
    expect(mockClick).toHaveBeenCalled();
  });

  it('should not render links when empty array is provided', () => {
    renderNavLinks({ links: [] });
    expect(screen.queryAllByRole('link')).toHaveLength(0);
  });

  it('should match snapshot with links', () => {
    const { container } = renderNavLinks();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should match snapshot without links', () => {
    const { container } = renderNavLinks({ links: [] });
    expect(container.firstChild).toMatchSnapshot();
  });
});
