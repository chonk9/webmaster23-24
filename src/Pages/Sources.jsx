import React from 'react'
import Accordion from '../Components/Accordion.js';
import '../ComponentStyles/sources.css';

export default function AboutUs() {
  return(<>
    <h1>Works Cited</h1>
    <div classname='content'>
      <h2>Sources</h2>
      <div id='sources'>
        <Accordion title='Information'>
        <a 
          href='https://www.whitehouse.gov/cleanenergy/'
          rel='noreferrer'>
            https://www.whitehouse.gov/cleanenergy/
            </a>
            <p>
              <br />
            </p>
            <a 
              href='https://www.dsireusa.org/'
              rel='noreferrer'>
              https://www.dsireusa.org/
            </a>
            <a 
              href='https://www.epa.gov/recycle/electronics-donation-and-recycling'
              rel='noreferrer'>
              https://www.epa.gov/recycle/electronics-donation-and-recycling
            </a>
        </Accordion>
      </div>
    </div>
  </>);

}