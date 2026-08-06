import styled from 'styled-components'

export const AboutContainer = styled.div`
    min-height:100vh;
    padding: 80px 0;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background:#041322;

    @media screen and (max-width:768px){
    height:1100px;
    }

    @media screen and (max-width:480px){
    height:1300px;
    }
`;

export const AboutWrapper = styled.div`
    max-width:1000px;
    margin:0 auto;
    display:grid;
    grid-template-columns: 1fr 1fr;
    align-items:stretch;
    grid-gap:48px;
    padding:0 50px;

    @media screen and (max-width: 980px) {
        grid-template-columns: 1fr;  /* Stack cards vertically */
        padding: 0 30px;
    }
    
    @media screen and (max-width:768px){
        grid-template-columns: 1fr;
        padding:0 20px;
    }
`;

export const AboutCard = styled.div`
    background:#013F6A;
    display:flex;
    flex-direction:column;
    align-items:stretch;
    text-align:left;
    border-radius:30px;
    height:100%;
    padding:40px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    border: 2px solid white;

    &:hover{
    transform:scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
    }

    @media screen and (max-width:768px){
    grid-template-columns: 1fr;
    padding: 20px;
    row-gap: 16px;
}
`;

export const AboutIcon = styled.img`
    height:35px;
    width:35px;
    object-fit:contain;
    display:inline-block;
`;

export const AboutH1 = styled.h1`
    font-size:3rem;
    color:white;
    margin-bottom:64px;
    text-align:center;

    @media screen and (max-width:480px){
        font-size:2rem;
    }
`;

export const AboutH2 = styled.h2`
    display:flex;
    align-items:center;
    color:white;
    font-size:2rem;
    margin-bottom:16px;
    font-weight:bold;
    gap:12px;
`;

export const AboutP = styled.p`
    color:white;
    font-size:1.15rem;
    text-align:justify;
    line-height:1.7;
    padding-bottom:20px;
    margin-top:12px;
`;

export const AboutTitle = styled.span`
  display: inline-block;
  font-weight: bold;
  font-size: 2rem;
  color: white;
  word-break: break-word; 

   @media screen and (max-width: 480px) {
    font-size: 1.25rem;   
    line-height: 1.2;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
  justify-content: flex-start;
  height: 80px;

  @media screen and (max-width: 480px) {
    justify-content: center;
  }
`;

export const CardBody = styled.div`
    width: 100%;
`;