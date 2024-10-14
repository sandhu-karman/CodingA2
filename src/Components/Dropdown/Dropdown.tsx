import React, { useState } from 'react';
import styled from 'styled-components';

interface DropdownProps {
  options: string[];
  label: string;
  onSelect: (option: string) => void;
}

const DropdownWrapper = styled.div`
  margin: 16px 0;
`;

const DropdownLabel = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
  display: block;
`;

const DropdownSelect = styled.select`
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
`;

export const Dropdown: React.FC<DropdownProps> = ({ options, label, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    setSelectedOption(newValue);
    onSelect(newValue);
  };

  return (
    <DropdownWrapper>
      <DropdownLabel>{label}</DropdownLabel>
      <DropdownSelect value={selectedOption} onChange={handleChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </DropdownSelect>
    </DropdownWrapper>
  );
};
