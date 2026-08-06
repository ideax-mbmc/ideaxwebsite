import styled from 'styled-components';

export const Container = styled.div`
  margin-top:65px;
  background: #041322;
  color: white;
  padding: 100px 20px;
  display: flex;
  justify-content: center;
`;

export const InnerWrapper = styled.div`
  max-width: 1100px;
  width: 100%;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 60px;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 40px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    margin-bottom: 40px;
  }
`;

export const IconWrapper = styled.div`
  font-size: 50px;
  color: #6fa8c7;
  min-width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Divider = styled.div`
  width: 2px;
  height: 60px;
  background: #6fa8c7;
  margin: 0 30px;

  @media screen and (max-width: 768px) {
    height: 2px;
    width: 60px;
    margin: 20px 0;
  }
`;

export const TextColumn = styled.div`
  flex: 1;
`;

export const Text = styled.p`
  font-size: 20px;
  line-height: 1.9;
  color: white;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 1.6;
    text-align:justify;
    }
`;
