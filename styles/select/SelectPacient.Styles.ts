// styles/PatientSelection.styles.js
import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  background: #f0f0f8;
  min-height: 100vh;
`;

export const BackButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem 0;
  color: #0070f3;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 1rem;
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  color: #333;
  text-align: center;
  margin-bottom: 1rem;
`;

export const PatientList = styled.div`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const PatientCard = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  transition: background-color 0.2s;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  &:hover {
    background-color: #f9f9f9;
  }
`;

export const PatientIcon = styled.img`
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
`;

export const PatientInfo = styled.div`
  line-height: 1.5;
  color: #333;
`;

export const TestsSection = styled.section`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
`;

export const TestResult = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eaeaea;
  font-size: 0.9rem;

  &:last-child {
    border-bottom: none;
  }
`;

export const TestResultStatus = styled.span`
  color: ${({ status }) => (status ? '#28a745' : '#dc3545')};
  font-weight: 600;
  font-size: 0.8rem;
`;

export const StyledImage = styled.img`
  display: block;
  max-width: 100%; 
  height: auto;
  width: 50%; 
  margin-left: auto; 
  margin-right: auto; 
  @media (max-width: 400px) {
    width: 100%; 
  }
`;