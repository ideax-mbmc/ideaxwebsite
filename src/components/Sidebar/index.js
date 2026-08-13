import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarNavLink,
  ExternalLink,
  SidebarExternalRoute
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  const handleOutsideClick = () => {
    toggle();
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <SidebarContainer isOpen={isOpen} onClick={handleOutsideClick}>
      <SidebarWrapper onClick={stopPropagation}>
        <Icon onClick={toggle} aria-label="Close sidebar" tabIndex={0}>
          <CloseIcon />
        </Icon>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
          <SidebarLink to="participation" onClick={toggle}>Participation</SidebarLink>
          <SidebarLink to="tracks" onClick={toggle}>Tracks</SidebarLink>
          <SidebarLink to="faq" onClick={toggle}>FAQ</SidebarLink>
          <SidebarNavLink to="/code" onClick={toggle}>Code Of Conduct</SidebarNavLink>
          <ExternalLink href="/2025/" onClick={toggle}>2025 Recap</ExternalLink>
          <ExternalLink href="/2024/" onClick={toggle}>2024 Recap</ExternalLink>
          <ExternalLink href="/2023/" onClick={toggle}>2023 Recap</ExternalLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarExternalRoute
          href="https://forms.gle/cBgYAroPeJeZpxa6A"
          target="_blank"
          rel="noopener noreferrer"
          onClick={toggle}
        >
          Register Now
          </SidebarExternalRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
