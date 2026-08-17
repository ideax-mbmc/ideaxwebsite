import styled, { css } from 'styled-components';

export const FAQContainer = styled.div`
  width: 100%;
  max-width: 1140px; 
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem 1.5rem;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    padding: 1.5rem 1.25rem 3rem 1.25rem;
  }

  @media screen and (max-width: 480px) {
    padding: 1rem 1rem 2.5rem 1rem;
  }
`;

export const FAQItem = styled.div`
  background: #013F6A;
  color: white;
  border-radius: 12px;
  margin-bottom: 1.25rem;
  padding: 1.25rem;
  width: 100%;
  box-sizing: border-box;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.08);

  ${({ isOpen }) =>
    isOpen &&
    css`
      background: #014c7f;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    `}

  @media screen and (max-width: 480px) {
    padding: 1rem 1.1rem;
    margin-bottom: 1rem;
  }
`;

export const QuestionRow = styled.button`
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 14px;
  text-align: left;
  cursor: pointer;
  color: white;
  font-family: inherit;
  box-sizing: border-box;

  &:focus-visible {
    outline: 2px solid #6fa8c7;
    outline-offset: 4px;
    border-radius: 4px;
  }

  @media screen and (max-width: 480px) {
    gap: 10px;
  }
`;

export const Icon = styled.span`
  font-size: 1.4rem;
  transition: transform 0.3s ease;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(360deg);
    `}

  @media screen and (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

export const QuestionText = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  color: white;
  line-height: 1.4;
  word-break: break-word;
  overflow-wrap: break-word;

  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const AnswerWrapper = styled.div`
  display: grid;
  grid-template-rows: ${({ isOpen }) => (isOpen ? '1fr' : '0fr')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: grid-template-rows 0.35s ease, opacity 0.3s ease, margin-top 0.35s ease;
  margin-top: ${({ isOpen }) => (isOpen ? '1rem' : '0')};
  overflow: hidden;
`;

export const AnswerInner = styled.div`
  min-height: 0;
`;

export const Answer = styled.p`
  font-size: 1rem;
  color: #f2f2f2;
  line-height: 1.65;
  text-align: left;
  margin: 0;
  padding-top: 0.75rem;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  word-break: break-word;
  overflow-wrap: break-word;
  white-space: normal;

  @media screen and (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

export const FAQH1 = styled.h2`
  font-size: 3rem;
  color: white;
  text-align: center;
  margin-top: 80px;

  @media screen and (max-width: 768px) {
    font-size: 2.4rem;
    margin-top: 60px;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    margin-top: 40px;
  }
`;