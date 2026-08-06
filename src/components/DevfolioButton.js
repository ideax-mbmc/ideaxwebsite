import React, { useEffect } from 'react';

const DevfolioButton = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Devfolio) {
        window.Devfolio.loadEmbeds();
      }
    };
  }, []);

  return (
    <div
      className="apply-button"
      data-hackathon-slug="ideax-2025"  // <-- update this with our actual Devfolio slug
      data-button-theme="light"        // Options: 'light' or 'dark'
      style={{ height: '44px', width: '312px' }}
    ></div>
  );
};

export default DevfolioButton;
