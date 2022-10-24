import React from 'react'
import facebookLogo from '../images/facebookIcon.png'
import twitterLogo from '../images/twitterLogo.png'
import instagramIcon from '../images/instagramIcon.png'
import gitHubIcon from '../images/gitHub.png'


function Footer() {
    return(
        <div className='main-footer'>
            <div className='footer-content'>
                <img src={twitterLogo} alt='twitter icon' className='icons'/>
                <img src={facebookLogo} alt='twitter icon' className='icons'/>
                <img src={instagramIcon} alt='instagram icon' className='icons'/>
                <img src={gitHubIcon} alt='gitHub logo' className='icons'/>
            </div>
        </div>
    )
}

export default Footer;