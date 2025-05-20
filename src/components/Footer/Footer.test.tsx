import React from 'react';
import { screen, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme'; 
import { Footer } from './Footer';
import { describe, it, expect } from 'vitest';

describe('<Footer />', () => {
  it('should render footer with HTML content', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Footer footerHtml="<h1>Olá</h1>" />
      </ThemeProvider>
    );

    expect(screen.getByRole('heading', { name: 'Olá' })).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});