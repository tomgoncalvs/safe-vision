import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f0f7;
  padding: 1rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
`;

export const ImageContainer = styled.div`
  margin-bottom: 1.5rem;
`;

export const RoleContainer = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
`;

export const RoleButton = styled.button`
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  border: ${props => props.isSelected ? '3px solid #2E46B7' : '1px solid #ddd'};
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #333;
  margin-right: 1rem;

  &:active {
    background-color: #e7e7e7;
  }
  }
`;

export const Icon = styled.img`
  margin-bottom: 1rem;
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

