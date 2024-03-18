import React from "react";
import "../SimpleSlider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import D1 from "../../../assets/product/dresses/d1.jpg";
import D2 from "../../../assets/product/dresses/d2.jpg";
import D3 from "../../../assets/product/dresses/d3.jpg";
import D4 from "../../../assets/product/dresses/d4.jpg";
import D5 from "../../../assets/product/dresses/d5.jpg";
import D6 from "../../../assets/product/dresses/d6.jpg";
import D7 from "../../../assets/product/dresses/d7.jpg";
import D8 from "../../../assets/product/dresses/d8.jpg";
import D9 from "../../../assets/product/dresses/d9.jpg";
import D10 from "../../../assets/product/dresses/d10.jpg";
import D11 from "../../../assets/product/dresses/d11.jpg";
import D12 from "../../../assets/product/dresses/d12.jpg";
import D13 from "../../../assets/product/dresses/d13.jpg";
import D14 from "../../../assets/product/dresses/d14.jpg";
import D15 from "../../../assets/product/dresses/d15.jpg";

export default function DressSlider() {
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
        <img className="img_slide" src={D1} alt="product" />
      </div>
      <div className="block_silder">
        <img className="img_slide" src={D2} alt="product" />
      </div>
      <div className="block_silder">
        <img className="img_slide" src={D3} alt="product" />
      </div>
      <div className="block_silder">
        <img className="img_slide" src={D4} alt="product" />
      </div>
      <div className="block_silder">
        <img className="img_slide" src={D5} alt="product" />
      </div>
      <div className="block_silder">
        <img className="img_slide" src={D6} alt="product" />
      </div>
      <div className="block_silder">
        <img className="img_slide" src={D7} alt="product" />
      </div>
      <div className="block_silder">
        <img className="img_slide" src={D8} alt="product" />
      </div>
      <div className="block_silder">
        <img className="img_slide" src={D9} alt="product" />
      </div>
      <div className="block_silder">
        <img className="img_slide" src={D10} alt="product" />
      </div>
      <div className="block_silder">
        <img className="img_slide" src={D11} alt="product" />
      </div>
      <div className="block_silder">
        <img className="img_slide" src={D12} alt="product" />
      </div>
      <div className="block_silder">
        <img className="img_slide" src={D13} alt="product" />
      </div>
      <div className="block_silder">
        <img className="img_slide" src={D14} alt="product" />
      </div>
      <div className="block_silder">
        <img className="img_slide" src={D15} alt="product" />
      </div>
    </Slider>
  );
}
