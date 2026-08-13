import React, { useState } from 'react';

import {
  Container,
  TabsWrapper,
  Tab,
  ContentCard,
  DetailsWrapper,
  TrackNumberBadge,
  IconCircle,
  Title,
  Description,
  FocusContainer,
  FocusHeader,
  SubtopicsList,
  SubtopicItem,
  SubtopicBullet,
  RewardBox,
  TrackTitle
} from './TracksElements';

import {
  FaLeaf,
  FaShieldAlt,
  FaLandmark,
  FaCar,
  FaCoins
} from 'react-icons/fa';

const trackData = [
  {
    number: '01',
    label: 'Climate Change',
    title: 'Climate Change, Resilience & Sustainability',
    icon: <FaLeaf />,
    description: 'Develop technology solutions that strengthen disaster resilience, environmental sustainability, and resource management.',
    subtopics: [
      'Disaster Preparedness & Early Warning',
      'Sustainable Resource Management'
    ],
    reward: 'Rs. 10,000',
  },
  {
    number: '02',
    label: 'Cyber Security',
    title: 'Cyber Security & Digital Trust',
    icon: <FaShieldAlt />,
    description: 'Design intelligent systems that improve cybersecurity, strengthen digital trust, and protect users against emerging cyber threats.',
    subtopics: [
      'Intelligent Threat Detection',
      'Digital Fraud & Identity Protection',
      'AI-Assisted Security Operations'
    ],
    reward: 'Rs. 10,000',
  },
  {
    number: '03',
    label: 'E-Governance',
    title: 'E-Governance & Smart Public Services',
    icon: <FaLandmark />,
    description: 'Build digital platforms that improve government efficiency, transparency, accessibility, and citizen engagement.',
    subtopics: [
      'Citizen-Centric Government Services',
      'Data-Driven Governance'
    ],
    reward: 'Rs. 10,000',
  },
  {
    number: '04',
    label: 'Smart Transport',
    title: 'Smart Urban Transport & Road Safety',
    icon: <FaCar />,
    description: 'Create smart mobility solutions that improve transportation efficiency, road safety, and sustainable urban mobility.',
    subtopics: [
      'Intelligent Traffic & Mobility Management',
      'Road Safety & Accident Prevention',
      'Smart Parking & Urban Mobility Services'
    ],
    reward: 'Rs. 10,000',
  },
  {
    number: '05',
    label: 'FinTech',
    title: 'FinTech & Digital Financial Innovation',
    icon: <FaCoins />,
    description: 'Develop secure, accessible, and intelligent financial technologies that promote financial inclusion and digital trust.',
    subtopics: [
      'Financial Inclusion & Digital Banking',
      'Intelligent Fraud Detection & Secure Payments',
      'Smart Personal Finance & Financial Wellness'
    ],
    reward: 'Rs. 10,000',
  },
];

const Tracks = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Container id="tracks">
      <TrackTitle>
        Tracks
      </TrackTitle>
      <TabsWrapper role="tablist" aria-label="Hackathon Tracks">
        {trackData.map((track, index) => (
          <Tab
            key={index}
            active={index === activeIndex}
            onClick={() => setActiveIndex(index)}
            role="tab"
            aria-selected={index === activeIndex}
          >
            {track.icon}
            <span className='tab-label'>{track.number}. {track.label}</span>
          </Tab>
        ))}
      </TabsWrapper>

      {trackData.map((track, index) => (
        <ContentCard
          key={index}
          style={{ display: index === activeIndex ? 'flex' : 'none' }}
          role="tabpanel"
          aria-hidden={index !== activeIndex}
        >
          <DetailsWrapper>
            <TrackNumberBadge>TRACK {track.number}</TrackNumberBadge>
            <IconCircle>{track.icon}</IconCircle>
            <Title>{track.title}</Title>
            <Description>{track.description}</Description>
            <FocusContainer>
              <FocusHeader>FOCUS AREAS</FocusHeader>
              <SubtopicsList>
                {track.subtopics.map((subtopic, subIndex) => (
                  <SubtopicItem key={subIndex}>
                    <SubtopicBullet />
                    {subtopic}
                  </SubtopicItem>
                ))}
              </SubtopicsList>
            </FocusContainer>
          </DetailsWrapper>
          <RewardBox>
            <p>WINNER GETS</p>
            <h1>{track.reward}</h1>
          </RewardBox>
        </ContentCard>
      ))}
    </Container>
  );
};

export default Tracks;

