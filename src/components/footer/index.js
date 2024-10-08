import React from "react";

import HeroTrace from "../svg";
import SocialIcons from "../social-icons";

import styles from "./index.module.scss";

const Footer = () => {
    const { footer, footerSVG } = styles;

    const currentYear = new Date().getFullYear();

    return (
        <footer className={footer}>
            <SocialIcons />
            <p>© {currentYear} Dan Stoakes. All Rights Reserved.</p>
            <HeroTrace extraClasses={footerSVG} />
        </footer>
    );
};

export default Footer;