import React from 'react';
import {
  SectionContainer,
  SectionTitle,
  CardsGrid,
  FlipCard,
  ContentWrapper,
  FlipCardInner,
  FlipCardFront,
  FlipCardBack,
  CardImage,
  CardText
} from './WhatToExpect.styles';

const cardData = [
  {
    title: 'Fun Mini Events',
    image: '/images/expect/games.jpg',
    description: "Beyond the intense coding, we've got a fantastic lineup of fun games and entertainment to keep the energy high and the ideas flowing. It's the perfect blend of serious tech challenges and playful breaks!"
  },
  {
    title: 'Workshops & Talks',
    image: '/images/expect/workshop.jpg',
    description: "Expect an engaging series of workshops and talks led by industry experts and thought leaders. You'll gain practical insights, learn cutting-edge techniques, and discover new perspectives to fuel your passion."
  },
  {
    title: 'Swags & Goodies',
    image: '/images/expect/goodies.jpg',
    description: 'Beyond the thrilling challenges and insightful sessions, expect to be rewarded with awesome swags and goodies as a token of our appreciation. Walk away with cool mementos!'
  },
  {
    title: 'Live Music & Entertainment',
    image: '/images/expect/music1.jpg',
    description: "Beyond the innovative projects and insightful discussions, expect an incredible atmosphere filled with live music and entertainment. We're bringing the beats and the fun to keep your energy high and your creativity flowing."
  }
];

const WhatToExpect = () => {
  return (
    <SectionContainer>
        <ContentWrapper>
            <SectionTitle>What Can You Expect at IdeaX 2025?</SectionTitle>
            <CardsGrid>
                {cardData.map((card, index) => (
                <FlipCard key={index}>
                    <FlipCardInner>
                    <FlipCardFront>
                    <CardImage src={card.image} alt={card.title} />
                    <CardText>{card.title}</CardText>
                    </FlipCardFront>
                    <FlipCardBack>
                    <CardText>{card.description}</CardText>
                    </FlipCardBack>
                    </FlipCardInner>
                </FlipCard>
                ))}
            </CardsGrid>
        </ContentWrapper>
    </SectionContainer>
  );
};

export default WhatToExpect;
