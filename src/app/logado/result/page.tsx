"use client"
import React from 'react';
import Link from 'next/link';
import {
  ResultContainer,
  BackButton,
  ResultTitle,
  ResultBox,
  ResultText,
  Recommendation,
  AccreditedNetworkButton
} from '../../../../styles/result/Result.Styles';

export default function Results() {
  return (
    <ResultContainer>
      <Link href="/previous-page" passHref><BackButton>Voltar</BackButton></Link>
      <ResultTitle>Resultado</ResultTitle>
      <ResultBox>
        {/* Aqui você incluiria a imagem do resultado */}
      </ResultBox>
      <ResultText>Leucocoria: <strong>Detectada</strong></ResultText>
      <ResultText>Precisão: <strong>94%</strong></ResultText>
      <ResultText>Grau: <strong>0.92</strong></ResultText>
      <Recommendation>Indicação: Procure um médico o mais breve possível.</Recommendation>
      <Link href="/accredited-network" passHref>
        <AccreditedNetworkButton>Ver rede Credenciada</AccreditedNetworkButton>
      </Link>
    </ResultContainer>
  );
}
