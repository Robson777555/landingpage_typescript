// app/layout.tsx
"use client";
import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { StaticStyles } from '../styles/StaticStyles';
import Providers from './Providers';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
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