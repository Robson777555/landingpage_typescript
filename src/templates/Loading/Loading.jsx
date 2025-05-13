'use client';
import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';

export const Loading = ({ fullScreen = true }) => {
  return (
    <Styled.Container $fullScreen={fullScreen} aria-live="polite" aria-busy="true">
      <Styled.Spinner />
      <Styled.Spinner $small />
    </Styled.Container>
  );
};

Loading.propTypes = {
  fullScreen: PropTypes.bool
};

Loading.defaultProps = {
  fullScreen: true
};
