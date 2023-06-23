import React from "react";

import Slide from "..";

import styles from "./index.module.scss";

const Hero = ({ backgroundImage, title, content }) => {
    const { section, sectionContent, sectionContentWrapper } = styles;

    return (
        <Slide
            backgroundImage={ backgroundImage } 
            extraClasses={`${ section }`}
        >
            <div className={ sectionContentWrapper }>
                <div className={ sectionContent }>
                    <h1>{ title }</h1>
                    <p>{ content }</p>
                </div>
            </div>
        </Slide>
    );
};

export default Hero;