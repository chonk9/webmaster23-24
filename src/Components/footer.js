import React from "react";
import logo from '../Images/testLogo.png'

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

            

        </footer>
    )
}