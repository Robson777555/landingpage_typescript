// app/layout.jsx
"use client";
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { StaticStyles } from '../styles/StaticStyles';
import PropTypes from 'prop-types';
import Providers from './Providers';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <StaticStyles />
      </head>
      <body>
        <Providers>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
