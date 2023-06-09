import React from "react";

import styles from "./index.module.scss";

const Nav = () => {
    const { nav } = styles;

    return (
        <nav className={nav}>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#tech">Tech</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Nav;