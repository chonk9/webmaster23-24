import React from 'react';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';

export default function CleanSolutions() {
  return(<>
    <h1>Clean Solutions</h1>,
      <div className = "content">
        <h1 className = "atHomeCS">At Home Solutions</h1>
        <h2 className = "headerCS">What you can do at home</h2 >
        <br />
        <h className="descriptionCS">
                    There are many ways you can create a world of clean energy! For one, you can turn lights off when you 
                    aren't using them. You can also not waste water, and not turn on appliances if you don't need to.
        </h>
        <h1 className = "atHomeCS">Solutions </h1>
        <h2 className = "headerCS">What you can do at home</h2 >
        <br />
        <h className="descriptionCS">
                    There are many ways you can create a world of clean energy! For one, you can turn lights off when you 
                    aren't using them. You can also not waste water, and not turn on appliances if you don't need to.
        </h>
      </div>

    < Footer />
  </>);

}