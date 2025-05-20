'use client';
import React from 'react';
import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer/SectionContainer';

interface FooterProps {
  footerHtml: string;
}

export const Footer = ({ footerHtml }: FooterProps) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <div dangerouslySetInnerHTML={{ __html: footerHtml }} />
      </SectionContainer>
    </Styled.Container>
  );
};