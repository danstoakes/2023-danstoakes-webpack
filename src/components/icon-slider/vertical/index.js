import React from "react";
import Slider from "react-slick";

import one from "../../../assets/images/logos-small/1.png";
import two from "../../../assets/images/logos-small/2.png";
import three from "../../../assets/images/logos-small/3.png";
import four from "../../../assets/images/logos-small/4.png";
import five from "../../../assets/images/logos-small/5.png";
import six from "../../../assets/images/logos-small/6.png";
import seven from "../../../assets/images/logos-small/7.png";
import eight from "../../../assets/images/logos-small/8.png";
import nine from "../../../assets/images/logos-small/9.png";
import ten from "../../../assets/images/logos-small/10.png";
import eleven from "../../../assets/images/logos-small/11.png";
import twelve from "../../../assets/images/logos-small/12.png";
import thirteen from "../../../assets/images/logos-small/13.png";
import fourteen from "../../../assets/images/logos-small/14.png";
import fifteen from "../../../assets/images/logos-small/15.png";
import sixteen from "../../../assets/images/logos-small/16.png";
import seventeen from "../../../assets/images/logos-small/17.png";
import eighteen from "../../../assets/images/logos-small/18.png";
import nineteen from "../../../assets/images/logos-small/19.png";

import styles from "./index.module.scss";

const VerticalSlider = ({ }) => {
    const { slider, sliderWrapper } = styles;

    var settings = {
        verticalSwiping: true,
        vertical: true,
        autoplay: true,
        autoplaySpeed: 1000,
        arrow: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: -1,
        className: slider,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <div className={ sliderWrapper }>
            <Slider {...settings}>
                <img src={ one } />
                <img src={ two } />
                <img src={ three } />
                <img src={ four } />
                <img src={ five } />
                <img src={ six } />
                <img src={ seven } />
                <img src={ eight } />
                <img src={ nine } />
                <img src={ ten } />
                <img src={ eleven } />
                <img src={ twelve } />
                <img src={ thirteen } />
                <img src={ fourteen } />
                <img src={ fifteen } />
                <img src={ sixteen } />
                <img src={ seventeen } />
                <img src={ eighteen } />
                <img src={ nineteen } />
            </Slider>
        </div>
    );
};

export default VerticalSlider;