"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Container,
  BackButton,
  Title,
  PatientList,
  PatientCard,
  PatientInfo,
  PatientIcon,
  TestsSection,
  TestResult,
  TestResultStatus,
  StyledImage
} from '../../../../styles/select/SelectPacient.Styles';

interface Patient {
  id: number;
  name: string;
  age: number;
  dob: string; 
}

interface Test {
  date: string;
  patientName: string;
  status: string;
}

const PatientSelectionPage = () => {
  // Dados estáticos como backup
  const fallbackPatients: Patient[] = [
    { id: 1, name: 'Paciente da Silva', age: 6, dob: '20/11/2017' },
    { id: 2, name: 'Paciente Fernandes', age: 3, dob: '20/11/2020' },
    { id: 3, name: 'Paciente Fernandes', age: 3, dob: '20/11/2020' },
  ];

  const fallbackTests: Test[] = [
    { date: '20/11/2023', patientName: 'Paciente da Silva', status: 'Detectado' },
    { date: '20/11/2023', patientName: 'Paciente Fernandes', status: 'Não Detectado' },
  ];

  // Estados para os dados da API
  const [patients, setPatients] = useState<Patient[]>([]);
  const [tests, setTests] = useState<Test[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Substitua estas URLs pelas suas URLs da API
        const patientsResponse = await fetch('http://127.0.0.1:8090/pacientes');
        const testsResponse = await fetch('http://127.0.0.1:8090/tests');

        const patientsData = await patientsResponse.json();
        const testsData = await testsResponse.json();

        if (patientsResponse.ok) {
          setPatients(patientsData);
        } else {
          setPatients(fallbackPatients as never[]);
        }

        if (testsResponse.ok) {
          setTests(testsData);
        } else {
          setTests(fallbackTests as never[]);
        }

      } catch (error) {
        setPatients(fallbackPatients as never[]);
        setTests(fallbackTests as never[]);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <BackButton href="/logado">{'<'} Voltar</BackButton>
      <StyledImage src="/images/pretest-image.png" alt="Ilustração" />
      <Title>Selecione o Paciente</Title>
      <PatientList>
      {patients.map((patient) => (
        <Link href={`/logado/lefteye`} passHref key={patient.id}>
          {/* Caso a API esteja conectada utilize a opção abaixo: */}
          <Link href={`/logado/lefteye/${patient.id}`} passHref key={patient.id}></Link>
          <PatientCard>
            <PatientIcon src="/images/icons/face-icon.png" alt="Ícone do Paciente" />
            <PatientInfo>
              {patient.name}<br />
              Idade: {patient.age}<br />
              Nasc: {patient.dob}
            </PatientInfo>
          </PatientCard>
        </Link>
      ))}
    </PatientList>
      <TestsSection>
        {tests.map((test, index) => (
          <TestResult key={index}>
            {test.date} | {test.patientName}
            <TestResultStatus status={test.status === 'Detectado'}>
              {test.status}
            </TestResultStatus>
          </TestResult>
        ))}
      </TestsSection>
    </Container>
  );
};

export default PatientSelectionPage;
