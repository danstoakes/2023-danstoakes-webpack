import React from "react";
import Slider from "react-slick";

import styles from "./index.module.scss";

import shopify from "../../assets/images/logos/shopify.png";
import laravel from "../../assets/images/logos/laravel.png";
import wordpress from "../../assets/images/logos/wordpress.png";
import contentful from "../../assets/images/logos/contentful.png";
import react from "../../assets/images/logos/react.png";
import gatsby from "../../assets/images/logos/gatsby.png";

const IconSlider = () => {
    const { slider, sliderWrapper } = styles;

    var settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        arrow: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        className: slider,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <div className={ sliderWrapper }>
            <Slider {...settings}>
                <img src={ shopify } />
                <img src={ laravel } />
                <img src={ wordpress } />
                <img src={ contentful } />
                <img src={ react } />
                <img src={ gatsby } />
            </Slider>
        </div>
    );
};

export default IconSlider;