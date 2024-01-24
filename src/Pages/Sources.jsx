import React from 'react'
import Accordion from '../Components/Accordion.js';
export default function AboutUs() {
  return(<>
    <h1>Works Cited</h1>
    <div classname='content'>
      <h1>Sources</h1>
      <div id='sources'>
        <Accordion title='Home Page Videos'>
        <a href='https://pixabay.com/videos/world-earth-nasa-planet-globe-2/'>
              https://pixabay.com/videos/world-earth-nasa-planet-globe-2/
            </a>
            <p>
              (Public Domain)
              <br />
            </p>
            <a href='https://pixabay.com/photos/cape-canaveral-florida-space-shuttle-79355/'>
              https://pixabay.com/photos/cape-canaveral-florida-space-shuttle-79355/
            </a>
            <p>(Public Domain)</p>
        </Accordion>
      </div>
    </div>
  </>);

}