import styled from 'styled-components';

export const PageWrapper = styled.div`
  background: #041322;
  color: #fff;
  padding: 4rem 2rem;
  font-family: 'Segoe UI', sans-serif;
  line-height: 1.7;
  background-image: url('/path/to/decorative-leaves.svg'); 
  background-repeat: no-repeat;
  background-position: bottom left, bottom right;
  margin-top:20px;
`;

export const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  font-weight: bold;
  color:white;
  margin-bottom: 3rem;
`;

export const SubTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color:white;
  margin: 2rem 0 1rem;
`;

export const Paragraph = styled.p`
  font-size: 1.05rem;
  max-width: 900px;
  margin: 0 auto 1.5rem;
  color: #ccc;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  gap:0.75rem;
  margin-bottom: 2rem;
  align-items: center;

    @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledList = styled.ul`
  padding-left: 1.5rem;
  margin-bottom: 1rem;

  li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
    color: #f5f5f5; 
    font-size: 1rem;
  }
`;