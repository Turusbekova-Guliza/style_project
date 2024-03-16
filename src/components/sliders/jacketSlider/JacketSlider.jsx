import React from "react";
import "../SimpleSlider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import J1 from "../../../assets/product/jackets/j1.jpg";
import J2 from "../../../assets/product/jackets/j2.jpg";

export default function JacketSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings} className="slider">
      <div className="block_silder">
        <img className="img_slide" src={J1} alt="product" />
      </div>
      <div className="block_silder">
        <img className="img_slide" src={J2} alt="product" />
      </div>
    </Slider>
  );
}
