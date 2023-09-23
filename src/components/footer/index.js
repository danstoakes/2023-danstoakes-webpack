import React from "react";

import HeroTrace from "../../assets/images/hero-trace.svg";
import SocialIcons from "../social-icons";

import styles from "./index.module.scss";

const Footer = () => {
    const { footer, footerSVG } = styles;

    const currentYear = new Date().getFullYear();

    return (
        <footer className={footer}>
            <SocialIcons />
            <p>© {currentYear} Dan Stoakes. All Rights Reserved.</p>
            <img className={footerSVG} src={HeroTrace} alt="My SVG" />
        </footer>
    );
};

export default Footer;