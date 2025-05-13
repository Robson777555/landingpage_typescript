'use client';
import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';

const SectionContainer = ({ children, className = '' }) => {
  return (
    <Styled.Container className={className} data-testid="section-container">
      {children}
    </Styled.Container>
  );
};

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export { SectionContainer };
