import React, { useState } from 'react';
import { 
  FAQContainer, 
  FAQItem, 
  QuestionRow, 
  Icon, 
  QuestionText, 
  CardBack,
  CardFront,
  CardInner,
  Answer,
  FAQH1
} from './FaqElements';

const faqData = [
  {
    question: "What is MBMC IdeaX?",
    answer: "IdeaX is a national-level hackathon organized by MBM College, designed to bring together creative minds to solve real-world challenges through technology. It’s a platform where innovation, collaboration, and execution come together over 48 high-energy hours.",
  },
  {
    question: "Who can participate in IdeaX?",
    answer: "Anyone with a passion for innovation! Whether you’re a student, professional, beginner, or experienced developer — if you’re ready to build, you’re welcome at IdeaX. Just make sure you have the necessary skills to bring your ideas to life.",
  },
  { question: "Do I need to have a team to participate?",
    answer: "Teams are encouraged but not required. You can register individually or with a team. As the saying goes, 'Alone we can do so little, but together we can achieve greatness.' Collaborating with others often leads to stronger, more impactful solutions."
  },
  {
    question:"What is the registration process and deadline?",
    answer:"You can register via our official website or directly through our Devfolio page. The registration deadline is 26th August, 2025.",
  },
  {
    question:"Are there any registration or participation fees?",
    answer:"No — IdeaX is completely free to join. We believe in open access to innovation. There are no fees for registration or participation.",
  },
  {
    question:"What is the format and duration of the hackathon?",
    answer:"The hackathon will be conducted offline (in-person) over a period of 48 hours, starting from 31st October 2025.",
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(prev => prev === index ? null : index);
  };

  return (
    <>
    <FAQH1>FAQ</FAQH1>
    <FAQContainer>
      {faqData.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <FAQItem key={index} onClick={() => toggle(index)} isOpen={isOpen}>
            <CardInner isOpen={isOpen}>
                <CardFront>
                <QuestionRow>
                <Icon isOpen={isOpen}>{isOpen ? '✔️' : '❓'}</Icon>
                <QuestionText>{item.question}</QuestionText>
                </QuestionRow>
                </CardFront>
                <CardBack>
                 <Answer>{item.answer}</Answer>
                </CardBack>
            </CardInner>
          </FAQItem>
        );
      })}
    </FAQContainer>
    </>
  );
};

export default FAQ;
