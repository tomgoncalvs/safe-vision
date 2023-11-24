// styles/ResultPage.styles.js
import styled from "styled-components";

export const ResultContainer = styled.div`
  padding: 1rem;
  background: #f0f0f8;
  min-height: 100vh;
`;

export const BackButton = styled.a`
  color: #0070f3;
  text-decoration: none;
  margin-bottom: 1rem;
`;

export const ResultTitle = styled.h1`
  text-align: center;
  margin: 1rem 0;
`;

export const ResultBox = styled.div`
  background: #f0f0f0;
  padding: 1rem;
  margin-bottom: 2rem;
`;

export const ResultText = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0;
`;

export const Recommendation = styled.p`
  color: #d9534f;
  font-weight: bold;
  margin: 0.5rem 0;
`;

export const AccreditedNetworkButton = styled.a`
  background-color: #2e46b7;
  color: white;
  padding: 1rem 2rem;
  border-radius: 10px;
  text-decoration: none;
  display: block; 
  margin-left: auto; 
  margin-right: auto; 
  transition: background-color 0.3s ease;
  text-align: center; 

  &:hover {
    background-color: #6880f3;
  }
`;
