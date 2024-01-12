import React from 'react'
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';
import LeafReveal from '../Components/leafReveal';

export default function Home() {
  function FunFact() {
    return (<>
      <h1>Did you know this?</h1>
      This is interesting. This is interesting. This is interesting. This is interesting. This is interesting. This is interesting. This is interesting. This is interesting. This is interesting. This is interesting. This is interesting. This is interesting. This is interesting. This is interesting. This is interesting. This is interesting. This is interesting.
    </>)
  }

  return (<>
    <h1>Welcome to Green Guardians!</h1>
    <LeafReveal content={FunFact}/>
    text<br />text<br />text<br />text<br />text<br />text<br />text<br />text<br />text<br />text<br />text<br />text<br />text<br />text<br />text<br />text<br />text<br />text<br />text<br />text<br />text<br />text<br />text<br />text<br />text<br />text<br />text<br />text<br />text<br />text<br />text<br />text<br />text<br />text<br />text<br />text<br />
  </>);
}