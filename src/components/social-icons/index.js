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
                    <a href='https://github.com/danstoakes' aria-label='The link to my GitHub portfolio.'>
                        <img src={GitHub} alt="GitHub logo" />
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/dan-stoakes/' aria-label='The link to my LinkedIn profile.'>
                        <img src={LinkedIn} alt="LinkedIn logo" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SocialIcons;