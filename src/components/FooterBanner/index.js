import React from 'react';
import {
  BannerWrapper,
  BannerContent,
  BannerText,
} from './FooterBanner.styles';
import { Button } from '../ButtonElements';

const FooterBanner = () => {
  return (
    <BannerWrapper>
      <BannerContent>
        <BannerText>
          Register Now to be among the <br />
          first to register for our upcoming<br />
          MBMC IdeaX hackathon
          {/* <strong>Don't miss out!</strong> */}
        </BannerText>
        <Button
        as="a"
        href="https://forms.gle/cBgYAroPeJeZpxa6A"
        target="_blank"
        rel="noopener noreferrer"
        primary="true"
        big="false"
        fontBig="false"
        >
          Register Now
        </Button>
      </BannerContent>
    </BannerWrapper>
  );
};

    export default FooterBanner;
