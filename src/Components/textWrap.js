import React, { useEffect } from "react";
import "../ComponentStyles/textWrap.css";

export default function TextWrap(props) {
    let wrappedEltStyle = { float: props.wrappedSide, overflow: "auto" };

    if (props.wrappedSide === "right") {
        wrappedEltStyle.marginLeft = "2.5vw";
    } else {
        wrappedEltStyle.marginRight = "2.5vw";
    }

    return (
        <>
            <div className="wrapped-elt" style={wrappedEltStyle}>
                {props.wrappedElt}
            </div>
            {props.textElt}
            <div style={{ clear: "both" }}></div>
        </>
    );
}
