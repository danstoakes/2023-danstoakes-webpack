import React, { useState, useEffect, useRef } from 'react';
import { Fade } from "react-awesome-reveal";

import getHeaderHeight, { getPaddingHeight } from '../../../lib/header-height';

import Slide from "..";

import styles from "./index.module.scss";

const ImageBesideText = ({ 
    backgroundImage, image, imageAlt, imageAltHidden, text, fragment, secondImage = null, secondImageAlt = null, secondImageAltHidden = false, secondText = null, imageFirst = true, buttons = null
}) => {
    const {
        section,
        sectionScrollable,
        sectionScrollableBackground,
        sectionScrollableNoBackground,
        sectionFlipped, 
        sectionNoBackground, 
        sectionText, 
        sectionImage, 
        sectionTextWrapper, 
        sectionImageHidden,
        sectionBlurred
    } = styles;

    const sectionRef = useRef(null);
    const textOneRef = useRef(null);
    const textTwoRef = useRef(null);

    const [hideBlur, setHideBlur] = useState(true);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 1200) {
            const handleScroll = () => {
                const threshold = 300;
                const sectionScrollTop = sectionRef.current.getBoundingClientRect().top - getHeaderHeight();
                // Change the image being displayed if the user scrolls enough
                setScrolled(sectionScrollTop < 0 && Math.abs(sectionScrollTop, threshold) > threshold);
    
                // Stop the body scroll on the first paragraph if the user is scrolling slowly
                if (!document.body.style.overflow && sectionScrollTop <= 0 && sectionScrollTop >= -20) {
                    document.body.style = 'overflow: hidden;';
                    setTimeout(() => {
                        document.body.style = 'overflow: scroll;';
                    }, 150);
                }
    
                const textOneScrollTop = textOneRef.current.getBoundingClientRect().top - getHeaderHeight() - getPaddingHeight();
                const textTwoScrollTop = textTwoRef.current.getBoundingClientRect().top - getHeaderHeight() - getPaddingHeight();
                // Hide the blur effects at the top/bottom of screen if the user isn't viewing the block
                setHideBlur(textOneScrollTop > 0 && textTwoScrollTop > 0 || textTwoScrollTop <= 0);
            };
      
            if (textTwoRef && typeof textTwoRef !== "undefined" && textTwoRef.current && typeof textTwoRef.current !== "undefined")
                window.addEventListener("scroll", handleScroll);
    
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, []);

    const FadeWrapper = ({ direction, duration, scrollable, reversed, children }) => {
        if (direction == "left" && reversed)
            direction = "right";
        else if (direction == "right" && reversed)
            direction = "left";

        if (scrollable)
            return children;

        return (
            <Fade direction={ direction } duration={ duration } triggerOnce={ true }>
                { children }
            </Fade>
        );
    }

    return (
        <Slide
            backgroundImage={ backgroundImage } 
            extraClasses={`
                ${ section } 
                ${ !imageFirst ? sectionFlipped : "" } 
                ${ !backgroundImage ? sectionNoBackground : "" }
                ${ secondImage && secondText ? sectionScrollable : "" }
                ${ backgroundImage && (secondImage && secondText) ? sectionScrollableBackground : "" }
                ${ !backgroundImage && (secondImage && secondText) ? sectionScrollableNoBackground : "" }
            `}
            fragment={fragment}
            reference={ sectionRef }
        >
            <FadeWrapper direction="left" durection={ 1000 } scrollable={ secondImage && secondText } reversed={ !imageFirst }>
                <div className={ sectionImage }>
                    <img className={ scrolled ? sectionImageHidden : "" } src={ image } alt={ imageAlt }></img>
                    {imageAlt && !imageAltHidden && <span className={ scrolled ? sectionImageHidden : "" }>{ imageAlt }</span>}
                    {secondImage && (
                        <>
                            <img className={ scrolled ? "" : sectionImageHidden } src={ secondImage } alt={ secondImageAlt } />
                            {secondImageAlt && !secondImageAltHidden && <span className={ scrolled ? "" : sectionImageHidden }>{ secondImageAlt }</span>}
                        </>
                    )}
                </div>
            </FadeWrapper>
            <FadeWrapper direction="right" durection={ 1000 } scrollable={ secondImage && secondText } reversed={ !imageFirst }>
                <div className={`${sectionTextWrapper} ${!hideBlur && !backgroundImage ? sectionBlurred : ''}`}>
                    <div className={ sectionText } ref={ textOneRef }>
                        { text }
                        {!secondText && buttons}
                    </div>
                    {secondText && (
                        <div className={ sectionText } ref={ textTwoRef }>
                            { secondText }
                            { buttons }
                        </div>
                    )}
                </div>
            </FadeWrapper>
        </Slide>
    );
};

export default ImageBesideText;