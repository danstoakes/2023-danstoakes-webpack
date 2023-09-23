import React from "react";

import GitHub from "../../assets/images/social-icons/github-icon.png";
import LinkedIn from "../../assets/images/social-icons/linkedin-icon.png";

import styles from "./index.module.scss";

const SocialIcons = () => {
    const { iconBar } = styles;

    return (
        <div className={iconBar}>
            <ul>
                <li>
                    <a href=''>
                        <img src={GitHub} />
                    </a>
                </li>
                <li>
                    <a href=''>
                        <img src={LinkedIn} />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SocialIcons;