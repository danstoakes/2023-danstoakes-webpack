import React from "react";

import Nav from "../../nav";

import styles from "./index.module.scss";

const Header = () => {
    const { header, logo } = styles;

    return (
        <header className={ header }>
            <a href="/" className={ logo }>danstoakes<span>.</span>com</a>
            <Nav />
        </header>
    );
};

export default Header;