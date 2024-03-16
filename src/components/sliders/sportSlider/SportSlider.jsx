import React from "react";
import "../SimpleSlider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sp1 from "../../../assets/product/sports/sp1.jpg";
import Sp2 from "../../../assets/product/sports/sp2.jpg";
import Sp3 from "../../../assets/product/sports/sp3.jpg";
import Sp4 from "../../../assets/product/sports/sp4.jpg";
import Sp5 from "../../../assets/product/sports/sp5.jpg";
import Sp6 from "../../../assets/product/sports/sp6.jpg";

export default function JacketSlider() {
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
        <img className="img_slide" src={Sp1} alt="product" />
      </div>
      <div className="block_silder">
        <img className="img_slide" src={Sp2} alt="product" />
      </div>
      <div className="block_silder">
        <img className="img_slide" src={Sp3} alt="product" />
      </div>
      <div className="block_silder">
        <img className="img_slide" src={Sp4} alt="product" />
      </div>
      <div className="block_silder">
        <img className="img_slide" src={Sp5} alt="product" />
      </div>
      <div className="block_silder">
        <img className="img_slide" src={Sp6} alt="product" />
      </div>
    </Slider>
  );
}
