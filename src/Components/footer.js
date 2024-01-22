import React from "react";
import logo from '../Images/logo.png'

export default function Footer( {currentYear} ) {
    return(
        <footer>
            <a href = '/' className = 'footer-logo-link' aria-label = 'logo'>
                <img 
                    className='footer-logo'
                    src={logo} 
                    alt=''
                    height='100' 
                    width='100'
                />
            </a>

            <ul className="sitemap-container">
                <li className="sitemap">
                    <p>Information</p>
                    <ul>
                        
                    </ul>
                </li>
            </ul>

        </footer>
    )
}