import React from 'react';
import { Link } from "react-router-dom";
import TextWrap from '../Components/textWrap.js';



export default function CleanSolutionsHome() {
  return (<>
    <h1>404-Page not found</h1>
    <div className="content">
      <div>
        <div className="solution">
          <TextWrap wrappedSide="left" wrappedElt={<>
          </>} textElt={<>
            <p>The page you were looking for was not found.</p>
            <Link to="/"><b>Back to Home</b></Link>
          
          </>}/>
        </div>

      </div>
    </div>

  </>);
}