import React from 'react'
import Map from '../Components/map';
import Accordion from '../Components/Accordion.js';
import "../ComponentStyles/TaxIncentives.css"

const finIncentive = "Financial Incentive"

const data = [
  {nameOfProgram : "Low Income Home Energy Assistance Program (LIHEAP)", typeCategory : {finIncentive}, incentiveType : "Grant Program", moreInformation : "https://www.benefits.gov/benefit/623"},
  {nameOfProgram : "Residential Energy Efficiency Tax Credit", typeCategory : {finIncentive}, incentiveType : "Personal Tax Credit", moreInformation : "https://www.energystar.gov/about/federal_tax_credits"},
  {nameOfProgram : "Plug-In Electric Drive Vehicle Tax Credit", typeCategory : {finIncentive}, incentiveType : "Personal Tax Credit", moreInformation : "https://www.irs.gov/credits-deductions/credits-for-new-electric-vehicles-purchased-in-2022-or-before"},
  {nameOfProgram : "Previously-Owned Clean Vehicle Tax Credit", typeCategory : {finIncentive}, incentiveType : "Personal Tax Credit", moreInformation : "https://www.irs.gov/credits-deductions/used-clean-vehicle-credit"},
  {nameOfProgram : "Alternative Fuel Vehicle Refueling Property Tax Credit (Personal)", typeCategory : {finIncentive}, incentiveType : "Personal Tax Credit", moreInformation : "https://www.irs.gov/credits-deductions/alternative-fuel-vehicle-refueling-property-credit"},
  {nameOfProgram : "Residential Renewable Energy Tax Credit", typeCategory : {finIncentive}, incentiveType : "Personal Tax Credit", moreInformation : "https://www.irs.gov/credits-deductions/residential-clean-energy-credit"},
  {nameOfProgram : "Residential Energy Conservation Subsidy Exclusion (Personal)", typeCategory : {finIncentive}, incentiveType : "Personal Tax Exemption", moreInformation : "https://www.govinfo.gov/content/pkg/USCODE-2014-title26/pdf/USCODE-2014-title26-subtitleA-chap1-subchapB-partIII-sec136.pdf"},
  {nameOfProgram : "USDA - High Energy Cost Grant Program", typeCategory : {finIncentive}, incentiveType : "Grant Program", moreInformation : "https://www.rd.usda.gov/programs-services/electric-programs/high-energy-cost-grants"},
  {nameOfProgram : "Weatherization Assistance Program (WAP)", typeCategory : {finIncentive}, incentiveType : "Grant Program", moreInformation : "https://www.energy.gov/scep/wap/weatherization-assistance-program"},
  {nameOfProgram : "Energy-Efficient Mortgages", typeCategory : {finIncentive}, incentiveType : "Loan Program", moreInformation : "https://www.energystar.gov/newhomes/mortgage_lending_programs/energy_efficient_mortgages"},
  {nameOfProgram : "Fannie Mae Green Financing – Loan Program", typeCategory : {finIncentive}, incentiveType : "Loan Program", moreInformation : "https://multifamily.fanniemae.com/financing-options/specialty-financing/green-financing/green-financing-loans"},
  {nameOfProgram : "Office of Indian Energy Policy and Programs - Funding Opportunities", typeCategory : {finIncentive}, incentiveType : "Grant Program", moreInformation : "https://www.energy.gov/indianenergy/current-funding-opportunities"},
  {nameOfProgram : "USDA - Rural Energy for America Program (REAP) Loan Guarantees", typeCategory : {finIncentive}, incentiveType : "Loan Program", moreInformation : "https://www.rd.usda.gov/programs-services/energy-programs/rural-energy-america-program-renewable-energy-systems-energy-efficiency-improvement-guaranteed-loans"},
  {nameOfProgram : "USDA - Rural Energy for America Program (REAP) Grants", typeCategory : {finIncentive}, incentiveType : "Grant Program", moreInformation : "https://www.rd.usda.gov/inflation-reduction-act/rural-energy-america-program-reap"},
  {nameOfProgram : "USDA - Rural Energy for America Program (REAP) Energy Audit and Renewable Energy Development Assistance (EA/REDA) Program", typeCategory : {finIncentive}, incentiveType : "Grant Program", moreInformation : "https://www.rd.usda.gov/programs-services/energy-programs/rural-energy-america-program-energy-audit-renewable-energy-development-assistance-grants"}
]

export default function TaxIncentives() {
  return(<>
    <h1>Tax Incentives</h1>
    <div>
      <h2 className="page-subheading">National Level</h2>
      <p>At the national level, there are plenty of tax incentives for adding green energy systems to your home. For one, homeowners can save up to
        $3,200 annually on taxes for energy efficient upgrades (through 2032). If you choose to upgrade to heat pump technology, you can 
        save up to $2,000 (30% of cost) on said upgrade. You can also save $1,200 (30% of cost) on other improvements including but not limited to windows, insulation, 
        water heaters, AC systems, and electric panel upgrades. You can claim these credits through&nbsp;
        <a target='_blank' href='https://www.irs.gov/pub/irs-pdf/f5695.pdf' rel='noreferrer'><b>IRS Form 5695</b></a>.
      </p>
    </div>
    <div class = 'national-table-dropdown'>
      <Accordion title = "National Table Dropdown">
        <div>
          <table className = "nationalTable">
            <thead>
              <tr>
                <th>Name Of Program</th>
                <th>Type/Category</th>
                <th>Incentive Type</th>
                <th className='copium'>More Information</th>
              </tr>
            </thead>
            <tbody>
              {data.map((value, key) => {
                return (
                  <tr key={key}>
                    <td>{value.nameOfProgram}</td>
                    <td>{finIncentive}</td>
                    <td>{value.incentiveType}</td>
                    <td><a href = {value.moreInformation} target="_blank">{value.moreInformation}</a></td>
                    </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Accordion>
    </div>

    <div>
      <h2 className="page-subheading">State Level</h2>
      <p>
        Click on a state/territory to see the green incentives!
      </p>
      <Map/>
    </div>
  </>);
}
