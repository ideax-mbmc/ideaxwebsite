import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  LogoImg,
  NavRouterLink,
  DropdownLink,
  DropdownMenu,
  ExternalNavBtnLink
} from './NavbarElements';
import { IconContext } from 'react-icons/lib';
import logo from '../../images/ideax_logo_white.svg';
import { animateScroll as scroll } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => window.removeEventListener('scroll', changeNav);
  }, []);

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
    scroll.scrollToTop({ duration: 200, smooth: true });
  };

  const handleScrollLink = (target) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTarget: target } });
    }
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo as="div" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
              <LogoImg src={logo} alt="logo" />
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={250}
                  spy={true}
                  exact="true"
                  offset={-80}
                  onClick={() => handleScrollLink('about')}
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="participation"
                  smooth={true}
                  duration={250}
                  spy={true}
                  exact="true"
                  offset={-80}
                  onClick={() => handleScrollLink('participation')}
                >
                  Participation
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="tracks"
                  smooth={true}
                  duration={250}
                  spy={true}
                  exact="true"
                  offset={-80}
                  onClick={() => handleScrollLink('tracks')}
                >
                  Tracks
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="faq"
                  smooth={true}
                  duration={250}
                  spy={true}
                  exact="true"
                  offset={-80}
                  onClick={() => handleScrollLink('faq')}
                >
                  FAQ
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavRouterLink to="/code">Code Of Conduct</NavRouterLink>
              </NavItem>

              <NavItem
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
              style={{ position: 'relative' }}
              >
            <NavLinks as="div">Recap ▾</NavLinks>
            {dropdownOpen && (
            <DropdownMenu>
            <DropdownLink href="/2024Recap/index.html" target="_blank" rel="noopener noreferrer">
              IdeaX 2024
            </DropdownLink>
            <DropdownLink href="/2023Recap/index.html" target="_blank" rel="noopener noreferrer">
              IdeaX 2023
            </DropdownLink>
            </DropdownMenu>
            )}
            </NavItem>
            </NavMenu>
            <NavBtn>
            <ExternalNavBtnLink
            href="https://docs.google.com/forms/d/1pfQsNEHA0f8Abr9h_YHXYQ8YSaEFfGzWXBqN8hPtJ7g/"
            target="_blank"
            rel="noopener noreferrer"
            >
            Register Now
            </ExternalNavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
