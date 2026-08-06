import styled from 'styled-components';
import bgImage from '../../images/footer-1.png';

export const FooterContainer = styled.footer`
  // min-height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #015482;
  color: white;
  padding:4rem 1rem;

  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (max-width: 768px) {
  background-image: none;
  }
`;

export const FooterWrap = styled.div`
  max-width: 1300px;
  width: 100%;
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap:4rem;
`;

export const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 4rem;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    text-align: center;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  min-width: 280px;
  gap: 1.5rem;

  @media screen and (max-width: 820px) {
    align-items: center;
    text-align: center;
  }
`;

export const FooterLogo = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;
  margin-bottom: 8px;
`;

export const ContactInfo = styled.div`
  font-size: 20px;
  line-height: 2;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;

  svg {
    font-size: 20px; /* icon size */
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  font-size: 26px;

  @media screen and (max-width: 820px) {
    justify-content: center;
  }
`;

export const SocialIconLink = styled.a`
  color: white;

  &:hover {
    color: #6fa8c7;
    transition: 0.3s ease-in-out;
  }
`;

export const EventSummary = styled.div`
  text-align: left;

  h2 {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 1rem ;
  }

  p {
    font-size: 18px;
    line-height: 1.6  ;
    margin: 4px 0;
  }

  @media screen and (max-width: 820px) {
    text-align: center;
    align-items: center;

    h2{
      font-size: 22px;
      text-align: left;
      margin-bottom: 1rem;
    }

    p{
      font-size: 17px;
      text-align: left;
      }
  }
  
  @media screen and (max-width: 480px) {
    h2 {
      font-size: 20px;
    }

    p {
      font-size: 16px;
    }
  }
`;

export const WebsiteRights = styled.div`
  color: white;
  margin-top: 8px;
  font-size: 22px;
  text-align: center;
  padding-top: 2rem;
  // border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  flex: 1 1 150px;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  width: 160px;
  color: white;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: row;
    justify-content: space-around;
    gap: 2rem;
  }
`;

