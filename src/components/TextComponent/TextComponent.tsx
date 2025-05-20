'use client';
import React from 'react';
import * as Styled from './styles';

type TextSize = 'small' | 'medium' | 'large';
type TextElement = 'div' | 'p' | 'span';

interface TextComponentProps {
  children: string;
  size?: TextSize;
  as?: TextElement;
  className?: string;
}

export const TextComponent = ({
  children,
  size = 'medium',
  as = 'div',
  className = ''
}: TextComponentProps) => {
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