import React from "react";

import Card from "../components/cards";
import Properties from "./properties";
import Footer from "./footer";
import { estatesIndex } from "../constants/mock";

const header = () => {
  const renderEstate = () => {
    return estatesIndex.map((itm) => <Card item={itm} />);
  };

  return (
    <>
      <header>
        <div className=" text-white flex flex-col justify-center items-center  h-screen">
          <div className=" mb-64 max-w-6xl w-full ">
            <div className=" ml-4 sm:ml-0 grid-2 ">
              <div className="w-full ">
                <h1 className=" font-extrabold text-2xl sm:text-6xl ">
                  Your dream home{" "}
                </h1>
                <p className="font-medium text-xl sm:text-4xl mb-4">
                  Now within reach
                </p>
                <button
                  type="submit"
                  className=" border border-white bg-transparent  px-2 p rounded-lg hover:bg-blue-800 hover:text-white font-bold"
                >
                  Start Here &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* find more */}
      <div className=" p-4 my-32 flex flex-col justify-center items-center">
        <div className=" max-w-6xl w-full">
          <h1 className="font-medium text-3xl text-center mb-8">
            Your trusted real estate company.
          </h1>
          <div className="grid-3">{renderEstate()}</div>
        </div>
      </div>

      {/* properties */}
      <div className="flex flex-col justify-center items-center bg-blue-100 p-16">
        <h1 className="text-blue-900 mb-4 font-bold text-xl sm:text-3xl text-center">
          {" "}
          Affordable Properties
        </h1>
        <Properties />
      </div>

      <div className="">
        <Footer />
      </div>
    </>
  );
};

export default header;
