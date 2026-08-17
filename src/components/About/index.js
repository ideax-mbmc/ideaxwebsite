import React from 'react';
import Icon1 from '../../images/mbmc.svg';
import Icon2 from '../../images/ideax_x_only.svg';
import { 
    AboutContainer,
    AboutH1,
    AboutWrapper,
    AboutCard,
    AboutIcon,
    // AboutH2,
    AboutP,
    AboutTitle,
    CardHeader,
    CardBody
} from './AboutElements';

const About = () => {
  return (
    <AboutContainer id="about">
        <AboutH1>About</AboutH1>
        <AboutWrapper>
            <AboutCard>
                <CardHeader>
                        {/* <AboutH2></AboutH2> */}
                    <AboutIcon src={Icon1} alt="Madan Bhandari Memorial College Logo" style={{ transform: 'scale(1.5)' }} />
                    <AboutTitle>Madan Bhandari Memorial College</AboutTitle>
                </CardHeader>
                <CardBody>
                    <AboutP>Madan Bhandari Memorial College, a non-profit making community institution, was established in 2001 to impart quality education at an affordable cost. The college offers a wide range of academic courses in XI, XII, BA, BBS, BBM, BCA, BScCSIT, and Master’s Degree courses in Sociology, Journalism, and English. Since its inception, the college has achieved remarkable success in terms of quality education and infrastructural development.
                    </AboutP>
                </CardBody>                
            </AboutCard>

            <AboutCard>
                <CardHeader>
                    {/* <AboutH2></AboutH2> */}
                    <AboutIcon src={Icon2} alt="MBMC IdeaX Icon"/>
                     <AboutTitle>MBMC IdeaX</AboutTitle>
                </CardHeader>
                <CardBody>
                    <AboutP>
                      MBMC IdeaX 2026 is a 48-hour, in-person technology hackathon organized by Madan Bhandari Memorial College in Kathmandu, Nepal. The hackathon begins on 2nd October 2026. Registration closes on 1st September 2026. Participants will develop innovative technology solutions across five problem tracks: Climate Change, Resilience & Sustainability; Cyber Security & Digital Trust; E-Governance & Smart Public Services; Smart Urban Transport & Road Safety; and FinTech & Digital Financial Innovation.
                    </AboutP>
                </CardBody>
            </AboutCard>
        </AboutWrapper>
    </AboutContainer>
  )
}

export default About
