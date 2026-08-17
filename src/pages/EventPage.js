import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUsers, FaTrophy, FaPaperPlane } from 'react-icons/fa';
import SEO from '../components/SEO';

const PageContainer = styled.main`
  background: #041322;
  color: #ffffff;
  min-height: 100vh;
  padding-top: 100px;
`;

const ContentWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const PageHeader = styled.header`
  text-align: center;
  margin-bottom: 50px;
`;

const Badge = styled.span`
  background: rgba(111, 168, 199, 0.2);
  color: #6fa8c7;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  border: 1px solid rgba(111, 168, 199, 0.3);
`;

const Title = styled.h1`
  font-size: 2.8rem;
  margin: 20px 0 15px;
  font-weight: 800;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 2.1rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #cbd5e1;
  max-width: 750px;
  margin: 0 auto;
  line-height: 1.6;
`;

const FactsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin-bottom: 50px;
`;

const FactCard = styled.div`
  background: #013F6A;
  border-radius: 14px;
  padding: 24px;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 24px;
    color: #6fa8c7;
    margin-top: 4px;
    flex-shrink: 0;
  }
`;

const FactText = styled.div`
  h3 {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #94a3b8;
    margin-bottom: 6px;
  }
  p {
    font-size: 1.1rem;
    font-weight: 700;
    color: #ffffff;
  }
`;

const Section = styled.section`
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #ffffff;
  border-left: 4px solid #013F6A;
  padding-left: 14px;
`;

const Paragraph = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: #e2e8f0;
  margin-bottom: 16px;
`;

const TracksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 25px;
`;

const TrackCard = styled.article`
  background: rgba(1, 63, 106, 0.6);
  border-radius: 12px;
  padding: 24px;
  border: 1px solid rgba(111, 168, 199, 0.2);

  h3 {
    font-size: 1.25rem;
    color: #ffffff;
    margin-bottom: 10px;
  }

  p {
    font-size: 0.95rem;
    color: #cbd5e1;
    line-height: 1.5;
    margin-bottom: 16px;
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
    color: #6fa8c7;
    
    li {
      margin-bottom: 6px;
      color: #e2e8f0;
      font-size: 0.9rem;
    }
  }
