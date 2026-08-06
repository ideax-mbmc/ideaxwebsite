import React from 'react';
import {
  Section,
  MainTitle,
  SubTitle,
  SponsorsWrapper,
  SponsorLogo
} from './sponsorElements';

// Sponsor logos
import Devfolio from '../../images/sponsors/Devfolio_Logo-White.svg';
import EthIndia from '../../images/sponsors/ethindia-light.svg';

const SponsorsSection = () => {
  return (
    <Section>
      <MainTitle>Our Sponsors</MainTitle>
      <SubTitle>Gold Sponsors</SubTitle>
      <SponsorsWrapper>
        <a href="https://devfolio.co" target="_blank" rel="noopener noreferrer">
          <SponsorLogo src={Devfolio} alt="DEVFOLIO LOGO" />
        </a>
      </SponsorsWrapper>
      <SubTitle>Season Partners</SubTitle>
      <SponsorsWrapper>
        <a href="https://ethindia.co " target='_blank' rel='noopener noreferrer'>
          <SponsorLogo src={EthIndia} alt="ETHINDIA LOGO" />
        </a>
      </SponsorsWrapper>
    </Section>
  );
};

export default SponsorsSection;
