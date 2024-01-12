import React, { useEffect, useRef } from 'react';
import leaf from '../Images/leaf.png'

export default function LeafReveal(props) {
    const container = useRef(null);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            if (!container.current) { // Don't run on other pages
                return;
            }

            let startY = container.current.offsetTop - 20;
            
            let progress = 0;
            let totalScroll = 700; // Amount to scroll until finished animation
            let scrollAmount = Math.max(window.scrollY - startY, 0); // Amount scrolled since start of animation

            if (scrollAmount >= 0) {
                progress = Math.min(scrollAmount / totalScroll, 1);
            }

            if (progress < 1) {
                container.current.style.setProperty('--down-scroll', scrollAmount + 'px');
            }

            container.current.style.setProperty('--progress', progress);
        });
    }, []);

    return (<div className="leaf-reveal" ref={container}>
        <div className="leaf-reveal-content">
            {props.content()}
        </div>
        <img className="leaf-img" src={leaf} />
    </div>);
}