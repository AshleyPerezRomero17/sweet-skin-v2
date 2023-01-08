import React from "react";
import Slider from "react-slick";

export default function SlideShow() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1, 
    arrows: true, 
    autoplay: true
    

  };
  return (
    <Slider {...settings}>
        <div>
            <img className="slide" src="/assets/img/1.png" alt="woman"/>
        </div>
        <div>          
            <img className="slide" src="/assets/img/2.png" alt="woman"/>
        </div>
        <div>
            <img className="slide" src="/assets/img/3.png" alt="woman"/>
        </div>
        <div>       
            <img className="slide" src="/assets/img/4.png" alt="woman"/>
        </div>
    </Slider>
  );
}