"use client";
import Image from 'next/image';
import {
  Container,
  Heading,
  Subheading,
  ImageContainer,
  Description,
  Button
} from '../../styles/home/Home.styles';

export default function Home() {
  return (
    <Container>
      <ImageContainer>
        <Image 
          src="/images/index-image.png" 
          alt="Descrição da Imagem"
          width={500} 
          height={300}
        />
      </ImageContainer>
      <Heading>Seja Bem-Vindo ao Safe Vision</Heading>
      <Subheading>Tenha um pré diagnóstico da saúde dos seus olhos com apenas alguns cliques.</Subheading>
      <Button href="/identify">{'>'}</Button>
    </Container>
  );
}
