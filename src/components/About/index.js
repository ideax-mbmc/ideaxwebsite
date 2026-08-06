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
                    <AboutIcon src={Icon1} style={{ transform: 'scale(1.5)' }} />
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
                    <AboutIcon src={Icon2}/>
                     <AboutTitle>MBMC IdeaX</AboutTitle>
                </CardHeader>
                <CardBody>
                    <AboutP>MBMC IdeaX 2024, Madan Bhandari Memorial College’s flagship technology event is ready to be launched for the year 2025, revamped as MBMC IdeaX 2025. After gathering successful participation from almost all the parts of the country, covering the most unique theme of Indigenous Languages and being Nepal’s first ever hackathon to focus on preserving, promoting and revitalizing Indigenous Languages and Communities, MBMC IdeaX 2025 is ready to roll back with a lot more excitement.
                    </AboutP>
                </CardBody>
            </AboutCard>
        </AboutWrapper>
    </AboutContainer>
  )
}

export default About
