import React from 'react';
import { Title } from './styles';

type HeadingSize = 'small' | 'medium' | 'big' | 'huge';
type HeadingAs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
  children: React.ReactNode;
  colorDark?: boolean;
  as?: HeadingAs;
  size?: HeadingSize;
  uppercase?: boolean;
}

export const Heading = ({
  children,
  colorDark = true,
  as = 'h1',
  size = 'huge',
  uppercase = false,
}: HeadingProps) => {
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