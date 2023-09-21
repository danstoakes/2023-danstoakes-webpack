import React, { useState, useEffect, useRef } from "react";
import { Fade } from "react-awesome-reveal";

import Slide from "..";

import styles from "./index.module.scss";

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
        }, 700);
    }, []);

    return (
        <Slide
            backgroundImage={ backgroundImage } 
            extraClasses={`${ section }`}
        >
            <div className={ sectionContentWrapper }>
                <div className={ sectionContent }>
                    <Fade direction="left" duration={ 1000 }>
                        <h1>{ title }</h1>
                    </Fade>
                    <p className={`${ sectionContentText } ${ typed ? sectionContentTyped : '' }`} ref={ contentRef }>{ content }</p>
                </div>
            </div>
        </Slide>
    );
};

export default Hero;