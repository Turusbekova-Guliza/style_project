import React from "react";
import "../SimpleSlider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sh1 from "../../../assets/product/shirts/sh1.jpg";
import Sh2 from "../../../assets/product/shirts/sh2.jpg";
import Sh3 from "../../../assets/product/shirts/sh3.jpg";
import Sh4 from "../../../assets/product/shirts/sh4.jpg";

export default function ShirtSlider() {
  var settings = {
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
        <img className="img_slide" src={Sh1} alt="product" />
      </div>
      <div className="block_silder">
        <img className="img_slide" src={Sh2} alt="product" />
      </div>
      <div className="block_silder">
        <img className="img_slide" src={Sh3} alt="product" />
      </div>
      <div className="block_silder">
        <img className="img_slide" src={Sh4} alt="product" />
      </div>
    </Slider>
  );
}
