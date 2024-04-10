import React from 'react';
import { Link } from "react-router-dom";
import TextWrap from '../Components/textWrap.js';



export default function Error404() {
  return (<>
    <h1>Error - Page not found</h1>
    <div className="content">
      <div>
        <div className="solution">
          <TextWrap wrappedSide="left" wrappedElt={<>
          </>} textElt={<>
            <br/>
            <br/>
            <h2 style={{width: 'fit-content', margin: 'auto', marginBottom: '2rem',color:'black'}}>The page you were looking for was not found.</h2>
            <br/>
            <br/>
            <Link to="/"><b>Back to Home</b></Link>
          
          </>}/>
        </div>

      </div>
    </div>

  </>);
}