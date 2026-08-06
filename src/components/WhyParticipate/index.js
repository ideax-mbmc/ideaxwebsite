import React from 'react'
import { 
    Container,
    InnerWrapper,
    Title,
    Row, 
    // IconColumn,
    IconWrapper,
    Divider,
    TextColumn,
    Text
     } from './ParticipateElements';
import { PiLightbulbThin,PiUserGearLight } from "react-icons/pi";
import { BsPeople } from "react-icons/bs";
import { TfiMoney } from "react-icons/tfi";

const data = [
  {
    icon: <PiLightbulbThin />,
    text: 'Propose innovative ideas that transcend technological barriers and address social inequalities, positively transforming lives through equitable digital experiences.'
  },
  {
    icon: <BsPeople />,
    text: 'Collaborate with team to develop solutions for digital equity using cutting-edge technology.'
  },
  {
    icon: <PiUserGearLight />,
    text: 'Identify frameworks and best practices for Nepal, addressing its unique social, security, sustainability, cost, and technological barriers requires a multi-faceted approach, integrating various frameworks and best practices.'
  },
  {
    icon: <TfiMoney />,
    text: 'Winners will be recognized and rewarded with cash prizes.'
  }
];

const WhyParticipate = () => {
  return (
    <Container id="why">
        <InnerWrapper>
            <Title>Why participate in IdeaX?</Title>
            {data.map((item, index) => (
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
  )
}

export default WhyParticipate