`;

const CtaBox = styled.div`
  background: linear-gradient(135deg, #013F6A 0%, #041322 100%);
  border: 1px solid rgba(111, 168, 199, 0.3);
  border-radius: 16px;
  padding: 40px 30px;
  text-align: center;
  margin: 50px 0;
`;

const RegisterButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #013F6A;
  color: #ffffff;
  font-weight: 700;
  padding: 14px 32px;
  border-radius: 30px;
  text-decoration: none;
  font-size: 1.1rem;
  transition: background 0.3s ease;
  margin-top: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    background: #02558f;
  }
`;

const tracksData = [
  {
    num: "01",
    title: "Climate Change, Resilience & Sustainability",
    desc: "Develop technology solutions that strengthen disaster resilience, environmental sustainability, and resource management.",
    focus: ["Disaster Preparedness & Early Warning", "Sustainable Resource Management"]
  },
  {
    num: "02",
    title: "Cyber Security & Digital Trust",
    desc: "Design intelligent systems that improve cybersecurity, strengthen digital trust, and protect users against emerging cyber threats.",
    focus: ["Intelligent Threat Detection", "Digital Fraud & Identity Protection", "AI-Assisted Security Operations"]
  },
  {
    num: "03",
    title: "E-Governance & Smart Public Services",
    desc: "Build digital platforms that improve government efficiency, transparency, accessibility, and citizen engagement.",
    focus: ["Citizen-Centric Government Services", "Data-Driven Governance"]
  },
  {
    num: "04",
    title: "Smart Urban Transport & Road Safety",
    desc: "Create smart mobility solutions that improve transportation efficiency, road safety, and sustainable urban mobility.",
    focus: ["Intelligent Traffic & Mobility Management", "Road Safety & Accident Prevention", "Smart Parking & Urban Mobility Services"]
  },
  {
    num: "05",
    title: "FinTech & Digital Financial Innovation",
    desc: "Develop secure, accessible, and intelligent financial technologies that promote financial inclusion and digital trust.",
    focus: ["Financial Inclusion & Digital Banking", "Intelligent Fraud Detection & Secure Payments", "Smart Personal Finance & Financial Wellness"]
  }
];

const EventPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <SEO
        title="Event Details & Schedule | IdeaX 2026 - MBMC Hackathon"
        description="Explore MBMC IdeaX 2026 event overview, 48-hour schedule, problem tracks, eligibility, team guidelines, and venue location at Madan Bhandari Memorial College, Kathmandu."
        canonical="https://ideax.mbmc.edu.np/event"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://ideax.mbmc.edu.np/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Event Details",
              "item": "https://ideax.mbmc.edu.np/event"
            }
          ]
        }}
      />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <PageContainer>
        <ContentWrapper>
          <PageHeader>
            <Badge>Official Event Guide</Badge>
            <Title>MBMC IdeaX 2026 Overview</Title>
            <Subtitle>
              MBMC IdeaX 2026 is a 48-hour, in-person technology hackathon organized by Madan Bhandari Memorial College in Kathmandu, Nepal.
            </Subtitle>
          </PageHeader>

          <FactsGrid>
            <FactCard>
              <FaCalendarAlt />
              <FactText>
                <h3>Hackathon Start</h3>
                <p>2nd October 2026</p>
              </FactText>
            </FactCard>
            <FactCard>
              <FaClock />
              <FactText>
                <h3>Registration Deadline</h3>
                <p>1st September 2026</p>
              </FactText>
            </FactCard>
            <FactCard>
              <FaUsers />
              <FactText>
                <h3>Format & Duration</h3>
                <p>Offline / 48 Hours</p>
              </FactText>
            </FactCard>
            <FactCard>
              <FaMapMarkerAlt />
              <FactText>
                <h3>Venue</h3>
                <p>Madan Bhandari Memorial College, Kathmandu, Nepal</p>
              </FactText>
            </FactCard>
            <FactCard>
              <FaTrophy />
              <FactText>
                <h3>Track Prize</h3>
                <p>Rs. 10,000 per track winner</p>
              </FactText>
            </FactCard>
          </FactsGrid>

          <Section>
            <SectionTitle>What is MBMC IdeaX 2026?</SectionTitle>
            <Paragraph>
              MBMC IdeaX 2026 is Madan Bhandari Memorial College's flagship national technology hackathon. Designed to cultivate innovation, collaborative problem solving, and software development skills, the event brings together teams from across the nation to build impactful technological solutions.
            </Paragraph>
            <Paragraph>
              Over a non-stop 48-hour period starting on 2nd October 2026, participating teams collaborate in-person at Madan Bhandari Memorial College to turn ideas into functional prototypes across five specialized problem tracks.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>Who Organizes MBMC IdeaX 2026?</SectionTitle>
            <Paragraph>
              The hackathon is organized by <strong>Madan Bhandari Memorial College</strong>, a community college established in 2001 in Kathmandu, Nepal, dedicated to providing quality tertiary education and fostering technical innovation.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>Five Official Problem Tracks</SectionTitle>
            <Paragraph>
              Participants choose one of five problem tracks to develop their technology solution:
            </Paragraph>
            <TracksGrid>
              {tracksData.map((t, i) => (
                <TrackCard key={i}>
                  <h3>Track {t.num}: {t.title}</h3>
                  <p>{t.desc}</p>
                  <h4>Focus Areas:</h4>
                  <ul>
                    {t.focus.map((f, fi) => (
                      <li key={fi}>{f}</li>
                    ))}
                  </ul>
                </TrackCard>
              ))}
            </TracksGrid>
          </Section>

          <Section>
            <SectionTitle>Registration & Participation Details</SectionTitle>
            <Paragraph>
              Registration for MBMC IdeaX 2026 is completely free and open until <strong>1st September 2026</strong>. Developers, students, and technology enthusiasts can participate individually or in teams.
            </Paragraph>
            <CtaBox>
              <h2>Ready to Innovate?</h2>
              <Paragraph>Join us for 48 hours of building, learning, and competing for national recognition.</Paragraph>
              <RegisterButton href="https://forms.gle/cBgYAroPeJeZpxa6A" target="_blank" rel="noopener noreferrer">
                <FaPaperPlane /> Register For MBMC IdeaX 2026
              </RegisterButton>
            </CtaBox>
          </Section>

          <Section>
            <FAQ />
          </Section>
        </ContentWrapper>
      </PageContainer>
      <Footer />
    </>
  );
};

export default EventPage;
