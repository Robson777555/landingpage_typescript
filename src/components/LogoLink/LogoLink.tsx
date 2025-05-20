'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as Styled from './styles';
import { Heading } from '../Heading/Heading';

interface LogoLinkProps {
  text: string;
  srcImg?: string;
  link?: string;
}

export const LogoLink = ({ text, srcImg = '', link = '/' }: LogoLinkProps) => {
  return (
    <Heading size="small" uppercase>
      <Styled.Container
        href={link}
        as={Link}
        target={link.startsWith('http') ? '_blank' : '_self'}
        rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {srcImg ? (
          <Image
            src={srcImg}
            alt={text}
            width={48}
            height={48}
            style={{
              height: '3rem',
              width: 'auto',
            }}
            priority
          />
        ) : (
          <span>{text}</span>
        )}
      </Styled.Container>
    </Heading>
  );
};