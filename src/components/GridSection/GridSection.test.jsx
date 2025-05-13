import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { GridSection } from './GridSection';
import { describe, it, expect, vi } from 'vitest';
import mock from './mock';
import { useIsMobile } from '../../hooks/useIsMobile';

// Mock do hook useIsMobile
vi.mock('../../hooks/useIsMobile', () => ({
  useIsMobile: vi.fn(),
}));

describe('<GridSection />', () => {
  it('should render title, description and grid items for desktop', () => {
    // Configura o mock para desktop
    useIsMobile.mockReturnValue(false);

    render(
      <ThemeProvider theme={theme}>
        <GridSection {...mock} />
      </ThemeProvider>
    );

    // Verifica o título principal (considerando dangerouslySetInnerHTML)
    expect(screen.getByRole('heading', { name: /Serviço/i })).toBeInTheDocument();
    expect(screen.getByText(mock.description)).toBeInTheDocument();

    // Verifica os itens do grid
    const gridTitles = screen.getAllByRole('heading', { level: 3 });
    expect(gridTitles).toHaveLength(mock.grid.length);

    // Verifica as descrições
    mock.grid.forEach((item) => {
      expect(screen.getByText(item.description)).toBeInTheDocument();
    });
  });

  it('should render mobile version when isMobile is true', () => {
    // Configura o mock para mobile
    useIsMobile.mockReturnValue(true);

    render(
      <ThemeProvider theme={theme}>
        <GridSection {...mock} />
      </ThemeProvider>
    );

    // Verifica se os elementos estão renderizados
    expect(screen.getByRole('heading', { name: /Serviço/i })).toBeInTheDocument();
    expect(screen.getByText(mock.description)).toBeInTheDocument();

    // Verifica os itens do grid
    const gridTitles = screen.getAllByRole('heading', { level: 3 });
    expect(gridTitles).toHaveLength(mock.grid.length);

    // Verifica as descrições
    mock.grid.forEach((item) => {
      expect(screen.getByText(item.description)).toBeInTheDocument();
    });
  });

  it('should match snapshot with background for desktop', () => {
    useIsMobile.mockReturnValue(false);

    const { container } = render(
      <ThemeProvider theme={theme}>
        <GridSection {...mock} background={true} />
      </ThemeProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should match snapshot for mobile', () => {
    useIsMobile.mockReturnValue(true);

    const { container } = render(
      <ThemeProvider theme={theme}>
        <GridSection {...mock} />
      </ThemeProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render HTML tags in titles correctly', () => {
    useIsMobile.mockReturnValue(false);

    render(
      <ThemeProvider theme={theme}>
        <GridSection {...mock} />
      </ThemeProvider>
    );

    // Verifica se o HTML do título principal foi renderizado
    const mainTitle = screen.getByRole('heading', { name: /Serviço/i });
    expect(mainTitle.innerHTML).toContain('<b style="font-size: 2rem;">Serviço</b>');

    // Verifica se o HTML dos títulos do grid foi renderizado
    mock.grid.forEach((item) => {
      const gridTitle = screen.getByRole('heading', {
        name: new RegExp(item.title.replace(/<[^>]+>/g, '').trim()),
      });
    expect(gridTitle.innerHTML).toContain(item.title);
    });
  });
});