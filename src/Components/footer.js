import React from 'react';
import '../css/Footer.css';
import logo from '../Images/logo.png';

export default function Footer({ currentYear }) {
  return (
    <footer>
      <a href='/' className='footer-logo-link' aria-label='Logo'>
        <img
          className='footer-logo'
          src={logo}
          alt=''
          height='100'
          width='100'
          style={{verticalAlign: 'middle'}}
        />
        Green Guardians
      </a>
      <ul className='sitemap-container'>
        <li className='sitemap'>
          <p className="bold">Information</p>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/tax-incentives'>Tax Incentives</a>
            </li>
            <li>
              <a href='/sources'>Sources</a>
            </li>
            <li>
              <a
                target='_blank'
                href='https://drive.google.com/file/d/1zOIInsBcFuZbA2Dx0APlY-H2t6GUBu4n/view?usp=sharing' //https://drive.google.com/file/d/1jCtR5-p1o4F2Y_4SVklmRieCoTfL-xr8/view?usp=sharing' 
                rel='noreferrer'
              >
                Documentation
              </a>
            </li>
            <li>
              <a href='/about-us'>
                About Us
              </a>
            </li>
          </ul>
        </li>
        <li className='sitemap'>
          <p className="bold">Solutions</p>
          <ul>
            <li>
              <a href='/clean-solutions/vehicles'>Vehicular Solutions</a>
            </li>
            <li>
              <a href='/clean-solutions/waste'>Waste Solutions</a>
            </li>
            <li>
              <a href='/clean-solutions/solar'>Solar Solutions</a>
            </li>
            <li>
              <a href='/clean-solutions/wind'>Wind Solutions</a>
            </li>
            <li>
              <a href='/clean-solutions/geothermal'>Geothermal Solutions</a>
            </li>
            <li>
              <a href='/clean-solutions/led'>LED Solutions</a>
            </li>
          </ul>
        </li>
        <li className='sitemap'>
          <p className="bold">Contact Us!</p>
          <ul>
            <li>
              <a
                target='_blank'
                href='https://twitter.com/GreenGuardians5'
                rel='noreferrer'
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                target = '_blank'
                href = "mailto: greenguardians2024@gmail.com">
                  Email
                </a>
            </li>
          </ul>
        </li>
      </ul>
      <div className='footer-right'>
        <ul>
          <li>
            <a
              target='_blank'
              href='https://drive.google.com/file/d/1PzRVzHxgXCes--c3eZtT6DuMnAQdI5NP/view?usp=sharing'
              rel='noreferrer'
            >
              Terms of Use
            </a>
          </li>
          <li>
            <a
              href='https://drive.google.com/file/d/1GUqEs_yySuHH8o3znXPNBcVc737uHF1R/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              Privacy Policy
            </a>
          </li>
          <li className='copyright'>
            <p2>© Green Guardians</p2>
          </li>
        </ul>
      </div>
    </footer>
  );
}