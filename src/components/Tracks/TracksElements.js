import styled from 'styled-components';

export const Container = styled.div`
  padding: 80px 20px;
  background: #041322;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom:40px;
`;

export const TabsWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 16px;
  padding: 0 8px;
  margin-bottom: 24px;
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
  font-size: 16px;
  padding: 16px 24px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s ease;
  svg{
    font-size: 22px;
  }
    .tab-label {
        display:inline;
    }
  &:hover {
    background: #4D85AC;
  }
    @media screen and (max-width: 768px) {
    flex:0 0 auto;;
    padding: 12px;
    font-size:0;

    .tab-label {
        display: none;
    }
        svg{
            font-size: 20px;
        }
  }
`;

export const ContentCard = styled.div`
  background: #013F6A;
  border-radius: 18px;
  padding: 50px 40px;
  width: 100%;
  max-width: 980px;
  display: flex;
  justify-content: space-between;
  align-items:stretch;
  margin: 0 auto;
  color: white;
  gap: 3rem;
  flex-wrap: wrap;
  min-height: 500px;

  @media screen and (max-width: 768px) {
    padding: 30px 20px;
    flex-direction: column;
    align-items: center;
    text-align: left;
  }
`;

export const IconCircle = styled.div`
  width: 80px;
  height: 80px;
  background: white;
  color: #0E4E7B;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  margin-bottom: 25px;
`;

export const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 18px;

   @media screen and (max-width: 768px) {
    font-size: 26px;
    text-align:left;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 1.8;

    @media screen and (max-width: 768px) {
    font-size: 16px;
    text-align: left;
  }
`;

export const RewardBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  margin-bottom: 40px;

  p {
    font-size: 20px;
    font-weight: 700;
    tetx-transform: uppercase;
    color:white;
    letter-spacing: 1px;
    margin-bottom: 12px;
    font-weight: 600;
  }

  h1 {
    font-size: 84px;
    font-weight: 800;
    margin: 0;
    font-weight: bold;
  }

  @media screen and (max-width: 1024px) {
      text-align: left;
      align-items: flex-start;

      h1{
        font-size: 70px;
      }

      p {
        font-size: 18px;
        margin-bottom: 8px;
      }
    }

   @media screen and (max-width: 850px) {
      text-align: left;
      align-items: flex-start;

      h1{
        font-size: 70px;
      }

      p {
        font-size: 18px;
        margin-bottom: 8px;
      }
    }

  @media screen and (max-width: 768px) {
      font-size: 42px;
      text-align: left;
      align-items: flex-start;

      h1{
        font-size: 65px;
      }

      p {
        font-size: 18px;
        margin-bottom: 8px;
      }
    }

    @media screen and (max-width: 420px) {
      font-size: 42px;
      text-align: left;
      align-items: flex-start;

      h1{
        font-size: 45px;
      }

      p {
        font-size: 15px;
        margin-bottom: 8px;
      }
    }
`;    

export const TrackTitle = styled.h1`
    font-size:3rem;
    color:white;
    text-align:center;
    margin-bottom: 40px;

    @media screen and (max-width:480px){
        font-size:2rem;
    }
`;
