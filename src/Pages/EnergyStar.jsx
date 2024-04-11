import React from 'react';
import { Link } from "react-router-dom";
import TextWrap from '../Components/textWrap.js';
import SolutionHeading from '../Components/solutionHeading.js';
import '../css/energyStar.css';

import Star from '../Images/EnergyStar.png'


export default function EnergyStar() {
  return (<>
    <h1>Energy Star </h1>
    <div className="content">
      <div>
        <div className="solution">
          <TextWrap wrappedSide="left" wrappedElt={<>
            <img src={Star}></img>
          </>} textElt={<>
            <p><b>ENERGY STAR®</b> is run by the Department of Energy and Environmental Protection Agency which promotes energy efficiency in products.
            The goal is to help everyone (consumer, commercial, and industry) protect the environment and save on costs through the adoption and use of energy-efficient products and practices. 
            The Energy Star label certifies environmentally friendly and cost-effective products, homes, and buildings.
            </p>
            <p>
            There are millions of Energy Star certified products, homes, apartments, buildings, and industrial plants across the US. 
            Energy Star rebate programs reach 95% of American households.
            Energy Star has reduced 4 billion tons of greenhouse gas from being emitted and provided $500 billion in cost savings.
            </p>
            <p>
            Energy Star has five key areas listed on its website:
            </p>
            <ul>
              <li>
              Products &#8212; Lists and labeled products from manufacturers and retailers that meet Energy Star standards.
              </li>
              <li>
              Existing Homes &#8212; Provides guides on making energy efficiency improvements to households and helping households switch to alternative energy solutions.
              </li>
              <li>
              New Homes &#8212; Certifies new homes and apartments built that meet Energy Star standards.
              </li>
              <li>
              Commercial Buildings &#8212; Certifies commercial buildings that meet Energy Star standards.
              </li>
              <li>
              Industrial Plants &#8212; Provides resources to help industrial buildings meet Energy Star standards.
              </li>
            </ul>
            <br/>
            <p>For more information go to <a href='https://www.energystar.gov/' target="_blank" rel='noreferer'><b>https://www.energystar.gov/</b></a></p>
          </>}/>
        </div>

      </div>
    </div>

  </>);
}