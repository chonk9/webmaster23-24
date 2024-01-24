import React from 'react'
import Accordion from '../Components/Accordion.js';
export default function AboutUs() {
  return(<>
    <h1>Works Cited</h1>
    <div classname='content'>
      <h1>Sources</h1>
      <div id='sources'>
        <Accordion title='Home Page Videos'>
        <a href='https://www.whitehouse.gov/cleanenergy/'>
            https://www.whitehouse.gov/cleanenergy/
            </a>
            <p>
              (Public Domain)
              <br />
            </p>
            <a href='https://www.dsireusa.org/'>
              https://www.dsireusa.org/
            </a>
            <p>(Public Domain)</p>
        </Accordion>
      </div>
    </div>
  </>);

}