'use client';
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import * as Styled from './styles';
import { Heading } from '../Heading/Heading';

export const LogoLink = ({ text, srcImg = '', link = '/' }) => {
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

LogoLink.propTypes = {
  text: PropTypes.string.isRequired,
  srcImg: PropTypes.string,
  link: PropTypes.string,
};

LogoLink.defaultProps = {
  srcImg: '',
  link: '/',
};
