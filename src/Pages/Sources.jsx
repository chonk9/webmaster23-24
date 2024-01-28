import React from 'react'
import Accordion from '../Components/Accordion.js';
import '../ComponentStyles/sources.css';

export default function AboutUs() {
  return(<>
    <h1>Works Cited</h1>
    <div classname='content'>
      <h2 href = 'https://drive.google.com/file/d/1Tpmt1L-KdeBobpTXHE_LaydE_HSHLC8p/view?usp=sharing'>Sources</h2>
      <div id='sources'>
        <br></br>
        <Accordion title='Information'>
          <li>
            The White House. "Clean Energy." https://www.whitehouse.gov/cleanenergy/.
          </li>
          <li>
            Database of State Incentives for Renewables & Efficiency (DSIRE). https://www.dsireusa.org/.
          </li>
          <li>
            U.S. Department of Energy. "Planning for Home Renewable Energy Systems." Energy Saver. https://www.energy.gov/energysaver/planning-home-renewable-energy-systems.
          </li>
          <li>
            CNET. "Solar Power - Getty Images." https://www.cnet.com/a/img/resize/bbcdbdb37048b08b6a0b14975c9ea5fc4041b7f5/hub/2022/10/10/f2ff9ef7-f016-459d-b88a-a8a68270c315/solar-gettyimages-525206743.jpg?/’auto=webp&fit=crop&height=1200&width=1200.
          </li>
          <li>
            ENERGY STAR. "Federal Tax Credits for Energy Efficiency." https://www.energystar.gov/ABOUT/FEDERAL_TAX_CREDITS#:~:text=Homeowners%20Can%20Save%20Up%20to,by%20up%20to%2030%20percent.
          </li>
          <li>
            Keep Phoenix Beautiful. "Environmental Fun Facts." https://kpwb.org/environmental-fun-facts-2/.
          </li>
          <li>
            Wisconsin Department of Natural Resources. "Climate Change - Science." https://dnr.wisconsin.gov/climatechange/science.
          </li>
        </Accordion>

        <br></br>
        <br></br>

        <Accordion title='Assets'>
          <li>
            ArcGIS Hub. "Explore Renewable Energy Datasets." https://hub.arcgis.com/datasets/1612d351695b467eba75fdf82c10884f/explore.
          </li>
          <li>
            CleanPNG. "Renewable Energy Solar Energy Leaf." https://www.cleanpng.com/png-renewable-energy-solar-energy-leaf-renewable-resou-7189403/.
          </li>
          <li>
            Treehugger. "Wind Turbine Generator on House Roof." https://www.treehugger.com/thmb/naVuekeUWT-HsmYE1LietPFGCJI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/wind-turbine-generator-on-house-roof-90967703-b9619befbf954726ae92dfb6154711f2.jpg.
          </li>
          <li>
            Bureau of Labor Statistics (BLS). "Electric Vehicles Main Image." https://www.bls.gov/opub/btn/volume-12/images/electric-vehicles-main-image.jpg.
          </li>
          <li>
            Salter Spiral Stair. "Energy-Efficient Home." https://www.salterspiralstair.com/wp-content/uploads/2021/11/opening-image-1.jpg.
          </li>
          <li>
            Wikipedia Commons. "Recycle Icon." https://en.wikipedia.org/wiki/File:Recycle001.svg.
          </li>
          <li target = '_blank' href = 'https://amazingarchitecture.com/articles/how-to-make-your-home-more-energy-efficient-and-futuristic'>
          Amazing Architecture. "How to Make Your Home More Energy Efficient and Futuristic." https://amazingarchitecture.com/articles/how-to-make-your-home-more-energy-efficient-and-futuristic.
          </li>
        </Accordion>

        <br></br>
        <br></br>

        <Accordion title='Webmaster Documentation'>
          <a
            target = '_blank'
            href = 'https://drive.google.com/file/d/1Tpmt1L-KdeBobpTXHE_LaydE_HSHLC8p/view?usp=sharing'
            >
            Webmaster Documentation
          </a>
        </Accordion>
        <br></br>

      </div>
    </div>
  </>);

}