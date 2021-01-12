import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./propertices.css";

import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import slider from "../assets/slider-1.jpg";
import pic5 from "../assets/pic5.jpg";
import pic9 from "../assets/pic9.jpg";

const estate = () => {
  return (
    <Carousel autoPlay className="carosel z-0 " dynamicHeight={true}  >
      <div>
        <img alt="" src={pic1} />
        <p className="legend">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore,
          fugiat.
        </p>
      </div>
      <div>
        <img alt="" src={pic2} />
        <p className="legend">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore,
          fugiat.
        </p>
      </div>
      <div>
        <img alt="" src={pic3} />
        <p className="legend">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore,
          fugiat.
        </p>
      </div>
      <div>
        <img alt="" src={slider} />
        <p className="legend">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore,
          fugiat.
        </p>
      </div>
    
    </Carousel>
  );
};

export default estate;
