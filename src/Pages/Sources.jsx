import React from 'react'
import Accordion from '../Components/Accordion.js';
export default function AboutUs() {
  return(<>
    <h1>Sources</h1>
    <div classname='content'>
      <div id='sources'>
        <Accordion title='Information'>
        <a class="cite" href='https://www.whitehouse.gov/cleanenergy/'>
            https://www.whitehouse.gov/cleanenergy/
            </a>
            <p>
              <br />
            </p>
            <a class="cite" href='https://www.dsireusa.org/'>
              https://www.dsireusa.org/
            </a>
        </Accordion>
      </div>
      <div id='Images'>
        <Accordion title='Images'>
        <a class="cite" href='https://www.whitehouse.gov/cleanenergy/'>
            https://www.whitehouse.gov/cleanenergy/
            </a>
            <p>
              <br />
            </p>
            <a class="cite" href='https://www.dsireusa.org/'>
              https://www.dsireusa.org/
            </a>
        </Accordion>
      </div>
    </div>
  </>);

}