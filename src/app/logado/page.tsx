"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
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
  const [hospitals, setHospitals] = useState([]);

  const fallbackHospitals = [
    { name: 'Graac', hours: '24h', address: 'Rua Pedro de Toledo, 572 - Vila Clementino' },
    { name: 'Hospital 1', hours: '8 ~ 18', address: 'Rua hospital cadastrado, 123 - Vila Madalena' },
    { name: 'Hospital 2', hours: '8 ~ 18', address: 'Rua hospital cadastrado, 321 - Vila Olimpia' },
    { name: 'Hospital 3', hours: '8 ~ 18', address: 'Rua hospital cadastrado, 413 - Valinhos' },
    { name: 'Hospital 4', hours: '24h', address: 'Rua hospital cadastrado, 550 - Jd. Independencia' },
    { name: 'Hospital 5', hours: '24h', address: 'Rua hospital cadastrado, 031 - Interlagos' },
  ];

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8090/hospitais');
        const data = await response.json();
        if (response.ok) {
          setHospitals(data);
        } else {
          // Usando dados de reserva se a resposta da API não for bem-sucedida
          setHospitals(fallbackHospitals as never[]);
        }
      } catch (error) {
        // Usando dados de reserva se a requisição falhar
        setHospitals(fallbackHospitals as never[]);
      }
    };

    fetchHospitals();
  }, []);

  return (
    <DashboardContainer>
      <WelcomeSection>
        <AppName>Safe Vision</AppName>
        <WelcomeText>Bem-Vindo Ewerton!</WelcomeText>
        <Link href="/logado/select" passHref>
          <CallToAction></CallToAction> 
        </Link>
        </WelcomeSection>

        <HospitalList>
          <CredeHosp>Rede Credenciada</CredeHosp>
          <SeeAllButton href="#">Ver Tudo</SeeAllButton>
          {hospitals.map((hospital: { name: string, hours: string, address: string }, index: number) => (
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
