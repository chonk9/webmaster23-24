import React from 'react';
import WindAnimation from '../Components/windAnimation.js';
import SunAnimation from '../Components/sunAnimation.js';
import CarAnimation from '../Components/carAnimation.js';
import TextWrap from '../Components/textWrap.js';
import SolutionHeading from '../Components/solutionHeading.js';

import electricVehicle from '../Images/electric-vehicle.jpg'
import steeringWheelIcon from '../Images/carSteeringWheel.png';

function steeringWheelIconComponent() {
  return <img src={steeringWheelIcon} style={{width: '60px'}} />
}

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
            <p><b>Electric Vehicles or 'EVs'</b> use electricity as a power source.
            This can be done with solar panels, by converting fuel into energy with fuel cells or generators, or with a charged battery.</p>
            <p>The advantage with EVs is that they can get energy from a variety of sources instead of just fossil fuels like with traditional vehicles.
              In addition, EVs can also gain energy back by recovering energy from breaking.
            </p>
          </>}/>
        </div>

        <div className="solution">
          <SolutionHeading visual={steeringWheelIconComponent} solutionName="Floor Mats & Accessories" />
          <TextWrap wrappedSide="Left" wrappedElt={<>
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