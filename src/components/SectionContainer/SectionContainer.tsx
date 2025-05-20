'use client';
import React, { ReactNode } from 'react';
import * as Styled from './styles';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

const SectionContainer = ({ children, className = '' }: SectionContainerProps) => {
  return (
    <Styled.Container className={className} data-testid="section-container">
      {children}
    </Styled.Container>
  );
};

export { SectionContainer };