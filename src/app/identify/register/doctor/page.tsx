"use client"
import React from 'react';
import {
  RegistrationContainer,
  Title,
  Form,
  Input,
  CheckboxContainer,
  Checkbox,
  Button,
  LinkText,
  LinkButton
} from '../../../../../styles/identify/register/Register.Styles';

export default function Signup() {
  return (
    <RegistrationContainer>
      <Title>Registro</Title>
      <Form>
        <Input type="text" placeholder="Nome" />
        <Input type="email" placeholder="Email" />
        <Input type="crm" placeholder="CRM" />
        <Input type="password" placeholder="Senha" />
        <CheckboxContainer>
          <Checkbox type="checkbox" id="terms" />
          <label htmlFor="terms">Concordo com os termos e condições.</label>
        </CheckboxContainer>
        <Button type="submit">Registrar</Button>
      </Form>
      <LinkText>
        Já possui uma conta? <LinkButton href="/login">Faça Login</LinkButton>
      </LinkText>
    </RegistrationContainer>
  );
}
