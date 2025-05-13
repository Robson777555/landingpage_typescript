import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Menu } from './Menu';
import { theme } from '../../styles/theme';
import linksMock from '../NavLinks/mock';
import { describe, it, expect, beforeEach } from 'vitest';

const logoData = {
  text: 'Logo',
  link: '#target',
};

describe('<Menu />', () => {
  const originalInnerWidth = window.innerWidth;

  beforeEach(() => {
    // Reset window size before each test
    window.innerWidth = originalInnerWidth;
  });

  const setupMobile = (isMobile) => {
    window.innerWidth = isMobile ? 500 : 1024;
    fireEvent(window, new Event('resize'));
  };

  it('should render logo and navigation on desktop', () => {
    setupMobile(false);

    render(
      <ThemeProvider theme={theme}>
        <Menu links={linksMock} logoData={logoData} />
      </ThemeProvider>
    );

    expect(screen.getByText('Logo')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.queryByLabelText('Abrir menu')).toBeNull();
    expect(screen.queryByLabelText('Fechar menu')).toBeNull();
  });

  it('should toggle menu on mobile', () => {
    setupMobile(true);

    render(
      <ThemeProvider theme={theme}>
        <Menu links={linksMock} logoData={logoData} />
      </ThemeProvider>
    );

    const button = screen.getByLabelText('Abrir menu');
    fireEvent.click(button);
    expect(screen.getByLabelText('Fechar menu')).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByLabelText('Abrir menu')).toBeInTheDocument();
  });

  it('should close menu when clicking a link on mobile', () => {
    setupMobile(true);

    render(
      <ThemeProvider theme={theme}>
        <Menu links={linksMock} logoData={logoData} />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByLabelText('Abrir menu'));
    fireEvent.click(screen.getByText(linksMock[0].children));
    expect(screen.getByLabelText('Abrir menu')).toBeInTheDocument();
  });
});
