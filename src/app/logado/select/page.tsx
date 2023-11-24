"use client";
import React from 'react';
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

const PatientSelectionPage = () => {
  // Substitua por dados reais ou obtenha de uma API
  const patients = [
    { id: 1, name: 'Paciente da Silva', age: 6, dob: '20/11/2017' },
    { id: 2, name: 'Paciente Fernandes', age: 3, dob: '20/11/2020' },
  ];

  const tests = [
    { date: '20/11/2023', patientName: 'Paciente da Silva', status: 'Detectado' },
    { date: '20/11/2023', patientName: 'Paciente Fernandes', status: 'Não Detectado' },
  ];

  return (
    <Container>
      <BackButton href="/logado">{'<'} Voltar</BackButton>
      <StyledImage src="/images/pretest-image.png" alt="Ilustração" />
      <Title>Selecione o Paciente</Title>
      <PatientList>
      {patients.map((patient) => (
        <Link href={`/patient/${patient.id}`} passHref key={patient.id}>
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
