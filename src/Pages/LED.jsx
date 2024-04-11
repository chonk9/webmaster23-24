import React from 'react';
import { Link } from "react-router-dom";
import TextWrap from '../Components/textWrap.js';
import SolutionHeading from '../Components/solutionHeading.js';
import Cost from '../Components/cost.js';
import ledBulb from '../Images/led-bulb.png';

import LED from '../Images/LED.jpg'

function ledIconComponent() {
  return <img src={ledBulb} style={{width: '70px'}} />
}

export default function CleanSolutionsLed() {
  return (<>
    <h1>LED Lightbulbs</h1>
    <div className="content">
      <div>
        <div className="solution">
          <SolutionHeading visual={ledIconComponent} solutionName="LED Lightbulbs" cost={<Cost value="1.20 per lightbulb per year (plus costs for the lightbulbs)"></Cost>} />
          <TextWrap wrappedSide="left" wrappedElt={<>
            <img src={LED}></img>
          </>} textElt={<>
            <p><b>LED</b> lightbulbs waste less energy on producing UV rays and heat alongside light, which makes them produce light up to 90% more efficiently than incandescent light bulbs.
            In addition to being more efficient, they last way longer and they don't suddenly fail in the way incandescent and CFLs do. 
            Rather they experience "Lumen Deprecation" which means that they gradually become dimmer.
            The heat LEDs produce is absorbed into a heat sink which improves their performance and longevity.</p>
          </>}/>
        </div>

      </div>
    </div>

  </>);
}