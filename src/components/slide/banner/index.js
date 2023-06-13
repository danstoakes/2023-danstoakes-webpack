import React from "react";
import { Fade } from "react-awesome-reveal";

import Slide from "..";

import styles from "./index.module.scss";

const Banner = ({ backgroundImage, text, hasForm = false }) => {
    const { section, sectionContent, sectionContentWrapper } = styles;

    return (
        <Slide
            backgroundImage={ backgroundImage } 
            extraClasses={`${ section }`}
        >
            <Fade direction="bottom" duration={ 500 }>
                <div className={ sectionContentWrapper }>
                    <div className={ sectionContent }>
                        { text }
                    </div>
                </div>
            </Fade>
        </Slide>
    );
};

export default Banner;