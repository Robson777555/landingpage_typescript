'use client';
import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';

export const TextComponent = ({
  children,
  size = 'medium',
  as = 'div',
  className = ''
}) => {
  return (
    <Styled.Container
      as={as}
      $size={size}
      className={className}
      dangerouslySetInnerHTML={{ __html: children }}
      data-testid="text-component"
    />
  );
};

TextComponent.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  as: PropTypes.oneOf(['div', 'p', 'span']),
  className: PropTypes.string,
};

TextComponent.defaultProps = {
  size: 'medium',
  as: 'div',
  className: '',
};