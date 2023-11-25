"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  LoginContainer,
  Title,
  Form,
  Input,
  Button,
  LinkText,
  LinkButton
} from '../../../../../styles/identify/login/Login.Styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8090/pacientes/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();
      if (response.ok) {
        setIsLoggedIn(true);
        console.log('Login bem-sucedido:', data);
        alert('Login bem-sucedido!');
      } else {
        switch (response.status) {
          case 401:
            alert('Falha na autenticação. Verifique seu e-mail e senha.');
            break;
          case 403:
            alert('Acesso negado. Você não tem permissão para acessar este recurso.');
            break;
          case 500:
            alert('Erro no servidor. Tente novamente mais tarde.');
            break;
          default:
            alert('Ocorreu um erro desconhecido. Tente novamente.');
        }
        console.error('Erro no login:', data);
      }
    } catch (error) {
      window.location.href = '/logado';
      {/* Caso a API esteja conectada utilize a opção abaixo: alert('API está desligada. Utilize a função abaixo do botão "Entre sem Autenticar".');
      console.error('Erro na requisição:', error);*/}
    }
  };

  return (
    <LoginContainer>
      <Title>Entre</Title>
      <Form onSubmit={handleLogin}>
        <Input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)} 
        />
        <Input 
          type="password" 
          placeholder="Senha" 
          value={senha} 
          onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setSenha(e.target.value)}
        />
        <Button type="submit">Entrar</Button>
        
      </Form>
      <LinkText>
        <LinkButton href="/logado">Entre sem autenticar</LinkButton>
      </LinkText>
      <LinkText>
        Ainda não tem uma conta? <LinkButton href="/identify/register">Crie agora!</LinkButton>
      </LinkText>
    </LoginContainer>
  );
}
