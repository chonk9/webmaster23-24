import React from 'react';
import WindAnimation from '../Components/windAnimation.js';
import SunAnimation from '../Components/sunAnimation.js';
import CarAnimation from '../Components/carAnimation.js';
import TextWrap from '../Components/textWrap.js';
import SolutionHeading from '../Components/solutionHeading.js';

import homeTurbine from '../Images/homeTurbine.jpg'
import solarPanels from '../Images/solarPanels.webp'
import electricVehicle from '../Images/electric-vehicle.jpg'

export default function CleanSolutionsHome() {
  return (<>
    <h1>Clean Solutions At Home</h1>
    <div className="content">
      <div>
        <div className="solution">
          <SolutionHeading visual={WindAnimation} solutionName="Wind Energy Systems" />
        
          <TextWrap wrappedSide="right" wrappedElt={<>
            <img src={homeTurbine}></img>
          </>} textElt={<>
            <p><b>Wind power</b> is created by converting the energy in wind to useable energy. 
            This can be done by using sails, windmills, and more recently, wind turbines.</p>
            <p>Wind power is very sustainable but inconsistent and requires other sources of energy 
              and energy storage to create a reliable stream of energy.</p>
            <p>Check the map to see if your area has incentives for switching to wind power.</p>
          </>}/>
        </div>
        <div className="solution">
          <SolutionHeading visual={SunAnimation} solutionName="Solar Energy Systems" />
          <TextWrap wrappedSide="left" wrappedElt={<>
            <img src={solarPanels}></img>
          </>} textElt={<>
            <p><b>Solar power</b> converts sunlight into energy via photovoltaic panels or concentration. 
              In the long-term it is relatively constant; 
              however, depending on your latitude, energy generation may fluctuate depending on the season.
              In addition, cloud coverage will affect power generation.</p>
            <p>Energy storage or a more reliable source of energy may be needed to supplement solar power.</p>
            <p>Some states may have incentives for switching to solar so check out the map for more information.</p>
          </>}/>
        </div>

      </div>
    </div>

  </>);
}