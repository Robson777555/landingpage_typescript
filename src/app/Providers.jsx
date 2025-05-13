"use client";
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import PropTypes from 'prop-types';
export default function Providers({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};
