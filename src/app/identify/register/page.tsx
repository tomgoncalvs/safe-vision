"use client"
import React, { useState } from 'react';
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
} from '../../../../styles/identify/register/Register.Styles';

export default function Signup() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [aceitaTermos, setAceitaTermos] = useState(false);

  const handleRegistration = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    if (!aceitaTermos) {
      alert('Você precisa aceitar os termos e condições para se registrar.');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8090/pacientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nomePaciente: nome,
          emailPaciente: email,
          senhaPaciente: senha,
          telefonePaciente: telefone,
          dataNascimento: dataNascimento
        }),
      });

      if (response.ok) {
        alert('Cadastro realizado com sucesso!');
        window.location.href = '/identify/login/person';
      } else {
        alert('Falha no cadastro. Tente novamente.');
      }
    } catch (error) {
      alert('API está desligada. Você será redirecionado para a página de Login, utilize a função abaixo do botão "Entre sem Autenticar".');
      window.location.href = '/identify/login/person';
    }
  };

  return (
    <RegistrationContainer>
      <Title>Registro</Title>
      <Form onSubmit={handleRegistration}>
        <Input type="text" placeholder="Nome" value={nome} onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setNome(e.target.value)} />
        <Input type="email" placeholder="Email" value={email} onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Senha" value={senha} onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setSenha(e.target.value)} />
        <Input type="text" placeholder="Telefone" value={telefone} onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setTelefone(e.target.value)} />
        <Input type="date" placeholder="Data de Nascimento" value={dataNascimento} onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setDataNascimento(e.target.value)} />
        <CheckboxContainer>
          <Checkbox type="checkbox" id="terms" checked={aceitaTermos} onChange={(e: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => setAceitaTermos(e.target.checked)} />
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