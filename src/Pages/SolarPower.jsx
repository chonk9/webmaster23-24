import React from 'react';
import { Link } from "react-router-dom";
import TextWrap from '../Components/textWrap.js';
import SolutionHeading from '../Components/solutionHeading.js';
import Cost from '../Components/cost.js';
import SunAnimation from '../Components/sunAnimation.js';

import solarPanels from '../Images/solarPanels.webp'

export default function CleanSolutionsSolar() {
  return (<>
    <h1>Solar Power</h1>
    <div className="content">
      <div>
        <div className="solution">
          <SolutionHeading visual={SunAnimation} solutionName="Solar Panels" cost={<Cost value="18,000 to 37,000 to install solar panels"></Cost>} />
          <TextWrap wrappedSide="left" wrappedElt={<>
            <iframe className= 'youtube-video' width="560" height="315" src="https://www.youtube.com/embed/WUVxi2bQDCE?si=DAG2tu8BUPKWsQ8X" title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </>} textElt={<>
            <p><b>Solar power</b> converts sunlight into energy. This source of energy is practically infinite and doesn't 
            generate greenhouse gases beyond the making the solar panels. The carbon footprint made when creating them is expected 
            to go down as recycled materials and cleaner manufacturing practices are being adopted by the manufacturers of solar panels.
            You can save lots of money and the Earth by switching to solar energy!
              </p>
            <p> In the long-term, power generation is relatively consistent and relatively unintrusive as the panels go on your roof. 
              Depending on your latitude, energy generation may fluctuate depending on the season and climate. In addition, cloud cover 
              can affect power generation, so having batteries or a backup energy source may be needed to supplement power from solar panels.</p>
            <p>Many states have incentives for switching to solar power, so <Link to="/tax-incentives"><b>check out the map</b></Link> for more information/incentives.</p>
          </>}/>
        </div>

      </div>
    </div>

  </>);
}