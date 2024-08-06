import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'

const footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={logo} alt='Logo' />
                <p>SHOPZILLA</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Office</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-copyright">
                <hr/>
                <p>Copyright @ 2024 - All Right Reserved</p>
            </div>
        </div>
    )
}

export default footer
