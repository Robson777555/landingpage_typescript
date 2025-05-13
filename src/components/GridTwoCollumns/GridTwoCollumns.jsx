'use client';
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground/SectionBackground';
import { TextComponent } from '../TextComponent/TextComponent';
import { MobileGridTwoCol } from './styles.mobile';
import { useIsMobile } from '../../hooks/useIsMobile';

export const GridTwoCollumns = ({
  title,
  text,
  srcImg,
  background = false,
}) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <MobileGridTwoCol>
        <h2 style={{ fontWeight: 'bold' }}>{title}</h2>
        <p>{text}</p>
        <img src={srcImg} alt={title} />
      </MobileGridTwoCol>
    );
  }

  return (
    <SectionBackground background={background}>
      <Styled.Container background={background}>
        <Styled.TextContainer>
          <Styled.Title>{title}</Styled.Title>
          <TextComponent colorDark={!background}>{text}</TextComponent>
        </Styled.TextContainer>
        <Styled.ImageContainer>
          <Image
            src={srcImg}
            alt={title}
            width={500}
            height={500}
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '400px',
            }}
          />
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridTwoCollumns.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  srcImg: PropTypes.string.isRequired,
  background: PropTypes.bool,
};
