"use client"
import React, { useRef } from 'react';
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
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelection = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await fetch('http://127.0.0.1:8090/upload', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          // Redireciona o usuário após o sucesso do upload
          window.location.href = '/logado/righteye';
        } else {
          // Trate o erro de resposta não bem-sucedida aqui
          console.error('Failed to upload:', await response.text());
        }
      } catch (error) {
        {/*alert('API está desligada. Você continuara o fluxo normalmente nesta DEMO.');*/}
        window.location.href = '/logado/righteye';
      }
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Container>
      <BackButton href="/logado">{'<'} Voltar</BackButton>
      <Title>Olho Esquerdo</Title>
      <ImageWrapper>
        <Image src="/images/test-image.png" alt="Instruções Ilustração" />
      </ImageWrapper>
      <InstructionsList>
        <Instruction>Vá até um lugar com uma luminosidade não intensa.</Instruction>
        <Instruction>Ligue o Flash do seu celular.</Instruction>
        <Instruction>Tire uma foto do seu olho e envie no botão abaixo.</Instruction>
      </InstructionsList>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelection}
        style={{ display: 'none' }}
        accept="image/*"
      />
      <SendButton onClick={handleButtonClick}>Enviar Olho Esquerdo</SendButton>
    </Container>
  );
};

export default InstructionsPage;
