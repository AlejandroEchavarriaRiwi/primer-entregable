import React from 'react';
import styled from 'styled-components';

interface ISelect {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  options: { value: string; label: string }[];
}

const StyledSelect = styled.select<{ disabled: boolean }>`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.375rem;
  border: 2px solid #d1d5db;
  width: 100%;
  box-sizing: border-box;
  background-color: ${({ disabled }) => (disabled ? '#f3f4f6' : 'white')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

const Select: React.FC<ISelect> = ({ name, value, onChange, disabled = false, options }) => {
  return (
    <StyledSelect value={value} onChange={onChange} disabled={disabled} name={name}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
