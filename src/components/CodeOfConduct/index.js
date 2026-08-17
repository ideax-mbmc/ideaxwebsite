import React from 'react';
import {
  PageWrapper,
  ContentContainer,
  Title,
  IntroWrapper,
  Section,
  SubTitle,
  Paragraph,
  StyledList
} from './CodeOfConduct.styles';
import Footer from '../Footer';
import Navbar from '../Navbar';
import SEO from '../SEO';

const CodeOfConduct = () => {
  return (
    <>
      <SEO
        title="Code of Conduct | IdeaX 2026 - MBMC Hackathon"
        description="Review the official Code of Conduct for IdeaX 2026. Learn about our commitment to inclusivity, expected behavior, participation rules, and reporting procedures."
        canonical="https://ideax.mbmc.edu.np/code"
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
              "name": "Code of Conduct",
              "item": "https://ideax.mbmc.edu.np/code"
            }
          ]
        }}
      />
      <Navbar />
      <PageWrapper>
        <ContentContainer>
          <Title>Code Of Conduct</Title>

          <IntroWrapper>
            <Paragraph>
              At IdeaX, we believe in building not only the future of technology and innovation but also a community rooted in respect, inclusivity, and collaboration. As organizers, it is our responsibility to ensure a safe, welcoming, and empowering environment for all participants—especially those from underrepresented or marginalized backgrounds. We see this Code of Conduct as a reflection of our unwavering commitment to uphold those values.
            </Paragraph>
          </IntroWrapper>

          <Section>
            <SubTitle>Scope of Application</SubTitle>
            <Paragraph>
              This Code of Conduct applies to all participants, mentors, sponsors, partners, volunteers, judges, and anyone affiliated with IdeaX. It governs behavior across all official IdeaX spaces including online platforms, physical venues, and communications related to the event.
            </Paragraph>
          </Section>

          <Section>
            <SubTitle>Our Commitment</SubTitle>
            <Paragraph>IdeaX is committed to providing a harassment-free and inclusive experience for everyone, regardless of:</Paragraph>
            <StyledList>
              <li>Gender or gender identity</li>
              <li>Sexual Orientation</li>
              <li>Disability or Health Condition</li>
              <li>Age</li>
              <li>Technological background or expertise</li>
            </StyledList>
          </Section>

          <Section>
            <SubTitle>Expected Behaviour</SubTitle>
            <Paragraph>All attendees must:</Paragraph>
            <StyledList>
              <li>Be respectful of others' opinions, work, and personal space.</li>
              <li>Use inclusive language and maintain professionalism at all times.</li>
              <li>Embrace diverse ideas and interdisciplinary collaboration.</li>
              <li>Respect event schedules, deadlines, and community guidelines.</li>
              <li>Seek consent before photographing or recording others.</li>
            </StyledList>
          </Section>

          <Section>
            <SubTitle>Prohibited Conduct</SubTitle>
            <Paragraph>The following behaviors are strictly forbidden:</Paragraph>
            <StyledList>
              <li>Harassment in any form, including verbal abuse or unwelcome advances.</li>
              <li>Offensive or discriminatory speech, visuals, or gestures.</li>
              <li>Plagiarism or misrepresentation of work.</li>
              <li>Intoxication or possession of illegal substances on event premises.</li>
              <li>Sabotaging, disrupting, or intimidating fellow participants.</li>
            </StyledList>
          </Section>

          <Section>
            <SubTitle>Participation Rules</SubTitle>
            <StyledList>
              <li>IdeaX is open to students and young innovators between 18 and 26 years of age.</li>
              <li>Each individual may participate in only one team.</li>
              <li>Organizing members, employees of partner institutions, and direct affiliates are ineligible to compete.</li>
              <li>Participants must be able to provide valid photo identification (e.g., student ID) and, if requested, a sample portfolio or previous work.</li>
            </StyledList>
          </Section>

          <Section>
            <SubTitle>Team Guidelines</SubTitle>
            <StyledList>
              <li>Teams must consist of 3 to 5 members. In unique cases, teams of 2 or 6 may be permitted at the committee’s discretion.</li>
              <li>Interdisciplinary teams (e.g., combining tech, business, and design expertise) are encouraged and may receive additional consideration during evaluation.</li>
              <li>Once team formation is complete, changes are not permitted without prior approval from the organizing team.</li>
            </StyledList>
          </Section>

          <Section>
            <SubTitle>Project Guidelines</SubTitle>
            <StyledList>
              <li>All submissions must be initiated and completed during the official event timeline.</li>
              <li>Pre-existing ideas may be developed further only if clearly disclosed during submission and approved by the mentors.</li>
              <li>Sketching, planning, and documentation before the event is allowed, but no code or final assets may be created beforehand.</li>
              <li>Projects must respect ethical standards and may not promote violence, hate speech, or inappropriate content.</li>
            </StyledList>
          </Section>

          <Section>
            <SubTitle>Submission Requirements</SubTitle>
            <StyledList>
              <li>Only officially registered teams may submit projects.</li>
              <li>All submissions must be original and properly documented.</li>
              <li>Teams must follow all guidelines provided for file formats, presentation formats, and deadlines.</li>
              <li>At least one team member must be available to present during the final showcase.</li>
            </StyledList>
          </Section>

          <Section>
            <SubTitle>Reporting Concerns</SubTitle>
            <Paragraph>If you witness or experience any inappropriate behavior, please contact a member of the organizing committee immediately. Our team members can be recognized by their official IdeaX badges and T-shirts.
            All reports will be handled confidentially and sensitively.</Paragraph>
          </Section>

          <Section>
            <SubTitle>Consequences of Violations</SubTitle>
            <Paragraph>Violations of this Code of Conduct may result in one or more of the following actions, depending on the severity:</Paragraph>
            <StyledList>
              <li>Verbal warning or mediation</li>
              <li>Removal from the event</li>
              <li>Disqualification from prizes</li>
              <li>Banning from future IdeaX events</li>
              <li>Notification of the participant’s institution or employer</li>
              <li>Legal or disciplinary escalation if necessary</li>
            </StyledList>
          </Section>

          <Section>
            <SubTitle>Need Assistance?</SubTitle>
            <Paragraph>If you have any questions, safety concerns, or issues during the event, please reach out to:</Paragraph>
            <StyledList>
              <li>Krishna Adhikari: 9842362679</li>
              <li>Krijal Paneru: 9744289830</li>
            </StyledList>
            <br />
            <Paragraph>We are here to help ensure IdeaX is a space for innovation and integrity.</Paragraph>
          </Section>
        </ContentContainer>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default CodeOfConduct;
