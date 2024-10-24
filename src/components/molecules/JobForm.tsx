import React from 'react';
import styled from 'styled-components';
import IButton from '../atoms/Button';
import Input from '../atoms/Input';
import Label from '../atoms/Label';
import Select from '../atoms/Select';
import Textarea from '../atoms/TextArea';
import { useStore } from '../../store/store';

export interface JobFormData {
    title: string;
    company: string;
    description: string;
    state: string;
}

interface JobFormProps {
    initialData?: JobFormData;
    onSubmit: (data: JobFormData) => void;
    onCancel: () => void;
}

const FormGroup = styled.div`
    margin-bottom: 1rem;
`;

const JobForm: React.FC<JobFormProps> = ({ initialData, onSubmit }) => {
    const [formData, setFormData] = React.useState<JobFormData>(
        initialData || {
            title: '',
            description: '',
            state: '',
            company: '',
        }
    );

    const handleSubmit = () => {
        onSubmit(formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const itemType = useStore((state) => state.itemType);

    return (
        <form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="title" text="Título" />
                <Input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
            </FormGroup>

            <FormGroup>
                <Label htmlFor="description" text="Descripción" />
                <Textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={5}
                />
            </FormGroup>

            <FormGroup>
                <Label htmlFor="state" text="Estado" />
                <Select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    options={[
                        { value: '', label: 'OPEN' },
                        { value: 'fullTime', label: 'Tiempo Completo' },
                        { value: 'partTime', label: 'Medio Tiempo' },
                        { value: 'contract', label: 'Contrato' },
                        { value: 'internship', label: 'Práctica' },
                    ]}
                />
            </FormGroup>

            <FormGroup>
                <Label htmlFor="company" text="Compañia" />
                <Select
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    options={[
                        { value: '', label: 'Selecciona una compañía' },
                        { value: 'entry', label: 'Entry Level' },
                        { value: 'junior', label: 'Junior' },
                        { value: 'mid', label: 'Mid Level' },
                        { value: 'senior', label: 'Senior' },
                    ]}
                />
            </FormGroup>

            <div>
            <IButton 
            label={"Guardar"} 
            onClick={handleSubmit} 
            width={"100%"}
            hover={itemType === 'job' ? "rgb(147, 51, 234)" : "rgb(219, 39, 119)"}
             />
            </div>
        </form>
    );
};

export default JobForm;
