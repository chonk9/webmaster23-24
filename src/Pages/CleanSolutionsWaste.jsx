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
          <SolutionHeading visual={compostIconComponent} solutionName="Compost Bins" />
        
          <TextWrap wrappedSide="right" wrappedElt={<>
            <img src={compostBin}></img>
          </>} textElt={<>
            <p><b>Composting</b> is the controlled decomposition of organic materials by using bacteria and other microorganisms. 
            The compost produced, when done correctly, is very good fertilizer for growing plants.
            Food waste makes up <b>24%</b> of US landfills. Which then contributes methane to the atmosphere from decomposition.
            Composting the food instead would allow this food to be utilized and reduce emissions, water, and resource usage.
            </p>
            <p>
              For more information see <a href='https://www.epa.gov/recycle/composting-home' target="_blank" rel='noreferer'><b>https://www.epa.gov/recycle/composting-home</b></a>
            </p>

            <Cost value="20 to 400 (cost of compost bin)"></Cost>
          </>}/>
        </div>
        
        <div className="solution">
          <SolutionHeading visual={recycleIconComponent} solutionName="Recycling Bins" />
          <TextWrap wrappedSide="left" wrappedElt={<>
            <img src={recyclingBin}></img>
          </>} textElt={<>
            <p>
              Over a third of the world’s greenhouse gas emissions come from making materials that people use every day.
              We can reduce these emissions by a significant amount when recycling them.
              Electronics require a lot of specialized parts to make and the manufacturing of the materials contribute a lot of carbon.
              By recycling them, you save a lot of materials like glass, precious metals, and plastic.
            </p>
            <p>
              For more information go to <a href='https://www.epa.gov/recycle/electronics-donation-and-recycling' target="_blank" rel='noreferer'><b>https://www.epa.gov/recycle/electronics-donation-and-recycling </b></a>
                and <a href='https://www.epa.gov/recycle/recycling-basics-and-benefits' target="_blank" rel='noreferer'><b>https://www.epa.gov/recycle/recycling-basics-and-benefits</b></a>
            </p>

            <Cost value="10 to 30 (cost of recycling bin)"></Cost>
          </>}/>
        </div>
      </div>
    </div>

  </>);
}