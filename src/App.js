import './App.css';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import Home from './Pages/Home';
import CleanSolutionsHome from './Pages/CleanSolutionsHome';
import TaxIncentives from './Pages/TaxIncentives';
import AboutUs from './Pages/AboutUs';
import CleanSolutionsVehicles from './Pages/CleanSolutionsVehicles';
import CleanSolutionsWaste from './Pages/CleanSolutionsWaste';
import {Route, Routes} from "react-router-dom";

function App() {
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
        </Routes> 
      </div>

      <Footer />
    </>
  )
}

export default App;
