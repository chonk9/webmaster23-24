import React from 'react';
import WindAnimation from '../Components/windAnimation.js';
import SunAnimation from '../Components/sunAnimation.js';
import RecycleIcon from '../Images/RecycleIcon.png'
import CompostBin from '../Images/CompostBin.png'
import TextWrap from '../Components/textWrap.js';

import compostBin from '../Images/compostbin.jpg'
import recyclingBin from '../Images/recycling-bin.jpg'
import electricVehicle from '../Images/electric-vehicle.jpg'

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
        <h2 className="page-subheading">Waste Systems</h2>
        <div className="solution">
          <SolutionHeading visual={compostIconComponent} solutionName="Compost Bins" />
        
          <TextWrap wrappedSide="right" wrappedElt={<>
            <img src={compostBin}></img>
          </>} textElt={<>
            Composting is the controlled decomposition of organic materials by using bacteria and other microorganisms. 
            The compost that forms is very good for growing plants when done correctly.
            Food waste makes up <b>24%</b> of US landfills.
            Composting food would allow this food to be utilized more and reduce emissions, water, and resource usage.
            <br/>
            For more information go to <a href='https://www.epa.gov/recycle/composting-home' rel='noreferer'>https://www.epa.gov/recycle/composting-home</a>
          </>}/>
        </div>
        
        <div className="solution">
          <SolutionHeading visual={recycleIconComponent} solutionName="Recycling Bins" />
          <TextWrap wrappedSide="left" wrappedElt={<>
            <img src={recyclingBin}></img>
          </>} textElt={<>
            Over a third of the world’s greenhouse gas emissions come from making materials that people use every day.
            We can reduce these emissions by a significant amount when recycling them.
            Electronics require a lot of specialized parts to make and the manufacturing of the materials contribute a lot of carbon.
            By recycling them, you save a lot of materials like glass, precious metals, and plastic.
            <br/>
            For more information go to <a href='https://www.epa.gov/recycle/electronics-donation-and-recycling' rel='noreferer'>https://www.epa.gov/recycle/electronics-donation-and-recycling</a>
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