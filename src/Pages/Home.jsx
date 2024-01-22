import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LeafReveal from "../Components/leafReveal";
import environmentalHouse from "../Images/environmentalHouse.jpg";
import TextWrap from "../Components/textWrap";
// import TextWrap from "../Components/textWrap";

export default function Home() {
    useEffect(() => {
        // scroll to the top of page, fixes bug where switching to page retains scroll position
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="home-container">
            <h1>Welcome to Green Guardians!</h1>
            <TextWrap wrappedSide="left" wrappedElt={
                <img src={environmentalHouse} className="left-side-image" />
            } textElt={<>
                <span class="side-heading">Clean Solutions</span>
                <p>
                    Here at Green Guardians, our mission is to help you make your life <span className="fun-bold">sustainable to the Earth</span> in a way that's <span className="fun-bold">sustainable to your finances</span>.
                </p>
                <p>
                    You probably don't realize how many green options there are for your house and even your cars!
                </p>
                <Link to='/clean-solutions'><button style={{marginTop: '1rem'}}>Learn about our clean solutions</button></Link>
            </>}/>

            <LeafReveal
                content={
                    <>
                        <h2>Did you know this?</h2>
                        78% of marine mammals are at risk of choking on plastic.
                        interesting. This is interesting. This is interesting.
                        This is interesting. This is interesting. This is
                        interesting. This is interesting. This is interesting.
                        This is interesting. This is interesting. This is
                        interesting. This is interesting. This is interesting.
                        This is interesting. This is interesting.
                    </>
                }
            />

            <TextWrap wrappedSide="right" wrappedElt={
                <img src={environmentalHouse} className="right-side-image" />
            } textElt={
                <span style={{fontSize: '4rem'}}>[placeholder]</span>
            }/>
        </div>
    );
}
