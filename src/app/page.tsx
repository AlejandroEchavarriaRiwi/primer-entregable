import HomePage from "@/components/templates/MainTemplate";
import { CompanyService } from '@/services/company.service';
import { VacantService } from '@/services/vacantes.service';

const useVacantService = new VacantService()
const useCompanyService = new CompanyService()

async function getData() {
  const companyData = await useCompanyService.findAll(3, 6)
  const jobData = await useVacantService.findAll(1, 6)

  // Simula que las compañías son los datos iniciales
  return {
    initialCardData: companyData,
    jobData,
    totalPages: 5,
  };
}

export default async function Page() {
  const { initialCardData, jobData, totalPages } = await getData();

  return (
      <HomePage
      initialCardData={initialCardData} // Pasa los datos iniciales (compañías)
      jobData={jobData} // Pasa los datos de vacantes
      totalPages={totalPages}
      navbarConfig={{
        title: "Panel de Administración",
        firstButtonLabel: "Compañías",
        secondButtonLabel: "Vacantes",
      }}
    />
  );
}
