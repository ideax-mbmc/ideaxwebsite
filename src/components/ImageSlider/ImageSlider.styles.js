import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

export const SliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: #041322;
  padding: 20px 0;
  margin-bottom:70px;
`;

export const ScrollTrack = styled.div`
  display: flex;
  width: max-content;
  animation: ${scroll} 30s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

export const ScrollWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Image = styled.img.attrs(() => ({
  loading: 'lazy',
}))`
  height: 300px;
  width: 400px;
  flex: 0 0 auto;
  object-fit: cover;
  margin-right: 16px;
  border-radius: 12px;
`;