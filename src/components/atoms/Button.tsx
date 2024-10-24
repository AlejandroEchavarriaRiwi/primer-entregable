import React from 'react';
import styled from 'styled-components';
import { useStore } from '../../store/store';



interface IButton {
  label?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
  border?: string;
  borderRadius?: string;
  width?: string;
  padding?: string;
  color?: string;
  height?: string;
  hover?: string;
}


const Button = styled.button<{
  itemType: string; 
  size: string; 
  disabled: boolean; 
  backgroundColor?: string; 
  border?: string; 
  borderRadius?: string; 
  width?: string; 
  padding?: string;
  color?: string;
  height?: string;
  hover?: string;
}>`
  background-color: ${({ backgroundColor, itemType, theme }) => backgroundColor || (itemType === 'company' ? theme.colors.primary : theme.colors.secondary)};
  color: ${({color})=> color || "white"};
  border: ${({ border }) => border || 'none'}; // Usar la prop border
  border-radius: ${({ borderRadius }) => borderRadius || '0.25rem'}; // Usar la prop borderRadius
  width: ${({ width }) => width || 'auto'}; // Usar la prop width
  padding: ${({ padding, size }) => padding || (size === 'small' ? '0.25rem 0.5rem' : size === 'large' ? '0.75rem 1.5rem' : '0.5rem 1rem')}; // Usar la prop padding
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 1rem;
  font-family: 'Onest', sans-serif;
  justify-content: center;
  gap: 8px;

  &:hover {
    background-color: ${({hover}) => hover || 'null'};
  }
`;


const IButton: React.FC<IButton> = ({
  label,
  onClick,
  icon,
  disabled = false,
  size = 'medium',
  backgroundColor,
  border,
  borderRadius,
  width,
  padding,
  color,
  height,
  hover,
}) => {
  const itemType = useStore((state) => state.itemType); // Acceder al estado global

  return (
    <Button
      onClick={onClick}
      size={size}
      disabled={disabled}
      itemType={itemType}
      backgroundColor={backgroundColor}
      border={border} // Pasar border
      borderRadius={borderRadius} // Pasar borderRadius
      width={width} // Pasar width
      padding={padding} // Pasar padding
      color={color}
      height={height}
      hover={hover}
    >
      {icon}
      {label}
    </Button>
  );
};

export default IButton;

