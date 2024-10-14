import React from 'react';
import styled from 'styled-components';

interface CardProps {
  title: string;
  content: string;
  backgroundColor?: string;
  width?: string;
}

const StyledCard = styled.div<{ backgroundColor: string; width: string }>`
  background-color: ${(props) => props.backgroundColor || '#fff'};
  width: ${(props) => props.width || '300px'};
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 16px;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 8px;
`;

const CardContent = styled.p`
  font-size: 16px;
  color: #333;
`;

export const Card: React.FC<CardProps> = ({
  title,
  content,
  backgroundColor = '#fff',
  width = '300px',
}) => {
  return (
    <StyledCard backgroundColor={backgroundColor} width={width}>
      <CardTitle>{title}</CardTitle>
      <CardContent>{content}</CardContent>
    </StyledCard>
  );
};
