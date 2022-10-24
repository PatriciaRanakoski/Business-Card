import React from 'react'
import photo from '../images/myphoto.png'
import mail from '../images/Mail.png'
import linkedIn from '../images/linkedin.png'

function Info() {
    return (  
            <div className='info-content'>
                <img src={photo} alt="Patricia" className='my-image' />
                <h3 className='my-name'>Patricia Ranakoski</h3>
                <h4>Frontend Developer</h4>
                <h5>ranakoskipatricia@gmail.com</h5>
            <div className='buttons'>
                <button className='email-btn'>
                    <img src={mail} alt='mail letter' className='mail-icon'/>
                    <span>Email</span>
                </button>
                <button className='linkedin-btn'>
                    <img src={linkedIn} alt='linked in logo' className='linkedin-icon'/>
                    <span>LinkedIn</span>
                </button>
            </div>
            </div>
    )
}

export default Info







