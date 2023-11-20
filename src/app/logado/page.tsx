"use client"
import React from 'react';
import {
  DashboardContainer,
  WelcomeText,
  WelcomeSection,
  CallToAction,
  HospitalList,
  HospitalCard,
  HospitalName,
  HospitalDetails,
  SeeAllButton,
  AppName,
  CredeHosp
} from '../../../styles/logado/Logado.Styles'; 

export default function Dashboard() {

  const hospitals = [
    { name: 'Graac', hours: '24h', address: 'Rua Pedro de Toledo, 572 - Vila Clementino' },
    { name: 'Graac', hours: '24h', address: 'Rua Pedro de Toledo, 572 - Vila Clementino' },
    { name: 'Graac', hours: '24h', address: 'Rua Pedro de Toledo, 572 - Vila Clementino' },
    { name: 'Graac', hours: '24h', address: 'Rua Pedro de Toledo, 572 - Vila Clementino' },
    { name: 'Graac', hours: '24h', address: 'Rua Pedro de Toledo, 572 - Vila Clementino' },
    { name: 'Graac', hours: '24h', address: 'Rua Pedro de Toledo, 572 - Vila Clementino' },
    { name: 'Graac', hours: '24h', address: 'Rua Pedro de Toledo, 572 - Vila Clementino' },
  ];

  return (
    <DashboardContainer>
         <WelcomeSection>
        <AppName>Safe Vision</AppName>
        <WelcomeText>Bem-Vindo Ewerton!</WelcomeText>
        <CallToAction></CallToAction> 
      </WelcomeSection>
      
      <HospitalList>
      <CredeHosp>Rede Credenciada</CredeHosp>
      <SeeAllButton href="#">Ver Tudo</SeeAllButton>
        {hospitals.map((hospital, index) => (
          <HospitalCard key={index}>
            <HospitalName>{hospital.name}</HospitalName>
            <HospitalDetails>{hospital.hours}</HospitalDetails>
            <HospitalDetails>{hospital.address}</HospitalDetails>
          </HospitalCard>
        ))}
      </HospitalList>
      
    </DashboardContainer>
  );
}
