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
import LED from './Pages/LED'
import Star from './Pages/EnergyStar'
import Error from './Pages/404'
import {Route, Routes} from "react-router-dom";
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  const { pathname } = useLocation();
  let setDropdownRef = useRef(() => {});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (  
    <>
      <Navbar setDropdownRef={setDropdownRef} />
      <div className = "container">
        <Routes>
          <Route path = "/" element = {<Home setDropdownRef={setDropdownRef} />} />
          <Route path = "/clean-solutions/home" element = {< CleanSolutionsHome />} />
          <Route path = "/clean-solutions/vehicles" element = {< CleanSolutionsVehicles />} />
          <Route path = "/clean-solutions/waste" element = {< CleanSolutionsWaste />} />
          <Route path = "/tax-incentives" element = {< TaxIncentives />} />
          <Route path = "/about-us" element = {<AboutUs />} />
          <Route path = "/sources" element = {<Sources />} />
          <Route path = "/clean-solutions/solar" element = {<SolarPower/>}/>
          <Route path = "/clean-solutions/wind" element = {<WindPower/>}/>
          <Route path = "/clean-solutions/geothermal" element = {<GeothermalPower/>}/>
          <Route path = "/clean-solutions/LED" element = {<LED/>}/>
          <Route path = "/EnergyStar" element = {<Star/>}/>
          <Route path = "/404" element = {<Error/>}/>
          <Route path="*"element={<Error />}/>
        </Routes> 
      </div>

      <Footer />
    </>
  )
}

export default App;
