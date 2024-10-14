import React from 'react';
import styled from 'styled-components';

interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const HiddenRadio = styled.input`
  display: none;
`;

const StyledRadio = styled.div<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  border: 2px solid #007bff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;

  ${HiddenRadio}:checked + & {
    background-color: #007bff;

    &:after {
      content: '';
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: white;
    }
  }
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  checked = false,
  onChange,
}) => {
  return (
    <RadioButtonWrapper>
      <HiddenRadio
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <StyledRadio checked={checked} />
      {label}
    </RadioButtonWrapper>
  );
};
