import React from "react";

import styles from "./index.module.scss";

const Slide = ({ children, backgroundImage = "", extraClasses = "" }) => {
    const { section } = styles;
  
    const style = backgroundImage
        ? { backgroundImage: `url(${backgroundImage})` }
        : null;
  
    return (
        <section className={`${ section } ${ extraClasses }`} style={ style }>
            { children }
        </section>
    );
};
  
export default Slide;