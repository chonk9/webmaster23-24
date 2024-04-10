import React from 'react';
import { Link } from "react-router-dom";
import TextWrap from '../Components/textWrap.js';
import SolutionHeading from '../Components/solutionHeading.js';
import Cost from '../Components/cost.js';
import SunAnimation from '../Components/sunAnimation.js';

import solarPanels from '../Images/solarPanels.webp'

export default function CleanSolutionsHome() {
  return (<>
    <h1>Solar Power</h1>
    <div className="content">
      <div>
        <div className="solution">
          <SolutionHeading visual={SunAnimation} solutionName="Solar Panels" cost={<Cost value="18,000 to 37,000"></Cost>} />
          <TextWrap wrappedSide="left" wrappedElt={<>
            <img src={solarPanels}></img>
          </>} textElt={<>
            <p><b>Solar power</b> converts sunlight into energy. This source of energy is practically infinite and doesn't generate greenhouse gases beyond making them. 
            The carbon footprint made when creating them is expected to go down as recycled materials and cleaner manufacturing are being used by more and more manufacturers of solar panels.
              </p>
            <p> In the long-term, power generation is relatively consistent and relatively are unintrusive as they can easily go onto your roof. 
              However, depending on your latitude, energy generation may fluctuate depending on the season.
              In addition, cloud coverage will affect power generation so energy storage or a backup source of energy may be needed to supplement solar power.</p>
            <p>Many states have incentives for switching to solar, so <Link to="/tax-incentives"><b>check out the map</b></Link> for more cost information.</p>
          </>}/>
        </div>

      </div>
    </div>

  </>);
}