import React from "react";

import styles from "./index.module.scss";

const Button = ({ alt, href, type, text, extraClasses = "", secondary = false, ternary = false }) => {
    const { 
        button, buttonInner, secondaryButton, secondaryButtonInner, ternaryButton, ternaryButtonInner 
    } = styles;

    if (type && typeof type !== "undefined") {
        return (
            <button className={`${ ternary ? ternaryButton : secondary ? secondaryButton : button } ${ extraClasses }`} type={type}>
                <div className={ ternary ? ternaryButtonInner : secondary ? secondaryButtonInner : buttonInner }></div>
                <span>{ text }</span>
            </button>
        );
    } else {
        return (
            <a 
                className={`${ ternary ? ternaryButton : secondary ? secondaryButton : button} ${ extraClasses }`} 
                alt={ alt } 
                href={ href }
            >
                <div className={ ternary ? ternaryButtonInner : secondary ? secondaryButtonInner : buttonInner }></div>
                <span>{ text }</span>
            </a>
        );
    }
};

export default Button;