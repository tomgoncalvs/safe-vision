// styles/HomeStyles.js
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 2rem;
  background-color: #f0f0f7;
  /* Adicione media queries conforme necessário para responsividade */
`;

export const Heading = styled.h1`
  color: #333;
  margin-bottom: 2rem;
`;

export const Subheading = styled.h2`
  color: #666;
  margin-bottom: 1.5rem;
`;

export const ImageContainer = styled.div`
  margin-bottom: 1.5rem;
`;

export const Description = styled.p`
  color: #666;
  text-align: center;
  max-width: 500px;
`;

export const Button = styled.a`
  background-color: #2E46B7;
  color: white;
  padding: 1rem 2rem;
  border-radius: 10px;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6880F3;
  }
`;