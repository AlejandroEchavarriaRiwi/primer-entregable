// components/Pagination.tsx
import React from 'react';
import styled from 'styled-components';
import IButton from '../atoms/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NextIcon = styled(ChevronRight)`
  color: rgb(31, 41, 55);
`;

const PreviousIcon = styled(ChevronLeft)`
  color: rgb(31, 41, 55);
`;


interface IPagination {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrevious: () => void;
}

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
`;

const PageNumber = styled.span`
  font-size: 1.25rem;
`;

const Pagination: React.FC<IPagination> = ({ currentPage, totalPages, onNext, onPrevious }) => {
  return (
    <PaginationContainer>
      <IButton
        icon={<PreviousIcon/>}
        onClick={onPrevious}
        disabled={currentPage === 1} // Deshabilitar si es la primera página
        backgroundColor={"rgb(229, 231, 235)"}
        borderRadius={"20px"}
      />
      <PageNumber>{`Pagina ${currentPage} de ${totalPages}`}</PageNumber>
      <IButton
        icon={<NextIcon/>}
        onClick={onNext}
        disabled={currentPage === totalPages} // Deshabilitar si es la última página
        backgroundColor={"rgb(229, 231, 235)"}
        borderRadius={"20px"}
      />
    </PaginationContainer>
  );
};

export default Pagination;
