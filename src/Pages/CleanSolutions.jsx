import React from 'react';
import WindAnimation from '../Components/windAnimation';
import SunAnimation from '../Components/sunAnimation';
import CarAnimation from '../Components/carAnimation';
import TextWrap from '../Components/textWrap.js';

import homeTurbine from '../Images/homeTurbine.jpg'
import solarPanels from '../Images/solarPanels.webp'
import electricVehicle from '../Images/electric-vehicle.jpg'

export default function CleanSolutions() {
  return (<>
    <h1>Clean Solutions</h1>
    <div className="content">
      <div>
        <h2 className="page-subheading">Home Systems</h2>
        <div className="solution">
          <SolutionHeading visual={WindAnimation} solutionName="Wind Energy Systems" />
        
          <TextWrap wrappedSide="right" wrappedElt={<>
            <img src={homeTurbine}></img>
          </>} textElt={<>
            <p><b>Wind power</b> is created by converting the energy in wind to useable energy. 
            This can be done by using sails, windmills, and more recently, wind turbines.</p>
            <p>Wind power is very sustainable but inconsistent and requires other sources of energy 
              and energy storage to create a reliable stream of energy.</p>
            <p>Check the map to see if your area is suitiable for a wind farm.</p>
          </>}/>
        </div>
        <div className="solution">
          <SolutionHeading visual={SunAnimation} solutionName="Solar Energy Systems" />
          <TextWrap wrappedSide="left" wrappedElt={<>
            <img src={solarPanels}></img>
          </>} textElt={<>
            <p>Solar power converts sunlight into energy via photovoltaic panels or concentration. 
              In the long-term it is relatively constant; 
              however, depending on your latitude, energy generation may fluctuate depending on the season.
              In addition clouds coverage will affect power generation.</p>
            <p>Energy storage or a more reliable source of energy may be needed to supplment solar power.</p>
            <p>Some places may give tax credit if you switch to solar so check out the map for more information.</p>
          </>}/>
        </div>

        <h2 className="page-subheading">Car Systems</h2>
        <div className="solution">
          <SolutionHeading visual={CarAnimation} solutionName="Electric Vehicles" />
          <TextWrap wrappedSide="Right" wrappedElt={<>
            <img src={electricVehicle}></img>
          </>} textElt={<>
            <p><b>Electric Vehicles or 'EVs'</b> use electricity as a power source.
            This can be done with solar panels, by converting fuel into energy with fuel cells or generators, or with a charged battery.</p>
            <p>The advantage with EVs is that they can get energy from a variety of sources instead of just fossil fuels like with traditional vehicles.
              In addition, EVs can also gain energy back by recovering energy from breaking.
            </p>
          </>}/>
        </div>

      </div>
    </div>

  </>);
}

function SolutionHeading({visual: Visual, solutionName}) {
  return (<div style={{display: 'flex', alignItems: 'center'}}>
    <Visual style={{display: 'inline-block', width: '80px'}} />
    <h3 style={{display: 'inline-block', marginBottom: 0, marginLeft: '10px'}}>{solutionName}</h3>
  </div>)
}