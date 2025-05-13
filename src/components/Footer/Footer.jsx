
'use client';
import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer/SectionContainer';

export const Footer = ({ footerHtml }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <div dangerouslySetInnerHTML={{ __html: footerHtml }} />
      </SectionContainer>
    </Styled.Container>
  );
};

Footer.propTypes = {
  footerHtml: PropTypes.string.isRequired,
};