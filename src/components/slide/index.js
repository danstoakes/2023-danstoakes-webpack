import React from "react";

import styles from "./index.module.scss";

const Slide = ({ children, backgroundImage = "", extraClasses = "", reference = null }) => {
    const { section } = styles;
  
    const style = backgroundImage
        ? { backgroundImage: `url(${backgroundImage})` }
        : null;
  
    return (
        <section className={`${ section } ${ extraClasses }`} style={ style } ref={ reference }>
            { children }
        </section>
    );
};
  
export default Slide;