import styled from 'styled-components';

export const Container = styled.div`
  padding: 60px 20px;
  background: #041322;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const TabsWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 12px;
  padding: 0 8px;
  margin-bottom: 20px;
  max-width: 100%;
  scrollbar-width: none; 
  -ms-overflow-style: none; 

  &::-webkit-scrollbar {
    display: none; 
  }

  @media screen and (max-width: 1024px) {
    justify-content: flex-start;
  }
`;

export const Tab = styled.button`
  background: ${({ active }) => (active ? '#013F6A' : '#1D394D')};
  color: white;
  border: none;
  flex: 0 0 auto;
  white-space: nowrap;
  font-size: 15px;
  padding: 12px 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s ease;
  svg {
    font-size: 18px;
  }
  .tab-label {
    display: inline;
  }
  &:hover {
    background: #4D85AC;
  }
  @media screen and (max-width: 768px) {
    flex: 0 0 auto;
    padding: 10px 14px;
    font-size: 13px;

    .tab-label {
      display: inline;
    }
    svg {
      font-size: 16px;
    }
  }
`;

export const ContentCard = styled.div`
  background: #013F6A;
  border-radius: 16px;
  padding: 36px 36px;
  width: 100%;
  max-width: 920px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  color: white;
  gap: 2.5rem;
  flex-wrap: wrap;
  min-height: 380px;

  @media screen and (max-width: 768px) {
    padding: 24px 18px;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    min-height: auto;
  }
`;

export const DetailsWrapper = styled.div`
  flex: 1;
  min-width: 280px;
  max-width: 540px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    min-width: 100%;
  }
`;

export const TrackNumberBadge = styled.span`
  display: inline-block;
  background: rgba(255, 255, 255, 0.15);
  color: #6fa8c7;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.5px;
  padding: 4px 12px;
  border-radius: 16px;
  margin-bottom: 14px;
  text-transform: uppercase;
  border: 1px solid rgba(111, 168, 199, 0.3);
`;

export const IconCircle = styled.div`
  width: 64px;
  height: 64px;
  background: white;
  color: #0E4E7B;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  margin-bottom: 18px;

  @media screen and (max-width: 768px) {
    width: 52px;
    height: 52px;
    font-size: 24px;
    margin-bottom: 14px;
  }
`;

export const Title = styled.h3`
  font-size: 26px;
  margin-bottom: 12px;
  line-height: 1.3;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 22px;
    margin-bottom: 10px;
    text-align: left;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #e2e8f0;

  @media screen and (max-width: 768px) {
    font-size: 15px;
    line-height: 1.5;
    text-align: left;
  }
`;

export const FocusContainer = styled.div`
  margin-top: 18px;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
`;

export const FocusHeader = styled.h4`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #6fa8c7;
  margin-bottom: 10px;
`;

export const SubtopicsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SubtopicItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  color: #ffffff;
  line-height: 1.4;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const SubtopicBullet = styled.span`
  width: 6px;
  height: 6px;
  background-color: #6fa8c7;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
`;

export const RewardBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  align-self: center;
  min-width: 240px;

  p {
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    color: white;
    letter-spacing: 1.5px;
    margin-bottom: 8px;
    text-align: center;
  }

  h1 {
    font-size: 64px;
    font-weight: 800;
    margin: 0;
    font-weight: bold;
    line-height: 1;
    text-align: center;
  }

  @media screen and (max-width: 1024px) {
    text-align: center;
    align-items: center;

    h1 {
      font-size: 54px;
    }

    p {
      font-size: 15px;
      margin-bottom: 6px;
    }
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    align-items: center;
    width: 100%;
    margin-top: 12px;
    padding-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.15);

    h1 {
      font-size: 44px;
    }

    p {
      font-size: 14px;
      margin-bottom: 6px;
    }
  }

  @media screen and (max-width: 420px) {
    text-align: center;
    align-items: center;

    h1 {
      font-size: 36px;
    }

    p {
      font-size: 13px;
      margin-bottom: 4px;
    }
  }
`;

export const TrackTitle = styled.h1`
  font-size: 2.5rem;
  color: white;
  text-align: center;
  margin-bottom: 30px;

  @media screen and (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 24px;
  }
`;


