import React, { useState } from 'react';
import { 
  FAQContainer, 
  FAQItem, 
  QuestionRow, 
  Icon, 
  QuestionText, 
  AnswerWrapper,
  AnswerInner,
  Answer,
  FAQH1
} from './FaqElements';

export const faqData = [
  {
    question: "What is MBMC IdeaX 2026?",
    answer: "MBMC IdeaX 2026 is a national-level technology hackathon organized by Madan Bhandari Memorial College. It brings together innovators, developers, and students over 48 high-energy hours to build real-world tech solutions.",
  },
  {
    question: "When is the hackathon?",
    answer: "The hackathon starts on 2nd October 2026.",
  },
  {
    question: "What is the registration deadline?",
    answer: "The registration deadline is 1st September 2026.",
  },
  {
    question: "Is the hackathon online or offline?",
    answer: "MBMC IdeaX 2026 is an offline (in-person) hackathon held at Madan Bhandari Memorial College in Kathmandu, Nepal.",
  },
  {
    question: "How long is the hackathon?",
    answer: "The hackathon runs continuously for a duration of 48 hours.",
  },
  {
    question: "What are the problem tracks?",
    answer: "The five official problem tracks are: 1) Climate Change, Resilience & Sustainability, 2) Cyber Security & Digital Trust, 3) E-Governance & Smart Public Services, 4) Smart Urban Transport & Road Safety, and 5) FinTech & Digital Financial Innovation.",
  },
  {
    question: "Where is the event held?",
    answer: "The event is held at Madan Bhandari Memorial College, Kathmandu, Nepal.",
  },
  {
    question: "What are the prizes?",
    answer: "Each track winner receives a cash reward of Rs. 10,000.",
  },
  {
    question: "How do I register?",
    answer: "You can register directly through our official website registration link or via our official Devfolio page.",
  },
  {
    question: "Do I need to have a team to participate?",
    answer: "Teams are encouraged but not required. You can register individually or with a team.",
  },
  {
    question: "Are there any registration or participation fees?",
    answer: "No — MBMC IdeaX 2026 is completely free to join. There are no fees for registration or participation.",
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(prev => prev === index ? null : index);
  };

  return (
    <>
      <FAQH1 id="faq-title">FAQ</FAQH1>
      <FAQContainer aria-labelledby="faq-title">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;
          const questionId = `faq-question-${index}`;
          const answerId = `faq-answer-${index}`;
          return (
            <FAQItem key={index} isOpen={isOpen}>
              <QuestionRow
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={answerId}
                id={questionId}
              >
                <Icon isOpen={isOpen}>{isOpen ? '✔️' : '❓'}</Icon>
                <QuestionText>{item.question}</QuestionText>
              </QuestionRow>
              <AnswerWrapper
                isOpen={isOpen}
                id={answerId}
                role="region"
                aria-labelledby={questionId}
              >
                <AnswerInner>
                  <Answer>{item.answer}</Answer>
                </AnswerInner>
              </AnswerWrapper>
            </FAQItem>
          );
        })}
      </FAQContainer>
    </>
  );
};

export default FAQ;