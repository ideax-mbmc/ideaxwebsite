import { useEffect } from 'react';

const SEO = ({
  title = "IdeaX 2026 | MBMC Technology & Innovation Hackathon in Nepal",
  description = "IdeaX 2026 is a 48-hour national technology and innovation hackathon organized by Madan Bhandari Memorial College in Kathmandu, Nepal. Register now to build, innovate, and compete.",
  canonical = "https://ideax.mbmc.edu.np/",
  ogType = "website",
  ogImage = "https://ideax.mbmc.edu.np/images/logo512.png",
  schemaJson = null
}) => {
  useEffect(() => {
    // Update Document Title
    document.title = title;

    // Helper to update or create meta tags
    const setMetaTag = (selector, attribute, value) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        const match = selector.match(/\[([a-zA-Z0-9:-]+)=["']?([^"']+)["']?\]/);
        if (match) {
          element.setAttribute(match[1], match[2]);
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    // Helper to update or create link tags
    const setLinkTag = (rel, href) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Meta Description & Canonical
    setMetaTag('meta[name="description"]', 'content', description);
    setLinkTag('canonical', canonical);

    // Open Graph
    setMetaTag('meta[property="og:title"]', 'content', title);
    setMetaTag('meta[property="og:description"]', 'content', description);
    setMetaTag('meta[property="og:url"]', 'content', canonical);
    setMetaTag('meta[property="og:type"]', 'content', ogType);
    setMetaTag('meta[property="og:image"]', 'content', ogImage);
    setMetaTag('meta[property="og:site_name"]', 'content', 'IdeaX');

    // Twitter
    setMetaTag('meta[name="twitter:title"]', 'content', title);
    setMetaTag('meta[name="twitter:description"]', 'content', description);
    setMetaTag('meta[name="twitter:image"]', 'content', ogImage);

    // Route-specific JSON-LD Script
    let scriptElem = document.getElementById('route-specific-schema');
    if (schemaJson) {
      if (!scriptElem) {
        scriptElem = document.createElement('script');
        scriptElem.id = 'route-specific-schema';
        scriptElem.type = 'application/ld+json';
        document.head.appendChild(scriptElem);
      }
      scriptElem.textContent = JSON.stringify(schemaJson);
    } else if (scriptElem) {
      scriptElem.remove();
    }

    return () => {
      const elem = document.getElementById('route-specific-schema');
      if (elem) elem.remove();
    };
  }, [title, description, canonical, ogType, ogImage, schemaJson]);

  return null;
};

export default SEO;
