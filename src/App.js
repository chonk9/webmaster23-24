import './App.css';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import Home from './Pages/Home';
import CleanSolutionsHome from './Pages/CleanSolutionsHome';
import TaxIncentives from './Pages/TaxIncentives';
import AboutUs from './Pages/AboutUs';
import CleanSolutionsVehicles from './Pages/CleanSolutionsVehicles';
import CleanSolutionsWaste from './Pages/CleanSolutionsWaste';
import Sources from './Pages/Sources';
import SolarPower from './Pages/SolarPower'
import WindPower from './Pages/WindPower'
import GeothermalPower from './Pages/GeothermalPower'
import {Route, Routes} from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (  
    <>
      <Navbar />
      <div className = "container">
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/clean-solutions-home" element = {< CleanSolutionsHome />} />
          <Route path = "/clean-solutions-vehicles" element = {< CleanSolutionsVehicles />} />
          <Route path = "/clean-solutions-waste" element = {< CleanSolutionsWaste />} />
          <Route path = "/tax-incentives" element = {< TaxIncentives />} />
          <Route path = "/about-us" element = {<AboutUs />} />
          <Route path = "/sources" element = {<Sources />} />
          <Route path = "/clean-solutions/solar" element = {<SolarPower/>}/>
          <Route path = "/clean-solutions/wind" element = {<WindPower/>}/>
          <Route path = "/clean-solutions/geothermal" element = {<GeothermalPower/>}/>
        </Routes> 
      </div>

      <Footer />
    </>
  )
}

export default App;
