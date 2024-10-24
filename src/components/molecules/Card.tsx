import React from 'react';
import styled from 'styled-components';
import IButton from '../atoms/Button';
import { Pencil, Trash2  } from 'lucide-react';

const EditIcon = styled(Pencil)`
  width: 15px;
  color: ${({theme})=> theme.colors.secondary};
  cursor: pointer;
`;

const DeleteIcon = styled(Trash2)`
  width: 15px;
  color:${({theme})=> theme.colors.delete};
  cursor: pointer;
`;

interface ICard {
  title: string;
  city: string;
  phone: string;
  onFirstButtonClick: () => void;
  onSecondButtonClick: () => void;
  firstButtonLabel: string;
  secondButtonLabel: string;
}

const CardContainer = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  width: 100%;
  max-width: 400px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const CardInfo = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 3px;
  margin-top: 1rem;
`;

const Card: React.FC<ICard> = ({
  title,
  city,
  phone,
  onFirstButtonClick,
  onSecondButtonClick,
}) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardInfo>Ciudad: {city}</CardInfo>
      <CardInfo>Teléfono: {phone}</CardInfo>
      <ButtonContainer>
        <IButton
          width='45px'
          icon={<EditIcon />} 
          onClick={onFirstButtonClick} 
          $backgroundColor="rgb(255, 255, 255)"
          $border='1px solid rgb(229, 231, 235)'
        />
        <IButton
          width='45px'
          icon={<DeleteIcon />} 
          onClick={onSecondButtonClick} 
          $backgroundColor="#ffffff"
          $border='1px solid rgb(229, 231, 235)'
          $hover='rgb(254, 242, 242)'
          $hovercolor='rgb(220, 38, 38)'
        />
      </ButtonContainer>
    </CardContainer>
  );
};

export default Card;
