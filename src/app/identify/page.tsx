"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import {
  PageContainer,
  Title,
  Subtitle,
  RoleContainer,
  RoleButton,
  Icon,
  Button,
  ImageContainer
} from '../../../styles/identify/Identify.Styles'; 
import Link from 'next/link';



export default function Identification() {
  
  const [selectedRole, setSelectedRole] = useState('');

  return (

    <PageContainer>
        <ImageContainer>
        <Image 
          src="/images/indentify-image.png" 
          alt="Descrição da Imagem"
          width={500} 
          height={300}
        />
        </ImageContainer>
      <Title>Vamos começar!</Title>
      <Subtitle>Antes de tudo, precisamos identificar você, siga o passo a seguir.</Subtitle>
      <RoleContainer>
        <RoleButton 
          onClick={() => setSelectedRole('doctor')}
          isSelected={selectedRole === 'doctor'}
        >
          <Icon src="images/icons/Doctor.png" alt="Ícone de médico" />
          Médico
        </RoleButton>
        <RoleButton 
          onClick={() => setSelectedRole('person')}
          isSelected={selectedRole === 'person'}
        >
          <Icon src="images/icons/Businessman.png" alt="Ícone de paciente" />
          Paciente
        </RoleButton>
      </RoleContainer>
      {selectedRole && (
        <Link href={`/identify/login/${selectedRole === 'doctor' ? 'doctor' : 'person'}`}>
          <Button>{'>'}</Button>
        </Link>
      )}
    </PageContainer>
  );
}
