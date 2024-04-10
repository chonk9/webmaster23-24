import React from 'react';
import { Link } from "react-router-dom";
import TextWrap from '../Components/textWrap.js';
import SolutionHeading from '../Components/solutionHeading.js';
import Cost from '../Components/cost.js';

import windTurbine from '../Images/windFarm.jpg'

export default function CleanSolutionsHome() {
  return (<>
    <h1>Wind Power</h1>
    <div className="content">
      <div>
        <div className="solution">
          <TextWrap wrappedSide="left" wrappedElt={<>
            <img src={windTurbine}></img>
          </>} textElt={<>
            <p><b>Wind power</b> is created by converting the energy in wind to useable energy. 
            This can be done by using sails, windmills, and more recently, wind turbines.</p>
            <p>Wind power is very sustainable but inconsistent and requires other sources of energy 
              and energy storage to create a reliable stream of energy.</p>
            <p>While the construction of wind turbines release greenhouse gases and can disrupt local wildlife,
              responsible construction greatly mitigates both issues.
            </p>
            <p>While it's not feasable for the average consumer to change their energy source to wind power,
              you can always petition your local or state government to adopt wind power.
            </p>
          
          </>}/>
        </div>

      </div>
    </div>

  </>);
}