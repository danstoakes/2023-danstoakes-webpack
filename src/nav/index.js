import React, { useState } from "react";

import styles from "./index.module.scss";

const Nav = ({ onOpen }) => {
    const {
        desktopNav,
        hamburgerIcon,
        hamburgerIconLine,
        hamburgerIconOpen,
        mobileNav,
        navContainer
    } = styles;

    const [open, setOpen] = useState(false);

    const toggleNav = () => {
        setOpen(!open);

        onOpen(open);
    }

    return (
        <div className={navContainer}>
            <div className={`${hamburgerIcon} ${open ? hamburgerIconOpen : ''}`} onClick={toggleNav}>
                <div className={hamburgerIconLine}></div>
                <div className={hamburgerIconLine}></div>
            </div>
            <SwipableArea isOpen={open} onOpen={toggleNav} />
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

const SwipableArea = ({ isOpen, onOpen }) => {
    const { mobileNavSwipeArea } = styles;

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
            className={mobileNavSwipeArea}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        ></div>
    );
};

export default Nav;