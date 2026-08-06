import styled from 'styled-components';

export const BannerWrapper = styled.div`
  width: 100%;
  padding: 60px 20px;
  background: linear-gradient(
    135deg,
    #041322 0%, 
    #013F6A 50%,
    #026873 100%
  );
  color: white;
  display: flex;
  justify-content: center;
`;

export const BannerContent = styled.div`
  width: 100%;
  max-width: 1200px;
  text-align: left;
  padding-left: 40px;

  @media (max-width: 768px) {
    padding-left: 20px;
  }
`;

export const BannerText = styled.p`
  font-size: 1.8rem;
  line-height: 1.6;
  margin-bottom: 24px;
  font-weight: 300;

  strong {
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

