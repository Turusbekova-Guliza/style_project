import React from "react";
import "../SimpleSlider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sk1 from "../../../assets/product/skirts/sk1.jpg";
import Sk2 from "../../../assets/product/skirts/sk2.jpg";
import Sk3 from "../../../assets/product/skirts/sk3.jpg";
import Sk4 from "../../../assets/product/skirts/sk4.jpg";

export default function SkirtSlider() {
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
        <img className="img_slide" src={Sk1} alt="product" />
      </div>
      <div className="block_silder">
        <img className="img_slide" src={Sk2} alt="product" />
      </div>
      <div className="block_silder">
        <img className="img_slide" src={Sk3} alt="product" />
      </div>
      <div className="block_silder">
        <img className="img_slide" src={Sk4} alt="product" />
      </div>
    </Slider>
  );
}
