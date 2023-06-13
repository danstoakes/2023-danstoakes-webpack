import React from "react";
import { Fade } from "react-awesome-reveal";

import Slide from "..";
import ImageBesideText from "../image-beside-text";

import styles from "./index.module.scss";
import IconSlider from "../../icon-slider";

const TextWithIconSlider = ({ image, text, secondText, imageFirst = true }) => {
    const { section, sectionText } = styles;

    return (
        <Slide
            extraClasses={`${ section } ${ !imageFirst ? sectionFlipped : "" }`}
        >
            <div className={ sectionText }>
                { text }
            </div>
            <IconSlider />
        </Slide>
    );
};

export default TextWithIconSlider;