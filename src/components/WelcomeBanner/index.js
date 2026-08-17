import React, { useState, useEffect, useCallback } from 'react';
import { IoClose } from 'react-icons/io5';
import websiteBanner from '../../images/website_banner.png';
import {
  ModalBackdrop,
  ModalContent,
  BannerLink,
  BannerImage,
  CloseButton
} from './WelcomeBanner.styles';

const WelcomeBanner = () => {
  const [shouldRender, setShouldRender] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    if (isClosing) return;
    setIsClosing(true);

    // Restore page scrolling
    document.body.style.overflow = '';

    setTimeout(() => {
      setIsVisible(false);
      setShouldRender(false);
      setIsClosing(false);
    }, 300);
  }, [isClosing]);

  useEffect(() => {
    // Entrance delay after landing page mounts
    const showTimer = setTimeout(() => {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    }, 400);

    return () => {
      clearTimeout(showTimer);
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (!isVisible || isClosing) return;

    // 5-second auto-close countdown when banner is visible
    const autoCloseTimer = setTimeout(() => {
      handleClose();
    }, 5000);

    // Escape key support
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(autoCloseTimer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible, isClosing, handleClose]);

  if (!shouldRender) {
    return null;
  }

  return (
    <ModalBackdrop
      isVisible={isVisible}
      isClosing={isClosing}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label="IdeaX 2026 Announcement"
    >
      <ModalContent
        isVisible={isVisible}
        isClosing={isClosing}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton
          onClick={(e) => {
            e.stopPropagation();
            handleClose();
          }}
          aria-label="Close announcement"
          type="button"
        >
          <IoClose size={22} />
        </CloseButton>

        <BannerLink
          href="https://forms.gle/cBgYAroPeJeZpxa6A"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            handleClose();
          }}
        >
          <BannerImage
            src={websiteBanner}
            alt="MBMC IdeaX 2026 Announcement - Register Now"
          />
        </BannerLink>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default WelcomeBanner;
