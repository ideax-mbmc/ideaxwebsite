import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99999;
  background: rgba(4, 19, 34, 0.75);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  opacity: ${({ isVisible, isClosing }) => (isVisible && !isClosing ? 1 : 0)};
  pointer-events: ${({ isVisible, isClosing }) => (isVisible && !isClosing ? 'auto' : 'none')};
  transition: opacity 0.3s ease-in-out;
`;

export const ModalContent = styled.div`
  position: relative;
  max-width: 680px;
  width: 90vw;
  max-height: 90vh;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 35px rgba(1, 63, 106, 0.35);
  border: 1px solid rgba(120, 160, 255, 0.25);
  background: #041322;
  transform: ${({ isVisible, isClosing }) =>
    isVisible && !isClosing ? 'scale(1)' : isClosing ? 'scale(0.98)' : 'scale(0.96)'};
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 480px) {
    width: 95vw;
    border-radius: 12px;
  }
`;

export const BannerLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 82vh;
  object-fit: contain;
  display: block;
  border-radius: 16px;

  @media screen and (max-width: 480px) {
    border-radius: 12px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(4, 19, 34, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: background 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
  backdrop-filter: blur(4px);

  &:hover {
    background: rgba(1, 63, 106, 0.95);
    border-color: rgba(255, 255, 255, 0.6);
    transform: scale(1.08);
  }

  &:focus-visible {
    outline: 2px solid #6fa8c7;
    outline-offset: 2px;
  }

  @media screen and (max-width: 480px) {
    top: 8px;
    right: 8px;
    width: 32px;
    height: 32px;
  }
`;
