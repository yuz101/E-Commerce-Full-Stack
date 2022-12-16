import React from 'react'
import { footerLinks, socialMedia } from '../../constants'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='top'>
            {footerLinks.map((footerlink) => (
              <div key={footerlink.title} className='category'>
                <h4>{footerlink.title}</h4>
                <div className='item'>
                  {footerlink.links.map((link) => (
                      <div key={link.name}>
                        <span>{link.name}</span>
                      </div>
                  ))}
                </div>
              </div>
            ))}

            <div className='contact'>
                <h2>Subscribe</h2>
                <div className='email'>
                    <input type="email" placeholder='Email Address'/>
                    <button>Join</button>
                </div>
                <div className='icons'>
                  {socialMedia.map((media) => (
                    <div key={media.id} className='item'>
                      <a className="link" href={media.link}>{media.icon}</a>
                    </div>
                  ))}
                </div>
            </div>
        </div>
        <div className='bottom'>
            <p>YUZUSTORE © Copyright 2023. All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer