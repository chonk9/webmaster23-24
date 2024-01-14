import React, { useEffect, useRef } from 'react';
import '../ComponentStyles/sunAnimation.css';

export default function SunAnimation(props) {
    const container = useRef(null);

    useEffect(() => {
        const centerX = 5;
        const centerY = 5;

        const rayDist = 2.5;

        setInterval(() => {
            if (!container.current) { // Don't run on other pages
                return;
            }

            let rayLength = parseFloat(getComputedStyle(document.querySelector('.sun-animation')).getPropertyValue('--ray-length'));
            
            let rays = document.querySelectorAll('.ray');
            rays.forEach((ray, rayI) => {
                let angle = (rayI / rays.length + 1 / (2 * rays.length)) * 2 * Math.PI;
                
                ray.setAttribute('x1', centerX + rayDist * Math.cos(angle));
                ray.setAttribute('y1', centerY + rayDist * Math.sin(angle));
                ray.setAttribute('x2', centerX + (rayDist + rayLength) * Math.cos(angle));
                ray.setAttribute('y2', centerY + (rayDist + rayLength) * Math.sin(angle));
            });
        }, 10);
    }, []);

    return (<div className="sun-animation-container" ref={container} style={props.style}>
        <svg className="sun-animation" viewBox="0 0 10 10">
            <circle cx="5" cy="5" r="1.7" fill="yellow" strokeWidth="0.07" stroke="black"></circle>
            <g className="rays">
                <line className="ray" stroke="black" strokeWidth="0.07"></line>
                <line className="ray" stroke="black" strokeWidth="0.07"></line>
                <line className="ray" stroke="black" strokeWidth="0.07"></line>
                <line className="ray" stroke="black" strokeWidth="0.07"></line>
                <line className="ray" stroke="black" strokeWidth="0.07"></line>
                <line className="ray" stroke="black" strokeWidth="0.07"></line>
                <line className="ray" stroke="black" strokeWidth="0.07"></line>
                <line className="ray" stroke="black" strokeWidth="0.07"></line>
            </g>
        </svg>
    </div>)
}