import React from "react";
import "./Sliderr.css";
import { useSlider } from "../Context/SliderContext.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Sliderr = () => {
  const { slider } = useSlider();

  return (
      <Carousel autoPlay interval="10000" transitionTime="1000" infiniteLoop>
        {slider &&
          slider.map((sliders) => (
            <div>
              <img className="carouselimage" src={sliders.image} alt="" />
              <div className="slidercontent col-lg-3 col-12">
                <span className="slidertitle">{sliders.title}</span>
                <h2 className="sliderdesc">{sliders.description}</h2>
                <button className="pirmary-btn">SHOP NOW</button>
              </div>
            </div>
          ))}
      </Carousel>
  );
};

export default Sliderr;
