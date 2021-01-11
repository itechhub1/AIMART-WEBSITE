import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './propertices.css'

const estate = () => {
  return (
    <Carousel autoPlay className="carosel" >
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
        <p className="legend">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, fugiat.</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
        <p className="legend">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, fugiat.</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
        <p className="legend">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, fugiat.</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
        <p className="legend">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, fugiat.</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
        <p className="legend">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, fugiat.</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" />
        <p className="legend">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, fugiat.</p>
      </div>
      
      
    </Carousel>
  );
};

export default estate;
