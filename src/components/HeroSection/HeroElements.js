import styled from 'styled-components';
import {MdKeyboardArrowRight,MdArrowForward} from 'react-icons/md';
import mobileImage from '../../images/mobile_bg.svg';

export const HeroContainer = styled.div`
  background: ${({ bgImage }) => bgImage ? `url(${bgImage}) center/cover no-repeat` : '#041322'};
  background-attachment:fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 30px;
  height: 100vh;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 980px){
    background: url(${mobileImage}) center/cover no-repeat;
  }
`;

export const HeroBg = styled.div`
    position:absolute;
    top:0,
    right:0,
    bottom:0,
    left:0;
    width:100%
    height:100%;
`;

export const HeroContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  z-index: 3;
  padding: 0 60px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0 20px;
    text-align: center;
  }
`;

export const TextContent = styled.div`
  flex: 1;
  padding-right: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; /* keep left alignment */

  @media screen and (max-width: 768px) {
    padding-right: 0;
    align-items: center;
  }
`;

export const AnimationWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end; 
  align-items: center;

  @media screen and (max-width: 768px) {
    display:none;
  }
`;

export const HeroH1 = styled.h1`
  color: white;
  font-size: 64px;
  text-align: left;
  margin-bottom: 0;

    @media screen and (max-width:768px){
    font-size:48px;
    text-align:center;
    }

    @media screen and (max-width:480px){
    font-size:36px;
    align-items:center;
    text-align:center;
`;
export const HeroP=styled.p`
  margin-top: 20px;
  margin-bottom: 24px;
  color: white;
  font-size: 20px;
  font-style: italic;
  text-align: left;
  max-width: 600px;

    @media screen and (max-width:768px){
    font-size:24px;
    }

    @media screen and (max-width:480px){
    font-size:18px;
    }
`;

export const CountdownWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin: 16px 0;
`;

export const TimeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TimeValue = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
`;

export const TimeLabel = styled.span`
  font-size: 14px;
  color: #ccc;
  text-transform: lowercase;
`;

export const HeroBtnWrapper = styled.div`
    margin-top:32px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
`;
export const ArrowForward = styled(MdArrowForward)`
    margin-left:8px;
    font-size:20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left:8px;
    font-size:20px;
`;

export const ShapeDivider = styled.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  z-index: 5;

  .desktop-shape {
    display: block;

    @media screen and (max-width:980px){
      display:none;
    }

  }

  .mobile-shape {
    display: none;

    @media screen and (max-width: 980px) {
      display: block;
    }
  }

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 100px;
  }

  path {
    fill:#041322;
  }
`;

