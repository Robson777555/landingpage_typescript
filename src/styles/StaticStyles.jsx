import React from 'react';

// styles/StaticStyles.jsx
//eslint-disable-next-line
export const StaticStyles = ({ css }) => (
  <>
    <style dangerouslySetInnerHTML={{ __html: css }} />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Montserrat:wght@900&display=swap"
      rel="stylesheet"
    />
  </>
);
