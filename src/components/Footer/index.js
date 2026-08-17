import React from 'react'
import {FaFacebook,
        FaInstagram,
        FaDiscord,
        FaLinkedin,
    } from 'react-icons/fa';

import {IoIosMail} from 'react-icons/io';
import {ImPhoneHangUp} from 'react-icons/im';    

import {FooterContainer, 
        FooterWrap,
        FooterLogo,
        WebsiteRights,
        SocialIcons,
        SocialIconLink,
        FooterRow,
        FooterColumn,
        ContactInfo,
        ContactItem,
        EventSummary
    } from './FooterElements';
import {animateScroll as scroll} from 'react-scroll';
import logo from '../../images/ideax_x_only.svg';
import FooterBanner from '../FooterBanner';


const Footer = () => {
    const toggleHome=() =>{
        scroll.scrollToTop();
    };

return (
   <>
    <FooterBanner />
    <FooterContainer>
        <FooterWrap>
            <FooterRow style={{alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                <FooterColumn>
                    <FooterLogo src={logo} alt="MBMC IdeaX Logo" onClick={toggleHome}/>
                    <ContactInfo>
                        <ContactItem>
                            <IoIosMail />
                            <span>ideax@mbmc.edu.np</span>
                        </ContactItem>
                        <ContactItem>
                            <ImPhoneHangUp />
                            <span>+977-984-2362679</span>
                        </ContactItem>
                    </ContactInfo>
                    <SocialIcons>
                        <SocialIconLink href="https://www.facebook.com/mbmcideax?rdid=lQ8Pu4CMnbXaiB7X&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1EVD3kkwqs%2F#" aria-label="IdeaX Facebook Page" target="_blank" rel="noopener noreferrer"><FaFacebook /></SocialIconLink>
                        <SocialIconLink href="https://www.instagram.com/mbmc_ideax/" aria-label="IdeaX Instagram Profile" target="_blank" rel="noopener noreferrer"><FaInstagram /></SocialIconLink>
                        <SocialIconLink href="https://discord.com/invite/A5Sg6wzhN" aria-label="IdeaX Discord Community" target="_blank" rel="noopener noreferrer"><FaDiscord /></SocialIconLink>
                        <SocialIconLink href="https://www.linkedin.com/company/mbm-ideax/" aria-label="IdeaX LinkedIn Page" target="_blank" rel="noopener noreferrer"><FaLinkedin /></SocialIconLink>
                    </SocialIcons>
                </FooterColumn>

                <FooterColumn style={{ alignItems: 'flex-end'}}>
                    <EventSummary>
                     <h2>Event Summary</h2>
                     <p>Mode: In-person</p>
                     <p>Venue: Madan Bhandari Memorial College</p>
                     <p>Date: 2nd October, 2026</p>
                     <p>Registration Deadline: 1st September, 2026</p>
                    </EventSummary>
                </FooterColumn>
            </FooterRow>
            <WebsiteRights>All Rights Reserved © MBMC IdeaX {new Date().getFullYear()}
            </WebsiteRights>
        </FooterWrap>
    </FooterContainer>
   </>
  )
}

export default Footer
