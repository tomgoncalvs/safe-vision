"use client";
import React from 'react';
import Image from 'next/image';
import {
  PageContainer,
  Title,
  Subtitle,
  RoleContainer,
  RoleButton,
  Icon,
  NextButton,
  ImageContainer
} from '../../../styles/identify/Identify.Styles'; // Atualize o caminho conforme necessário

export default function Identification() {
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
        <RoleButton>
          <Icon src="images/icons/Doctor.png" alt="Ícone de médico" />
          Médico
        </RoleButton>
        <RoleButton>
          <Icon src="images/icons/Businessman.png" alt="Ícone de paciente" />
          Paciente
        </RoleButton>
      </RoleContainer>
      <NextButton>{'>'}</NextButton>
    </PageContainer>
  );
}
