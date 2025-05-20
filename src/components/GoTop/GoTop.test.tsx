import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { GoTop } from './GoTop';
import { describe, it, expect, vi } from 'vitest';

describe('<GoTop />', () => {
  it('should render the GoTop button', () => {
    render(
      <ThemeProvider theme={theme}>
        <GoTop />
      </ThemeProvider>,
    );

    expect(
      screen.getByRole('link', { name: /go to top/i }),
    ).toBeInTheDocument();
  });

  it('should scroll to top when clicked', () => {
    window.scrollTo = vi.fn();
    render(
      <ThemeProvider theme={theme}>
        <GoTop />
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByRole('link'));
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });

  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <GoTop />
      </ThemeProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});