import React, { useEffect } from "react";
import "../ComponentStyles/textWrap.css";

export default function TextWrap(props) {
    let wrappedEltStyle = { float: props.wrappedSide, overflow: "auto" };

    if (props.wrappedSide.toLowerCase() === "right") {
        wrappedEltStyle.marginLeft = "1.5vw";
    } else {
        wrappedEltStyle.marginRight = "1.5vw";
    }

    return (
        <div className="text-wrap-container">
            <div className="wrapped-elt" style={wrappedEltStyle} data-wrap-direction={props.wrappedSide}>
                {props.wrappedElt}
            </div>
            {props.textElt}
            <div style={{ clear: "both" }}></div>
        </div>
    );
}
