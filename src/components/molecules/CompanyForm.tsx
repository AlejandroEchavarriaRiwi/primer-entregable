import React from 'react';
import styled from 'styled-components';
import IButton from '../atoms/Button';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export interface CompanyFormData {
  name: string;
  ubication: string;
  contact: string;
}

interface CompanyFormProps {
  initialData?: CompanyFormData;
  onSubmit: (data: CompanyFormData) => void;
  onCancel: () => void;
}

const CompanyForm: React.FC<CompanyFormProps> = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = React.useState<CompanyFormData>(
    initialData || {
      name: '',
      ubication: '',
      contact: '',
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="name" text="Nombre de la empresa" />
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="ubication" text="Ubicación" />
        <Input
          type="text"
          name="ubication"
          value={formData.ubication}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="name" text="Contacto" />
        <Input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
        />
      </FormGroup>


      <div>
        <IButton label={"Guardar"} onClick={handleSubmit} width={"100%"} />
      </div>
    </form>
  );
};

export default CompanyForm;
