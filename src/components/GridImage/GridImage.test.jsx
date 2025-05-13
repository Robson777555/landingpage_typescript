import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { GridImage } from './GridImage';
import { describe, it, expect, vi } from 'vitest';
import mock from './mock';
import { useIsMobile } from '../../hooks/useIsMobile';

// Mock do hook useIsMobile
vi.mock('../../hooks/useIsMobile', () => ({
  useIsMobile: vi.fn(),
}));

describe('<GridImage />', () => {
  it('should render title, description and images', () => {
    // Configura o mock para desktop
    useIsMobile.mockReturnValue(false);

    render(
      <ThemeProvider theme={theme}>
        <GridImage {...mock} />
      </ThemeProvider>
    );

    // Verifica o título (considerando o dangerouslySetInnerHTML)
    expect(screen.getByRole('heading', { name: /Tec/i })).toBeInTheDocument();
    expect(screen.getByText(mock.description)).toBeInTheDocument();

    // Verifica as imagens ( usando o componente Image do Next)
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(mock.grid.length);

    // Verifica os textos alternativos
    mock.grid.forEach((item) => {
      expect(screen.getByText(item.altText)).toBeInTheDocument();
    });
  });

  it('should render mobile version when isMobile is true', () => {
    // Configura o mock para mobile
    useIsMobile.mockReturnValue(true);

    render(
      <ThemeProvider theme={theme}>
        <GridImage {...mock} />
      </ThemeProvider>
    );

    // Verifica se os elementos estão renderizados
    expect(screen.getByRole('heading', { name: /Tec/i })).toBeInTheDocument();
    expect(screen.getByText(mock.description)).toBeInTheDocument();
    expect(screen.getAllByRole('img')).toHaveLength(mock.grid.length);
  });

  it('should match snapshot with background', () => {
    useIsMobile.mockReturnValue(false);

    const { container } = render(
      <ThemeProvider theme={theme}>
        <GridImage {...mock} background={true} />
      </ThemeProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should match snapshot for mobile', () => {
    useIsMobile.mockReturnValue(true);

    const { container } = render(
      <ThemeProvider theme={theme}>
        <GridImage {...mock} />
      </ThemeProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});