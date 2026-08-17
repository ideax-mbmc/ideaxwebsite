import styled from 'styled-components';

export const PageWrapper = styled.div`
  background: #041322;
  color: #fff;
  padding: 120px 0 80px;
  font-family: 'Encode Sans Semi Expanded', 'Segoe UI', sans-serif;
  line-height: 1.7;
  position: relative;
  min-height: 100vh;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1000px;
    height: 500px;
    background: radial-gradient(circle at 50% 0%, rgba(1, 63, 106, 0.35) 0%, rgba(4, 19, 34, 0) 70%);
    pointer-events: none;
    z-index: 0;
  }

  @media screen and (max-width: 768px) {
    padding: 90px 0 60px;
  }
`;

export const ContentContainer = styled.div`
  max-width: 920px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 480px) {
    padding: 0 16px;
  }
`;

export const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

export const Title = styled.h1`
  font-size: clamp(2.25rem, 5vw, 3.25rem);
  text-align: center;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 2rem;
  letter-spacing: -0.02em;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #6fa8c7, #013F6A);
    border-radius: 2px;
    margin: 1rem auto 0;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

export const IntroWrapper = styled.div`
  background: linear-gradient(135deg, rgba(7, 28, 47, 0.75) 0%, rgba(4, 19, 34, 0.85) 100%);
  border: 1px solid rgba(111, 168, 199, 0.25);
  border-radius: 16px;
  padding: 2rem 2.25rem;
  margin-bottom: 2.5rem;
  backdrop-filter: blur(12px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.08);

  p {
    font-size: 1.05rem;
    line-height: 1.8;
    color: #e2e8f0;
    margin: 0;
    text-align: left;
  }

  @media screen and (max-width: 768px) {
    padding: 1.5rem 1.5rem;
    margin-bottom: 2rem;
    
    p {
      font-size: 0.975rem;
      line-height: 1.75;
    }
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(7, 28, 47, 0.45);
  border: 1px solid rgba(120, 160, 255, 0.12);
  border-radius: 16px;
  padding: 2rem 2.25rem;
  margin-bottom: 1.75rem;
  backdrop-filter: blur(8px);
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    border-color: rgba(111, 168, 199, 0.3);
    box-shadow: 0 10px 30px rgba(1, 63, 106, 0.15);
  }

  @media screen and (max-width: 768px) {
    padding: 1.5rem 1.25rem;
    margin-bottom: 1.25rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 1.25rem 0;
  display: flex;
  align-items: center;
  gap: 12px;
  letter-spacing: -0.01em;

  &::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 1.2em;
    background: linear-gradient(180deg, #6fa8c7 0%, #013F6A 100%);
    border-radius: 2px;
    flex-shrink: 0;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.75;
  color: #cbd5e1;
  margin: 0 0 1rem 0;
  text-align: left;
  max-width: 100%;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.65;
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;

  li {
    position: relative;
    padding: 0.85rem 1.15rem 0.85rem 2.5rem;
    background: rgba(255, 255, 255, 0.025);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    color: #e2e8f0;
    font-size: 0.975rem;
    line-height: 1.6;
    transition: background 0.2s ease, border-color 0.2s ease;

    &::before {
      content: '';
      position: absolute;
      left: 1.1rem;
      top: 1.25rem;
      width: 6px;
      height: 6px;
      background: #6fa8c7;
      border-radius: 50%;
      box-shadow: 0 0 8px #6fa8c7;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.045);
      border-color: rgba(111, 168, 199, 0.25);
    }
  }

  @media screen and (max-width: 768px) {
    gap: 0.5rem;

    li {
      padding: 0.75rem 1rem 0.75rem 2.25rem;
      font-size: 0.925rem;

      &::before {
        left: 0.95rem;
        top: 1.15rem;
      }
    }
  }
`;