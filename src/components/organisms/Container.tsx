'use client'
import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../molecules/Card';
import Modal from './Modal';
import CompanyForm, { CompanyFormData } from '../molecules/CompanyForm';
import JobForm, { JobFormData } from '../molecules/JobForm';
import IButton from '../atoms/Button';
import { CirclePlus } from 'lucide-react';
import { useStore } from '../../store/store';

const AddIcon = styled(CirclePlus)`
  color: white;
  cursor: pointer;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;

`

const GridContainer = styled.div`
  width: 80%;
  margin-top: 20px;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 20px;
`;


interface ICardData {
  id: number;
  title: string;
  city: string;
  phone: string;
  firstButtonLabel: string;
  secondButtonLabel: string;
}

interface ICardContainer {
  title: string;
  cardData: ICardData[];
  type: 'company' | 'job';
  onAdd: (data: CompanyFormData | JobFormData) => void;
  onEdit: (id: number, data: CompanyFormData | JobFormData) => void;
  onDelete: (id: number) => void;
}

const CardContainer: React.FC<ICardContainer> = ({
  title,
  cardData,
  type,
  onAdd,
  onEdit,
  onDelete
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'add' | 'edit'>('add');
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleOpenModal = (mode: 'add' | 'edit', id?: number) => {
    setModalMode(mode);
    if (id) setSelectedId(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedId(null);
  };

  const handleSubmit = (data: CompanyFormData | JobFormData) => {
    if (modalMode === 'add') {
      onAdd(data);
    } else if (modalMode === 'edit' && selectedId !== null) {
      onEdit(selectedId, data);
    }
    handleCloseModal();
  };

  const getInitialData = (id: number) => {
    const card = cardData.find(card => card.id === id);
    if (!card) return undefined;

    // Convertir los datos de la card al formato del formulario
    if (type === 'company') {
      return {
        name: card.title,
        ubication: card.city,
        contact: card.phone,
      } as CompanyFormData;
    } else {
      return {
        title: card.title,
        description: card.city,
        state: card.phone,
        company: '',
      } as JobFormData;
    }
  };

  const itemType = useStore((state) => state.itemType);

  return (
    <Container>
      <TitleContainer>
        <h1>{title}</h1>
        <IButton
          label={`Agregar ${type === 'company' ? 'Compañía' : 'Vacante'}`}
          onClick={() => handleOpenModal('add')}
          icon={<AddIcon />}
          $borderRadius='20px'
          $hover={itemType === 'job' ? "rgb(147, 51, 234)" : "rgb(219, 39, 119)"
          }
        />
      </TitleContainer>


      <GridContainer>
        {cardData.map((data) => (
          <Card
            key={data.id}
            title={data.title}
            city={data.city}
            phone={data.phone}
            onFirstButtonClick={() => handleOpenModal('edit', data.id)}
            onSecondButtonClick={() => onDelete(data.id)}
            firstButtonLabel={data.firstButtonLabel}
            secondButtonLabel={data.secondButtonLabel}
          />
        ))}
      </GridContainer>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={`${modalMode === 'add' ? 'Agregar' : 'Editar'} ${type === 'company' ? 'Compañía' : 'Vacante'}`}
      >
        {type === 'company' ? (
          <CompanyForm
            initialData={selectedId ? getInitialData(selectedId) as CompanyFormData : undefined}
            onSubmit={handleSubmit}
            onCancel={handleCloseModal}
          />
        ) : (
          <JobForm
            initialData={selectedId ? getInitialData(selectedId) as JobFormData : undefined}
            onSubmit={handleSubmit}
            onCancel={handleCloseModal}
          />
        )}
      </Modal>
    </Container>
  );
};

export default CardContainer;
