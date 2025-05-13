'use client';
import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer/SectionContainer';

export const SectionBackground = ({ children, background = false }) => {
  return (
    <Styled.Container background={background} data-testid="section-background">
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};

SectionBackground.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.bool,
};

SectionBackground.defaultProps = {
  background: false,
};