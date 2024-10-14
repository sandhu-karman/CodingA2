import React from 'react';
import styled from 'styled-components';

const StyledText = styled.p<{ fontSize?: string; color?: string }>`
  font-size: ${(props) => props.fontSize || '16px'};
  color: ${(props) => props.color || '#000'};
`;

export const Text: React.FC<{ fontSize?: string; color?: string; content: string }> = ({ fontSize, color, content }) => {
  return <StyledText fontSize={fontSize} color={color}>{content}</StyledText>;
};
