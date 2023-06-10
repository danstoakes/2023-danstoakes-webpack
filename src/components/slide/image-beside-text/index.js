import React from "react";
import { Fade } from "react-awesome-reveal";

import Slide from "..";

import styles from "./index.module.scss";

const ImageBesideText = ({ backgroundImage, image, text, secondText, imageFirst = true }) => {
    const { section, sectionFlipped, sectionNoBackground, sectionText } = styles;

    return (
        <Slide
            backgroundImage={ backgroundImage } 
            extraClasses={`${ section } ${ !imageFirst ? sectionFlipped : "" } ${ !backgroundImage ? sectionNoBackground : "" }`}
        >
            <Fade direction={ imageFirst ? "left" : "right" } duration={ 500 }>
                <img src={ image }></img>
            </Fade>
            <Fade direction={ imageFirst ? "right" : "left" } duration={ 500 }>
                <div className={ sectionText } data-aos="zoom-out-left">
                    { text }
                </div>
            </Fade>
        </Slide>
    );
};

export default ImageBesideText;