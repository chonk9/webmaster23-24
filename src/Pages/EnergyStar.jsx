import React from 'react';
import { Link } from "react-router-dom";
import TextWrap from '../Components/textWrap.js';
import SolutionHeading from '../Components/solutionHeading.js';

import Star from '../Images/EnergyStar.png'


export default function CleanSolutionsHome() {
  return (<>
    <h1>Energy Star </h1>
    <div className="content">
      <div>
        <div className="solution">
          <TextWrap wrappedSide="left" wrappedElt={<>
            <img src={Star}></img>
          </>} textElt={<>
            <p><b>ENERGY STAR®</b> is run by the Department of Energy and Enviromental Protection Agency which promotes energy efficiency in products.
            The goal is to help everyone (consumer, commerical, and industry) protect the environment and save on costs through the adoption and use of energy-efficient products and practices. 
            The Energy Star label certifies enviromentally friendly and cost-effective products, homes, and buildings.
            </p>
            <p>
            There are millions of Energy Star certified products, homes, apartments, buildings, and industrial plants across the US. 
            Energy Star rebate programs reach 95% of American households.
            Energy Star has reduced 4 billion tons of greenhouse gas from being emitted and provided $500 billion in cost savings.
            </p>
            <p>
            Energy Star has 5 key areas listed on their website:
            </p>
            <p>
            Products-Lists and lables products from manufacturers and retailers that meet Energy Star standards.
            </p>
            <p>
            Existing Homes-Provides guides on making energy efficiency improvements to households and helping households switch to alternative energy solutions.
            </p>
            <p>
            New Homes-Certifies new homes and apartments built that meet Energy Star standards.
            </p>
            <p>
            Commercial Buildings-Certifies commercial buildings that meet Energy Star standards.
            </p>
            <p>
            Industrial Plants-Provides resources to help industrial buildings meet Energy Star standards.
            </p>
          
          </>}/>
        </div>

      </div>
    </div>

  </>);
}