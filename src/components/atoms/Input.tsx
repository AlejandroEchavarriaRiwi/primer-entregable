import React from 'react';
import styled from 'styled-components';
import { useStore } from '../../store/store';

interface IInput {
  name: string;
  type: 'text' | 'email' | 'password';
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  borderRadius?: string;
  label?: string;
  itemType?: string;
  paddingleft?: string;
}

const InputWrapper = styled.div<{ borderRadius?: string }>`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input<{ 
  borderRadius?: string
  paddingleft?: string;
  label?: string;
  itemType?: string;
 }>`
  background-color: transparent;
  font-family: 'Onest', sans-serif;
  padding: 0.5rem 1rem;/* Espacio para el ícono */
  padding-left: ${(props) => props.paddingleft || "0.5rem"};
  font-size: 1rem;
  border-radius: ${(props) => props.borderRadius || '0.375rem'};
  border: 2px solid #d1d5db;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${({ itemType, theme }) => (itemType === 'company' ? theme.colors.focusrosa : theme.colors.focusmorado)};
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const IconWrapper = styled.span`
  position: absolute;
  left: 1rem;
  display: flex;
  align-items: center;
  pointer-events: none;
`;

const Input: React.FC<IInput> = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  icon,
  borderRadius,
  paddingleft,
}) => {
  const itemType = useStore((state) => state.itemType)

  return (
    <InputWrapper borderRadius={borderRadius}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <StyledInput
        id={name}
        name={name}
        type={type}
        itemType={itemType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        borderRadius={borderRadius}
        paddingleft={paddingleft}
      />
    </InputWrapper>
  );
};

export default Input;
