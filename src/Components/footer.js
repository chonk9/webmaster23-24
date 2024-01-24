import React from 'react';
import '../ComponentStyles/Footer.css';
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
        />
        Green Guardians
      </a>
      <ul className='sitemap-container'>
        <li className='sitemap'>
          <p class="bold">Information</p>
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
                href='https://docs.google.com/document/d/e/2PACX-1vQrboS3DrLbHX5K3fQ4lIgNj_WWYRTQfph2ieKPjxb8SOZPs62EYUTXUIwnhXk5ADXEdWYBLC5Z_UQR/pub' //https://drive.google.com/file/d/1jCtR5-p1o4F2Y_4SVklmRieCoTfL-xr8/view?usp=sharing' 
                rel='noreferrer'
              >
                Documentation
              </a>
            </li>
          </ul>
        </li>
        <li className='sitemap'>
          <p class="bold">Solutions</p>
          <ul>
            <li>
              <a href='/clean-solutions-home'>Home Solutions</a>
            </li>
            <li>
              <a href='/clean-solutions-vehicles'>Vehicular Solutions</a>
            </li>
            <li>
              <a href='/clean-solutions-waste'>Waste Solutions</a>
            </li>
          </ul>
        </li>
        <li className='sitemap'>
          <p class="bold">Contact Us!</p>
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
              href='https://drive.google.com/file/d/1m4CfLg5RNU-1KcHG6czoMFThQESgLDOz/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              Privacy Policy
            </a>
          </li>
          <li className='copyright'>
            <p>© Green Guardians</p>
          </li>
        </ul>
      </div>
    </footer>
  );
}