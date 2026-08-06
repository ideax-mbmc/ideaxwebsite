import styled from 'styled-components';

export const SectionContainer = styled.section`
  padding: 80px 20px;
  background-color: #041322;
  color: white;
  text-align: center;
  margin-bottom:80px;
`;

export const ContentWrapper = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 60px;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  justify-items: center;

    @media screen and (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }
    
    @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const FlipCard = styled.div`
  background-color: transparent;
  width: 100%;
  height:480px;
  perspective: 1000px;
`;

export const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  
  ${FlipCard}:hover & {
    transform: rotateY(180deg);
  }
`;

export const FlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: #013F6A;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const FlipCardBack = styled(FlipCardFront)`
  background:#015482;
  transform: rotateY(180deg);
  padding: 30px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const CardText = styled.p`
  font-size: 1.1rem;
  line-height: 1.4;
  margin-top:15px;
`;
