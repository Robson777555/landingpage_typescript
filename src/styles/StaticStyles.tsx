import React from 'react';

interface StaticStylesProps {
  css?: string;
}

export const StaticStyles = ({ css }: StaticStylesProps) => (
  <>
    {css && <style dangerouslySetInnerHTML={{ __html: css }} />}
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Montserrat:wght@900&display=swap"
      rel="stylesheet"
    />
  </>
);