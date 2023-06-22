import React from "react";

import styles from "./index.module.scss";

const ButtonGroup = ({ children }) => {
    const { buttonGroup } = styles;

    return (
        <div className={ buttonGroup }>
            { children }
        </div>
    );
};

export default ButtonGroup;