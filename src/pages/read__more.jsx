import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { estatesIndex } from "../constants/mock";
import parser from "react-html-parser";

const Read__more = () => {
  const [state, setstate] = useState(null);
  const { id } = useParams();
  const estateDetails = (id) => {
    const foundEl = estatesIndex.find((el) => el.id === parseInt(id));

    if (foundEl) {
      return (
        <div className="">
          <h1 className="font-bold text-black text-lg sm:text-5xl p-2">
            {foundEl.title}
          </h1>
          <div className=" flex justify-center h-auto ">
            <div className=" max-w-6xl w-full bg-white p-4 sm:p-16">
              <div className="grid-2">
                <div className=" text-gray-600 leading-loose font-mono">
                  {foundEl.descriptions}
                </div>
                <img
                  src={foundEl.image}
                  alt="estate Images"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>

          {/* properties category */}
          <div className=" sm:p-8 sm:px-8 my-8">
            <h1 className="text-2xl font-bold text-black text-center">
              {foundEl.sub_details.title}
            </h1>
            <div className="w-full text-gray-700 my-8">
              <div className=" p-4  leading-loose">
                <div className="flex flex-col justify-center items-center">
                  <div className=" max-w-6xl w-full">
                    <p className=" leading-loose font-light text-gray-600 p-2">
                      <h1 className="text-xl font-extrabold text-black ">
                        {foundEl.sub_details.sub_title.title1}
                      </h1>
                      <p> {parser(foundEl.full_desc)}</p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      {estateDetails(id)}

      <div className=" p-8 px-8 my-8">
        <h1 className="text-2xl font-bold text-black text-center">
          Installment Plans
        </h1>
        <div className="grid-3 w-full text-gray-700 my-8">
          <div className=" flex flex-col justify-center items-center p-4 shadow-lg leading-loose bg-white">
            <h1 className="text-xl font-extrabold text-black ">
              Not Too Young
            </h1>
            <p className=" leading-loose font-light text-gray-500 text-sm sm:p-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              inventore et sint dignissimos dolorem esse nulla corrupti
              voluptatem totam alias dolorum dicta nemo, ut, quis qui,
              temporibus assumenda voluptatum sapiente. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Sunt inventore et sint
            </p>

            <button
              type="submit"
              className="bg-blue-100 border border-blue-900 text-blue-900 p   hover:bg-orange-500 hover:text-white font-bold my-4 rounded-lg"
            >
              Subscribe Now
            </button>
          </div>
          <div className=" flex flex-col justify-center items-center p-4 shadow-lg leading-loose bg-white">
            <h1 className="text-xl font-extrabold text-black ">Kolo Quarter</h1>
            <p className=" leading-loose font-light text-gray-500 text-sm sm:p-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              inventore et sint dignissimos dolorem esse nulla corrupti
              voluptatem totam alias dolorum dicta nemo, ut, quis qui,
              temporibus assumenda voluptatum sapiente. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Sunt inventore et sint
            </p>
            <button
              type="submit"
              className="bg-blue-100 border border-blue-900 text-blue-900 p   hover:bg-orange-500 hover:text-white font-bold my-4 rounded-lg"
            >
              Subscribe Now
            </button>
          </div>
          <div className=" flex flex-col justify-center items-center p-4 shadow-lg leading-loose bg-white">
            <h1 className="text-xl font-extrabold text-black ">Legacy</h1>
            <p className=" leading-loose font-light text-gray-500 text-sm sm:p-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              inventore et sint dignissimos dolorem esse nulla corrupti
              voluptatem totam alias dolorum dicta nemo, ut, quis qui,
              temporibus assumenda voluptatum sapiente. Lorem ipsum dolor sit
            </p>
            <button
              type="submit"
              className="bg-blue-100 border border-blue-900 text-blue-900 p   hover:bg-orange-500 hover:text-white font-bold my-4 rounded-lg"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Read__more;
