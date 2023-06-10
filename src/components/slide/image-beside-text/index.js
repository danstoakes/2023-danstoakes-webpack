import React from "react";

import Slide from "..";

import styles from "./index.module.scss";

const ImageBesideText = ({ backgroundImage, image, text, secondText, imageFirst = true }) => {
    const { section, sectionFlipped, sectionNoBackground, sectionText } = styles;

    return (
        <Slide 
            backgroundImage={ backgroundImage } 
            extraClasses={`${ section } ${ !imageFirst ? sectionFlipped : "" } ${ !backgroundImage ? sectionNoBackground : "" }`}
        >
            <img src={ image }></img>
            <div className={ sectionText }>
                { text }
            </div>
        </Slide>
    );
};

export default ImageBesideText;