'use client';
import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground/SectionBackground';
import { Heading } from '../Heading/Heading';
import { TextComponent } from '../TextComponent/TextComponent';

export const GridContent = ({ title, html, background = false }) => {
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

GridContent.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  background: PropTypes.bool,
};
