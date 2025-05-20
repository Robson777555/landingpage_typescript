import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { GridSection } from './GridSection';
import { describe, it, expect, vi } from 'vitest';
import mock from './mock';
import { useIsMobile } from '../../hooks/useIsMobile';

vi.mock('../../hooks/useIsMobile', () => ({
  useIsMobile: vi.fn(),
}));

describe('<GridSection />', () => {
  it('should render title, description and grid items for desktop', () => {
    vi.mocked(useIsMobile).mockReturnValue(false);

    render(
      <ThemeProvider theme={theme}>
        <GridSection {...mock} />
      </ThemeProvider>
    );

    expect(screen.getByRole('heading', { name: /Serviço/i })).toBeInTheDocument();
    expect(screen.getByText(mock.description)).toBeInTheDocument();

    const gridTitles = screen.getAllByRole('heading', { level: 3 });
    expect(gridTitles).toHaveLength(mock.grid.length);

    mock.grid.forEach((item) => {
      expect(screen.getByText(item.description)).toBeInTheDocument();
    });
  });

  it('should render mobile version when isMobile is true', () => {
    vi.mocked(useIsMobile).mockReturnValue(true);

    render(
      <ThemeProvider theme={theme}>
        <GridSection {...mock} />
      </ThemeProvider>
    );

    expect(screen.getByRole('heading', { name: /Serviço/i })).toBeInTheDocument();
    expect(screen.getByText(mock.description)).toBeInTheDocument();

    const gridTitles = screen.getAllByRole('heading', { level: 3 });
    expect(gridTitles).toHaveLength(mock.grid.length);

    mock.grid.forEach((item) => {
      expect(screen.getByText(item.description)).toBeInTheDocument();
    });
  });

  it('should match snapshot with background for desktop', () => {
    vi.mocked(useIsMobile).mockReturnValue(false);

    const { container } = render(
      <ThemeProvider theme={theme}>
        <GridSection {...mock} background={true} />
      </ThemeProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should match snapshot for mobile', () => {
    vi.mocked(useIsMobile).mockReturnValue(true);

    const { container } = render(
      <ThemeProvider theme={theme}>
        <GridSection {...mock} />
      </ThemeProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render HTML tags in titles correctly', () => {
    vi.mocked(useIsMobile).mockReturnValue(false);

    render(
      <ThemeProvider theme={theme}>
        <GridSection {...mock} />
      </ThemeProvider>
    );

    const mainTitle = screen.getByRole('heading', { name: /Serviço/i });
    expect(mainTitle.innerHTML).toContain('<b style="font-size: 2rem;">Serviço</b>');

    mock.grid.forEach((item) => {
      const gridTitle = screen.getByRole('heading', {
        name: new RegExp(item.title.replace(/<[^>]+>/g, '').trim()),
      });
      expect(gridTitle.innerHTML).toContain(item.title);
    });
  });
  it ('Snapshot of page', () => {
    vi.mocked(useIsMobile).mockReturnValue(false);

    const { container } = render(
      <ThemeProvider theme={theme}>
        <GridSection {...mock} />
      </ThemeProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  })
});