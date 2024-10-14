import React from 'react';
import styled from 'styled-components';

interface LabelProps {
  text: string;
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

const StyledLabel = styled.label<{ size: string; color: string }>`
  font-size: ${(props) => (props.size === 'small' ? '12px' : props.size === 'large' ? '24px' : '16px')};
  color: ${(props) => props.color || '#000'};
`;

export const Label: React.FC<LabelProps> = ({ text, size = 'medium', color = '#000' }) => {
  return <StyledLabel size={size} color={color}>{text}</StyledLabel>;
};
export default Label;