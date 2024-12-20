// components/Footer.tsx
import React from 'react';
import styled from 'styled-components';
import Pagination from '../molecules/Pagination';

const FooterContainer = styled.footer`
  padding: 1rem;
  text-align: center;
  margin-bottom: 30px;
`;

interface IFooterProps {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrevious: () => void;
}

const Footer: React.FC<IFooterProps> = ({ currentPage, totalPages, onNext, onPrevious }) => {
  return (
    <FooterContainer>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={onNext}
        onPrevious={onPrevious}
      />
    </FooterContainer>
  );
};

export default Footer;
