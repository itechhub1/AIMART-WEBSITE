import React from "react";

import "./properties.css";
import Carousel from "react-elastic-carousel";
// import Link from 'react-router-dom'

import { connect } from "react-redux";
import history from "../../history";
const Estate = ({ properties }) => {
  console.log("assets", properties);

  if (!properties) {
    return <p>Loading....</p>;
  }

  const renderCarouselItem = () => {
    return properties
      .map((ppt, idx) => (
        <div
          className="cursor-pointer w-full mx-3 rounded-t-lg overflow-hidden shadow hover:shadow-lg transition-transform duration-500 ease-in-out transform hover:-translate-y-1 bg-white relative h-100"
          key={idx}
          onClick={() => history.push(`/details/${ppt._id}`)}
          // style={{height: 320}}
        >
          <div className="overflow-hidden" style={{height: 180, objectFit: "cover"}}>
            <img
              src={ppt.featured_photo}
              alt={ppt.description}
              className="transition-transform duration-500 ease-in-out transform hover:scale-110 w-full h-full"
            />
          </div>
          <div className="p-6">
            <div className="">
              <h3 className="font-bold text-left text-lg text-gray-600">
                {ppt.name}
              </h3>
              <p>
                <svg
                  className="w-6 h-6 mr-1 inline-block text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span>
                  {ppt.address}, {ppt.state}
                </span>
              </p>
              <h4 className="font-bold text-blue-800 text-lg">
                ₦{ppt.price.full}
              </h4>
            </div>

            <span className="text-red-600">20 Left</span>
          </div>
          <span className="absolute top-0 left-0 bg-blue-900 bg-opacity-30 font-semibold text-white py-2 px-4 rounded-r-full uppercase">
            {ppt.type}
          </span>
        </div>
      ))
      .slice(0, 8);
  };

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <Carousel
      enableAutoPlay
      transitionMs={500}
      autoPlaySpeed={4000}
      breakPoints={breakPoints}
    >
      {renderCarouselItem()}
    </Carousel>
  );
};

const mapStateToProps = (state) => {
  return {
    properties: state.properties.properties,
  };
};

export default connect(mapStateToProps, {})(Estate);
