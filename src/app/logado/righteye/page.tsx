"use client";
import React from 'react';
import {
  Container,
  BackButton,
  Title,
  InstructionsList,
  Instruction,
  SendButton,
  ImageWrapper,
  Image
} from '../../../../styles/test/RightEye.Styles';

const InstructionsPage = () => {
  return (
    <Container>
      <BackButton href="/logado">{'<'} Voltar</BackButton>
      <Title>Instruções</Title>
      <ImageWrapper>
        <Image src="/images/test-image.png" alt="Instruções Ilustração" />
      </ImageWrapper>
      <InstructionsList>
        <Instruction>Vá até um lugar com uma luminosidade não intensa.</Instruction>
        <Instruction>Ligue o Flash do seu celular.</Instruction>
        <Instruction>Tire uma foto do seu olho e envie no botão abaixo.</Instruction>
      </InstructionsList>
      <SendButton>Enviar Olho Direito</SendButton>
    </Container>
  );
};

export default InstructionsPage;
