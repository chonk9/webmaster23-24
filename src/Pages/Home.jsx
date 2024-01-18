import React, { useEffect } from "react";
import LeafReveal from "../Components/leafReveal";
// import TextWrap from "../Components/textWrap";

export default function Home() {
    useEffect(() => {
        // scroll to the top of page, fixes bug where switching to page retains scroll position
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <h1>Welcome to Green Guardians!</h1>
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
        </>
    );
}
