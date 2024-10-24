'use client';
import React, { useState, useCallback } from "react";
import CardContainer from "@/components/organisms/Container";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import { CompanyFormData } from "../molecules/CompanyForm";
import { JobFormData } from "../molecules/JobForm";
import styled from "styled-components";
import { useStore } from '../../store/store';

const BackGround = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(135deg,rgb(192, 132, 252),rgb(236, 72, 153),rgb(239, 68, 68));
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MainWrapper = styled.div`
    width: 80%;
    height: 95%;
    border-radius: 20px;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

interface CardData {
    id: number;
    title: string;
    city: string;
    phone: string;
    firstButtonLabel: string;
    secondButtonLabel: string;
}

interface HomePageProps {
    initialCardData: CardData[];
    jobData: CardData[];
    totalPages: number;
    navbarConfig: {
        title: string;
        firstButtonLabel: string;
        secondButtonLabel: string;
    };
}

const HomePage = ({ initialCardData, jobData, totalPages, navbarConfig }: HomePageProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [cardData, setCardData] = useState(initialCardData);
    const { itemType, setItemType } = useStore(); // Accede directamente al store

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };

    const handleEdit = useCallback((id: number) => {
        console.log('Editing item with id:', id);
        // Implementar la lógica de edición
    }, []);

    const handleDelete = useCallback((id: number) => {
        console.log('Deleting item with id:', id);
        // Implementar la lógica de eliminación
    }, []);

    const handleSearch = useCallback((searchTerm: string) => {
        console.log('Searching for:', searchTerm);
        // Implementar la lógica de búsqueda
    }, []);

    const handleNavbarButtonClick = (type: 'first' | 'second') => {
        if (type === 'first') {
            setItemType('company');
            setCardData(initialCardData);
        } else {
            setItemType('job');
            setCardData(jobData);
        }
    };

    const enrichedCardData = cardData.map(card => ({
        ...card,
        onFirstButtonClick: () => handleEdit(card.id),
        onSecondButtonClick: () => handleDelete(card.id)
    }));

    const handleAddItem = (data: CompanyFormData | JobFormData) => {
        console.log('Añadiendo:', data);
    };

    const handleEditItem = (id: number, data: CompanyFormData | JobFormData) => {
        console.log('Editando id:', id, 'con datos:', data);
    };

    const handleDeleteItem = (id: number) => {
        console.log('Eliminando id:', id);
    };

    const dynamicTitle = itemType === 'company' ? 'Compañías' : 'Vacantes';

    return (
        <BackGround>
            <MainWrapper>
                <Navbar
                    title={navbarConfig.title}
                    onFirstButtonClick={() => handleNavbarButtonClick('first')}
                    onSecondButtonClick={() => handleNavbarButtonClick('second')}
                    firstButtonLabel={navbarConfig.firstButtonLabel}
                    secondButtonLabel={navbarConfig.secondButtonLabel}
                    onSearch={handleSearch}
                />
                <CardContainer
                    title={dynamicTitle}
                    cardData={enrichedCardData}
                    type={itemType}
                    onAdd={handleAddItem}
                    onEdit={handleEditItem}
                    onDelete={handleDeleteItem}
                />
                <Footer
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onNext={handleNext}
                    onPrevious={handlePrevious}
                />
            </MainWrapper>
        </BackGround>
    );
};

export default HomePage;
