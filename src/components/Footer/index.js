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
                    <FooterLogo src={logo} alt="IdeaX Logo" onClick={toggleHome}/>
                    <ContactInfo>
                        <ContactItem>
                            <IoIosMail />
                            <span>ideax@mbmc.edu.np</span>
                        </ContactItem>
                        <ContactItem>
                            <ImPhoneHangUp />
                            <span>+977-9865522222</span>
                        </ContactItem>
                    </ContactInfo>
                    <SocialIcons>
                        <SocialIconLink href="https://www.facebook.com/mbmcideax?rdid=lQ8Pu4CMnbXaiB7X&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1EVD3kkwqs%2F#"><FaFacebook /></SocialIconLink>
                        <SocialIconLink href="https://www.instagram.com/mbmc_ideax/"><FaInstagram /></SocialIconLink>
                        <SocialIconLink href="https://discord.gg/FDzGSRty"><FaDiscord /></SocialIconLink>
                        <SocialIconLink href="https://www.linkedin.com/company/mbm-ideax/"><FaLinkedin /></SocialIconLink>
                    </SocialIcons>
                </FooterColumn>

                <FooterColumn style={{ alignItems: 'flex-end'}}>
                    <EventSummary>
                     <h2>Event Summary</h2>
                     <p>Mode: In-person</p>
                     <p>Venue: Madan Bhandari College</p>
                     <p>Date: 01th July, 2025</p>
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
