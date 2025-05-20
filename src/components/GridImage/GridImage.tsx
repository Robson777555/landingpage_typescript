'use client';
import React from 'react';
import Image from 'next/image';
import { Heading } from '../Heading/Heading';
import { SectionBackground } from '../SectionBackground/SectionBackground';
import { TextComponent } from '../TextComponent/TextComponent';
import * as Styled from './styles';
import { MobileGridElement } from './styles.mobile';
import { useIsMobile } from '../../hooks/useIsMobile';

interface GridItem {
  altText: string;
  srcImg: string;
}

interface GridImageProps {
  title: string;
  description: string;
  grid: GridItem[];
  background?: boolean;
}

export const GridImage = ({ 
  title, 
  description, 
  grid, 
  background = false 
}: GridImageProps) => {
  const isMobile = useIsMobile();

  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          <span dangerouslySetInnerHTML={{ __html: title }} />
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((el, idx) =>
            isMobile ? (
              <MobileGridElement key={idx}>
                <Image
                  src={el.srcImg}
                  alt={el.altText}
                  width={180}
                  height={180}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: '180px',
                    objectFit: 'contain',
                    margin: '0 auto',
                    display: 'block'
                  }}
                />
                <Heading as="h3" size="huge">{el.altText}</Heading>
              </MobileGridElement>
            ) : (
              <Styled.GridElement key={`${el.srcImg}${el.altText}`}>
                <Image
                  src={el.srcImg}
                  alt={el.altText}
                  width={180}
                  height={180}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: '180px',
                    objectFit: 'contain',
                    margin: '0 auto',
                    display: 'block'
                  }}
                />
                <Heading as="h3" size="huge">{el.altText}</Heading>
              </Styled.GridElement>
            )
          )}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};