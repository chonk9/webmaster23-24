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
                <span className="side-heading">Clean Solutions</span>
                <p>
                    Here at Green Guardians, our mission is to help you make your life <span className="fun-bold">sustainable for the Earth</span> in a way that's <span className="fun-bold">sustainable for your finances</span>.
                </p>
                <p>
                    You probably don't realize how many green options there are for your house, cars, and even your waste!
                </p>
                <Link to='/clean-solutions-home'><button style={{marginTop: '1rem'}}>Learn about our clean solutions</button></Link>
            </>}/>

            <LeafReveal
                content={
                    <>
                        <h2>Did you know this?</h2>
                        <p>
                            All US States have many incentives encouraging the use of green energy systems!
                        </p>
                        <Link to='/tax-incentives'><button style={{display: 'block', margin: 'auto'}}>See your state's Tax Incentives</button></Link>
                    </>
                }
            />

            <TextWrap wrappedSide="right" wrappedElt={
                <img src={environmentalHouse} className="right-side-image" />
            } textElt={<>
                <span className="side-heading">Getting Started</span>
                <p>
                    One of the biggest sources of hesitation for people when planning home green energy initiaves is <span className="fun-bold">the cost</span>.
                </p>
                <p>
                    In reality, you don't need to empty your wallet to make cost-effective changes to your house. <span className="fun-bold">Get started today</span> by learning about your choices.
                </p>
            </>}/>
        </div>
    );
}
