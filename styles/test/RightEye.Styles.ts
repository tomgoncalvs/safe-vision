import styled from 'styled-components';

export const Container = styled.div`
  background: #f0f0f8;
  min-height: 100vh;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BackButton = styled.a`
  align-self: flex-start;
`;

export const Title = styled.h1`
  color: #000;
  font-size: 1.5rem;
  text-align: center;
`;

export const InstructionsList = styled.ol`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const Instruction = styled.li`
  color: #333;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  margin: 10px 20px;
`;

export const SendButton = styled.button`
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0px 4px 14px rgba(0, 112, 243, 0.39);
`;

export const ImageWrapper = styled.div`
  margin: 2rem 0;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
