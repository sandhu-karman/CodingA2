import React from 'react';
import styled, { css } from 'styled-components';

// Define the props interface
export interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  $primary?: boolean; // This prop will determine the button style
}

// Define the styled button with type annotation for props
const StyledButton = styled.button<{ $primary?: boolean }>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: #BF4F74;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  // Conditional styling based on the $primary prop
  ${(props: { $primary?: boolean }) => props.$primary && css`
    background: #BF4F74;
    color: white;
  `}
`;

// Update the Button component to use the props type
const Button: React.FC<ButtonProps> = ({ label, onClick, disabled, $primary }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} $primary={$primary}>
      {label}
    </StyledButton>
  );
};

export default Button;
