import HomePage from "@/components/templates/MainTemplate";


async function getData() {
  // Simulación de obtención de datos iniciales
  const companyData = [
    {
      id: 1,
      title: "Tech Innovators",
      city: "New York",
      phone: "123-456-7890",
      firstButtonLabel: "Edit",
      secondButtonLabel: "Delete",
    },
    {
      id: 2,
      title: "Green Solutions",
      city: "San Francisco",
      phone: "987-654-3210",
      firstButtonLabel: "Edit",
      secondButtonLabel: "Delete",
    },
    {
      id: 3,
      title: "Cloud Networks",
      city: "Austin",
      phone: "555-123-4567",
      firstButtonLabel: "Edit",
      secondButtonLabel: "Delete",
    },
    {
      id: 4,
      title: "Tech Innovators",
      city: "New York",
      phone: "123-456-7890",
      firstButtonLabel: "Edit",
      secondButtonLabel: "Delete",
    },
    {
      id: 5,
      title: "Green Solutions",
      city: "San Francisco",
      phone: "987-654-3210",
      firstButtonLabel: "Edit",
      secondButtonLabel: "Delete",
    },
    {
      id: 6,
      title: "Cloud Networks",
      city: "Austin",
      phone: "555-123-4567",
      firstButtonLabel: "Edit",
      secondButtonLabel: "Delete",
    },
  ];

  const jobData = [
    {
      id: 1,
      title: "Frontend Developer",
      city: "Miami",
      phone: "123-456-7890",
      firstButtonLabel: "Apply",
      secondButtonLabel: "Save",
    },
    {
      id: 2,
      title: "Backend Developer",
      city: "Denver",
      phone: "987-654-3210",
      firstButtonLabel: "Apply",
      secondButtonLabel: "Save",
    },
    {
      id: 3,
      title: "DevOps Engineer",
      city: "Seattle",
      phone: "555-123-4567",
      firstButtonLabel: "Apply",
      secondButtonLabel: "Save",
    },
    {
      id: 4,
      title: "Backend Developer",
      city: "Denver",
      phone: "987-654-3210",
      firstButtonLabel: "Apply",
      secondButtonLabel: "Save",
    },
    {
      id: 5,
      title: "DevOps Engineer",
      city: "Seattle",
      phone: "555-123-4567",
      firstButtonLabel: "Apply",
      secondButtonLabel: "Save",
    },
  ];

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
