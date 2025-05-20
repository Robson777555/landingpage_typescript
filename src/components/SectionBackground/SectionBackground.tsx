"use client";
import React, { ReactNode } from "react";
import * as Styled from "./styles";
import { SectionContainer } from "../SectionContainer/SectionContainer";

interface SectionBackgroundProps {
  children: ReactNode;
  background?: boolean;
}

export const SectionBackground = ({ children, background }: SectionBackgroundProps) => {
  return (
    <Styled.Container data-testid="section-background" {...(background ? { background: true } : {})}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};
