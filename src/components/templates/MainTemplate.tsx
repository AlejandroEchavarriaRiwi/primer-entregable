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
    height: 100vh; /* Ocupa toda la pantalla */
    background: linear-gradient(135deg, rgb(192, 132, 252), rgb(236, 72, 153), rgb(239, 68, 68));
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    box-sizing: border-box;
`;

const MainWrapper = styled.div`
    width: 80%;
    max-height: 90%; /* Limitar el alto máximo */
    border-radius: 20px;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch; /* Permitir que los hijos se ajusten */
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden; /* Evitar las barras de desplazamiento */

    /* Ajuste del tamaño en pantallas pequeñas */
    @media (max-width: 768px) {
        width: 90%; /* Reducir el ancho en pantallas pequeñas */
        max-height: 95%;
    }

    @media (max-height: 600px) {
        max-height: 100%;
        margin: 10px 0; /* Evitar que el wrapper toque los bordes en pantallas muy bajas */
    }

    /* Permitir que los hijos internos se adapten proporcionalmente */
    & > * {
        flex: 1;
        min-height: 0;
    }
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
