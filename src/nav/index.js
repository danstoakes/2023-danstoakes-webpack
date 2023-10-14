import React, { useState } from "react";

import styles from "./index.module.scss";

const Nav = ({ onOpen, navOpen }) => {
    const {
        desktopNav,
        hamburgerIcon,
        hamburgerIconLine,
        hamburgerIconOpen,
        navContainer
    } = styles;

    const toggleNav = () => {
        onOpen();
    }

    // The mobile nav is located in App.js
    return (
        <div className={navContainer}>
            <div className={`${hamburgerIcon} ${navOpen ? hamburgerIconOpen : ''}`} onClick={toggleNav}>
                <div className={hamburgerIconLine}></div>
                <div className={hamburgerIconLine}></div>
            </div>
            <SwipableArea isOpen={navOpen} onOpen={toggleNav} />
            <nav className={desktopNav}>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#tech">Tech</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#extra">Extra</a></li>
                </ul>
            </nav>
        </div>
    );
};

const SwipableArea = ({ isOpen, onOpen }) => {
    const { mobileNavSwipeArea, mobileNavSwipeAreaOpen } = styles;

    const [startX, setStartX] = useState(null);
    const [startY, setStartY] = useState(null);
    const [swiping, setSwiping] = useState(false);

    const handleTouchStart = (e) => {
        const touch = e.touches[0];

        setStartX(touch.clientX);
        setStartY(touch.clientY);
        setSwiping(false);
    };

    const handleTouchMove = (e) => {
        if (!startX || swiping)
            return;

        const touch = e.touches[0];
        const deltaX = touch.clientX - startX;
        const deltaY = touch.clientY - startY;
        const minDistance = 50;

        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minDistance) {
            setSwiping(true);

            if (deltaX > 0 && isOpen) {
                onOpen();
            } else if (deltaX < 0 && !isOpen) {
                onOpen();
            }
        }
    };

    const handleTouchEnd = (e) => {
        if (!swiping && isOpen)
            onOpen();

        setStartX(null);
        setStartY(null);
        setSwiping(false);
    };

    return (
        <div
            className={`${mobileNavSwipeArea} ${isOpen ? mobileNavSwipeAreaOpen : ''}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        ></div>
    );
};

export default Nav;