import React from "react";
import "../SimpleSlider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import B1 from "../../../assets/product/blouses/b1.jpg";
import B2 from "../../../assets/product/blouses/b2.jpg";

export default function BlouseSlider() {
  var settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings} className="slider">
      <div className="block_silder">
        <img className="img_slide" src={B1} alt="product" />
      </div>
      <div className="block_silder">
        <img className="img_slide" src={B2} alt="product" />
      </div>
    </Slider>
  );
}
