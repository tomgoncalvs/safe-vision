import styled from 'styled-components';

const welcomeBackgroundImage = '/images/banner/Background.svg'; // Substitua pelo caminho correto da imagem
const callToActionBackgroundImage = '/images/do-test.png'; // Substitua pelo caminho correto da imagem

export const WelcomeSection = styled.section`
  position: relative; 
  background-image: url(${welcomeBackgroundImage});
  border-radius: 15px;
  background-size: cover;
  padding: 4rem;
  text-align: center;
  color: #fff;
  z-index: 1; 
`;

export const CallToAction = styled.div`
  position: absolute; // Isso permite que você posicione o CallToAction em qualquer lugar sobre o WelcomeSection
  top: 100%; // Ajuste conforme necessário para posicionar onde você quiser
  left: 50%; // Ajuste conforme necessário
  transform: translate(-50%, -50%); // Isso centraliza o CallToAction
  background-image: url(${callToActionBackgroundImage});
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  padding: 4rem;
  width: 384px;
  height: 200px;
  margin-top: 1rem;
  margin-bottom: 2rem;
  text-align: center;
  font-size: 1.5rem;
  color: #fff;
  z-index: 2; 
`;

export const DashboardContainer = styled.div`
  background-color: #f0f0f7;
  min-height: 100vh;
  padding: 1rem;
  color: #333;
`;

export const AppName = styled.p`
  color: #fff;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const WelcomeText = styled.h1`
  color: #fff;
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

export const CredeHosp = styled.h1`
  color: #000;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export const HospitalList = styled.div`
  margin-bottom: 2rem;
  margin-top: 6rem;
`;

export const HospitalCard = styled.div`
  background-color: #fff;
  border-radius: 15px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const HospitalName = styled.h2`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const HospitalDetails = styled.p`
  font-size: 1rem;
  color: #666;
`;

export const SeeAllButton = styled.a`
  color: #0070f3;
  padding: 0.5rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
