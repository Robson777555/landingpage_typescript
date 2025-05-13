'use client';
import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground/SectionBackground';
import { Heading } from '../Heading/Heading';
import { TextComponent } from '../TextComponent/TextComponent';
import { MobileGridElement } from './styles.mobile';
import { useIsMobile } from '../../hooks/useIsMobile';

export const GridSection = ({
  title,
  description,
  grid,
  background = false,
}) => {
  const isMobile = useIsMobile();

  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading as="h2" size="huge">
          <span dangerouslySetInnerHTML={{ __html: title }} />
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((el, idx) =>
            isMobile ? (
              <MobileGridElement key={idx}>
                <h3 dangerouslySetInnerHTML={{ __html: el.title }} />
                <p>{el.description}</p>
              </MobileGridElement>
            ) : (
              <Styled.GridElement key={`${el.title}-${idx}`}>
                <Styled.Title as="h3" dangerouslySetInnerHTML={{ __html: el.title }} />
                <TextComponent>{el.description}</TextComponent>
              </Styled.GridElement>
            )
          )}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridSection.propTypes = {
  background: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  grid: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
