import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './styles';

export const Heading = ({
  children,
  colorDark = true,
  as = 'h1',
  size = 'huge',
  uppercase = false,
}) => {
  return (
    <Title
      as={as}
      $colorDark={colorDark}
      $size={size}
      $uppercase={uppercase}
      data-testid="heading"
    >
      {children}
    </Title>
  );
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  colorDark: PropTypes.bool,
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: PropTypes.oneOf(['small', 'medium', 'big', 'huge']),
  uppercase: PropTypes.bool,
};

Heading.defaultProps = {
  colorDark: true,
  as: 'h1',
  size: 'huge',
  uppercase: false,
};
