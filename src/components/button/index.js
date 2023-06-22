import React from "react";

import styles from "./index.module.scss";

const Button = ({ alt, href, text, secondary = false }) => {
    const { button, buttonInner, secondaryButton, secondaryButtonInner } = styles;

    return (
        <a 
            className={ secondary ? secondaryButton : button } 
            alt={ alt } 
            href={ href }
        >
            <div className={ secondary ? secondaryButtonInner : buttonInner }></div>
            <span>{ text }</span>
        </a>
    );
};

export default Button;