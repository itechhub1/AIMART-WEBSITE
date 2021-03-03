import React from "react";
import { services } from "../constants/mock";
import SingleServices from "../components/singleServices";

const Services = () => {
  const renderServices = () => {
    return services.map((service) => <SingleServices services={service} />);
  };

  return (
    <>
      <div className="flex items-center h-auto">
        <h1 className="sm:text-5xl text-lg text-black font-bold m-2 ">Services</h1>
        <div className="grid-3 flex w-auto text-xs sm:text-lg">
          <input
            type="button"
            value="Farm Estate"
            className=" hover:bg-blue-800 hover:text-white font-mono rounded-lg text-blue-900  "
          />
          <input
            type="button"
            value="Real Estate"
            className=" hover:bg-blue-800 hover:text-white font-mono rounded-lg text-blue-900 mx-2 sm:mx-0 "
          />
          <input
            type="button"
            value="A-vest"
            className=" hover:bg-blue-800 hover:text-white font-mono rounded-lg text-blue-900 "
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mx-8 p-12 my-8">
        <div className=" max-w-6xl w-full">
          <div className="grid-3 w-full ">{renderServices()}</div>
        </div>
      </div>
    </>
  );
};

export default Services;
