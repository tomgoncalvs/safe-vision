import styled from 'styled-components';

export const RegistrationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f0f7;
  padding: 1rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #000;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
    font-size: 1rem;
    padding: 1rem;
    margin-bottom: 1rem;
    border: none;
    border-bottom: 1px solid #A2AFBB;
    background-color: transparent;
    &:focus {
    outline: none;
}
`;

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

export const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

export const Button = styled.button`
background-color: #2E46B7;
color: white;
padding: 1rem;
border: none;
border-radius: 10px;
margin-bottom: 1rem;
font-size: 1rem;

&:hover {
  background-color: #6880F3;
}
`;

export const LinkText = styled.p`
  color: #000;
  font-size: 1rem;
  text-align: center;
`;

export const LinkButton = styled.a`
  color: #0070f3;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
