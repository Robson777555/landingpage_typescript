'use client';
import React from 'react';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground/SectionBackground';
import { Heading } from '../Heading/Heading';
import { TextComponent } from '../TextComponent/TextComponent';

interface GridContentProps {
  title: string;
  html: string;
  background?: boolean;
}

export const GridContent = ({ 
  title, 
  html, 
  background = false 
}: GridContentProps) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <Styled.HtmlContainer>
          <TextComponent>{html}</TextComponent>
        </Styled.HtmlContainer>
      </Styled.Container>
    </SectionBackground>
  );
};