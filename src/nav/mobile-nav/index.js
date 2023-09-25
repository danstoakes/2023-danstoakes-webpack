import React from "react";

import styles from "./index.module.scss";

const MobileNav = ({ isOpen }) => {
    const { mobileNav, mobileNavOpen } = styles;

    return (
        <nav className={`${mobileNav} ${isOpen ? mobileNavOpen : ''}`}>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#tech">Tech</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#more">More</a></li>
            </ul>
        </nav>
    );
};

export default MobileNav;