import React from 'react';
import styled from 'styled-components';

interface HeroImageProps {
  src: string;
  alt: string;
}

const HeroImageWrapper = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HeroImage: React.FC<HeroImageProps> = ({ src, alt }) => {
  return (
    <HeroImageWrapper>
      <StyledImage src={src} alt={alt} />
    </HeroImageWrapper>
  );
};
