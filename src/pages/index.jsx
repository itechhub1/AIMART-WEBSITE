import React from "react";

import Card from "../components/cards";
import Propertices from "./propertices";
import Footer from './footer'

const header = () => {
  return (
    <>
      <header>
        <div className=" text-white flex flex-col justify-center items-center  h-screen">
          <div className=" mb-64 max-w-6xl w-full ">
            <div className="grid-2 ">
            <div className="w-full">
              <h1 className=" font-extrabold text-2xl sm:text-6xl ">
                Your dream home{" "}
              </h1>
              <p className="font-medium text-6xl sm:text-4xl mb-4">
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
      <div className=" mx-20 my-32 flex flex-col justify-center items-center">
        <div className=" w-full">
          <h1 className="font-medium text-3xl text-center mb-8">
            Your trusted real estate company
          </h1>
          <div className="grid-3" style={{ border: 0 }}>
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>

      {/* propertices */}
      <div className="flex flex-col justify-center items-center bg-blue-100 p-16">
        <h1 className="text-blue-900 mb-4 font-bold text-3xl text-center">
          {" "}
          Affordable Propertices
        </h1>
        <div className="">
          <div className="w-full">
            <Propertices />
          </div>
        </div>
      </div>

      <div className="">
       <Footer/>
      </div>
    </>
  );
};

export default header;
