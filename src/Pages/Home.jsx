import React from 'react'
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';
import LeafReveal from '../Components/leafReveal';
import TextWrap from '../Components/textWrap';

export default function Home() {
  return (<>
    <h1>Welcome to Green Guardians!</h1>
    <LeafReveal content={<>
      <h2>Did you know this?</h2>
      This is interesting. This is interesting. This is interesting. This is interesting. This is interesting. This is interesting. This is interesting. This is interesting. This is interesting. This is interesting. This is interesting. This is interesting. This is interesting. This is interesting. This is interesting. This is interesting. This is interesting.
    </>}/>
    
    <h2>You can make a difference!</h2>
    <p>[Insert some info]</p>
    <p>[Insert some info]</p>
    <p>[Insert some info]</p>
    <p>[Insert some info]</p>
    <p>[Insert some info]</p>
    <p>[Insert some info]</p>
    <p>[Insert some info]</p>
    <p>[Insert some info]</p>
    <p>[Insert some info]</p>
    <p>[Insert some info]</p>
    <p>[Insert some info]</p>
  </>);
}