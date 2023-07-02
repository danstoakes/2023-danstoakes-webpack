import React from "react";

import Slide from "..";

import styles from "./index.module.scss";

import Slider from "react-slick";
import VerticalSlider from "../../icon-slider/vertical";

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
                    <VerticalSlider />
                </div>
            </div>
        </Slide>
    );
};

export default Hero;