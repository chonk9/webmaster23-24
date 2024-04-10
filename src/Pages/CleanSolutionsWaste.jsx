import React from 'react';
import WindAnimation from '../Components/windAnimation.js';
import SunAnimation from '../Components/sunAnimation.js';
import RecycleIcon from '../Images/RecycleIcon.png'
import CompostBin from '../Images/CompostBin.png'
import TextWrap from '../Components/textWrap.js';
import SolutionHeading from '../Components/solutionHeading.js';
import Cost from '../Components/cost.js'

import compostBin from '../Images/compostbin.jpg'
import recyclingBin from '../Images/recycling-bin.jpg'
import electricVehicle from '../Images/electric-vehicle.jpg'
import '../css/CleanSolutionsWaste.css'
function recycleIconComponent() {
  return <img src={RecycleIcon} style={{width: '70px'}} />
}

function compostIconComponent() {
  return <img src={CompostBin} style={{width: '70px'}} />
}

export default function CleanSolutionsWaste() {
  return (<>
    <h1>Clean Solutions For Waste</h1>
    <div className="content">
      <div>
        <div className="solution">
          <SolutionHeading visual={compostIconComponent} solutionName="Compost Bins" cost={<Cost value="20 to 400 (cost of compost bin)"></Cost>} />
        
          <TextWrap wrappedSide="right" wrappedElt={<>
            <iframe className="youtube-video" width="560" height="315" src="https://www.youtube.com/embed/5Iz-g9G2O4E?si=ELEqzezE1BIjjQnf" title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </>} textElt={<>
            <p><b>Composting</b> is the controlled decomposition of organic materials by using bacteria and other microorganisms. 
            The compost produced, when done correctly, is very good fertilizer for growing plants.
            Food waste makes up <b>24%</b> of US landfills, which contributes methane to the atmosphere through decomposition.
            Composting the food instead would allow it to be utilized and reduce emissions, water, and resource usage.
            </p>
            <p>
              For more information see <a href='https://www.epa.gov/recycle/composting-home' target="_blank" rel='noreferer'><b>https://www.epa.gov/recycle/composting-home</b></a>
            </p>
          </>}/>
        </div>
        
        <div className="solution">
          <SolutionHeading visual={recycleIconComponent} solutionName="Recycling Bins" cost={<Cost value="10 to 30 (cost of recycling bin) + cost of recycling services in your area"></Cost>} />
          <TextWrap wrappedSide="left" wrappedElt={<>
            <img src={recyclingBin}></img>
          </>} textElt={<>
            <p>
              Over a third of the world’s greenhouse gas emissions come from making materials that people use every day.
              We can reduce these emissions by a significant amount when recycling them.
            </p>
            <p>
            Electronics require a lot of specialized parts to make, and the manufacturing of the materials produces a lot of carbon emissions.
              By recycling them, you save many materials such as glass, precious metals, and plastic.
            </p>
            <p>
              For more information go to <a href='https://www.epa.gov/recycle/electronics-donation-and-recycling' target="_blank" rel='noreferer'><b>https://www.epa.gov/recycle/electronics-donation-and-recycling </b></a>
                and <a href='https://www.epa.gov/recycle/recycling-basics-and-benefits' target="_blank" rel='noreferer'><b>https://www.epa.gov/recycle/recycling-basics-and-benefits</b></a>
            </p>
          </>}/>
        </div>
      </div>
    </div>

  </>);
}