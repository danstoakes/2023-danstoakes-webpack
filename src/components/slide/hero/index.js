import React, { useState, useEffect, useRef } from "react";

import Slide from "..";

import styles from "./index.module.scss";

import VerticalSlider from "../../icon-slider/vertical";

const Hero = ({ backgroundImage, title, content }) => {
    const { 
        section, 
        sectionContent, 
        sectionContentText, 
        sectionContentTyped, 
        sectionContentWrapper 
    } = styles;

    const contentRef = useRef(null);

    const [typed, setTyped] = useState(false);

    useEffect(() => {
        const typeContent = () => {
            for (let i = 0; i < content.length; i++) {            
                setTimeout((index) => {
                    contentRef.current.textContent += content[index];

                    // Reset the styling on the final letter
                    if (i == content.length - 1) {
                        setTyped(true);
                        contentRef.current.style.height = 'auto';
                    }
                }, 60 * (i + 1), i);
            }
        };

        setTimeout(() => {
            contentRef.current.style.height = `${contentRef.current.clientHeight}px`;
            contentRef.current.textContent = null;
            contentRef.current.style.opacity = 1;
            typeContent();
        }, 400);
    }, []);

    return (
        <Slide
            backgroundImage={ backgroundImage } 
            extraClasses={`${ section }`}
        >
            <div className={ sectionContentWrapper }>
                <div className={ sectionContent }>
                    <h1>{ title }</h1>
                    <p className={`${ sectionContentText } ${ typed ? sectionContentTyped : '' }`} ref={ contentRef }>{ content }</p>
                    <VerticalSlider />
                </div>
            </div>
        </Slide>
    );
};

export default Hero;