"use client"
import React from 'react';
import {
  LoginContainer,
  Title,
  Form,
  Input,
  Button,
  LinkText,
  LinkButton
} from '../../../../../styles/identify/login/Login.Styles'; // Atualize o caminho conforme necessário

export default function Login() {
  return (
    <LoginContainer>
      <Title>Entre</Title>
      <Form>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Senha" />
        <Button type="submit">Entrar</Button>
      </Form>
      <LinkText>
        Ainda não tem uma conta? <LinkButton href="/signup">Crie agora!</LinkButton>
      </LinkText>
    </LoginContainer>
  );
}
