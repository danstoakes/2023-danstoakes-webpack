import React from "react";

import Slide from "..";

import styles from "./index.module.scss";
import IconSlider from "../../icon-slider";

const TextWithIconSlider = ({ text, fragment, imageFirst = true }) => {
    const { section, sectionText } = styles;

    return (
        <Slide
            extraClasses={`${ section } ${ !imageFirst ? sectionFlipped : "" }`}
            fragment={fragment}
        >
            <div className={ sectionText }>
                { text }
            </div>
            <IconSlider />
        </Slide>
    );
};

export default TextWithIconSlider;