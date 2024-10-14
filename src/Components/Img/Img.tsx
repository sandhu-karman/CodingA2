import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img<{ width?: string; height?: string }>`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'auto'};
`;

export const Img: React.FC<{ src: string; alt: string; width?: string; height?: string }> = ({ src, alt, width, height }) => {
  return <StyledImage src={src} alt={alt} width={width} height={height} />;
};
