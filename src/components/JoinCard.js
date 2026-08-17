import React from 'react';
import styled from 'styled-components';
import { FaDiscord } from 'react-icons/fa';

import logo from '../images/ideax_x_only.svg';

const JoinCardContainer = styled.div`
  position: relative;

  background: rgba(5, 13, 38, 0.62);

  border: 1px solid rgba(120, 160, 255, 0.28);
  border-radius: 22px;

  padding: 1.75rem 1.8rem;
  max-width: 380px;
  width: 100%;
  margin-left: auto;
  margin-right: 0;

  color: white;

  backdrop-filter: blur(18px) saturate(125%);
  -webkit-backdrop-filter: blur(18px) saturate(125%);

  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.35),
    0 0 35px rgba(45, 91, 180, 0.12),
    inset 0 1px 1px rgba(255, 255, 255, 0.08);

  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;

    background:
      radial-gradient(
        circle at 50% 0%,
        rgba(93, 63, 180, 0.18),
        transparent 45%
      );

    pointer-events: none;
  }

  @media screen and (max-width: 768px) {
    margin: 0 auto;
    max-width: 380px;
    width: 90%;
    padding: 1.5rem 1.25rem;
  }

  @media screen and (max-width: 480px) {
    padding: 1.25rem 1rem;
    width: 95%;
  }
`;
const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.8rem;
  margin-bottom: 1.5rem;
`;

const Logo = styled.img`
  width: 68px;
  height: 68px;
  object-fit: contain;
  margin-left: 0.25rem;
`;

const TitleText = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  margin: 0;
  padding: 0;
  font-size: inherit;
  font-weight: inherit;
`;

const Line1 = styled.span`
  font-size: 2.8rem;
  font-weight: bolder;
  line-height: 1.4;

    @media screen and (max-width: 480px) {
    font-size: 2rem; 
  }
`;

const Line = styled.span`
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.4;

  &:nth-child(2) {
    font-size: 2.2rem;
  }

  &:nth-child(3) {
    font-size: 1.6rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin: 1.5rem 0;
`;

const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  background: rgba(7, 24, 62, 0.42);

  padding: 0.75rem 1.5rem;

  border-radius: 12px;

  border: 1px solid rgba(130, 170, 255, 0.25);

  color: white;
  font-weight: 500;
  text-decoration: none;

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  transition: all 0.3s ease;

  &:hover {
    background: rgba(30, 75, 150, 0.35);
    border-color: rgba(140, 180, 255, 0.5);

    transform: translateY(-2px);

    box-shadow:
      0 8px 25px rgba(20, 80, 180, 0.25);
  }
`;

const Subtext = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  color: rgba(170, 190, 255, 0.9);
  text-align: center;
  text-shadow: 0 0 15px rgba(80, 130, 255, 0.35);
`;

const JoinCard = () => {
  return (
    <JoinCardContainer>
      <TitleRow>
        <Logo src={logo} alt="MBMC IdeaX 2026 Icon" />
        <TitleText>
          <Line1>MBMC</Line1>
          <Line>IdeaX 2026</Line>
        </TitleText>
      </TitleRow>

      <ButtonWrapper>
        <StyledButton
          href="https://forms.gle/cBgYAroPeJeZpxa6A"
          target="_blank"
          rel="noopener noreferrer"
        >
          Register Now
        </StyledButton>

        <StyledButton
          href="https://discord.gg/3RctjES2U"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDiscord />
          Join Our Discord
        </StyledButton>
      </ButtonWrapper>

      <Subtext>Innovation begins with you!</Subtext>
    </JoinCardContainer>
  );
};

export default JoinCard;
