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
import triangle from '../Images/wastemanagement.png'
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
          <SolutionHeading visual={recycleIconComponent} solutionName="Waste Management Hierarchy" cost={<Cost value="Depends on method used"></Cost>}/>
          <TextWrap wrappedSide="left" wrappedElt={<> <img src={triangle}></img>
          </>} 
          textElt={<>
            <p>
              Over a third of the world’s greenhouse gas emissions come from making materials that people use every day.
              We can reduce these emissions by a significant amount by using the Waste Management Hierarchy.
              The EPA has developed this Hierarchy seen on the left to help show the public that all waste management methods should be used and that one method is not universal.
              The methods at the top are the most preferred and are the best for the environment.
            </p>
            <br/>
            <p>
              The hierarchy can be seen here at
              <a href='https://www.epa.gov/smm/sustainable-materials-management-non-hazardous-materials-and-waste-management-hierarchy' target="_blank" rel='noreferer'><b> https://www.epa.gov/smm/sustainable-materials-management-non-hazardous-materials-and-waste-management-hierarchy</b></a>
            </p>
          </>}/>
        </div>
        <div className="solution">
          <SolutionHeading visual={recycleIconComponent} solutionName="Reducing and Reusing" cost={<Cost value="The money saved on not buying new products"></Cost>} />
          <TextWrap wrappedSide="left" wrappedElt={<>
          </>} textElt={<>
            <p>
              Lessening usage prevents the materials and effort spent on making the products in the first place. 
              This can be done in many ways such as using products for longer, buying in bulk to reduce packing materials, or in buying products from businesses that are reducing materials spent on manufacturing.
              Reusing products also helps a lot toward lessening your environmental impact. You can help by donating or using donated goods. Buying secondhand is also a good option.
              Both of these methods are fully able to either prevent or recover the full use of the materials spent.
            </p>
            <br/>
            <p>
              For additional information go to 
              <a href='https://www.epa.gov/recycle/reducing-and-reusing-basics' target="_blank" rel='noreferer'><b> https://www.epa.gov/recycle/reducing-and-reusing-basics</b></a>
            </p>
          </>}/>
        </div>
        <div className="solution">
          <SolutionHeading visual={recycleIconComponent} solutionName="Recycling" cost={<Cost value="10 to 30 (cost of recycling bin) + cost of recycling services in your area"></Cost>} />
          <TextWrap wrappedSide="left" wrappedElt={<>
            <iframe className = 'youtube-video' width="560" height="315" src="https://www.youtube.com/embed/nl4HCnIoFJs?si=Daw_E7f0g50LdYe4" title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </>} textElt={<>
            <p>
            After reducing and reusing, recycling is the next best option. 
            While some materials and greenhouse gases would be used/emitted, the materials gain a new life in the form of a new product.
            Many local areas have programs to give recycling bins and guides to help you know what can be recycled.
            While not everything can be fully recycled, recycling still can save loads of materials and greenhouse gases.
            </p>
            <br/>
            <p>
              For more information go to 
              <a href='https://www.epa.gov/recycle/recycling-basics-and-benefits' target="_blank" rel='noreferer'><b> https://www.epa.gov/recycle/recycling-basics-and-benefits</b></a>
            </p>
          </>}/>
        </div>
        <div className="solution">
          <SolutionHeading visual={recycleIconComponent} solutionName="Recycling Electronics" />
          <TextWrap wrappedSide="right" wrappedElt={<>
            
          </>} textElt={<>
            <p>
              Electronics require a lot of specialized parts to make, and the manufacturing of the materials produces a lot of carbon emissions.
              By recycling them, you save many materials such as glass, precious metals, and plastic. It also saves on the fuel and effort used plus the pollution produced during manufacturing and shipping.
            </p>
            <p>
              The best way to save these materials in the first place is to not buy more electronics. If possible, you can update software or repair your devices first rather than buying a new one.
              If you have to buy a new electronic, make sure to prepare your old device for recycling. This can be done by wiping all personal information on the device and removing the battery if possible.
              Then check the surrounding area for facilities to recycle it.
            </p>
            <p>
              For more information go to <a href='https://www.epa.gov/recycle/electronics-donation-and-recycling' target="_blank" rel='noreferer'><b>https://www.epa.gov/recycle/electronics-donation-and-recycling </b></a>
            </p>
          </>}/>
        </div>
        <div className="solution">
          <SolutionHeading visual={compostIconComponent} solutionName="Compost Bins" cost={<Cost value="20 to 400 (cost of compost bin)"></Cost>} />
        
          <TextWrap wrappedSide="right" wrappedElt={<>
            <iframe className="youtube-video" width="560" height="315" src="https://www.youtube.com/embed/5Iz-g9G2O4E?si=ELEqzezE1BIjjQnf" title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </>} textElt={<>
            <p><b>Composting</b> is the controlled decomposition of organic materials by using bacteria and other microorganisms. 
            The compost produced, when done correctly, is a very good fertilizer for growing plants.
            Food waste makes up <b>24%</b> of US landfills, which contributes methane to the atmosphere through decomposition.
            Composting the food instead would allow it to be utilized and reduce emissions, water, and resource usage.
            </p>
            <p>
              For more information see <a href='https://www.epa.gov/recycle/composting-home' target="_blank" rel='noreferer'><b>https://www.epa.gov/recycle/composting-home</b></a>
            </p>
          </>}/>
        </div>
        <div className="solution">
          <SolutionHeading visual={compostIconComponent} solutionName="Energy Recovery" />
          <TextWrap wrappedSide="right" wrappedElt={<>
            
          </>} textElt={<>
            <p>
            Energy recovery is the conversion of non-recyclable waste into usable energy through a variety of processes, including combustion, gasification, pyrolization, and anaerobic digestion.
            Converting these materials into energy generates energy and reduces carbon emissions by offsetting the need for energy from nonrenewable sources and also reduces the potential greenhouse gases these materials could generate while decomposing. 
            After energy is recovered the ashes are sent to a landfill.
            </p>
            <p>
              For more detailed information and statistics go to <a href='https://www.epa.gov/smm/energy-recovery-combustion-municipal-solid-waste-msw' target="_blank" rel='noreferer'><b>https://www.epa.gov/smm/energy-recovery-combustion-municipal-solid-waste-msw </b></a>
            </p>
          </>}/>
        </div>
        <div className="solution">
          <SolutionHeading visual={compostIconComponent} solutionName="Treatment and Disposal" />
          <TextWrap wrappedSide="right" wrappedElt={<>
            
          </>} textElt={<>
            <p>
            Some types of waste and be treated to reduce their impact on the environment. These treatments could be incinerating, anaerobic digesting, or even shredding the waste.
            Next, the waste is then thrown into landfills. Landfills are not just places for garbage to be thrown into. Modern maintained landfills are made with regulations and requirements for waste disposal.
            These are not like the open pits of the past. These landfills can collect methane to use for energy, and when full, can be converted to useable land for things like parks and other outdoor areas.
            </p>
            <p>
              If you want to learn more about modern landfills go to <a href='https://www.epa.gov/landfills' target="_blank" rel='noreferer'><b>https://www.epa.gov/landfills </b></a>
            </p>
          </>}/>
        </div>
      </div>
    </div>

  </>);
}