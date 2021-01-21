import React from "react";

import SingleServices from "../../components/singleServices";
import { connect } from "react-redux";
import Loading from "../../components/loading";
import { Link } from "react-router-dom";

const Houses = ({ houses }) => {
  const renderServices = () => {
    if (!houses) {
      return <Loading />;
    }
    return houses.map((prop) => <SingleServices services={prop} />);
  };

  return (
    <>
      <h1 className="sm:text-2xl text-lg text-black font-bold ml-4 mr-4">
          Available Houses
        </h1>
      <div className="flex items-center h-auto m-2">
       
        <div className=" flex justify-evenly items-center  text-xs sm:text-lg ">
        <Link
            to="/services"
            className=" hover:bg-blue-800 hover:text-white bg-white  rounded-lg  border  mx-4 text-blue-900 px-4 sm:mx-4  "
          >
            All properies
          </Link>
          <Link
            to="/land"
            className=" hover:bg-blue-800 hover:text-white bg-white  rounded-lg  border  mx-4 text-blue-900 px-4 sm:mx-4  "
          >
            Land
          </Link>
          <Link
            to="/houses"
            className=" hover:bg-blue-800 hover:text-white bg-white   border   rounded-lg text-blue-900 px-4 "
          >
            Houses
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center m-8">
        <div className=" max-w-6xl w-full">
          <div className="grid-3 w-full ">{renderServices()}</div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    houses: state.properties.house,
  };
};

export default connect(mapStateToProps, null)(Houses);
