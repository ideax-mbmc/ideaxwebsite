import styled, { css } from 'styled-components';

export const FAQContainer = styled.div`
  width: 100%;
  max-width: 1140px; 
  margin: 0 auto;
  padding: 3rem 2rem;
  box-sizing: border-box;
`;

export const FAQItem = styled.div`
  background: #013F6A;
  color: white;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  padding: 1.2rem;
  cursor: pointer;
  transition: transform 0.5s ease;
  width: 100%;
  height: 115px;
  perspective: 1000px;

  @media screen and (max-width:980px){
    height:140px;
  }

  @media screen and (max-width: 768px) {
    height: 140px;}
`;

export const QuestionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Icon = styled.div`
  font-size: 1.5rem;
  transition: transform 0.3s ease;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(360deg);
    `}
`;

export const QuestionText = styled.h3`
  font-size: 1.2rem;
  margin: 0;
`;

export const AnswerWrapper = styled.div`
  max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
  overflow: hidden;
  transition: max-height 0.4s ease;
  margin-top: ${({ isOpen }) => (isOpen ? '1rem' : '0')};
`;

export const Answer = styled.p`
  font-size: 1rem;
  color: #f2f2f2;
  line-height: 1.6;
  text-align: justify;
`;

export const CardInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform: ${({ isOpen }) => (isOpen ? 'rotateY(180deg)' : 'rotateY(0deg)')};
`;

export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: #013F6A;
  color: white;
  border-radius: 12px;
  padding: 1.2rem;
`;

export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: #015482;
  color: white;
  border-radius: 12px;
  padding: 1.2rem;
  transform: rotateY(180deg);
`;

export const FAQH1 = styled.h1`
    font-size:3rem;
    color:white;
    text-align:center;
    margin-top:80px;

    @media screen and (max-width:480px){
        font-size:2rem;
    }
`;