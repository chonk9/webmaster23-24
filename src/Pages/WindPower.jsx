import React from 'react';
import { Link } from "react-router-dom";
import TextWrap from '../Components/textWrap.js';
import SolutionHeading from '../Components/solutionHeading.js';
import Cost from '../Components/cost.js';
import WindAnimation from '../Components/windAnimation.js';

import homeTurbine from '../Images/homeTurbine.jpg'

export default function CleanSolutionsHome() {
  return (<>
    <h1>Wind Power</h1>
    <div className="content">
      <div>
        <div className="solution">
        <SolutionHeading visual={WindAnimation} solutionName="Wind Power" cost={<Cost value="3,000 to 5,000 per kW of power capacity ($15K to $75K total)"></Cost>} />
          <TextWrap wrappedSide="left" wrappedElt={<>
            <img src={homeTurbine}></img>
          </>} textElt={<>
            <p><b>Wind power</b> is created by converting the energy in wind to useable energy. 
            This can be done by using sails, windmills, and more recently, wind turbines.</p>
            <p>Wind power is very sustainable but inconsistent and requires other sources of energy 
              and energy storage to create a reliable stream of energy.</p>
            <p>Personal wind turbines to power individual houses are becoming increasingly popular because they are effective alternatives to solar panels. 
              These turbines take up little space on your property and may generate a significant fraction of the power you use in a day.
              In addition, you can always petition your local or state government to adopt wind power.
            </p>
          
          </>}/>
        </div>

      </div>
    </div>

  </>);
}