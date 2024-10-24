import React from 'react';
import styled from 'styled-components';

interface ITextarea {
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  rows?: number;
}

const StyledTextarea = styled.textarea<{ disabled: boolean }>`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.375rem;
  border: 2px solid #d1d5db;
  width: 100%;
  box-sizing: border-box;
  resize: none;
  background-color: ${({ disabled }) => (disabled ? '#f3f4f6' : 'white')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};

  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

const Textarea: React.FC<ITextarea> = ({name, value, placeholder, onChange, disabled = false, rows = 5 }) => {
  return (
    <StyledTextarea
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      rows={rows}
      name={name}
    />
  );
};

export default Textarea;
