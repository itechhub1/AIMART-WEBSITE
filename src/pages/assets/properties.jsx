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
          // <div className="card" key={id}>
          //         <div className="img-card">
          //           <Link to={`${url}/${name}`} title={name}>
          //             <img
          //               src={image}
          //               alt="luxury real estate property"
          //               className="img-fluid"
          //             />
          //           </Link>
          //         </div>
          //         <div className="card-content pl-3 pr-3 pt-4 pb-3">
          //           <div className="d-flex justify-content-start">
          //             <Button btn_property="true">{type}</Button>
          //           </div>
          //           <div className="text-center pt-2 pb-3">
          //             <h3>{name}</h3>
          //             <p>
          //               <i className="fas fa-map-marker-alt pr-1"></i>
          //               <span>{location}</span>
          //             </p>
          //             <h5>&#8358;{price}</h5>
          //           </div>

          //           <Link
          //             to={`${url}/${name}`}
          //             className="btn btn-outline-primary btn-block pro-link"
          //           >
          //             Read More{" "}
          //           </Link>
          //         </div>
          //       </div>
          //     );
          //   })}

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
  const breakPoints = [ 
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }]

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
