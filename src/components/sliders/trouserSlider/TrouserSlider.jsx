import React from "react";
import "../SimpleSlider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import T1 from "../../../assets/product/trousers/t1.jpg";
import T2 from "../../../assets/product/trousers/t2.jpg";
import T3 from "../../../assets/product/trousers/t3.jpg";
import T4 from "../../../assets/product/trousers/t4.jpg";

export default function TrouserSlider() {
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
        <img className="img_slide" src={T1} alt="product" />
      </div>
      <div className="block_silder">
        <img className="img_slide" src={T2} alt="product" />
      </div>
      <div className="block_silder">
        <img className="img_slide" src={T3} alt="product" />
      </div>
      <div className="block_silder">
        <img className="img_slide" src={T4} alt="product" />
      </div>
    </Slider>
  );
}
