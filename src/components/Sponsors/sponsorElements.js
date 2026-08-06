import styled from 'styled-components';

export const Section = styled.section`
  background-color: #041322;
  padding: 60px 20px;
  text-align: center;
  color: white;
`;

export const MainTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 50px;
`;

export const SubTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 40px;
  margin-top:px;
`;

export const SponsorsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 60px;
`;

export const SponsorLogo = styled.img`
  max-height: 100px;
  max-width: 160px;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
  transition: transform 0.3s ease;
  margin-bottom:40px;

  &:hover {
    transform: scale(1.08);
  }
`;
