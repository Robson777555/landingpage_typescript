import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { GridTwoCollumns } from './GridTwoCollumns';
import { describe, it, expect, vi, Mock } from 'vitest';
import mock from './mock';
import { useIsMobile } from '../../hooks/useIsMobile';

// Mock do hook useIsMobile
vi.mock('../../hooks/useIsMobile', () => ({
  useIsMobile: vi.fn(),
}));

describe('<GridTwoCollumns />', () => {
  it('should render title, text and image for desktop version', () => {
    // Configura o mock para desktop
    (useIsMobile as Mock).mockReturnValue(false);

    render(
      <ThemeProvider theme={theme}>
        <GridTwoCollumns {...mock} />
      </ThemeProvider>
    );

    // Verifica os elementos
    expect(screen.getByRole('heading', { name: mock.title })).toBeInTheDocument();
    expect(screen.getByText(mock.text)).toBeInTheDocument();

    // Verifica a imagem (componente Image do Next.js)
    const image = screen.getByRole('img', { name: mock.title });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mock.srcImg);
  });

  it('should render mobile version when isMobile is true', () => {
    // Configura o mock para mobile
    (useIsMobile as Mock).mockReturnValue(true);

    render(
      <ThemeProvider theme={theme}>
        <GridTwoCollumns {...mock} />
      </ThemeProvider>
    );

    // Verifica os elementos
    expect(screen.getByRole('heading', { name: mock.title })).toBeInTheDocument();
    expect(screen.getByText(mock.text)).toBeInTheDocument();

    // Verifica a imagem (tag img normal no mobile)
    const image = screen.getByRole('img', { name: mock.title });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mock.srcImg);
  });

  it('should match snapshot for desktop version', () => {
    (useIsMobile as Mock).mockReturnValue(false);

    const { container } = render(
      <ThemeProvider theme={theme}>
        <GridTwoCollumns {...mock} />
      </ThemeProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should match snapshot for mobile version', () => {
    (useIsMobile as Mock).mockReturnValue(true);

    const { container } = render(
      <ThemeProvider theme={theme}>
        <GridTwoCollumns {...mock} />
      </ThemeProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with background when background prop is true', () => {
    (useIsMobile as Mock).mockReturnValue(false);

    render(
      <ThemeProvider theme={theme}>
        <GridTwoCollumns {...mock} background={true} />
      </ThemeProvider>
    );

    // Verifica se os elementos estão renderizados com fundo
    expect(screen.getByRole('heading', { name: mock.title })).toBeInTheDocument();
    expect(screen.getByText(mock.text)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: mock.title })).toBeInTheDocument();
  });
  it ('Snapshot of page', () => {
    (useIsMobile as Mock).mockReturnValue(false);

    const { container } = render(
      <ThemeProvider theme={theme}>
        <GridTwoCollumns {...mock} />
      </ThemeProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  })
});