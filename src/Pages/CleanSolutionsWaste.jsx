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
              Over a third of the world’s greenhouse gas emissions come from the production of everyday materials.
              We can reduce these emissions by a significant amount by employing the Waste Management Hierarchy.
              The EPA has developed this Hierarchy (seen on the left) to help show the public that all waste management methods 
              should be used and that one method is not universal. The methods shown on the top are the most preferred and are 
              best for the environment, while ones seen at the bottom aren't as efficient.
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
              Using only as much as you need prevents the materials and effort spent on making products from being wasted. 
              This can be done by many ways such as using products for longer, buying in bulk to reduce packing materials, 
              or by buying products from businesses that use eco-friendly packaging. Reusing products also helps toward 
              lessening your enviromental impact. You can help by donating or using donated goods. Buying secondhand is 
              also a good option. Both of these methods are fully able to either prevent wasting of materials, or recover the 
              full usage of the materials spent, saving both the earth and your pocket.
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
            After reducing and reusing, recycling is the next best option. While some materials and greenhouse gases would be 
            emitted while being recycled, the materials gain a new life in the form of a new product. Many local areas/developments 
            have programs to provide recycling services. While these services do cost money, it's relatively inexpensive. 
            It is important to not that not everything is able to be fully recycled, but recycling still is able to save loads 
            of materials from piling up in our landfills.
            </p>
            <br/>
            <p>
              For more information go to 
              <a href='https://www.epa.gov/recycle/recycling-basics-and-benefits' target="_blank" rel='noreferer'><b> https://www.epa.gov/recycle/recycling-basics-and-benefits</b></a>
            </p>
          </>}/>
        </div>
        <div className="solution">
          <SolutionHeading visual={recycleIconComponent} solutionName="Recycling Electronics" cost={<Cost value="0, but you save lots of valuable materials from the trash"></Cost>}/>
          <TextWrap wrappedSide="right" wrappedElt={<>
            
          </>} textElt={<>
            <p>
              Electronics require a lot of specialized parts to make, and the manufacturing of electronics produces a lot of carbon 
              emissions. By recycling electronics like phones and computers, you save many materials that include precious metals and 
              plastics. Electronics that aren't properly recycled end up in landfills, where the batteries can corrode, leading to 
              massive pollution in our land. The lithium ion batteries must also be properly disposed of, or there is a risk of fire. 
            </p>
            <p>
              The best way to save these materials in the first place is to not buy more electronics than you need. You can update 
              software or repair your devices rather than buy new electronics. If you have to buy a new electronic, make sure to 
              prepare your old device for recycling. This can be done by wiping all personal information on the device and removing 
              the battery if possible. Your township of residence should have instructions on how to recycle old devices. 
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
            The compost produced, when done correctly, is a great fertilizer. Food waste makes up <b>24%</b> of US landfills, which 
            contributes methane to the atmosphere. Composting food and waste instead would allow it to be utilized, reducing emissions, water, and waste.
            </p>
            <p>
              For more information see <a href='https://www.epa.gov/recycle/composting-home' target="_blank" rel='noreferer'><b>https://www.epa.gov/recycle/composting-home</b></a>
            </p>
          </>}/>
        </div>
        <div className="solution">
          <SolutionHeading visual={recycleIconComponent} solutionName="Energy Recovery" cost={<Cost value="0 and you also get cheaper energy"></Cost>}/>
          <TextWrap wrappedSide="right" wrappedElt={<>
            
          </>} textElt={<>
            <p>
            Energy recovery is the conversion of non-recyclable waste into useable energy through a variety of processes 
            including combustion, gasification, pyrolization, and anaerobic digestion. Converting waste into energy generates 
            energy and reduces carbon emissions by offsetting the need for energy from nonrenewable sources. It also reduces the 
            greenhouse gases these materials generate while decomposing in a landfill. After energy is recovered from the waste, 
            the ashes are processed down even more so they can break down safely in the landfills.
            </p>
            <p>
              For more detailed information and statistics go to <a href='https://www.epa.gov/smm/energy-recovery-combustion-municipal-solid-waste-msw' target="_blank" rel='noreferer'><b>https://www.epa.gov/smm/energy-recovery-combustion-municipal-solid-waste-msw </b></a>
            </p>
          </>}/>
        </div>
        <div className="solution">
          <SolutionHeading visual={recycleIconComponent} solutionName="Treatment and Disposal" cost={<Cost value="Possibly increased maintenance costs but better for the Earth in the long run"></Cost>}/>
          <TextWrap wrappedSide="right" wrappedElt={<>
            
          </>} textElt={<>
            <p>
            Some types of waste can be treated to reduce their impact on the enviroment. These treatments include incinerating, 
            anaerobically digesting and shredding waste. The waste is then thrown into landfills. It is a common misconception 
            that landfills are just places for garbage to be thrown. In fact, modern maintained landfills are made with regulations 
            and requirements for waste disposal, which are not like the open pits of the past. These landfills can collect methane 
            to use for energy, and when full, can be converted to useable land for things like parks and other recreational areas.
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