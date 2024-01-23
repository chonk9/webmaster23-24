import React from 'react'
import Map from '../Components/map';

export default function TaxIncentives() {
  return(<>
    <h1>Tax Incentives</h1>
    <div>
      <h2 className="page-subheading">National Level</h2>
      <p>At the national level, there are plenty of tax incentives for adding green energy systems to your home. For one, homeowners can save up to
        $3,200 annually on taxes for energy efficient upgrades (through 2032). If you choose to upgrade to heat pump technology, you can 
        save up to $2,000 (30% of cost) on said upgrade. You can also save $1,200 (30% of cost) on other improvements including but not limited to windows, insulation, 
        water heaters, AC systems, and electric panel upgrades. You can claim these credits through&nbsp;
        <a target='_blank' href='https://www.irs.gov/pub/irs-pdf/f5695.pdf' rel='noreferrer'>IRS Form 5695</a>.
      </p>
    </div>

    <div>
      <h2 className="page-subheading">State Level</h2>
      <p>
        Click on a state/territory to see the tax incentives!
        <Map/>
      </p>
    </div>
  </>);
}
