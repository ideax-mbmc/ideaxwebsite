import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? 'rgba(0, 0, 0, 0.3)' : 'transparent')};
    backdrop-filter: ${({ scrollNav }) => (scrollNav ? 'blur(10px)' : 'none')};
    -webkit-backdrop-filter: ${({ scrollNav }) => (scrollNav ? 'blur(10px)' : 'none')};
    height:80px;
    margin-top:-80px;
    display:flex;
    justify-content:center;
    font-size:1rem;
    position:sticky;
    top:0;
    z-index:10;

    @media screen and (max-width:960px){
        transition:0.8s all ease;
    }
    @media screen and (max-width: 768px) {
        height: 60px;
    }
`;
export const NavbarContainer = styled.div`
    display:flex;
    justify-content:space-between;
    height:80px;
    z-index:1;
    width:100%;
    padding:0 24px;
    max-width:1400px;

    @media screen and (max-width: 992px) {
    padding: 0 12px;
    }
`;
export const NavLogo = styled(LinkR)`
    color:black;
    justify-self:flex-start;
    cursor:pointer;
    display:flex;
    align-items:center;
    margin-left:24px;

    @media screen and (max-width:768px){
        margin-bottom:15px;
    }
`;

export const LogoImg = styled.img`
  height: 34px;

  @media screen and (max-width: 768px) {
    height: 28px;
  }

  @media screen and (max-width: 420px) {
    height: 24px;
  }
`;

export const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width: 980px){
        display:block;
        position:absolute;
        top:12px;
        right:16px;
        // transform:translate(-100%,60%);
        font-size:1.8rem;
        cursor:pointer;
        color:white;
        margin-top:8px;
    }
`;
export const NavMenu = styled.div`
    display:flex;
    align-items:center;
    list-style:none;
    text-align:center;
    margin-right:-22px;
    gap:40px;
    justify-content:center;

    @media screen and (max-width: 992px) {
    gap: 20px;
    font-size: 14px;
    }

    @media screen and (max-width: 980px){
    display: none;
    }

`;

export const NavItem = styled.li`
    height:80px;
`;

export const NavLinks = styled(LinkS)`
    color:white;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding:0 1rem;
    height:100%;
    cursor:pointer;

    &.active{
        border-bottom: 2px solid white;
    }
`;

export const NavBtn = styled.nav`
    display:flex;
    align-items:center;

    @media screen and (max-width: 980px){
    display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius:50px;
    background:#013F6A;
    whitespace:nowrap;
    padding:10px 22px;
    color:white;
    font-size:16px;
    outline:none;
    border:none;
    cursor:pointer;
    transition:all 0.2s ease-in-out;
    text-decoration:none;

    &:hover{
    transition:all 0.2s ease-in-out;
    background:#35719C;
    color:white;
    }
`;

export const NavRouterLink = styled(LinkR)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 2px solid white;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 80px;
  background-color: black;
  padding: 10px 0;
  border-radius: 4px;
  z-index: 9999;
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const DropdownLink = styled.a`
  display: block;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: #35719C;
  }
`;

export const ExternalNavBtnLink = styled.a`
  border-radius: 50px;
  background: #013F6A;
  white-space: nowrap;
  padding: 10px 22px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #35719C;
    color: white;
  }
`;
