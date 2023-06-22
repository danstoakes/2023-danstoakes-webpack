import React from "react";

import styles from "./index.module.scss";

const Button = ({ alt, href, text, secondary = false, ternary = false }) => {
    const { 
        button, buttonInner, secondaryButton, secondaryButtonInner, ternaryButton, ternaryButtonInner 
    } = styles;

    return (
        <a 
            className={ ternary ? ternaryButton : secondary ? secondaryButton : button } 
            alt={ alt } 
            href={ href }
        >
            <div className={ ternary ? ternaryButtonInner : secondary ? secondaryButtonInner : buttonInner }></div>
            <span>{ text }</span>
        </a>
    );
};

export default Button;