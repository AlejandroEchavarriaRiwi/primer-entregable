import React, { useState } from 'react';
import styled from 'styled-components';
import IButton from '../atoms/Button';
import Input from '../atoms/Input';
import { Briefcase, Building2, Search } from 'lucide-react';
import { useStore } from '../../store/store';

const BriefIcon = styled(Briefcase)<{ itemType: string }>`
  color: ${({ itemType, theme }) => (itemType === 'company' ? theme.colors.secundary : 'inherit')}; 
`;

const BuildingIcon = styled(Building2)<{ itemType: string }>`
  color: ${({ itemType, theme }) => (itemType === 'job' ? theme.colors.secundary : 'inherit')};
`;

const SearchIcon = styled(Search)`
  color: ${({theme})=> theme.colors.grismedio};
`;


interface INavbar {
  title: string;
  onFirstButtonClick: () => void;
  onSecondButtonClick: () => void;
  firstButtonLabel: string;
  secondButtonLabel: string;
  onSearch: (value: string) => void;
}

const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  text-align: center;
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin-right: auto;
`;

const ButtonContainer = styled.div`
  width: fit-content;
  display: flex;
  background-color: ${({ theme }) => theme.colors.grisclaro};
  border-radius: 20px;

  margin-left: 100px;
`;

const PropsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const SearchContainer = styled.div`
  width: 20%;
  margin-right: 50px;
`;

const Navbar: React.FC<INavbar> = ({
  title,
  onFirstButtonClick,
  onSecondButtonClick,
  firstButtonLabel,
  secondButtonLabel,
  onSearch,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const itemType = useStore((state) => state.itemType); // Get the current itemType from Zustand

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  return (
    <NavbarContainer>
      <Title>{title}</Title>
      <PropsWrapper>
        <ButtonContainer>
        <IButton
            icon={<BriefIcon itemType={itemType} />}
            label={secondButtonLabel}
            onClick={onSecondButtonClick}
            borderRadius="20px"
            backgroundColor={itemType === 'job' ? undefined : 'rgb(243, 244, 246)'}
            color={itemType === 'job' ? undefined : "rgb(31, 41, 55)"}
            hover={itemType === 'company' ? undefined : "rgb(147, 51, 234)"}       
          />
          <IButton
            icon={<BuildingIcon itemType={itemType} />} 
            label={firstButtonLabel}
            onClick={onFirstButtonClick}
            borderRadius="20px"
            backgroundColor={itemType === 'company' ? undefined : 'rgb(243, 244, 246)'}
            color={itemType === 'company' ? undefined : "rgb(31, 41, 55)"}
            hover={itemType === 'job' ? undefined : "rgb(219, 39, 119)"}
          />
        </ButtonContainer>
        <SearchContainer>
          <Input
            paddingleft="3rem"
            borderRadius="20px"
            type="text"
            placeholder="Buscar..."
            value={searchQuery}
            onChange={handleSearchChange} // Use the handler for search
            name="Buscar..."
            icon={<SearchIcon />}
            />
        </SearchContainer>
      </PropsWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
