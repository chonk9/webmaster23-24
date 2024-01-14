import './App.css';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import Home from './Pages/Home';
import CleanSolutions from './Pages/CleanSolutions';
import TaxIncentives from './Pages/TaxIncentives';
import AboutUs from './Pages/AboutUs';
import {Route, Routes} from "react-router-dom";

function App() {
  return (  
    <>
      <Navbar />
      <div className = "container">
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/clean-solutions" element = {<CleanSolutions />} />
          <Route path = "/tax-incentives" element = {<TaxIncentives />} />
          <Route path = "/about-us" element = {<AboutUs />} />
        </Routes> 
      </div>

      <Footer />
    </>
  )
}

export default App;
