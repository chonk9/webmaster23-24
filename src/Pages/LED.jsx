import React from 'react';
import { Link } from "react-router-dom";
import TextWrap from '../Components/textWrap.js';
import SolutionHeading from '../Components/solutionHeading.js';
import Cost from '../Components/cost.js';
import ledBulb from '../Images/led-lamp.png';
function ledIconComponent() {
  return <img src={ledBulb} style={{width: '70px'}} />
}

export default function CleanSolutionsLed() {
  return (<>
    <h1>LED Lightbulbs</h1>
    <div className="content">
      <div>
        <div className="solution">
          <SolutionHeading visual={ledIconComponent} solutionName="LED Lightbulbs" cost={<Cost value="1.26 per lightbulb per year (plus costs for the lightbulbs)"></Cost>} />
          <TextWrap wrappedSide="left" wrappedElt={<>
            <iframe className='youtube-video' width="560" height="315" src="https://www.youtube.com/embed/xanYJ79kjMc?si=8sFty151LkJkAKLU" title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </>} textElt={<>
            <p><b>LED</b> lightbulbs waste less energy on producing UV rays and heat,, which produces light up to 90% more 
            efficiently than your typical incandescent light bulbs. In addition to being more efficient, they last way longer and
            don't suddenly fail in the way incandescent and compact fluorescent lightbulbs do. Instead, they experience "lumen deprecation" which 
            means that they gradually become dimmer. The thermal energy LEDs produce is absorbed into a heat sink which improves 
            their performance and longevity.</p>
          </>}/>
        </div>

      </div>
    </div>

  </>);
}