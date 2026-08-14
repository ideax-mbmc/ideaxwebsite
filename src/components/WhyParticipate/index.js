import React from 'react';

import {
  Container,
  InnerWrapper,
  Title,
  Row,
  IconWrapper,
  Divider,
  TextColumn,
  Text,
} from './ParticipateElements';

import {
  PiLightbulbThin,
  PiUserGearLight,
  PiRocketLaunchThin,
} from 'react-icons/pi';

import { BsPeople } from 'react-icons/bs';
import { TbTargetArrow } from 'react-icons/tb';
import { FaNetworkWired } from 'react-icons/fa';
import { GiTrophyCup } from 'react-icons/gi';

const benefits = [
  {
    icon: <PiLightbulbThin />,
    text: 'Solve real-world challenges aligned with national priorities.',
  },
  {
    icon: <BsPeople />,
    text: 'Work with experienced mentors, judges, and industry leaders.',
  },
  {
    icon: <PiUserGearLight />,
    text: 'Build innovative AI-powered and technology-driven solutions.',
  },
  {
    icon: <TbTargetArrow />,
    text: 'Compete on a nationally recognized innovation platform.',
  },
  {
    icon: <FaNetworkWired />,
    text: 'Expand professional networks with startups, academia, government, and industry.',
  },
  {
    icon: <GiTrophyCup />,
    text: 'Receive mentorship, recognition, prizes, and potential incubation opportunities.',
  },
  {
    icon: <PiRocketLaunchThin />,
    text: 'Showcase technical excellence and entrepreneurial thinking.',
  },
];

const WhyParticipate = () => {
  return (
    <Container id="why">
      <InnerWrapper>
        <Title>Why participate in IdeaX?</Title>

        {benefits.map((item, index) => (
          <Row key={index}>
            <IconWrapper>{item.icon}</IconWrapper>

            <Divider />

            <TextColumn>
              <Text>{item.text}</Text>
            </TextColumn>
          </Row>
        ))}
      </InnerWrapper>
    </Container>
  );
};

export default WhyParticipate;