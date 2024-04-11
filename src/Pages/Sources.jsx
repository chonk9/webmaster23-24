import React from 'react'
import Accordion from '../Components/Accordion.js';
import '../css/sources.css';

export default function Sources() {
  const sources=[
    "https://www.whitehouse.gov/cleanenergy/",
    "https://www.dsireusa.org/",
    "https://www.energystar.gov/about/how-energy-star-works",
    "https://www.energy.gov/eere/buildings/energy-starr"
  ];
  const propSources=[
    "https://www.energy.gov/energysaver/planning-home-renewable-energy-systems",
    "https://www.energystar.gov/ABOUT/FEDERAL_TAX_CREDITS",
    "https://kpwb.org/environmental-fun-facts-2/",
    "https://dnr.wisconsin.gov/climatechange/science",
    "https://www.energysage.com/about-clean-energy/wind/small-wind-turbines-overview/",
    "https://www.wsj.com/buyside/personal-finance/solar-panel-costs-7b343ca2",
    "https://www.forbes.com/home-improvement/hvac/geothermal-heating-cooling-systems-cost/",
    "https://www.britannica.com/science/geothermal-energy",
    "https://www.energy.gov/energysaver/choosing-and-installing-geothermal-heat-pump-system",
    "https://www.energy.gov/energysaver/geothermal-heat-pumps"
  ];
  const vehicleSources=[
    "https://www.epa.gov/transportation-air-pollution-and-climate-change/what-you-can-do-reduce-pollution-vehicles-and",
    "https://www.cars.com/articles/here-are-the-11-cheapest-electric-vehicles-you-can-buy-439849/",
    "https://www.irs.gov/credits-deductions/credits-for-new-clean-vehicles-purchased-in-2023-or-after"
  ];
  const wasteSources=[
    "https://www.epa.gov/recycle/electronics-donation-and-recycling",
    "https://www.epa.gov/sustainable-management-food/composting",
    "https://www.epa.gov/recycle/composting-home",
    "https://recycleright.org",
    "https://www.lawnstarter.com/blog/lawn-care-2/composting-101-how-to-start-your-first-compost-pile/",
    "https://www.epa.gov/smm/energy-recovery-combustion-municipal-solid-waste-msw",
    "https://www.epa.gov/smm/sustainable-materials-management-non-hazardous-materials-and-waste-management-hierarchy",
    "https://www.energy.gov/eere/buildings/energy-starr",
    "https://www.epa.gov/recycle/reducing-and-reusing-basics"
  ];
  const ledSources=[
    "https://www.inspirecleanenergy.com/blog/sustainable-living/led-vs-regular-lights",
    "https://www.energystar.gov/products/light_bulbs/learn-about-led-lighting"
  ];
  const assets=[
    "https://hub.arcgis.com/datasets/1612d351695b467eba75fdf82c10884f/explore",
    "https://www.cleanpng.com/png-renewable-energy-solar-energy-leaf-renewable-resou-7189403/",
    "https://www.treehugger.com/thmb/naVuekeUWT-HsmYE1LietPFGCJI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/wind-turbine-generator-on-house-roof-90967703-b9619befbf954726ae92dfb6154711f2.jpg",
    "https://www.bls.gov/opub/btn/volume-12/images/electric-vehicles-main-image.jpg",
    "https://www.salterspiralstair.com/wp-content/uploads/2021/11/opening-image-1.jpg",
    "https://en.wikipedia.org/wiki/File:Recycle001.svg",
    "https://amazingarchitecture.com/articles/how-to-make-your-home-more-energy-efficient-and-futuristic",
    "https://storage.googleapis.com/kx-live-ih/images/concept_image_of_green_fuel_tank_i.2e16d0ba.fill-800x450.jpg",
    "https://www.cnet.com/a/img/resize/bbcdbdb37048b08b6a0b14975c9ea5fc4041b7f5/hub/2022/10/10/f2ff9ef7-f016-459d-b88a-a8a68270c315/solar-gettyimages-525206743.jpg?auto=webp&fit=crop&height=1200&width=1200",
    "https://www.flaticon.com/free-icon/led-bulb_899422",
    "https://renewablepedia.com/wp-content/uploads/geothermal-energy-1-300x200.jpg",
    "https://cdn.thewirecutter.com/wp-content/media/2024/02/smartledlightbulbs-2048px-07782-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=980&dpr=2"

  ];
  return(<>
    <h1>Works Cited</h1>
    <div classname='content'>
      {/* <h2 href = 'https://drive.google.com/file/d/1Tpmt1L-KdeBobpTXHE_LaydE_HSHLC8p/view?usp=sharing'>Sources</h2> */}
      <div id='sources'>
        <br></br>
          <Accordion title='General Information'> 
          {sources.map((source) => (
            <div>
          <li><a href={source} target="_blank" rel="noopener noreferrer">
          {source}</a>
          </li><br/>
          </div>
          ))}
          </Accordion>

          <Accordion title='Alternative Energy Information'> 
          {propSources.map((source) => (
            <div>
          <li><a href={source} target="_blank" rel="noopener noreferrer">
          {source}</a>
          </li><br/>
          </div>
          ))}
          </Accordion>

          <Accordion title='Vehicle Information'> 
          {vehicleSources.map((source) => (
            <div>
          <li><a href={source} target="_blank" rel="noopener noreferrer">
          {source}</a>
          </li><br/>
          </div>
          ))}
          </Accordion>

          <Accordion title='Waste Information'> 
          {wasteSources.map((source) => (
            <div>
          <li><a href={source} target="_blank" rel="noopener noreferrer">
          {source}</a>
          </li><br/>
          </div>
          ))}
          </Accordion>

          <Accordion title='LED Information'> 
          {ledSources.map((source) => (
            <div>
          <li><a href={source} target="_blank" rel="noopener noreferrer">
          {source}</a>
          </li><br/>
          </div>
          ))}
          </Accordion>

          <Accordion title='Assets'> 
          {assets.map((source) => (
            <div>
          <li><a href={source} target="_blank" rel="noopener noreferrer">
          {source}</a>
          </li><br/>
          </div>
          ))}
          </Accordion>


        <Accordion title='Webmaster Documentation'>
          <a
            target = '_blank'
            href = 'https://drive.google.com/file/d/1zOIInsBcFuZbA2Dx0APlY-H2t6GUBu4n/view?usp=sharing'
            rel="noopener noreferrer"
            >
            Webmaster Documentation
          </a><br/>
        </Accordion>
        <br></br>

      </div>
    </div>
  </>);

}