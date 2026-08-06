import styled from 'styled-components';
import { FaRegTimesCircle } from "react-icons/fa";
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'

export const SidebarContainer = styled.aside`
    position:fixed;
    z-index:9999;
    width:100%;
    height:100%;
    background:#015482;
    display:grid;
    align-items:center;
    right:0;
    top:0;
    transform: ${({isOpen}) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition:0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
`;

export const CloseIcon = styled(FaRegTimesCircle)`
    color:white;
    font-size: 2rem;
`;

export const Icon = styled.div`
    position:absolute;
    top:1.2rem;
    right:1.5rem;
    background:transparent;
    font-size:2rem;
    cursor:pointer;
    outline:none;
`;

export const SidebarWrapper = styled.div`
    color:white;
`;

export const SidebarMenu = styled.ul`
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows:repeat(6,80px);
    text-align:center;

    @media screen and (max-width:480px){
        grid-template-rows:repeat(6, 60px);
    }
`
export const SidebarLink = styled(LinkS)`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1.5rem;
    text-decoration:none;
    list-style:none;
    transition:0.2s ease-in-out;
    text-decoration:none;
    color:white;
    cursor:pointer;

    &:hover{
        color:#4D85AC;
        transition:0.2s ease-in-out;
    }
`;
export const SideBtnWrap = styled.div`
    display:flex;
    justify-content:center;
    margin-top:20px;
`;

export const SidebarRoute = styled(LinkR)`
    border-radius:50px;
    background:#013F6A;
    white-space:nowrap;
    padding:16px 64px;
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

export const SidebarNavLink = styled(LinkR)`
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:1.5rem;
  text-decoration:none;
  list-style:none;
  color:white;
  cursor:pointer;
  padding: 16px 0;

  &:hover {
    color:#4D85AC;
    transition:0.2s ease-in-out;
  }
`;

export const ExternalLink = styled.a`
  color: #fff;
  padding: 16px 24px;
  text-decoration: none;
  display: block;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    transition:0.2s ease-in-out;
  }
`;

export const SidebarExternalRoute = styled.a`
  border-radius: 50px;
  background: #013F6A;
  white-space: nowrap;
  padding: 16px 64px;
  color: #fff;
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

