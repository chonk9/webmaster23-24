import React, { useEffect } from "react";
import "../ComponentStyles/textWrap.css";

export default function TextWrap(props) {
    let wrappedEltStyle = { float: props.wrappedSide, overflow: "auto" };

    if (props.wrappedSide === "right") {
        wrappedEltStyle.marginLeft = "1vw";
    } else {
        wrappedEltStyle.marginRight = "1vw";
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
