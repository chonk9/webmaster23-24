import React, { useEffect } from "react";
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
                <img src={environmentalHouse} />
            } textElt={
                <span style={{fontSize: '4rem'}}>[placeholder]</span>
            }/>

            <LeafReveal
                content={
                    <>
                        <h2>Did you know this?</h2>
                        This is interesting. This is interesting. This is
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
                <img src={environmentalHouse} />
            } textElt={
                <span style={{fontSize: '4rem'}}>[placeholder]</span>
            }/>
        </div>
    );
}
