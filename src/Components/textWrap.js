import React, { useEffect } from 'react';
import '../ComponentStyles/textWrap.css';

export default function TextWrap(props) {
    let wrappedEltStyle = {float: props.wrappedSide};

    if (props.wrappedSide === "right") {
        wrappedEltStyle.marginLeft = '1rem'
    } else {
        wrappedEltStyle.marginRight = '1rem'
    }

    return (<>
        <div class="wrapped-elt" style={wrappedEltStyle}>
            {props.wrappedElt}
        </div>
        {props.textElt}
        <div style={{clear: "both"}}></div>
    </>)
}