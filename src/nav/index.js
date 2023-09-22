import React, { useState } from "react";

import styles from "./index.module.scss";

const Nav = ({ onOpen }) => {
    const { desktopNav, hamburgerIcon, hamburgerIconLine, hamburgerIconOpen, mobileNav, navContainer } = styles;

    const [open, setOpen] = useState(false);

    const toggleNav = () => {
        setOpen(!open);

        onOpen(open);
    }

    return (
        <div className={navContainer}>
            <div className={`${hamburgerIcon} ${open ? hamburgerIconOpen : null}`} onClick={toggleNav}>
                <div className={hamburgerIconLine}></div>
                <div className={hamburgerIconLine}></div>
            </div>
            <nav className={mobileNav}>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#tech">Tech</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <nav className={desktopNav}>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#tech">Tech</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;