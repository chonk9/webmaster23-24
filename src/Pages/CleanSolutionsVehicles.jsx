import React from 'react';
import WindAnimation from '../Components/windAnimation.js';
import SunAnimation from '../Components/sunAnimation.js';
import CarAnimation from '../Components/carAnimation.js';
import TextWrap from '../Components/textWrap.js';

import homeTurbine from '../Images/homeTurbine.jpg'
import solarPanels from '../Images/solarPanels.webp'
import electricVehicle from '../Images/electric-vehicle.jpg'

export default function CleanSolutionsVehicles() {
  return (<>
    <h1>Clean Solutions</h1>
    <div className="content">
      <div>
        <h2 className="page-subheading">Vehicle Systems</h2>
        <div className="solution">
          <SolutionHeading visual={CarAnimation} solutionName="Electric Vehicles" />
          <TextWrap wrappedSide="Right" wrappedElt={<>
            <img src={electricVehicle}></img>
          </>} textElt={<>
            <p>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
            <p>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
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