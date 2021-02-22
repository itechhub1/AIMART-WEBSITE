import React from "react";

import "./properties.css";
import Carousel from "react-elastic-carousel";

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
        key={idx}
          className="bg-white shadow-lg mx-2"
          onClick={() => history.push(`/details/${ppt._id}`)}
        >
          <div className=" relative">
            <img
            className="transform transition  hover:scale-125 duration-150 "
              src={ppt.featured_photo}
              alt={ppt.description}
              style={{ width: "100%", height: 400, objectFit: "cover" }}
            />
            <p className=" absolute bg-green-900 text-white p top-0 bottom-0 h-10 font-bold">
              {ppt.payment_status}
            </p>
          </div>
          <div className="p-2">
            <h1 className="font-bold text-black text-xl pt-2">{ppt.name}</h1>
            <div className="flex item-center py-4">
              <img
                src="https://img.icons8.com/fluent/48/000000/maps.png"
                className="w-6 h-6"
                alt=""
              />
              <p className="sm:font-bold  text-black ">{ppt.address}</p>
            </div>
            <p className="pt-2 font-black">₦{ppt.price.full}</p>
            <p className="text-lg text-gray-800 pt-2">
              {ppt.no_of_plots.full}sqm
            </p>
            <p
              className=" bg-orange-100 border border-orange-800 text-orange-800 px-4 font-bold w-auto text-center mt-4"
              style={{ width: "45%" }}
            >
              20 Left
            </p>
          </div>
        </div>
      ))
      .slice(0, 8);
  };

  return (
    <Carousel
      itemsToShow={window.innerWidth <= 700 ? 1 : 4}
      enableAutoPlay
      transitionMs={500}
      autoPlaySpeed={3000}
    >
      {renderCarouselItem()}
    </Carousel>
  );

  /* return (<Carousel itemsToShow={3} enableAutoPlay transitionMs={500}>
     {renderCarouselItem()}
  </Carousel>) */
};

const mapStateToProps = (state) => {
  return {
    properties: state.properties.properties,
  };
};

export default connect(mapStateToProps, {})(Estate);
