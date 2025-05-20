import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { SectionContainer } from './SectionContainer';
import { theme } from '../../styles/theme';
import { describe, it, expect } from 'vitest';

describe('<SectionContainer />', () => {
  const renderContainer = (props = {}) => {
    const defaultProps = {
      children: <h1>Test Content</h1>,
    };

    return render(
      <ThemeProvider theme={theme}>
        <SectionContainer {...defaultProps} {...props} />
      </ThemeProvider>
    );
  };

  it('should render children content', () => {
    renderContainer();
    expect(screen.getByRole('heading', { name: 'Test Content' })).toBeInTheDocument();
  });

  it('should apply correct styles', () => {
    const { container } = renderContainer();
    const sectionElement = container.firstChild;

    // Verifica os estilos principais
    expect(sectionElement).toHaveStyle({
      maxWidth: '120rem',
      margin: '0 auto',
      padding: theme.spacings.xlarge,
    });
  });

  it('should accept className prop', () => {
    const { container } = renderContainer({ className: 'custom-class' });
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('should match snapshot', () => {
    const { container } = renderContainer();
    expect(container).toMatchSnapshot();
  });
});