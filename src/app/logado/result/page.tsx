"use client";
import React from 'react';
import Link from 'next/link';
import {
  ResultContainer,
  BackButton,
  ResultTitle,
  ResultBox,
  ResultText,
  Recommendation,
  RedeCredenti,
  ImageWrapper,
  Image
} from '../../../../styles/result/Result.Styles';

export default function Results() {
  return (
    <ResultContainer>
      <Link href="/previous-page" passHref>
        <BackButton as="a">Voltar</BackButton>
      </Link>
      <ResultTitle>Resultado</ResultTitle>
      <ResultBox>
        <ImageWrapper>
          <Image src="/images/result/retinoblastoma.png" alt="Instruções Ilustração" />
        </ImageWrapper>
      </ResultBox>
      <ResultText>Leucocoria: <strong>Detectada</strong></ResultText>
      <ResultText>Precisão: <strong>94%</strong></ResultText>
      <ResultText>Grau: <strong>0.92</strong></ResultText>
      <Recommendation>Indicação: Procure um médico o mais breve possível.</Recommendation>
      <Link href="/logado" passHref>
        <RedeCredenti as="a">Ver rede Credenciada</RedeCredenti>
      </Link>
    </ResultContainer>
  );
}
